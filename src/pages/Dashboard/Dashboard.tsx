import { Navbar } from "../../components/layout/Navbar"
import Sidebar from "../../components/layout/Sidebar"
import { Card } from "../../components/dashboard/Card"

export const Dashboard = () => {
  // Icon components
  const ClockIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const ChecklistIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );

  const UserIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );

  const ChartIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );

  const TargetIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );

  const CalendarIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50">

      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        {/* Main Dashboard Content */}
        <div className="p-6 md:p-8">
          
          {/* Welcome Section */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Welcome back, John! 👋</h1>
            <p className="text-gray-600 text-lg">Here's what's happening with your life dashboard today.</p>
          </div>

          {/* Quick Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-3">
                <span className="text-blue-100 text-sm font-medium">Items Expiring</span>
                <div className="p-2 bg-white/20 rounded-lg">
                  <ClockIcon />
                </div>
              </div>
              <p className="text-3xl font-bold mb-1">2</p>
              <p className="text-blue-100/90 text-sm">Next 60 days</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-3">
                <span className="text-emerald-100 text-sm font-medium">Completed</span>
                <div className="p-2 bg-white/20 rounded-lg">
                  <ChecklistIcon />
                </div>
              </div>
              <p className="text-3xl font-bold mb-1">50%</p>
              <p className="text-emerald-100/90 text-sm">Checklist progress</p>
            </div>

            <div className="bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-3">
                <span className="text-violet-100 text-sm font-medium">Documents</span>
                <div className="p-2 bg-white/20 rounded-lg">
                  <CalendarIcon />
                </div>
              </div>
              <p className="text-3xl font-bold mb-1">12</p>
              <p className="text-violet-100/90 text-sm">Stored securely</p>
            </div>

            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-3">
                <span className="text-amber-100 text-sm font-medium">Goal Progress</span>
                <div className="p-2 bg-white/20 rounded-lg">
                  <TargetIcon />
                </div>
              </div>
              <p className="text-3xl font-bold mb-1">65%</p>
              <p className="text-amber-100/90 text-sm">On track</p>
            </div>
          </div>

          {/* Main Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <Card title="Expiring Soon" icon={<ClockIcon />} badge="2" variant="gradient">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-50 to-red-50/50 rounded-xl hover:from-red-100/50 transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Car Licence</p>
                      <p className="text-sm text-red-600 font-medium">20 days remaining</p>
                    </div>
                  </div>
                  <span className="text-xs bg-gradient-to-r from-red-100 to-red-200 text-red-700 px-3 py-1.5 rounded-full font-semibold">Urgent</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50 to-amber-50/50 rounded-xl hover:from-amber-100/50 transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-gray-800">Medical Aid</p>
                      <p className="text-sm text-amber-600 font-medium">40 days remaining</p>
                    </div>
                  </div>
                  <span className="text-xs bg-gradient-to-r from-amber-100 to-amber-200 text-amber-700 px-3 py-1.5 rounded-full font-semibold">Soon</span>
                </div>
              </div>
              
              <button className="mt-6 w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                View All Items
              </button>
            </Card>

            <Card title="Checklist" icon={<ChecklistIcon />} badge="1/2" variant="default">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-50 to-emerald-50/50 rounded-xl">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Do you have a will?</span>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-xl hover:from-gray-100/50 transition-all duration-300 cursor-pointer group">
                  <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center flex-shrink-0 group-hover:border-blue-400 transition-colors"></div>
                  <span className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors">Emergency Contacts List</span>
                </div>
              </div>
              
              <div className="mt-6 pt-5 border-t border-gray-200/50">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600 font-medium">Progress</span>
                  <span className="text-blue-600 font-semibold">50%</span>
                </div>
                <div className="h-2.5 bg-gray-200/50 rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-sm"></div>
                </div>
              </div>
            </Card>

            <Card title="Profile Summary" icon={<UserIcon />} variant="glass">
              <div className="space-y-5">
                <div className="flex items-center gap-5">
                  <div className="w-18 h-18 bg-gradient-to-br from-blue-500 to-violet-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    JD
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-800">John Doe</p>
                    <p className="text-gray-500">Member since Jan 2024</p>
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-blue-50/60 to-violet-50/60 rounded-xl backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-violet-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                      <TargetIcon />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide mb-1">Life Goal</p>
                      <p className="text-gray-800 font-semibold text-lg">Be debt-free at 60</p>
                      <p className="text-gray-600 mt-1">15 years remaining</p>
                    </div>
                  </div>
                </div>

                <button className="w-full py-3 bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-600 rounded-xl font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-violet-50 hover:text-blue-700 transition-all duration-300 shadow-sm hover:shadow">
                  Edit Profile
                </button>
              </div>
            </Card>

            {/* Additional Cards */}
            <Card title="Recent Activity" icon={<ChartIcon />} variant="default" className="md:col-span-2">
              <div className="space-y-4">
                <div className="flex items-center gap-5 p-4 bg-gradient-to-r from-gray-50/50 to-gray-50/30 rounded-xl hover:from-gray-100/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                    📄
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">Added Car Licence document</p>
                    <p className="text-gray-500">2 hours ago</p>
                  </div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                
                <div className="flex items-center gap-5 p-4 bg-gradient-to-r from-gray-50/50 to-gray-50/30 rounded-xl hover:from-gray-100/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center text-emerald-600 shadow-sm">
                    ✅
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">Completed "Create a will" task</p>
                    <p className="text-gray-500">Yesterday</p>
                  </div>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                </div>
                
                <div className="flex items-center gap-5 p-4 bg-gradient-to-r from-gray-50/50 to-gray-50/30 rounded-xl hover:from-gray-100/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-violet-200 rounded-xl flex items-center justify-center text-violet-600 shadow-sm">
                    🎯
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">Updated life goal progress</p>
                    <p className="text-gray-500">3 days ago</p>
                  </div>
                  <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                </div>
              </div>
            </Card>

            <Card title="Quick Actions" icon={<TargetIcon />} variant="gradient">
              <div className="space-y-3">
                <button className="w-full py-3.5 px-5 bg-white/90 hover:bg-white text-gray-800 rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow flex items-center gap-4 group">
                  <span className="text-xl bg-gradient-to-br from-blue-100 to-blue-200 p-2 rounded-lg group-hover:from-blue-200 group-hover:to-blue-300 transition-all">➕</span>
                  <span>Add New Document</span>
                </button>
                
                <button className="w-full py-3.5 px-5 bg-white/90 hover:bg-white text-gray-800 rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow flex items-center gap-4 group">
                  <span className="text-xl bg-gradient-to-br from-emerald-100 to-emerald-200 p-2 rounded-lg group-hover:from-emerald-200 group-hover:to-emerald-300 transition-all">📋</span>
                  <span>Create Checklist Item</span>
                </button>
                
                <button className="w-full py-3.5 px-5 bg-white/90 hover:bg-white text-gray-800 rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow flex items-center gap-4 group">
                  <span className="text-xl bg-gradient-to-br from-amber-100 to-amber-200 p-2 rounded-lg group-hover:from-amber-200 group-hover:to-amber-300 transition-all">🔔</span>
                  <span>Set Reminder</span>
                </button>
              </div>
            </Card>

          </div>
        </div>
      </div>

    </div>
  )
}