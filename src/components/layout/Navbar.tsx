export const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-gradient-to-r from-white to-blue-50 shadow-lg flex items-center px-8 justify-between border-b-2 border-specLightBlue relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-specBlue/5 to-transparent pointer-events-none"></div>
      
      <div className="flex items-center gap-3 relative z-10">
        {/* Logo/Icon */}
        <div className="w-10 h-10 bg-gradient-to-br from-specBlue to-blue-600 rounded-lg flex items-center justify-center shadow-md">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold bg-gradient-to-r from-specBlue to-blue-600 bg-clip-text text-transparent">
          My Life Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-4 relative z-10">
        {/* User greeting with avatar */}
        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-specLightBlue/30 hover:shadow-md transition-shadow">
          <span className="text-specGrey font-medium">Welcome back</span>
          <div className="w-8 h-8 bg-gradient-to-br from-specBlue to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-sm">
            U
          </div>
        </div>
        
        
      </div>
    </nav>
  )
}