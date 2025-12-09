import { Card } from "../../components/dashboard/Card";

export const Expiry = () => {
  const dummyData = [
    {
      item: "Car Licence",
      expiry: "2025-02-18",
      daysLeft: 22,
      status: "warning" as const,
    },
    {
      item: "Medical Aid Membership",
      expiry: "2025-05-01",
      daysLeft: 94,
      status: "safe" as const,
    },
    {
      item: "Funeral Policy",
      expiry: "2025-01-10",
      daysLeft: 3,
      status: "urgent" as const,
    },
  ];

  const statusConfig = {
    urgent: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-700",
      badge: "bg-red-500",
      icon: "🔴"
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      text: "text-yellow-700",
      badge: "bg-yellow-500",
      icon: "🟡"
    },
    safe: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-700",
      badge: "bg-green-500",
      icon: "🟢"
    }
  };

  const ClockIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  // Sort by days left (urgent first)
  const sortedData = [...dummyData].sort((a, b) => a.daysLeft - b.daysLeft);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Expiring Soon</h1>
          <p className="text-gray-600">Keep track of important documents and renewals</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-5 border-2 border-red-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Urgent</p>
                <p className="text-3xl font-bold text-red-600">1</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl">
                🚨
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border-2 border-yellow-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Warning</p>
                <p className="text-3xl font-bold text-yellow-600">1</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-2xl">
                ⚠️
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border-2 border-green-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Safe</p>
                <p className="text-3xl font-bold text-green-600">1</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
                ✅
              </div>
            </div>
          </div>
        </div>

        {/* Main List Card */}
        <Card title="All Items" icon={<ClockIcon />} variant="default">
          <div className="space-y-3">
            {sortedData.map((data, index) => {
              const config = statusConfig[data.status];
              
              return (
                <div
                  key={index}
                  className={`
                    ${config.bg} ${config.border}
                    border-2 rounded-2xl p-5 
                    hover:shadow-md transition-all
                    flex items-center justify-between gap-4
                  `}
                >
                  {/* Left Side */}
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 ${config.badge} rounded-full ${data.status === 'urgent' ? 'animate-pulse' : ''}`}></div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">
                        {data.item}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Expires: <span className="font-semibold">{data.expiry}</span>
                      </p>
                    </div>
                  </div>

                  {/* Right Side - Days Badge */}
                  <div className={`
                    px-5 py-3 rounded-xl font-bold text-lg
                    ${config.bg} ${config.text} ${config.border} border-2
                    flex items-center gap-2 min-w-fit
                  `}>
                    <span>{data.daysLeft}</span>
                    <span className="text-sm font-medium">days</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <button className="w-full py-3 bg-gradient-to-r from-specBlue to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
              Add New Item
            </button>
          </div>
        </Card>

        {/* Info Card */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-5 flex items-start gap-4">
          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
            💡
          </div>
          <div>
            <p className="font-semibold text-blue-900 mb-1">Stay on top of renewals</p>
            <p className="text-sm text-blue-700">
              We'll send you notifications as your documents approach their expiry dates. 
              Keep your information current to avoid any lapses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}