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
              labels: ['Data Analytics', 'Business Intelligence', 'Machine Learning', 'AI Development', 'Statistical Analysis', 'Data Visualization'],
              datasets: [{
                label: 'Focus Areas',
                data: [95, 92, 88, 85, 90, 95],
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
      bgColor: "bg-blue-100 dark:bg-blue-900",
      iconColor: "text-blue-600 dark:text-blue-400",
      skills: [
        { name: "Power BI", logo: "https://logos-world.net/wp-content/uploads/2022/02/Microsoft-Power-BI-Symbol.png" },
        { name: "Tableau", logo: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Logo.png" },
        { name: "Excel", logo: "https://logos-world.net/wp-content/uploads/2020/12/Excel-Logo.png" }
      ]
    },
    {
      title: "Data Science & Machine Learning",
      icon: Brain,
      bgColor: "bg-purple-100 dark:bg-purple-900",
      iconColor: "text-purple-600 dark:text-purple-400",
      skills: [
        { name: "Python", logo: "https://logos-world.net/wp-content/uploads/2021/10/Python-Logo.png" },
        { name: "Pandas", logo: "https://pandas.pydata.org/static/img/pandas_white.svg" },
        { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Cpu,
      bgColor: "bg-indigo-100 dark:bg-indigo-900",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      skills: [
        { name: "TensorFlow", logo: "https://logos-world.net/wp-content/uploads/2021/10/TensorFlow-Logo.png" },
        { name: "OpenAI", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
        { name: "Hugging Face", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" }
      ]
    },
    {
      title: "Business Intelligence",
      icon: TrendingUp,
      bgColor: "bg-emerald-100 dark:bg-emerald-900",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      skills: [
        { name: "SQL", logo: "https://www.svgrepo.com/show/331760/sql-database-generic.svg" },
        { name: "MongoDB", logo: "https://logos-world.net/wp-content/uploads/2020/12/MongoDB-Logo.png" },
        { name: "Google Data Studio", logo: "https://logos-world.net/wp-content/uploads/2021/02/Google-Data-Studio-Logo.png" }
      ]
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
              <Card key={index} className="p-6 shadow-lg border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-xl transition-all transform hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">{category.title}</h3>
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                    <IconComponent className={`w-6 h-6 ${category.iconColor}`} />
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <img 
                        src={skill.logo} 
                        alt={skill.name}
                        className="w-6 h-6 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    </div>
                  ))}
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
