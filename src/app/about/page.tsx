
"use client";
import Image from 'next/image';
import {
  Globe,
  Users,
  Lightbulb,
  Rocket,
  Sparkles,
  Flag,
  FileCheck,
  Scaling,
  RefreshCw,
  DollarSign,
  BarChart2,
  CheckCircle,
  Leaf,
  Wind,
  Mountain,
  MoveRight,
  AlertTriangle,
  MapPin,
  Wallet,
  Ticket,
  CreditCard,
  Calculator,
  Coins,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/home/animated-section';
import Link from 'next/link';
import { AnimatedCounter } from '@/components/animated-counter';
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Button } from '@/components/ui/button';
import { BackButton } from '@/components/back-button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const chartData = [
  { type: "CO₂ Emissions (g/km)", fuel: 147, electric: 0 },
  { type: "Running Cost (per km)", fuel: 8.5, electric: 2.1 },
  { type: "Noise Level (dB)", fuel: 75, electric: 45 },
];

const chartConfig = {
  fuel: { label: "Fuel Vehicle", color: "hsl(var(--muted-foreground))" },
  electric: { label: "Electric Shuttle", color: "hsl(var(--primary))" },
} satisfies ChartConfig;

const phases = [
  {
    title: 'Phase I: Pilot Program',
    description:
      'Deploy 4 LSVs on high-demand routes, establishing baseline metrics for cost, utilization, and student satisfaction.',
    image: '/images/bus1.png',
  },
  {
    title: 'Phase II: Expansion',
    description:
      'Scale the fleet, implement a full multi-level revenue model, and research solar integration to optimize performance.',
    image: '/images/bus2.png',
  },
  {
    title: 'Phase III: Integration',
    description:
      'Achieve financial self-sufficiency, explore local manufacturing partnerships, and integrate data into academic research.',
    image: '/images/golf1.webp',
  },
];

const presentationSlides = [
  { src: '/images/PPP.png', title: 'Public–Private Partnership', description: 'Collaborative funding and operations model.' },
  { src: '/images/citymap.png', title: 'City Connectivity', description: 'Route integration with major hubs and BRT.' },
  { src: '/images/co2.png', title: 'CO₂ Reduction', description: 'Electric fleet lowers greenhouse gas emissions.' },
  { src: '/images/noise.png', title: 'Noise Reduction', description: 'Quieter vehicles enhance campus experience.' },
  { src: '/images/air.png', title: 'Air Quality', description: 'Cleaner air and improved public health outcomes.' },
  { src: '/images/buses.png', title: 'Fleet Preview', description: 'Modern electric vehicles ready for deployment.' },
  { src: '/images/card5.png', title: 'Sustainable Transportation', description: 'Modern electric vehicles ready for deployment.' },

];

