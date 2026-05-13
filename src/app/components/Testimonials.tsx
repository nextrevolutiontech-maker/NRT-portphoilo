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

const testimonials: Testimonial[] = [
  {
    author: "Tutorsclub E.",
    location: "India",
    flag: "🇮🇳",
    rating: 5.0,
    project: "Mesh Central Server Customization",
    content: "She consistently demonstrates excellent communication and a strong commitment to meeting project deadlines. She quickly understands project requirements and always gives her best effort. It's been a pleasure working with her—thank you!",
    date: "15 days ago"
  },
  {
    author: "Anas S.",
    location: "New Zealand / Pakistan",
    flag: "🇵🇰",
    rating: 4.8,
    project: "Integrate USITC DataWeb API v2",
    content: "Great experience it was very first time handled it with professionalism. Great communication and one of the best part is she updated regularly that's why I'm happy to work with her. Work with her again.",
    date: "2 months ago"
  },
  {
    author: "Ahmed G.",
    location: "Tunisia",
    flag: "🇹🇳",
    rating: 5.0,
    project: "Localizing Coordinates in a Building",
    content: "I was again satisfied by the quality of work. Highly professional and understands the complexity of spatial data.",
    date: "3 months ago"
  },
  {
    author: "Ahmed G.",
    location: "Tunisia",
    flag: "🇹🇳",
    rating: 5.0,
    project: "Firebase & Cloud Functions",
    content: "Really satisfied with the work. The implementation of TypeScript cloud functions was flawless and secure.",
    date: "3 months ago"
  },
  {
    author: "Ahmed G.",
    location: "Tunisia",
    flag: "🇹🇳",
    rating: 5.0,
    project: "PayloadCMS & Next.js Platform",
    content: "Great work. Professional and very responsive. Would recommend for any complex web application development.",
    date: "3 months ago"
  },
  {
    author: "Sarah L.",
    location: "USA",
    flag: "🇺🇸",
    rating: 5.0,
    project: "eCommerce Speed Audit",
    content: "NRT transformed our slow Shopify store into a high-performance machine. Our conversion rate increased by 25% within weeks.",
    date: "1 month ago"
  },
  {
    author: "David M.",
    location: "UK",
    flag: "🇬🇧",
    rating: 5.0,
    project: "Custom API Integration",
    content: "Seamless integration of our legacy ERP with a modern React frontend. Their team understands complex business logic perfectly.",
    date: "2 months ago"
  },
  {
    author: "Zeeshan K.",
    location: "Pakistan",
    flag: "🇵🇰",
    rating: 5.0,
    project: "Real-estate Portal",
    content: "The best tech team in Karachi. They delivered a complex real-estate portal on time and with zero bugs. Highly recommended for local businesses.",
    date: "4 months ago"
  },
  {
    author: "Elena R.",
    location: "Germany",
    flag: "🇩🇪",
    rating: 4.9,
    project: "Mobile App Development",
    content: "Exceptional communication and technical depth. They handled the Flutter build with great care and attention to detail.",
    date: "5 months ago"
  },
  {
    author: "James W.",
    location: "Australia",
    flag: "🇦🇺",
    rating: 5.0,
    project: "SaaS Platform Build",
    content: "Finding a reliable tech partner is hard, but NRT made it easy. Their dedicated developer model works perfectly for our scaling needs.",
    date: "6 months ago"
  },
  {
    author: "Muzammil H.",
    location: "UAE",
    flag: "🇦🇪",
    rating: 5.0,
    project: "Inventory Management System",
    content: "Excellent execution on our warehouse management system. The real-time tracking feature is a game-changer for our logistics team.",
    date: "1 month ago"
  },
  {
    author: "Fatima A.",
    location: "Saudi Arabia",
    flag: "🇸🇦",
    rating: 5.0,
    project: "Learning Management System",
    content: "NRT built a highly scalable LMS for our training institute. The user interface is intuitive and our students love the seamless experience.",
    date: "3 weeks ago"
  }
];

interface TestimonialsProps {
  limit?: number;
}

export function Testimonials({ limit }: TestimonialsProps) {
  const displayTestimonials = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className="py-32 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3A5CCC]/5 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[60px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A5CCC] mb-6">Social Proof</div>
          <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-[#0F172A] leading-tight">
            Trusted by Global <br /><span className="text-[#3A5CCC] italic font-italic-serif font-normal">Partners</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayTestimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white/[0.6] rounded-[2rem] p-7 border border-[#0F172A]/5 hover:border-[#3A5CCC]/30 hover:bg-white transition-all duration-500 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_50px_rgba(58,92,204,0.1)] flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle Ambient Glow on Hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3A5CCC]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute top-6 right-6 text-[#0F172A]/5 group-hover:text-[#3A5CCC]/20 transition-colors">
                <Quote className="w-8 h-8 rotate-180 fill-current" />
              </div>

              <div>
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, starI) => (
                    <Star 
                      key={starI} 
                      className={`w-3 h-3 fill-current ${starI < Math.floor(testimonial.rating) ? 'text-[#3A5CCC]' : 'text-[#0F172A]/10'}`} 
                    />
                  ))}
                  <span className="ml-3 text-[10px] font-black text-[#0F172A]/40 uppercase tracking-widest">{testimonial.rating.toFixed(1)} Rating</span>
                </div>

                <div className="inline-flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.2em] text-[#3A5CCC] mb-3 px-3 py-1 bg-[#3A5CCC]/5 rounded-full border border-[#3A5CCC]/10">
                  <span className="w-1 h-1 rounded-full bg-[#3A5CCC] animate-pulse" />
                  {testimonial.project}
                </div>

                <p className="text-base font-bold text-[#0F172A]/80 leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-[#0F172A]/5 mt-auto">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shadow-sm border border-[#0F172A]/10 transform group-hover:scale-110 transition-transform ${
                  i % 4 === 0 ? 'bg-[#3A5CCC] text-white' : 
                  i % 4 === 1 ? 'bg-emerald-500 text-white' : 
                  i % 4 === 2 ? 'bg-purple-500 text-white' : 
                  'bg-blue-400 text-white'
                }`}>
                   {testimonial.author.charAt(0)}
                </div>
                <div>
                   <div className="text-xs font-bold text-[#0F172A] uppercase tracking-tight group-hover:text-[#3A5CCC] transition-colors">{testimonial.author}</div>
                   <div className="text-[8px] font-bold text-[#0F172A]/30 uppercase tracking-[0.2em]">
                      {testimonial.location} • {testimonial.date}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 py-16 border-t border-[#0F172A]/5 flex flex-wrap justify-center gap-12 sm:gap-32">
           {[
             { val: "5.0/5", label: "Average Rating" },
             { val: "100%", label: "Job Success" },
             { val: "15+", label: "Countries Served" }
           ].map((stat, i) => (
             <div key={i} className="text-center">
                <div className="text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tighter mb-2">{stat.val}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-[#0F172A]/40">{stat.label}</div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
