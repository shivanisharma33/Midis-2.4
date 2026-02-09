import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "WEB DESIGNING",
    description:
      "Transform your vision into stunning digital experiences. Our expert designers craft responsive, user-centric interfaces that captivate your audience and elevate your brand's online presence with cutting-edge aesthetics.",
    tags: ["UI Design", "UX Strategy", "Responsive Design", "Prototyping"],
    image: "/images/service-branding.webp",
  },
  {
    number: "02",
    title: "WEB DEVELOPMENT",
    description:
      "Build powerful digital solutions with our full-stack development expertise. From concept to deployment, we create robust, scalable, and high-performing websites that drive growth and deliver exceptional user experiences.",
    tags: ["Frontend", "Backend", "Full Stack", "API Integration"],
    image: "/images/service-ui.webp",
  },
  {
    number: "03",
    title: "SEO OPTIMIZATION",
    description:
      "Dominate search rankings and drive organic traffic with our strategic SEO solutions. We optimize every aspect of your digital presence to increase visibility, engage your target audience, and maximize conversions.",
    tags: ["On-Page SEO", "Technical SEO", "Content Strategy", "Link Building"],
    image: "/images/service-dev.webp",
  },
  {
    number: "04",
    title: "GRAPHIC DESIGNING",
    description:
      "Create compelling visual narratives that resonate with your audience. Our creative designers blend artistry with strategy to produce captivating graphics, branding assets, and visual content that sets you apart.",
    tags: ["Branding", "Logo Design", "Marketing Materials", "Visual Identity"],
    image: "/images/service-strategy.webp",
  },
  {
    number: "05",
    title: "GOOGLE & META ADS",
    description:
      "Maximize your advertising ROI with data-driven paid campaigns. Our specialists craft and optimize high-converted ads across Google and Meta platforms.",
    tags: ["Google Ads", "Facebook Ads", "Campaign Management", "Analytics"],
    image: "/images/service-strategy.webp",
  },
];

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /* ================= MOBILE CHECK ================= */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ================= SCROLL LOGIC ================= */
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".service-item");

      if (!isMobile) {
        // 🖥 DESKTOP — SLOW PINNED STORY SCROLL
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${items.length * 130}%`, // ⬅ scroll speed control
          pin: true,
          scrub: 1.3,
          anticipatePin: 1,
          onUpdate: (self) => {
            const index = Math.min(
              items.length - 1,
              Math.floor(self.progress * items.length)
            );
            setActiveIndex(index);
          },
        });
      } else {
        // 📱 MOBILE — LIGHT & LAG-FREE
        items.forEach((item, index) => {
          ScrollTrigger.create({
            trigger: item,
            start: "top 75%",
            end: "bottom 55%",
            onEnter: () => setActiveIndex(index),
            onEnterBack: () => setActiveIndex(index),
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0B0B0B] py-24 md:py-32 text-white antialiased"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {services.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={service.number}
              className={`service-item border-t transition-all duration-[1200ms] ${isActive ? "border-white/20" : "border-white/5"
                }`}
            >
              <div className="py-12 md:py-16">

                {/* HEADER */}
                <div className="relative flex justify-between items-end pb-2 group">
                  <div className="relative">
                    <span
                      className={`absolute -top-1 -left-4 md:-top-3 md:-left-10 text-[10px] md:text-[16px] font-bold transition-all duration-[1200ms] ${isActive ? "text-white/40" : "text-white/5"
                        }`}
                    >
                      {service.number}
                    </span>

                    <h3
                      className={`font-black uppercase tracking-tighter transition-colors duration-[1200ms]
                        text-[clamp(2.5rem,12vw,10rem)] leading-[0.8]
                        ${isActive ? "text-[#909090]" : "text-[#151515]"}
                      `}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* ARROW */}
                  <div
                    className={`mb-6 w-10 h-10 md:w-20 md:h-20 rounded-full border border-white/10
                      flex items-center justify-center transition-all duration-[1200ms]
                      ${isActive ? "opacity-100 scale-100 bg-white text-black" : "opacity-0 scale-75"}
                    `}
                  >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 7L17 17M17 17H7M17 17V7" />
                    </svg>
                  </div>
                </div>

                {/* CONTENT */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: isMobile ? 0.8 : 1.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                      onAnimationComplete={() => ScrollTrigger.refresh()}
                    >
                      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-16 pt-12 pb-6">

                        {/* TEXT */}
                        <div className="w-full md:w-[60%] md:pl-[20%]">
                          <p className="text-sm md:text-base text-white/50 max-w-md mb-10 leading-relaxed">
                            {service.description}
                          </p>

                          <div className="flex flex-wrap gap-3">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold
                                  border border-white/20 px-4 py-2 rounded-full
                                  hover:bg-white hover:text-black transition-all"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* IMAGE */}
                        <div className="w-full md:w-[40%] flex justify-end">
                          <motion.div
                            initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
                            animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
                            transition={{ duration: 1.8 }}
                            className="w-full aspect-[4/3] overflow-hidden rounded-sm"
                          >
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-110"
                            />
                          </motion.div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};












