"use client";

import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, Check, Mail, MapPin, Phone, ArrowRight, Menu, X, 
  ChevronRight, Activity, BarChart3, Bell, Thermometer, Database, 
  Heart, MessageSquare, Bot, Calculator, TrendingUp, ShieldCheck 
} from "lucide-react";
import { cn } from "@/lib/utils";

// ============================================================================
// Poulimax - Moroccan Darija/French Version
// ============================================================================

const ChickenWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLang, setActiveLang] = useState('ar'); // 'ar' for Darija/Arabic, 'fr' for French

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const content = {
    ar: {
      navFeatures: "المميزات",
      navAI: "طبيب الدجاج (AI)",
      navPricing: "الأثمنة",
      cta: "ابدأ الآن",
      heroBadge: "مستقبل تربية الدجاج في المغرب",
      heroTitle: "كبر مشروعك بذكاء مع بوليماكس",
      heroDesc: "أول تطبيق بالدارجة المغربية لمساعدة المربين الصغار. تتبع مصاريفك، احسب أرباحك، واستشر طبيب الدجاج بالذكاء الاصطناعي.",
      heroBtn1: "جربه مجاناً",
      heroBtn2: "شاهد الفيديو",
      statsLabel: "نسبة الربح المتوقعة",
      featuresTitle: "كل ما يحتاجه المربي في تطبيق واحد",
      featuresQuote: '"الفلاح اللي مكيحسبش، السلعة كتاكلو"',
      aiTitle: '"طبيب الدجاج" معاك في جيبك 24/24',
      aiDesc: "الطبيب البيطري غالي ونادر في القرى. المساعد الذكي ديالنا كيهضر بالدارجة وكيفهم المشاكل ديالك وكيعطيك حلول فورية.",
      chatPlaceholder: "اكتب سؤالك بالدارجة هنا...",
      pricingTitle: "أثمنة في متناول الجميع",
      pricingFree: "للأفراد",
      pricingBusiness: "للشركات",
      pricingContact: "اتصل بنا",
    },
    fr: {
      navFeatures: "Fonctionnalités",
      navAI: "AI Doctor",
      navPricing: "Tarifs",
      cta: "Démarrer",
      heroBadge: "L'avenir de l'aviculture au Maroc",
      heroTitle: "Gérez votre ferme avec Poulimax",
      heroDesc: "La première application en Darija pour aider les petits éleveurs. Suivez vos dépenses, calculez vos bénéfices et consultez l'IA Doctor.",
      heroBtn1: "Essayer Gratuitement",
      heroBtn2: "Voir Démo",
      statsLabel: "Marge de profit estimée",
      featuresTitle: "Tout ce dont un éleveur a besoin",
      featuresQuote: '"L\'éleveur qui ne compte pas finit par perdre"',
      aiTitle: '"AI Doctor" dans votre poche 24/24',
      aiDesc: "Le vétérinaire est cher et rare. Notre assistant intelligent parle Darija et propose des solutions immédiates basées sur l'IA.",
      chatPlaceholder: "Posez votre question ici...",
      pricingTitle: "Des tarifs accessibles à tous",
      pricingFree: "Particuliers",
      pricingBusiness: "Entreprises",
      pricingContact: "Contactez-nous",
    }
  };

  const t = content[activeLang];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30" dir={activeLang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled ? "bg-background/80 backdrop-blur-md py-3 border-border" : "bg-transparent py-5 border-transparent"
      )}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <Activity className="text-primary-foreground w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Poulimax <span className="text-primary">{activeLang === 'ar' ? 'بوليماكس' : ''}</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="hover:text-primary transition-colors">{t.navFeatures}</a>
            <a href="#ai-doctor" className="hover:text-primary transition-colors">{t.navAI}</a>
            <a href="#pricing" className="hover:text-primary transition-colors">{t.navPricing}</a>
            <div className="h-6 w-px bg-border mx-2" />
            <button 
              onClick={() => setActiveLang(activeLang === 'ar' ? 'fr' : 'ar')}
              className="bg-secondary px-3 py-1 rounded-lg text-xs hover:bg-secondary/80 transition-colors uppercase font-bold"
            >
              {activeLang === 'ar' ? 'Français' : 'الدارجة'}
            </button>
            <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95">
              {t.cta}
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-center md:text-right">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6 mx-auto md:mx-0">
              <Bot className="w-4 h-4" />
              {t.heroBadge}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              {activeLang === 'ar' ? (
                <>كبر مشروعك بذكاء مع <span className="text-primary">بوليماكس</span></>
              ) : (
                <>Gérez votre ferme avec <span className="text-primary">Poulimax</span></>
              )}
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
              {t.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/40 transition-all active:scale-95">
                {t.heroBtn1}
                <ArrowRight className={cn("w-5 h-5", activeLang === 'ar' ? "rotate-180" : "")} />
              </button>
              <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-2xl text-lg font-bold hover:bg-secondary/80 transition-all">
                {t.heroBtn2}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/20 to-transparent p-4 rounded-[2.5rem]">
              <img 
                src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=800" 
                alt="Poultry Farm" 
                className="rounded-[2rem] shadow-2xl w-full object-cover aspect-video md:aspect-square"
              />
            </div>
            {/* Stats Badge */}
            <div className={cn(
              "absolute -bottom-6 bg-background p-6 rounded-3xl shadow-xl border border-border animate-bounce-subtle",
              activeLang === 'ar' ? "-right-6" : "-left-6"
            )}>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="text-green-500" />
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{t.statsLabel}</p>
                  <p className="text-2xl font-bold">+24%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MVP Features */}
      <section id="features" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.featuresTitle}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto italic text-lg">
            {t.featuresQuote}
          </p>
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: activeLang === 'ar' ? "تتبع القطيع" : "Suivi du Troupeau",
              desc: activeLang === 'ar' ? "عدد الكتاكيت، الوفيات، والوزن اليومي بكل سهولة." : "Nombre de poussins, mortalité et poids quotidien.",
              icon: <Activity className="w-6 h-6" />,
              color: "bg-blue-500"
            },
            {
              title: activeLang === 'ar' ? "حاسبة الربح" : "Calculateur de Profit",
              desc: activeLang === 'ar' ? "حساب العلف مقابل ثمن البيع باش تعرف راسك فين غادي." : "Calcul de l'aliment par rapport au prix de vente.",
              icon: <Calculator className="w-6 h-6" />,
              color: "bg-orange-500"
            },
            {
              title: activeLang === 'ar' ? "تنبيهات الصحة" : "Alertes Santé",
              desc: activeLang === 'ar' ? "جدول التلقيحات وأهم النصائح لتفادي الأمراض." : "Calendrier de vaccination et conseils de santé.",
              icon: <ShieldCheck className="w-6 h-6" />,
              color: "bg-green-500"
            },
            {
              title: activeLang === 'ar' ? "تقارير بسيطة" : "Rapports Simples",
              desc: activeLang === 'ar' ? "شحال ربحتي وشحال خسرتي في كل دورة إنتاج." : "Gain/perte simplifié pour chaque cycle de production.",
              icon: <BarChart3 className="w-6 h-6" />,
              color: "bg-purple-500"
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-background p-8 rounded-[2rem] border border-border shadow-sm hover:shadow-xl transition-all text-right"
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg mx-auto md:mx-0", feature.color)}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI Doctor Section */}
      <section id="ai-doctor" className="py-24 overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 rounded-full" />
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-3xl border border-border shadow-2xl relative">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                  <Bot />
                </div>
                <div className="text-right">
                  <h4 className="font-bold">{activeLang === 'ar' ? 'مساعد AI - طبيب الدجاج' : 'AI Doctor Assistant'}</h4>
                  <p className="text-xs text-green-500 font-medium">متصل الآن - En ligne</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-secondary/50 p-4 rounded-2xl rounded-tr-none text-sm max-w-[80%] mr-auto text-left" dir="ltr">
                  {activeLang === 'ar' ? '"الدجاج ماكلاش ومريض — شنو المشكل؟"' : '"Mes poulets ne mangent pas et sont malades ?"'}
                </div>
                <div className="bg-primary/10 p-4 rounded-2xl rounded-tl-none text-sm max-w-[80%] ml-auto leading-relaxed text-right">
                  {activeLang === 'ar' ? (
                    "بناءً على الأعراض اللي ذكرتي، يقدر يكون مشكل في التهوية أو بداية مرض معدي. واش كاين خنين أو كحة؟"
                  ) : (
                    "D'après les symptômes, il peut s'agir d'un problème de ventilation ou d'une maladie infectieuse. Y a-t-il des éternuements ?"
                  )}
                </div>
              </div>
              
              <div className="flex gap-2 p-2 bg-secondary/30 rounded-xl">
                <div className="flex-1 text-sm text-muted-foreground p-2 text-right">{t.chatPlaceholder}</div>
                <button className="bg-primary p-2 rounded-lg text-primary-foreground"><ArrowRight className={cn("w-4 h-4", activeLang === 'ar' ? "rotate-180" : "")} /></button>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 text-right">
            <h2 className="text-4xl font-bold mb-6 italic leading-tight">{t.aiTitle}</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t.aiDesc}
            </p>
            <ul className="space-y-4">
              {[
                activeLang === 'ar' ? "تشخيص الأمراض بالدارجة" : "Diagnostic des maladies en Darija",
                activeLang === 'ar' ? "حساب كمية العلف اليومية" : "Calcul de l'aliment quotidien",
                activeLang === 'ar' ? "تتبع أسعار السوق مباشرة" : "Suivi des prix du marché",
                activeLang === 'ar' ? "دعم صوتي للمربين (قريباً)" : "Support vocal (Bientôt)"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium justify-end">
                  {item}
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    <Check className="w-4 h-4" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing / Business Model */}
      <section id="pricing" className="py-24 bg-primary/5">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 italic">{t.pricingTitle}</h2>
          <p className="text-muted-foreground">{activeLang === 'ar' ? 'هدفنا هو نكبروا مع الفلاح المغربي' : 'Notre objectif est de grandir avec l\'éleveur marocain'}</p>
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 max-w-4xl gap-8">
          <div className="bg-background p-10 rounded-[2.5rem] border border-border shadow-sm flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-4">{t.pricingFree}</h3>
            <div className="text-5xl font-extrabold mb-6 text-primary">0 DH</div>
            <p className="text-muted-foreground mb-8 text-center">{activeLang === 'ar' ? 'مجاني للأبد باش تبني الثقة وتجرب التطبيق' : 'Gratuit pour toujours pour tester l\'application'}</p>
            <ul className="space-y-4 mb-10 w-full text-right">
              {[
                activeLang === 'ar' ? "تتبع 1000 طائر" : "Suivi de 1000 oiseaux",
                activeLang === 'ar' ? "حاسبة الربح" : "Calculateur de profit",
                activeLang === 'ar' ? "استشارات AI محدودة" : "Consultations IA limitées"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 justify-end">
                  <span>{item}</span>
                  <Check className="text-green-500 w-5 h-5" />
                </li>
              ))}
            </ul>
            <button className="w-full py-4 border-2 border-primary text-primary rounded-2xl font-bold hover:bg-primary hover:text-white transition-all">{t.cta}</button>
          </div>

          <div className="bg-primary text-primary-foreground p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col items-center">
            <div className="absolute top-0 right-0 p-4 bg-white/20 rounded-bl-2xl text-xs font-bold uppercase tracking-widest">{activeLang === 'ar' ? 'الأكثر طلباً' : 'Populaire'}</div>
            <h3 className="text-2xl font-bold mb-4">{t.pricingBusiness}</h3>
            <div className="text-4xl font-extrabold mb-2 text-white">{t.pricingContact}</div>
            <p className="text-primary-foreground/70 mb-8 text-center">{activeLang === 'ar' ? 'حلول خاصة للتعاونيات وشركات العلف' : 'Solutions pour les coopératives et entreprises'}</p>
            <ul className="space-y-4 mb-10 w-full text-right">
              {[
                activeLang === 'ar' ? "عيادات بيطرية رقمية" : "Cliniques vétérinaires digitales",
                activeLang === 'ar' ? "وايت لايبل مخصص" : "Solution White Label",
                activeLang === 'ar' ? "دعم فني 24/7" : "Support technique 24/7"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 justify-end">
                  <span>{item}</span>
                  <Check className="text-white w-5 h-5" />
                </li>
              ))}
            </ul>
            <button className="w-full py-4 bg-white text-primary rounded-2xl font-bold hover:shadow-xl transition-all">{t.pricingContact}</button>
          </div>
        </div>
      </section>

      {/* Chatbot Floating Button */}
      <div className={cn("fixed bottom-8 z-50", activeLang === 'ar' ? "right-8" : "left-8")}>
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className={cn(
                "absolute bottom-20 w-80 bg-background rounded-3xl border border-border shadow-2xl overflow-hidden",
                activeLang === 'ar' ? "right-0" : "left-0"
              )}
            >
              <div className="bg-primary p-4 text-primary-foreground flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5" />
                  <span className="font-bold">{activeLang === 'ar' ? 'طبيب الدجاج' : 'AI Doctor'}</span>
                </div>
                <button onClick={() => setIsChatOpen(false)}><X className="w-5 h-5" /></button>
              </div>
              <div className="h-96 p-4 overflow-y-auto bg-secondary/10 flex flex-col gap-4">
                <div className="bg-primary/10 p-3 rounded-2xl rounded-tl-none text-sm self-end text-right">
                  {activeLang === 'ar' ? 'السلام عليكم! أنا طبيب الدجاج ديالك. كيفاش نقدر نعاونك اليوم؟' : 'Bonjour! Je suis votre AI Doctor. Comment puis-je vous aider ?'}
                </div>
              </div>
              <div className="p-4 bg-background border-t border-border flex gap-2">
                <input type="text" placeholder={t.chatPlaceholder} className="flex-1 text-sm bg-secondary/50 p-2 rounded-xl border-none focus:ring-1 focus:ring-primary outline-none text-right" />
                <button className="bg-primary p-2 rounded-xl text-primary-foreground"><ArrowRight className={cn("w-5 h-5", activeLang === 'ar' ? "rotate-180" : "")} /></button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-2xl hover:scale-110 active:scale-95 transition-all group"
        >
          <MessageSquare className="w-7 h-7 group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-2 -left-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded-full font-bold">1</span>
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-secondary/50 py-16 border-t border-border">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 text-right">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 justify-end">
              <Activity className="text-primary w-6 h-6" />
              <span className="text-xl font-bold">Poulimax</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {activeLang === 'ar' ? 'ثورة في عالم تربية الدجاج بالمغرب. نجمع بين الخبرة الميدانية وأحدث تقنيات الذكاء الاصطناعي لمساعدة الفلاح.' : 'Révolutionner l\'aviculture au Maroc avec l\'IA.'}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">{t.navFeatures}</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">{t.navFeatures}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{activeLang === 'ar' ? 'عن التطبيق' : 'À propos'}</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">{activeLang === 'ar' ? 'اتصل بنا' : 'Contactez-nous'}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3 justify-end">contact@poulimax.ma <Mail className="w-4 h-4" /></li>
              <li className="flex items-center gap-3 justify-end">+212 5XX XX XX XX <Phone className="w-4 h-4" /></li>
              <li className="flex items-center gap-3 justify-end">Casablanca, Maroc <MapPin className="w-4 h-4" /></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Suivez-nous</h4>
            <div className="flex gap-4 justify-end">
              <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:text-primary cursor-pointer transition-colors"><Mail className="w-5 h-5" /></div>
              <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:text-primary cursor-pointer transition-colors"><Phone className="w-5 h-5" /></div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 pt-12 mt-12 border-t border-border text-center text-sm text-muted-foreground">
          &copy; 2026 Poulimax بوليماكس. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
};

export default ChickenWebsite;