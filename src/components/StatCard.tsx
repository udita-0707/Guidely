import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  iconBg?: "primary" | "secondary";
}

const StatCard = ({ title, value, icon: Icon, trend, iconBg = "primary" }: StatCardProps) => {
  const bgClass = iconBg === "primary" ? "bg-gradient-primary" : "bg-gradient-secondary";

  return (
    <Card className="p-6 shadow-card hover:shadow-hover transition-all duration-300 border-0">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-2">{title}</p>
          <h3 className="text-3xl font-bold text-foreground mb-1">{value}</h3>
          {trend && (
            <p className="text-sm font-medium text-primary">{trend}</p>
          )}
        </div>
        <div className={`p-3 ${bgClass} rounded-xl`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
