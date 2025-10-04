import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface PostCardProps {
  author: string;
  role: string;
  timeAgo: string;
  content: string;
  tags?: string[];
  likes?: number;
  comments?: number;
}

const PostCard = ({ author, role, timeAgo, content, tags = [], likes = 0, comments = 0 }: PostCardProps) => {
  return (
    <Card className="p-6 shadow-card hover:shadow-hover transition-all duration-300 border-0">
      <div className="flex items-start gap-4">
        <Avatar className="w-12 h-12">
          <AvatarFallback className="bg-gradient-primary text-white font-semibold">
            {author.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-semibold text-foreground">{author}</h3>
              <p className="text-sm text-muted-foreground">{role} · {timeAgo}</p>
            </div>
            <Button variant="ghost" size="icon">
              <Bookmark className="w-4 h-4" />
            </Button>
          </div>

          <p className="text-foreground mb-4">{content}</p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center gap-6 pt-4 border-t border-border">
            <Button variant="ghost" size="sm" className="gap-2">
              <Heart className="w-4 h-4" />
              <span>{likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>{comments}</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
