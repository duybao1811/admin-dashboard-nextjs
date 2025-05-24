"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import SocialLogin from "@/app/(auth)/login/components/SocialLogin";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Label from "@/components/Label/Label";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={"shadow-custom flex flex-col justify-center p-12"}>
      <div className={"flex flex-col items-center justify-center gap-4"}>
        <Image src={"/logo.svg"} width={92} height={92} alt={"logo"} />
        <p className={"text-2xl font-semibold"}>Login</p>
      </div>
      <SocialLogin />
      <div className={"flex items-center gap-3 my-10"}>
        <div className={"h-[1px] bg-stroke flex-1"} />
        Or
        <div className={"h-[1px] bg-stroke flex-1"} />
      </div>
      <div className={"flex flex-col gap-4"}>
        <div>
          <Label htmlFor={"email"}>Email Address</Label>
          <Input
            id={"email"}
            type={"email"}
            placeholder={"example@gmail.com"}
          />
        </div>
        <div>
          <Label htmlFor={"password"}>Password</Label>
          <Input
            id={"password"}
            type={showPassword ? "text" : "password"}
            placeholder={"Enter your password"}
            right={
              <div className={"cursor-pointer"} onClick={toggleShowPassword}>
                {!showPassword ? (
                  <AiFillEyeInvisible className={"text-base"} />
                ) : (
                  <AiFillEye className={"text-base"} />
                )}
              </div>
            }
          />
        </div>
      </div>
      <Button className={"mt-10"}>Login</Button>

      <p className={"mt-10 text-center"}>
        Don’t have account yet?{" "}
        <Link href={"/register"} className={"text-primary"}>
          New Account
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
