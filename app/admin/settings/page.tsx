'use client';

import { 
  Save, 
  Mail, 
  CreditCard, 
  Globe, 
  Bell, 
  Shield, 
  Users, 
  FileText,
  Image,
  MessageSquare,
  Settings2,
  Database,
  Lock,
  HelpCircle
} from 'lucide-react';

interface Setting {
  name: string;
  type: 'text' | 'textarea' | 'image' | 'email' | 'tel' | 'number' | 'password' | 'select' | 'toggle';
  value: string | number | boolean;
  description?: string;
  options?: string[];
}

interface Section {
  id: string;
  title: string;
  description: string;
  icon: any;
  settings: Setting[];
}

const settingsSections: Section[] = [
  {
    id: 'general',
    title: 'General Settings',
    description: 'Basic platform configuration and branding',
    icon: Settings2,
    settings: [
      {
        name: 'Site Name',
        type: 'text',
        value: 'Business Directory',
        description: 'The name of your platform',
      },
      {
        name: 'Site Description',
        type: 'textarea',
        value: 'Your trusted platform for business discovery and management',
        description: 'A brief description of your platform',
      },
      {
        name: 'Site Logo',
        type: 'image',
        value: '/logo.png',
        description: 'Your platform logo',
      },
      {
        name: 'Favicon',
        type: 'image',
        value: '/favicon.ico',
        description: 'Browser tab icon',
      },
      {
        name: 'Contact Email',
        type: 'email',
        value: 'support@businessdirectory.com',
        description: 'Primary contact email address',
      },
      {
        name: 'Contact Phone',
        type: 'tel',
        value: '+1 (555) 123-4567',
        description: 'Primary contact phone number',
      },
    ],
  },
  {
    id: 'email',
    title: 'Email Settings',
    description: 'Configure email notifications and templates',
    icon: Mail,
    settings: [
      {
        name: 'SMTP Host',
        type: 'text',
        value: 'smtp.gmail.com',
        description: 'SMTP server hostname',
      },
      {
        name: 'SMTP Port',
        type: 'number',
        value: '587',
        description: 'SMTP server port',
      },
      {
        name: 'SMTP Username',
        type: 'text',
        value: 'noreply@businessdirectory.com',
        description: 'SMTP server username',
      },
      {
        name: 'SMTP Password',
        type: 'password',
        value: '********',
        description: 'SMTP server password',
      },
      {
        name: 'Email From Name',
        type: 'text',
        value: 'Business Directory',
        description: 'Sender name for outgoing emails',
      },
      {
        name: 'Enable Email Notifications',
        type: 'toggle',
        value: true,
        description: 'Enable or disable email notifications',
      },
    ],
  },
  {
    id: 'payment',
    title: 'Payment Settings',
    description: 'Configure payment gateways and subscription settings',
    icon: CreditCard,
    settings: [
      {
        name: 'Stripe Public Key',
        type: 'text',
        value: 'pk_test_********',
        description: 'Stripe publishable key',
      },
      {
        name: 'Stripe Secret Key',
        type: 'password',
        value: 'sk_test_********',
        description: 'Stripe secret key',
      },
      {
        name: 'PayPal Client ID',
        type: 'text',
        value: '********',
        description: 'PayPal client ID',
      },
      {
        name: 'PayPal Secret',
        type: 'password',
        value: '********',
        description: 'PayPal secret key',
      },
      {
        name: 'Currency',
        type: 'select',
        value: 'USD',
        options: ['USD', 'EUR', 'GBP', 'CAD', 'AUD'],
        description: 'Default currency for payments',
      },
      {
        name: 'Enable Test Mode',
        type: 'toggle',
        value: true,
        description: 'Enable test mode for payment processing',
      },
    ],
  },
  {
    id: 'security',
    title: 'Security Settings',
    description: 'Configure security and authentication settings',
    icon: Shield,
    settings: [
      {
        name: 'Enable Two-Factor Auth',
        type: 'toggle',
        value: true,
        description: 'Enable two-factor authentication for admin accounts',
      },
      {
        name: 'Session Timeout (minutes)',
        type: 'number',
        value: '30',
        description: 'Session timeout duration in minutes',
      },
      {
        name: 'Max Login Attempts',
        type: 'number',
        value: '5',
        description: 'Maximum failed login attempts before lockout',
      },
      {
        name: 'Lockout Duration (minutes)',
        type: 'number',
        value: '15',
        description: 'Account lockout duration after max attempts',
      },
      {
        name: 'Enable IP Blocking',
        type: 'toggle',
        value: true,
        description: 'Enable IP-based blocking for suspicious activity',
      },
    ],
  },
];

export default function Settings() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
          <p className="text-gray-600 mt-1">Manage platform settings and configurations</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <Save className="w-5 h-5" />
          Save Changes
        </button>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {settingsSections.map((section) => {
          const Icon = section.icon;
          return (
            <div key={section.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
                  <p className="text-sm text-gray-600">{section.description}</p>
                </div>
              </div>

              <div className="space-y-6">
                {section.settings.map((setting, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-1">
                      <label className="block text-sm font-medium text-gray-700">
                        {setting.name}
                      </label>
                      {setting.description && (
                        <p className="mt-1 text-sm text-gray-500">{setting.description}</p>
                      )}
                    </div>
                    <div className="md:col-span-2">
                      {setting.type === 'toggle' ? (
                        <div className="flex items-center">
                          <button
                            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                              setting.value ? 'bg-blue-600' : 'bg-gray-200'
                            }`}
                          >
                            <span
                              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                                setting.value ? 'translate-x-5' : 'translate-x-0'
                              }`}
                            />
                          </button>
                        </div>
                      ) : setting.type === 'select' ? (
                        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                          {setting.options?.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : setting.type === 'textarea' ? (
                        <textarea
                          rows={3}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          defaultValue={String(setting.value)}
                        />
                      ) : setting.type === 'image' ? (
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Image className="w-8 h-8 text-gray-400" />
                          </div>
                          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                            Change Image
                          </button>
                        </div>
                      ) : (
                        <input
                          type={setting.type}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          defaultValue={String(setting.value)}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 