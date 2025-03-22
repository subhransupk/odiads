import { Search, MapPin, Star, Filter, SlidersHorizontal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// Mock data for listings
const listings = [
  {
    id: 1,
    title: 'Spice Garden',
    image: '/images/restaurant.svg',
    category: 'Restaurants',
    rating: 4.8,
    reviews: 120,
    location: 'Bhubaneswar, Odisha',
    description: 'Authentic Odia cuisine with modern ambiance',
    price: '₹₹',
    isOpen: true,
    distance: '2.5 km'
  },
  {
    id: 2,
    title: 'Urban Cafe',
    image: '/images/cafe.svg',
    category: 'Cafe',
    rating: 4.6,
    reviews: 85,
    location: 'Cuttack, Odisha',
    description: 'Cozy cafe with specialty coffee and snacks',
    price: '₹',
    isOpen: true,
    distance: '1.8 km'
  },
  {
    id: 3,
    title: 'Luxury Apartments',
    image: '/images/realestate.svg',
    category: 'Real Estate',
    rating: 4.9,
    reviews: 45,
    location: 'Puri, Odisha',
    description: 'Premium apartments with sea view',
    price: '₹₹₹',
    isOpen: true,
    distance: '5.2 km'
  },
  // Add more mock listings as needed
];

const categories = [
  'All',
  'Restaurants',
  'Cafe',
  'Real Estate',
  'Shopping',
  'Hotels',
  'Services',
  'Automotive'
];

const sortOptions = [
  'Most Popular',
  'Highest Rated',
  'Newest',
  'Distance',
  'Price: Low to High',
  'Price: High to Low'
];

export default function ListingsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">Business Listings</h1>
            <p className="mt-2 text-gray-600">Discover local businesses in Odisha</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Filters</h2>
                
                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search businesses..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Categories
                  </label>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-[#6366f1] focus:ring-[#6366f1]"
                        />
                        <span className="ml-2 text-sm text-gray-600">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-[#6366f1] focus:ring-[#6366f1]"
                      />
                      <span className="ml-2 text-sm text-gray-600">₹ (Budget)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-[#6366f1] focus:ring-[#6366f1]"
                      />
                      <span className="ml-2 text-sm text-gray-600">₹₹ (Moderate)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-[#6366f1] focus:ring-[#6366f1]"
                      />
                      <span className="ml-2 text-sm text-gray-600">₹₹₹ (Luxury)</span>
                    </label>
                  </div>
                </div>

                {/* Rating */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Rating
                  </label>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        className="text-gray-300 hover:text-yellow-400 focus:outline-none"
                      >
                        <Star className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Apply Filters Button */}
                <button className="w-full bg-[#6366f1] text-white py-2 px-4 rounded-lg hover:bg-[#4f46e5] transition-colors">
                  Apply Filters
                </button>
              </div>
            </div>

            {/* Listings Grid */}
            <div className="flex-1">
              {/* Sort and View Options */}
              <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#6366f1] focus:border-transparent">
                    {sortOptions.map((option) => (
                      <option key={option} value={option.toLowerCase()}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-gray-600 hover:text-gray-900">
                    <SlidersHorizontal className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-900">
                    <Filter className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Listings Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {listings.map((listing) => (
                  <Link
                    key={listing.id}
                    href={`/business/${listing.id}`}
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-48">
                      <Image
                        src={listing.image}
                        alt={listing.title}
                        fill
                        className="object-cover"
                      />
                      {listing.isOpen && (
                        <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                          Open
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{listing.title}</h3>
                          <p className="text-sm text-gray-600">{listing.category}</p>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{listing.price}</span>
                      </div>
                      <div className="mt-2 flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">
                          {listing.rating} ({listing.reviews} reviews)
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                        {listing.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{listing.location}</span>
                        </div>
                        <span>{listing.distance}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center gap-2">
                  <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-2 bg-[#6366f1] text-white rounded-lg text-sm">
                    1
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                    Next
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 