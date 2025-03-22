import { 
  CheckCircle2, 
  Clock, 
  CreditCard, 
  Info, 
  AlertCircle,
  Calendar,
  Building2,
  Star
} from 'lucide-react';

// Mock data for subscription plans
const plans = [
  {
    id: 1,
    name: "Basic",
    price: 29,
    period: "month",
    features: [
      "Up to 3 business listings",
      "Basic analytics",
      "Email support",
      "Standard visibility"
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Professional",
    price: 79,
    period: "month",
    features: [
      "Up to 10 business listings",
      "Advanced analytics",
      "Priority support",
      "Enhanced visibility",
      "Custom branding"
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Enterprise",
    price: 199,
    period: "month",
    features: [
      "Unlimited business listings",
      "Full analytics suite",
      "24/7 dedicated support",
      "Maximum visibility",
      "Custom branding",
      "API access"
    ],
    popular: false,
  },
];

export default function BusinessSubscription() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Subscription</h1>
          <p className="text-gray-600 mt-1">Manage your subscription and billing</p>
        </div>
      </div>

      {/* Current Subscription Status */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-50 rounded-full">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Active Subscription</h2>
              <p className="text-gray-600">Professional Plan</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Next billing date</p>
              <p className="font-medium text-gray-900">April 15, 2024</p>
            </div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Amount</p>
              <p className="font-medium text-gray-900">$79/month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`bg-white p-6 rounded-lg shadow-sm border-2 ${
              plan.popular ? 'border-blue-500' : 'border-gray-200'
            }`}
          >
            {plan.popular && (
              <div className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-4">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
            <div className="mt-2">
              <span className="text-3xl font-bold text-gray-900">${plan.price}</span>
              <span className="text-gray-600">/{plan.period}</span>
            </div>
            <ul className="mt-6 space-y-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full mt-6 px-4 py-2 rounded-lg font-medium ${
                plan.popular
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {plan.popular ? 'Current Plan' : 'Switch to this plan'}
            </button>
          </div>
        ))}
      </div>

      {/* Billing Information */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Billing Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Payment Method</h3>
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
              <CreditCard className="w-6 h-6 text-gray-400" />
              <div>
                <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
                <p className="text-sm text-gray-500">Expires 12/24</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Billing Address</h3>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-900">123 Business Street</p>
              <p className="text-gray-900">New York, NY 10001</p>
              <p className="text-gray-900">United States</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription History */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Subscription History</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-white rounded-full">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">March 15, 2024</p>
                <p className="text-sm text-gray-500">Monthly subscription renewal</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900">$79.00</p>
              <p className="text-sm text-green-600">Paid</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-white rounded-full">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">February 15, 2024</p>
                <p className="text-sm text-gray-500">Monthly subscription renewal</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900">$79.00</p>
              <p className="text-sm text-green-600">Paid</p>
            </div>
          </div>
        </div>
      </div>

      {/* Important Information */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="flex items-start space-x-3">
          <Info className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <h3 className="text-sm font-medium text-blue-800">Important Information</h3>
            <p className="mt-1 text-sm text-blue-700">
              Your subscription will automatically renew on the next billing date. You can cancel or change your plan at any time before the renewal date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 