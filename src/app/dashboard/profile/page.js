"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  GraduationCap,
  IdCard,
  Edit,
  Key,
  Download,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function ProfilePage() {
  // Dummy user data - replace with real data later
  const user = {
    name: "John Michael Santos",
    email: "john.santos@student.edu.ph",
    studentId: "2021-00123",
    program: "BS Computer Science",
    yearLevel: "3rd Year",
    contactNumber: "+63 912 345 6789",
    joinDate: "September 15, 2023",
    role: "Member",
    status: "Approved",
    avatar: null // placeholder for now
  };

  const initials = getInitials(user.name);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Link href="/dashboard" className="hover:text-gray-700">
          Dashboard
        </Link>
        <span>/</span>
        <span className="text-gray-900">Profile</span>
      </div>

      {/* Header Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        <p className="text-gray-600">Manage your personal information and account settings.</p>
      </div>

      {/* Profile Card */}
      <Card className="rounded-xl shadow">
        <CardHeader className="text-center pb-6">
          <div className="flex justify-center mb-4">
            <Avatar className="h-24 w-24">
              <AvatarImage alt={user.name} />
              <AvatarFallback className="text-xl font-semibold">
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            {user.name}
          </CardTitle>
          <div className="flex items-center justify-center gap-2 mt-2">
            <Badge variant="secondary">
              {user.role}
            </Badge>
            <Badge 
              variant="outline" 
              className="bg-green-50 text-green-700 border-green-200"
            >
              {user.status}
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Profile Information Section */}
      <Card className="rounded-xl shadow">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">
            Profile Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <User className="h-4 w-4" />
                Full Name
              </div>
              <p className="text-gray-900 font-medium">{user.name}</p>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Mail className="h-4 w-4" />
                Email Address
              </div>
              <p className="text-gray-900 font-medium">{user.email}</p>
            </div>

            {/* Student ID */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <IdCard className="h-4 w-4" />
                Student ID / Membership ID
              </div>
              <p className="text-gray-900 font-medium">{user.studentId}</p>
            </div>

            {/* Program */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <GraduationCap className="h-4 w-4" />
                Program / Course
              </div>
              <p className="text-gray-900 font-medium">{user.program}</p>
            </div>

            {/* Year Level */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <GraduationCap className="h-4 w-4" />
                Year Level
              </div>
              <p className="text-gray-900 font-medium">{user.yearLevel}</p>
            </div>

            {/* Contact Number */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Phone className="h-4 w-4" />
                Contact Number
              </div>
              <p className="text-gray-900 font-medium">{user.contactNumber}</p>
            </div>
          </div>

          <Separator />

          {/* Join Date - Full width */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Calendar className="h-4 w-4" />
              Join Date
            </div>
            <p className="text-gray-900 font-medium">{formatDate(user.joinDate)}</p>
          </div>
        </CardContent>
      </Card>

      {/* Actions Section */}
      <Card className="rounded-xl shadow">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">
            Account Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="flex items-center gap-2 sm:ml-auto">
              <Edit className="h-4 w-4" />
              Edit Profile
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Key className="h-4 w-4" />
              Change Password
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Digital ID
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Back to Dashboard */}
      <div className="text-center py-6">
        <Button variant="outline" asChild>
          <Link href="/dashboard">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
}