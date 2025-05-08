import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Toaster } from "../components/ui/sonner";

import { loginAuthMahasiswa } from "@/services/auth/auth-service";
import { titleChange } from "@/services/title-manager";
import LoginForm from "@/components/auth/LoginForm";
import { useAuth } from "@/contexts/AuthContext";

// Login form schema
const loginSchema = z.object({
  id: z
    .string()
    .min(3, { message: "ID minimal 3 karakter" })
    .max(8, { message: "ID maksimal 8 karakter" }),
  password: z.string().min(3, { message: "Password minimal 3 karakter" }),
});

// Login component
const LoginLayout = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // React Hook Form for login
  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      id: "",
      password: "",
    },
  });

  // Handle login form
  const onSubmit = async (data) => {
    let toastId;

    try {
      let response;
      setIsLoading(true);

      toastId = toast.loading("Memproses login...");

      if (data.id.length === 8) {
        response = await loginAuthMahasiswa(data);
      } else if (data.id.length === 5) {
        response;
      } else {
        response;
      }

      toast.success("Login Berhasil", {
        id: toastId,
        duration: 3000,
      });

      login({
        id: response.data.nim,
        nama: response.data.nama,
        role: response.data.role,
        accessToken: response.data.accessToken,
      });

      console.log(response.data);
      console.log(data);

      setIsLoading(false);
      setTimeout(() => navigate("/"), 3000);
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Gagal", {
        id: toastId,
        duration: 3000,
      });

      console.error("Error logging in:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle login form error
  const onError = (errors) => {
    console.error("Form errors:", errors);
    toast.warning("Harap perbaiki error pada form sebelum submit");
  };

  // title
  titleChange("Login - Universitas Narotama");
  return (
    <div className="container w-full min-h-screen flex flex-col justify-center items-center">
      <Toaster position="top-center" richColors />
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <LoginForm
        form={loginForm}
        onSubmit={onSubmit}
        onError={onError}
        isLoading={isLoading}
      />
    </div>
  );
};

export default LoginLayout;
