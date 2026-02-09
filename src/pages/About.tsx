"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, Plus, ChevronDown, Layout, Smartphone, Search, Share2, Megaphone, PenTool, Zap, Target, Shield, Globe, MessageSquare } from "lucide-react";
import { ScrollingVideoZoom } from "@/components/ScrollingVideoZoom";

/* ================= TYPES & DATA ================= */



const faqs = [
  { q: "WHAT SERVICES DO YOU OFFER?", a: "We provide end-to-end creative solutions including UI/UX Design, Branding, Web Development, and Digital Strategy." },
  { q: "HOW DO YOU APPROACH A NEW PROJECT?", a: "Our process starts with deep research and discovery, followed by strategic planning, creative execution, and rigorous testing." },
  { q: "WHO WILL BE WORKING ON MY PROJECT?", a: "You'll have a dedicated team of senior designers and developers working directly with you throughout the lifecycle." },
  { q: "DO YOU PROVIDE SUPPORT?", a: "Yes, we offer comprehensive maintenance and support packages to ensure your digital products stay ahead of the curve." },
];

const partners = ["FORBES", "TECHCRUNCH", "WIRED", "NYT", "Awwwards", "Dribbble"];

const digitalServices = [
  {
    icon: Layout,
    title: "Web Development",
    description: "We build responsive, lightning-fast websites that increase your business visibility and sales.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: PenTool,
    title: "Graphic Designing",
    description: "We design premium logos, and brand visuals that define your identity and elevate your impact.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Robust mobile applications for iOS and Android that deliver seamless user experiences.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Dominate search rankings and drive organic traffic with our strategic SEO solutions.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that maximize ROI across Google and Meta platforms.",
    gradient: "from-indigo-500 to-violet-500"
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Build a powerful social presence with engaging content and strategic community management.",
    gradient: "from-pink-500 to-rose-500"
  }
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Dedicated Support & Expertise",
    description: "Experts not only solve problems but also provide valuable insights, guiding better decision-making and innovation.",
    stat: "24/7"
  },
  {
    icon: Zap,
    title: "Cutting-Edge Tools",
    description: "These innovations leverage advanced technologies like artificial intelligence, machine learning, and automation.",
    stat: "AI"
  },
  {
    icon: Target,
    title: "Transparency & Communication",
    description: "Transparency ensures that information is shared openly, creating a sense of accountability and inclusiveness.",
    stat: "100%"
  }
];

const processSteps = [
  { number: "01", title: "Discovery", description: "Deep research into your brand, market, and competition." },
  { number: "02", title: "Strategy", description: "Develop a tailored roadmap aligned with your goals." },
  { number: "03", title: "Design", description: "Create stunning visuals that captivate your audience." },
  { number: "04", title: "Development", description: "Build robust, scalable solutions with clean code." },
  { number: "05", title: "Launch", description: "Deploy with precision and ongoing support." }
];

/* ================= COMPONENTS ================= */

