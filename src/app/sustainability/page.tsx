
"use client";
import { Leaf, Wind, Mountain } from "lucide-react";
import Image from "next/image";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { AnimatedCounter } from "@/components/animated-counter";
import { AnimatedSection } from "@/components/home/animated-section";
import { BackButton } from "@/components/back-button";

const stats = [
  {
    icon: <Mountain className="h-8 w-8 text-primary" />,
    value: 12543,
    label: "CO₂ Saved (kg)",
    description: "Equivalent to planting 200 trees.",
    image: "/images/co2.png",
    decimals: 0,
  },
  {
    icon: <Wind className="h-8 w-8 text-primary" />,
    value: 85,
    label: "Air Quality Improvement",
    description: "AQI score has improved by 15% on campus.",
    image: "/images/air.png",
    decimals: 0,
  },
  {
    icon: <Leaf className="h-8 w-8 text-primary" />,
    value: 30,
    label: "Noise Pollution Reduction (dB)",
    description: "Creating a quieter, more peaceful learning environment.",
    image: "/images/noise1.png",
    decimals: 0,
  },
];

const chartData = [
  { type: "CO₂ Emissions (g/km)", fuel: 147, electric: 0 },
  { type: "Running Cost (per km)", fuel: 8.5, electric: 2.1 },
  { type: "Noise Level (dB)", fuel: 75, electric: 45 },
];

const chartConfig = {
  fuel: { label: "Fuel Vehicle", color: "hsl(var(--muted-foreground))" },
  electric: { label: "Electric Shuttle", color: "hsl(var(--chart-1))" },
} satisfies ChartConfig;

const sdgs = [
    { id: 3, title: "Good Health and Well-being", imageUrl: "/images/heart.png" },
    { id: 7, title: "Affordable and Clean Energy", imageUrl: "/images/sun.jpg" },
    { id: 9, title: "Industry, Innovation, and Infrastructure", imageUrl: "/images/HEXA.JPG" },
    { id: 11, title: "Sustainable Cities and Communities", imageUrl: "/images/sdg.jpg" },
    { id: 13, title: "Climate Action", imageUrl: "/images/climate.jpg" },
]

