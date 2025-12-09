export const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-gradient-to-r from-white to-blue-50/50 shadow-lg shadow-blue-100/30 flex items-center px-6 md:px-8 justify-between relative overflow-hidden">
      {/* Enhanced subtle background accents */}
      <div className="absolute inset-0 bg-gradient-to-r from-specBlue/5 via-blue-50/20 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent pointer-events-none"></div>
      
      <div className="flex items-center gap-3 relative z-10">
        {/* Logo/Icon with enhanced shadow */}
        <div className="w-10 h-10 bg-gradient-to-br from-specBlue to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        
        {/* Logo text with enhanced gradient */}
        <div>
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-specBlue via-blue-600 to-violet-600 bg-clip-text text-transparent leading-tight">
            My Life Dashboard
          </h1>
          <p className="text-xs text-gray-500 hidden md:block">Organize • Plan • Achieve</p>
        </div>
      </div>

      <div className="flex items-center gap-4 relative z-10">
        {/* Enhanced user greeting */}
        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-xl shadow-sm shadow-blue-100/50 hover:shadow-md hover:shadow-blue-200/50 transition-all duration-300 group cursor-pointer">
          <div className="relative">
            <div className="w-9 h-9 bg-gradient-to-br from-specBlue to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-sm group-hover:shadow-md transition-shadow">
              U
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white shadow-sm"></div>
          </div>
          <div className="hidden md:flex flex-col">
            <span className="text-sm text-gray-600">Welcome back</span>
            <span className="text-sm font-semibold bg-gradient-to-r from-specBlue to-blue-600 bg-clip-text text-transparent">User</span>
          </div>
          <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Notification/Quick Action Button */}
        <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm shadow-blue-100/50 hover:shadow-md hover:shadow-blue-200/50 transition-all duration-300 relative group">
          <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500/50 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </div>

      {/* Mobile menu indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent rounded-full opacity-50"></div>
    </nav>
  )
}