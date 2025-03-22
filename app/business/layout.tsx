import { ReactNode } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Building2, 
  Star, 
  CreditCard, 
  Settings, 
  LogOut 
} from 'lucide-react';

interface BusinessLayoutProps {
  children: ReactNode;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/business/dashboard' },
  { icon: Building2, label: 'My Listings', href: '/business/listings' },
  { icon: Star, label: 'Reviews', href: '/business/reviews' },
  { icon: CreditCard, label: 'Subscription', href: '/business/subscription' },
  { icon: Settings, label: 'Profile', href: '/business/profile' },
];

export default function BusinessLayout({ children }: BusinessLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">Business Panel</h1>
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