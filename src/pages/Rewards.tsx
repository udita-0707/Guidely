import DashboardSidebar from "@/components/DashboardSidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Target, Award, Gift, Zap } from "lucide-react";

const Rewards = () => {
  const role = window.location.pathname.includes("student") ? "student" : "mentor";

  const achievements = [
    { icon: Trophy, title: "First Session", description: "Complete your first mentorship session", earned: true, points: 50 },
    { icon: Star, title: "5 Star Rating", description: "Receive a 5-star rating", earned: true, points: 100 },
    { icon: Target, title: "Week Streak", description: "Stay active for 7 consecutive days", earned: false, points: 150 },
    { icon: Award, title: "Top Contributor", description: "Be in top 10% contributors this month", earned: false, points: 200 },
  ];

  const rewards = [
    { name: "Premium Badge", cost: 500, icon: Gift, available: true },
    { name: "Featured Profile", cost: 1000, icon: Zap, available: true },
    { name: "Custom Theme", cost: 750, icon: Star, available: false },
    { name: "Priority Support", cost: 1500, icon: Award, available: false },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar role={role} />
      
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-foreground">Rewards & Achievements</h1>
          
          {/* Points Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 shadow-card border-border bg-gradient-primary">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-primary-foreground/80 mb-1">Total Points</p>
                  <p className="text-3xl font-bold text-primary-foreground">1,250</p>
                </div>
                <Trophy className="w-12 h-12 text-primary-foreground/80" />
              </div>
            </Card>

            <Card className="p-6 shadow-card border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground mb-1">Achievements</p>
                  <p className="text-3xl font-bold text-foreground">2/4</p>
                </div>
                <Star className="w-12 h-12 text-muted-foreground" />
              </div>
            </Card>

            <Card className="p-6 shadow-card border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground mb-1">Current Streak</p>
                  <p className="text-3xl font-bold text-foreground">12 days</p>
                </div>
                <Zap className="w-12 h-12 text-muted-foreground" />
              </div>
            </Card>
          </div>

          {/* Achievements */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className={`p-6 shadow-card border-border transition-all duration-300 ${
                    achievement.earned ? "bg-gradient-subtle" : "opacity-60"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${
                      achievement.earned ? "bg-gradient-primary" : "bg-muted"
                    }`}>
                      <achievement.icon className={`w-6 h-6 ${
                        achievement.earned ? "text-white" : "text-muted-foreground"
                      }`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                        <Badge variant={achievement.earned ? "default" : "outline"}>
                          {achievement.points} pts
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      {achievement.earned && (
                        <Badge className="mt-2 bg-secondary">Earned</Badge>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Rewards Store */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Rewards Store</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rewards.map((reward, index) => (
                <Card key={index} className="p-6 shadow-card border-border">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-muted">
                      <reward.icon className="w-6 h-6 text-muted-foreground" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-foreground">{reward.name}</h3>
                        <Badge variant="outline">{reward.cost} pts</Badge>
                      </div>
                      <Button 
                        className="mt-2 w-full" 
                        disabled={!reward.available}
                      >
                        {reward.available ? "Redeem" : "Not Available"}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Progress to Next Reward */}
          <Card className="p-6 shadow-card border-border mt-8">
            <h3 className="font-semibold text-foreground mb-4">Progress to Next Reward</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Custom Theme</span>
                <span className="text-foreground font-semibold">1,250 / 1,500 pts</span>
              </div>
              <Progress value={83} className="h-2" />
              <p className="text-sm text-muted-foreground">250 points to go!</p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Rewards;
