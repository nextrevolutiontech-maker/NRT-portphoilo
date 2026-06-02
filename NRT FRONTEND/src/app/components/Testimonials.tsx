import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  author: string;
  location: string;
  flag: string;
  rating: number;
  project: string;
  content: string;
  date: string;
}

/** Enterprise-aligned reviews first; freelancer-style entries removed */
const testimonials: Testimonial[] = [
  {
    author: "Sarah L.",
    location: "USA",
    flag: "🇺🇸",
    rating: 5.0,
    project: "eCommerce Speed Audit",
    content:
      "NRT transformed our slow Shopify store into a high-performance machine. Our conversion rate increased by 25% within weeks.",
    date: "1 month ago",
  },
  {
    author: "David M.",
    location: "UK",
    flag: "🇬🇧",
    rating: 5.0,
    project: "Custom ERP Integration",
    content:
      "Seamless integration of our legacy ERP with a modern React frontend. Their team understands complex business logic perfectly.",
    date: "2 months ago",
  },
  {
    author: "Muzammil H.",
    location: "UAE",
    flag: "🇦🇪",
    rating: 5.0,
    project: "Inventory Management System",
    content:
      "Excellent execution on our warehouse management system. The real-time tracking feature is a game-changer for our logistics team.",
    date: "1 month ago",
  },
  {
    author: "Fatima A.",
    location: "Saudi Arabia",
    flag: "🇸🇦",
    rating: 5.0,
    project: "Learning Management System",
    content:
      "NRT built a highly scalable LMS for our training institute. The user interface is intuitive and our students love the seamless experience.",
    date: "3 weeks ago",
  },
  {
    author: "Zeeshan K.",
    location: "Pakistan",
    flag: "🇵🇰",
    rating: 5.0,
    project: "Real-estate Portal",
    content:
      "The best tech team in Karachi. They delivered a complex real-estate portal on time and with zero bugs. Highly recommended for local businesses.",
    date: "4 months ago",
  },
  {
    author: "Elena R.",
    location: "Germany",
    flag: "🇩🇪",
    rating: 4.9,
    project: "Mobile App Development",
    content:
      "Exceptional communication and technical depth. They handled the Flutter build with great care and attention to detail.",
    date: "5 months ago",
  },
  {
    author: "Ahmed G.",
    location: "Tunisia",
    flag: "🇹🇳",
    rating: 5.0,
    project: "PayloadCMS & Next.js Platform",
    content:
      "Great work. Professional and very responsive. Would recommend for any complex web application development.",
    date: "3 months ago",
  },
  {
    author: "James W.",
    location: "Australia",
    flag: "🇦🇺",
    rating: 5.0,
    project: "SaaS Platform Build",
    content:
      "Finding a reliable engineering partner is hard, but NRT made it easy. Their team delivered our SaaS platform with clear communication throughout.",
    date: "6 months ago",
  },
];

interface TestimonialsProps {
  limit?: number;
  theme?: "light" | "dark";
}

export function Testimonials({ limit, theme = "light" }: TestimonialsProps) {
  const displayTestimonials = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section
      className={`py-20 sm:py-24 relative overflow-hidden ${theme === "dark" ? "bg-[#131A2A] border-y border-white/10 text-white" : "bg-transparent text-[#0F172A]"}`}
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3A5CCC]/5 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[60px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="mx-auto max-w-7xl xl:max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="text-nrt-eyebrow text-[#3A5CCC] mb-6">Social Proof</div>
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] ${theme === "dark" ? "text-white" : "text-[#0F172A]"}`}
          >
            Trusted by Global <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] via-[#7DD3FC] to-[#3A5CCC] italic font-italic-serif font-normal">
              Partners
            </span>
            .
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayTestimonials.map((testimonial, i) => (
            <motion.div
              key={`${testimonial.author}-${testimonial.project}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-[2rem] p-7 border transition-all duration-500 flex flex-col justify-between overflow-hidden ${
                theme === "dark"
                  ? "bg-[#1E293B]/70 border-white/10 hover:border-[#3A5CCC]/40 hover:bg-[#1E293B] shadow-2xl text-white"
                  : "bg-white/[0.6] border-[#0F172A]/5 hover:border-[#3A5CCC]/30 hover:bg-white shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_50px_rgba(58,92,204,0.1)] text-[#0F172A]"
              }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3A5CCC]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div
                className={`absolute top-6 right-6 transition-colors ${theme === "dark" ? "text-white/5 group-hover:text-[#3A5CCC]/20" : "text-[#0F172A]/5 group-hover:text-[#3A5CCC]/20"}`}
              >
                <Quote className="w-8 h-8 rotate-180 fill-current" />
              </div>

              <div>
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, starI) => (
                    <Star
                      key={starI}
                      className={`w-3.5 h-3.5 fill-current ${starI < Math.floor(testimonial.rating) ? "text-[#3A5CCC]" : theme === "dark" ? "text-white/10" : "text-[#0F172A]/10"}`}
                    />
                  ))}
                  <span
                    className={`ml-3 text-nrt-label ${theme === "dark" ? "text-slate-300" : "text-[#0F172A]/55"}`}
                  >
                    {testimonial.rating.toFixed(1)} Rating
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 text-nrt-label text-[#3A5CCC] mb-3 px-3 py-1 bg-[#3A5CCC]/5 rounded-full border border-[#3A5CCC]/10">
                  <span className="w-1 h-1 rounded-full bg-[#3A5CCC] animate-pulse" />
                  {testimonial.project}
                </div>

                <p
                  className={`text-base text-nrt-body leading-relaxed mb-8 italic ${theme === "dark" ? "text-slate-200" : "text-[#0F172A]/85"}`}
                >
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>

              <div
                className={`flex items-center gap-4 pt-6 border-t mt-auto ${theme === "dark" ? "border-white/10" : "border-[#0F172A]/5"}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shadow-sm border transform group-hover:scale-110 transition-transform ${
                    theme === "dark" ? "border-white/10" : "border-[#0F172A]/10"
                  } ${
                    i % 4 === 0
                      ? "bg-[#3A5CCC] text-white"
                      : i % 4 === 1
                        ? "bg-emerald-500 text-white"
                        : i % 4 === 2
                          ? "bg-purple-500 text-white"
                          : "bg-blue-400 text-white"
                  }`}
                >
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div
                    className={`text-sm font-semibold tracking-tight transition-colors ${theme === "dark" ? "text-white group-hover:text-[#3A5CCC]" : "text-[#0F172A] group-hover:text-[#3A5CCC]"}`}
                  >
                    {testimonial.author}
                  </div>
                  <div
                    className={`text-nrt-label ${theme === "dark" ? "text-slate-300" : "text-[#0F172A]/50"}`}
                  >
                    {testimonial.location} • {testimonial.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div
          className={`mt-24 py-16 border-t flex flex-wrap justify-center gap-12 sm:gap-32 ${theme === "dark" ? "border-white/10" : "border-[#0F172A]/5"}`}
        >
          {[
            { val: "5.0/5", label: "Average Rating" },
            { val: "100%", label: "Project Delivery Rate" },
            { val: "15+", label: "Countries Served" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className={`text-4xl sm:text-5xl font-black tracking-tighter mb-2 ${theme === "dark" ? "text-white" : "text-[#0F172A]"}`}
              >
                {stat.val}
              </div>
              <div
                className={`text-nrt-label ${theme === "dark" ? "text-slate-300" : "text-[#0F172A]/55"}`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
