
'use client';

import { useRef, useEffect, type ElementType } from 'react';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type AnimatedSectionProps = {
  as?: ElementType;
  className?: string;
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'zoom-in' | 'slide-left' | 'slide-right' | 'fade-in';
  staggerChildren?: boolean;
  parallax?: boolean;
  pin?: boolean;
  [key: string]: any;
};

export function AnimatedSection({
  as: Component = 'div',
  className,
  children,
  animation = 'fade-up',
  staggerChildren = false,
  parallax = false,
  pin = false,
  ...props
}: AnimatedSectionProps) {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = elementRef.current as HTMLElement | null;
    if (!el) return;

    const fromVars: gsap.TweenVars = { autoAlpha: 0 };
    const toVars: gsap.TweenVars = { autoAlpha: 1, ease: 'power2.out', duration: 0.8 };

    if (animation === 'fade-up') {
      fromVars.y = 32; toVars.y = 0;
    } else if (animation === 'fade-down') {
      fromVars.y = -32; toVars.y = 0;
    } else if (animation === 'zoom-in') {
      fromVars.scale = 0.95; toVars.scale = 1;
    } else if (animation === 'slide-left') {
      fromVars.x = 24; toVars.x = 0;
    } else if (animation === 'slide-right') {
      fromVars.x = -24; toVars.x = 0;
    } else {
      // fade-in default
    }

    const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 85%', once: true } });

    if (staggerChildren && el.children.length) {
      gsap.set(el.children, fromVars);
      tl.to(el.children, { ...toVars, stagger: 0.1 });
    } else {
      gsap.set(el, fromVars);
      tl.to(el, toVars);
    }

    if (parallax) {
      gsap.to(el, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true }
      });
    }

    const bars = el.querySelectorAll<HTMLElement>('[data-animate="bar"]');
    bars.forEach((bar) => {
      const target = bar.dataset.targetWidth || '80%';
      gsap.fromTo(bar, { width: '0%' }, {
        width: target,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: { trigger: bar, start: 'top 90%', once: true }
      });
    });

    const scalers = el.querySelectorAll<HTMLElement>('[data-animate="scale"]');
    scalers.forEach((node) => {
      gsap.fromTo(node, { scale: 0.95, autoAlpha: 0 }, {
        scale: 1,
        autoAlpha: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: node, start: 'top 85%', once: true }
      });
    });

    const parallaxChildren = el.querySelectorAll<HTMLElement>('[data-animate="parallax"]');
    parallaxChildren.forEach((node) => {
      const distance = parseFloat(node.dataset.distance || '10');
      gsap.to(node, {
        yPercent: distance,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });

    const scrollXChildren = el.querySelectorAll<HTMLElement>('[data-animate="scroll-x"]');
    scrollXChildren.forEach((node) => {
      const distance = parseFloat(node.dataset.distance || '10');
      gsap.to(node, {
        xPercent: distance,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });

    const floatChildren = el.querySelectorAll<HTMLElement>('[data-animate="float"]');
    floatChildren.forEach((node) => {
      const distance = parseFloat(node.dataset.distance || '2');
      gsap.to(node, {
        yPercent: distance,
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      });
    });

    const floatXChildren = el.querySelectorAll<HTMLElement>('[data-animate="float-x"]');
    floatXChildren.forEach((node) => {
      const distance = parseFloat(node.dataset.distance || '2');
      gsap.to(node, {
        xPercent: distance,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      });
    });

    if (pin) {
      ScrollTrigger.create({ trigger: el, start: 'top top', end: '+=400', pin: true });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      tl.kill();
    };
  }, [animation, staggerChildren, parallax, pin]);

  return (
    <Component ref={elementRef} className={cn('will-change-transform', className)} {...props}>
      {children}
    </Component>
  );
}
