import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Calendar from '../components/Calendar'
import ScheduleForm from '../components/ScheduleForm'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Calendar />
            <div className="mt-8">
              <ScheduleForm />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}