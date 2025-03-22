import { 
  Search, 
  Filter, 
  MoreVertical, 
  Star, 
  Flag, 
  CheckCircle2, 
  XCircle, 
  Clock,
  Edit2,
  Trash2,
  Eye,
  AlertCircle,
  MessageSquare,
  User
} from 'lucide-react';

const reportedReviews = [
  {
    id: 1,
    businessName: 'Tech Solutions Inc.',
    reviewerName: 'John Doe',
    rating: 2,
    review: "Very disappointed with their service. The team was unprofessional and didn't deliver what was promised.",
    reportReason: 'Inappropriate Content',
    reportedBy: 'Business Owner',
    reportDate: '2024-02-20',
    status: 'pending',
    originalReviewDate: '2024-02-15',
  },
  {
    id: 2,
    businessName: 'Digital Marketing Pro',
    reviewerName: 'Jane Smith',
    rating: 1,
    review: "This is a fake review. I've never used their services.",
    reportReason: 'Fake Review',
    reportedBy: 'Business Owner',
    reportDate: '2024-02-19',
    status: 'investigating',
    originalReviewDate: '2024-02-18',
  },
  {
    id: 3,
    businessName: 'Creative Design Studio',
    reviewerName: 'Mike Johnson',
    rating: 3,
    review: "The work was okay but the communication was terrible. They never responded to my emails.",
    reportReason: 'Spam',
    reportedBy: 'System',
    reportDate: '2024-02-18',
    status: 'resolved',
    originalReviewDate: '2024-02-10',
  },
];

const statusColors = {
  pending: 'text-yellow-600 bg-yellow-50',
  investigating: 'text-blue-600 bg-blue-50',
  resolved: 'text-green-600 bg-green-50',
  dismissed: 'text-gray-600 bg-gray-50',
};

const statusIcons = {
  pending: Clock,
  investigating: AlertCircle,
  resolved: CheckCircle2,
  dismissed: XCircle,
};

export default function ReportedReviews() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Reported Reviews</h1>
          <p className="text-gray-600 mt-1">Manage and take action on reported reviews</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search reported reviews..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="investigating">Investigating</option>
              <option value="resolved">Resolved</option>
              <option value="dismissed">Dismissed</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Reasons</option>
              <option value="inappropriate">Inappropriate Content</option>
              <option value="fake">Fake Review</option>
              <option value="spam">Spam</option>
              <option value="other">Other</option>
            </select>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <Filter className="w-5 h-5" />
              More Filters
            </button>
          </div>
        </div>
      </div>

      {/* Reported Reviews List */}
      <div className="space-y-4">
        {reportedReviews.map((review) => {
          const StatusIcon = statusIcons[review.status as keyof typeof statusIcons];
          return (
            <div key={review.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                {/* Review Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{review.businessName}</h3>
                      <p className="text-sm text-gray-500">Reviewed by {review.reviewerName}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium text-gray-900">{review.rating}</span>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600">{review.review}</p>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <span>Original Review: {review.originalReviewDate}</span>
                  </div>
                </div>

                {/* Report Details */}
                <div className="md:w-64 space-y-4">
                  <div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Flag className="w-4 h-4 mr-1" />
                      <span>Reported for: {review.reportReason}</span>
                    </div>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      <span>By: {review.reportedBy}</span>
                    </div>
                    <div className="mt-1 text-sm text-gray-500">
                      On: {review.reportDate}
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[review.status as keyof typeof statusColors]}`}>
                      <StatusIcon className="w-3 h-3 mr-1" />
                      {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                    </span>
                  </div>

                  <div className="flex items-center justify-end space-x-2 pt-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="text-blue-600 hover:text-blue-900">
                      <MessageSquare className="w-5 h-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between bg-white px-4 py-3 rounded-lg shadow-sm">
        <div className="flex-1 flex justify-between sm:hidden">
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </button>
          <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
              <span className="font-medium">97</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Previous
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600 hover:bg-blue-100">
                1
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
} 