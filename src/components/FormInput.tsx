import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

type PropsType = {
  control: any;
  name: string;
  value?: string;
  label?: string;
  type?: string;
  placeholder: string;
};

const FormInput = ({
  control,
  name,
  label = "",
  type = "text",
  placeholder,
}: PropsType) => {
  return (
    <div>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label && label}</FormLabel>
            <FormControl>
              <Input
                type={type}
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default FormInput;