const AboutHero = () => {
  return (
    <section className="relative min-h-screen bg-[#0C0E12] flex flex-col items-center justify-start pt-40 overflow-hidden text-center px-6">
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-[14vw] md:text-[11vw] font-black text-white leading-[0.85] tracking-tighter uppercase z-10"
      >
        GET TO <br />
        <span className="inline-flex items-center gap-4">
          KNOW US
          <div className="w-[8vw] h-[8vw] bg-white rounded-2xl flex items-center justify-center -rotate-12 hover:rotate-0 transition-transform duration-500 cursor-pointer">
            <ArrowUpRight className="text-black w-[5vw] h-[5vw]" />
          </div>
        </span>
      </motion.h1>

      <div className="mt-16 flex flex-col items-center gap-4 z-10">
        <span className="text-white/40 text-[10px] uppercase font-bold tracking-[0.4em]">Scroll Down</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/40 to-transparent" />
      </div>

      {/* Panoramic Curved Collage from Reference */}
      <div className="relative w-full mt-32 px-4 select-none mb-10 overflow-visible">
        <div className="max-w-[1800px] mx-auto flex items-center justify-center -space-x-4 lg:-space-x-8 lg:scale-110 xl:scale-125 origin-center">

          {/* Left: Gold Bar */}
          <motion.div
            initial={{ x: -100, opacity: 0, rotate: -15 }}
            whileInView={{ x: 0, opacity: 1, rotate: -8 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-1/3 aspect-[4/5] rounded-[30px] lg:rounded-[50px] overflow-hidden shadow-2xl z-0 transform-gpu origin-right border-4 border-[#0C0E12]"
          >
            <img
              src="/images/Futuristic Portrait.webp"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Visual 1"
            />
          </motion.div>

          {/* Center: Mask */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-2/5 aspect-[4/5] rounded-[40px] lg:rounded-[60px] overflow-hidden z-20 shadow-[0_50px_100px_rgba(0,0,0,0.8)] border-4 border-[#0C0E12]"
          >
            <img
              src="/images/Virtual Reality Immersion.png"
              className="w-full h-full object-cover"
              alt="Visual 2"
            />
          </motion.div>

          {/* Right: Green Swirl */}
          <motion.div
            initial={{ x: 100, opacity: 0, rotate: 15 }}
            whileInView={{ x: 0, opacity: 1, rotate: 8 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-1/3 aspect-[4/5] rounded-[30px] lg:rounded-[50px] overflow-hidden shadow-2xl z-0 transform-gpu origin-left border-4 border-[#0C0E12]"
          >
            <img
              src="/images/Neon Aesthetic Portrait.png"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Visual 3"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const GrowthSection = () => {
  return (
    <section className="bg-white py-24 md:py-48 px-6 lg:px-24">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start text-left">

        {/* Left Side: Content */}
        <div className="lg:col-span-8 space-y-8 md:space-y-12">
          <span className="text-black font-black text-[11px] tracking-[0.2em] uppercase">Who We Are</span>

          <h2 className="text-[10vw] md:text-[5.5vw] font-black uppercase text-[#0C0E12] leading-[0.9] tracking-tighter">
            DRIVING STARTUP <br />
            GROWTH—CRAFTING <br />
            <span className="text-orange">YOUR BRAND WITH <br />
              PRECISION & IMPACT</span>
          </h2>

          <p className="text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed font-medium">
            We are a results-driven digital agency offering end-to-end creative and technical services.
            Whether you're launching a new startup or running an established business, we help you build
            a powerful online presence, drive measurable growth, and expand your reach across global markets.
          </p>
        </div>

        {/* Vertical Divider (Hidden on Mobile) */}
        <div className="hidden lg:block lg:col-span-1 h-full flex justify-center py-10">
          <div className="w-[1px] h-full bg-black/10" />
        </div>

        {/* Right Side: Stats */}
        <div className="lg:col-span-3 flex flex-col justify-start lg:pt-6">
          <div className="flex items-start gap-4 mb-12 md:mb-20">
            <span className="text-[8rem] md:text-[12rem] font-black text-[#0C0E12] leading-[0.8] tracking-tighter">15</span>
            <div className="flex flex-col pt-2">
              <span className="[writing-mode:vertical-rl] text-[10px] font-black uppercase tracking-[0.4em] text-black">
                Years of Work Experience
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Avatar Group */}
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
              ].map((url, i) => (
                <div key={i} className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-white overflow-hidden shadow-lg">
                  <img src={url} className="w-full h-full object-cover" alt="Client" />
                </div>
              ))}
            </div>

            <div className="flex flex-col">
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#0C0E12]/40 leading-tight">
                More Then 25K
              </span>
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#0C0E12]/40 leading-tight">
                Clients Reviews
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

/* NEW: Digital Services Section */
const DigitalServicesSection = () => {
  return (
    <section className="bg-[#0C0E12] py-24 md:py-32 px-6 lg:px-24 overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <div className="text-left mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white/40 font-black text-[11px] tracking-[0.3em] uppercase block mb-6"
          >
            Digital Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-white leading-[0.9] tracking-tighter"
          >
            The Drive <span className="text-orange-500">Real</span><br />
            Business Growth
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {digitalServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10 cursor-pointer overflow-hidden"
            >
              {/* Gradient Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-4 group-hover:text-orange-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm md:text-base leading-relaxed mb-6">
                {service.description}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-2 text-white/40 group-hover:text-orange-400 transition-colors">
                <span className="text-xs font-bold uppercase tracking-widest">Explore</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* REDESIGNED: Why Choose Us Section */
const WhyChooseUsSection = () => {
  return (
    <section className="bg-white py-24 md:py-40 px-6 lg:px-24">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Content */}
          <div className="space-y-10">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-black/60 text-[10px] font-bold uppercase tracking-widest mb-6"
              >
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                Our Advantage
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-[#0C0E12] leading-[0.85] tracking-tighter"
              >
                Why We Are <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Different</span>
              </motion.h2>
            </div>

            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-xl">
              We don't just build products; we build digital legacies. Our approach combines data-driven strategy with world-class design execution.
            </p>

            <div className="flex flex-col gap-6">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="group flex gap-6 items-start p-6 rounded-2xl border border-black/5 hover:border-black/10 hover:bg-gray-50 transition-all duration-500 cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-[#0C0E12] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-[#0C0E12] mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-md">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Visual Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] lg:h-[800px] w-full rounded-[40px] overflow-hidden"
          >
            <img
              src="/images/Futuristic Portrait.webp"
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Why Choose Us"
            />
            {/* Overlay badge */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-orange-500 rounded-full flex items-center justify-center text-center p-4 shadow-2xl animate-[spin_10s_linear_infinite]">
              <span className="text-[10px] font-black uppercase text-white tracking-widest leading-tight">
                Premium<br />Digital<br />Agency
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

/* NEW: Process Section */
const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-[#f8f8f8] py-24 md:py-32 px-6 lg:px-24">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <div className="text-left mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-black/40 font-black text-[11px] tracking-[0.3em] uppercase block mb-6"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-[#0C0E12] leading-[0.9] tracking-tighter"
          >
            How We <span className="text-orange-500">Work</span>
          </motion.h2>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setActiveStep(index)}
              className={`relative p-8 md:p-10 rounded-3xl cursor-pointer transition-all duration-500 ${activeStep === index
                ? 'bg-[#0C0E12] text-white'
                : 'bg-white hover:bg-[#0C0E12] hover:text-white'
                }`}
            >
              {/* Step Number */}
              <span className={`text-5xl md:text-6xl font-black ${activeStep === index ? 'text-orange-500' : 'text-[#0C0E12]/10'
                } transition-colors`}>
                {step.number}
              </span>

              {/* Content */}
              <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tight mt-6 mb-3 transition-colors ${activeStep === index ? 'text-white' : 'text-[#0C0E12] group-hover:text-white'
                }`}>
                {step.title}
              </h3>
              <p className={`text-sm leading-relaxed transition-colors ${activeStep === index ? 'text-white/60' : 'text-[#0C0E12]/50'
                }`}>
                {step.description}
              </p>

              {/* Active Indicator */}
              {activeStep === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute top-4 right-4 w-3 h-3 rounded-full bg-orange-500"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* NEW: Stats Ribbon */
const StatsRibbon = () => {
  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "15+", label: "Years Experience" },
    { value: "50+", label: "Team Members" },
  ];

  return (
    <section className="bg-[#0C0E12] py-16 md:py-20 border-y border-white/10">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <span className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter">
                {stat.value}
              </span>
              <p className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mt-3">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CreativeSection = () => {
  return (
    <section className="bg-white pt-20 md:pt-32 pb-0 px-6 lg:px-24">
      <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
        <div className="w-full md:w-[500px] aspect-[4/5] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-6xl">
          <img src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63d69162c2494e4bf9c3e_img%20(17)-p-500.webp" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 space-y-8 md:space-y-12 text-left">
          <h3 className="text-4xl md:text-8xl font-black uppercase text-[#0C0E12] leading-[0.9] tracking-tighter">
            CREATIVE STRATEGIES THAT GET YOU GROWING
          </h3>
          <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
            We craft bespoke strategies tailored to your unique business needs, ensuring maximum impact and sustainable growth.
          </p>
          <button className="px-10 md:px-12 py-5 md:py-6 bg-[#0C0E12] text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] md:text-[11px] hover:bg-orange-600 transition-all flex items-center gap-4">
            Start A Project <Plus size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

const ReasonsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1); // Default to second one like in image

  const reasons = [
    {
      title: "24/7 CUSTOMER SUPPORT",
      desc: "Lorem ipsum dolor posuere at scelerisque turpis. Morbi laoreet lorem venenatis suscipit ullamcorperem ipm dolor posuere at scelerisque ac turpis.",
      image: "https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63d69162c2494e4bf9c3e_img%20(17)-p-500.webp"
    },
    {
      title: "EXPERTISE & SPECIALIZATION",
      desc: "We bring specialized knowledge and deep industry expertise to every project, ensuring that your unique challenges are met with precision and innovative solutions.",
      image: "https://cdn.prod.website-files.com/67a1ba0a889270647730e779/68079e60d8c8c72fd621dfd8_Video-p-1600.webp"
    },
    {
      title: "COST-EFFECTIVE SOLUTIONS",
      desc: "Our strategic approach focuses on delivering maximum value and ROI, optimizing your budget through efficient workflows and high-impact design strategies.",
      image: "https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63c7ba173bf929fe05bd6_Img%20(2)-p-500.webp"
    },
    {
      title: "CONSISTENT BRANDING",
      desc: "We ensure your brand identity remains cohesive across all digital touchpoints, building trust and recognition through pixel-perfect execution and strategic alignment.",
      image: "https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63d10d18f7f9092d93761_Img%20(5)-p-500.webp"
    },
    {
      title: "FRESH PERSPECTIVES",
      desc: "Our creative team constantly explores new trends and technologies to bring fresh, groundbreaking ideas that set your brand apart in a crowded marketplace.",
      image: "https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63c81162c2494e4bed2f6_Img%20(3)%20(1)-p-500.webp"
    },
  ];

  return (
    <section className="bg-white pt-10 md:pt-20 pb-20 md:pb-48">
      <div className="px-6 lg:px-24 mb-10 md:mb-20 text-left">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black block mb-4 md:mb-6">Why You Choose Us</span>
        <h2 className="text-4xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter max-w-4xl text-[#111317]">
          HERE ARE SOME REASONS YOU'LL LOVE WORKING WITH US!
        </h2>
      </div>

      <div className="flex flex-col md:flex-row w-full h-auto md:h-[600px] border-y border-black/10 bg-[#fbfaf8]">
        {reasons.map((r, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onClick={() => setHoveredIndex(i)}
            className={`relative flex flex-col md:flex-row transition-all duration-700 border-b md:border-b-0 md:border-r border-black/10 last:border-b-0 md:last:border-r-0 cursor-pointer overflow-hidden ${hoveredIndex === i ? "flex-[3] md:flex-[2.5] bg-[#f5f3f0]" : "flex-1 hover:bg-[#efedea]"
              } min-h-[80px] md:min-h-0`}
          >
            {/* Vertical Title Container (Desktop) / Horizontal (Mobile) */}
            <div className={`flex md:flex-col justify-between md:justify-end items-center md:items-start p-6 md:p-8 w-full transition-opacity duration-500 ${hoveredIndex === i ? "opacity-100 md:opacity-0" : "opacity-100"}`}>
              <h4 className="text-lg md:text-2xl font-black uppercase tracking-tighter md:[writing-mode:vertical-rl] md:rotate-180 md:whitespace-nowrap text-[#111317]">
                {r.title}
              </h4>
              <Plus size={20} className={`md:hidden transition-transform duration-500 ${hoveredIndex === i ? "rotate-45" : ""}`} />
            </div>

            {/* Expanded Content */}
            <AnimatePresence initial={false}>
              {hoveredIndex === i && (
                <motion.div
                  initial={window?.innerWidth < 768 ? { height: 0, opacity: 0 } : { opacity: 0, x: 20 }}
                  animate={window?.innerWidth < 768 ? { height: "auto", opacity: 1 } : { opacity: 1, x: 0 }}
                  exit={window?.innerWidth < 768 ? { height: 0, opacity: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="md:absolute md:inset-0 flex flex-col p-6 md:p-12 overflow-hidden w-full"
                >
                  {/* Vertical Title (Desktop Side) */}
                  <div className="absolute left-8 bottom-8 hidden md:block">
                    <h4 className="text-2xl font-black uppercase tracking-tighter [writing-mode:vertical-rl] rotate-180 whitespace-nowrap text-[#111317]">
                      {r.title}
                    </h4>
                  </div>

                  <div className="md:ml-24 max-w-md w-full">
                    <div className="relative mb-6 md:mb-8 md:pt-6">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-600 rounded-full hidden md:block" />
                      <div className="aspect-video w-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
                        <img src={r.image} className="w-full h-full object-cover" alt={r.title} />
                      </div>
                    </div>
                    <p className="text-[#111317]/60 text-xs md:text-sm font-medium leading-relaxed uppercase tracking-tight text-left">
                      {r.desc}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

const AboutMarquee = () => {
  return (
    <div className="bg-[#0C0E12] py-20 overflow-hidden relative flex border-y border-white/5">
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-20"
      >
        {[1, 2, 3].map(i => (
          <span key={i} className="text-[15vw] font-black uppercase text-white tracking-[0.05em] leading-none">
            ABOUT US * ABOUT US * ABOUT US *
          </span>
        ))}
      </motion.div>
    </div>
  );
};





const DualCTA = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[80vh] min-h-[500px] md:min-h-[700px]">
      <motion.div whileHover="hover" className="relative group overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 min-h-[400px]">
        <img src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/68079e60d8c8c72fd621dfd8_Video-p-1600.webp" className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0" />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-all" />
        <div className="absolute inset-0 p-8 md:p-12 lg:p-20 flex flex-col justify-between items-start text-white text-left">
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none max-w-md">HAVE A PROJECT IN MIND?</h3>
          <button className="px-10 lg:px-12 py-5 lg:py-6 bg-white text-black rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-orange-600 hover:text-white transition-all">LET'S TALK</button>
        </div>
      </motion.div>
      <motion.div whileHover="hover" className="relative group overflow-hidden min-h-[400px]">
        <img src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63d10d18f7f9092d93761_Img%20(5)-p-500.webp" className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0" />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-all" />
        <div className="absolute inset-0 p-8 md:p-12 lg:p-20 flex flex-col justify-between items-start text-white text-left">
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none max-w-md">LOOKING TO HIRE AN AGENCY?</h3>
          <button className="px-10 lg:px-12 py-5 lg:py-6 bg-white text-black rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-orange-600 hover:text-white transition-all">JOIN US</button>
        </div>
      </motion.div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="bg-white py-24 md:py-48 px-6 lg:px-24">
      <div className="max-w-[1000px] mx-auto text-left">
        <div className="divide-y divide-black/10">
          {faqs.map((f, i) => (
            <div key={i} className="py-6 md:py-10">
              <button onClick={() => setOpenIndex(openIndex === i ? -1 : i)} className="w-full flex justify-between items-center group gap-4">
                <h4 className={`text-lg md:text-2xl font-black uppercase tracking-tighter transition-all ${openIndex === i ? 'text-orange-600' : 'text-[#0C0E12]/80'}`}>{f.q}</h4>
                <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 border border-black/10 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'rotate-180 bg-black text-white' : ''}`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <p className="pt-6 md:pt-8 text-base md:text-xl text-gray-400 font-medium max-w-3xl leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================= PAGE EXPORT ================= */

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white min-h-screen font-sans selection:bg-orange-600 selection:text-white overflow-x-hidden">
      <Navigation />
      <AboutHero />
      <GrowthSection />

      {/* NEW: Digital Services */}
      <DigitalServicesSection />

      {/* NEW: Why Choose Us */}
      <WhyChooseUsSection />

      <ScrollingVideoZoom />

      {/* NEW: Process Section */}
      <ProcessSection />

      {/* NEW: Stats Ribbon */}
      <StatsRibbon />

      <CreativeSection />
      <ReasonsSection />
      <AboutMarquee />



      {/* Partner Ticker */}
      <div className="bg-white py-20 border-y border-black/5 overflow-hidden flex grayscale opacity-30">
        <motion.div animate={{ x: [0, -1000] }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} className="flex gap-24 whitespace-nowrap px-12">
          {[...partners, ...partners].map((p, i) => (
            <span key={i} className="text-4xl font-black uppercase tracking-tighter">{p}</span>
          ))}
        </motion.div>
      </div>

      <DualCTA />
      <FAQSection />

      <section className="bg-white py-24 md:py-48 text-center px-6">
        <h2 className="text-[14vw] md:text-[14vw] font-black uppercase tracking-tighter leading-[0.8] text-[#0C0E12]">
          LET'S WORK <br /> <span className="text-orange-600">TOGETHER</span>
        </h2>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
