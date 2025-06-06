import { Card } from "@/components/ui/card";
import alliedWorldwideImage from "@assets/Allied Worldwide.png";
import kovanLabsImage from "@assets/Kovan labs.png";
import knuImage from "@assets/KNU.png";
import lenovoImage from "@assets/lenovo.png";
import metresaImage from "@assets/Metresa.png";
import akshayaTexImage from "@assets/Akshaya Tex.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Who Am I</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 slide-up text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Experienced in <span className="font-semibold text-blue-600">Data Science, Machine Learning, and Business Intelligence</span>. I apply advanced analytics and AI to solve complex business problems. Through global internships and research, I turn complex data into actionable insights that drive measurable results.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I bridge technology and business by automating processes, optimizing ML models, and building decision-support dashboards. Collaborating with clients and teams across the <span className="font-semibold text-blue-600">UK, US, South Korea, and enterprise environments</span>, I deliver data-driven solutions that combine technical expertise with business impact.
            </p>
          </div>
        </div>

        {/* Companies Section */}
        <div className="mt-20 text-center slide-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">I am fortunate to have worked with these companies</h3>
          <Card className="p-8 border-blue-100 bg-white shadow-lg">
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              {/* Allied Worldwide */}
              <div className="flex items-center justify-center w-20 h-20 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
                <img
                  src={alliedWorldwideImage}
                  alt="Allied Worldwide logo"
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Kovan Labs */}
              <div className="flex items-center justify-center w-20 h-20 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
                <img
                  src={kovanLabsImage}
                  alt="Kovan Labs logo"
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* KNU */}
              <div className="flex items-center justify-center w-20 h-20 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
                <img
                  src={knuImage}
                  alt="KNU logo"
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Lenovo */}
              <div className="flex items-center justify-center w-20 h-20 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
                <img
                  src={lenovoImage}
                  alt="Lenovo logo"
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Metresa */}
              <div className="flex items-center justify-center w-20 h-20 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
                <img
                  src={metresaImage}
                  alt="Metresa logo"
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Akshaya Tex */}
              <div className="flex items-center justify-center w-20 h-20 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
                <img
                  src={akshayaTexImage}
                  alt="Akshaya Tex logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
