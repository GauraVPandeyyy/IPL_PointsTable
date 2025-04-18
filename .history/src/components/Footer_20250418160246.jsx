// src/components/Footer.jsx

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} IPL Scorer. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:underline">
              Terms of Service
            </a>
            <a href="https://github.com/" target="_blank" className="text-sm hover:underline">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    );
  }
  