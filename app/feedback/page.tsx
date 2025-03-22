import { MessageSquare, Star, ThumbsUp, ThumbsDown, Send, CheckCircle2 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const feedbackCategories = [
  {
    title: 'Platform Experience',
    description: 'How would you rate your overall experience with OdiaAds?',
    icon: Star
  },
  {
    title: 'Business Discovery',
    description: 'How easy is it to find businesses you\'re looking for?',
    icon: ThumbsUp
  },
  {
    title: 'Review System',
    description: 'How helpful are the reviews and ratings in making decisions?',
    icon: MessageSquare
  }
];

export default function FeedbackPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">Feedback</h1>
            <p className="mt-2 text-gray-600">Help us improve OdiaAds for everyone</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Voice Matters</h2>
              <p className="text-gray-600 mb-6">
                We value your feedback and use it to make OdiaAds better for everyone. Share your thoughts about our platform, your experiences, and suggestions for improvement.
              </p>
              <div className="flex items-center justify-center gap-2 text-[#6366f1]">
                <CheckCircle2 className="w-5 h-5" />
                <span>Your feedback helps us improve</span>
              </div>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
            <form className="space-y-8">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* User Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  I am a
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="userType"
                      value="customer"
                      className="text-[#6366f1] focus:ring-[#6366f1]"
                    />
                    <span className="ml-2 text-gray-700">Customer</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="userType"
                      value="business"
                      className="text-[#6366f1] focus:ring-[#6366f1]"
                    />
                    <span className="ml-2 text-gray-700">Business Owner</span>
                  </label>
                </div>
              </div>

              {/* Rating Categories */}
              <div className="space-y-6">
                {feedbackCategories.map((category, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[#6366f1]/10 rounded-lg flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-[#6366f1]" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{category.title}</h3>
                        <p className="text-sm text-gray-600">{category.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className="text-gray-300 hover:text-yellow-400 focus:outline-none"
                        >
                          <Star className="w-6 h-6" />
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Detailed Feedback */}
              <div>
                <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">
                  Detailed Feedback
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
                  placeholder="Share your thoughts, suggestions, or report any issues..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#6366f1] text-white px-6 py-3 rounded-lg hover:bg-[#4f46e5] transition-colors font-semibold flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Submit Feedback
              </button>
            </form>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You for Your Feedback</h2>
              <p className="text-gray-600 mb-6">
                We review all feedback and use it to improve our platform. If you have any urgent concerns, please contact our support team.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <a
                  href="mailto:feedback@odiads.com"
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