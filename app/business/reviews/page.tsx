import { 
  Star, 
  Search, 
  Filter, 
  Flag, 
  ThumbsUp, 
  ThumbsDown,
  MoreVertical,
  MessageSquare
} from 'lucide-react';

// Mock data for reviews
const reviews = [
  {
    id: 1,
    author: "John Doe",
    rating: 5,
    content: "Excellent service! The team was very professional and helpful. I would highly recommend this business.",
    date: "2024-03-20",
    likes: 12,
    dislikes: 0,
    reported: false,
  },
  {
    id: 2,
    author: "Jane Smith",
    rating: 4,
    content: "Good overall experience. The service was satisfactory, but there's room for improvement in response time.",
    date: "2024-03-19",
    likes: 8,
    dislikes: 2,
    reported: false,
  },
  {
    id: 3,
    author: "Mike Johnson",
    rating: 2,
    content: "Disappointing experience. The service was slow and the staff was unprofessional.",
    date: "2024-03-18",
    likes: 0,
    dislikes: 5,
    reported: true,
  },
];

const ratingColors = {
  5: "text-yellow-400",
  4: "text-yellow-400",
  3: "text-yellow-400",
  2: "text-yellow-400",
  1: "text-yellow-400",
};

export default function BusinessReviews() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Reviews</h1>
          <p className="text-gray-600 mt-1">Manage and respond to customer reviews</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-blue-50 rounded-full">
              <Star className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Average Rating</p>
              <p className="text-2xl font-semibold text-gray-800">4.2</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-green-50 rounded-full">
              <ThumbsUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Positive Reviews</p>
              <p className="text-2xl font-semibold text-gray-800">45</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-red-50 rounded-full">
              <ThumbsDown className="w-6 h-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Negative Reviews</p>
              <p className="text-2xl font-semibold text-gray-800">7</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-50 rounded-full">
              <Flag className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Reported Reviews</p>
              <p className="text-2xl font-semibold text-gray-800">1</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search reviews..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-5 h-5 mr-2 text-gray-600" />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{review.author}</h3>
                  <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                </div>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`w-5 h-5 ${
                        index < review.rating
                          ? ratingColors[review.rating as keyof typeof ratingColors]
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-4 text-gray-600">{review.content}</p>
                <div className="flex items-center mt-4 space-x-4">
                  <div className="flex items-center text-gray-500">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    <span className="text-sm">{review.likes}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <ThumbsDown className="w-4 h-4 mr-1" />
                    <span className="text-sm">{review.dislikes}</span>
                  </div>
                  {review.reported && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      <Flag className="w-3 h-3 mr-1" />
                      Reported
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <MessageSquare className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Flag className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {reviews.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Star className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">No reviews yet</h3>
          <p className="mt-2 text-gray-500">Reviews from your customers will appear here.</p>
        </div>
      )}
    </div>
  );
} 