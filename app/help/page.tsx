import { HelpCircle, BookOpen, MessageSquare, Search, Star, CreditCard, Shield, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const sections = [
  {
    icon: BookOpen,
    title: 'Getting Started',
    content: [
      {
        question: 'How do I register my business?',
        answer: 'Click the "Register" button, fill out your business details, and verify your email. You\'ll get a 3-month free trial to test our platform.'
      },
      {
        question: 'What information do I need to provide?',
        answer: 'You\'ll need your business name, category, address, contact details, and a brief description. We also recommend adding photos and business hours.'
      },
      {
        question: 'How long does approval take?',
        answer: 'Our admin team typically reviews and approves new listings within 24-48 hours.'
      }
    ]
  },
  {
    icon: Star,
    title: 'Managing Your Listing',
    content: [
      {
        question: 'How do I update my business information?',
        answer: 'Log in to your business dashboard, go to "My Listings", and click "Edit" on the listing you want to update.'
      },
      {
        question: 'Can I add photos to my listing?',
        answer: 'Yes, you can add up to 5 photos showcasing your business. Photos should be high quality and relevant to your business.'
      },
      {
        question: 'How do I respond to reviews?',
        answer: 'Go to the "Reviews" section in your dashboard to view and respond to customer reviews. You can also report inappropriate reviews.'
      }
    ]
  },
  {
    icon: CreditCard,
    title: 'Subscriptions & Payments',
    content: [
      {
        question: 'What subscription plans are available?',
        answer: 'We offer 1-month, 6-month, and 1-year plans. All plans include the same features, with longer plans offering better value.'
      },
      {
        question: 'How does the payment process work?',
        answer: 'We accept offline payments. After selecting your plan, you\'ll receive payment instructions. Once payment is confirmed, your subscription will be activated.'
      },
      {
        question: 'What happens after my trial ends?',
        answer: 'You\'ll receive email reminders before your trial expires. Choose a subscription plan to keep your listing active.'
      }
    ]
  },
  {
    icon: Shield,
    title: 'Account & Security',
    content: [
      {
        question: 'How do I reset my password?',
        answer: 'Click "Forgot Password" on the login page and follow the instructions sent to your email.'
      },
      {
        question: 'How do I change my email address?',
        answer: 'Go to "Profile Settings" in your dashboard to update your email address. You\'ll need to verify the new email.'
      },
      {
        question: 'How do I delete my account?',
        answer: 'Contact our support team to request account deletion. Note that this will permanently remove your business listing.'
      }
    ]
  }
];

export default function HelpPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">Help Center</h1>
            <p className="mt-2 text-gray-600">Find answers to common questions and get support</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="flex-1 flex items-center bg-gray-50 rounded-lg px-4 py-2">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full ml-3 bg-transparent outline-none text-gray-900 placeholder-gray-500"
                />
              </div>
              <button className="px-6 py-2 bg-[#6366f1] text-white rounded-lg hover:bg-[#4f46e5] transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* FAQ Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#6366f1]/10 rounded-lg flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-[#6366f1]" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                </div>
                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-gray-100 pb-6 last:border-0">
                      <h3 className="font-medium text-gray-900 mb-2">{item.question}</h3>
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#6366f1]/10 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-[#6366f1]" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Still Need Help?</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you. Contact us through any of these channels:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#6366f1]" />
                <span className="text-gray-600">support@odiads.com</span>
              </div>
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-[#6366f1]" />
                <span className="text-gray-600">+91 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#6366f1]" />
                <span className="text-gray-600">24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 