import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="bg-indigo-700 w-64 flex-shrink-0">
      <div className="h-full flex flex-col">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
              alt="Schedulr"
            />
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