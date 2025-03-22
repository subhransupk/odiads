import { Building2, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function SelectRolePage() {
  const router = useRouter();

  const handleRoleSelect = async (role: 'business' | 'admin') => {
    try {
      // Here you would typically make an API call to update the user's role
      // For now, we'll just redirect to the appropriate dashboard
      if (role === 'business') {
        router.push('/business/dashboard');
      } else {
        router.push('/admin/dashboard');
      }
    } catch (error) {
      console.error('Error selecting role:', error);
    }
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="max-w-2xl w-full space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Select Your Role</h1>
            <p className="mt-2 text-gray-600">Choose how you want to use OdiaAds</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Business Role Card */}
            <button
              onClick={() => handleRoleSelect('business')}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-2 border-transparent hover:border-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#6366f1]/10 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="w-8 h-8 text-[#6366f1]" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Business Owner</h2>
                <p className="text-gray-600 mb-4">
                  List your business, manage reviews, and connect with customers
                </p>
                <div className="text-[#6366f1] font-medium">Select Role →</div>
              </div>
            </button>

            {/* Admin Role Card */}
            <button
              onClick={() => handleRoleSelect('admin')}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-2 border-transparent hover:border-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#6366f1]/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-[#6366f1]" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Administrator</h2>
                <p className="text-gray-600 mb-4">
                  Manage users, approve listings, and oversee platform operations
                </p>
                <div className="text-[#6366f1] font-medium">Select Role →</div>
              </div>
            </button>
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>Need help? Contact our support team</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 