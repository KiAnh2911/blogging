import { Button } from "components/button";
import { Field } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import { useAuth } from "contexts/auth-context";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink, useNavigate } from "react-router-dom";
import AuthenticationPages from "./AuthenticationPages";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "firebase-app/firebase-config";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import InputPassword from "components/input/InputPassword";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter vaild email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters or greater")
    .required("Please enter your password"),
});

const SignInPage = () => {
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Login Page";
    if (userInfo?.email) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);
  const navgate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleSignIn = async (values) => {
    if (!isValid) return;
    await signInWithEmailAndPassword(auth, values.email, values.password);
    toast.success("Log in successfully!!!");
    navgate("/");
  };

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, { pauseOnHover: false, delay: 0 });
    }
  }, [errors]);

  return (
    <AuthenticationPages>
      <form
        className="form"
        onSubmit={handleSubmit(handleSignIn)}
        autoComplete="off"
      >
        <Field>
          <Label htmlFor="email">Email Address</Label>
          <Input
            name="email"
            type="email"
            placeholder=" Please enter your email"
            control={control}
          />
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <InputPassword control={control}></InputPassword>
        </Field>
        <div className="have-account">
          You have not had an account?{" "}
          <NavLink to={"/sign-up"}>Register an account</NavLink>
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          isLoading={isSubmitting}
          className="w-full max-w-[300px] mx-auto"
        >
          Log In
        </Button>
      </form>
    </AuthenticationPages>
  );
};

export default SignInPage;
