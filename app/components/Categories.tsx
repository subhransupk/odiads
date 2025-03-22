import { Store, Building2, Coffee, Briefcase, ShoppingBag, Utensils, Hotel, Car } from 'lucide-react';
import Link from 'next/link';

const categories = [
  { icon: Store, name: 'Retail Stores', count: '2,500+', color: 'from-blue-500 to-blue-600' },
  { icon: Building2, name: 'Real Estate', count: '1,200+', color: 'from-purple-500 to-purple-600' },
  { icon: Coffee, name: 'Restaurants', count: '3,000+', color: 'from-orange-500 to-orange-600' },
  { icon: Briefcase, name: 'Professional', count: '1,800+', color: 'from-green-500 to-green-600' },
  { icon: ShoppingBag, name: 'Shops', count: '2,100+', color: 'from-pink-500 to-pink-600' },
  { icon: Utensils, name: 'Food & Dining', count: '2,800+', color: 'from-red-500 to-red-600' },
  { icon: Hotel, name: 'Hotels', count: '900+', color: 'from-yellow-500 to-yellow-600' },
  { icon: Car, name: 'Automotive', count: '1,500+', color: 'from-indigo-500 to-indigo-600' },
];

export default function Categories() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">Browse Categories</h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Find the perfect business in these categories
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Link 
                key={index}
                href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group relative flex flex-col items-center p-3 sm:p-4 md:p-6 bg-white rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br ${category.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 text-center">{category.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{category.count} listings</p>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent rounded-lg sm:rounded-xl group-hover:border-gray-200 transition-colors duration-300"></div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
} 