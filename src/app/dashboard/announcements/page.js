"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Megaphone, 
  Clock, 
  ArrowLeft, 
  Search
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AnnouncementsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  // Sample announcements data - replace with real data later
  const announcements = [
    {
      id: 1,
      title: "Welcome to Algorithmic Alliance Member Portal",
      content: "We're excited to launch our new member portal! This platform will serve as your central hub for all alliance activities, resources, and communications. Explore the dashboard to discover all the features available to you as a valued member.",
      date: "2025-09-26",
      priority: "high",
      author: "AlgoWeb Team",
      category: "Platform"
    },
    {
      id: 2,
      title: "New Resource Library Available",
      content: "Our comprehensive resource library is now live! Access technical documentation, best practices, and learning materials curated specifically for our members. The library will be regularly updated with new content.",
      date: "2025-09-25",
      priority: "medium",
      author: "Education Team",
      category: "Resources"
    },
    {
      id: 3,
      title: "Monthly Newsletter - September 2025",
      content: "Check out our latest monthly newsletter featuring member spotlights, industry insights, and upcoming initiatives. Stay connected with the alliance community and never miss important updates.",
      date: "2025-09-24",
      priority: "low",
      author: "Communications",
      category: "Newsletter"
    },
    {
      id: 4,
      title: "System Maintenance Scheduled",
      content: "We will be performing routine system maintenance on October 1st, 2025, from 2:00 AM to 4:00 AM EST. During this time, some features may be temporarily unavailable. We apologize for any inconvenience.",
      date: "2025-09-23",
      priority: "medium",
      author: "IT Operations",
      category: "Maintenance"
    },
    {
      id: 5,
      title: "Member Feedback Survey",
      content: "Your opinion matters! Please take a few minutes to complete our member satisfaction survey. Your feedback helps us improve the platform and better serve the alliance community.",
      date: "2025-09-22",
      priority: "low",
      author: "Member Relations",
      category: "Survey"
    }
  ];

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const filteredAnnouncements = announcements.filter(announcement =>
    announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    announcement.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Simple Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/dashboard" className="hover:text-gray-700">
            Dashboard
          </Link>
          <span>/</span>
          <span className="text-gray-900">Announcements</span>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Announcements</h1>
            <p className="text-gray-600 mt-1">{filteredAnnouncements.length} announcements</p>
          </div>
          
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search announcements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Simple Announcements List */}
      <div className="space-y-4">
        {filteredAnnouncements.length === 0 ? (
          <div className="text-center py-16">
            <div className="p-4 bg-gray-50 rounded-full w-fit mx-auto mb-6">
              <Megaphone className="h-12 w-12 text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {searchTerm ? 'No matching announcements' : 'No announcements yet'}
            </h3>
            <p className="text-gray-500 max-w-md mx-auto mb-6">
              {searchTerm 
                ? `We couldn't find any announcements matching "${searchTerm}". Try adjusting your search.`
                : 'Stay tuned! New announcements will appear here when they\'re available.'
              }
            </p>
            {searchTerm && (
              <Button 
                variant="outline" 
                onClick={() => setSearchTerm('')}
                className="mb-4"
              >
                Clear Search
              </Button>
            )}
          </div>
        ) : (
          filteredAnnouncements.map((announcement) => (
            <Card key={announcement.id} className="rounded-xl shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge 
                        variant="outline" 
                        className={getPriorityColor(announcement.priority)}
                      >
                        {announcement.priority}
                      </Badge>
                      <Badge variant="secondary">
                        {announcement.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl leading-tight">
                      <Link 
                        href={`/dashboard/announcements/${announcement.id}`}
                        className="text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        {announcement.title}
                      </Link>
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-0">
                <p className="text-gray-700 leading-relaxed">
                  {announcement.content}
                </p>
                
                <Separator />
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>By {announcement.author}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {formatDate(announcement.date)}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Simple Footer */}
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