'use client'

import { useState } from 'react'
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns'

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        <div>
          <button
            onClick={() => setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}
            className="px-2 py-1 mr-2 text-sm bg-indigo-500 text-white rounded hover:bg-indigo-600"
          >
            Prev
          </button>
          <button
            onClick={() => setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}
            className="px-2 py-1 text-sm bg-indigo-500 text-white rounded hover:bg-indigo-600"
          >
            Next
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map(day => (
          <div key={day} className="text-center font-semibold text-gray-600">
            {day}
          </div>
        ))}
        {monthDays.map(day => (
          <div
            key={day.toISOString()}
            className={`p-2 text-center ${
              !isSameMonth(day, currentMonth) ? 'text-gray-400' :
              isToday(day) ? 'bg-indigo-100 text-indigo-800 font-semibold' : 'text-gray-800'
            }`}
          >
            {format(day, 'd')}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar