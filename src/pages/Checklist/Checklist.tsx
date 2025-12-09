import { useState } from 'react'
import { Card } from '../../components/dashboard/Card'
import Sidebar from '../../components/layout/Sidebar';
export const Checklist = () => {
  const [checklist, setChecklist] = useState({
    will: false,
    emergencyContacts: false,
    medicalCard: false,
    insuranceFolder: false,
    passwordBackup: false,
  });

  const handleToggle = (key: string) => {
    setChecklist((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  const items = [
    { 
      key: "will", 
      label: "Do you have a will?",
      description: "Legal document stating your wishes",
      icon: "📄",
      completedDescription: "Will document is organized and accessible"
    },
    { 
      key: "emergencyContacts", 
      label: "List of emergency contact numbers?",
      description: "Updated list of people to contact",
      icon: "📞",
      completedDescription: "Emergency contacts list is up to date"
    },
    { 
      key: "medicalCard", 
      label: "Do you have a medical emergency card?",
      description: "Card with medical info and allergies",
      icon: "🏥",
      completedDescription: "Medical card includes current conditions"
    },
    { 
      key: "insuranceFolder", 
      label: "Do you have an insurance document folder?",
      description: "Organized folder with all policies",
      icon: "📁",
      completedDescription: "All insurance documents are organized"
    },
    { 
      key: "passwordBackup", 
      label: "Do you have a digital password backup?",
      description: "Secure backup of important passwords",
      icon: "🔐",
      completedDescription: "Password backup is encrypted and secure"
    },
  ];

  const CheckIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );

  const completedCount = Object.values(checklist).filter(Boolean).length;
  const totalCount = items.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-8">
          
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                <CheckIcon />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  Life Admin Checklist
                </h1>
                <p className="text-gray-600 mt-1">Essential tasks to keep your life organized and secure</p>
              </div>
            </div>
            
            {/* Stats Bar */}
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Completed: {completedCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Remaining: {totalCount - completedCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <span>Total: {totalCount}</span>
              </div>
            </div>
          </div>

          {/* Progress Card */}
          <Card title="Progress Overview" variant="default" className="mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-200">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-800">{progressPercent}%</div>
                      <div className="text-sm text-gray-500 mt-1">Complete</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Your Progress</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {completedCount === totalCount 
                      ? "All tasks completed! Great job!"
                      : `${totalCount - completedCount} more to complete your life admin setup.`
                    }
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1.5 bg-green-50 text-green-700 font-medium rounded-lg border border-green-100">
                      {completedCount} completed
                    </div>
                    <div className="px-3 py-1.5 bg-gray-100 text-gray-700 font-medium rounded-lg">
                      {totalCount - completedCount} pending
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-64">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                  <div 
                    className="h-full bg-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">
                  {completedCount === totalCount ? (
                    <span className="text-green-600 font-medium">✓ All tasks completed</span>
                  ) : (
                    <span>{progressPercent}% complete</span>
                  )}
                </p>
              </div>
            </div>
          </Card>

          {/* Checklist Items */}
          <Card 
            title="Essential Tasks" 
            icon={<CheckIcon />} 
            variant="default"
            badge={completedCount === totalCount ? "Complete" : `${completedCount}/${totalCount}`}
            className="mb-6"
          >
            <div className="space-y-3">
              {items.map((item) => {
                const isChecked = checklist[item.key as keyof typeof checklist];
                
                return (
                  <div
                    key={item.key}
                    className={`
                      rounded-xl p-5 transition-all duration-200 border
                      ${isChecked 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-white border-gray-200 hover:border-gray-300'
                      }
                    `}
                  >
                    <div className="flex items-start justify-between gap-6">
                      {/* Left Side */}
                      <div className="flex items-start gap-4 flex-1">
                        {/* Icon */}
                        <div className={`
                          w-12 h-12 rounded-lg flex items-center justify-center text-2xl
                          ${isChecked 
                            ? 'bg-green-100' 
                            : 'bg-gray-100'
                          }
                        `}>
                          {item.icon}
                        </div>

                        {/* Text Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className={`
                              text-lg font-medium
                              ${isChecked ? 'text-green-800' : 'text-gray-800'}
                            `}>
                              {item.label}
                            </h3>
                            {isChecked && (
                              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                                ✓ Done
                              </span>
                            )}
                          </div>
                          <p className={`text-sm ${isChecked ? 'text-green-600' : 'text-gray-600'}`}>
                            {isChecked ? item.completedDescription : item.description}
                          </p>
                        </div>
                      </div>

                      {/* Toggle Button */}
                      <button
                        onClick={() => handleToggle(item.key)}
                        className={`
                          px-5 py-2.5 rounded-lg font-medium transition-all duration-200
                          flex items-center gap-2 min-w-fit
                          ${isChecked
                            ? 'bg-green-500 text-white hover:bg-green-600'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }
                        `}
                      >
                        {isChecked ? (
                          <>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Yes</span>
                          </>
                        ) : (
                          <span>No</span>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Completion Message */}
            {completedCount === totalCount && (
              <div className="mt-6 p-5 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white text-2xl">
                    🎉
                  </div>
                  <div>
                    <p className="font-bold text-green-800 text-lg">All tasks completed!</p>
                    <p className="text-green-700">
                      You've successfully organized all essential life admin tasks.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </Card>

          {/* Tips & Guidance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title="Best Practices" variant="default">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                  <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-1">Regular Reviews</p>
                    <p className="text-sm text-gray-600">
                      Review your checklist quarterly and update any changes in information.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                  <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-1">Secure Storage</p>
                    <p className="text-sm text-gray-600">
                      Use fireproof containers for physical documents and encrypted storage for digital copies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                  <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-1">Share Access</p>
                    <p className="text-sm text-gray-600">
                      Ensure trusted family members know where to find important documents.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card title="Next Steps" variant="default">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-700">
                      📧
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Email Reminders</p>
                      <p className="text-sm text-gray-600">Set up quarterly review reminders</p>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 bg-white text-gray-700 rounded-md text-sm font-medium border border-gray-300 hover:bg-gray-50">
                    Set Up
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-700">
                      🔄
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Annual Review</p>
                      <p className="text-sm text-gray-600">Schedule next comprehensive review</p>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 bg-white text-gray-700 rounded-md text-sm font-medium border border-gray-300 hover:bg-gray-50">
                    Schedule
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-700">
                      📊
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Progress Report</p>
                      <p className="text-sm text-gray-600">Generate and save progress report</p>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 bg-white text-gray-700 rounded-md text-sm font-medium border border-gray-300 hover:bg-gray-50">
                    Download
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}