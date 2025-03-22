import { 
  Building2, 
  Star, 
  Users, 
  TrendingUp,
  Clock,
  AlertCircle
} from 'lucide-react';

const stats = [
  { icon: Building2, label: 'Active Listings', value: '3' },
  { icon: Star, label: 'Average Rating', value: '4.5' },
  { icon: Users, label: 'Total Reviews', value: '128' },
  { icon: TrendingUp, label: 'Views This Month', value: '1,234' },
];

const recentActivity = [
  {
    type: 'review',
    title: 'New Review',
    description: 'John Doe left a 5-star review for "Your Business Name"',
    time: '2 hours ago',
  },
  {
    type: 'listing',
    title: 'Listing Update',
    description: 'Your listing "Business Name" was approved',
    time: '1 day ago',
  },
  {
    type: 'subscription',
    title: 'Subscription Update',
    description: 'Your subscription will expire in 15 days',
    time: '2 days ago',
  },
];

export default function BusinessDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">Welcome back, Business Owner!</h1>
        <p className="text-gray-600 mt-2">Here's what's happening with your business today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-3 bg-blue-50 rounded-full">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-800">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="p-2 bg-white rounded-full">
                {activity.type === 'review' && <Star className="w-5 h-5 text-yellow-400" />}
                {activity.type === 'listing' && <Building2 className="w-5 h-5 text-blue-600" />}
                {activity.type === 'subscription' && <AlertCircle className="w-5 h-5 text-orange-400" />}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{activity.title}</h3>
                <p className="text-sm text-gray-600">{activity.description}</p>
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{activity.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg">
              Add New Listing
            </button>
            <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg">
              View All Reviews
            </button>
            <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg">
              Manage Subscription
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Subscription Status</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Current Plan</span>
              <span className="font-medium">Premium</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Next Billing</span>
              <span className="font-medium">March 15, 2024</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Status</span>
              <span className="text-green-600 font-medium">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 