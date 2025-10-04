import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Users, Github } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-primary rounded-2xl">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              MentorHub
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect, Learn, and Grow with GitHub-powered mentorship
          </p>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 animate-slide-up">
          {/* Student Card */}
          <Card className="p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 border-0">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">I'm a Student</h2>
              <p className="text-muted-foreground">
                Explore posts, find mentors, and grow your skills with guidance from experienced developers
              </p>
              <div className="space-y-3">
                <Link to="/student-dashboard" className="block">
                  <Button variant="hero" className="w-full" size="lg">
                    Enter Student Dashboard
                  </Button>
                </Link>
                <Button variant="outline" className="w-full" size="lg">
                  <Github className="mr-2" />
                  Continue with GitHub
                </Button>
              </div>
            </div>
          </Card>

          {/* Mentor Card */}
          <Card className="p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 border-0">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-gradient-secondary rounded-full flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">I'm a Mentor</h2>
              <p className="text-muted-foreground">
                Share your expertise, track contributions, manage bookings, and help shape the next generation
              </p>
              <div className="space-y-3">
                <Link to="/mentor-dashboard" className="block">
                  <Button variant="secondary" className="w-full" size="lg">
                    Enter Mentor Dashboard
                  </Button>
                </Link>
                <Button variant="outline" className="w-full" size="lg">
                  <Github className="mr-2" />
                  Continue with GitHub
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-12 h-12 mx-auto bg-muted rounded-lg flex items-center justify-center mb-3">
              <Github className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">GitHub Integration</h3>
            <p className="text-sm text-muted-foreground">Seamless login and profile sync</p>
          </div>
          <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 mx-auto bg-muted rounded-lg flex items-center justify-center mb-3">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Community Driven</h3>
            <p className="text-sm text-muted-foreground">Connect with peers and experts</p>
          </div>
          <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="w-12 h-12 mx-auto bg-muted rounded-lg flex items-center justify-center mb-3">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Structured Learning</h3>
            <p className="text-sm text-muted-foreground">Track progress and milestones</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
