import { FileText, CheckCircle, AlertCircle, Clock, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const sections = [
  {
    icon: FileText,
    title: 'Agreement to Terms',
    content: [
      'By accessing or using OdiaAds, you agree to be bound by these Terms of Service.',
      'If you disagree with any part of these terms, you may not access the service.',
      'These terms apply to all users, including business owners and customers.',
      'We reserve the right to modify these terms at any time.'
    ]
  },
  {
    icon: CheckCircle,
    title: 'Business Listings',
    content: [
      'Business owners must provide accurate and complete information.',
      'All listings require admin approval before publication.',
      'Businesses must maintain active subscriptions to keep listings visible.',
      'Listings must comply with local laws and regulations.',
      'Business owners are responsible for updating their information.'
    ]
  },
  {
    icon: AlertCircle,
    title: 'Reviews and Ratings',
    content: [
      'Reviews must be based on actual experiences.',
      'No fake or misleading reviews are allowed.',
      'Businesses can report inappropriate reviews to admins.',
      'Reviews must not contain hate speech or discrimination.',
      'The review system uses a 1-5 star rating scale.'
    ]
  },
  {
    icon: Clock,
    title: 'Subscription Terms',
    content: [
      'New businesses get a 3-month free trial.',
      'Subscriptions are available in 1-month, 6-month, and 1-year plans.',
      'Payments are processed offline with admin approval.',
      'Subscriptions auto-renew unless cancelled.',
      'Refunds are subject to our refund policy.'
    ]
  },
  {
    icon: Shield,
    title: 'User Responsibilities',
    content: [
      'Users must maintain account security.',
      'Email verification is required for registration.',
      'Users must not share account credentials.',
      'Users are responsible for all account activities.',
      'Users must comply with all applicable laws.'
    ]
  }
];

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
            <p className="mt-2 text-gray-600">Last updated: March 2024</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to OdiaAds</h2>
            <p className="text-gray-600 mb-4">
              OdiaAds is a platform that connects local businesses with customers in Odisha. These Terms of Service govern your use of our platform and services.
            </p>
            <p className="text-gray-600">
              Please read these terms carefully before using OdiaAds. By using our platform, you agree to these terms and our Privacy Policy.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#6366f1]/10 rounded-lg flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-[#6366f1]" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
                      <span className="text-[#6366f1]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">Email: legal@odiads.com</p>
              <p className="text-gray-600">Phone: +91 123 456 7890</p>
              <p className="text-gray-600">
                Address: 123 Business Street, Bhubaneswar, Odisha 751001
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 