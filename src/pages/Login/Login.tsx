import { useState } from 'react'
import { Link } from "react-router-dom";



export const Login = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-md relative border border-white/20">
        
        {/* Logo or Title with icon */}
        <div className="flex items-center justify-center mb-3">
          <div className="bg-gradient-to-br from-orange-400 to-orange-500 p-3 rounded-2xl mr-3 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            My Life
          </h1>
        </div>

        <p className="text-center text-gray-600 mb-8 text-sm">
          Manage all your important life information in one place.
        </p>

        {/* Facebook Login Button */}
        <Link to="/dashboard">
        <button 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3.5 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex justify-center items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            width="20"
            fill="white"
            className={`transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}
          >
            <path d="M279.14 288l14.22-92.66h-88.91V139.33c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.22 0-121.17 44.38-121.17 124.72V195.3H22.89V288h81.3v224h100.17V288z"/>
          </svg>
          Sign in with Facebook
        </button>
        </Link>

        {/* Footer text */}
        <p className="text-center text-xs text-gray-500 mt-8">
          By signing in, you agree to our{' '}
          <Link to="/dashboard" className="text-orange-500 hover:text-orange-600 underline">Terms of Service</Link>
          {' '}and{' '}
          <Link to="/dashboard" className="text-orange-500 hover:text-orange-600 underline">Privacy Policy</Link>
        </p>
      </div>
    </div>
  )
}