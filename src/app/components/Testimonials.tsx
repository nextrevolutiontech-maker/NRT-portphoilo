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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F58220]/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F58220] mb-6">Social Proof</div>
          <h2 className="text-5xl sm:text-7xl font-black tracking-tighter text-[#0B1B35] leading-tight">
            Trusted by Global <br /><span className="text-[#F58220] italic font-italic-serif font-normal">Partners</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[3rem] p-10 border border-[#0B1B35]/5 hover:border-[#F58220]/20 transition-all relative flex flex-col justify-between group shadow-xl"
            >
              <div className="absolute top-8 right-8 text-[#0B1B35]/5 group-hover:text-[#F58220]/20 transition-colors">
                <Quote className="w-12 h-12 rotate-180 fill-current" />
              </div>

              <div>
                <div className="flex items-center gap-1.5 mb-6">
                  {[...Array(5)].map((_, starI) => (
                    <Star 
                      key={starI} 
                      className={`w-4 h-4 fill-current ${starI < Math.floor(testimonial.rating) ? 'text-[#FFD600]' : 'text-[#0B1B35]/10'}`} 
                    />
                  ))}
                  <span className="ml-3 text-sm font-black text-[#0B1B35]">{testimonial.rating.toFixed(1)}</span>
                </div>

                <div className="text-[10px] font-black uppercase tracking-widest text-[#F58220] mb-4">
                  {testimonial.project}
                </div>

                <p className="text-lg font-bold text-[#0B1B35]/70 leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center gap-5 pt-8 border-t border-[#0B1B35]/5 mt-auto">
                <div className="w-12 h-12 rounded-full bg-[#0B1B35]/5 flex items-center justify-center text-2xl shadow-sm border border-[#0B1B35]/10">
                   {testimonial.flag}
                </div>
                <div>
                   <div className="text-base font-black text-[#0B1B35] uppercase tracking-tight">{testimonial.author}</div>
                   <div className="text-[9px] font-black text-[#0B1B35]/30 uppercase tracking-widest">
                      {testimonial.location} • {testimonial.date}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 py-16 border-t border-[#0B1B35]/5 flex flex-wrap justify-center gap-12 sm:gap-32">
           {[
             { val: "5.0/5", label: "Average Rating" },
             { val: "100%", label: "Job Success" },
             { val: "15+", label: "Countries Served" }
           ].map((stat, i) => (
             <div key={i} className="text-center">
                <div className="text-4xl sm:text-5xl font-black text-[#0B1B35] tracking-tighter mb-2">{stat.val}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-[#0B1B35]/40">{stat.label}</div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
