
import Image from 'next/image';
import {
  Globe,
  DollarSign,
  Accessibility,
  Shield,
  Coins,
  CheckCircle,
  BarChart2,
  Users,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/home/animated-section';
import { BackButton } from '@/components/back-button';

const challenges = [
  {
    icon: <Coins className="h-10 w-10 text-destructive" />,
    title: 'Socio-Economic Burden',
    description:
      'High travel costs create a financial burden on students, limiting their campus activities and participation in university life.',
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: 'Safety & Public Health',
    description:
      'Reliance on external public transport poses health risks and safety concerns, especially with poor sanitation and overcrowding.',
  },
  {
    icon: <Accessibility className="h-10 w-10 text-accent" />,
    title: 'The Last-Mile Gap',
    description:
      'The distance between public transit stations and central campus facilities hinders timely and equitable access for many students.',
  },
];

const solutions = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'People (Well-being)',
    description:
      'Enhancing student well-being, safety, and providing equitable access for all, including those with disabilities.',
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'Planet (Sustainability)',
    description:
      'Reducing our carbon footprint and contributing to a sustainable campus environment for future generations.',
  },
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: 'Profit (Financial Stability)',
    description:
      'Creating a financially stable, efficient, and scalable service that reduces long-term operational costs.',
  },
];


export default function AnalysisPage() {
  return (
    <>
      <AnimatedSection as="section" id="hero" animation="fade-in" parallax staggerChildren className="relative h-[70vh] w-full flex items-center justify-center text-center text-white overflow-hidden rounded-lg">
        <Image
          src="/images/hero1.png"
          alt="Clean and Green shuttle on a scenic road"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4 py-8 max-w-4xl mx-auto backdrop-blur-sm bg-black/20 rounded-lg">
            <p className="text-sm uppercase tracking-widest text-primary-foreground/80 animate-fade-in-down [animation-delay:0.3s]">
                Campus Transportation: Sustainability and Efficiency
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mt-2 animate-fade-in-down">
                Strategic Analysis of the Clean & Green Shuttle Service
            </h1>
        </div>
      </AnimatedSection>
      
      <div className="container py-12 md:py-20">
        
        <AnimatedSection as="section" id="challenges" animation="fade-up" staggerChildren className="text-center max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight animate-fade-in-down">Addressing Systemic Deficiencies in Campus Mobility</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-down [animation-delay:0.3s]">
                Our campus community faces key transportation issues that impact operational efficiency and compromise student well-being.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {challenges.map(item => (
                    <Card key={item.title} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-primary/20">
                        <CardHeader className="items-center">
                            <div className="p-4 bg-secondary rounded-full">
                                {item.icon}
                            </div>
                            <CardTitle className="mt-4 text-xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </AnimatedSection>

        <AnimatedSection as="section" id="solution" animation="fade-up" staggerChildren className="py-16 md:py-24 bg-secondary mt-16 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center container">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold tracking-tight animate-fade-in-down">Our Solution: A Triple Bottom Line Framework</h2>
                    <p className="mt-4 text-lg text-muted-foreground animate-fade-in-down [animation-delay:0.3s]">
                        Our electric fleet delivers social, environmental, and financial benefits, measured by the Triple Bottom Line (TBL) framework. This positions the project as a strategic asset that reduces long-term costs.
                    </p>
                    <div className="mt-8 space-y-6">
                        {solutions.map(item => (
                            <div key={item.title} className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full mt-1">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl group">
                    <Image
                        src="/images/bus2.png"
                        alt="Fleet of new electric shuttles"
                        data-ai-hint="electric bus road"
                        data-animate="scale"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
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
