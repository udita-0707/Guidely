import DashboardSidebar from "@/components/DashboardSidebar";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GitBranch, GitPullRequest, Users, FolderGit2, DollarSign, Calendar, MessageSquare, FileText, Download } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const MentorDashboard = () => {
  const upcomingMeetings = [
    { name: "Alex Kumar", time: "Today, 2:00 PM", topic: "React Hooks Deep Dive" },
    { name: "Jessica Lee", time: "Tomorrow, 10:00 AM", topic: "Career Guidance" },
    { name: "David Park", time: "Friday, 4:00 PM", topic: "Code Review Session" },
  ];

  const recentChats = [
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
              <p className="text-muted-foreground">Track your impact and manage mentorships</p>
            </div>
            <Button variant="hero" size="lg" className="gap-2">
              <Download className="w-4 h-4" />
              Download My Contribution CV
            </Button>
          </div>

          {/* GitHub Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="animate-fade-in" style={{ animationDelay: '0s' }}>
              <StatCard
                title="Total Contributions"
                value="2,847"
                icon={GitBranch}
                trend="+12% this month"
                iconBg="primary"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <StatCard
                title="Pull Requests"
                value="156"
                icon={GitPullRequest}
                trend="+8 this week"
                iconBg="secondary"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <StatCard
                title="Active Mentees"
                value="24"
                icon={Users}
                trend="3 new this month"
                iconBg="primary"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <StatCard
                title="Repositories"
                value="42"
                icon={FolderGit2}
                trend="5 starred"
                iconBg="secondary"
              />
            </div>
          </div>

          {/* Action Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* My Earnings */}
            <Card className="p-6 shadow-card border-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">My Earnings</h2>
                <div className="p-3 bg-gradient-secondary rounded-xl">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">This Month</p>
                  <p className="text-3xl font-bold text-foreground">$2,450</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Sessions</p>
                    <p className="text-lg font-semibold text-foreground">18</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Avg. Rating</p>
                    <p className="text-lg font-semibold text-foreground">4.9/5.0</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">View Details</Button>
              </div>
            </Card>

            {/* Upcoming Meetings */}
            <Card className="p-6 shadow-card border-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">Upcoming Bookings</h2>
                <div className="p-3 bg-gradient-primary rounded-xl">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="space-y-4">
                {upcomingMeetings.map((meeting, index) => (
                  <div key={index} className="flex items-start gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-muted text-foreground text-sm">
                        {meeting.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground text-sm">{meeting.name}</p>
                      <p className="text-xs text-muted-foreground">{meeting.time}</p>
                      <p className="text-xs text-primary mt-1">{meeting.topic}</p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">View All Meetings</Button>
              </div>
            </Card>

            {/* Recent Chats */}
            <Card className="p-6 shadow-card border-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">Recent Chats</h2>
                <div className="p-3 bg-gradient-primary rounded-xl">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="space-y-4">
                {recentChats.map((chat, index) => (
                  <div key={index} className="flex items-start gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-muted text-foreground text-sm">
                        {chat.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-semibold text-foreground text-sm">{chat.name}</p>
                        <p className="text-xs text-muted-foreground">{chat.time}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{chat.message}</p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">Open Chat</Button>
              </div>
            </Card>

            {/* Full Info / GitHub Profile */}
            <Card className="p-6 shadow-card border-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">Profile Info</h2>
                <div className="p-3 bg-gradient-secondary rounded-xl">
                  <FileText className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-gradient-primary text-white text-lg font-bold">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-foreground">John Doe</p>
                    <p className="text-sm text-muted-foreground">@johndoe</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Specialization</p>
                    <p className="text-sm font-medium text-foreground">Full Stack Development, System Design</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="text-sm font-medium text-foreground">8+ years</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="text-sm font-medium text-primary">github.com/johndoe</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">Edit Profile</Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MentorDashboard;
