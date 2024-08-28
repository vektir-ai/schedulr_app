import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-white shadow z-10">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Schedulr</span>
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Schedulr"
              />
            </Link>
            <div className="ml-10 hidden space-x-8 lg:block">
              <Link href="/calendar" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Calendar
              </Link>
              <Link href="/create-schedule" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Create Schedule
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Link
              href="/login"
              className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Sign up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header