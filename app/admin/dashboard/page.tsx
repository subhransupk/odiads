import { 
  Users, 
  Building2, 
  Star, 
  CreditCard,
  AlertCircle,
  TrendingUp,
  Clock,
  CheckCircle2,
  XCircle
} from 'lucide-react';

const stats = [
  { icon: Users, label: 'Total Users', value: '1,234', change: '+12%' },
  { icon: Building2, label: 'Active Listings', value: '856', change: '+8%' },
  { icon: Star, label: 'Total Reviews', value: '4,567', change: '+15%' },
  { icon: CreditCard, label: 'Active Subscriptions', value: '789', change: '+5%' },
];

const recentActivities = [
  {
    type: 'listing',
    title: 'New Business Listing',
    description: 'Tech Solutions Inc. submitted a new listing for approval',
    time: '2 hours ago',
    status: 'pending',
  },
  {
    type: 'review',
    title: 'Reported Review',
    description: 'A review for "Digital Marketing Pro" was reported',
    time: '3 hours ago',
    status: 'reported',
  },
  {
    type: 'subscription',
    title: 'Subscription Renewal',
    description: 'Creative Design Studio renewed their subscription',
    time: '5 hours ago',
    status: 'success',
  },
  {
    type: 'user',
    title: 'New User Registration',
    description: 'John Doe registered as a new business owner',
    time: '6 hours ago',
    status: 'success',
  },
];

const statusColors = {
  pending: 'text-yellow-600 bg-yellow-50',
  reported: 'text-red-600 bg-red-50',
  success: 'text-green-600 bg-green-50',
};

const statusIcons = {
  pending: Clock,
  reported: AlertCircle,
  success: CheckCircle2,
};

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-1">Overview of platform statistics and activities</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div className="p-3 bg-blue-50 rounded-full">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex items-center text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span className="text-sm font-medium">{stat.change}</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h2>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => {
            const StatusIcon = statusIcons[activity.status as keyof typeof statusIcons];
            return (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="p-2 bg-white rounded-full">
                  {activity.type === 'listing' && <Building2 className="w-5 h-5 text-blue-600" />}
                  {activity.type === 'review' && <Star className="w-5 h-5 text-yellow-400" />}
                  {activity.type === 'subscription' && <CreditCard className="w-5 h-5 text-green-600" />}
                  {activity.type === 'user' && <Users className="w-5 h-5 text-purple-600" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">{activity.title}</h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[activity.status as keyof typeof statusColors]}`}>
                      <StatusIcon className="w-3 h-3 mr-1" />
                      {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{activity.time}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Pending Approvals</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">New Business Listing</p>
                <p className="text-sm text-gray-500">Tech Solutions Inc.</p>
              </div>
              <button className="px-4 py-2 text-sm text-blue-600 hover:text-blue-700">
                Review
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Subscription Request</p>
                <p className="text-sm text-gray-500">Digital Marketing Pro</p>
              </div>
              <button className="px-4 py-2 text-sm text-blue-600 hover:text-blue-700">
                Review
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Reported Reviews</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Negative Review</p>
                <p className="text-sm text-gray-500">Creative Design Studio</p>
              </div>
              <button className="px-4 py-2 text-sm text-blue-600 hover:text-blue-700">
                Review
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Spam Review</p>
                <p className="text-sm text-gray-500">Tech Solutions Inc.</p>
              </div>
              <button className="px-4 py-2 text-sm text-blue-600 hover:text-blue-700">
                Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 