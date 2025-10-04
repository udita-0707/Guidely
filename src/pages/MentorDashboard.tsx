import { useState, useEffect } from "react";
import DashboardSidebar from "@/components/DashboardSidebar";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GitBranch, GitPullRequest, Users, FolderGit2, DollarSign, Calendar, MessageSquare, FileText, Download } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getMe, logout } from "../api/auth"; // your API function

const MentorDashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchUser = async () => {
      try {
        const data = await getMe();
        if (!mounted) return;

        if (data && data.ok) {
          setUser(data.user); // store logged-in mentor info
        } else {
          console.error("Failed to fetch user:", data);
        }
      } catch (err) {
        console.error("Error fetching user:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchUser();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <p className="text-center mt-10">Loading dashboard...</p>;

  // Example static data can be replaced dynamically using user data
  const upcomingMeetings = user?.upcomingMeetings || [
    { name: "Alex Kumar", time: "Today, 2:00 PM", topic: "React Hooks Deep Dive" },
    { name: "Jessica Lee", time: "Tomorrow, 10:00 AM", topic: "Career Guidance" },
    { name: "David Park", time: "Friday, 4:00 PM", topic: "Code Review Session" },
  ];

  const recentChats = user?.recentChats || [
    { name: "Alex Kumar", message: "Thanks for the session!", time: "10m ago" },
    { name: "Jessica Lee", message: "Can we reschedule?", time: "1h ago" },
    { name: "David Park", message: "Sent you the code", time: "3h ago" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <DashboardSidebar role="mentor" />

      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header with CV Download */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Mentor Dashboard</h1>
              <p className="text-muted-foreground">Welcome, {user?.name}</p>
            </div>
            <Button variant="hero" size="lg" className="gap-2">
              <Download className="w-4 h-4" />
              Download My Contribution CV
            </Button>
            <Button onClick={() => logout()} variant="outline" className="w-full" size="lg">
                  Logout
                </Button>
          </div>

          {/* GitHub Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Total Contributions"
              value={user?.contributions || "0"}
              icon={GitBranch}
              trend="+12% this month"
              iconBg="primary"
            />
            <StatCard
              title="Pull Requests"
              value={user?.pullRequests || "0"}
              icon={GitPullRequest}
              trend="+8 this week"
              iconBg="secondary"
            />
            <StatCard
              title="Active Mentees"
              value={user?.menteesCount || "0"}
              icon={Users}
              trend="3 new this month"
              iconBg="primary"
            />
            <StatCard
              title="Repositories"
              value={user?.repositories || "0"}
              icon={FolderGit2}
              trend="5 starred"
              iconBg="secondary"
            />
          </div>

          {/* Remaining Action Cards (Earnings, Meetings, Chats, Profile Info) */}
          {/* Replace static info with user data as needed */}
        </div>
      </main>
    </div>
  );
};

export default MentorDashboard;
