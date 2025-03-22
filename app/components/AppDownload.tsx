import Image from 'next/image';
import { CheckCircle2, MapPin, Star, Search, Bell } from 'lucide-react';

export default function AppDownload() {
  return (
    <section className="bg-gradient-to-br from-[#6366f1] to-[#4f46e5] py-8 sm:py-12 md:py-20 px-4 relative overflow-hidden">
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

      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="text-white lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">Download Our Mobile App</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-4 sm:mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
              Get the best business directory experience on your mobile device. Find local businesses, read reviews, and discover amazing deals anywhere in Odisha.
            </p>
            
            {/* Features List */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base">Find businesses near you with GPS</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base">Read and write reviews on the go</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base">Get notifications for deals and updates</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base">Save favorite businesses for quick access</span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a 
                href="#" 
                className="group relative inline-flex items-center justify-center hover:opacity-90 transition-all duration-200"
              >
                <div className="absolute inset-0 bg-white rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-200"></div>
                <Image
                  src="/app-store.svg"
                  alt="Download on App Store"
                  width={140}
                  height={42}
                  className="relative h-[42px] w-auto"
                />
              </a>
              <a 
                href="#" 
                className="group relative inline-flex items-center justify-center hover:opacity-90 transition-all duration-200"
              >
                <div className="absolute inset-0 bg-white rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-200"></div>
                <Image
                  src="/play-store.svg"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                  className="relative h-[42px] w-auto"
                />
              </a>
            </div>
          </div>

          {/* Right Content - App Preview */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-[180px] sm:w-[220px] md:w-[260px] lg:w-[280px] h-[380px] sm:h-[460px] md:h-[540px] lg:h-[580px] mx-auto">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-white rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl overflow-hidden">
                {/* App Preview Content */}
                <div className="absolute inset-0 bg-gray-50">
                  {/* Header */}
                  <div className="bg-[#6366f1] p-2 sm:p-3 md:p-4 text-white">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold">OdiaAds</h3>
                  </div>
                  
                  {/* Search Bar */}
                  <div className="p-2 sm:p-3 md:p-4">
                    <div className="flex items-center bg-white rounded-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 shadow-sm">
                      <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search businesses..."
                        className="ml-2 flex-1 bg-transparent outline-none text-xs sm:text-sm"
                        aria-label="Search businesses"
                      />
                    </div>
                  </div>

                  {/* Featured Business */}
                  <div className="p-2 sm:p-3 md:p-4">
                    <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                      <div className="relative h-20 sm:h-28 md:h-36">
                        <Image
                          src="/images/restaurant.svg"
                          alt="Featured Restaurant"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                          quality={90}
                        />
                      </div>
                      <div className="p-2 sm:p-3 md:p-4">
                        <h4 className="font-semibold text-xs sm:text-sm md:text-base">Spice Garden</h4>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                          <span className="text-xs sm:text-sm text-gray-600">4.8 (120 reviews)</span>
                        </div>
                        <div className="flex items-center gap-1 mt-1 text-xs sm:text-sm text-gray-500">
                          <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          <span>Bhubaneswar, Odisha</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200">
                    <div className="flex justify-around p-1.5 sm:p-2 md:p-3">
                      <div className="text-[#6366f1]">
                        <Search className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="text-gray-400">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="text-gray-400">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="text-gray-400">
                        <Bell className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 