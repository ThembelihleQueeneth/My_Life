import { Card } from "../../components/dashboard/Card"
import { useState } from "react"

export const Profile = () => {
  const [activeSection, setActiveSection] = useState('personal');

  // Icon components
  const UserIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );

  const ShieldIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );

  const HeartIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  const sections = [
    { id: 'personal', label: 'Personal Info', icon: <UserIcon /> },
    { id: 'policies', label: 'Policies & Docs', icon: <ShieldIcon /> },
    { id: 'health', label: 'Health & Medical', icon: <HeartIcon /> },
    { id: 'emergency', label: 'Emergency', icon: <PhoneIcon /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your personal information and important documents</p>
        </div>

        {/* Profile Header Card */}
        <Card title="Profile" variant="gradient" className="mb-6">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-specBlue to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                JD
              </div>
              <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-specBlue hover:bg-gray-50 transition-colors border-2 border-gray-100">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
              <p className="text-gray-600">john.doe@example.com</p>
              <div className="flex gap-2 mt-3">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">✓ Verified</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Premium Member</span>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-600 mb-1">Profile Completion</p>
              <div className="flex items-center gap-3">
                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-specBlue to-blue-500 rounded-full"></div>
                </div>
                <span className="text-2xl font-bold text-specBlue">75%</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Section Navigation */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-6 border border-gray-200">
          <div className="flex gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`
                  flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all
                  ${activeSection === section.id
                    ? 'bg-gradient-to-r from-specBlue to-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                  }
                `}
              >
                {section.icon}
                <span className="hidden md:inline">{section.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Form Card */}
        <Card title={sections.find(s => s.id === activeSection)?.label ?? 'Profile'} variant="default">
          <form className="space-y-6">

            {/* Personal Info Section */}
            {activeSection === 'personal' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-specBlue font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-specBlue rounded-full"></span>
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-specBlue focus:outline-none transition-colors bg-white hover:border-gray-300"
                  />
                </div>

                <div className="group">
                  <label className="block text-specBlue font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-specBlue rounded-full"></span>
                    ID Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter ID / Passport number"
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-specBlue focus:outline-none transition-colors bg-white hover:border-gray-300"
                  />
                </div>

                <div className="group">
                  <label className="block text-specBlue font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-specBlue rounded-full"></span>
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-specBlue focus:outline-none transition-colors bg-white hover:border-gray-300"
                  />
                </div>

                <div className="group">
                  <label className="block text-specBlue font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-specBlue rounded-full"></span>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-specBlue focus:outline-none transition-colors bg-white hover:border-gray-300"
                  />
                </div>

                <div className="md:col-span-2 group">
                  <label className="block text-specBlue font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-specBlue rounded-full"></span>
                    Life Goal
                  </label>
                  <textarea
                    placeholder="e.g., Be debt-free at 60, retire comfortably, travel the world..."
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-specBlue focus:outline-none transition-colors bg-white hover:border-gray-300 h-32 resize-none"
                  ></textarea>
                  <p className="text-sm text-gray-500 mt-2">Share your aspirations and long-term goals</p>
                </div>
              </div>
            )}

            {/* Policies & Documents Section */}
            {activeSection === 'policies' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-blue-900">Keep your policies up to date</p>
                      <p className="text-sm text-blue-700">We'll notify you when documents are about to expire</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-specBlue font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-specBlue rounded-full"></span>
                    Policy Type
                  </label>
                  <select className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-specBlue focus:outline-none transition-colors bg-white hover:border-gray-300">
                    <option>Select policy type</option>
                    <option>Funeral Policy</option>
                    <option>Life Insurance</option>
                    <option>Car Insurance</option>
                    <option>Home Insurance</option>
                  </select>
                </div>

                <div className="group">
                  <label className="block text-specBlue font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-specBlue rounded-full"></span>
                    Policy Number
                  </label>
                  <input
                    type="text"
                    placeholder="Policy number"
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-specBlue focus:outline-none transition-colors bg-white hover:border-gray-300"
                  />
                </div>

                <div className="group">
                  <label className="block text-specBlue font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-specBlue rounded-full"></span>
                    Car Licence Expiry
                  </label>
                  <input
                    type="date"
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-specBlue focus:outline-none transition-colors bg-white hover:border-gray-300"
                  />
                </div>

                <div className="group">
                  <label className="block text-specBlue font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-specBlue rounded-full"></span>
                    Passport Expiry
                  </label>
                  <input
                    type="date"
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-specBlue focus:outline-none transition-colors bg-white hover:border-gray-300"
                  />
                </div>
              </div>
            )}

            {/* Health & Medical Section */}
            {activeSection === 'health' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-specBlue font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-specBlue rounded-full"></span>
                    Medical Aid Provider
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Discovery, Momentum, Bonitas"
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-specBlue focus:outline-none transition-colors bg-white hover:border-gray-300"
                  />
                </div>

                <div className="group">
                  <label className="block text-specBlue font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-specBlue rounded-full"></span>
                    Membership Number
                  </label>
                  <input
                    type="text"
                    placeholder="Medical aid membership number"
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-specBlue focus:outline-none transition-colors bg-white hover:border-gray-300"
                  />
                </div>

                <div className="group">
                  <label className="block text-specBlue font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-specBlue rounded-full"></span>
                    Medical Aid Plan
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Coastal Saver, Executive Plan"
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-specBlue focus:outline-none transition-colors bg-white hover:border-gray-300"
                  />
                </div>

                <div className="group">
                  <label className="block text-specBlue font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-specBlue rounded-full"></span>
                    Blood Type
                  </label>
                  <select className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-specBlue focus:outline-none transition-colors bg-white hover:border-gray-300">
                    <option>Select blood type</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                  </select>
                </div>

                <div className="md:col-span-2 group">
                  <label className="block text-specBlue font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-specBlue rounded-full"></span>
                    Known Allergies
                  </label>
                  <textarea
                    placeholder="List any allergies (medications, food, environmental)"
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-specBlue focus:outline-none transition-colors bg-white hover:border-gray-300 h-24 resize-none"
                  ></textarea>
                </div>

                <div className="md:col-span-2 group">
                  <label className="block text-specBlue font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-specBlue rounded-full"></span>
                    Chronic Conditions
                  </label>
                  <textarea
                    placeholder="List any chronic conditions or ongoing treatments"
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-specBlue focus:outline-none transition-colors bg-white hover:border-gray-300 h-24 resize-none"
                  ></textarea>
                </div>
              </div>
            )}

            {/* Emergency Contacts Section */}
            {activeSection === 'emergency' && (
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-red-900">Critical Information</p>
                    <p className="text-sm text-red-700">This information may be used in emergency situations. Keep it current.</p>
                  </div>
                </div>

                {/* Primary Contact */}
                <div className="border-2 border-gray-200 rounded-xl p-6 bg-gradient-to-br from-white to-blue-50/30">
                  <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    Primary Emergency Contact
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-specBlue font-semibold mb-2">Full Name</label>
                      <input
                        type="text"
                        placeholder="e.g., Mother / Sibling"
                        className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-specBlue focus:outline-none transition-colors bg-white"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-specBlue font-semibold mb-2">Relationship</label>
                      <input
                        type="text"
                        placeholder="e.g., Spouse, Parent, Sibling"
                        className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-specBlue focus:outline-none transition-colors bg-white"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-specBlue font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+27 XX XXX XXXX"
                        className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-specBlue focus:outline-none transition-colors bg-white"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-specBlue font-semibold mb-2">Alternative Number</label>
                      <input
                        type="tel"
                        placeholder="+27 XX XXX XXXX"
                        className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-specBlue focus:outline-none transition-colors bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Secondary Contact */}
                <div className="border-2 border-gray-200 rounded-xl p-6 bg-white">
                  <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    Secondary Emergency Contact
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-specBlue font-semibold mb-2">Full Name</label>
                      <input
                        type="text"
                        placeholder="Contact name"
                        className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-specBlue focus:outline-none transition-colors bg-white"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-specBlue font-semibold mb-2">Relationship</label>
                      <input
                        type="text"
                        placeholder="e.g., Friend, Colleague"
                        className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-specBlue focus:outline-none transition-colors bg-white"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-specBlue font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+27 XX XXX XXXX"
                        className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-specBlue focus:outline-none transition-colors bg-white"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-specBlue font-semibold mb-2">Email Address</label>
                      <input
                        type="email"
                        placeholder="email@example.com"
                        className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-specBlue focus:outline-none transition-colors bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 justify-end pt-6 border-t border-gray-200">
              <button 
                type="button"
                className="px-8 py-3 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-specBlue to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Save Changes
              </button>
            </div>
          </form>
        </Card>

        {/* Quick Tips Card */}
        <Card title="Quick Tips" variant="glass" className="mt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
              💡
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">Pro Tip</h3>
              <p className="text-gray-600 text-sm">Keep your profile information up to date to receive timely reminders about expiring documents and important deadlines.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}