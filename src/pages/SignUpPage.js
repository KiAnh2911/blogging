import { Button } from "components/button";
import { Field } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "firebase-app/firebase-config";
import { NavLink, useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import AuthenticationPages from "./AuthenticationPages";
import InputPassword from "components/input/InputPassword";
import slugify from "react-slugify";

const schema = yup.object({
  fullname: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .email("Please enter vaild email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters or greater")
    .required("Please enter your password"),
});

const SignUpPage = () => {
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

  const handleSignUp = async (values) => {
    console.log("handleSignUp ~ values:", values);
    if (!isValid) return;
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    await updateProfile(auth.currentUser, { displayName: values.fullname });
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
      username: slugify(values.fullname, { lower: true }),
      createdAt: serverTimestamp(),
    });
    toast.success("Register successfully!!!");
    navgate("/");
  };

  useEffect(() => {
    document.title = "Register Page";
  }, []);

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
        onSubmit={handleSubmit(handleSignUp)}
        autoComplete="off"
      >
        <Field>
          <Label htmlFor="fullname">Full Name</Label>
          <Input
            name="fullname"
            type="text"
            placeholder=" Please enter your fullname"
            control={control}
          />
        </Field>
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
          You already have an account? <NavLink to={"/sign-in"}> Login</NavLink>
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          isLoading={isSubmitting}
          style={{ maxWidth: 300, margin: "0 auto", width: "100%" }}
        >
          Sign Up
        </Button>
      </form>
    </AuthenticationPages>
  );
};

export default SignUpPage;
