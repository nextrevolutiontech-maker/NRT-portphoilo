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
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-orange mb-4">Social Proof</div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-[#0B1B35] leading-tight">
            Trusted by Global <br /><span className="text-orange italic font-italic-serif font-normal">Partners</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#F8F9FA] rounded-[2.5rem] p-8 sm:p-10 border border-black/5 relative flex flex-col justify-between group"
            >
              <div className="absolute top-8 right-8 text-black/5 group-hover:text-orange/10 transition-colors">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              <div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, starI) => (
                    <Star 
                      key={starI} 
                      className={`w-4 h-4 fill-current ${starI < Math.floor(testimonial.rating) ? 'text-[#FFD600]' : 'text-black/10'}`} 
                    />
                  ))}
                  <span className="ml-2 text-sm font-black text-[#0B1B35]">{testimonial.rating.toFixed(1)}</span>
                </div>

                <div className="text-[9px] font-black uppercase tracking-widest text-orange mb-4">
                  {testimonial.project}
                </div>

                <p className="text-lg font-bold text-[#0B1B35]/70 leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-8 border-t border-black/5">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xl shadow-sm border border-black/5">
                  {testimonial.flag}
                </div>
                <div>
                  <div className="text-base font-black text-[#0B1B35]">{testimonial.author}</div>
                  <div className="text-[10px] font-bold text-[#0B1B35]/40 uppercase tracking-wider">
                    {testimonial.location} • {testimonial.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Stats Footer */}
        <div className="mt-20 py-12 border-t border-black/5 flex flex-wrap justify-center gap-12 sm:gap-24">
           <div className="text-center">
              <div className="text-4xl font-black text-[#0B1B35] tracking-tighter mb-1">5.0/5</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#0B1B35]/40">Average Rating</div>
           </div>
           <div className="text-center">
              <div className="text-4xl font-black text-[#0B1B35] tracking-tighter mb-1">100%</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#0B1B35]/40">Job Success</div>
           </div>
           <div className="text-center">
              <div className="text-4xl font-black text-[#0B1B35] tracking-tighter mb-1">15+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#0B1B35]/40">Countries Served</div>
           </div>
        </div>
      </div>
    </section>
  );
}
