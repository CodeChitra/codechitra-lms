"use client";
import { SignUp, useUser } from "@clerk/nextjs";
import React from "react";
import { dark } from "@clerk/themes";
import { useSearchParams } from "next/navigation";
function SignUpComponent() {
  const searchParams = useSearchParams();
  const { user } = useUser();

  const isCheckOutPage = searchParams.get("showSignUp") !== null;

  const courseId = searchParams.get("id");

  const signInUrl = isCheckOutPage
    ? `/checkout?step=1&id=${courseId}&showSignUp=false`
    : `/signin`;

  const getRedirectUrl = () => {
    if (isCheckOutPage) {
      return `/checkout?step=2&id=${courseId}&showSignUp=false`;
    }
    const userType = user?.publicMetadata?.userType as string;
    if (userType === "teacher") {
      return "/teacher/courses";
    }
    return "/user/courses";
  };
  return (
    <SignUp
      appearance={{
        baseTheme: dark,
      }}
      signInUrl={signInUrl}
      forceRedirectUrl={getRedirectUrl()}
      routing="hash"
      afterSignOutUrl="/"
    />
  );
}

export default SignUpComponent;
