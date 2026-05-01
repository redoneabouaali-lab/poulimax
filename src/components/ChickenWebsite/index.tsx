"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, Mail, MapPin, Phone, ArrowRight, Menu, X, 
  Activity, BarChart3, Bot, Calculator, TrendingUp, ShieldCheck,
  ChevronLeft, ChevronRight, MessageSquare, Globe, ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * POULIMAX - Professional Enterprise Edition
 * A design focused on precision, clarity, and seriousness for the Moroccan agricultural market.
 */

const ChickenWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLang, setActiveLang] = useState('ar');

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
      pricingTitle: "خطط نمو مدروسة",
      pricingDesc: "نحن شركاؤك في النجاح، اختر الخطة التي تناسب حجم إنتاجك الحالي.",
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
      pricingTitle: "Plans de croissance",
      pricingDesc: "Nous sommes vos partenaires de succès. Choisissez le plan adapté à votre production.",
    }
  };

  const t = content[activeLang];
  const isRtl = activeLang === 'ar';

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Navigation - Minimal & Serious */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled ? "bg-white/90 backdrop-blur-md py-4 border-b border-gray-100 shadow-sm" : "bg-transparent py-6"
      )}>
        <div className="container mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-8 h-8 bg-[#0f172a] rounded flex items-center justify-center transition-transform group-hover:scale-105">
              <Activity className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#0f172a]">POULIMAX</span>
          </div>

          <div className="hidden lg:flex items-center gap-10 text-[13px] font-semibold uppercase tracking-wider text-gray-500">
            <a href="#features" className="hover:text-[#0f172a] transition-colors">{t.navFeatures}</a>
            <a href="#ai-doctor" className="hover:text-[#0f172a] transition-colors">{t.navAI}</a>
            <a href="#pricing" className="hover:text-[#0f172a] transition-colors">{t.navPricing}</a>
            <button 
              onClick={() => setActiveLang(activeLang === 'ar' ? 'fr' : 'ar')}
              className="flex items-center gap-1.5 hover:text-[#0f172a] transition-colors border-l border-gray-200 pl-6 ml-2"
            >
              <Globe className="w-4 h-4" />
              {activeLang === 'ar' ? 'FR' : 'AR'}
            </button>
            <button className="bg-[#0f172a] text-white px-7 py-3 rounded text-xs font-bold hover:bg-black transition-all">
              {t.cta}
            </button>
          </div>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section - High-End SaaS Look */}
      <section className="relative pt-48 pb-32 border-b border-gray-100 bg-white">
        <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={cn(isRtl ? "text-right" : "text-left")}
          >
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#059669] mb-8">
              <span className="w-8 h-[1px] bg-[#059669]" />
              {t.heroBadge}
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-[#0f172a] leading-[1.1] mb-8 tracking-tight">
              {t.heroTitle}
            </h1>
            <p className="text-lg text-gray-500 mb-12 leading-relaxed max-w-xl">
              {t.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-[#0f172a] text-white px-10 py-5 rounded text-sm font-bold flex items-center justify-center gap-3 hover:bg-black transition-all">
                {t.heroBtn1}
                <ArrowRight className={cn("w-4 h-4", isRtl ? "rotate-180" : "")} />
              </button>
              <button className="bg-white border border-gray-200 text-[#0f172a] px-10 py-5 rounded text-sm font-bold hover:border-black transition-all">
                {t.heroBtn2}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=1200" 
                alt="Poultry Management" 
                className="w-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Serious Data Badge */}
            <div className={cn(
              "absolute -bottom-10 bg-[#0f172a] text-white p-8 rounded shadow-2xl z-20",
              isRtl ? "-right-10" : "-left-10"
            )}>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">{t.statsLabel}</p>
              <p className="text-4xl font-bold tracking-tight">+24.8%</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features - Precision Grid */}
      <section id="features" className="py-32 bg-[#fafafa]">
        <div className="container mx-auto px-8">
          <div className={cn("mb-24", isRtl ? "text-right" : "text-left")}>
            <h2 className="text-3xl font-bold text-[#0f172a] mb-6 tracking-tight">{t.featuresTitle}</h2>
            <p className="text-gray-500 max-w-2xl leading-relaxed">{t.featuresDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                title: isRtl ? "تتبع القطيع" : "Suivi Troupeau",
                desc: isRtl ? "مراقبة دقيقة للأعداد والوزن ومعدلات النمو اليومية." : "Suivi rigoureux des effectifs, du poids et de la croissance.",
                icon: <Activity className="w-5 h-5" />,
              },
              {
                title: isRtl ? "حاسبة الربح" : "Calcul de Marge",
                desc: isRtl ? "تحليل مالي فوري للتكاليف المباشرة وهامش الربح المتوقع." : "Analyse financière immédiate des coûts directs et marges.",
                icon: <Calculator className="w-5 h-5" />,
              },
              {
                title: isRtl ? "الأمن الحيوي" : "Biosécurité",
                desc: isRtl ? "جدولة زمنية صارمة للتلقيحات وبروتوكولات الوقاية الصحية." : "Planification stricte des vaccins et protocoles sanitaires.",
                icon: <ShieldCheck className="w-5 h-5" />,
              },
              {
                title: isRtl ? "التقارير التحليلية" : "Rapports Analytiques",
                desc: isRtl ? "تقارير شاملة لدعم اتخاذ القرار في نهاية كل دورة." : "Rapports détaillés d'aide à la décision à chaque cycle.",
                icon: <BarChart3 className="w-5 h-5" />,
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  "group p-10 bg-white border border-gray-100 hover:border-gray-300 transition-all duration-300 rounded shadow-sm",
                  isRtl ? "text-right" : "text-left"
                )}
              >
                <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-8 text-[#0f172a] group-hover:bg-[#0f172a] group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Doctor - Scientific Focus */}
      <section id="ai-doctor" className="py-32 bg-white border-y border-gray-100">
        <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-square bg-gray-50 rounded-2xl p-10 flex flex-col justify-center items-center">
              <div className="w-full max-w-sm bg-white rounded shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-[#0f172a] p-4 flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-widest">Medical AI Console</span>
                </div>
                <div className="p-8 space-y-6">
                  <div className={cn("p-4 bg-gray-50 rounded text-xs text-gray-600 leading-relaxed", isRtl ? "text-right" : "text-left")}>
                    {isRtl ? "تحليل الأعراض السريرية للقطيع..." : "Analyse des symptômes cliniques..."}
                  </div>
                  <div className={cn("p-4 bg-[#0f172a]/5 border border-[#0f172a]/10 rounded text-xs text-[#0f172a] leading-relaxed", isRtl ? "text-right" : "text-left")}>
                    {isRtl ? "النتيجة: احتمال 85% إصابة تنفسية. يرجى مراجعة التهوية فوراً." : "Résultat: 85% probabilité d'infection respiratoire. Vérifiez la ventilation."}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={cn(isRtl ? "text-right" : "text-left")}>
            <h2 className="text-3xl font-bold text-[#0f172a] mb-8 tracking-tight">{t.aiTitle}</h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              {t.aiDesc}
            </p>
            <div className="space-y-6">
              {[
                isRtl ? "دقة تشخيص تصل إلى 94%" : "Précision diagnostique jusqu'à 94%",
                isRtl ? "قاعدة بيانات علمية محدثة" : "Base de données scientifique à jour",
                isRtl ? "تكامل مع الأطباء البيطريين المحليين" : "Intégration avec les vétérinaires locaux"
              ].map((item, i) => (
                <div key={i} className={cn("flex items-center gap-4", isRtl ? "flex-row-reverse" : "")}>
                  <div className="w-5 h-5 bg-[#059669]/10 rounded-full flex items-center justify-center text-[#059669]">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Structured & Clear */}
      <section id="pricing" className="py-32 bg-[#fafafa]">
        <div className="container mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-6 tracking-tight">{t.pricingTitle}</h2>
            <p className="text-gray-500 max-w-xl mx-auto">{t.pricingDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-10">
            {/* Pro Card */}
            <div className="bg-white p-12 rounded border border-gray-200 shadow-sm transition-all hover:border-gray-400">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">{isRtl ? "نسخة المربين" : "EDITION ELEVEURS"}</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-bold text-[#0f172a]">0</span>
                <span className="text-xl font-semibold text-gray-400">DH</span>
              </div>
              <ul className="space-y-5 mb-12 border-t border-gray-50 pt-8">
                {[
                  isRtl ? "تتبع قطيع واحد" : "Suivi d'un seul troupeau",
                  isRtl ? "حاسبة الربح الأساسية" : "Calculateur de profit basique",
                  isRtl ? "دعم عبر البريد الإلكتروني" : "Support par email"
                ].map((item, i) => (
                  <li key={i} className={cn("flex items-center gap-4 text-sm text-gray-600", isRtl ? "flex-row-reverse" : "")}>
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-5 border border-[#0f172a] text-[#0f172a] rounded text-xs font-bold uppercase tracking-widest hover:bg-[#0f172a] hover:text-white transition-all">
                {isRtl ? "ابدأ الاستخدام المجاني" : "COMMENCER GRATUITEMENT"}
              </button>
            </div>

            {/* Enterprise Card */}
            <div className="bg-[#0f172a] p-12 rounded shadow-2xl text-white relative overflow-hidden transition-all hover:scale-[1.02]">
              <div className="absolute top-0 right-0 p-4 bg-white/10 text-[9px] font-bold uppercase tracking-widest">Enterprise</div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">{isRtl ? "نسخة الشركات" : "EDITION ENTREPRISE"}</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-bold">{isRtl ? "حسب الاحتياج" : "SUR MESURE"}</span>
              </div>
              <ul className="space-y-5 mb-12 border-t border-white/10 pt-8 text-gray-300">
                {[
                  isRtl ? "إدارة مزارع متعددة" : "Gestion multi-fermes",
                  isRtl ? "تحليلات الذكاء الاصطناعي الكاملة" : "Analyses IA complètes",
                  isRtl ? "ربط مع أنظمة ERP" : "Intégration ERP",
                  isRtl ? "مدير حساب مخصص" : "Account Manager dédié"
                ].map((item, i) => (
                  <li key={i} className={cn("flex items-center gap-4 text-sm", isRtl ? "flex-row-reverse" : "")}>
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-5 bg-white text-[#0f172a] rounded text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-all">
                {isRtl ? "تواصل مع قسم المبيعات" : "CONTACTER LES VENTES"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Professional & Clear */}
      <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-6 bg-[#0f172a] rounded flex items-center justify-center">
                  <Activity className="text-white w-4 h-4" />
                </div>
                <span className="text-lg font-bold tracking-tight text-[#0f172a]">POULIMAX</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                {isRtl ? "المعيار التقني الجديد لإدارة الثروة الداجنة في المغرب." : "Le nouveau standard technologique pour la gestion avicole au Maroc."}
              </p>
            </div>
            
            <div className={cn("flex flex-col gap-6", isRtl ? "text-right" : "text-left")}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#0f172a]">{t.navFeatures}</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#features" className="hover:text-[#0f172a] transition-colors">{t.navFeatures}</a></li>
                <li><a href="#" className="hover:text-[#0f172a] transition-colors">{isRtl ? "الخصوصية" : "Vie Privée"}</a></li>
              </ul>
            </div>

            <div className={cn("flex flex-col gap-6", isRtl ? "text-right" : "text-left")}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#0f172a]">Contact</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className={cn("flex items-center gap-3", isRtl ? "flex-row-reverse" : "")}>
                  <Mail className="w-4 h-4" />
                  <span dir="ltr">office@poulimax.ma</span>
                </li>
                <li className={cn("flex items-center gap-3", isRtl ? "flex-row-reverse" : "")}>
                  <Phone className="w-4 h-4" />
                  <span dir="ltr">+212 522 XX XX XX</span>
                </li>
              </ul>
            </div>

            <div className={cn("flex flex-col gap-6", isRtl ? "text-right" : "text-left")}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#0f172a]">Legal</h4>
              <p className="text-sm text-gray-500">© 2026 Poulimax S.A.R.L.<br />Casablanca, Maroc</p>
            </div>
          </div>
          <div className="text-center text-[10px] text-gray-400 uppercase tracking-[0.3em] pt-12 border-t border-gray-50">
            Poulimax - Professional Agricultural Technology
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChickenWebsite;