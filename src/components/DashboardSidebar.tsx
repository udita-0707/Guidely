import { Link, useLocation } from "react-router-dom";
import { User, Compass, Users, MessageSquare, Award, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  role: "student" | "mentor";
}

const DashboardSidebar = ({ role }: SidebarProps) => {
  const location = useLocation();
  const basePath = role === "student" ? "/student-dashboard" : "/mentor-dashboard";

  const navItems = [
    { icon: User, label: "Profile", path: basePath },
    { icon: Compass, label: "Explore Posts", path: `${basePath}` },
    { icon: Users, label: "Find My Mentor", path: `${basePath}` },
    { icon: MessageSquare, label: "Chats", path: `${basePath}` },
    { icon: Award, label: "Rewards", path: `${basePath}` },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-64 bg-card border-r border-border min-h-screen p-6 hidden md:block">
      <div className="mb-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="p-2 bg-gradient-primary rounded-lg">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg bg-gradient-primary bg-clip-text text-transparent">
            MentorHub
          </span>
        </Link>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
              isActive(item.path)
                ? "bg-gradient-primary text-white shadow-elegant"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-8 p-4 bg-gradient-subtle rounded-lg border border-border">
        <p className="text-sm font-medium text-foreground mb-1">
          {role === "student" ? "Learning Streak" : "Mentorship Score"}
        </p>
        <p className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          {role === "student" ? "12 days" : "4.8/5.0"}
        </p>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
