import { useState } from 'react'
import { Card } from '../../components/dashboard/Card'

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
      icon: "📄"
    },
    { 
      key: "emergencyContacts", 
      label: "List of emergency contact numbers?",
      description: "Updated list of people to contact",
      icon: "📞"
    },
    { 
      key: "medicalCard", 
      label: "Do you have a medical emergency card?",
      description: "Card with medical info and allergies",
      icon: "🏥"
    },
    { 
      key: "insuranceFolder", 
      label: "Do you have an insurance document folder?",
      description: "Organized folder with all policies",
      icon: "📁"
    },
    { 
      key: "passwordBackup", 
      label: "Do you have a digital password backup?",
      description: "Secure backup of important passwords",
      icon: "🔐"
    },
  ];

  const CheckIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );

  const completedCount = Object.values(checklist).filter(Boolean).length;
  const totalCount = items.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Life Admin Checklist</h1>
          <p className="text-gray-600">Essential tasks to keep your life organized</p>
        </div>

        {/* Progress Card */}
        <Card title="Progress" variant="gradient" className="mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-specBlue to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {completedCount}/{totalCount}
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Overall Progress</p>
                <p className="text-3xl font-bold text-gray-800">{progressPercent}%</p>
              </div>
            </div>

            <div className="text-right">
              <div className="w-48 h-3 bg-gray-200 rounded-full overflow-hidden mb-2">
                <div 
                  className="h-full bg-gradient-to-r from-specBlue to-blue-500 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">
                {completedCount === totalCount ? (
                  <span className="text-green-600 font-semibold">✓ All tasks completed!</span>
                ) : (
                  <span>{totalCount - completedCount} tasks remaining</span>
                )}
              </p>
            </div>
          </div>
        </Card>

        {/* Checklist Items */}
        <Card title="Tasks" icon={<CheckIcon />} variant="default">
          <div className="space-y-3">
            {items.map((item) => {
              const isChecked = checklist[item.key as keyof typeof checklist];
              
              return (
                <div
                  key={item.key}
                  className={`
                    border-2 rounded-2xl p-5 transition-all
                    ${isChecked 
                      ? 'bg-green-50 border-green-200 shadow-sm' 
                      : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }
                  `}
                >
                  <div className="flex items-start justify-between gap-4">
                    {/* Left Side */}
                    <div className="flex items-start gap-4 flex-1">
                      {/* Icon */}
                      <div className={`
                        w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0
                        ${isChecked ? 'bg-green-100' : 'bg-gray-100'}
                      `}>
                        {item.icon}
                      </div>

                      {/* Text Content */}
                      <div className="flex-1">
                        <h3 className={`
                          text-lg font-bold mb-1
                          ${isChecked ? 'text-green-800 line-through' : 'text-gray-800'}
                        `}>
                          {item.label}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Toggle Button */}
                    <button
                      onClick={() => handleToggle(item.key)}
                      className={`
                        px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 min-w-fit
                        ${isChecked
                          ? 'bg-green-500 text-white hover:bg-green-600 shadow-md'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }
                      `}
                    >
                      {isChecked ? (
                        <>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
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
            <div className="mt-6 p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl">
                  🎉
                </div>
                <div>
                  <p className="font-bold text-green-900 text-lg">Congratulations!</p>
                  <p className="text-green-700">You've completed all essential life admin tasks. Great job staying organized!</p>
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* Tips Card */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 flex items-start gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
              💡
            </div>
            <div>
              <p className="font-semibold text-blue-900 mb-1">Regular Reviews</p>
              <p className="text-sm text-blue-700">
                Review your checklist monthly to ensure everything stays up to date.
              </p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5 flex items-start gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
              🔒
            </div>
            <div>
              <p className="font-semibold text-purple-900 mb-1">Keep It Secure</p>
              <p className="text-sm text-purple-700">
                Store important documents in a safe place and keep digital backups encrypted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}