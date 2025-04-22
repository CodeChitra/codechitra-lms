"use client";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Library } from "lucide-react";
import Link from "next/link";
import React from "react";

function PublicNavbar() {
  const { user } = useUser();
  const userType = user?.publicMetadata?.userType as "student" | "teacher";
  return (
    <nav className="public-navbar">
      <div className="public-navbar__container">
        <div className="public-navbar__search">
          <Link href="/" className="public-navbar__brand">
            CODECHITRA
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/search">
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 group">
              <Library className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden sm:inline">Explore Courses</span>
              <span className="sm:hidden">Search</span>
            </div>
          </Link>
        </div>

        <div className="public-navbar__actions">
          <SignedIn>
            <UserButton
              appearance={{ baseTheme: dark }}
              userProfileUrl={
                userType === "teacher" ? "/teacher/profile" : "/user/profile"
              }
            />
          </SignedIn>
          <SignedOut>
            <Link href="/signin" className="public-navbar__auth-button--login">
              Sign in
            </Link>
            <Link href="/signup" className="public-navbar__auth-button--signup">
              Sign up
            </Link>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}

export default PublicNavbar;
