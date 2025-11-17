
import Image from 'next/image';
import Link from 'next/link';
import { MoveRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AnimatedCounter } from '@/components/animated-counter';
import imageData from '@/lib/placeholder-images.json';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { AnimatedSection } from '@/components/home/animated-section';

const images: Record<string, ImagePlaceholder> =
  imageData.placeholderImages.reduce((acc, img) => {
    acc[img.id] = img;
    return acc;
  }, {} as Record<string, ImagePlaceholder>);


const fleet = [
  {
    name: 'Main Campus Loop',
    description:
      'Our primary shuttle connecting all major academic buildings, libraries, and student centers.',
    href: '/fleet/campus-loop',
    imageSrc: '/images/image copy 2.png',
    imageAlt: 'Main Campus Loop shuttle',
    imageHint: 'electric shuttle',
    features: [
      'High-frequency service',
      'Connects all major buildings',
      'Runs every 10 minutes',
    ],
  },
  {
    name: 'Islamabad City Connect',
    description:
      'Serving the local community by connecting key areas of Islamabad with our campus.',
    href: '/fleet/city-connect',
    imageSrc: '/images/image copy 3.png',
    imageAlt: 'Islamabad City Connect shuttle',
    imageHint: 'electric bus city',
    features: [
      'Connects campus to BRT stations',
      'Affordable fares for all',
      'Runs every 30 minutes',
    ],
  },
];

const testimonials = [
  {
    name: 'Fatima Khan',
    role: 'Computer Science Student',
    quote:
      'The shuttle service is a lifesaver! I can track it in real-time and never have to worry about being late for class.',
    avatar: images['testimonial-1'],
  },
  {
    name: 'Ali Ahmed',
    role: 'Business Administration Student',
    quote:
      "It's so convenient and affordable. Plus, it feels good to know I'm contributing to a greener campus. The app is super easy to use!",
    avatar: images['testimonial-2'],
  },
  {
    name: 'Ayesha Malik',
    role: 'Arts & Humanities Student',
    quote:
      'I feel much safer commuting within the campus, especially during the evenings. The tracking feature gives me and my parents peace of mind.',
    avatar: images['testimonial-3'],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <AnimatedSection as="section" animation="fade-in" parallax staggerChildren className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/images/image.png"
          alt="Hero image for Clean and Green Shuttle Service"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="relative z-10 flex flex-col items-center px-4 md:px-12 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 whitespace-nowrap animate-fade-in-down" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
            Clean & Green Shuttle Service
          </h1>
          <p className="text-lg md:text-xl text-neutral-200 mb-8 animate-fade-in-down [animation-delay:0.3s]" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.6)'}}>
            The future of campus and city mobility is here. Clean, efficient, and always
            on time.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold group animate-fade-in-down [animation-delay:0.6s]"
          >
            <Link href="/track">
              Track a Shuttle Now <MoveRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </AnimatedSection>

      {/* Meet Our Fleet Section */}
      <AnimatedSection as="section" id="fleet" animation="fade-up" staggerChildren className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Meet Our Fleet</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art electric shuttles for campus and city-wide
              transport.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {fleet.map(shuttle => (
              <Card
                key={shuttle.name}
                className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group hover:bg-primary/20"
              >
                <div className="relative h-56 overflow-hidden">
                    <Image
                        src={shuttle.imageSrc}
                        alt={shuttle.imageAlt}
                        data-ai-hint={shuttle.imageHint}
                        data-animate="scale"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{shuttle.name}</CardTitle>
                  <CardDescription>{shuttle.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    {shuttle.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6 w-full">
                    <Link href={shuttle.href}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CO2 Saved Counter Section */}
      <AnimatedSection as="section" id="impact" animation="zoom-in" parallax className="relative py-32 md:py-48 text-white">
        <Image
          src="/images/image copy.png"
          alt="A white electric shuttle bus driving on a coastal road."
          data-ai-hint="future bus"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container text-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold animate-fade-in-down">
            Our Collective Impact
          </h2>
          <p className="mt-4 text-lg text-neutral-200 max-w-2xl mx-auto animate-fade-in-down [animation-delay:0.3s]">
            Every ride contributes to a cleaner, greener campus for everyone.
          </p>
          <div className="mt-8 bg-white/20 backdrop-blur-sm p-8 rounded-lg shadow-xl inline-block animate-fade-in-down [animation-delay:0.6s]">
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-100">
              CO₂ Saved (in kg)
            </p>
            <div className="text-6xl md:text-7xl font-bold text-white mt-2">
              <AnimatedCounter targetValue={12543} />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection as="section" id="testimonials" animation="fade-up" staggerChildren className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              What Our Riders Say
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from students and locals who love our shuttle service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <Card
                key={testimonial.name}
                className="flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-accent/20"
              >
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </CardContent>
                <CardHeader>
                  <div className="flex items-center">
                    {testimonial.avatar && (
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={testimonial.avatar.imageUrl}
                          alt={testimonial.name}
                          data-ai-hint={testimonial.avatar.imageHint}
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div className="ml-4">
                      <p className="font-semibold text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

    