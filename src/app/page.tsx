"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Brain,
  Workflow,
  Puzzle,
  Compass,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Globe,
  Quote,
  Calendar,
} from "lucide-react";

// Social Icons as inline SVGs
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
import clsx from "clsx";

// ============ DATA ============

const quicklinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQ", href: "#faq" },
];

const services = [
  {
    icon: Brain,
    title: "Agentic AI Development",
    description:
      "Autonomous AI agents that think, decide, and act on your behalf",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "End-to-end automation of repetitive workflows and manual tasks",
  },
  {
    icon: Puzzle,
    title: "Custom AI Integrations",
    description: "Connecting AI tools into your existing software stack",
  },
  {
    icon: Compass,
    title: "Workflow Consulting & Design",
    description:
      "Mapping and redesigning your operations for maximum efficiency",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots & Virtual Assistants",
    description:
      "24/7 intelligent assistants for support, sales, and operations",
  },
];

const integrations = [
  { name: "Slack", category: "Communication" },
  { name: "HubSpot", category: "CRM" },
  { name: "Google Workspace", category: "Productivity" },
  { name: "Salesforce", category: "CRM" },
  { name: "Notion", category: "Productivity" },
  { name: "Zoom", category: "Communication" },
  { name: "Microsoft Teams", category: "Communication" },
  { name: "Zapier", category: "Automation" },
  { name: "Shopify", category: "E-Commerce" },
  { name: "QuickBooks", category: "Finance" },
  { name: "Stripe", category: "Finance" },
  { name: "OpenAI", category: "AI" },
];

const processSteps = [
  {
    num: "01",
    title: "Discover",
    description:
      "We audit your current workflows and identify automation opportunities",
  },
  {
    num: "02",
    title: "Design",
    description:
      "We architect a custom AI automation blueprint for your business",
  },
  {
    num: "03",
    title: "Deploy",
    description:
      "We build and integrate your automation systems with zero disruption",
  },
  {
    num: "04",
    title: "Optimize",
    description:
      "We monitor, refine, and scale your systems for peak performance",
  },
];


const faqs = [
  {
    q: "Do I need a technical background to use your automations?",
    a: "No. We handle everything and deliver systems your team can use with zero coding knowledge.",
  },
  {
    q: "How long does it take to build an automation?",
    a: "Simple automations go live in 48 hours. Complex agentic AI systems typically take 1–3 weeks.",
  },
  {
    q: "Will this work with my existing tools?",
    a: "Yes. We integrate with 200+ tools including Google Workspace, HubSpot, Notion, Slack, and more.",
  },
  {
    q: "Is this only for large enterprises?",
    a: "Not at all. We serve startups and small businesses too — our solutions are priced and scoped to your size.",
  },
];

// ============ COMPONENTS ============

