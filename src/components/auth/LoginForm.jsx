import React from "react";
import LoginInput from "./LoginInput";
import { Form } from "../ui/form";
import LoginButton from "./LoginButton";
import PropTypes from "prop-types";
import { IdCard, LockKeyhole } from "lucide-react";

const LoginForm = ({ form, isLoading, onSubmit, onError }) => {
  return (
    <Form {...form}>
      <div className="p-8 border border-border rounded-md w-full max-w-md shadow-lg">
        <form
          onSubmit={form.handleSubmit(onSubmit, onError)}
          className="space-y-6">
          <LoginInput
            control={form.control}
            name="id"
            label="NIM / NIP"
            placeholder="12345678"
            disabled={isLoading}
            icon={<IdCard className="h-4 w-4" />}
          />

          <LoginInput
            control={form.control}
            name="password"
            label="Password"
            type="password"
            placeholder="*****"
            disabled={isLoading}
            icon={<LockKeyhole className="h-4 w-4" />}
          />

          <LoginButton isLoading={isLoading}>Login</LoginButton>
        </form>
      </div>
    </Form>
  );
};

LoginForm.propTypes = {
  form: PropTypes.any,
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func,
  onError: PropTypes.func,
};

export default LoginForm;
