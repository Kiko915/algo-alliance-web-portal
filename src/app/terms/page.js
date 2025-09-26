"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Shield, AlertTriangle } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2837BD] rounded-full mb-6">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Terms of Service
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Algorithmic Alliance Portal - Last updated: September 25, 2025
          </p>
          <div className="flex justify-center mt-4">
            <Link href="/signup">
              <Button variant="ghost" className="text-[#2837BD] hover:text-[#1e2a9a] hover:bg-[#2837BD]/10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Signup
              </Button>
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 p-8">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            
            {/* Section 1: Acceptance */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2837BD] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white m-0">
                  Acceptance of Terms
                </h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                By accessing and using the Algorithmic Alliance Portal ("the Platform"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            {/* Section 2: Account Registration */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2837BD] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white m-0">
                  Account Registration and Approval
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Account registration is subject to administrative approval. By creating an account, you agree to:
                </p>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300 pl-6">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2837BD] rounded-full mt-2 flex-shrink-0"></span>
                    Provide accurate and complete information during registration
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2837BD] rounded-full mt-2 flex-shrink-0"></span>
                    Maintain the security of your login credentials
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2837BD] rounded-full mt-2 flex-shrink-0"></span>
                    Accept that account approval may take 24-48 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2837BD] rounded-full mt-2 flex-shrink-0"></span>
                    Use the platform only for academic and educational purposes
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3: User Conduct */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2837BD] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white m-0">
                  User Conduct
                </h2>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Prohibited Activities</h4>
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      The following activities are strictly prohibited and may result in immediate account suspension.
                    </p>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 pl-6">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  Sharing or distributing copyrighted materials without permission
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  Engaging in academic dishonesty or plagiarism
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  Harassment, bullying, or discriminatory behavior
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  Attempting to gain unauthorized access to other accounts or systems
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  Posting inappropriate, offensive, or harmful content
                </li>
              </ul>
            </div>

            {/* Section 4: Intellectual Property */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2837BD] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white m-0">
                  Intellectual Property
                </h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                The platform and its original content, features, and functionality are and will remain the exclusive property of Algorithmic Alliance and its licensors. Users retain ownership of their submitted academic work, but grant the platform a license to use, display, and distribute such content for educational purposes.
              </p>
            </div>

            {/* Section 5: Privacy and Data */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2837BD] rounded-full flex items-center justify-center">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white m-0">
                  Privacy and Data Protection
                </h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Your privacy is important to us. Please review our{" "}
                <Link href="/privacy" className="text-[#2837BD] hover:text-[#1e2a9a] font-medium underline underline-offset-2">
                  Privacy Policy
                </Link>{" "}
                to understand how we collect, use, and protect your information. By using this platform, you consent to the practices described in our Privacy Policy.
              </p>
            </div>

            {/* Section 6: Termination */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2837BD] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">6</span>
                </div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white m-0">
                  Account Termination
                </h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                We reserve the right to suspend or terminate your account at any time for violations of these terms or for any other reason we deem appropriate. You may also request account deletion by contacting our administrators.
              </p>
            </div>

            {/* Section 7: Changes to Terms */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2837BD] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">7</span>
                </div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white m-0">
                  Changes to Terms
                </h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or platform notifications. Continued use of the platform after changes constitutes acceptance of the new terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-[#2837BD]/5 dark:bg-[#2837BD]/10 rounded-lg p-6 border border-[#2837BD]/20">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                Questions or Concerns?
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:admin@algorithmicalliance.org" className="text-[#2837BD] hover:text-[#1e2a9a] font-medium underline underline-offset-2">
                  admin@algorithmicalliance.org
                </a>
              </p>
            </div>

          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <Link href="/privacy">
            <Button variant="outline" className="border-[#2837BD] text-[#2837BD] hover:bg-[#2837BD] hover:text-white">
              View Privacy Policy
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-[#2837BD] hover:bg-[#1e2a9a] text-white">
              Back to Registration
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}