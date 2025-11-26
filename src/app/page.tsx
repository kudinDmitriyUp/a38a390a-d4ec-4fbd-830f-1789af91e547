"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import SplitAboutMetric from '@/components/sections/about/SplitAboutMetric';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, BarChart3, Brain, Leaf, Mail, Sparkles, Target, TrendingUp, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="large"
      sizing="large"
      background="plain"
      cardStyle="solid-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="TechShop Milano"
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Insights", id: "insights" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Schedule Call",
            href: "contact"
          }}
          buttonClassName="text-sm font-semibold"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="TECHSHOP MILANO"
          description="Investing in the brightest tech innovations and ambitious founders shaping tomorrow's digital landscape"
          buttons={[
            { text: "View Portfolio", href: "portfolio" },
            { text: "Get in Touch", href: "contact" }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764149791968-lyk6c09e.jpg",
              imageAlt: "Modern tech innovation office"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764149792749-dztwauh4.jpg",
              imageAlt: "Venture capital investment analytics"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764149793443-nsy81635.jpg",
              imageAlt: "Fintech blockchain technology"
            }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
          logoContainerClassName="pt-8"
          descriptionClassName="text-lg font-light tracking-wide"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutMetric
          title="Empowering Europe's Tech Future"
          description={[
            "TechShop Milano is a venture capital firm dedicated to identifying and nurturing transformative technology companies across Europe. Since our founding, we have partnered with exceptional founders to scale innovative solutions in AI, fintech, deep tech, and climate technology. Our investment thesis focuses on companies that demonstrate strong market potential, visionary leadership, and the ability to create lasting impact."
          ]}
          metrics={[
            { label: "Successful Exits", value: "24+" },
            { label: "Portfolio Companies", value: "87" }
          ]}
          showBorder={false}
          titleClassName="text-6xl font-bold tracking-tight"
          descriptionClassName="text-xl leading-relaxed"
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <FeatureCardTwo
          title="Our Investment Focus"
          description="We strategically invest across high-growth technology sectors with strong market tailwinds and transformative potential"
          tag="Sectors"
          tagIcon={Sparkles}
          features={[
            {
              title: "Artificial Intelligence",
              description: "Supporting companies building next-generation AI solutions for enterprise and consumer markets",
              icon: Brain,
              button: { text: "Learn More", href: "#" }
            },
            {
              title: "Financial Technology",
              description: "Investing in fintech innovators disrupting banking, payments, and wealth management sectors",
              icon: TrendingUp,
              button: { text: "Learn More", href: "#" }
            },
            {
              title: "Deep Technology",
              description: "Backing breakthrough research and engineering with real-world commercial applications",
              icon: Zap,
              button: { text: "Learn More", href: "#" }
            },
            {
              title: "Climate Tech",
              description: "Partnering with founders solving climate challenges through technological innovation",
              icon: Leaf,
              button: { text: "Learn More", href: "#" }
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="split"
          carouselMode="buttons"
          containerClassName="space-y-12"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Track Record"
          description="Demonstrating consistent value creation and market leadership in European tech investment"
          tag="Performance"
          tagIcon={Award}
          metrics={[
            {
              id: "1",
              value: "€2.3B",
              title: "Assets Under Management",
              description: "Capital deployed across our investment portfolio",
              icon: BarChart3
            },
            {
              id: "2",
              value: "8.2x",
              title: "Average Return Multiple",
              description: "Consistent value creation for our limited partners",
              icon: Target
            },
            {
              id: "3",
              value: "45%",
              title: "Female Leadership",
              description: "Women in senior investment and operational roles",
              icon: Users
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="scale-rotate"
          textboxLayout="default"
          containerClassName="space-y-12"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Portfolio Success Stories"
          description="Hear from the exceptional founders we partner with and the companies we help scale"
          tag="Testimonials"
          testimonials={[
            {
              id: "1",
              name: "Marco Rossi",
              handle: "Founder, DataFlow AI",
              testimonial: "TechShop Milano didn't just provide capital. They opened doors to industry leaders, helped us scale our team, and believed in our vision when others were skeptical. Today, DataFlow serves Fortune 500 companies.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764149794137-n3voj3cx.jpg",
              imageAlt: "Marco Rossi, Founder of DataFlow AI"
            },
            {
              id: "2",
              name: "Giulia Benedetti",
              handle: "CEO, GreenEnergy Tech",
              testimonial: "The investment was transformational, but more importantly, their network and mentorship accelerated our growth by years. We went from prototype to series B in 18 months.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764149794846-lurzg38f.jpg",
              imageAlt: "Giulia Benedetti, CEO of GreenEnergy Tech"
            },
            {
              id: "3",
              name: "David Chen",
              handle: "Co-founder, FinanceFlow",
              testimonial: "Working with TechShop Milano partners was like having a board of advisors who genuinely cared about our success. Their strategic guidance helped us navigate complex market dynamics.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764149795533-awc74sfs.jpg",
              imageAlt: "David Chen, Co-founder of FinanceFlow"
            },
            {
              id: "4",
              name: "Lisa Müller",
              handle: "Founder, SecureNet",
              testimonial: "The combination of strategic capital and hands-on operational support gave us the confidence to pursue an ambitious roadmap. They treated us as partners, not just an investment.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764149796272-y6dkjr5e.jpg",
              imageAlt: "Lisa Müller, Founder of SecureNet"
            }
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="opacity"
          textboxLayout="default"
          containerClassName="space-y-12"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofTwo
          title="Our Limited Partners"
          description="Trusted by leading institutional investors and family offices across Europe"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764149796893-uhil95xo.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764149797550-96pync37.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764149798276-glm8aiye.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764149798736-0rucgwon.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764149799409-9bxmway5.jpg"
          ]}
          textboxLayout="default"
          containerClassName="space-y-12"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          tagIcon={Mail}
          title="Let's Build Something Extraordinary Together"
          description="Whether you're an exceptional founder seeking strategic investment or an LP interested in joining our fund, we'd love to hear from you"
          inputPlaceholder="your@company.com"
          buttonText="Schedule a Meeting"
          termsText="We respect your privacy. Your information will be used only for investment discussions."
          containerClassName="py-16"
          titleClassName="text-4xl font-bold"
          descriptionClassName="text-lg font-light"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="TechShop Milano"
          copyrightText="© 2025 TechShop Milano VC. All rights reserved."
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Investment Thesis", href: "portfolio" },
                { label: "Team", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Blog & Insights", href: "#" },
                { label: "Market Reports", href: "#" },
                { label: "Founder Resources", href: "#" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Compliance", href: "#" }
              ]
            }
          ]}
          containerClassName="mt-20"
        />
      </div>
    </ThemeProvider>
  );
}