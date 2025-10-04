import DashboardSidebar from "@/components/DashboardSidebar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Send, MoreVertical } from "lucide-react";

const Chats = () => {
  const role = window.location.pathname.includes("student") ? "student" : "mentor";

  const conversations = [
    { name: "Sarah Chen", lastMessage: "Looking forward to our session tomorrow!", time: "2m ago", unread: 2, active: true },
    { name: "Mike Johnson", lastMessage: "Thanks for the resources!", time: "1h ago", unread: 0, active: false },
    { name: "Emily Rodriguez", lastMessage: "Can we reschedule our meeting?", time: "3h ago", unread: 1, active: false },
    { name: "David Lee", lastMessage: "Great session today! 🎉", time: "1d ago", unread: 0, active: false },
  ];

  const messages = [
    { sender: "Sarah Chen", content: "Hi! I have a question about React hooks.", time: "10:30 AM", fromMe: false },
    { sender: "You", content: "Of course! What would you like to know?", time: "10:32 AM", fromMe: true },
    { sender: "Sarah Chen", content: "I'm trying to understand useEffect dependencies better.", time: "10:33 AM", fromMe: false },
    { sender: "You", content: "Great question! Let me explain with an example...", time: "10:35 AM", fromMe: true },
    { sender: "Sarah Chen", content: "Looking forward to our session tomorrow!", time: "10:45 AM", fromMe: false },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar role={role} />
      
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto h-[calc(100vh-4rem)]">
          <h1 className="text-3xl font-bold mb-6 text-foreground">Messages</h1>
          
          <div className="grid grid-cols-12 gap-6 h-[calc(100%-5rem)]">
            {/* Conversations List */}
            <Card className="col-span-4 shadow-card border-border overflow-hidden flex flex-col">
              <div className="p-4 border-b border-border">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search conversations..." className="pl-10" />
                </div>
              </div>
              
              <ScrollArea className="flex-1">
                <div className="divide-y divide-border">
                  {conversations.map((conv, index) => (
                    <div
                      key={index}
                      className={`p-4 cursor-pointer hover:bg-muted/50 transition-colors ${
                        conv.active ? "bg-muted" : ""
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                            {conv.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold text-foreground truncate">{conv.name}</h3>
                            <span className="text-xs text-muted-foreground">{conv.time}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                            {conv.unread > 0 && (
                              <span className="ml-2 px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full">
                                {conv.unread}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </Card>

            {/* Chat Window */}
            <Card className="col-span-8 shadow-card border-border overflow-hidden flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                      SC
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-foreground">Sarah Chen</h3>
                    <p className="text-xs text-muted-foreground">Active now</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="w-5 h-5" />
                </Button>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-6">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.fromMe ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-[70%] ${message.fromMe ? "order-1" : "order-2"}`}>
                        <div
                          className={`rounded-lg p-3 ${
                            message.fromMe
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-foreground"
                          }`}
                        >
                          <p>{message.content}</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 px-1">
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Message Input */}
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <Input placeholder="Type a message..." className="flex-1" />
                  <Button size="icon">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chats;
