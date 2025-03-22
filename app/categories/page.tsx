import { Store, Building2, Coffee, Briefcase, ShoppingBag, Utensils, Hotel, Car } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const categories = [
  {
    id: 'retail-stores',
    name: 'Retail Stores',
    icon: Store,
    count: '2,500+',
    description: 'Find local shops, boutiques, and retail outlets',
    image: '/images/retail.svg'
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    icon: Building2,
    count: '1,200+',
    description: 'Properties, apartments, and real estate agents',
    image: '/images/realestate.svg'
  },
  {
    id: 'restaurants',
    name: 'Restaurants',
    icon: Coffee,
    count: '3,000+',
    description: 'Local eateries, cafes, and dining spots',
    image: '/images/restaurant.svg'
  },
  {
    id: 'professional',
    name: 'Professional',
    icon: Briefcase,
    count: '1,800+',
    description: 'Business services, consultants, and professionals',
    image: '/images/professional.svg'
  },
  {
    id: 'shops',
    name: 'Shops',
    icon: ShoppingBag,
    count: '2,100+',
    description: 'Local markets, convenience stores, and shops',
    image: '/images/shops.svg'
  },
  {
    id: 'food-dining',
    name: 'Food & Dining',
    icon: Utensils,
    count: '2,800+',
    description: 'Food courts, street food, and dining experiences',
    image: '/images/food.svg'
  },
  {
    id: 'hotels',
    name: 'Hotels',
    icon: Hotel,
    count: '900+',
    description: 'Hotels, resorts, and accommodation options',
    image: '/images/hotel.svg'
  },
  {
    id: 'automotive',
    name: 'Automotive',
    icon: Car,
    count: '1,500+',
    description: 'Car dealers, service centers, and auto shops',
    image: '/images/automotive.svg'
  }
];

export default function CategoriesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">Browse Categories</h1>
            <p className="mt-2 text-gray-600">Find businesses by category in Odisha</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <category.icon className="w-16 h-16 text-gray-400 group-hover:text-[#6366f1] transition-colors" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-[#6366f1] transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{category.count}</span>
                  </div>
                  
                  {/* View All Button */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium text-[#6366f1] group-hover:text-[#4f46e5] transition-colors">
                      View all {category.count} listings →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Category Stats */}
          <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Category Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#6366f1]">15K+</div>
                <div className="text-sm text-gray-600">Total Businesses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#6366f1]">8</div>
                <div className="text-sm text-gray-600">Main Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#6366f1]">30+</div>
                <div className="text-sm text-gray-600">Cities Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#6366f1]">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 