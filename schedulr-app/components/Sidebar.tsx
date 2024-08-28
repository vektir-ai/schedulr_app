import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="bg-indigo-700 w-64 flex-shrink-0">
      <div className="h-full flex flex-col">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="ml-2 text-2xl font-bold text-white">Schedulr</span>
          </div>
          <nav className="mt-5 flex-1 px-2 space-y-1" aria-label="Sidebar">
            <Link
              href="/dashboard"
              className="bg-indigo-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            >
              Dashboard
            </Link>
            <Link
              href="/calendar"
              className="text-indigo-100 hover:bg-indigo-600 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            >
              Calendar
            </Link>
            <Link
              href="/create-schedule"
              className="text-indigo-100 hover:bg-indigo-600 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            >
              Create Schedule
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Sidebar