"use client";

import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { ChevronDown, Check, Mail, MapPin, Phone, ArrowRight, Menu, X, ChevronRight, Activity, BarChart3, Bell, Thermometer, Database, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

// ============================================================================
// HEADER
// ============================================================================

const menuItems = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { scrollYProgress } = useScroll()

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrolled(latest > 0.05)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className="group fixed z-20 w-full pt-2">
        <div className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12', scrolled && 'bg-background/50 backdrop-blur-2xl')}>
          <motion.div
            key={1}
            className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}>
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <a href="/" aria-label="home" className="flex items-center space-x-2">
                <span className="text-2xl font-bold">🐔 ChickenFarm</span>
              </a>
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className="text-muted-foreground hover:text-accent-foreground block duration-150">
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className="text-muted-foreground hover:text-accent-foreground block duration-150">
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-2 rounded-full border bg-background hover:bg-muted transition-colors text-sm">
                  <span>Login</span>
                </motion.button>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm">
                  <span>Sign Up</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  )
}

// ============================================================================
// HERO SECTION WITH SCROLL ANIMATION
// ============================================================================

const ContainerScroll = ({ titleComponent, children }: { titleComponent: string | React.ReactNode; children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = () => (isMobile ? [0.7, 0.9] : [1.05, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20" ref={containerRef}>
      <div className="py-10 md:py-40 w-full relative" style={{ perspective: "1000px" }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>{children}</Card>
      </div>
    </div>
  );
};

const Header = ({ translate, titleComponent }: any) => (
  <motion.div style={{ translateY: translate }} className="div max-w-5xl mx-auto text-center">
    {titleComponent}
  </motion.div>
);

const Card = ({ rotate, scale, children }: { rotate: MotionValue<number>; scale: MotionValue<number>; translate: MotionValue<number>; children: React.ReactNode }) => (
  <motion.div
    style={{ rotateX: rotate, scale, boxShadow: "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003" }}
    className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl">
    <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
      {children}
    </div>
  </motion.div>
);

// ============================================================================
// PROOF SECTION
// ============================================================================

const ProofSection = () => {
  const logos = [
    { name: "FarmTech Solutions", img: "https://html.tailus.io/blocks/customers/nvidia.svg" },
    { name: "AgriCorp", img: "https://html.tailus.io/blocks/customers/column.svg" },
    { name: "PoultryPro", img: "https://html.tailus.io/blocks/customers/github.svg" },
    { name: "EggExcellence", img: "https://html.tailus.io/blocks/customers/nike.svg" },
    { name: "ChickenHub", img: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg" },
    { name: "FeedMaster", img: "https://html.tailus.io/blocks/customers/laravel.svg" },
  ];

  return (
    <section className="bg-background pb-16 pt-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6 mb-6 md:mb-0">
            <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="text-end text-sm text-muted-foreground">
              Trusted by leading farms
            </motion.p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)] overflow-hidden">
            <motion.div animate={{ x: ["-100%", "0%"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="flex gap-16 items-center">
              {[...logos, ...logos].map((logo, i) => (
                <img key={i} className="h-6 w-auto dark:invert opacity-60 hover:opacity-100 transition-opacity flex-shrink-0" src={logo.img} alt={logo.name} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// FEATURES SECTION
// ============================================================================

const FeaturesSection = () => {
  const features = [
    { icon: Activity, title: "Smart Monitoring", description: "Track your flock's health and behavior with AI-powered insights" },
    { icon: BarChart3, title: "Analytics Dashboard", description: "Real-time data visualization for better decision making" },
    { icon: Bell, title: "Instant Alerts", description: "Get notified immediately about any issues in your farm" },
    { icon: Thermometer, title: "Climate Control", description: "Automated temperature and humidity management" },
    { icon: Database, title: "Production Tracking", description: "Track and optimize egg laying patterns and feed consumption" },
    { icon: Heart, title: "Health Records", description: "Complete medical history and vaccination tracking" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-4xl font-bold mb-4">Powerful Features</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-muted-foreground text-lg">Everything you need to manage your chicken farm efficiently</motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05, y: -5 }} transition={{ delay: i * 0.1, duration: 0.4 }} className="p-6 rounded-xl bg-card border hover:shadow-lg transition-shadow">
                <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// PRICING SECTION
// ============================================================================

interface PricingCardProps {
  planName: string; description: string; price: string; features: string[]; buttonText: string; isPopular?: boolean;
}

const PricingCard = ({ planName, description, price, features, buttonText, isPopular = false }: PricingCardProps) => (
  <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -10, transition: { duration: 0.3 } }} transition={{ duration: 0.5 }}
    className={cn("relative rounded-2xl border p-8 bg-card transition-shadow hover:shadow-2xl", isPopular && "border-primary shadow-lg scale-105")}>
    {isPopular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">Most Popular</div>}
    <h3 className="text-2xl font-bold mb-2">{planName}</h3>
    <p className="text-muted-foreground mb-4">{description}</p>
    <div className="mb-6"><span className="text-4xl font-bold">${price}</span><span className="text-muted-foreground">/month</span></div>
    <ul className="space-y-3 mb-6">
      {features.map((feature, i) => (<li key={i} className="flex items-center gap-2"><Check className="w-5 h-5 text-primary" /><span>{feature}</span></li>))}
    </ul>
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
      className={cn("w-full py-3 rounded-lg font-semibold transition-colors", isPopular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-secondary-foreground hover:bg-secondary/80")}>
      {buttonText}
    </motion.button>
  </motion.div>
);

const PricingSection = () => {
  const plans: PricingCardProps[] = [
    { planName: "Starter", description: "Perfect for small farms", price: "29", features: ["Up to 100 chickens", "Basic health monitoring", "Email support", "Monthly reports"], buttonText: "Get Started" },
    { planName: "Professional", description: "For growing operations", price: "79", features: ["Up to 500 chickens", "Advanced analytics", "24/7 support", "Real-time alerts", "Custom integrations"], buttonText: "Start Free Trial", isPopular: true },
    { planName: "Enterprise", description: "For large-scale farms", price: "199", features: ["Unlimited chickens", "AI-powered insights", "Dedicated account manager", "Custom solutions", "Priority support"], buttonText: "Contact Sales" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold mb-4">Simple, Transparent Pricing</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-muted-foreground text-lg">Choose the perfect plan for your chicken farm</motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => <PricingCard key={plan.planName} {...plan} />)}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// FAQ SECTION
// ============================================================================

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    { question: "How does the chicken monitoring system work?", answer: "Our system uses IoT sensors and AI to track your chickens' health, behavior, and environment in real-time." },
    { question: "Can I integrate with my existing farm management software?", answer: "Yes, we offer APIs and integrations with most popular farm management platforms." },
    { question: "What kind of support do you provide?", answer: "We offer 24/7 email support for all plans, with phone support available for Professional and Enterprise tiers." },
    { question: "Is there a mobile app available?", answer: "Yes, our mobile app is available for both iOS and Android devices." },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold mb-4">Frequently Asked Questions</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-muted-foreground text-lg">Find answers to common questions about our platform</motion.p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="border rounded-lg overflow-hidden bg-card">
              <motion.button onClick={() => setOpenIndex(openIndex === index ? null : index)} whileHover={{ x: 5 }} className="w-full p-6 text-left flex justify-between items-center hover:bg-muted/50 transition-colors">
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown className={cn("w-5 h-5 transition-transform", openIndex === index && "rotate-180")} />
              </motion.button>
              <div className={cn("overflow-hidden transition-all duration-300", openIndex === index ? "max-h-96" : "max-h-0")}>
                <p className="px-6 pb-6 text-muted-foreground">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// TESTIMONIALS SECTION
// ============================================================================

const TestimonialsSection = () => {
  const testimonials = [
    { quote: "This platform transformed how we manage our farm. The analytics are incredible!", name: "John Smith", role: "Farm Owner", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
    { quote: "The real-time alerts saved us from a potential disaster. Highly recommended!", name: "Sarah Johnson", role: "Operations Manager", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400" },
    { quote: "Best investment we've made for our chicken farm. The ROI is amazing.", name: "Mike Davis", role: "Farm Director", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold mb-4">What Our Customers Say</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-muted-foreground text-lg">Trusted by farmers worldwide</motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 50, rotate: -5 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} whileHover={{ y: -10, scale: 1.02 }} transition={{ delay: i * 0.15, duration: 0.5 }} className="p-6 rounded-xl bg-card border hover:shadow-xl transition-shadow">
              <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// CONTACT SECTION
// ============================================================================

const ContactSection = () => (
  <section className="py-20 bg-background">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          <div className="space-y-4">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-3"><Mail className="w-5 h-5 text-primary" /><span>contact@chickenfarm.com</span></motion.div>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex items-center gap-3"><Phone className="w-5 h-5 text-primary" /><span>+1 (555) 123-4567</span></motion.div>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="flex items-center gap-3"><MapPin className="w-5 h-5 text-primary" /><span>123 Farm Road, Agriculture City, AC 12345</span></motion.div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border bg-background" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border bg-background" />
            <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-lg border bg-background" />
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">Send Message</motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
);

// ============================================================================
// FOOTER
// ============================================================================

const Footer = () => (
  <footer className="bg-muted/30 py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-bold text-lg mb-4">🐔 ChickenFarm</h3>
          <p className="text-sm text-muted-foreground">The ultimate platform for modern chicken farm management</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground"><li>Features</li><li>Pricing</li><li>Integrations</li><li>API</li></ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground"><li>About</li><li>Blog</li><li>Careers</li><li>Contact</li></ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <Mail className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
            <Phone className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
            <MapPin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="border-t pt-8 text-center text-sm text-muted-foreground">
        <p>© 2024 ChickenFarm. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const ChickenWebsite = () => (
  <div className="min-h-screen bg-background text-foreground">
    <HeroHeader />
    <ContainerScroll
      titleComponent={
        <>
          <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl font-bold text-foreground mb-4">
            Smart Chicken Farm<br /><span className="text-primary">Management Platform</span>
          </h1>
          <p className="mt-8 max-w-2xl text-balance text-lg text-muted-foreground mx-auto">Monitor, analyze, and optimize your chicken farm with AI-powered insights and real-time data</p>
          <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-center">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="h-12 rounded-full pl-5 pr-3 text-base bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-2">
              <span className="text-nowrap px-2">Start Building</span><ChevronRight className="w-5 h-5" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="h-12 rounded-full px-7 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5 transition-colors">
              <span className="text-nowrap">Request a demo</span>
            </motion.button>
          </div>
        </>
      }>
      <img src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1200&h=800&fit=crop" alt="Chicken farm" className="w-full h-full object-cover" />
    </ContainerScroll>
    <ProofSection />
    <section id="features"><FeaturesSection /></section>
    <section id="pricing"><PricingSection /></section>
    <section id="testimonials"><TestimonialsSection /></section>
    <FAQSection />
    <section id="contact"><ContactSection /></section>
    <Footer />
  </div>
);

export default ChickenWebsite;