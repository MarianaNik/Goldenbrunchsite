import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Eva E.",
      text: "They were absolutely amazing! The service was friendly and fast, and the food was beyond delicious. The Spartan Omelette was unbelievably tasty, perfectly cooked and full of flavor. The coffee was rich and smooth, just the way I like it. My kids ordered the mini pancakes, and they loved every bite! The place has such a warm, cozy vibe, definitely a perfect spot for a family brunch. Highly recommend!"
    },
    {
      name: "Steven M.",
      text: "Hands down one of the best breakfast spots in the area!! Everything about this place is stellar and can't wait to come back and try more!!"
    },
    {
      name: "Tina W.",
      text: "This has long been a favorite place for great breakfast and lunches. I didn't realize they also did special events as well. We recently celebrated my son's Baby Shower here. They were fantastic! The Greek food was great and service top notch... If you are looking for a place to have a gathering I would definitely check with them for options."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-4" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>
          What Our Guests Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#F39C12] fill-[#F39C12]" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}