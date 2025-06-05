import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  BarChart3, 
  Brain, 
  Code2,
  TrendingUp,
  Zap,
  PieChart,
  LineChart,
  Bot,
  Calculator,
  FileSpreadsheet,
  Activity
} from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Data Analytics & Data Science",
      icon: Database,
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/30",
      skills: [
        { name: "Python", icon: Code2, level: "Expert" },
        { name: "SQL", icon: Database, level: "Expert" },
        { name: "Pandas", icon: FileSpreadsheet, level: "Expert" },
        { name: "NumPy", icon: Calculator, level: "Expert" },
        { name: "Scikit-learn", icon: Brain, level: "Advanced" },
        { name: "Jupyter", icon: Code2, level: "Expert" }
      ]
    },
    {
      title: "Business Analytics & Strategy",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-500/30",
      skills: [
        { name: "Tableau", icon: BarChart3, level: "Expert" },
        { name: "Power BI", icon: PieChart, level: "Advanced" },
        { name: "Excel", icon: FileSpreadsheet, level: "Expert" },
        { name: "Google Analytics", icon: LineChart, level: "Advanced" },
        { name: "Looker", icon: BarChart3, level: "Intermediate" },
        { name: "Business Intelligence", icon: TrendingUp, level: "Expert" }
      ]
    },
    {
      title: "AI & Large Language Models",
      icon: Bot,
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
      skills: [
        { name: "OpenAI GPT", icon: Bot, level: "Advanced" },
        { name: "LangChain", icon: Zap, level: "Advanced" },
        { name: "Hugging Face", icon: Brain, level: "Intermediate" },
        { name: "RAG Systems", icon: Database, level: "Advanced" },
        { name: "Prompt Engineering", icon: Code2, level: "Expert" },
        { name: "AI Automation", icon: Zap, level: "Advanced" }
      ]
    },
    {
      title: "Machine Learning & Deep Learning",
      icon: Brain,
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-500/30",
      skills: [
        { name: "TensorFlow", icon: Brain, level: "Advanced" },
        { name: "PyTorch", icon: Brain, level: "Intermediate" },
        { name: "Keras", icon: Activity, level: "Advanced" },
        { name: "Computer Vision", icon: Brain, level: "Intermediate" },
        { name: "NLP", icon: Bot, level: "Advanced" },
        { name: "Time Series", icon: LineChart, level: "Advanced" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-green-500/20 text-green-400 border-green-500/50";
      case "Advanced": return "bg-blue-500/20 text-blue-400 border-blue-500/50";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/50";
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Arsenal</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise across the data science and AI technology stack
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className={`p-6 bg-white/90 backdrop-blur-lg border-2 ${category.borderColor} hover:border-opacity-80 hover:shadow-xl transition-all github-card-hover cursor-glow`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className={`flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all stagger-${skillIndex % 5 + 1}`}
                  >
                    <div className="flex items-center space-x-2">
                      <skill.icon className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-800 font-medium text-sm">{skill.name}</span>
                    </div>
                    <Badge className={`text-xs px-2 py-1 ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technical Proficiency Overview */}
        <div className="mt-16 slide-up">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 backdrop-blur-lg border-2 border-blue-200 hover:border-blue-300 hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
              <Zap className="w-6 h-6 mr-3 text-blue-600" />
              Impact Metrics
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg transform hover:scale-110 transition-transform">
                  <Database className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-blue-600 mb-1">100+</p>
                <p className="text-gray-600 text-sm">Data Models Built</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg transform hover:scale-110 transition-transform">
                  <BarChart3 className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-3xl font-bold text-green-600 mb-1">25+</p>
                <p className="text-gray-600 text-sm">Dashboards Created</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg transform hover:scale-110 transition-transform">
                  <Bot className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-3xl font-bold text-purple-600 mb-1">8+</p>
                <p className="text-gray-600 text-sm">AI Solutions Deployed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg transform hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <p className="text-3xl font-bold text-orange-600 mb-1">90%</p>
                <p className="text-gray-600 text-sm">Process Optimization</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}