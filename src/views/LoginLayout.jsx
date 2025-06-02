import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Toaster } from "../components/ui/sonner";

import {
  loginAuthDosen,
  loginAuthMahasiswa,
} from "@/services/auth/auth-service";
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
  const [error, setError] = useState("");

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
      } else {
        response = await loginAuthDosen(data);
      }

      login({
        id: data.id,
        nama: response.data.nama,
        role: response.data.role,
        accessToken: response.data.accessToken,
      });

      toast.success("Login Berhasil", {
        id: toastId,
        duration: 3000,
      });

      setIsLoading(false);
      setTimeout(() => navigate("/"), 3000);
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || error?.message || "Login Gagal";

      toast.error(errorMessage, {
        id: toastId,
        duration: 5000,
      });

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle login form error
  const onError = (errors) => {
    console.error("Form errors:", errors);
    toast.warning("Harap isi form dengan benar", {
      duration: 3000,
    });
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
        onError={onError || error}
        isLoading={isLoading}
      />

      <div className="flex flex-col w-full items-center mt-4">
        <h2 className="text-xl font-bold">Akun Demo</h2>
        <hr className="w-1/2" />
        <p className="text-base font-semibold text-muted-foreground">
          Login Mahasiswa
        </p>
        <hr className="w-1/4" />
        <p className="text-sm">NIM : 87654321</p>
        <p className="text-sm">Pwd : testing123</p>

        <hr className="w-1/2" />
        <p className="text-base font-semibold text-muted-foreground">
          Login Dosen
        </p>
        <hr className="w-1/4" />
        <p className="text-sm">NIP : 12345</p>
        <p className="text-sm">Pwd : dosen123</p>

        <hr className="w-1/2" />
      </div>
    </div>
  );
};

export default LoginLayout;
