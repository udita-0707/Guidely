import DashboardSidebar from "@/components/DashboardSidebar";
import PostCard from "@/components/PostCard";
import TrendingPost from "@/components/TrendingPost";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

const ExplorePosts = () => {
  const role = window.location.pathname.includes("student") ? "student" : "mentor";

  const posts = [
    {
      author: "Sarah Chen",
      role: "Senior Developer",
      timeAgo: "2 hours ago",
      content: "Just published a comprehensive guide on React Server Components. Check it out and let me know your thoughts!",
      tags: ["react", "nextjs", "webdev"],
      likes: 124,
      comments: 23,
    },
    {
      author: "Mike Johnson",
      role: "Tech Lead",
      timeAgo: "5 hours ago",
      content: "Looking for mentees interested in learning system design. I have slots available for 1-on-1 sessions this month.",
      tags: ["mentorship", "systemdesign"],
      likes: 89,
      comments: 17,
    },
    {
      author: "Emily Rodriguez",
      role: "Full Stack Developer",
      timeAgo: "1 day ago",
      content: "Built my first GraphQL API today! The learning curve was steep but totally worth it. Happy to help others getting started.",
      tags: ["graphql", "api", "learning"],
      likes: 156,
      comments: 31,
    },
    {
      author: "David Lee",
      role: "DevOps Engineer",
      timeAgo: "2 days ago",
      content: "Sharing my experience automating CI/CD pipelines with GitHub Actions. Link in comments.",
      tags: ["devops", "cicd", "automation"],
      likes: 203,
      comments: 45,
    },
  ];

  const trendingPosts = [
    { title: "Best practices for React hooks", category: "Tutorial", engagement: "2.3k" },
    { title: "Understanding TypeScript generics", category: "Learning", engagement: "1.8k" },
    { title: "Microservices architecture guide", category: "Architecture", engagement: "1.5k" },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar role={role} />
      
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-foreground">Explore Posts</h1>
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search posts..." className="pl-10 w-64" />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {posts.map((post, index) => (
                <PostCard key={index} {...post} />
              ))}
            </div>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border shadow-card">
                <h2 className="text-xl font-bold mb-4 text-foreground">Trending Posts</h2>
                <div className="space-y-4">
                  {trendingPosts.map((post, index) => (
                    <TrendingPost key={index} {...post} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExplorePosts;
