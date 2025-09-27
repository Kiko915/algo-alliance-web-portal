"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Calendar,
  Megaphone
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function IndividualAnnouncementPage() {
  const params = useParams();
  const announcementId = params.id;

  // Sample announcements data - replace with real data later
  const announcements = [
    {
      id: "1",
      title: "Welcome to Algorithmic Alliance Member Portal",
      content: "We're excited to launch our new member portal! This platform will serve as your central hub for all alliance activities, resources, and communications. Explore the dashboard to discover all the features available to you as a valued member.\n\nOur portal includes several key features:\n\n• Dashboard with personalized content\n• Announcements and updates\n• Resource library access\n• Event management\n• Digital member ID\n• Communication tools\n\nWe've designed this platform with you in mind, focusing on ease of use and accessibility. Whether you're looking to stay updated on alliance activities, access learning resources, or connect with other members, this portal will be your go-to destination.\n\nPlease take some time to explore all the features available to you. If you have any questions or need assistance, don't hesitate to reach out to our support team.",
      date: "2025-09-26",
      priority: "high",
      author: "AlgoWeb Team",
      category: "Platform",
      fullDate: "Thursday, September 26, 2025"
    },
    {
      id: "2",
      title: "New Resource Library Available",
      content: "Our comprehensive resource library is now live! Access technical documentation, best practices, and learning materials curated specifically for our members. The library will be regularly updated with new content.\n\nWhat's included in the resource library:\n\n• Technical documentation and guides\n• Best practice articles\n• Video tutorials\n• Code examples and templates\n• Industry insights and reports\n• Member-contributed content\n\nThe library is organized by topics and skill levels, making it easy to find exactly what you're looking for. We've also implemented a powerful search feature to help you quickly locate specific resources.\n\nWe encourage all members to contribute their own resources and share their expertise with the community. If you have valuable content to share, please reach out to our education team.",
      date: "2025-09-25",
      priority: "medium",
      author: "Education Team",
      category: "Resources",
      fullDate: "Wednesday, September 25, 2025"
    },
    {
      id: "3",
      title: "Monthly Newsletter - September 2025",
      content: "Check out our latest monthly newsletter featuring member spotlights, industry insights, and upcoming initiatives. Stay connected with the alliance community and never miss important updates.\n\nThis month's highlights:\n\n• Member spotlight: Outstanding contributions\n• Industry trends and analysis\n• Upcoming events and workshops\n• New partnership announcements\n• Community achievements\n• Technical articles from members\n\nOur newsletter is published monthly and delivered directly to your email. It's a great way to stay informed about what's happening in the alliance and the broader tech community.\n\nIf you'd like to contribute to future newsletters or have news to share, please contact our communications team.",
      date: "2025-09-24",
      priority: "low",
      author: "Communications",
      category: "Newsletter",
      fullDate: "Tuesday, September 24, 2025"
    },
    {
      id: "4",
      title: "System Maintenance Scheduled",
      content: "We will be performing routine system maintenance on October 1st, 2025, from 2:00 AM to 4:00 AM EST. During this time, some features may be temporarily unavailable. We apologize for any inconvenience.\n\nMaintenance details:\n\n• Start time: October 1st, 2:00 AM EST\n• End time: October 1st, 4:00 AM EST\n• Expected duration: 2 hours\n• Services affected: Member portal, resource library\n• Services unaffected: Email notifications\n\nDuring the maintenance window, you may experience:\n• Temporary inability to access the portal\n• Interrupted file downloads\n• Delayed email notifications\n\nWe recommend downloading any resources you need before the maintenance window. All data will be preserved, and normal service will resume immediately after completion.\n\nThank you for your patience as we work to improve our platform.",
      date: "2025-09-23",
      priority: "medium",
      author: "IT Operations",
      category: "Maintenance",
      fullDate: "Monday, September 23, 2025"
    },
    {
      id: "5",
      title: "Member Feedback Survey",
      content: "Your opinion matters! Please take a few minutes to complete our member satisfaction survey. Your feedback helps us improve the platform and better serve the alliance community.\n\nWhy your feedback is important:\n\n• Helps us prioritize new features\n• Identifies areas for improvement\n• Ensures we meet member needs\n• Guides our development roadmap\n• Shapes future alliance initiatives\n\nThe survey covers topics such as:\n• Portal usability and features\n• Resource library quality\n• Event satisfaction\n• Communication effectiveness\n• Community engagement\n\nThe survey takes approximately 5-10 minutes to complete and is completely anonymous. Your honest feedback will help us continue to improve the member experience.\n\nTo access the survey, click the link in your email or visit the feedback section in your member profile.",
      date: "2025-09-22",
      priority: "low",
      author: "Member Relations",
      category: "Survey",
      fullDate: "Sunday, September 22, 2025"
    }
  ];

  const announcement = announcements.find(a => a.id === announcementId);

  if (!announcement) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/dashboard" className="hover:text-gray-700">
            Dashboard
          </Link>
          <span>/</span>
          <Link href="/dashboard/announcements" className="hover:text-gray-700">
            Announcements
          </Link>
          <span>/</span>
          <span className="text-gray-900">Not Found</span>
        </div>

        <div className="text-center py-16">
          <div className="p-4 bg-gray-50 rounded-full w-fit mx-auto mb-6">
            <Megaphone className="h-12 w-12 text-gray-300" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Announcement Not Found</h1>
          <p className="text-gray-600 mb-6">The announcement you're looking for doesn't exist or has been removed.</p>
          <div className="flex gap-3 justify-center">
            <Button variant="outline" asChild>
              <Link href="/dashboard/announcements">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Announcements
              </Link>
            </Button>
            <Button asChild>
              <Link href="/dashboard">
                Go to Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'medium':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'low':
        return 'bg-green-50 text-green-700 border-green-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Link href="/dashboard" className="hover:text-gray-700">
          Dashboard
        </Link>
        <span>/</span>
        <Link href="/dashboard/announcements" className="hover:text-gray-700">
          Announcements
        </Link>
        <span>/</span>
        <span className="text-gray-900">#{announcement.id}</span>
      </div>

      {/* Back Button */}
      <div>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard/announcements">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Announcements
          </Link>
        </Button>
      </div>

      {/* Main Content */}
      <Card className="rounded-xl shadow">
        <CardHeader className="space-y-4">
          {/* Badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <Badge 
              variant="outline" 
              className={getPriorityColor(announcement.priority)}
            >
              {announcement.priority} priority
            </Badge>
            <Badge variant="secondary">
              {announcement.category}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">
            {announcement.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>By {announcement.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{announcement.fullDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Published {announcement.date}</span>
            </div>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="pt-6">
          {/* Content */}
          <div className="prose prose-gray max-w-none">
            {announcement.content.split('\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Footer Actions */}
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-center pt-6 border-t">
        <Button variant="outline" asChild>
          <Link href="/dashboard/announcements">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Announcements
          </Link>
        </Button>
        
        <div className="flex gap-2">
          <Button variant="ghost" size="sm">
            Share
          </Button>
          <Button variant="ghost" size="sm">
            Print
          </Button>
        </div>
      </div>
    </div>
  );
}