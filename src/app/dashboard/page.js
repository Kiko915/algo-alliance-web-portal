import { WelcomeBanner } from "@/components/dashboard/WelcomeBanner";
import { AnnouncementsWidget } from "@/components/dashboard/Announcements";
import { EventsWidget } from "@/components/dashboard/Events";
import { DigitalIdPreview } from "@/components/dashboard/DigitalIdPreview";
import { QuickLinks } from "@/components/dashboard/QuickLinks";
import { PendingApprovals } from "@/components/dashboard/PendingApprovals";

export default function DashboardPage() {
  // Dummy data (placeholders)
  const user = {
    name: "Alex Carter",
    role: "officer",
    memberId: "AAC-2025-001",
  };

  const announcements = [
    { id: "a1", title: "Welcome to the new semester!", date: "2025-09-01" },
    { id: "a2", title: "Hackathon sign-ups open", date: "2025-09-10" },
    { id: "a3", title: "Workshop: Intro to Algorithms", date: "2025-09-18" },
  ];

  const events = [
    { id: "e1", title: "Algo Study Group", date: "Fri, Oct 3, 5:00 PM", location: "Room 201" },
    { id: "e2", title: "Tech Talk: AI Ethics", date: "Tue, Oct 7, 6:30 PM", location: "Auditorium" },
  ];

  const pendingApprovalsCount = 4; // placeholder

  return (
    /* Main content area */
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {/* Left column */}
      <section className="lg:col-span-2 space-y-6">
        <WelcomeBanner name={user.name} memberId={user.memberId} />
        <AnnouncementsWidget items={announcements} />
        <EventsWidget events={events} />
      </section>

      {/* Right column (widgets) */}
      <aside className="lg:col-span-1 space-y-6">
        <DigitalIdPreview name={user.name} memberId={user.memberId} />
        <QuickLinks />
        {user.role === "officer" && (
          <PendingApprovals count={pendingApprovalsCount} />
        )}
      </aside>
    </div>
  );
}
