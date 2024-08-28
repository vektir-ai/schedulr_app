'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  return (
    <header className="bg-base-100 shadow">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="ml-2 text-2xl font-bold text-primary">Schedulr</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/dashboard" className="text-base-content hover:text-primary">Dashboard</Link></li>
            <li><Link href="/calendar" className="text-base-content hover:text-primary">Calendar</Link></li>
            <li><Link href="/create-schedule" className="text-base-content hover:text-primary">Create Schedule</Link></li>
          </ul>
        </div>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Link href="/signin" className="btn btn-ghost text-base-content">Log in</Link>
          <Link href="/signup" className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </header>
  )
}

export default Header