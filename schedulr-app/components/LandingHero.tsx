const LandingHero = () => {
  return (
    <div className="bg-base-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-base-content sm:text-5xl md:text-6xl">
          <span className="block">Welcome to the</span>
          <span className="text-primary flex items-center justify-center">
            <svg className="h-14 w-14 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedulr App
          </span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-base-content/70 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Rotational work schedules simplified. Build, visualize, and share your calendar. 
        Manage shifts (Days/Nights) and plan time off all in one platform. 
        Say goodbye to rotational work scheduling headaches with the Schedulr app.
        </p>
        <div className="mt-10 flex justify-center">
          <div className="mx-2">
            <a href="#" className="btn btn-primary">Get started</a>
          </div>
          <div className="mx-2">
            <a href="#" className="btn btn-outline">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingHero