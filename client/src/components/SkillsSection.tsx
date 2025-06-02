import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  Brain, 
  Database, 
  TrendingUp,
  Code,
  FileSpreadsheet,
  Cpu,
  Settings
} from "lucide-react";

export default function SkillsSection() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Initialize Chart.js radar chart
    const initChart = async () => {
      const Chart = (await import('chart.js/auto')).default;
      
      if (chartRef.current) {
        const ctx = chartRef.current.getContext('2d');
        if (ctx) {
          new Chart(ctx, {
            type: 'radar',
            data: {
              labels: ['Python', 'Machine Learning', 'Data Visualization', 'Business Analytics', 'Deep Learning', 'SQL', 'Cloud Computing', 'Statistical Analysis'],
              datasets: [{
                label: 'Proficiency Level',
                data: [95, 90, 95, 92, 85, 88, 80, 93],
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(59, 130, 246, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(59, 130, 246, 1)'
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                r: {
                  beginAtZero: true,
                  max: 100,
                  ticks: {
                    stepSize: 20
                  }
                }
              },
              plugins: {
                legend: {
                  display: false
                }
              }
            }
          });
        }
      }
    };

    initChart();
  }, []);

  const skillCategories = [
    {
      title: "Data Analytics & Visualization",
      icon: BarChart3,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      proficiency: 95,
      skills: ["Power BI", "Tableau", "Excel"],
      skillIcons: [Database, BarChart3, FileSpreadsheet]
    },
    {
      title: "Data Science & Machine Learning",
      icon: Brain,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      proficiency: 90,
      skills: ["Python", "Pandas", "Scikit-learn"],
      skillIcons: [Code, Database, TrendingUp]
    },
    {
      title: "Generative AI & Deep Learning",
      icon: Cpu,
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
      proficiency: 85,
      skills: ["OpenAI", "Hugging Face", "TensorFlow"],
      skillIcons: [Cpu, Brain, Settings]
    },
    {
      title: "Business Analytics & Strategy",
      icon: TrendingUp,
      bgColor: "bg-emerald-100",
      iconColor: "text-emerald-600",
      proficiency: 92,
      skills: ["Notion", "Power BI", "Google Data Studio"],
      skillIcons: [FileSpreadsheet, BarChart3, Database]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Do</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interactive dashboard showcasing technical expertise and business impact across multiple domains
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="p-6 shadow-lg border-gray-100 hover:shadow-xl transition-all transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-gray-900">{category.title}</h3>
                  <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                    <IconComponent className={`w-6 h-6 ${category.iconColor}`} />
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = category.skillIcons[skillIndex];
                    return (
                      <div key={skillIndex} className="flex items-center space-x-3">
                        <SkillIcon className="w-5 h-5 text-gray-500" />
                        <span className="text-sm font-medium">{skill}</span>
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Progress value={category.proficiency} className="h-2 mb-2" />
                  <p className="text-xs text-gray-500">Proficiency: {category.proficiency}%</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Interactive Skills Chart */}
        <Card className="p-8 shadow-lg border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Technical Proficiency Overview
          </h3>
          <div className="max-w-4xl mx-auto" style={{ height: '400px' }}>
            <canvas ref={chartRef}></canvas>
          </div>
        </Card>
      </div>
    </section>
  );
}
