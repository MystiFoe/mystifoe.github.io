import { Linkedin, Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
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
