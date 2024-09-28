"use client";

import React, { useState } from "react";
import parse from "html-react-parser";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { nativeEnum, z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import FormInput from "@/components/FormInput";
import { useRouter } from "next/navigation";

const categories = [
  { value: "react", label: "React" },
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "nextjs", label: "Next.js" },
  { value: "graphql", label: "GraphQL" },
  { value: "mongoose", label: "Mongoose" },
  { value: "mongodb", label: "MongoDB" },
  { value: "expressjs", label: "Express.js" },
  { value: "tailwindcss", label: "Tailwind CSS" },
];

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  category: z.enum([
    "react",
    "javascript",
    "typescript",
    "nextjs",
    "mongoose",
    "mongodb",
    "expressjs",
    "tailwindcss",
  ]),
  // content: z.string().min(20, {
  //   message: "Content must be at least 20 characters.",
  // }),
  imgUrl: z.string().optional(),
  // designation: z
  //   .string()
  //   .min(2, {
  //     message: "Designation must be at least 2 characters.",
  //   })
  //   .optional(),
  // paramName: z.string(),
});

const makeParamName = (title: string) => {
  const param = title
    .toLowerCase()
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, "-");
  return param;
};

const Editor = () => {
  const [value, setValue] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const {
    formState: { errors },
  } = form;
  console.log(errors);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const blogData = {
      title: data.title,
      content: value,
      imgUrl: data.imgUrl || "",
      category: data.category,
      paramName: makeParamName(data.title),
    };
    
    console.log(blogData)

    const res = await fetch("http://localhost:5000/api/blogs/add-blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    }).then((res) => res.json());
   
    console.log('res', res)
    if (res?.success) {
      toast({
        title: "Blog created successfully!",
      });
      form.reset();
      setValue("");
      setImgUrl("");
      router.push(`/blogs/${res.data._id}`);
    }

    if (!(res.success)) {
      toast({
        variant: "destructive",
        title: "Failed to create blog",
        description: res.message,
      });
    }
  }

  return (
    <MaxWidthWrapper className="mb-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormInput control={form.control} name="title" placeholder="Title" />
          <div className="flex items-center gap-20">
            <FormField
              control={form.control}
              name="category"
              render={({ field: { onChange, ...rest } }) => (
                <FormItem>
                  <FormControl>
                    <Select {...rest} onValueChange={onChange}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {/* <SelectLabel>Category</SelectLabel> */}
                          {categories.map((category) => (
                            <SelectItem
                              key={category.value}
                              value={category.value}
                            >
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center gap-5">
              <Button
                type="button"
                className="text-black font-light hover:text-white bg-transparent flex items-center justify-center"
                onClick={() => setOpen((prev) => !prev)}
              >
                Upload Image
              </Button>
            </div>
          </div>

          <ReactQuill
            className="editor ql-container ql-bubble ql-editor ql-editor border border-bray-200 p-0"
            // modules={modules}
            placeholder="Compose..."
            value={value}
            onChange={setValue}
            theme="bubble"
          />

          <Button type="submit" className="w-[200px]">
            Submit
          </Button>
        </form>
      </Form>

      <div>
        {/* <p>{value}</p> */}
        {parse(value)}
      </div>
    </MaxWidthWrapper>
  );
};

export default Editor;

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image", "video", "formula"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];

const modules = {
  toolbar: toolbarOptions,
};
