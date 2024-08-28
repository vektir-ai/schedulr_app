import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-white shadow z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="ml-2 text-2xl font-bold text-indigo-600">Schedulr</span>
            </Link>
          </div>
          <nav className="flex space-x-10">
            <Link href="/dashboard" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Dashboard
            </Link>
            <Link href="/calendar" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Calendar
            </Link>
            <Link href="/create-schedule" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Create Schedule
            </Link>
          </nav>
          <div className="flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/signin" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Log in
            </Link>
            <Link
              href="/signup"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header