import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from 'react-i18next';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const projects = [
  {
    id: 1,
    title: "TicketFlow Queue System",
    description: "Enterprise-grade queue management system with ticket generation, staff dashboard, and real-time display screen.",
    path: "/src/assets/ticketflow.png",
    tech: ["React", "Node.js", "WebSocket", "MySQL"],
  },
  {
    id: 2,
    title: "Smart Consultation Dashboard",
    description: "Staff-facing dashboard to manage queues, call clients, and monitor service flow in real time.",
    path: "/src/assets/ticketflow.png",
    tech: ["React", "Tailwind", "Socket.io"],
  },
  {
    id: 3,
    title: "Public Queue Display Screen",
    description: "Real-time display system showing current tickets and announcements on large screens.",
    path: "/src/assets/ticketflow.png",
    tech: ["React", "WebSocket"],
  },
  {
    id: 4,
    title: "Voice Control Automation Agent",
    description: "Python-based voice assistant capable of executing system commands and automating tasks.",
    path: "/src/assets/python.png",
    tech: ["Python", "SpeechRecognition", "OS"],
  },
  {
    id: 5,
    title: "AI PowerPoint Generator",
    description: "Automated system that converts documents into modern, structured presentation slides.",
    path: "/src/assets/python.png",
    tech: ["Python", "AI", "API"],
  },
  {
    id: 6,
    title: "Google Drive Report Automation",
    description: "Workflow that monitors cloud storage and auto-generates formatted outputs from uploaded files.",
    path: "/src/assets/python.png",
    tech: ["Node.js", "Google API"],
  },
  {
    id: 7,
    title: "School Management System",
    description: "Full platform to manage students, teachers, classes, and schedules.",
    path: "/src/assets/school.png",
    tech: ["React", "PHP", "MySQL"],
  },
  {
    id: 8,
    title: "Online Exam Platform",
    description: "Secure online exam system with timer, grading, and anti-cheating logic.",
    path: "/src/assets/school.png",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 9,
    title: "Freelance Portfolio Website",
    description: "Modern personal portfolio with animations and responsive design.",
    path: "/src/assets/unity.png",
    tech: ["React", "Framer Motion"],
  },
  {
    id: 10,
    title: "E-commerce Admin Dashboard",
    description: "Advanced dashboard for managing products, orders, and analytics.",
    path: "/src/assets/ticketflow.png",
    tech: ["React", "Chart.js"],
  },
  {
    id: 11,
    title: "Facebook Auto Posting Bot",
    description: "Automation system that schedules and posts content to Facebook pages.",
    path: "/src/assets/python.png",
    tech: ["Node.js", "Facebook API"],
  },
  {
    id: 12,
    title: "Brand Identity Design System",
    description: "Complete branding kit including typography, colors, and UI components.",
    path: "/src/assets/unity.png",
    tech: ["Figma"],
  },
  {
    id: 13,
    title: "Anime Apparel Design Collection",
    description: "Custom anime-themed T-shirt and compression wear designs for a local brand.",
    path: "/src/assets/unity.png",
    tech: ["Photoshop", "Illustrator"],
  },
  {
    id: 14,
    title: "Landing Page Conversion System",
    description: "High-conversion landing pages optimized for digital marketing campaigns.",
    path: "/src/assets/ticketflow.png",
    tech: ["HTML", "CSS", "JS"],
  },
  {
    id: 15,
    title: "Real-Time Chat Application",
    description: "Messaging platform with live updates and user presence tracking.",
    path: "/src/assets/ticketflow.png",
    tech: ["React", "Socket.io"],
  },
  {
    id: 16,
    title: "API Integration Hub",
    description: "Centralized backend system for integrating multiple third-party services.",
    path: "/src/assets/python.png",
    tech: ["Node.js", "REST API"],
  },
  {
    id: 17,
    title: "Task & Workflow Automation Tool",
    description: "Custom workflow builder to automate repetitive business tasks.",
    path: "/src/assets/python.png",
    tech: ["Node.js", "Automation"],
  },
  {
    id: 18,
    title: "Unity 3D Puzzle Game",
    description: "Interactive 3D game with physics mechanics and puzzle-solving challenges.",
    path: "/src/assets/unity.png",
    tech: ["Unity", "C#"],
  },
  {
    id: 19,
    title: "Client Booking System",
    description: "Appointment scheduling platform with calendar and notifications.",
    path: "/src/assets/ticketflow.png",
    tech: ["React", "Node.js"],
  },
  {
    id: 20,
    title: "AI Chat Assistant Integration",
    description: "Custom AI chatbot integrated into websites for customer interaction.",
    path: "/src/assets/python.png",
    tech: ["AI", "API", "JavaScript"],
  },
];
export default function Projects() {
  const { t } = useTranslation();
  const projectsData = t('projects.items', { returnObjects: true });
  const projects = Array.isArray(projectsData) ? projectsData : [];

  return (
    <motion.section
      id="project"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#0a0a0a] border-t border-white/5"
      style={{ padding: '30px 0' }}
    >
      {/* Header Section */}
      <div className="px-8 py-32 md:py-48">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
          {/* Sidebar Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="sticky top-10 flex flex-col gap-2">
              <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.3em]">
                // {t('projects.label')}
              </span>
              <div className="h-px w-12 bg-neutral-800 hidden md:block"></div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="md:col-span-10">
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
              {/* Giant Number */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-[15vw] md:text-[12rem] font-bold leading-none text-neutral-800 tracking-tighter select-none"
              >
                {t('projects.number')}
              </motion.div>

              <div className="flex-1 space-y-8">
                {/* Main Statement */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-6xl font-medium leading-[1.1] tracking-tighter text-white"
                >
                  {t('projects.title')}{" "}
                  <span className="text-orange-600 italic">{t('projects.titleHighlight')}</span>{" "}
                  {t('projects.subtitle')}{" "}
                  <span className="text-neutral-500">
                    {t('projects.subtitleHighlight')}
                  </span>
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl"
                >
                  {t('projects.description')}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16 md:h-24" />

      {/* Carousel Section - ENLARGED */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-4 md:px-8 py-16 md:py-24 border-t border-white/5 mt-4 md:mt-8"
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 20,
              stretch: 30,
              depth: 120,
              modifier: 1.2,
              slideShadows: true,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="projectsSwiper"
            style={{ paddingBottom: "5rem", paddingTop: "2rem" }}
          >
            {projects.map((item) => (
              <SwiperSlide 
                key={item.id} 
                className="swiper-slide-responsive"
                style={{ width: "320px", height: "440px" }}
              >
                <div className="relative w-full h-full  overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow  hover:shadow-red-500 " style={{border: '1px solid red' ,borderRadius: '10px'}}>
            
                  {/* Full background image */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={item.path} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>

                  {/* Gradient overlay – subtle, image-focused */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

                  {/* Content – all text on top of image */}
                  <div className="relative z-20 h-full flex flex-col justify-between p-6 md:p-7 py-4">
              
                    {/* Top: Tech tags (minimal, on top-left) */}
                    <div className="flex flex-wrap gap-2 px-3">
                      {item.tech.slice(0, 3).map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 text-[11px] font-mono font-medium text-orange-300 bg-black/50 backdrop-blur-sm rounded-full border border-orange-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {item.tech.length > 3 && (
                        <span className="px-3 py-1 text-[11px] font-mono text-white/70 bg-black/50 backdrop-blur-sm rounded-full">
                          +{item.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Bottom: Title, description, and action */}
                    <div className="space-y-5 px-4 pb-4">
                      {/* Title */}
                      <h3 className="text-white text-4xl md:text-5xl font-bold tracking-tight leading-tight drop-shadow-lg">
                        {item.title}
                      </h3>
                
                      {/* Description */}
                      <p className="text-white/80 text-sm md:text-base leading-relaxed line-clamp-2 max-w-[90%] drop-shadow">
                        {item.description}
                      </p>
                
                      {/* Action button – clean, transparent, pill */}
                      <div className="pt-2">
                        <button className="inline-flex items-center gap-2 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-red-500 bg-black rounded-ful hover:bg-red-500 hover:text-white transition-all duration-300 group-hover/btn:scale-110" style={{padding:"10px 0px"}}>
                          View Project
                          <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Hover border glow (surrounds the card) */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-500/50 transition-all duration-500 pointer-events-none z-30" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>

      {/* Custom pagination styling */}
      <style>{`
        .projectsSwiper .swiper-pagination-bullet {
          background: #525252 !important;
          opacity: 0.5;
          width: 6px;
          height: 6px;
          transition: all 0.3s ease;
        }
        .projectsSwiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #f97316 !important;
          width: 20px;
          border-radius: 4px;
        }
        .projectsSwiper .swiper-slide-shadow {
          background: rgba(10, 10, 10, 0.8) !important;
        }
        @media (max-width: 640px) {
          .projectsSwiper {
            padding-top: 1rem !important;
            padding-bottom: 3rem !important;
          }
          .swiper-slide-responsive {
            width: 280px !important;
            height: 380px !important;
          }
        }
      `}</style>
    </motion.section>
  );
}
