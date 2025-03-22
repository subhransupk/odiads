import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#6366f1] flex items-center">
            OdiaAds
          </Link>

          {/* Main Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#6366f1] transition-colors">
              Home
            </Link>
            <Link href="/listings" className="text-gray-700 hover:text-[#6366f1] transition-colors">
              Listings
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-[#6366f1] transition-colors">
              Categories
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#6366f1] transition-colors">
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link 
              href="/auth/login" 
              className="text-gray-700 hover:text-[#6366f1] transition-colors hidden md:block"
            >
              Login
            </Link>
            <Link 
              href="/auth/register" 
              className="bg-[#6366f1] text-white px-4 py-2 rounded-lg hover:bg-[#4f46e5] transition-colors font-semibold"
            >
              Register Business
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
} 