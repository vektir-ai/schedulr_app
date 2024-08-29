'use client'

import { useState } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-base-100 shadow-sm">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="ml-2 text-2xl font-bold text-primary">Schedulr</span>
          </Link>
        </div>
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/dashboard" className="text-base-content hover:text-primary">Dashboard</Link></li>
            <li><Link href="/calendar" className="text-base-content hover:text-primary">Calendar</Link></li>
            <li><Link href="/create-schedule" className="text-base-content hover:text-primary">Create Schedule</Link></li>
          </ul>
        </div>
        <div className="flex-none hidden lg:flex items-center space-x-2">
          <ThemeToggle />
          <Link href="/signin" className="btn btn-ghost text-base-content hover:text-primary">Log in</Link>
          <Link href="/signup" className="btn btn-outline btn-primary">Get Started</Link>
        </div>
        <div className="flex-none lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden">
          <ul className="menu menu-vertical px-1 py-2">
            <li><Link href="/dashboard" className="text-base-content hover:text-primary">Dashboard</Link></li>
            <li><Link href="/calendar" className="text-base-content hover:text-primary">Calendar</Link></li>
            <li><Link href="/create-schedule" className="text-base-content hover:text-primary">Create Schedule</Link></li>
            <li><ThemeToggle /></li>
            <li><Link href="/signin" className="text-base-content hover:text-primary">Log in</Link></li>
            <li><Link href="/signup" className="btn btn-outline btn-primary mt-2">Get Started</Link></li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header