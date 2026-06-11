import { Card } from "@/components/ui/card";
import alliedWorldwideImage from "@assets/Allied Worldwide.png";
import kovanLabsImage from "@assets/Kovan labs.png";
import knuImage from "@assets/KNU.png";
import lenovoImage from "@assets/lenovo.png";
import pravaigImage from "@assets/Pravaig.jpg";
import energicaImage from "@assets/Energica.webp";

export default function AboutSection() {
  const companies = [
    { src: pravaigImage, alt: "Pravaig Dynamics" },
    { src: alliedWorldwideImage, alt: "Allied Worldwide" },
    { src: kovanLabsImage, alt: "Kovan Labs" },
    { src: energicaImage, alt: "Energica" },
    { src: knuImage, alt: "KNU South Korea" },
    { src: lenovoImage, alt: "Lenovo" },
  ];

  const textCompanies = [
    { name: "Recurva", bg: "bg-emerald-600", text: "text-white" },
    { name: "Prathik Softnet", bg: "bg-blue-700", text: "text-white" },
  ];

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
              I sit at the intersection of product thinking and technical execution. I use <span className="font-semibold text-blue-600">LangChain, Claude API, RAG pipelines, and Python</span> daily — not just to talk about AI but to ship with it. I own the full product lifecycle: discovery, PRD, sprint planning, UAT, launch, and post-launch iteration. My AI systems have contributed to <span className="font-semibold text-blue-600">~₹2 Cr in enterprise client acquisition</span> and reduced operational workload by 65%.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm actively exploring <span className="font-semibold text-blue-600">Product Manager, APM, Business Analyst, and AI PM roles</span> in Bangalore and internationally — Singapore, Dubai, and KL.
            </p>
          </div>
        </div>

        {/* Companies Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Companies I've worked with</h3>
          <Card className="p-8 border-blue-100 bg-white shadow-lg">
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-10">
              {companies.map((company, i) => (
                <div key={i} className="flex items-center justify-center w-20 h-16 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
                  <img src={company.src} alt={company.alt} className="w-full h-full object-contain" />
                </div>
              ))}
              {textCompanies.map((company, i) => (
                <div key={i} className={`flex items-center justify-center w-28 h-10 rounded-lg ${company.bg} ${company.text} font-bold text-xs text-center px-2 hover:scale-110 transition-all duration-300 cursor-default`}>
                  {company.name}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
