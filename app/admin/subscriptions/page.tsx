import { 
  Search, 
  Filter, 
  MoreVertical, 
  CreditCard, 
  CheckCircle2, 
  XCircle, 
  Clock,
  Edit2,
  Trash2,
  Eye,
  Plus,
  Users,
  DollarSign,
  Calendar
} from 'lucide-react';

const subscriptionPlans = [
  {
    id: 1,
    name: 'Basic',
    price: 29,
    period: 'monthly',
    features: [
      'Up to 5 business listings',
      'Basic analytics',
      'Email support',
      'Standard visibility'
    ],
    status: 'active',
    subscribers: 156,
  },
  {
    id: 2,
    name: 'Professional',
    price: 79,
    period: 'monthly',
    features: [
      'Up to 20 business listings',
      'Advanced analytics',
      'Priority support',
      'Enhanced visibility',
      'Custom branding'
    ],
    status: 'active',
    subscribers: 89,
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 199,
    period: 'monthly',
    features: [
      'Unlimited business listings',
      'Full analytics suite',
      '24/7 support',
      'Maximum visibility',
      'Custom branding',
      'API access'
    ],
    status: 'active',
    subscribers: 45,
  },
];

const activeSubscriptions = [
  {
    id: 1,
    businessName: 'Tech Solutions Inc.',
    plan: 'Professional',
    status: 'active',
    startDate: '2024-01-15',
    nextBilling: '2024-03-15',
    amount: 79,
    paymentMethod: 'Credit Card',
    autoRenew: true,
  },
  {
    id: 2,
    businessName: 'Digital Marketing Pro',
    plan: 'Basic',
    status: 'pending',
    startDate: '2024-02-01',
    nextBilling: '2024-03-01',
    amount: 29,
    paymentMethod: 'PayPal',
    autoRenew: true,
  },
  {
    id: 3,
    businessName: 'Creative Design Studio',
    plan: 'Enterprise',
    status: 'active',
    startDate: '2024-01-20',
    nextBilling: '2024-03-20',
    amount: 199,
    paymentMethod: 'Bank Transfer',
    autoRenew: true,
  },
];

const statusColors = {
  active: 'text-green-600 bg-green-50',
  pending: 'text-yellow-600 bg-yellow-50',
  cancelled: 'text-red-600 bg-red-50',
  expired: 'text-gray-600 bg-gray-50',
};

const statusIcons = {
  active: CheckCircle2,
  pending: Clock,
  cancelled: XCircle,
  expired: Clock,
};

export default function Subscriptions() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Subscriptions</h1>
          <p className="text-gray-600 mt-1">Manage subscription plans and active subscriptions</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Add New Plan
        </button>
      </div>

      {/* Subscription Plans */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Subscription Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subscriptionPlans.map((plan) => (
            <div key={plan.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                  <div className="mt-1 flex items-center text-gray-600">
                    <DollarSign className="w-4 h-4 mr-1" />
                    <span>{plan.price}</span>
                    <span className="mx-1">/</span>
                    <span>{plan.period}</span>
                  </div>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[plan.status as keyof typeof statusColors]}`}>
                  {plan.status.charAt(0).toUpperCase() + plan.status.slice(1)}
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{plan.subscribers} subscribers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-900">
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Subscriptions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Active Subscriptions</h2>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search subscriptions..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="cancelled">Cancelled</option>
              <option value="expired">Expired</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Business
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Plan
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Next Billing
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Method
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {activeSubscriptions.map((subscription) => {
                const StatusIcon = statusIcons[subscription.status as keyof typeof statusIcons];
                return (
                  <tr key={subscription.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{subscription.businessName}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{subscription.plan}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[subscription.status as keyof typeof statusColors]}`}>
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">${subscription.amount}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{subscription.nextBilling}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <CreditCard className="w-4 h-4 mr-2" />
                        {subscription.paymentMethod}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="text-blue-600 hover:text-blue-900">
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="w-5 h-5" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
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