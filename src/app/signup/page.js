"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { KeyRound, GraduationCap, Check, X, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";

const courseOptions = [
  { value: "bscs", label: "BS Computer Science" },
  { value: "bsit", label: "BS Information Technology" },
];

const yearLevelOptions = [
  { value: "1st", label: "1st Year" },
  { value: "2nd", label: "2nd Year" },
  { value: "3rd", label: "3rd Year" },
  { value: "4th", label: "4th Year" },
];

const signupSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().min(1, "Email is required").email("Enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm your password"),
    studentId: z.string().min(1, "Student ID is required"),
    course: z.string().min(1, "Select your course"),
    yearLevel: z.string().min(1, "Select your year level"),
    terms: z.boolean().refine((v) => v === true, {
      message: "You must agree to the Terms and Privacy Policy",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const form = useForm({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      studentId: "",
      course: "",
      yearLevel: "",
      terms: false,
    },
  });

  const passwordValue = form.watch("password");
  const strength = useMemo(() => {
    const v = passwordValue || "";
    const checks = {
      length8: v.length >= 8,
      length12: v.length >= 12,
      lower: /[a-z]/.test(v),
      upper: /[A-Z]/.test(v),
      number: /\d/.test(v),
      symbol: /[^A-Za-z0-9]/.test(v),
    };
    let score = 0;
    if (checks.length8) score++;
    if (checks.length12) score++;
    if (checks.lower && checks.upper) score++;
    if (checks.number) score++;
    if (checks.symbol) score++;
    if (score > 4) score = 4;
    const map = [
      { label: "Weak", color: "bg-red-500", text: "text-red-600" },
      { label: "Weak", color: "bg-red-500", text: "text-red-600" },
      { label: "Fair", color: "bg-amber-500", text: "text-amber-600" },
      { label: "Good", color: "bg-green-500", text: "text-green-600" },
      { label: "Strong", color: "bg-[#2837BD]", text: "text-[#2837BD]" },
    ];
    return { score, label: map[score].label, barColor: map[score].color, textColor: map[score].text, checks };
  }, [passwordValue]);

  const onSubmit = async (values) => {
    // Simulate signup process
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Signup attempt:", values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6">
      <div className="w-full max-w-2xl space-y-8">
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
          <div className="space-y-1">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Join the Alliance
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Create your Algorithmic Alliance Portal account
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500">
              Your application will be reviewed by our admins for approval
            </p>
          </div>
        </div>

        {/* Signup Form */}
        <div className="space-y-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Account Information Section */}
            <div className="space-y-6">
              <div className="border-l-4 border-[#2837BD] pl-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                  <KeyRound className="h-5 w-5 text-[#2837BD]" />
                  Account Information
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Basic account details for login and identification
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your first name"
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
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your last name"
                          className="h-12 text-base border-slate-200 dark:border-slate-700 focus:border-[#2837BD] dark:focus:border-[#2837BD] bg-white dark:bg-slate-900"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

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

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-slate-700 dark:text-slate-300">Password</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Create a password"
                            className="h-12 pr-10 text-base border-slate-200 dark:border-slate-700 focus:border-[#2837BD] dark:focus:border-[#2837BD] bg-white dark:bg-slate-900"
                            {...field}
                          />
                        </FormControl>
                        <button
                          type="button"
                          onClick={() => setShowPassword((v) => !v)}
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>

                      {/* Strength meter */}
                      <div className="mt-2">
                        <div className="flex gap-1" aria-hidden>
                          {[0,1,2,3].map((i) => (
                            <div key={i} className={`h-1.5 flex-1 rounded ${i < strength.score ? strength.barColor : 'bg-slate-200 dark:bg-slate-700'}`}></div>
                          ))}
                        </div>
                        <p className={`mt-2 text-xs font-medium ${strength.textColor}`}>
                          Password strength: {strength.label}
                        </p>
                        <ul className="mt-2 grid grid-cols-2 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
                          <li className="flex items-center gap-1">
                            {strength.checks.length8 ? <Check className="h-3.5 w-3.5 text-green-600" /> : <X className="h-3.5 w-3.5 text-slate-400" />}
                            At least 8 characters
                          </li>
                          <li className="flex items-center gap-1">
                            {strength.checks.length12 ? <Check className="h-3.5 w-3.5 text-green-600" /> : <X className="h-3.5 w-3.5 text-slate-400" />}
                            12+ characters
                          </li>
                          <li className="flex items-center gap-1">
                            {strength.checks.lower && strength.checks.upper ? <Check className="h-3.5 w-3.5 text-green-600" /> : <X className="h-3.5 w-3.5 text-slate-400" />}
                            Upper & lower case
                          </li>
                          <li className="flex items-center gap-1">
                            {strength.checks.number ? <Check className="h-3.5 w-3.5 text-green-600" /> : <X className="h-3.5 w-3.5 text-slate-400" />}
                            A number
                          </li>
                          <li className="flex items-center gap-1">
                            {strength.checks.symbol ? <Check className="h-3.5 w-3.5 text-green-600" /> : <X className="h-3.5 w-3.5 text-slate-400" />}
                            A symbol
                          </li>
                        </ul>
                      </div>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-slate-700 dark:text-slate-300">Confirm Password</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            type={showConfirm ? 'text' : 'password'}
                            placeholder="Confirm your password"
                            className="h-12 pr-10 text-base border-slate-200 dark:border-slate-700 focus:border-[#2837BD] dark:focus:border-[#2837BD] bg-white dark:bg-slate-900"
                            {...field}
                          />
                        </FormControl>
                        <button
                          type="button"
                          onClick={() => setShowConfirm((v) => !v)}
                          aria-label={showConfirm ? 'Hide password' : 'Show password'}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                        >
                          {showConfirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Academic Information Section */}
            <div className="space-y-6">
              <div className="border-l-4 border-[#2837BD] pl-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-[#2837BD]" />
                  Academic Information
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Your academic details for verification and group assignment
                </p>
              </div>

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="studentId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-slate-700 dark:text-slate-300">Student ID Number</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your student ID (e.g., 2021-12345)"
                          className="h-12 text-base border-slate-200 dark:border-slate-700 focus:border-[#2837BD] dark:focus:border-[#2837BD] bg-white dark:bg-slate-900"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="course"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-slate-700 dark:text-slate-300">Course / Program</FormLabel>
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger className="h-12 text-base border-slate-200 dark:border-slate-700 focus:border-[#2837BD] dark:focus:border-[#2837BD] bg-white dark:bg-slate-900">
                            <SelectValue placeholder="Select your course" />
                          </SelectTrigger>
                          <SelectContent>
                            {courseOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="yearLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-slate-700 dark:text-slate-300">Year Level</FormLabel>
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger className="h-12 text-base border-slate-200 dark:border-slate-700 focus:border-[#2837BD] dark:focus:border-[#2837BD] bg-white dark:bg-slate-900">
                            <SelectValue placeholder="Select year level" />
                          </SelectTrigger>
                          <SelectContent>
                            {yearLevelOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Terms and Submit */}
            <div className="space-y-6">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-start space-x-3">
                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <>
                        <input
                          type="checkbox"
                          id="terms"
                          checked={field.value}
                          onChange={field.onChange}
                          className="h-5 w-5 mt-0.5 rounded border-slate-300 text-[#2837BD] focus:ring-[#2837BD] focus:ring-2 focus:ring-offset-1 dark:border-slate-600 dark:bg-slate-700 dark:focus:ring-offset-slate-800"
                        />
                        <div className="flex-1">
                          <Label htmlFor="terms" className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed cursor-pointer block">
                            <span className="font-medium">I agree to the </span>
                            <Button variant="link" className="h-auto p-0 text-sm text-[#2837BD] dark:text-[#2837BD] hover:text-[#1e2a9a] dark:hover:text-[#1e2a9a] font-medium underline-offset-2" asChild>
                              <Link href="/terms" target="_blank" rel="noopener noreferrer">
                                Terms of Service
                              </Link>
                            </Button>
                            <span className="font-medium"> and </span>
                            <Button variant="link" className="h-auto p-0 text-sm text-[#2837BD] dark:text-[#2837BD] hover:text-[#1e2a9a] dark:hover:text-[#1e2a9a] font-medium underline-offset-2" asChild>
                              <Link href="/privacy" target="_blank" rel="noopener noreferrer">
                                Privacy Policy
                              </Link>
                            </Button>
                            <span className="font-medium">.</span>
                          </Label>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                            I understand that my account requires admin approval and may take 24-72 hours to review.
                          </p>
                          {form.formState.errors.terms && (
                            <p className="text-destructive text-sm mt-2">{form.formState.errors.terms.message?.toString()}</p>
                          )}
                        </div>
                      </>
                    )}
                  />
                </div>
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
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </div>
          </form>
          </Form>
        </div>

        {/* Sign in link */}
        <div className="text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Already have an account?{" "}
            <Button variant="link" className="h-auto p-0 text-sm font-semibold text-[#2837BD] dark:text-[#2837BD] hover:text-[#1e2a9a] dark:hover:text-[#1e2a9a]" asChild>
              <Link href="/login">
                Sign in here
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
            Account approval typically takes 24-72 hours
          </p>
        </div>
      </div>
    </div>
  );
}