"use client";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import firebase_app from "@/lib/firebase";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { emailValidation } from "@/app/helpers/emailValidation";
import * as yup from "yup";
import toast from "react-hot-toast";
import { RHFInput, RHFInputGroup } from "@/app/components/rhf";
import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";

const loginSchema = yup.object({
  email: emailValidation.required("Email is required"),
  password: yup.string().required("Password is required"),
});

export type loginDto = yup.InferType<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const auth = getAuth(firebase_app);

  const methods = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onsubmit = async ({ email, password }: loginDto) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin/hospitals/announcements");
      toast.success("Login successful.");
    } catch {
      toast.error("Invalid email or password.");
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8 relative z-20">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link href="/" aria-label="logo image">
            <Image
              src="/images/logo.png"
              width={80}
              height={80}
              className="lg:size-20 size-16 mx-auto"
              alt=""
            />
          </Link>
          <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <FormProvider {...methods}>
            <form
              className="space-y-6 bg-white p-6 rounded-xl shadow-lg"
              onSubmit={methods.handleSubmit(onsubmit)}
            >
              <RHFInputGroup label="Email">
                <RHFInput name="email" />
              </RHFInputGroup>

              <RHFInputGroup label="Password">
                <RHFInput name="password" />
              </RHFInputGroup>

              <Button
                type="submit"
                variant="primary"
                isLoading={methods.formState.isSubmitting}
                fullWidth
              >
                Sign In
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>
      <div className="fixed w-full h-full inset-0">
        <Image src="/images/coming-soon-background.jpg" fill alt="" />
        <div className="absolute bg-black/80 inset-0 z-10" />
      </div>
    </>
  );
}
