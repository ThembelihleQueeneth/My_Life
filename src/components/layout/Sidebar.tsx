import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  
  const menuItems = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      path: "/profile",
      label: "Profile",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      path: "/expiry",
      label: "Expiring Soon",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      badge: "3"
    },
    {
      path: "/checklist",
      label: "Checklist",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-64 bg-gradient-to-br from-white via-white to-blue-50/40 h-screen p-6 shadow-xl shadow-blue-100/30 backdrop-blur-sm flex flex-col">
      {/* Menu Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-specBlue to-blue-500 flex items-center justify-center shadow-lg shadow-blue-400/30">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-specBlue to-blue-600 bg-clip-text text-transparent">
              Navigation
            </h1>
            <p className="text-xs text-specGrey/70 mt-0.5">Explore features</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`
                  flex items-center gap-3 px-4 py-3.5 rounded-2xl font-medium transition-all duration-300
                  group relative overflow-hidden
                  ${isActive(item.path)
                    ? 'bg-gradient-to-r from-specBlue to-blue-500 text-white shadow-xl shadow-blue-400/40'
                    : 'text-specGrey hover:bg-gradient-to-r hover:from-blue-50 hover:to-white hover:text-specBlue hover:shadow-lg hover:shadow-blue-100/50'
                  }
                `}
              >
                {/* Active indicator */}
                {isActive(item.path) && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white/80 rounded-r-full shadow-sm"></div>
                )}
                
                <span className={`
                  ${isActive(item.path)
                    ? 'text-white'
                    : 'text-blue-400 group-hover:text-specBlue transition-colors'
                  }
                `}>
                  {item.icon}
                </span>
                <span className="flex-1 font-medium">{item.label}</span>
                {item.badge && (
                  <span className={`
                    px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-300
                    ${isActive(item.path)
                      ? 'bg-white/30 text-white backdrop-blur-sm'
                      : 'bg-gradient-to-r from-red-400 to-red-500 text-white shadow-sm shadow-red-300/50 group-hover:scale-105'
                    }
                  `}>
                    {item.badge}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto pt-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50/80 to-white p-5 shadow-xl shadow-blue-100/50 backdrop-blur-sm border border-white/50">
          {/* Background decoration */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-specBlue/10 to-blue-300/10 rounded-full"></div>
          <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-gradient-to-br from-blue-200/10 to-blue-100/10 rounded-full"></div>
          
          <div className="relative z-10 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-specBlue to-blue-500 flex items-center justify-center shadow-lg shadow-blue-400/30">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-specBlue mb-1">Pro Tip</p>
              <p className="text-sm text-specGrey/80 leading-tight">
                Review your expiring items daily to stay organized and avoid missing important deadlines.
              </p>
            </div>
          </div>
        </div>
        
        {/* User/Status section */}
        <div className="mt-6 flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-specBlue"></div>
            <div>
              <p className="text-sm font-medium text-specBlue">Welcome back!</p>
              <p className="text-xs text-specGrey/70">Last active: Today</p>
            </div>
          </div>
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
        </div>
      </div>
    </aside>
  );
}