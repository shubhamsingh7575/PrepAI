"use client";

import React from "react";
import {
  useAuth,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  FileText,
  GraduationCap,
  LayoutDashboard,
  StarsIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PenBox } from "lucide-react";


const Header = () =>{
  const { isSignedIn } = useAuth();

  return (
    <header
      className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50
    supports-backdrop-filter:bg-background/60"
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="SensAi Logo"
            width={200}
            height={60}
            className="h-12 py-1 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center space-x-2 md:space-x-4">
          {isSignedIn && (
            <>
              <Link href={"/dashboard"}>
                <Button variant="outline">
                  <LayoutDashboard className="h-4 w-4" />
                  <span className="hidden md:block">Industry Insights</span>
                </Button>
              </Link>

              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button>
                    <StarsIcon className="h-4 w-4" />
                    <span className="hidden md:block">Growth Tools</span>
                    <ChevronDown className=" h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href={"/resume"} className="flex items-center gap-2 w-full">
                      <FileText className="h-4 w-4" />
                      <span>Build Resume</span>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link
                      href={"/ai-cover-letter"}
                      className="flex items-center gap-2 w-full"
                    >
                      <PenBox className="h-4 w-4" />
                      Cover Letter
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link href={"/interview"} className="flex items-center gap-2 w-full">
                      <GraduationCap className="h-4 w-4" />
                      Interview Prep
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}

          {!isSignedIn && (
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          )}
          {isSignedIn && (
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier:"font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
