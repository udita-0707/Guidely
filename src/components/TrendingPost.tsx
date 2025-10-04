import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface TrendingPostProps {
  title: string;
  category: string;
  engagement: string;
}

const TrendingPost = ({ title, category, engagement }: TrendingPostProps) => {
  return (
    <Card className="p-4 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer border-0 hover:scale-105">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-gradient-secondary rounded-lg">
          <TrendingUp className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-foreground text-sm mb-1">{title}</h4>
          <p className="text-xs text-muted-foreground mb-2">{category}</p>
          <p className="text-xs font-medium text-primary">{engagement}</p>
        </div>
      </div>
    </Card>
  );
};

export default TrendingPost;
