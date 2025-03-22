import { Search, MapPin, Gift, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-[#6366f1] to-[#4f46e5] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        {/* Free Trial Banner */}
        <div className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-3 sm:px-6 py-1.5 sm:py-2 rounded-full font-medium flex items-center gap-2 animate-fade-in-down shadow-lg z-10">
          <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-base">Get 3 Months Free Trial!</span>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight animate-fade-in">
            Discover the Best Businesses in{' '}
            <span className="text-yellow-300">Odisha</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 mb-3 sm:mb-4 animate-fade-in-up">
            Find and connect with top-rated local businesses, read reviews, and discover amazing deals
          </p>
          <p className="text-xs sm:text-sm md:text-base text-yellow-200 mb-6 sm:mb-8 animate-fade-in-up delay-100 flex items-center justify-center gap-2">
            <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            <span>Start with a 3-month free trial - No credit card required</span>
          </p>
          
          {/* Search Box */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-2 sm:p-3 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center bg-gray-50 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 hover:bg-gray-100 transition-colors">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search for businesses..."
                  className="w-full ml-2 sm:ml-3 bg-transparent outline-none text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                />
              </div>
              <div className="flex-1 flex items-center bg-gray-50 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 hover:bg-gray-100 transition-colors">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full ml-2 sm:ml-3 bg-transparent outline-none text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                />
              </div>
              <button className="w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-[#6366f1] text-white rounded-lg sm:rounded-xl hover:bg-[#4f46e5] transition-colors font-semibold flex items-center justify-center gap-2 text-sm sm:text-base">
                Search
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="mt-4 sm:mt-6 md:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
            <button className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-white/10 hover:bg-white/20 rounded-full text-xs sm:text-sm transition-colors">
              Restaurants
            </button>
            <button className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-white/10 hover:bg-white/20 rounded-full text-xs sm:text-sm transition-colors">
              Shops
            </button>
            <button className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-white/10 hover:bg-white/20 rounded-full text-xs sm:text-sm transition-colors">
              Hotels
            </button>
            <button className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-white/10 hover:bg-white/20 rounded-full text-xs sm:text-sm transition-colors">
              Services
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-white/10 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 backdrop-blur-sm">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">15K+</div>
            <div className="text-gray-200 text-xs sm:text-sm">Active Users</div>
          </div>
          <div className="bg-white/10 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 backdrop-blur-sm">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">50K+</div>
            <div className="text-gray-200 text-xs sm:text-sm">Reviews</div>
          </div>
          <div className="bg-white/10 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 backdrop-blur-sm">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">25K+</div>
            <div className="text-gray-200 text-xs sm:text-sm">Businesses</div>
          </div>
          <div className="bg-white/10 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 backdrop-blur-sm">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">30+</div>
            <div className="text-gray-200 text-xs sm:text-sm">Categories</div>
          </div>
        </div>
      </div>
    </div>
  );
} 