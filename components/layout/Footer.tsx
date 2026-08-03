import Link from "next/link";
import { BRAND_NAME } from "@/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background py-8 md:py-12 mt-auto">
      <div className="max-container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-sans font-bold text-base text-white">{BRAND_NAME}</span>
        </div>
        <p className="text-xs text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved. Built for modern businesses.
        </p>
        <div className="flex gap-6">
          <Link href="#privacy" className="text-xs text-muted-foreground hover:text-white transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="#terms" className="text-xs text-muted-foreground hover:text-white transition-colors duration-200">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
