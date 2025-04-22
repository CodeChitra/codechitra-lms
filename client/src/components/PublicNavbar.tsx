"use client";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Bell, BookOpen } from "lucide-react";
import Link from "next/link";
import React from "react";

function PublicNavbar() {
  const { user } = useUser();
  const userType = user?.publicMetadata?.userType as "student" | "teacher";
  console.log("UserType: ", user?.publicMetadata?.userType);
  return (
    <nav className="public-navbar">
      <div className="public-navbar__container">
        <div className="public-navbar__search">
          <Link href="/" className="public-navbar__brand">
            CODECHITRA
          </Link>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Link href="/search" className="public-navbar__search-input">
                <span className="hidden sm:inline">Search Courses</span>
                <span className="sm:hidden">Search</span>
              </Link>
              <BookOpen className="public-navbar__search-icon" />
            </div>
          </div>
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
