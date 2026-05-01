"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { 
  Check, Mail, MapPin, Phone, ArrowRight, Menu, X, 
  Activity, BarChart3, Bot, Calculator, TrendingUp, ShieldCheck,
  Globe, LayoutDashboard, Zap, Shield, Microscope, Play, PlayCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * POULIMAX - Living Edition (With Videos)
 * A design that breathes life, using real footage and warm earthy tones.
 */

const ChickenWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLang, setActiveLang] = useState('ar');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

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
      cta: "ابدأ دورتك الآن",
      heroTitle: "مستقبل مداجنك يبدأ من هنا",
      heroDesc: "بوليماكس ماشي غير تطبيق، هو شريكك في الأرض. تتبع كتاكيتك، احسب أرباحك، وخلّي ذكاء بوليماكس يحميك من الخسارة.",
      statsLabel: "زيادة في المردودية",
      aiTitle: "مساعدك الذكي (طبيب الدجاج)",
      aiDesc: "سول طبيب الدجاج في أي وقت بالدارجة. كيفهم مشاكلك وكيعطيك الحل باش تحافظ على سلامة القطيع ديالك.",
      videoLabel: "شاهد دورة الحياة مع بوليماكس",
    },
    fr: {
      navFeatures: "Services",
      navAI: "IA Vétérinaire",
      navPricing: "Plans",
      cta: "Démarrer",
      heroTitle: "L'avenir de votre ferme commence ici",
      heroDesc: "Poulimax n'est pas qu'une application, c'est votre partenaire de terrain. Suivez vos poussins, calculez vos gains et laissez l'IA vous protéger.",
      statsLabel: "Hausse de rendement",
      aiTitle: "Assistant IA (Vétérinaire)",
      aiDesc: "Consultez l'IA en Darija à tout moment. Elle comprend vos défis et propose des solutions pour protéger votre élevage.",
      videoLabel: "Cycle de vie avec Poulimax",
    }
  };

  const t = content[activeLang];
  const isRtl = activeLang === 'ar';

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D241E] font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-700",
        scrolled ? "bg-white/90 backdrop-blur-xl py-3 border-b border-[#E8E1D5] shadow-sm" : "bg-transparent py-6"
      )}>
        <div className="container mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#4A5D23] rounded-lg flex items-center justify-center shadow-lg shadow-[#4A5D23]/20">
              <Activity className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#2D241E]">POULIMAX</span>
          </div>

          <div className="hidden lg:flex items-center gap-10 text-[12px] font-bold uppercase tracking-wider">
            <a href="#features" className="hover:text-[#4A5D23] transition-colors">{t.navFeatures}</a>
            <a href="#ai-doctor" className="hover:text-[#4A5D23] transition-colors">{t.navAI}</a>
            <button 
              onClick={() => setActiveLang(activeLang === 'ar' ? 'fr' : 'ar')}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E8E1D5] hover:bg-white transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-[#4A5D23]" />
              <span>{activeLang === 'ar' ? 'FR' : 'AR'}</span>
            </button>
            <button className="bg-[#4A5D23] text-white px-8 py-3 rounded-full text-xs font-bold hover:bg-[#3A491B] transition-all shadow-xl shadow-[#4A5D23]/20">
              {t.cta}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#2D241E]">
        {/* Video Background Layer */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover opacity-50 grayscale-[30%] brightness-[0.7]"
          >
            <source src="Move_them_eat_grass_walking_202604290945.mp4" type="video/mp4" />
          </video>
          {/* Warm Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2D241E]/80 via-transparent to-[#FDFBF7]" />
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <div className={cn("max-w-3xl", isRtl ? "text-right" : "text-left")}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 bg-[#4A5D23]/20 backdrop-blur-md text-[#A5C16A] px-5 py-2 rounded-full text-xs font-bold mb-8 border border-[#A5C16A]/20"
            >
              <span className="w-2 h-2 bg-[#A5C16A] rounded-full animate-pulse" />
              تكنولوجيا نابعة من قلب الأرض المغربية
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-8xl font-black text-white leading-[1.05] mb-10 tracking-tight"
            >
              {t.heroTitle}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 mb-12 leading-relaxed max-w-xl font-medium"
            >
              {t.heroDesc}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <button className="bg-[#E67E22] text-white px-10 py-5 rounded-full text-sm font-bold flex items-center justify-center gap-4 hover:bg-[#D35400] transition-all shadow-2xl shadow-[#E67E22]/30">
                {t.cta}
                <ArrowRight className={cn("w-4 h-4", isRtl ? "rotate-180" : "")} />
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full text-sm font-bold hover:bg-white hover:text-[#2D241E] transition-all">
                {isRtl ? 'طلب استشارة بيطرية' : 'Conseil Vétérinaire'}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Floating Stat Badge */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className={cn(
            "absolute bottom-20 bg-white p-8 rounded-3xl shadow-3xl z-20 hidden lg:block border border-[#E8E1D5]",
            isRtl ? "right-20" : "left-20"
          )}
        >
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">{t.statsLabel}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black text-[#4A5D23] tracking-tighter">+24.8%</span>
            <TrendingUp className="text-[#059669] w-5 h-5" />
          </div>
        </motion.div>
      </section>

      {/* Feature Section - Earthy Cards */}
      <section id="features" className="py-32 bg-[#FDFBF7]">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                title: isRtl ? "تتبع القطيع الذكي" : "Suivi Intelligent",
                desc: isRtl ? "سجل كل كتاكيتك، مراقبة الوزن، والوفيات بضغطة زر وحدة." : "Enregistrez vos poussins et surveillez leur croissance.",
                icon: <LayoutDashboard />,
                color: "bg-[#4A5D23]"
              },
              {
                title: isRtl ? "حساب الأرباح" : "Gestion Financière",
                desc: isRtl ? "ما تخلّيش العلف يغرقك. حاسبة بوليماكس كتعطيك الربح الصافي." : "Gardez le contrôle sur vos coûts et bénéfices nets.",
                icon: <Calculator />,
                color: "bg-[#E67E22]"
              },
              {
                title: isRtl ? "الأمان الصحي" : "Protection Santé",
                desc: isRtl ? "جدول التلقيحات والنصائح الصحية باش تبعد على القطيع ديالك الأمراض." : "Calendrier de vaccination et conseils préventifs.",
                icon: <Shield />,
                color: "bg-[#2D241E]"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -12 }}
                className="p-12 bg-white rounded-[2.5rem] border border-[#E8E1D5] shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-10 text-white shadow-lg", feature.color)}>
                  {React.cloneElement(feature.icon as React.ReactElement, { size: 24 })}
                </div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight text-[#2D241E]">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle Video Section */}
      <section className="py-32 bg-[#2D241E] relative overflow-hidden">
        <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
              {t.videoLabel}
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              بوليماكس كيرافقك من البيضة حتى للدجاجة. كنفهمو طبيعة الأرض ديالنا وكندمجوا الخبرة ديال الأجداد مع ذكاء المستقبل.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl">
                <ShieldCheck className="text-[#A5C16A] w-6 h-6" />
                <span className="text-sm font-bold text-white">ضمان الجودة</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl">
                <TrendingUp className="text-[#E67E22] w-6 h-6" />
                <span className="text-sm font-bold text-white">زيادة الربح</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-3xl border-8 border-white/5 group relative cursor-pointer">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
              >
                <source src="Life_cycle_egg_to_chicken_202604301948.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-[#2D241E]/20 group-hover:bg-transparent transition-all duration-500" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayCircle className="text-white w-20 h-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Doctor - Natural Integration */}
      <section id="ai-doctor" className="py-40 bg-[#FDFBF7]">
        <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="bg-[#4A5D23] p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
                  <Bot className="text-[#4A5D23] w-6 h-6" />
                  <span className="font-bold text-[#2D241E]">طبيب الدجاج (IA)</span>
                </div>
                <div className="space-y-6">
                  <div className="bg-[#4A5D23]/5 p-4 rounded-2xl text-sm text-[#4A5D23] font-medium" dir="ltr">
                    "عندي الفراكت فيهم كحة ومكياكلوش..."
                  </div>
                  <div className="bg-white p-4 rounded-2xl text-sm text-gray-600 shadow-sm leading-relaxed text-right">
                    هادو علامات يقدروا يكونوا خطر. واش كاين تنفاخ في الراس؟ هاهو شنو خاصك دير دابا...
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={cn(isRtl ? "text-right" : "text-left")}>
            <h2 className="text-5xl font-black text-[#2D241E] mb-8 leading-tight">{t.aiTitle}</h2>
            <p className="text-xl text-gray-500 mb-12 leading-relaxed">
              {t.aiDesc}
            </p>
            <button className="bg-[#4A5D23] text-white px-10 py-5 rounded-full text-sm font-bold flex items-center justify-center gap-4 hover:shadow-2xl transition-all">
              {isRtl ? 'تواصل مع الطبيب الآن' : 'Parler à l\'IA'}
              <MessageSquare className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Natural & Grounded */}
      <footer className="bg-[#2D241E] text-[#FDFBF7] pt-32 pb-16">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-20 mb-24 text-right">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-10 justify-end">
                <Activity className="text-[#A5C16A] w-6 h-6" />
                <span className="text-2xl font-black">POULIMAX</span>
              </div>
              <p className="text-gray-400 leading-relaxed font-medium">
                بناء مستقبل آمن للمربين الصغار في المغرب. تكنولوجيا من الأرض، وللأرض.
              </p>
            </div>
            
            <div className="flex flex-col gap-8">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#A5C16A]">الخدمات</h4>
              <ul className="space-y-5 text-sm font-medium text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">{t.navFeatures}</li>
                <li className="hover:text-white transition-colors cursor-pointer">{t.navAI}</li>
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#A5C16A]">تواصل معنا</h4>
              <ul className="space-y-5 text-sm font-medium text-gray-400">
                <li className="flex items-center gap-3 justify-end">office@poulimax.ma <Mail className="w-4 h-4" /></li>
                <li className="flex items-center gap-3 justify-end">+212 522 XX XX XX <Phone className="w-4 h-4" /></li>
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#A5C16A]">قانوني</h4>
              <p className="text-sm text-gray-400">© 2026 Poulimax S.A.R.L.<br />Casablanca, Maroc</p>
            </div>
          </div>
          <div className="text-center text-[10px] text-gray-500 uppercase tracking-[0.5em] pt-16 border-t border-white/5">
            Poulimax - Natural Agricultural Intelligence
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChickenWebsite;