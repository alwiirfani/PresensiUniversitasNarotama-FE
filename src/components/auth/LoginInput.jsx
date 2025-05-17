import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";

const LoginInput = ({
  control,
  name,
  label,
  type = "text",
  placeholder,
  disabled,
  icon,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={"flex text-sm sm:text-base font-medium"}>
            {label} <span>{icon}</span>
          </FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                type={inputType}
                placeholder={placeholder}
                className="placeholder:text-gray-400"
                disabled={disabled}
                {...field}
              />

              {isPassword && (
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                  tabIndex={-1}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              )}
            </div>
          </FormControl>
          <FormMessage className="text-xs text-red-600" />
        </FormItem>
      )}
    />
  );
};

LoginInput.propTypes = {
  control: PropTypes.any,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};
export default LoginInput;
