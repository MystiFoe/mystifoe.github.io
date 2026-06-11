import { Card } from "@/components/ui/card";
import alliedWorldwideImage from "@assets/Allied Worldwide.png";
import kovanLabsImage from "@assets/Kovan labs.png";
import knuImage from "@assets/KNU.png";
import lenovoImage from "@assets/lenovo.png";
import pravaigImage from "@assets/Pravaig.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Who Am I</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a <span className="font-semibold text-blue-600">Product Engineer and AI Product Manager</span> who builds production AI systems end-to-end. At Pravaig Dynamics I shipped 5+ live products in 6 months as the sole PM — a Manufacturing Execution System, an ERP, agentic AI workflows, and internal platforms — serving 50+ daily active users.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I sit at the intersection of product thinking and technical execution. I use <span className="font-semibold text-blue-600">LangChain, Claude API, RAG pipelines, and Python</span> daily — not just to talk about AI but to ship with it. My AI systems have contributed to <span className="font-semibold text-blue-600">~₹2 Cr in enterprise client acquisition</span> and reduced operational workload by 65%.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Actively exploring <span className="font-semibold text-blue-600">Product Manager, APM, Business Analyst, and AI PM roles</span> in Bangalore and internationally — Singapore, Dubai, and KL.
            </p>
          </div>
        </div>

        {/* Companies Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Companies I've worked with</h3>
          <Card className="p-8 border-blue-100 bg-white shadow-lg">
            <div className="flex flex-wrap justify-center items-center gap-10">

              {/* Pravaig — dark bg to make logo visible */}
              <div className="flex items-center justify-center w-16 h-16 rounded-lg overflow-hidden bg-gray-800 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 flex-shrink-0">
                <img src={pravaigImage} alt="Pravaig Dynamics" className="w-full h-full object-cover" />
              </div>

              {/* Allied Worldwide */}
              <div className="flex items-center justify-center w-16 h-10 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 flex-shrink-0">
                <img src={alliedWorldwideImage} alt="Allied Worldwide" className="w-full h-full object-contain" />
              </div>

              {/* Kovan Labs */}
              <div className="flex items-center justify-center w-16 h-10 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 flex-shrink-0">
                <img src={kovanLabsImage} alt="Kovan Labs" className="w-full h-full object-contain" />
              </div>

              {/* Energica — green bg so white logo shows */}
              <div className="flex items-center justify-center w-16 h-10 rounded-lg bg-green-700 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 flex-shrink-0 px-1">
                <span className="text-white font-bold text-xs text-center leading-tight">ENERGICA</span>
              </div>

              {/* KNU */}
              <div className="flex items-center justify-center w-16 h-10 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 flex-shrink-0">
                <img src={knuImage} alt="KNU" className="w-full h-full object-contain" />
              </div>

              {/* Lenovo */}
              <div className="flex items-center justify-center w-16 h-10 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 flex-shrink-0">
                <img src={lenovoImage} alt="Lenovo" className="w-full h-full object-contain" />
              </div>

              {/* Recurva */}
              <div className="flex items-center justify-center w-16 h-10 rounded-lg bg-emerald-600 hover:scale-110 transition-all duration-300 flex-shrink-0">
                <span className="text-white font-bold text-xs">Recurva</span>
              </div>

              {/* Prathik Softnet */}
              <div className="flex items-center justify-center w-16 h-10 rounded-lg bg-blue-700 hover:scale-110 transition-all duration-300 flex-shrink-0">
                <span className="text-white font-bold text-xs text-center leading-tight px-1">Prathik Softnet</span>
              </div>

            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
