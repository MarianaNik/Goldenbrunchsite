import logo from "../../imports/logobrunch.png";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-neutral-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={logo} alt="Golden Brunch Logo" className="h-16 md:h-20 mb-4 brightness-0 invert" style={{ mixBlendMode: 'multiply' }} />
            <p className="text-gray-400 text-sm">
              Serving quality breakfast and lunch since day one.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-400 hover:text-[#F39C12] transition">Home</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-[#F39C12] transition">Menu</a></li>
              <li><a href="#locations" className="text-gray-400 hover:text-[#F39C12] transition">Locations</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#F39C12] transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase tracking-wider text-sm">Hours</h3>
            <p className="text-gray-400 text-sm mb-2">Mon - Thu</p>
            <p className="text-white text-sm mb-4">6:30 AM - 2:30 PM</p>
            <p className="text-gray-400 text-sm mb-2">Fri - Sun</p>
            <p className="text-white text-sm">6:30 AM - 3:00 PM</p>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase tracking-wider text-sm">Stay In Touch</h3>
            <div className="flex gap-4 mb-6">
              <a href="https://www.facebook.com/goldenbrunch" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F39C12] transition">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/goldenbrunch/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F39C12] transition">
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">(847) 758-7400</p>
            <p className="text-gray-400 text-sm">info@goldenbrunch.com</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; 2026 Golden Brunch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
