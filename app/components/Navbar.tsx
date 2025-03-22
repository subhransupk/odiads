import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 md:px-16 bg-white">
      <Link href="/" className="flex items-center">
        <span className="text-2xl font-bold text-[#6366f1]">OdiaAds</span>
      </Link>
      
      <div className="flex items-center gap-4">
        <Link href="/auth/login" className="text-gray-600 hover:text-gray-900">
          Login
        </Link>
        <Link 
          href="/auth/register" 
          className="bg-[#6366f1] text-white px-4 py-2 rounded-lg hover:bg-[#4f46e5] transition-colors"
        >
          Register Business
        </Link>
      </div>
    </nav>
  );
} 