import { ReactNode } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  Flag, 
  CreditCard, 
  Settings, 
  LogOut,
  Shield
} from 'lucide-react';

interface AdminLayoutProps {
  children: ReactNode;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
  { icon: Building2, label: 'Business Listings', href: '/admin/businesses' },
  { icon: Users, label: 'User Management', href: '/admin/users' },
  { icon: Flag, label: 'Reported Reviews', href: '/admin/reviews/reported' },
  { icon: CreditCard, label: 'Subscriptions', href: '/admin/subscriptions' },
  { icon: Settings, label: 'Settings', href: '/admin/settings' },
];

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
          </div>
        </div>
        <nav className="mt-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.label}</span>
            </Link>
          ))}
          <button className="flex items-center w-full px-6 py-3 mt-4 text-gray-700 hover:bg-gray-100 hover:text-red-600">
            <LogOut className="w-5 h-5 mr-3" />
            <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
} 