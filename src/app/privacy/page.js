"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2837BD] rounded-full mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Privacy Policy
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
            
            {/* Introduction */}
            <div className="mb-8">
              <div className="bg-[#2837BD]/5 dark:bg-[#2837BD]/10 rounded-lg p-6 border border-[#2837BD]/20 mb-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Eye className="h-5 w-5 text-[#2837BD]" />
                  Your Privacy Matters
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  At Algorithmic Alliance, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our portal.
                </p>
              </div>
            </div>

            {/* Section 1: Information We Collect */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2837BD] rounded-full flex items-center justify-center">
                  <Database className="h-4 w-4 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white m-0">
                  Information We Collect
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Personal Information</h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300 pl-6">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#2837BD] rounded-full mt-2 flex-shrink-0"></span>
                      Full name (first and last name)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#2837BD] rounded-full mt-2 flex-shrink-0"></span>
                      Email address (for account creation and communication)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#2837BD] rounded-full mt-2 flex-shrink-0"></span>
                      Student ID number (for verification purposes)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#2837BD] rounded-full mt-2 flex-shrink-0"></span>
                      Academic information (course, year level)
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Technical Information</h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300 pl-6">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#2837BD] rounded-full mt-2 flex-shrink-0"></span>
                      IP address and location data
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#2837BD] rounded-full mt-2 flex-shrink-0"></span>
                      Browser type and version
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#2837BD] rounded-full mt-2 flex-shrink-0"></span>
                      Device information and operating system
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#2837BD] rounded-full mt-2 flex-shrink-0"></span>
                      Usage patterns and activity logs
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: How We Use Information */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2837BD] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white m-0">
                  How We Use Your Information
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  We use the collected information for the following purposes:
                </p>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300 pl-6">
                  <li className="flex items-start gap-2">
                    <UserCheck className="h-4 w-4 text-[#2837BD] mt-1 flex-shrink-0" />
                    Account verification and approval process
                  </li>
                  <li className="flex items-start gap-2">
                    <Mail className="h-4 w-4 text-[#2837BD] mt-1 flex-shrink-0" />
                    Communication regarding account status and platform updates
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-[#2837BD] mt-1 flex-shrink-0" />
                    Security monitoring and fraud prevention
                  </li>
                  <li className="flex items-start gap-2">
                    <Database className="h-4 w-4 text-[#2837BD] mt-1 flex-shrink-0" />
                    Platform functionality and service improvement
                  </li>
                  <li className="flex items-start gap-2">
                    <Eye className="h-4 w-4 text-[#2837BD] mt-1 flex-shrink-0" />
                    Academic progress tracking and group assignments
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3: Data Security */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2837BD] rounded-full flex items-center justify-center">
                  <Lock className="h-4 w-4 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white m-0">
                  Data Security and Protection
                </h2>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Security Measures</h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      We implement industry-standard security measures to protect your personal information.
                    </p>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 pl-6">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  SSL/TLS encryption for data transmission
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  Secure password hashing and storage
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  Regular security audits and updates
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  Limited access controls for administrative functions
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  Regular data backups with secure storage
                </li>
              </ul>
            </div>

            {/* Section 4: Data Sharing */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2837BD] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white m-0">
                  Data Sharing and Disclosure
                </h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                We do <strong>not</strong> sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 pl-6">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2837BD] rounded-full mt-2 flex-shrink-0"></span>
                  With your explicit consent
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2837BD] rounded-full mt-2 flex-shrink-0"></span>
                  When required by law or legal process
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2837BD] rounded-full mt-2 flex-shrink-0"></span>
                  With academic institution officials for verification purposes
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2837BD] rounded-full mt-2 flex-shrink-0"></span>
                  To protect the safety and security of our users
                </li>
              </ul>
            </div>

            {/* Section 5: Your Rights */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2837BD] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white m-0">
                  Your Privacy Rights
                </h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 pl-6">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2837BD] rounded-full mt-2 flex-shrink-0"></span>
                  <strong>Access:</strong> Request a copy of your personal data we hold
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2837BD] rounded-full mt-2 flex-shrink-0"></span>
                  <strong>Correction:</strong> Request correction of inaccurate information
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2837BD] rounded-full mt-2 flex-shrink-0"></span>
                  <strong>Deletion:</strong> Request deletion of your account and associated data
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2837BD] rounded-full mt-2 flex-shrink-0"></span>
                  <strong>Portability:</strong> Request transfer of your data to another service
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2837BD] rounded-full mt-2 flex-shrink-0"></span>
                  <strong>Objection:</strong> Object to certain processing of your data
                </li>
              </ul>
            </div>

            {/* Section 6: Cookies and Tracking */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2837BD] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">6</span>
                </div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white m-0">
                  Cookies and Tracking Technologies
                </h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your experience on our platform:
              </p>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 pl-6">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2837BD] rounded-full mt-2 flex-shrink-0"></span>
                  <strong>Essential cookies:</strong> Required for basic platform functionality
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2837BD] rounded-full mt-2 flex-shrink-0"></span>
                  <strong>Preference cookies:</strong> Remember your settings and preferences
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2837BD] rounded-full mt-2 flex-shrink-0"></span>
                  <strong>Analytics cookies:</strong> Help us understand platform usage (anonymized)
                </li>
              </ul>
            </div>

            {/* Section 7: Data Retention */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2837BD] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">7</span>
                </div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white m-0">
                  Data Retention
                </h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                We retain your personal information only as long as necessary for the purposes outlined in this policy. Academic records may be retained for institutional requirements, but personal identifiable information will be deleted upon account closure or as requested by the user.
              </p>
            </div>

            {/* Section 8: Policy Updates */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2837BD] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">8</span>
                </div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white m-0">
                  Updates to This Policy
                </h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                We may update this Privacy Policy from time to time. Users will be notified of significant changes via email or platform notifications. The "Last updated" date at the top of this policy indicates when changes were last made.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-[#2837BD]/5 dark:bg-[#2837BD]/10 rounded-lg p-6 border border-[#2837BD]/20">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                Privacy Questions or Concerns?
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                If you have questions about this Privacy Policy or how we handle your data, please contact our Data Protection Officer:
              </p>
              <div className="space-y-2">
                <p className="text-slate-700 dark:text-slate-300">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:privacy@algorithmicalliance.org" className="text-[#2837BD] hover:text-[#1e2a9a] font-medium underline underline-offset-2">
                    privacy@algorithmicalliance.org
                  </a>
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  <strong>Response Time:</strong> We aim to respond to privacy requests within 30 days
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <Link href="/terms">
            <Button variant="outline" className="border-[#2837BD] text-[#2837BD] hover:bg-[#2837BD] hover:text-white">
              View Terms of Service
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