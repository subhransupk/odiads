'use client';

import { Building2, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function SelectRole() {
  const router = useRouter();

  const handleRoleSelect = (role: 'business' | 'admin') => {
    router.push(`/${role}/dashboard`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Role
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Select the role that best describes you to get started with OdiaAds
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-4xl mx-auto">
          {/* Business Owner Card */}
          <button
            onClick={() => handleRoleSelect('business')}
            className="group relative bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Business Owner</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                List your business, manage reviews, and connect with customers
              </p>
              <div className="text-blue-500 font-medium text-sm sm:text-base">
                Get Started →
              </div>
            </div>
          </button>

          {/* Admin Card */}
          <button
            onClick={() => handleRoleSelect('admin')}
            className="group relative bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Administrator</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Manage the platform, review content, and handle user reports
              </p>
              <div className="text-purple-500 font-medium text-sm sm:text-base">
                Access Dashboard →
              </div>
            </div>
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
} 