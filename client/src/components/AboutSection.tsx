import { Card } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Who Am I</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Modern data analytics dashboard" 
              className="rounded-xl shadow-2xl" 
            />
          </div>
          
          <div className="space-y-6 slide-up">
            <p className="text-lg text-gray-700 leading-relaxed">
              Experienced in <span className="font-semibold text-blue-600">Data Science, Machine Learning, and Business Intelligence</span>. I apply advanced analytics and AI to solve complex business problems. Through global internships and research, I turn complex data into actionable insights that drive measurable results.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I bridge technology and business by automating processes, optimizing ML models, and building decision-support dashboards. Collaborating with clients and teams across the <span className="font-semibold text-blue-600">UK, US, South Korea, and enterprise environments</span>, I deliver data-driven solutions that combine technical expertise with business impact.
            </p>
            
            {/* Key Achievements */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="bg-blue-50 p-4 border-blue-100">
                <h4 className="font-semibold text-blue-700 mb-2">Global Experience</h4>
                <p className="text-sm text-gray-600">UK, US, South Korea</p>
              </Card>
              <Card className="bg-emerald-50 p-4 border-emerald-100">
                <h4 className="font-semibold text-emerald-700 mb-2">Google Certified</h4>
                <p className="text-sm text-gray-600">Business Intelligence & Analytics</p>
              </Card>
            </div>
          </div>
        </div>

        {/* Companies Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">I am fortunate to have worked with these companies</h3>
          <Card className="p-8 border-blue-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="flex items-center justify-center">
                <div className="bg-red-500 text-white font-bold text-xl px-6 py-3 rounded-lg shadow-lg">
                  Lenovo
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-blue-500 text-white font-bold text-xl px-6 py-3 rounded-lg shadow-lg">
                  Kovan Labs
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-orange-500 text-white font-bold text-xl px-6 py-3 rounded-lg shadow-lg">
                  Allied Worldwide
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-red-600 text-white font-bold text-xl px-6 py-3 rounded-lg shadow-lg">
                  KNU
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
