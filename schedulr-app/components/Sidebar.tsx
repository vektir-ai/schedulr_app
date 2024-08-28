import ScheduleForm from './ScheduleForm'

const Sidebar = () => {
  return (
    <div className="bg-indigo-700 w-80 flex-shrink-0 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Create Schedule</h2>
        <ScheduleForm />
      </div>
    </div>
  )
}

export default Sidebar