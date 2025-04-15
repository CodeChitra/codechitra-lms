"use client";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Bell, BookOpen } from "lucide-react";
import Link from "next/link";
import React from "react";

function NonDashboardNavbar() {
  const { user } = useUser();
  const userType = user?.publicMetadata?.userType as "student" | "teacher";
  console.log("UserType: ", user?.publicMetadata?.userType);
  return (
    <nav className="nondashboard-navbar">
      <div className="nondashboard-navbar__container">
        <div className="nondashboard-navbar__search">
          <Link href="/" className="nondashboard-navbar__brand">
            CODECHITRA
          </Link>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Link
                href="/search"
                className="nondashboard-navbar__search-input"
              >
                <span className="hidden sm:inline">Search Courses</span>
                <span className="sm:hidden">Search</span>
              </Link>
              <BookOpen className="nondashboard-navbar__search-icon" />
            </div>
          </div>
        </div>

        <div className="nondashboard-navbar__actions">
          {/* <button className="nondashboard-navbar__notification-button">
            <span className="nondashboard-navbar__notification-indicator"></span>
            <Bell className="nondashboard-navbar__notification-icon" />
          </button> */}

          <SignedIn>
            <UserButton
              appearance={{ baseTheme: dark }}
              userProfileUrl={
                userType === "teacher" ? "/teacher/profile" : "/user/profile"
              }
            />
          </SignedIn>
          <SignedOut>
            <Link
              href="/signin"
              className="nondashboard-navbar__auth-button--login"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="nondashboard-navbar__auth-button--signup"
            >
              Sign up
            </Link>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}

export default NonDashboardNavbar;
