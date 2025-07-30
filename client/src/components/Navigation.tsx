import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X, Code } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = [
    { text: "Business Analyst", color: "text-blue-600" },
    { text: "Data Analyst", color: "text-green-600" },
    { text: "ML Engineer", color: "text-purple-600" },
    { text: "AI Engineer", color: "text-orange-600" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleDownloadResume = () => {
    // Simply open the Google Drive link in a new tab
    window.open('https://drive.google.com/file/d/1ZmEriAbV451netYgnZDcvSgyu3hjwqAI/view?usp=sharing', '_blank');
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect shadow-lg"
          : "bg-white/80 backdrop-blur-md border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl">
            <div className="inline-block w-[180px] h-[30px] overflow-hidden relative">
              <motion.div 
                key={currentRoleIndex}
                className={`${roles[currentRoleIndex].color} absolute w-full`}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentRoleIndex].text}
              </motion.div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['hero', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium capitalize"
              >
                {section === 'hero' ? 'Home' : section}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={handleDownloadResume}
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg transform hover:scale-105 transition-all"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-3">
                {[
                  { id: 'hero', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 font-medium transition-colors"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .glass-effect {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </nav>
  );
}