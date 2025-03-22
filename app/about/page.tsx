import { Users, Target, Heart, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To connect local businesses with customers in Odisha, fostering growth and community development.'
  },
  {
    icon: Users,
    title: 'Our Vision',
    description: 'To be the leading business directory platform in Odisha, empowering local businesses to thrive.'
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'Trust, transparency, and community-driven growth are at the heart of everything we do.'
  },
  {
    icon: Award,
    title: 'Our Commitment',
    description: 'We are committed to providing the best platform for businesses and customers in Odisha.'
  }
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">About OdiaAds</h1>
            <p className="mt-2 text-gray-600">Your trusted platform for local business discovery</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Empowering Local Businesses in Odisha
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              OdiaAds is more than just a business directory. We're a platform dedicated to helping local businesses grow and connecting customers with the best services in Odisha.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="w-12 h-12 bg-[#6366f1]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-[#6366f1]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Story Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">
                Founded in 2024, OdiaAds emerged from a simple idea: to create a platform that makes it easy for people to discover and connect with local businesses in Odisha. We recognized that while there were many businesses in the region, there wasn't a comprehensive platform that effectively connected them with potential customers.
              </p>
              <p className="text-gray-600 mb-4">
                Today, we're proud to serve thousands of businesses and customers across Odisha. Our platform has become a trusted resource for finding everything from restaurants and retail stores to professional services and real estate.
              </p>
              <p className="text-gray-600">
                We continue to grow and evolve, always keeping our focus on supporting local businesses and making it easier for customers to find the services they need.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#6366f1] mb-2">15K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#6366f1] mb-2">25K+</div>
              <div className="text-gray-600">Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#6366f1] mb-2">30+</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#6366f1] mb-2">50K+</div>
              <div className="text-gray-600">Reviews</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 