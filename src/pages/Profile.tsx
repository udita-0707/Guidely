import DashboardSidebar from "@/components/DashboardSidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Github, MapPin, Mail, Calendar } from "lucide-react";

const Profile = () => {
  const role = window.location.pathname.includes("student") ? "student" : "mentor";

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar role={role} />
      
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-foreground">Profile</h1>
          
          <Card className="p-8 shadow-card border-border">
            <div className="flex items-start gap-8 mb-8">
              <Avatar className="w-32 h-32">
                <AvatarFallback className="bg-gradient-primary text-white text-3xl font-semibold">
                  JD
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-2">John Doe</h2>
                <div className="flex items-center gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>john.doe@example.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Joined Jan 2024</span>
                  </div>
                </div>
                <Button className="gap-2">
                  <Github className="w-4 h-4" />
                  Connected to GitHub
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="John Doe" className="mt-2" />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" className="mt-2" />
              </div>

              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio" 
                  defaultValue={role === "student" 
                    ? "Passionate learner exploring web development and open source." 
                    : "Experienced developer mentoring the next generation of coders."}
                  className="mt-2"
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="skills">Skills</Label>
                <Input 
                  id="skills" 
                  defaultValue="React, TypeScript, Node.js, Python" 
                  className="mt-2" 
                  placeholder="Comma separated skills"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button>Save Changes</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Profile;
