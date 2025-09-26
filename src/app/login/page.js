"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  remember: z.boolean().optional().default(false),
});

export default function LoginPage() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "", remember: false },
  });

  const onSubmit = async (values) => {
    // Simulate login process
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Login attempt:", values);
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
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Welcome Back
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Sign in to your Algorithmic Alliance Portal
            </p>
          </div>
        </div>

        {/* Login Form */}
        <div className="space-y-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="h-12 text-base border-slate-200 dark:border-slate-700 focus:border-[#2837BD] dark:focus:border-[#2837BD] bg-white dark:bg-slate-900"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-sm font-medium text-slate-700 dark:text-slate-300">Password</FormLabel>
                      <Button variant="link" className="h-auto p-0 text-sm text-[#2837BD] dark:text-[#2837BD] hover:text-[#1e2a9a] dark:hover:text-[#1e2a9a] font-medium" asChild>
                        <Link href="/forgot-password">Forgot password?</Link>
                      </Button>
                    </div>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        className="h-12 text-base border-slate-200 dark:border-slate-700 focus:border-[#2837BD] dark:focus:border-[#2837BD] bg-white dark:bg-slate-900"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="remember"
                  {...form.register("remember")}
                  className="h-4 w-4 rounded border-slate-300 text-[#2837BD] focus:ring-[#2837BD] dark:border-slate-600 dark:bg-slate-700"
                />
                <Label htmlFor="remember" className="text-sm font-medium cursor-pointer text-slate-700 dark:text-slate-300">
                  Keep me signed in
                </Label>
              </div>

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
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
          </Form>
        </div>

        {/* Sign up link */}
        <div className="text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            New to Algorithmic Alliance?{" "}
            <Button variant="link" className="h-auto p-0 text-sm font-semibold text-[#2837BD] dark:text-[#2837BD] hover:text-[#1e2a9a] dark:hover:text-[#1e2a9a]" asChild>
              <Link href="/signup">
                Create an account
              </Link>
            </Button>
          </p>
        </div>

        {/* Footer */}
        <div className="text-center pt-6">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            © 2025 Algorithmic Alliance. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-600 mt-1">
            Secure • Professional • Trusted
          </p>
        </div>
      </div>
    </div>
  );
}