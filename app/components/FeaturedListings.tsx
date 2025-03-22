import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin } from 'lucide-react';

const featuredListings = [
  {
    id: 1,
    title: 'Spice Garden',
    image: '/images/restaurant.webp',
    category: 'Restaurants',
    rating: 4.8,
    location: 'Bhubaneswar, Odisha',
    reviews: 128
  },
  {
    id: 2,
    title: 'Urban Cafe',
    image: '/images/cafe.webp',
    category: 'Cafe',
    rating: 4.6,
    location: 'Cuttack, Odisha',
    reviews: 96
  },
  {
    id: 3,
    title: 'Luxury Apartments',
    image: '/images/realestate.webp',
    category: 'Real Estate',
    rating: 4.9,
    location: 'Puri, Odisha',
    reviews: 156
  },
  {
    id: 4,
    title: 'City Center Mall',
    image: '/images/mall.webp',
    category: 'Shops',
    rating: 4.7,
    location: 'Bhubaneswar, Odisha',
    reviews: 89
  }
];

export default function FeaturedListings() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">Featured Listings</h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Discover top-rated businesses in your area
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {featuredListings.map((listing) => (
            <Link 
              key={listing.id}
              href={`/business/${listing.id}`}
              className="group bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={listing.image}
                  alt={listing.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={listing.id === 1}
                  quality={90}
                />
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-900">
                  {listing.category}
                </div>
              </div>
              
              <div className="p-3 sm:p-4 md:p-5">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#6366f1] transition-colors">
                  {listing.title}
                </h3>
                
                <div className="flex items-center gap-1 text-gray-500 mb-2">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">{listing.location}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs sm:text-sm font-medium text-gray-900">{listing.rating}</span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500">•</span>
                  <span className="text-xs sm:text-sm text-gray-500">{listing.reviews} reviews</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 