import { MapPin } from "lucide-react";

export function Hours() {
  return (
    <section id="locations" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>
            Find A Location
          </h2>
          <p className="text-gray-600">Stop by and see us at one of our locations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="text-[#F39C12] flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Arlington Heights Location</h3>
                <p className="text-gray-700">31 E Golf Rd</p>
                <p className="text-gray-700 mb-4">Arlington Heights, IL 60005</p>
                <p className="text-gray-600 text-sm mb-1">Monday - Thursday: 6:30 AM - 2:30 PM</p>
                <p className="text-gray-600 text-sm mb-4">Friday - Sunday: 6:30 AM - 3:00 PM</p>
                <a
                  href="https://order.toasttab.com/online/golden-brunch-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#F39C12] hover:bg-[#E08E0B] text-white px-6 py-2.5 rounded-md transition text-sm font-medium"
                >
                  Order Online
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="relative h-64 w-full">
              <iframe
                src="https://www.google.com/maps?ll=42.05108,-87.980011&z=15&t=m&hl=en-US&gl=US&mapclient=embed&output=embed"
                className="h-64 w-full rounded-lg"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full pointer-events-none">
                <div className="relative">
                  <div className="relative drop-shadow-lg">
                    <MapPin className="text-red-600 fill-red-600" size={36} strokeWidth={2.5} />
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white px-2.5 py-1 rounded shadow-md whitespace-nowrap border border-gray-200">
                    <p className="text-xs font-semibold text-gray-900">Golden Brunch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
