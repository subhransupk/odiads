import { Users, Target, Star, MapPin, Search, Bell, Gift, CheckCircle2 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const benefits = [
  {
    icon: Users,
    title: 'Reach Local Customers',
    description: 'Connect with thousands of potential customers in Odisha actively looking for businesses like yours.'
  },
  {
    icon: Target,
    title: 'Targeted Visibility',
    description: 'Get your business in front of the right audience with our category-based listing system.'
  },
  {
    icon: Star,
    title: 'Build Trust',
    description: 'Showcase your business with verified reviews and ratings to build customer trust.'
  },
  {
    icon: MapPin,
    title: 'Location-Based Discovery',
    description: 'Help customers find your business easily with Google Maps integration.'
  },
  {
    icon: Search,
    title: 'Search Optimization',
    description: 'Improve your visibility in local search results and get more organic traffic.'
  },
  {
    icon: Bell,
    title: 'Customer Engagement',
    description: 'Engage with customers through reviews and maintain an active online presence.'
  }
];

const subscriptionPlans = [
  {
    name: '1 Month Plan',
    price: '₹999',
    period: 'per month',
    features: [
      'Business listing with full details',
      'Google Maps integration',
      'Review management',
      'Basic analytics',
      'Email support'
    ],
    recommended: false
  },
  {
    name: '6 Months Plan',
    price: '₹4,999',
    period: 'for 6 months',
    features: [
      'Everything in 1 Month Plan',
      'Priority listing in search results',
      'Advanced analytics',
      'Priority support',
      'Featured category placement'
    ],
    recommended: true
  },
  {
    name: '1 Year Plan',
    price: '₹8,999',
    period: 'per year',
    features: [
      'Everything in 6 Months Plan',
      'Top placement in search results',
      'Premium support',
      'Featured business badge',
      'Social media promotion'
    ],
    recommended: false
  }
];

export default function AdvertisePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">Advertise with OdiaAds</h1>
            <p className="mt-2 text-gray-600">Grow your business with Odisha's leading business directory</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-[#6366f1] to-[#4f46e5] rounded-lg p-8 text-white mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Get Started with a Free Trial</h2>
                <p className="text-lg text-gray-100 mb-6">
                  Join thousands of successful businesses on OdiaAds. Start with a 3-month free trial and experience the benefits of our platform.
                </p>
                <div className="flex items-center gap-2 text-yellow-200 mb-6">
                  <Gift className="w-5 h-5" />
                  <span>No credit card required for the trial</span>
                </div>
                <a
                  href="/auth/register"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#6366f1] rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Start Free Trial
                </a>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Why Choose OdiaAds?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-yellow-300" />
                      <span>15,000+ active users</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-yellow-300" />
                      <span>25,000+ business listings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-yellow-300" />
                      <span>50,000+ customer reviews</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-yellow-300" />
                      <span>30+ business categories</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Advertising with Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="w-12 h-12 bg-[#6366f1]/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-[#6366f1]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Subscription Plans */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {subscriptionPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-sm p-6 relative ${
                    plan.recommended ? 'border-2 border-[#6366f1]' : ''
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6366f1] text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-[#6366f1]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/auth/register"
                    className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                      plan.recommended
                        ? 'bg-[#6366f1] text-white hover:bg-[#4f46e5]'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing?</h2>
              <p className="text-gray-600 mb-6">
                Our team is here to help you choose the right plan for your business. Contact us for a personalized consultation.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <a
                  href="mailto:sales@odiads.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#6366f1] text-white rounded-lg hover:bg-[#4f46e5] transition-colors"
                >
                  Email Sales Team
                </a>
                <a
                  href="tel:+911234567890"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Call Sales Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 