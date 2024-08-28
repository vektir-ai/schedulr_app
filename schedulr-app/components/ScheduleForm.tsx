'use client'

import { useState } from 'react'
import { addDays, format } from 'date-fns'

const ScheduleForm = () => {
  const [startDate, setStartDate] = useState('')
  const [daysOn, setDaysOn] = useState('')
  const [daysOff, setDaysOff] = useState('')
  const [schedule, setSchedule] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!startDate || !daysOn || !daysOff) return

    const start = new Date(startDate)
    const on = parseInt(daysOn)
    const off = parseInt(daysOff)
    const cycle = on + off
    const newSchedule = []

    for (let i = 0; i < 365; i++) {
      const currentDate = addDays(start, i)
      const dayInCycle = i % cycle
      if (dayInCycle < on) {
        newSchedule.push(`${format(currentDate, 'MMM dd, yyyy')} - Working`)
      } else {
        newSchedule.push(`${format(currentDate, 'MMM dd, yyyy')} - Off`)
      }
    }

    setSchedule(newSchedule)
  }

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="date"
            id="start-date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="days-on" className="block text-sm font-medium text-gray-700">
            Days On
          </label>
          <input
            type="number"
            id="days-on"
            value={daysOn}
            onChange={(e) => setDaysOn(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="days-off" className="block text-sm font-medium text-gray-700">
            Days Off
          </label>
          <input
            type="number"
            id="days-off"
            value={daysOff}
            onChange={(e) => setDaysOff(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Generate Schedule
        </button>
      </form>
      {schedule.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-900">Generated Schedule</h3>
          <ul className="mt-2 divide-y divide-gray-200">
            {schedule.slice(0, 30).map((day, index) => (
              <li key={index} className="py-2">
                {day}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ScheduleForm