"use client";
import React from "react";
import { SignIn, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useSearchParams } from "next/navigation";
function SignInComponent() {
  const searchParams = useSearchParams();
  const { user } = useUser();

  const isCheckOutPage = searchParams.get("showSignup") !== null;

  const courseId = searchParams.get("id");

  const signUpUrl = isCheckOutPage
    ? `/checkout?step=1&id=${courseId}&showSignUp=true`
    : `/signup`;

  const userType = user?.publicMetadata?.userType as string;
  console.log("User Type: ", userType);
  const getRedirectUrl = () => {
    if (isCheckOutPage) {
      return `/checkout?step=2&id=${courseId}&showSignUp=false`;
    }

    if (userType === "teacher") {
      return "/teacher/courses";
    }
    return "/user/courses";
  };

  return (
    <SignIn
      appearance={{
        baseTheme: dark,
      }}
      signUpUrl={signUpUrl}
      forceRedirectUrl={getRedirectUrl()}
      routing="hash"
      afterSignOutUrl="/"
    />
  );
}

export default SignInComponent;