function Navbar({ onContactClick }: { onContactClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/1-1.png"
              alt="MC Technology"
              className="h-9 w-auto transition-opacity duration-300 group-hover:opacity-80"
            />
          </a>

          <div className="hidden lg:flex items-center gap-12">
            {quicklinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm text-white/60 hover:text-white transition-colors duration-300 tracking-wide group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#d4a574] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onContactClick}
              className="hidden sm:flex items-center gap-2 border border-[#d4a574]/40 hover:border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574]/10 px-6 py-2.5 rounded-sm text-sm font-medium tracking-wide transition-all duration-300"
            >
              Get Started
            </button>
            <button
              className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#050505]/95 border-t border-white/5"
          >
            <div className="px-6 py-8 space-y-6">
              {quicklinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-white/70 hover:text-white text-base tracking-wide"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={onContactClick}
                className="flex items-center justify-center gap-2 border border-[#d4a574]/40 text-[#d4a574] px-6 py-3 rounded-sm font-medium mt-4 w-full"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="min-h-[100dvh] bg-[#050505] flex items-center relative overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#d4a574]/15 via-[#8b7355]/10 to-transparent rounded-full blur-[120px]" />

      {/* Thin decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      {/* Horizontal line */}
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto px-6 lg:px-8 py-32 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[#d4a574] text-sm tracking-[0.3em] uppercase mb-8"
            >
              AI AUTOMATION & AGENTIC SERVICES AGENCY
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white mb-8 leading-[0.9] tracking-tight"
            >
              Automate. Build.
              <br />
              <span className="text-gold-gradient">Scale with AI.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-white/40 text-lg md:text-xl max-w-lg mb-12 leading-relaxed"
            >
              We build AI automation systems, AI-powered applications, and autonomous multi-agent solutions that eliminate manual work and scale your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 bg-[#d4a574] hover:bg-[#e8c99b] text-[#050505] px-8 py-4 rounded-sm font-semibold text-sm tracking-wide transition-all duration-300"
              >
                Automate My Business
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-3 border border-white/20 hover:border-[#d4a574]/50 text-white px-8 py-4 rounded-sm font-medium text-sm tracking-wide transition-all duration-300"
              >
                Explore Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Elegant scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-white/30 text-xs tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}

function QuicklinksSection() {
  return (
    <section className="bg-[#0c0c0c] border-y border-white/5 py-5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <span className="text-white/20 text-xs tracking-[0.2em] uppercase flex-shrink-0 mr-4">Navigate:</span>
          {quicklinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="flex-shrink-0 text-sm text-white/50 hover:text-[#d4a574] transition-colors duration-300 tracking-wide px-4 py-1 border-l border-white/10 last:border-r last:border-r-white/10"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="bg-[#050505] py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-[#d4a574] text-sm tracking-[0.3em] uppercase mb-4">What We Build</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
            Powerful automation
            <br />
            <span className="text-white/30">solutions for your business</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group border border-white/5 hover:border-[#d4a574]/30 bg-[#0c0c0c]/50 p-8 md:p-10 rounded-sm transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-start gap-6">
                  <span className="text-6xl md:text-7xl font-display font-bold text-white/5 group-hover:text-[#d4a574]/10 transition-colors duration-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <service.icon className="w-5 h-5 text-[#d4a574]" strokeWidth={1.5} />
                      <h3 className="font-display font-semibold text-xl md:text-2xl text-white group-hover:text-[#d4a574] transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-white/40 text-sm md:text-base max-w-xl leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#d4a574] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm tracking-wide">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntegrationsSection() {
  return (
    <section id="integrations" className="bg-[#0c0c0c] py-24 md:py-40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#d4a574] text-sm tracking-[0.3em] uppercase mb-4">Integrations</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight">
            Works with your tools
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Seamless integration with 200+ tools your team already uses
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {integrations.map((app, i) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="group bg-[#111111] border border-white/5 hover:border-[#d4a574]/40 rounded-sm p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 cursor-pointer"
            >
              <Globe className="w-6 h-6 text-white/30 group-hover:text-[#d4a574] transition-colors duration-300" strokeWidth={1.5} />
              <span className="text-sm font-medium text-white/50 group-hover:text-white transition-colors duration-300">
                {app.name}
              </span>
              <span className="text-xs text-white/20">{app.category}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white/20 text-sm mt-12 tracking-wide">
          + 188 more integrations available
        </p>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="bg-[#050505] py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-[#d4a574] text-sm tracking-[0.3em] uppercase mb-4">How We Work</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
            A proven methodology
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-[#d4a574]/20 via-[#d4a574]/40 to-[#d4a574]/20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative pt-12 lg:pt-0"
              >
                <div className="lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:pt-0">
                  <div className="w-12 h-12 border border-[#d4a574]/30 rounded-sm bg-[#0c0c0c] flex items-center justify-center mb-6 lg:mb-8">
                    <span className="font-display font-bold text-[#d4a574] text-sm">{step.num}</span>
                  </div>
                </div>
                <div className="lg:pt-20 lg:text-center">
                  <h3 className="font-display font-semibold text-xl text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#0c0c0c] py-24 md:py-40 border-y border-white/5">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-[#d4a574] text-sm tracking-[0.3em] uppercase mb-4">FAQ</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
            Questions? Answers.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border border-white/5 hover:border-[#d4a574]/20 rounded-sm overflow-hidden transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
              >
                <span className="font-display font-medium text-white pr-4">{faq.q}</span>
                <span className="flex-shrink-0 text-[#d4a574]">
                  {openIndex === i ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 md:px-8 md:pb-8 text-white/50 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section id="contact" className="bg-[#050505] py-24 md:py-40 relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4a574]/5 via-transparent to-transparent" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-8 tracking-tight">
            Ready to automate?
            <br />
            <span className="text-gold-gradient">Let's get started.</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
            Book a free strategy call and discover how AI automation can
            transform your business in the next 30 days.
          </p>
          <button
            onClick={onContactClick}
            className="group inline-flex items-center justify-center gap-3 bg-[#d4a574] hover:bg-[#e8c99b] text-[#050505] px-10 py-5 rounded-sm font-semibold text-sm tracking-wide transition-all duration-300"
          >
            Book a Free Strategy Call
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, you'd send this to your backend/email service
    const mailtoLink = `mailto:connect@theteammc.com?subject=Strategy Call Request&body=Name: ${encodeURIComponent(formData.name)}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0APreferred Date: ${encodeURIComponent(formData.date)}`;
    window.location.href = mailtoLink;
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", date: "" });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[#0c0c0c] border border-white/10 rounded-sm p-8 md:p-10 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-[#d4a574]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Quote className="w-8 h-8 text-[#d4a574]" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">Thank you!</h3>
                <p className="text-white/50">We&apos;ll be in touch shortly.</p>
              </motion.div>
            ) : (
              <>
                <h3 className="font-display font-bold text-2xl text-white mb-2">Book Your Strategy Call</h3>
                <p className="text-white/40 text-sm mb-8">Fill in your details and we&apos;ll reach out to schedule your consultation.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-white/60 text-sm mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#111111] border border-white/10 rounded-sm px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#d4a574]/50 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white/60 text-sm mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#111111] border border-white/10 rounded-sm px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#d4a574]/50 transition-colors"
                      placeholder="+1 555-123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-white/60 text-sm mb-2">Preferred Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#111111] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#d4a574]/50 transition-colors appearance-none"
                        min={new Date().toISOString().split("T")[0]}
                      />
                      <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#d4a574] hover:bg-[#e8c99b] text-[#050505] py-4 rounded-sm font-semibold text-sm tracking-wide transition-all duration-300 mt-6"
                  >
                    Submit Request
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0c0c0c] py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src="/1-1.png" alt="MC Technology" className="h-10 w-auto mb-6 opacity-70" />
            <p className="text-white/30 text-sm leading-relaxed mb-6">
              Intelligent Automation for Modern Businesses
            </p>
            <div className="space-y-3">
              <a
                href="mailto:connect@theteammc.com"
                className="flex items-center gap-2 text-white/30 hover:text-[#d4a574] text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                connect@theteammc.com
              </a>
              <p className="flex items-center gap-2 text-white/30 text-sm">
                <Phone className="w-4 h-4" />
                +1 206-552-8424
              </p>
              <p className="flex items-center gap-2 text-white/30 text-sm">
                <MapPin className="w-4 h-4" />
                1729 208th ST SE, Suite 103, BOTHELL, WA 98012
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.title}>
                  <a href="#services" className="text-white/30 hover:text-white text-sm transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/30 hover:text-white text-sm transition-colors">About</a></li>
              <li><a href="#" className="text-white/30 hover:text-white text-sm transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-white/30 hover:text-white text-sm transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-white/30 hover:text-white text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/30 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/30 hover:text-white text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/30 hover:text-white text-sm transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-sm">
            © 2025 MC Technology. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="https://www.linkedin.com/company/mctechnology/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#d4a574] transition-colors duration-300">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/MCTechnologyLLC" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#d4a574] transition-colors duration-300">
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a href="https://x.com/MCtechno1ogy" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#d4a574] transition-colors duration-300">
              <XIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============ MAIN PAGE ============

export default function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main>
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      <HeroSection />
      <QuicklinksSection />
      <ServicesSection />
      <IntegrationsSection />
      <ProcessSection />

      <FAQSection />
      <CTASection onContactClick={() => setIsContactOpen(true)} />
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  );
}
