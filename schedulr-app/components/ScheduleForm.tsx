'use client'
import { useState } from 'react'

const ScheduleForm = () => {
  const [startDate, setStartDate] = useState('')
  const [daysOn, setDaysOn] = useState('')
  const [daysOff, setDaysOff] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here we'll implement the logic to create the schedule
    console.log('Schedule created:', { startDate, daysOn, daysOff })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="space-y-6 sm:space-y-5">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Create Your Schedule</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Enter your work rotation details to generate your schedule.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="start-date" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Start Date
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  type="date"
                  name="start-date"
                  id="start-date"
                  className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="days-on" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Days On
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  type="number"
                  name="days-on"
                  id="days-on"
                  className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                  value={daysOn}
                  onChange={(e) => setDaysOn(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="days-off" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Days Off
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  type="number"
                  name="days-off"
                  id="days-off"
                  className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                  value={daysOff}
                  onChange={(e) => setDaysOff(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create Schedule
          </button>
        </div>
      </div>
    </form>
  )
}

export default ScheduleForm