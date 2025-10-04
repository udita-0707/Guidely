import DashboardSidebar from "@/components/DashboardSidebar";
import PostCard from "@/components/PostCard";
import TrendingPost from "@/components/TrendingPost";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const StudentDashboard = () => {
  const posts = [
    {
      author: "Sarah Johnson",
      role: "Senior Developer",
      timeAgo: "2h ago",
      content: "Just completed a deep dive into React Server Components. The mental model shift is real, but the benefits are incredible. Anyone else exploring this?",
      tags: ["React", "WebDev", "Learning"],
      likes: 42,
      comments: 12,
    },
    {
      author: "Michael Chen",
      role: "Tech Lead",
      timeAgo: "5h ago",
      content: "Looking for mentees interested in system design. I'll be hosting a live session next week covering distributed systems fundamentals.",
      tags: ["SystemDesign", "Mentorship", "DistributedSystems"],
      likes: 89,
      comments: 24,
    },
    {
      author: "Emma Davis",
      role: "Full Stack Engineer",
      timeAgo: "1d ago",
      content: "Pro tip: Always write tests before refactoring. Just saved myself 3 hours of debugging thanks to comprehensive test coverage!",
      tags: ["Testing", "BestPractices", "TDD"],
      likes: 156,
      comments: 31,
    },
  ];

  const trendingPosts = [
    { title: "AI-Powered Code Reviews", category: "DevTools", engagement: "2.3k views" },
    { title: "Mastering TypeScript Generics", category: "Tutorial", engagement: "1.8k views" },
    { title: "Building Scalable APIs", category: "Backend", engagement: "1.5k views" },
    { title: "CSS Grid vs Flexbox 2024", category: "Frontend", engagement: "1.2k views" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <DashboardSidebar role="student" />
      
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Community Feed</h1>
            <p className="text-muted-foreground">Discover insights from mentors and peers</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search posts, topics, or people..."
                  className="pl-10 h-12 shadow-card border-0"
                />
              </div>

              {/* Posts */}
              <div className="space-y-4">
                {posts.map((post, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <PostCard {...post} />
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full">
                Load More Posts
              </Button>
            </div>

            {/* Trending Sidebar */}
            <div className="space-y-6">
              <div className="sticky top-6">
                <h2 className="text-xl font-bold text-foreground mb-4">🔥 Trending Now</h2>
                <div className="space-y-3">
                  {trendingPosts.map((post, index) => (
                    <div key={index} className="animate-fade-in" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                      <TrendingPost {...post} />
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-5 bg-gradient-primary rounded-xl text-white shadow-elegant">
                  <h3 className="font-semibold mb-2">Find Your Mentor</h3>
                  <p className="text-sm text-white/90 mb-4">
                    Connect with experienced developers who can guide your journey
                  </p>
                  <Button variant="secondary" className="w-full">
                    Explore Mentors
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
