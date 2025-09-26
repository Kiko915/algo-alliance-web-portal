"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, CheckCircle2 } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const forgotSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
});

export default function ForgotPasswordPage() {
  const [isSent, setIsSent] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const form = useForm({
    resolver: zodResolver(forgotSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (values) => {
    // Simulate sending reset email
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Password reset requested:", values);
    setSubmittedEmail(values.email);
    setIsSent(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6">
      <div className="w-full max-w-lg space-y-8">
        {/* Logo and Branding */}
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <Image
              src="/logo/algoalliance_symbol_black.png"
              alt="Algorithmic Alliance Logo"
              width={80}
              height={80}
              priority
              className="dark:invert"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Reset your password
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Enter your email and we’ll send you a reset link
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {!isSent ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@example.com"
                            className="h-12 pl-10 text-base border-slate-200 dark:border-slate-700 focus:border-[#2837BD] dark:focus:border-[#2837BD] bg-white dark:bg-slate-900"
                            {...field}
                          />
                        </FormControl>
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full h-12 text-base font-semibold bg-[#2837BD] hover:bg-[#1e2a9a] dark:bg-[#2837BD] dark:hover:bg-[#1e2a9a] transition-colors"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending link...
                    </>
                  ) : (
                    "Send reset link"
                  )}
                </Button>

                <div className="text-center">
                  <Button variant="link" className="h-auto p-0 text-sm font-semibold text-[#2837BD] dark:text-[#2837BD] hover:text-[#1e2a9a] dark:hover:text-[#1e2a9a]" asChild>
                    <Link href="/login">Back to login</Link>
                  </Button>
                </div>
              </form>
            </Form>
          ) : (
            <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Check your email</h2>
                  <p className="text-slate-700 dark:text-slate-300">
                    If an account exists for <span className="font-medium">{submittedEmail}</span>, youll receive a password reset link shortly.
                    Be sure to check your spam folder.
                  </p>
                  <div className="pt-2">
                    <Button variant="link" className="h-auto p-0 text-sm font-semibold text-[#2837BD] dark:text-[#2837BD] hover:text-[#1e2a9a] dark:hover:text-[#1e2a9a]" asChild>
                      <Link href="/login">Return to login</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center pt-6">
          <p className="text-xs text-slate-500 dark:text-slate-500">© 2025 Algorithmic Alliance. All rights reserved.</p>
          <p className="text-xs text-slate-400 dark:text-slate-600 mt-1">Secure • Professional • Trusted</p>
        </div>
      </div>
    </div>
  );
}
