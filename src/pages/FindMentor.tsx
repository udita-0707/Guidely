import DashboardSidebar from "@/components/DashboardSidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star } from "lucide-react";

const FindMentor = () => {
  const role = window.location.pathname.includes("student") ? "student" : "mentor";

  const mentors = [
    {
      name: "Sarah Chen",
      expertise: "Frontend Development",
      rating: 4.9,
      sessions: 127,
      location: "San Francisco, CA",
      skills: ["React", "TypeScript", "Next.js"],
      availability: "Available",
    },
    {
      name: "Mike Johnson",
      expertise: "System Design",
      rating: 4.8,
      sessions: 89,
      location: "New York, NY",
      skills: ["Architecture", "Cloud", "Microservices"],
      availability: "Available",
    },
    {
      name: "Emily Rodriguez",
      expertise: "Full Stack Development",
      rating: 4.9,
      sessions: 156,
      location: "Austin, TX",
      skills: ["Node.js", "GraphQL", "PostgreSQL"],
      availability: "Busy",
    },
    {
      name: "David Lee",
      expertise: "DevOps & CI/CD",
      rating: 5.0,
      sessions: 203,
      location: "Seattle, WA",
      skills: ["Docker", "Kubernetes", "AWS"],
      availability: "Available",
    },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar role={role} />
      
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-foreground">Find Your Mentor</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search by skill or name..." className="pl-10 w-80" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mentors.map((mentor, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-hover transition-all duration-300 border-border">
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-gradient-primary text-white text-xl font-semibold">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{mentor.name}</h3>
                        <p className="text-sm text-muted-foreground">{mentor.expertise}</p>
                      </div>
                      <Badge 
                        variant={mentor.availability === "Available" ? "default" : "secondary"}
                        className={mentor.availability === "Available" ? "bg-secondary" : ""}
                      >
                        {mentor.availability}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="font-semibold text-foreground">{mentor.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{mentor.sessions} sessions</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{mentor.location}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {mentor.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="border-border">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1">Book Session</Button>
                      <Button variant="outline">View Profile</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FindMentor;
