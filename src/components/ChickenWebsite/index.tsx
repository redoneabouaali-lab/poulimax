"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  Check, Mail, MapPin, Phone, ArrowRight, Menu, X, 
  Activity, BarChart3, Bot, Calculator, TrendingUp, ShieldCheck,
  Globe, LayoutDashboard, Zap, Shield, Microscope
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * POULIMAX - Professional Enterprise Edition (Animated)
 * High-end animations for a premium tech experience.
 */

const ChickenWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLang, setActiveLang] = useState('ar');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const content = {
    ar: {
      navFeatures: "المميزات",
      navAI: "طبيب الدجاج",
      navPricing: "الأثمنة",
      cta: "ابدأ الآن",
      heroBadge: "نظام إدارة المداجن المغربي الاحترافي",
      heroTitle: "سيطر على إنتاجك مع بوليماكس",
      heroDesc: "منصة تقنية متكاملة للمربين المحترفين. تتبع دقيق للتكاليف، تحليلات متقدمة، واستشارات بيطرية مدعومة بالذكاء الاصطناعي.",
      heroBtn1: "ابدأ دورتك الإنتاجية",
      heroBtn2: "طلب عرض توضيحي",
      statsLabel: "زيادة متوسط الربح",
      featuresTitle: "أدوات دقيقة لإدارة احترافية",
      featuresDesc: "صممنا أدواتنا لتكون دقيقة كأداة جراحية، لضمان أعلى مستويات الكفاءة في مزرعتك.",
      aiTitle: "الاستشارة البيطرية الذكية (AI)",
      aiDesc: "مساعد رقمي متخصص في أمراض الدواجن، متاح على مدار الساعة لتقديم تشخيصات أولية دقيقة بناءً على معايير علمية عالمية.",
    },
    fr: {
      navFeatures: "Solutions",
      navAI: "IA Vétérinaire",
      navPricing: "Tarification",
      cta: "Démarrer",
      heroBadge: "Gestion Avicole Professionnelle au Maroc",
      heroTitle: "Optimisez votre production avec Poulimax",
      heroDesc: "Une plateforme technologique complète pour les éleveurs. Suivi précis des coûts, analyses avancées et conseils vétérinaires par IA.",
      heroBtn1: "Lancer un cycle",
      heroBtn2: "Demander une démo",
      statsLabel: "Augmentation du profit",
      featuresTitle: "Des outils de précision",
      featuresDesc: "Nos outils sont conçus pour garantir une efficacité maximale dans votre exploitation avicole.",
      aiTitle: "Consultation Vétérinaire Intelligente",
      aiDesc: "Un assistant numérique spécialisé en aviculture, disponible 24/7 pour fournir des diagnostics précis basés sur des normes mondiales.",
    }
  };

  const t = content[activeLang];
  const isRtl = activeLang === 'ar';

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-sans selection:bg-[#0f172a] selection:text-white" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#0f172a] origin-left z-[60]" style={{ scaleX }} />

      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-700",
        scrolled ? "bg-white/80 backdrop-blur-xl py-4 border-b border-gray-100" : "bg-transparent py-6"
      )}>
        <div className="container mx-auto px-8 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-8 h-8 bg-[#0f172a] rounded flex items-center justify-center">
              <Activity className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#0f172a]">POULIMAX</span>
          </motion.div>

          <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400">
            {['features', 'ai-doctor', 'pricing'].map((item, i) => (
              <motion.a 
                key={item}
                href={`#${item}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="hover:text-[#0f172a] transition-colors relative group"
              >
                {t[`nav${item === 'ai-doctor' ? 'AI' : item.charAt(0).toUpperCase() + item.slice(1)}`]}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0f172a] transition-all group-hover:w-full" />
              </motion.a>
            ))}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveLang(activeLang === 'ar' ? 'fr' : 'ar')}
              className="flex items-center gap-1.5 hover:text-[#0f172a] transition-colors border-l border-gray-200 pl-6 ml-2"
            >
              <Globe className="w-4 h-4" />
              {activeLang === 'ar' ? 'FR' : 'AR'}
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#000" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0f172a] text-white px-8 py-3 rounded text-[10px] font-bold transition-all shadow-lg shadow-black/5"
            >
              {t.cta}
            </motion.button>
          </div>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 border-b border-gray-100 bg-white overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 translate-x-1/2 -z-10" />
        
        <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className={cn(isRtl ? "text-right" : "text-left")}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#059669] mb-8">
              <span className="w-12 h-[1px] bg-[#059669]" />
              {t.heroBadge}
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-8xl font-bold text-[#0f172a] leading-[1] mb-10 tracking-tighter">
              {t.heroTitle}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-12 leading-relaxed max-w-xl">
              {t.heroDesc}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6">
              <motion.button 
                whileHover={{ x: isRtl ? -5 : 5 }}
                className="bg-[#0f172a] text-white px-10 py-6 rounded text-xs font-bold flex items-center justify-center gap-4 hover:shadow-2xl transition-all"
              >
                {t.heroBtn1}
                <ArrowRight className={cn("w-4 h-4", isRtl ? "rotate-180" : "")} />
              </motion.button>
              <motion.button 
                whileHover={{ backgroundColor: "#f9fafb" }}
                className="bg-white border border-gray-200 text-[#0f172a] px-10 py-6 rounded text-xs font-bold transition-all"
              >
                {t.heroBtn2}
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 rounded-xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-gray-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=1200" 
                alt="Poultry Management" 
                className="w-full transform hover:scale-105 transition-transform duration-[2s]"
              />
            </motion.div>
            {/* Animated Data Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className={cn(
                "absolute -bottom-12 bg-[#0f172a] text-white p-10 rounded shadow-3xl z-20",
                isRtl ? "-right-12" : "-left-12"
              )}
            >
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-500 rounded-full mb-4"
              />
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">{t.statsLabel}</p>
              <p className="text-5xl font-bold tracking-tighter">+24.8%</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features - Reveal with Stagger */}
      <section id="features" className="py-40 bg-[#fafafa]">
        <div className="container mx-auto px-8">
          <div className={cn("mb-32", isRtl ? "text-right" : "text-left")}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-[#0f172a] mb-8 tracking-tight"
            >
              {t.featuresTitle}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 max-w-2xl text-lg leading-relaxed"
            >
              {t.featuresDesc}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: isRtl ? "تتبع القطيع" : "Suivi Troupeau", icon: <LayoutDashboard />, color: "bg-blue-500" },
              { title: isRtl ? "حاسبة الربح" : "Analyse Marge", icon: <TrendingUp />, color: "bg-green-500" },
              { title: isRtl ? "الأمن الحيوي" : "Biosécurité", icon: <Shield />, color: "bg-red-500" },
              { title: isRtl ? "مخبر التحليل" : "Labo IA", icon: <Microscope />, color: "bg-purple-500" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                whileHover={{ y: -15 }}
                className={cn(
                  "group p-12 bg-white border border-gray-100 hover:border-gray-200 transition-all duration-500 rounded-lg shadow-sm hover:shadow-2xl",
                  isRtl ? "text-right" : "text-left"
                )}
              >
                <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-10 text-[#0f172a] group-hover:bg-[#0f172a] group-hover:text-white transition-all duration-500 group-hover:rotate-[360deg]">
                  {React.cloneElement(feature.icon as React.ReactElement, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold mb-5 tracking-tight">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  تكنولوجيا متقدمة تضمن لك الوصول إلى أعلى مستويات الإنتاجية بكفاءة عالية.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Doctor - Interactive Console */}
      <section id="ai-doctor" className="py-40 bg-white border-y border-gray-100 overflow-hidden relative">
        {/* Animated Background Line */}
        <motion.div 
          animate={{ x: [-1000, 1000] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-100 -z-10"
        />

        <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-32 items-center">
          <div className="relative">
            <motion.div 
              initial={{ rotate: -5, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="aspect-square bg-gray-50 rounded-3xl p-12 flex flex-col justify-center items-center"
            >
              <div className="w-full max-w-md bg-white rounded-lg shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden">
                <div className="bg-[#0f172a] p-5 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <Zap className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    Live Analysis Engine
                  </span>
                </div>
                <div className="p-10 space-y-8 font-mono">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2 }}
                    className={cn("text-[11px] text-gray-400 overflow-hidden whitespace-nowrap border-r border-gray-400", isRtl ? "text-right border-l" : "text-left")}
                  >
                    {isRtl ? "> فحص البيانات السريرية..." : "> Scanning clinical data..."}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className={cn("p-6 bg-[#0f172a]/5 border-l-2 border-[#0f172a] rounded text-[11px] text-[#0f172a] leading-relaxed", isRtl ? "text-right border-r-2 border-l-0" : "text-left")}
                  >
                    <span className="font-bold uppercase mb-2 block">{isRtl ? "التشخيص الذكي:" : "SMART DIAGNOSIS:"}</span>
                    {isRtl ? "احتمال إصابة تنفسية حادة. البروتوكول المقترح: تحسين تدفق الهواء بنسبة 15%." : "Acute respiratory risk. Protocol: Increase airflow by 15%."}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className={cn(isRtl ? "text-right" : "text-left")}>
            <motion.h2 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl font-bold text-[#0f172a] mb-10 tracking-tight"
            >
              {t.aiTitle}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 mb-12 leading-relaxed"
            >
              {t.aiDesc}
            </motion.p>
            <div className="grid gap-6">
              {[
                { label: isRtl ? "دقة تشخيص 94%" : "Diagnostic 94%", val: 94 },
                { label: isRtl ? "كفاءة إنتاج +18%" : "Efficience +18%", val: 18 }
              ].map((stat, i) => (
                <div key={i} className="space-y-3">
                  <div className={cn("flex justify-between text-xs font-bold uppercase tracking-wider", isRtl ? "flex-row-reverse" : "")}>
                    <span>{stat.label}</span>
                    <span>{stat.val}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.val}%` }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-[#0f172a]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-40 bg-[#fafafa]">
        <div className="container mx-auto px-8">
          <div className="text-center mb-32">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-4xl font-bold text-[#0f172a] mb-8 tracking-tight"
            >
              {t.pricingTitle}
            </motion.h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">نحن شركاؤك في النجاح، اختر الخطة التي تناسب حجم إنتاجك الحالي.</p>
          </div>

          <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-12 items-stretch">
            {/* Pro Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -10 }}
              className="bg-white p-14 rounded-xl border border-gray-200 shadow-sm transition-all flex flex-col"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-gray-300 mb-8">{isRtl ? "نسخة المربين" : "EDITION ELEVEURS"}</h3>
              <div className="flex items-baseline gap-3 mb-10">
                <span className="text-7xl font-bold text-[#0f172a]">0</span>
                <span className="text-2xl font-bold text-gray-300">DH</span>
              </div>
              <ul className="space-y-6 mb-16 flex-1 border-t border-gray-50 pt-10">
                {[isRtl ? "تتبع قطيع واحد" : "Suivi unique", isRtl ? "حاسبة الربح" : "Calcul marge", isRtl ? "دعم قياسي" : "Support standard"].map((item, i) => (
                  <li key={i} className={cn("flex items-center gap-5 text-sm font-semibold text-gray-500", isRtl ? "flex-row-reverse text-right" : "")}>
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-6 border border-[#0f172a] text-[#0f172a] rounded text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#0f172a] hover:text-white transition-all">
                {isRtl ? "ابدأ الآن" : "DÉMARRER"}
              </button>
            </motion.div>

            {/* Enterprise Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#0f172a] p-14 rounded-xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] text-white relative overflow-hidden flex flex-col"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"
              />
              <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-gray-500 mb-8 z-10">{isRtl ? "نسخة الشركات" : "EDITION ENTREPRISE"}</h3>
              <div className="flex items-baseline gap-3 mb-10 z-10">
                <span className="text-5xl font-bold">{isRtl ? "حسب الطلب" : "SUR MESURE"}</span>
              </div>
              <ul className="space-y-6 mb-16 flex-1 border-t border-white/5 pt-10 text-gray-400 z-10">
                {[isRtl ? "مزارع متعددة" : "Multi-fermes", isRtl ? "ذكاء اصطناعي كامل" : "IA Complète", isRtl ? "دعم 24/7" : "Support 24/7"].map((item, i) => (
                  <li key={i} className={cn("flex items-center gap-5 text-sm font-semibold", isRtl ? "flex-row-reverse text-right" : "")}>
                    <Check className="w-5 h-5 text-green-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-6 bg-white text-[#0f172a] rounded text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gray-100 transition-all z-10">
                {isRtl ? "اتصل بنا" : "CONTACTER"}
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-20 mb-24">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-6 h-6 bg-[#0f172a] rounded flex items-center justify-center">
                  <Activity className="text-white w-4 h-4" />
                </div>
                <span className="text-xl font-bold tracking-tight text-[#0f172a]">POULIMAX</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed font-medium">
                {isRtl ? "المعيار التقني الجديد لإدارة الثروة الداجنة في المغرب." : "Le nouveau standard technologique pour la gestion avicole au Maroc."}
              </p>
            </div>
            
            {/* Footer Links with Hover Effect */}
            {[
              { title: t.navFeatures, items: [isRtl ? "الخدمات" : "Services", isRtl ? "التكنولوجيا" : "Technologie"] },
              { title: "Contact", items: ["office@poulimax.ma", "+212 522 XX XX XX"] },
              { title: "Legal", items: ["© 2026 Poulimax S.A.R.L.", "Casablanca, Maroc"] }
            ].map((col, i) => (
              <div key={i} className={cn("flex flex-col gap-8", isRtl ? "text-right" : "text-left")}>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0f172a]">{col.title}</h4>
                <ul className="space-y-5 text-[13px] font-semibold text-gray-400">
                  {col.items.map((item, j) => (
                    <li key={j} className="hover:text-[#0f172a] transition-colors cursor-pointer">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center text-[9px] text-gray-300 uppercase tracking-[0.5em] pt-16 border-t border-gray-50">
            Poulimax - Advanced Agricultural Intelligence
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChickenWebsite;