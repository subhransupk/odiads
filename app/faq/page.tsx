import { HelpCircle, Search, ChevronDown } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const faqCategories = [
  {
    title: 'For Business Owners',
    questions: [
      {
        question: 'How do I list my business on OdiaAds?',
        answer: 'Register as a business owner, fill out your business details, and submit for approval. You\'ll get a 3-month free trial to test our platform.'
      },
      {
        question: 'What information do I need to provide?',
        answer: 'You\'ll need your business name, category, address, contact details, business hours, and a brief description. Photos are optional but recommended.'
      },
      {
        question: 'How long does the approval process take?',
        answer: 'Our admin team typically reviews and approves new listings within 24-48 hours.'
      },
      {
        question: 'How do I manage my subscription?',
        answer: 'Access your subscription details in the business dashboard. You can view your plan, renewal date, and payment history.'
      },
      {
        question: 'Can I update my business information?',
        answer: 'Yes, you can update your business details anytime through your dashboard. Some changes may require admin approval.'
      }
    ]
  },
  {
    title: 'For Customers',
    questions: [
      {
        question: 'How do I find businesses in my area?',
        answer: 'Use the search bar on the homepage or browse by category. You can filter results by location, rating, and other criteria.'
      },
      {
        question: 'How do I leave a review?',
        answer: 'Visit the business profile page and click "Write a Review". You can rate from 1-5 stars and add your comments.'
      },
      {
        question: 'Do I need to create an account to leave a review?',
        answer: 'No, anyone can leave a review without creating an account. However, creating an account helps track your reviews.'
      },
      {
        question: 'How do I report a business?',
        answer: 'Visit the business profile page and click "Report Business". Provide details about your concern, and our team will review it.'
      },
      {
        question: 'How do I contact a business?',
        answer: 'Business contact information is displayed on their profile page. You can call, email, or visit their location.'
      }
    ]
  },
  {
    title: 'About Reviews & Ratings',
    questions: [
      {
        question: 'How does the rating system work?',
        answer: 'Ratings are on a 1-5 star scale, with 5 being the highest. The overall rating is an average of all reviews.'
      },
      {
        question: 'Can businesses delete negative reviews?',
        answer: 'No, businesses cannot delete reviews. They can report inappropriate reviews to our admin team for review.'
      },
      {
        question: 'What makes a good review?',
        answer: 'Good reviews are honest, specific, and helpful to other customers. Include details about your experience.'
      },
      {
        question: 'How do I edit my review?',
        answer: 'Visit the business profile page, find your review, and click "Edit". You can update your rating and comments.'
      },
      {
        question: 'Are reviews moderated?',
        answer: 'Yes, all reviews are moderated to ensure they meet our community guidelines and are appropriate.'
      }
    ]
  },
  {
    title: 'Subscription & Payments',
    questions: [
      {
        question: 'What subscription plans are available?',
        answer: 'We offer 1-month, 6-month, and 1-year plans. Longer plans offer better value and fewer renewal hassles.'
      },
      {
        question: 'How does the payment process work?',
        answer: 'We accept offline payments. After selecting your plan, you\'ll receive payment instructions. Once payment is confirmed, your subscription will be activated.'
      },
      {
        question: 'What happens after my trial ends?',
        answer: 'You\'ll receive email reminders before your trial expires. Choose a subscription plan to keep your listing active.'
      },
      {
        question: 'Can I cancel my subscription?',
        answer: 'Yes, you can cancel your subscription anytime. Your listing will remain active until the end of your paid period.'
      },
      {
        question: 'Do you offer refunds?',
        answer: 'Refunds are considered on a case-by-case basis. Contact our support team for assistance.'
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
            <p className="mt-2 text-gray-600">Find answers to common questions about OdiaAds</p>
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
                  placeholder="Search FAQs..."
                  className="w-full ml-3 bg-transparent outline-none text-gray-900 placeholder-gray-500"
                />
              </div>
              <button className="px-6 py-2 bg-[#6366f1] text-white rounded-lg hover:bg-[#4f46e5] transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-900">{category.title}</h2>
                </div>
                <div className="divide-y divide-gray-100">
                  {category.questions.map((item, itemIndex) => (
                    <div key={itemIndex} className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-[#6366f1]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <HelpCircle className="w-5 h-5 text-[#6366f1]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-900 mb-2">{item.question}</h3>
                          <p className="text-gray-600">{item.answer}</p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <ChevronDown className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
              <p className="text-gray-600 mb-6">
                Our support team is here to help you. Contact us through any of these channels:
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <a
                  href="mailto:support@odiads.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#6366f1] text-white rounded-lg hover:bg-[#4f46e5] transition-colors"
                >
                  Email Support
                </a>
                <a
                  href="tel:+911234567890"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Call Support
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