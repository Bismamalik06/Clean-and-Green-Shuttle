
"use client";

import { useState, useRef, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Bot, MessageSquare, Send, X, User } from "lucide-react";

import { sendMessage, type ChatbotState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Logo from "./logo";

const initialState: ChatbotState = {
  messages: [
    {
      role: "model",
      content: "Hi! I'm the Clean and Green Shuttle Service assistant. How can I help you today?",
    },
  ],
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="icon" disabled={pending}>
      <Send className="h-4 w-4" />
      <span className="sr-only">Send message</span>
    </Button>
  );
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, formAction] = useFormState(sendMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({
            top: scrollAreaRef.current.scrollHeight,
            behavior: 'smooth'
        });
    }
  }, [state.messages]);

  const handleFormAction = (formData: FormData) => {
    formAction(formData);
    formRef.current?.reset();
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          size="lg"
          className="rounded-full w-16 h-16 shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
          <span className="sr-only">Toggle Chatbot</span>
        </Button>
      </div>

      
      <div className={cn(
          "fixed bottom-24 right-4 z-50 w-full max-w-sm transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-[calc(100%+2rem)]"
          )}>
          <div className="bg-card border rounded-lg shadow-xl flex flex-col h-[60vh]">
            <header className="p-4 border-b flex items-center gap-3">
              <Bot className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-bold text-lg">Shuttle Service Bot</h3>
                <p className="text-sm text-muted-foreground">Your friendly campus assistant</p>
              </div>
            </header>

            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {state.messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-start gap-3",
                      message.role === "user" ? "justify-end" : ""
                    )}
                  >
                    {message.role === "model" && (
                      <div className="bg-primary text-primary-foreground p-2 rounded-full">
                        <Bot className="h-5 w-5" />
                      </div>
                    )}
                    <div
                      className={cn(
                        "p-3 rounded-lg max-w-xs",
                        message.role === "user"
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-muted"
                      )}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                     {message.role === "user" && (
                      <div className="bg-accent text-accent-foreground p-2 rounded-full">
                        <User className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>

            <footer className="p-4 border-t">
              <form
                ref={formRef}
                action={handleFormAction}
                className="flex items-center gap-2"
              >
                <Input
                  name="message"
                  placeholder="Ask a question..."
                  className="flex-1"
                  autoComplete="off"
                />
                <SubmitButton />
              </form>
            </footer>
          </div>
        </div>
      
    </>
  );
}
