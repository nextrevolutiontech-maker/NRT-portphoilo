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
      className={`py-20 sm:py-24 relative overflow-hidden ${theme === "dark" ? "bg-white border-y border-slate-300 text-slate-900" : "bg-transparent text-slate-900"}`}
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[60px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="mx-auto max-w-7xl xl:max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="text-nrt-eyebrow text-orange-600 mb-6">Social Proof</div>
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] ${theme === "dark" ? "text-slate-900" : "text-slate-900"}`}
          >
            Trusted by Global <br />
            <span className="text-orange-600">
              Partners
            </span>
            .
          </h2>
        </div>
      </div>

      {/* Continuous Marquee Slider (Full Width - No Fade) */}
      <div className="relative w-full overflow-hidden py-8">
        <motion.div
          className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {[...displayTestimonials, ...displayTestimonials].map((testimonial, i) => (
              <div
                key={`${testimonial.author}-${testimonial.project}-${i}`}
                className={`w-[350px] sm:w-[400px] shrink-0 group relative rounded-[2rem] p-7 border transition-all duration-500 flex flex-col justify-between overflow-hidden ${
                  theme === "dark"
                    ? "bg-white border border-slate-300 hover:border-slate-400 hover:bg-white shadow-xl text-slate-900"
                    : "bg-white/[0.6] border-slate-300 hover:border-orange-600/30 hover:bg-white shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_50px_rgba(58,92,204,0.1)] text-slate-900"
                }`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div
                  className={`absolute top-6 right-6 transition-colors ${theme === "dark" ? "text-slate-900/5 group-hover:text-orange-600/20" : "text-slate-900/5 group-hover:text-orange-600/20"}`}
                >
                  <Quote className="w-8 h-8 rotate-180 fill-current" />
                </div>

                <div>
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(5)].map((_, starI) => (
                      <Star
                        key={starI}
                        className={`w-3.5 h-3.5 fill-current ${starI < Math.floor(testimonial.rating) ? "text-orange-600" : theme === "dark" ? "text-slate-200" : "text-slate-900/10"}`}
                      />
                    ))}
                    <span
                      className={`ml-3 text-nrt-label ${theme === "dark" ? "text-slate-600" : "text-slate-900/55"}`}
                    >
                      {testimonial.rating.toFixed(1)} Rating
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 text-nrt-label text-orange-600 mb-3 px-3 py-1 bg-orange-600/5 rounded-full border border-orange-600/10">
                    <span className="w-1 h-1 rounded-full bg-orange-600 animate-pulse" />
                    {testimonial.project}
                  </div>

                  <p
                    className={`text-base text-nrt-body leading-relaxed mb-8 italic ${theme === "dark" ? "text-slate-700" : "text-slate-900/85"}`}
                  >
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>

                <div
                  className={`flex items-center gap-4 pt-6 border-t mt-auto ${theme === "dark" ? "border-slate-300" : "border-slate-300"}`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shadow-sm border transform group-hover:scale-110 transition-transform ${
                      theme === "dark" ? "border-slate-300" : "border-slate-300"
                    } ${
                      i % 4 === 0
                        ? "bg-orange-600 text-slate-900"
                        : i % 4 === 1
                          ? "bg-slate-900 text-white"
                          : i % 4 === 2
                            ? "bg-slate-800 text-white"
                            : "bg-slate-700 text-white"
                    }`}
                  >
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div
                      className={`text-sm font-semibold tracking-tight transition-colors ${theme === "dark" ? "text-slate-900 group-hover:text-orange-600" : "text-slate-900 group-hover:text-orange-600"}`}
                    >
                      {testimonial.author}
                    </div>
                    <div
                      className={`text-nrt-label ${theme === "dark" ? "text-slate-600" : "text-slate-900/50"}`}
                    >
                      {testimonial.location} • {testimonial.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      <div className="mx-auto max-w-7xl xl:max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div
          className={`mt-24 py-16 border-t flex flex-wrap justify-center gap-12 sm:gap-32 ${theme === "dark" ? "border-slate-300" : "border-slate-300"}`}
        >
          {[
            { val: "5.0/5", label: "Average Rating" },
            { val: "100%", label: "Project Delivery Rate" },
            { val: "15+", label: "Countries Served" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className={`text-4xl sm:text-5xl font-black tracking-tighter mb-2 ${theme === "dark" ? "text-slate-900" : "text-slate-900"}`}
              >
                {stat.val}
              </div>
              <div
                className={`text-nrt-label ${theme === "dark" ? "text-slate-600" : "text-slate-900/55"}`}
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
