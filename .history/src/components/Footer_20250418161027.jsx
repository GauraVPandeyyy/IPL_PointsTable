// src/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Logo/Branding */}
          <div>
            <h2 className="text-2xl font-bold mb-4">IPL Scorer</h2>
            <p className="text-gray-400 text-sm">
              Live IPL match updates, scores, and detailed statistics for cricket fans.
            </p>
          </div>
  
          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Matches</a></li>
              <li><a href="#" className="hover:underline">Points Table</a></li>
              <li><a href="#" className="hover:underline">Stats</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-300 text-sm mb-2">Email: <a href="mailto:support@iplscorer.com" className="hover:underline">support@iplscorer.com</a></p>
            <p className="text-gray-300 text-sm mb-2">Phone: +91 9118357637</p>
            <p className="text-gray-300 text-sm">Location: Lucknow, India</p>
          </div>
  
          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/gaurav-pandey-0987162a0/" className="hover:text-pink-400 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Twitter</a>
              <a href="#" className="hover:text-gray-300 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} IPL Scorer. All rights reserved.
        </div>
      </footer>
    );
  }
  