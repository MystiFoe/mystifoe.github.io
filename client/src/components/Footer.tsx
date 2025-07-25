import { Linkedin, Github, Mail } from "lucide-react";

// Custom Kaggle icon component
const KaggleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.493c0-.236.118-.353.354-.353h2.431c.234 0 .351.117.351.353v14.343l6.203-6.272c.165-.165.33-.248.495-.248h3.239c.144 0 .236.06.28.18.043.119.014.24-.088.36l-6.396 6.506 6.52 8.332c.139.184.164.29.085.386z"/>
  </svg>
);

export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/mystifoe/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/MystiFoe", label: "GitHub" },
    { icon: KaggleIcon, href: "https://www.kaggle.com/mystifoe77", label: "Kaggle" },
    { icon: Mail, href: "mailto:giritharanmani1@gmail.com", label: "Email" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Giritharan Mani</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Transforming complex data into strategic business decisions. 
            Available for full-time opportunities and consulting projects.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconComponent className="w-6 h-6" />
                </a>
              );
            })}
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">
              © 2024 Giritharan Mani. All rights reserved. | Designed with data-driven insights in mind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}