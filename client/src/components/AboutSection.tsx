import { Card } from "@/components/ui/card";

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
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">I am fortunate to have worked with these companies</h3>
          <Card className="p-8 border-blue-100 bg-white shadow-lg">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
              {/* Lenovo */}
              <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg shadow-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">LOGO</span>
                </div>
              </div>
              
              {/* Kovan Labs */}
              <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">LOGO</span>
                </div>
              </div>
              
              {/* Allied Worldwide */}
              <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg shadow-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">LOGO</span>
                </div>
              </div>
              
              {/* Kyungpook National University */}
              <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-lg shadow-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">LOGO</span>
                </div>
              </div>
              
              {/* Akshaya Tex */}
              <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg shadow-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">LOGO</span>
                </div>
              </div>
              
              {/* Metresa ITech Solutions */}
              <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">LOGO</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