export default function SustainabilityPage() {
  return (
    <>
      <AnimatedSection as="section" id="hero" animation="fade-in" parallax staggerChildren className="relative h-[70vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src="/images/image copy 5.png"
          alt="Clean and Green Shuttle Service"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold animate-zoom-in-fade-in" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
            Clean and Green Shuttle Service
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto animate-zoom-in-fade-in [animation-delay:0.3s]" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.6)'}}>
            Our shuttle service is more than a ride. It's a promise for a
            sustainable future.
          </p>
        </div>
      </AnimatedSection>

      <div className="container py-12 md:py-20" id="content">
        
        <AnimatedSection as="section" id="stats" animation="fade-up" staggerChildren>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="group text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-accent/20 overflow-hidden">
                <div className="relative h-40 w-full">
                  <Image
                    src={(stat as any).image}
                    alt={stat.label}
                    fill
                    className="object-cover transition-all duration-500 group-hover:blur-[2px] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 [perspective:1000px]">
                    <div className="h-full w-full bg-black/60 text-white flex flex-col items-center justify-center gap-2 transition-transform duration-700 [transform-style:preserve-3d] [transform-origin:left] [transform:rotateY(-90deg)] group-hover:[transform:rotateY(0deg)]">
                      <p className="text-xs uppercase tracking-widest">{stat.label}</p>
                      <div className="text-4xl font-bold text-primary-foreground">
                        <AnimatedCounter targetValue={stat.value} decimals={stat.decimals} />
                      </div>
                      <p className="text-xs text-neutral-200">{stat.description}</p>
                    </div>
                  </div>
                </div>
                <CardHeader className="flex flex-col items-center">
                  {stat.icon}
                  <CardTitle className="mt-4">{stat.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-5xl font-bold text-primary">
                    <AnimatedCounter
                      targetValue={stat.value}
                      decimals={stat.decimals}
                    />
                  </div>
                  <p className="mt-2 text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection as="section" id="comparison" animation="fade-up" staggerChildren className="relative py-12 md:py-20 bg-secondary mt-16 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-lime-400/15 to-teal-500/15" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
                <div className="p-6 rounded-xl bg-white/70 dark:bg-black/30 backdrop-blur-sm shadow-lg">
                    <p className="text-xs font-semibold tracking-widest text-primary uppercase">Smarter Than Fuel</p>
                    <h2 className="text-3xl font-bold mt-2">Electric vs. Fuel: The Numbers</h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        Our electric shuttles aren't just a green alternative; they're a smarter one. Here's how they stack up against traditional fuel-powered vehicles in key areas.
                    </p>
                    <div className="mt-8 space-y-5">
                        <div className="flex items-start gap-4 group">
                            <div className="bg-primary/20 text-primary p-3 rounded-full">
                                <Mountain className="h-6 w-6"/>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold">Zero Tailpipe Emissions</h4>
                                <p className="text-muted-foreground">Our shuttles produce no harmful exhaust fumes, directly improving campus air quality.</p>
                    <div className="mt-3 h-2 w-full bg-secondary rounded-full overflow-hidden">
                                    <div className="h-full w-3/4 bg-primary rounded-full" data-animate="bar" data-target-width="85%" />
                    </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 group">
                            <div className="bg-primary/20 text-primary p-3 rounded-full">
                                <Leaf className="h-6 w-6"/>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold">Lower Operating Costs</h4>
                                <p className="text-muted-foreground">Electricity is cheaper than fuel, and EVs require less maintenance, making the service highly efficient.</p>
                                <div className="mt-3 h-2 w-full bg-secondary rounded-full overflow-hidden">
                                    <div className="h-full w-2/3 bg-primary rounded-full" data-animate="bar" data-target-width="75%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Card className="group shadow-lg transition-all duration-500 hover:-translate-y-2 hover:bg-card/80 hover:shadow-2xl hover:scale-[1.02]">
                    <CardHeader>
                        <CardTitle>Performance Comparison</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <ChartContainer config={chartConfig} className="h-[350px] w-full transition-transform duration-500 group-hover:scale-[1.01]">
                        <BarChart data={chartData} layout="vertical" margin={{ left: 20 }}>
                        <CartesianGrid horizontal={false} />
                        <YAxis
                            dataKey="type"
                            type="category"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={10}
                            width={140}
                            className="text-sm text-muted-foreground"
                        />
                        <XAxis type="number" hide />
                        <Bar dataKey="fuel" fill="var(--color-fuel)" radius={4} isAnimationActive animationDuration={800} animationBegin={150} animationEasing="ease-out" />
                        <Bar dataKey="electric" fill="var(--color-electric)" radius={4} isAnimationActive animationDuration={800} animationBegin={350} animationEasing="ease-out" />
                        </BarChart>
                    </ChartContainer>
                    </CardContent>
                </Card>
            </div>
        </AnimatedSection>

        <AnimatedSection as="section" id="sdgs" animation="fade-up" staggerChildren className="py-16 md:py-24 bg-background">
            <div className="text-center">
                <h2 className="text-3xl font-bold animate-fade-in-down">Alignment with UN Sustainable Development Goals</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-down [animation-delay:0.3s]">
                    Our initiative actively contributes to the United Nations Sustainable Development Goals (SDGs), making a global impact from our campus.
                </p>
                <div className="mt-10 flex justify-center gap-4 md:gap-8 flex-wrap">
                    {sdgs.map(goal => (
                        <div key={goal.id} className="flex flex-col items-center w-32 text-center">
                            <div className="w-28 h-28 flex items-center justify-center p-1 bg-white rounded-md shadow-md hover:scale-105 transition-transform duration-300">
                                <a href={`https://sdgs.un.org/goals/goal${goal.id}`} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                                    <Image 
                                        src={(goal as any).imageUrl || `https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/E_SDG_Icons-${String(goal.id).padStart(2, '0')}.jpg`}
                                        alt={`SDG ${goal.id}`} 
                                        fill
                                        className="rounded-md object-contain p-2"/>
                                </a>
                            </div>
                            <h4 className="mt-3 font-semibold text-xs">{goal.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
      </div>
      <div className="py-12 text-center">
        <BackButton />
      </div>
    </>
  );
}
