
"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import SocialLinks from "@/components/social-links";
import { Mail, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/home/animated-section";

// footer_content
const footer_content = {
  title: "Ride Green. Ride Smart. The future of campus mobility.",
  description:
    "Our team is dedicated to providing a seamless, reliable, and sustainable transportation solution for the campus community.",
  phone: "+923238558754",
  contact_mail: "abdullahnumlian45@gmail.com",

  copy_right: (
    <>
      Powered By : <Link href="/"> Clean & Green </Link> –{" "}
      {new Date().getFullYear()}
    </>
  ),

  footer_links: [
    {
      id: 1,
      title: "Our Fleet",
      links: [
        { name: "Main Campus Loop", link: "/fleet/campus-loop" },
        { name: "Islamabad City Connect", link: "/fleet/city-connect" },
      ],
    },
    {
      id: 2,
      title: "Other Pages",
      links: [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Track", link: "/track" },
        { name: "Sustainability", link: "/sustainability" },
        { name: "Analysis", link: "/analysis" },
        { name: "Details", link: "/details" },
        { name: "Safety", link: "/safety" },
        { name: "Feedback", link: "/feedback" },
        { name: "Admin", link: "/admin" },
      ],
    },
    // University routes removed per request
  ],
};
const { title, description, phone, contact_mail, copy_right, footer_links } =
  footer_content;


export function Footer() {
  return (
    <>
    <footer>
      <div
        className="text-primary-foreground overflow-hidden"
        style={{ backgroundColor: 'hsl(228, 44%, 7%)' }}
      >
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* About Widget */}
            <AnimatedSection as="div" animation="fade-up" staggerChildren className="md:col-span-2 lg:col-span-1">
              <div className="tp-footer__widget">
                <Link href="/" className="tp-footer__widget-logo mb-6 flex items-center gap-2">
                  <Image
                    src="/logos/main-logo.png"
                    alt="Clean and Green Logo"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover shadow-md border-2 border-primary/50"
                  />
                  <span className="text-xl font-bold text-white">Clean & Green</span>
                </Link>
                <div className="tp-footer__text">
                  <p className="text-white/70">{description}</p>
                </div>
                <div className="tp-footer__social mt-6">
                  <SocialLinks />
                </div>
              </div>
            </AnimatedSection>

            {/* Links Widgets */}
            {footer_links.map((item, i) => (
              <AnimatedSection
                as="div"
                animation="fade-up"
                key={item.id}
              >
                <div className="tp-footer__widget">
                  <h4 className="font-bold mb-6 text-lg text-white">
                    {item.title}
                  </h4>
                  <ul className="space-y-3">
                    {item.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          href={link.link}
                          className="text-white/70 hover:text-primary transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}

            {/* Contact Widget */}
            <AnimatedSection as="div" animation="fade-up">
              <div className="tp-footer__widget">
                <h4 className="font-bold mb-6 text-lg text-white">
                  Contact Us
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">
                      <Phone className="h-5 w-5" />
                    </span>
                    <Link
                      href={`tel:${phone}`}
                      className="text-white/70 hover:text-primary transition-colors"
                    >
                      {phone}
                    </Link>
                  </li>
                  <li className="flex items-start gap-3">
                     <span className="text-primary mt-1">
                       <Mail className="h-5 w-5" />
                     </span>
                    <Link
                      href={`mailto:${contact_mail}`}
                      className="text-white/70 hover:text-primary transition-colors break-all"
                    >
                      {contact_mail}
                    </Link>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

        <div className="pt-8 mt-12 border-t border-white/10 text-center text-white/50 text-sm">
            <div className="flex justify-center mb-4">
              <div className="h-0.5 w-24 bg-gradient-to-r from-primary/60 to-primary rounded-full" />
            </div>
            <span>{copy_right}</span>
            <p className="mt-2">All materials are protected by copyright.</p>
        </div>
      </div>
    </div>
  </footer>
  <div className="h-2 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600" />
  </>
  );
}
