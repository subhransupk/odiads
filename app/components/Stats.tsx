import { Users, Star, Building2, FolderKanban } from 'lucide-react';

const stats = [
  { number: '15,000+', label: 'Active Users', icon: Users, color: 'from-blue-500 to-blue-600' },
  { number: '50,000+', label: 'Total Reviews', icon: Star, color: 'from-yellow-500 to-yellow-600' },
  { number: '25,000+', label: 'Businesses', icon: Building2, color: 'from-green-500 to-green-600' },
  { number: '30+', label: 'Categories', icon: FolderKanban, color: 'from-purple-500 to-purple-600' }
];

export default function Stats() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="relative group bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-lg sm:rounded-xl transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br ${stat.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-600">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 