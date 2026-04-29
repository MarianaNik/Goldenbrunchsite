import { UtensilsCrossed, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative h-[600px] md:h-[700px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 20%, rgba(255, 255, 255, 0) 50%), url('/src/imports/herobox.png')`
        }}
      />
      <div className="relative z-10 px-6 md:pl-24 lg:pl-32 md:pr-12 lg:pr-16 text-gray-900">
        <div className="max-w-lg">
          <h1 className="text-5xl md:text-6xl mb-4" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, color: '#331900' }}>
            Good Food.
          </h1>
          <p className="text-6xl md:text-7xl mb-6" style={{ fontFamily: 'Satisfy, cursive', color: '#F39C12' }}>
            Great Mornings.
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-md" style={{ color: '#4A4A4A', fontFamily: 'Lato, sans-serif', fontWeight: 400, lineHeight: '1.6' }}>
            Start your day the golden way with our signature breakfast favorites, fresh brunch specialties, and satisfying lunch options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://order.toasttab.com/online/golden-brunch-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-8 py-3.5 rounded-md transition text-sm font-semibold uppercase tracking-wide flex items-center justify-center gap-2 border-2"
              style={{ backgroundColor: '#F39C12', borderColor: '#F39C12' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#E08E0B'; e.currentTarget.style.borderColor = '#E08E0B'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#F39C12'; e.currentTarget.style.borderColor = '#F39C12'; }}
            >
              <UtensilsCrossed size={18} />
              Order Online
            </a>
            <a
              href="#locations"
              className="bg-white hover:bg-gray-100 text-gray-900 border-2 border-gray-300 px-8 py-3.5 rounded-md transition text-sm font-semibold uppercase tracking-wide flex items-center justify-center gap-2"
            >
              <MapPin size={18} />
              Find a Location
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