export default function AboutPage() {
  return (
    <>
      <AnimatedSection as="section" id="hero" animation="zoom-in" parallax staggerChildren className="hero">
        <Image
          src="/images/image copy 9.png"
          alt="Abstract green and yellow lines"
          data-ai-hint="abstract pattern"
          data-animate="scale"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="hero-overlay" />
        <div className="relative z-10 px-4">
            <h1 className="text-4xl md:text-5xl font-bold mt-2 animate-fade-in-down text-gradient">
                About Clean & Green
            </h1>
            <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto animate-fade-in-down [animation-delay:0.3s]">
                We are a passionate team dedicated to revolutionizing campus mobility through sustainable and innovative solutions.
            </p>
        </div>
      </AnimatedSection>

      

      

      <AnimatedSection as="section" id="our-mission" className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-5xl">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        To provide a safe, reliable, and eco-friendly transportation service that enhances the university experience for students, faculty, and the broader community. We believe in connecting people and places sustainably.
                    </p>
                    <div className="mt-8 space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full mt-1">
                                <Lightbulb className="h-8 w-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Innovation</h3>
                                <p className="text-muted-foreground">Leveraging technology to create efficient, user-friendly services.</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full mt-1">
                                <Globe className="h-8 w-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Sustainability</h3>
                                <p className="text-muted-foreground">Committing to a zero-emissions fleet to protect our environment.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full mt-1">
                                <Users className="h-8 w-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Community</h3>
                                <p className="text-muted-foreground">Building a connected and accessible campus for everyone.</p>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl group">
                    <Image
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="A diverse team collaborating on a project with laptops and notes."
                        data-ai-hint="innovative team working"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </div>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" id="students-challenges" animation="fade-up" parallax staggerChildren className="relative py-16 md:py-24 rounded-2xl overflow-hidden">
        <Image
          src="/images/bus2.png"
          alt="Campus shuttle background"
          data-ai-hint="electric bus background"
          data-animate="parallax"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20" />
        <div className="container relative max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="inline-block text-4xl md:text-5xl font-black tracking-tight text-black bg-white px-6 py-3 rounded-2xl drop-shadow-2xl ring-2 ring-primary/40 border border-primary/30" data-animate="scale">Students’ Challenges</h2>
            <p className="mt-3 inline-block text-base md:text-lg text-black bg-white px-6 py-2 rounded-full shadow-md ring-1 ring-primary/30 border border-primary/20">Key constraints impacting daily mobility and campus experience.</p>
          </div>

          <div className="relative">
            <svg className="absolute inset-x-0 -top-8 h-24 w-full pointer-events-none" viewBox="0 0 100 24" preserveAspectRatio="none">
              <path d="M50 2 C 50 12, 15 12, 15 22" stroke="hsl(var(--primary))" strokeWidth="0.8" fill="none" opacity="0.4" />
              <path d="M50 2 C 50 12, 50 12, 50 22" stroke="hsl(var(--primary))" strokeWidth="0.8" fill="none" opacity="0.4" />
              <path d="M50 2 C 50 12, 85 12, 85 22" stroke="hsl(var(--primary))" strokeWidth="0.8" fill="none" opacity="0.4" />
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="group relative overflow-hidden rounded-xl border bg-gradient-to-br from-sky-100 to-sky-200/60 dark:from-sky-900/20 dark:to-sky-800/20 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <CardHeader className="items-center">
                  <div className="w-16 h-16 rounded-full bg-sky-500/20 ring-4 ring-sky-300/30 flex items-center justify-center" data-animate="scale">
                    <DollarSign className="h-8 w-8 text-sky-600" />
                  </div>
                  <CardTitle className="mt-4 text-xl">Financial burden and stress</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">High inflation and escalating accommodation costs place a significant financial burden on students.</p>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden rounded-xl border bg-gradient-to-br from-rose-100 to-rose-200/60 dark:from-rose-900/20 dark:to-rose-800/20 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <CardHeader className="items-center">
                  <div className="w-16 h-16 rounded-full bg-rose-500/20 ring-4 ring-rose-300/30 flex items-center justify-center" data-animate="scale">
                    <MapPin className="h-8 w-8 text-rose-600" />
                  </div>
                  <CardTitle className="mt-4 text-xl">Large distance gap</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">The considerable distance between metro stations and the university creates logistical challenges: late arrivals, unpredictable weather, and seasonal extremes.</p>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden rounded-xl border bg-gradient-to-br from-lime-100 to-lime-200/60 dark:from-lime-900/20 dark:to-lime-800/20 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <CardHeader className="items-center">
                  <div className="w-16 h-16 rounded-full bg-lime-500/20 ring-4 ring-lime-300/30 flex items-center justify-center" data-animate="scale">
                    <AlertTriangle className="h-8 w-8 text-lime-700" />
                  </div>
                  <CardTitle className="mt-4 text-xl">Traffic congestion & safety concerns</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Public transport contributes to congestion and increased accident risk along approaches to the campus.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      
      

      <AnimatedSection as="section" id="triple-bottom-line" className="py-16 md:py-24 bg-background">
        <div className="container max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Our Solution: A Triple Bottom Line Framework</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our electric fleet delivers social, environmental, and financial benefits, measured by the Triple Bottom Line (TBL) framework. This positions the project as a strategic asset that reduces long-term costs.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group relative overflow-hidden text-center rounded-xl border bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400" />
              <CardHeader className="items-center">
                <div className="relative w-20 h-20 rounded-full mx-auto bg-gradient-to-br from-blue-200 to-blue-400/50 ring-4 ring-blue-300/30 flex items-center justify-center shadow-md transition-transform duration-500 group-hover:scale-110">
                  <Users className="h-10 w-10 text-blue-600" />
                  <span className="absolute inset-0 rounded-full animate-pulse bg-blue-300/10" />
                </div>
                <CardTitle className="mt-4 text-xl">People (Well-being)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Enhancing student well-being, safety, and providing equitable access for all, including those with disabilities.</p>
              </CardContent>
              <Button variant="secondary" size="icon" className="absolute bottom-4 right-4 rounded-full shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                <MoveRight className="h-4 w-4" />
              </Button>
            </Card>
            <Card className="group relative overflow-hidden text-center rounded-xl border bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400" />
              <CardHeader className="items-center">
                <div className="relative w-20 h-20 rounded-full mx-auto bg-gradient-to-br from-green-200 to-green-400/50 ring-4 ring-green-300/30 flex items-center justify-center shadow-md transition-transform duration-500 group-hover:scale-110">
                  <Globe className="h-10 w-10 text-green-600" />
                  <span className="absolute inset-0 rounded-full animate-pulse bg-green-300/10" />
                </div>
                <CardTitle className="mt-4 text-xl">Planet (Sustainability)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Reducing our carbon footprint and contributing to a sustainable campus environment for future generations.</p>
              </CardContent>
              <Button variant="secondary" size="icon" className="absolute bottom-4 right-4 rounded-full shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                <MoveRight className="h-4 w-4" />
              </Button>
            </Card>
            <Card className="group relative overflow-hidden text-center rounded-xl border bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400" />
              <CardHeader className="items-center">
                <div className="relative w-20 h-20 rounded-full mx-auto bg-gradient-to-br from-yellow-200 to-amber-400/50 ring-4 ring-yellow-300/30 flex items-center justify-center shadow-md transition-transform duration-500 group-hover:scale-110">
                  <DollarSign className="h-10 w-10 text-amber-600" />
                  <span className="absolute inset-0 rounded-full animate-pulse bg-amber-300/10" />
                </div>
                <CardTitle className="mt-4 text-xl">Profit (Financial Stability)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Creating a financially stable, efficient, and scalable service that reduces long-term operational costs.</p>
              </CardContent>
              <Button variant="secondary" size="icon" className="absolute bottom-4 right-4 rounded-full shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                <MoveRight className="h-4 w-4" />
              </Button>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" id="revenue-1" animation="fade-up" parallax staggerChildren className="py-16 md:py-24 bg-background">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Revenue Generation Model</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">Three pricing options designed to keep the service affordable while ensuring operational sustainability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="text-left">
              <span className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">Our Pricing</span>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight">Drive Affordable Campus Mobility</h3>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">Choose from three pricing models tuned for student affordability and operational sustainability.</p>
              <div className="mt-6">
                <Button size="lg">See Pricing Details</Button>
              </div>
            </div>
            <div className="relative h-[420px] md:h-[460px]">
              <div className="absolute right-0 top-8 w-72 h-72 md:w-96 md:h-96 rounded-[40%] bg-emerald-400/20 blur-3xl" />
              <div className="absolute left-6 bottom-6 w-40 h-40 rounded-full bg-teal-400/20 blur-2xl" />

              <Card className="absolute left-4 top-0 w-52 md:w-64 h-64 md:h-72 shadow-2xl rounded-2xl overflow-hidden group z-10" data-animate="float" data-distance="1.5">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500" />
                <CardHeader className="items-start px-6 pt-6">
                  <div className="text-5xl font-black text-indigo-600">#1</div>
                  <CardTitle className="mt-3">Highly Discounted</CardTitle>
                </CardHeader>
                <CardContent className="px-6">
                  <p className="text-sm text-muted-foreground">Strength <span className="font-semibold">16,000+</span></p>
                  <p className="text-sm text-muted-foreground">Fee per student <span className="font-semibold">2500</span></p>
                  <p className="text-sm text-muted-foreground">Revenue <span className="font-semibold">40,000,000</span></p>
                </CardContent>
              </Card>

              <Card className="absolute left-40 md:left-56 top-24 w-48 md:w-60 h-56 md:h-64 shadow-xl rounded-2xl overflow-hidden group z-20 transition-transform duration-300 hover:z-50 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl" data-animate="float-x" data-distance="2">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500" />
                <CardHeader className="items-start px-6 pt-6">
                  <div className="text-5xl font-black text-pink-600">#2</div>
                  <CardTitle className="mt-3">Pay Per Ride</CardTitle>
                </CardHeader>
                <CardContent className="px-6">
                  <p className="text-sm text-muted-foreground">Peak <span className="font-semibold">300</span></p>
                  <p className="text-sm text-muted-foreground">Average <span className="font-semibold">200</span></p>
                  <p className="text-sm text-muted-foreground">Low <span className="font-semibold">200</span></p>
                </CardContent>
              </Card>

              <Card className="absolute left-20 md:left-36 top-44 w-48 md:w-60 h-56 md:h-64 shadow-xl rounded-2xl overflow-hidden z-0" data-animate="float-x" data-distance="-2">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500" />
                <CardHeader className="items-start px-6 pt-6">
                  <div className="text-5xl font-black text-indigo-600">#3</div>
                  <CardTitle className="mt-3">Monthly Passes</CardTitle>
                </CardHeader>
                <CardContent className="px-6">
                  <p className="text-sm text-muted-foreground">Price <span className="font-semibold">Rs 1000–2000</span></p>
                  <p className="text-sm text-muted-foreground">Subscribers <span className="font-semibold">10–30%</span></p>
                  <p className="text-sm text-muted-foreground">Stability <span className="font-semibold">High</span></p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-2">
            <Card className="group relative overflow-hidden text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 min-h-[320px] md:min-h-[360px]" data-animate="float-x" data-distance="-4">
              <Image src="/images/card1.png" alt="Revenue chart" fill data-animate="float" data-distance="2" className="object-cover transition duration-500 group-hover:blur-sm" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/60 transition-colors" />
              <CardHeader className="relative z-10 items-center text-white">
                <Calculator className="h-8 w-8 text-primary" />
                <CardTitle className="mt-2 text-white">Modeled Annual Revenue</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 text-white">
                <div className="text-4xl font-bold text-primary"><AnimatedCounter targetValue={1320000} /></div>
                <p className="mt-2 text-white/80">Based on pay-per-ride baseline scenario.</p>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 min-h-[320px] md:min-h-[360px]" data-animate="float-x" data-distance="4">
              <Image src="/images/card2.png" alt="Abstract finance" fill data-animate="float" data-distance="2" className="object-cover transition duration-500 group-hover:blur-sm" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/60 transition-colors" />
              <CardHeader className="relative z-10 items-center text-white">
                <Coins className="h-8 w-8 text-primary" />
                <CardTitle className="mt-2 text-white">Semester Revenue</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 text-white">
                <div className="text-4xl font-bold text-primary">40,000,000</div>
                <p className="mt-2 text-white/80">Discounted semester fee model.</p>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 min-h-[320px] md:min-h-[360px]" data-animate="float-x" data-distance="3">
              <Image src="/images/card3.png" alt="Recurring passes" fill data-animate="float" data-distance="1.5" className="object-cover transition duration-500 group-hover:blur-sm" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/60 transition-colors" />
              <CardHeader className="relative z-10 items-center text-white">
                <RefreshCw className="h-8 w-8 text-primary" />
                <CardTitle className="mt-2 text-white">Recurring Passes</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 text-white">
                <div className="text-4xl font-bold text-primary">Stable</div>
                <p className="mt-2 text-white/80">Predictable monthly cashflow.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" id="journey" animation="fade-in" staggerChildren className="relative mt-8 md:mt-12 py-10 md:py-16 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-teal-500/15 to-indigo-500/15" />
        <div className="container relative max-w-5xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Our Journey: From Idea to Impact</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our project follows a clear, phased roadmap to ensure financial success and operational excellence.
            </p>
          </div>
          <div className="mx-auto max-w-4xl mt-6 mb-5 px-2">
            <div className="h-1 rounded-full bg-gradient-to-r from-primary via-emerald-500 to-blue-500" />
            <div className="mt-2 flex justify-between px-2 text-sm md:text-base text-muted-foreground tracking-wide">
              <span>Phase I</span>
              <span>Phase II</span>
              <span>Phase III</span>
            </div>
          </div>
          <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: false })]} className="mt-8 w-full">
            <CarouselContent>
              {phases.map((phase) => (
                <CarouselItem key={phase.title}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start w-full">
                    <div className="relative p-8 rounded-3xl bg-white/90 dark:bg-black/30 backdrop-blur-md shadow-2xl border border-primary/30 ring-1 ring-black/5 md:ml-4 md:mr-6 space-y-2 max-w-lg" data-animate="scroll-x" data-distance="-8">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 rounded-t-3xl" />
                      <span className="absolute -top-3 left-6 w-3 h-3 rounded-full bg-emerald-400 shadow" />
                      <h3 className="text-2xl font-extrabold tracking-tight text-foreground">{phase.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{phase.description}</p>
                    </div>
                    <div className="group relative h-[32vh] md:h-[42vh] w-full rounded-3xl overflow-hidden shadow-2xl ring-2 ring-primary/20 border border-white/20 md:mt-0 md:ml-8" data-animate="scroll-x" data-distance="10">
                      <Image src={phase.image} alt={phase.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </AnimatedSection>

  <AnimatedSection as="section" id="validation-precedent" className="py-16 md:py-24 bg-background">
    <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Validation and Precedent
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              The shift to Low-Speed Electric Vehicles is supported by global
              market trends and a successful local implementation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col group hover:bg-primary/20">
              <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <Image
                  src="/images/image copy 6.png"
                  alt="Financial chart showing growth"
                  data-ai-hint="market growth chart"
                  width={600}
                  height={400}
                  className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <BarChart2 className="h-8 w-8 text-primary" />
                  <CardTitle>Global Market Growth</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  The electric golf cart industry is projected to grow at a CAGR
                  of 8.03% from 2025 to 2034, with the fastest growth in the
                  Asia-Pacific region.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col group hover:bg-green-900/40">
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src="/images/image copy 7.png"
                  alt="A solar-powered electric shuttle"
                  data-ai-hint="solar shuttle"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                  <CardTitle>Proven Pakistani Model</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  The Aga Khan University Hospital in Karachi successfully
                  implemented a solar-cum-electric shuttle service in 2013,
                  saving 7.1 tons of CO2 annually.
                </p>
              </CardContent>
            </Card>
          </div>
           <div className="mt-12 text-center">
            <Button asChild size="lg" className="group">
              <Link href="/details">
                View More Details
                <MoveRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" id="project-challenges" animation="fade-up" className="py-16 md:py-24 bg-background">
        <div className="container max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Project Challenges</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">Key hurdles identified during planning and stakeholder alignment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <div className="relative p-6 rounded-2xl bg-card shadow-lg ring-1 ring-primary/20">
                <div className="absolute -left-4 -top-4 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-semibold">Public transport</h3>
                <p className="text-muted-foreground">Stopping the operation of existing public transport.</p>
              </div>
              <div className="relative p-6 rounded-2xl bg-card shadow-lg ring-1 ring-primary/20">
                <div className="absolute -left-4 -top-4 h-10 w-10 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-semibold">Successful negotiation</h3>
                <p className="text-muted-foreground">Successful negotiation with business stakeholders.</p>
              </div>
              <div className="relative p-6 rounded-2xl bg-card shadow-lg ring-1 ring-primary/20">
                <div className="absolute -left-4 -top-4 h-10 w-10 rounded-full bg-lime-600 text-white flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-semibold">Limited availability</h3>
                <p className="text-muted-foreground">Limited availability of golf carts in Pakistan.</p>
              </div>
              <div className="relative p-6 rounded-2xl bg-card shadow-lg ring-1 ring-primary/20">
                <div className="absolute -left-4 -top-4 h-10 w-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">4</div>
                <h3 className="text-xl font-semibold">After sale support</h3>
                <p className="text-muted-foreground">Availability of technical experts and spare parts is limited.</p>
              </div>
            </div>
            <div className="relative h-[520px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/card7.png" alt="Challenges slide" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      

      <AnimatedSection as="section" id="legal" className="relative py-16 md:py-24 bg-secondary rounded-xl overflow-hidden">
        <Image src="/images/image copy 4.png" alt="Section background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative p-10 rounded-2xl bg-white/95 dark:bg-black/50 backdrop-blur-md shadow-2xl border border-primary/30 ring-2 ring-primary/20 transition-all duration-500 hover:shadow-3xl hover:-translate-y-1.5" data-animate="float" data-distance="1.5">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-t-2xl" />
              <div className="absolute -left-10 -top-10 w-56 h-56 rounded-full bg-primary/25 blur-3xl" />
              <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-teal-300/25 blur-2xl" />
              <div className="flex items-center gap-3">
                <FileCheck className="h-7 w-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">Legal & Intellectual Protection</h2>
              </div>
              <p className="mt-6 text-base md:text-lg text-muted-foreground">
                "This project is protected under the Copyright Ordinance 1962 by the IPO Islamabad, and the allotted trademark No # 842717"
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground">
                "As B ICON's policies provide guidance on protecting intellectual property, legal protection has been provided for this project by following this guidance."
              </p>
            </div>
            <div className="group relative h-96 w-full rounded-xl overflow-hidden bg-transparent shadow-2xl">
              <div className="absolute -top-3 right-6 w-8 h-8 rounded-full bg-sky-400 shadow-lg ring-4 ring-sky-200 animate-bounce" />
              <Image
                src="/images/legal.png"
                alt="Trademark certificate"
                fill
                className="object-contain p-6 rotate-1 origin-center transition-transform duration-500 group-hover:rotate-3 group-hover:scale-[1.45]"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" id="presentation" className="py-16 md:py-24 bg-background">
        <div className="container max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Presentation Highlights</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">Key snapshots from our deck, adapted to web style.</p>
          </div>
          <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 4000 })]} className="w-full">
            <CarouselContent>
              {presentationSlides.map((slide) => (
                <CarouselItem key={slide.title} className="md:basis-2/3 lg:basis-1/2">
                  <Card className="group relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-2">
                    <div className="relative h-[55vh] md:h-[60vh] w-full">
                      <Image src={slide.src} alt={slide.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <CardTitle className="text-2xl font-bold">{slide.title}</CardTitle>
                        <p className="mt-2 text-white/80">{slide.description}</p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" id="revenue-2" animation="fade-up" className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Revenue Generation Model</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">Three options tuned for affordability and operational sustainability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <Card className="relative overflow-hidden shadow-lg">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400" />
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-xl"><span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white font-bold">1</span>Highly Discounted Semester Fee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Strength <span className="font-semibold">16,000+</span></p>
                  <p className="text-sm text-muted-foreground">Fee per student <span className="font-semibold">2500/semester</span></p>
                  <p className="text-sm text-muted-foreground">Revenue <span className="font-semibold">40,000,000</span></p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden shadow-lg">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500" />
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-xl"><span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-600 text-white font-bold">2</span>Pay Per Ride System</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Peak <span className="font-semibold">300</span></p>
                  <p className="text-sm text-muted-foreground">Average <span className="font-semibold">200</span></p>
                  <p className="text-sm text-muted-foreground">Low <span className="font-semibold">200</span></p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden shadow-lg">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500" />
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-xl"><span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">3</span>Monthly Passes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Price <span className="font-semibold">Rs 1000–2000</span></p>
                  <p className="text-sm text-muted-foreground">Subscribers <span className="font-semibold">10–30%</span></p>
                  <p className="text-sm text-muted-foreground">Stability <span className="font-semibold">High</span></p>
                </CardContent>
              </Card>
            </div>

            <div className="relative h-[520px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/card8.png" alt="Revenue model overview" fill className="cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" id="cta" className="relative py-16 md:py-24">
         <Image
          src="/images/image8.png"
          alt="Abstract pattern of green and yellow lines"
          data-ai-hint="abstract pattern"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container text-center relative">
            <h2 className="text-3xl font-bold tracking-tight text-white">Interested in the Data?</h2>
            <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
                Our approach is backed by careful planning and analysis. Dive into the details of our strategy, market validation, and alignment with global goals.
            </p>
            <div className="mt-8 space-y-4">
                <div className="flex justify-center">
                    <BackButton className="h-12 md:h-14 w-48 md:w-60 px-8 text-base md:text-lg rounded-lg" />
                </div>
                <div className="flex justify-center">
                    <Link href="/analysis" className="inline-flex items-center justify-center h-12 px-8 font-medium text-lg text-primary-foreground bg-primary rounded-md shadow-md hover:bg-primary/90 transition-colors">
                        View Strategic Analysis
                    </Link>
                </div>
            </div>
        </div>
      </AnimatedSection>

      
    </>
  );
}
