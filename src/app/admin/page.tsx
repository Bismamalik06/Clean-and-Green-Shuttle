
import { AiOptimizerForm } from "@/components/ai-optimizer-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks, Lightbulb, Bot } from "lucide-react";
import { AnimatedSection } from "@/components/home/animated-section";
import { BackButton } from "@/components/back-button";

export default function AdminPage() {
  return (
    <>
      <AnimatedSection as="div" animation="fade-up" staggerChildren className="container py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-in-down">
            AI Route Optimization
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-down [animation-delay:0.3s]">
            Automatically optimize shuttle routes based on real-time passenger
            demand and traffic conditions.
          </p>
        </div>

        <Card className="mb-12 shadow-lg bg-secondary">
          <CardHeader>
            <CardTitle className="text-2xl text-secondary-foreground">How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8 text-secondary-foreground">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/20 text-primary p-4 rounded-full mb-4">
                  <ListChecks className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">1. Provide Data</h3>
                <p className="text-sm">
                  Use the interactive forms to input real-time information for
                  passenger demand, traffic, and current routes.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/20 text-primary p-4 rounded-full mb-4">
                  <Bot className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">2. Run Optimization</h3>
                <p className="text-sm">
                  Click the "Optimize Routes" button. Our AI will analyze the
                  data to find the most efficient routing solutions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/20 text-primary p-4 rounded-full mb-4">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">3. Get Results</h3>
                <p className="text-sm">
                  The AI will provide a new, optimized route schedule and explain
                  the reasoning behind its decisions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <AiOptimizerForm />
      </AnimatedSection>
      <div className="py-12 text-center">
        <BackButton />
      </div>
    </>
  );
}
