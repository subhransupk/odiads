import { Shield, Lock, Eye, Share2 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const sections = [
  {
    icon: Shield,
    title: 'Information We Collect',
    content: [
      'Personal information (name, email, phone) when you register as a business owner',
      'Business information (name, address, category, description) for business listings',
      'Review and rating data from customers',
      'Usage data and analytics to improve our services',
      'Location data for business listings and search functionality'
    ]
  },
  {
    icon: Lock,
    title: 'How We Use Your Information',
    content: [
      'To provide and maintain our services',
      'To process your business registration and listing submissions',
      'To manage your subscription and payment information',
      'To send you important updates and notifications',
      'To improve our platform and user experience'
    ]
  },
  {
    icon: Eye,
    title: 'Information Sharing',
    content: [
      'We do not sell your personal information to third parties',
      'We may share business listings with search engines and partners',
      'We may disclose information if required by law',
      'We share information with service providers who assist our operations',
      'Business contact information is publicly visible on listings'
    ]
  },
  {
    icon: Share2,
    title: 'Your Rights',
    content: [
      'Access and view your personal information',
      'Update or correct your information',
      'Request deletion of your account',
      'Opt-out of marketing communications',
      'Export your data'
    ]
  }
];

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="mt-2 text-gray-600">Last updated: March 2024</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              At OdiaAds, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
            </p>
            <p className="text-gray-600">
              Please read this privacy policy carefully. By using OdiaAds, you consent to the practices described in this policy.
            </p>
          </div>

          {/* Policy Sections */}
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
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">Email: privacy@odiads.com</p>
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