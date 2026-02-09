import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

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
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Add Lenis to GSAP ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the section and track scroll progress with smooth scrub
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${services.length * 100}%`,
        pin: true,
        scrub: 1.5, // Smoother scrub value
        onUpdate: (self) => {
          // Calculate which card should be active based on scroll progress
          const newIndex = Math.min(
            services.length - 1,
            Math.floor(self.progress * services.length)
          );
          setActiveIndex(newIndex);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0B0B0B] h-screen w-full overflow-hidden"
    >
      {/* Cards Container */}
      <div className="relative h-full w-full">
        {services.map((service, index) => (
          <div
            key={service.number}
            className="absolute inset-0 h-full w-full transition-all duration-700 ease-out"
            style={{
              opacity: activeIndex === index ? 1 : 0,
              visibility: activeIndex === index ? "visible" : "hidden",
              zIndex: activeIndex === index ? 10 : 1,
            }}
          >
            {/* Card Background */}
            <div
              className="h-full w-full"
              style={{
                background: "linear-gradient(180deg, #0c0c0c 0%, #141414 100%)",
              }}
            >
              {/* Content Container */}
              <div className="h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-center">
                {/* Header Row */}
                <div className="flex justify-between items-start mb-10 md:mb-14">
                  <div className="relative">
                    <span className="block text-sm md:text-lg font-bold text-white/40 mb-3 tracking-[0.25em]">
                      {service.number}
                    </span>
                    <h3
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter uppercase text-white leading-[0.9] transition-all duration-500"
                      style={{
                        transform: activeIndex === index ? "translateY(0)" : "translateY(30px)",
                        opacity: activeIndex === index ? 1 : 0,
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Arrow Button */}
                  <div
                    className="flex-shrink-0 w-14 h-14 md:w-20 md:h-20 rounded-full bg-white text-black flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-45 cursor-pointer shadow-xl"
                    style={{
                      transform: activeIndex === index ? "scale(1)" : "scale(0.8)",
                      opacity: activeIndex === index ? 1 : 0,
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="md:w-8 md:h-8"
                    >
                      <path d="M7 7L17 17M17 17H7M17 17V7" />
                    </svg>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
                  {/* Left Column: Description + Tags */}
                  <div
                    className="w-full md:w-1/2 transition-all duration-700 delay-100"
                    style={{
                      transform: activeIndex === index ? "translateY(0)" : "translateY(40px)",
                      opacity: activeIndex === index ? 1 : 0,
                    }}
                  >
                    <p className="text-base md:text-lg lg:text-xl text-white/60 leading-relaxed max-w-lg mb-8">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {service.tags.map((tag, tagIndex) => (
                        <span
                          key={tag}
                          className="text-xs md:text-sm uppercase tracking-[0.1em] font-semibold border border-white/25 px-4 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer text-white/70"
                          style={{
                            transitionDelay: `${150 + tagIndex * 50}ms`,
                            transform: activeIndex === index ? "translateY(0)" : "translateY(20px)",
                            opacity: activeIndex === index ? 1 : 0,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Image */}
                  <div
                    className="w-full md:w-1/2 flex items-center justify-center transition-all duration-700 delay-200"
                    style={{
                      transform: activeIndex === index ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
                      opacity: activeIndex === index ? 1 : 0,
                    }}
                  >
                    <div className="w-full max-w-md lg:max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Dots */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {services.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300"
            style={{
              backgroundColor: activeIndex === index ? "white" : "rgba(255,255,255,0.3)",
              transform: activeIndex === index ? "scale(1.3)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </section>
  );
};