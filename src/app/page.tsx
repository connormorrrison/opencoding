import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="max-w-7xl mx-auto w-full px-6 py-8">
        {/* Header */}
        <header className="flex justify-between items-center w-full">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span className="text-xl font-medium text-gray-900">OpenCoding</span>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Features</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Community</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Resources</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Pricing</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 text-sm">Login</a>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm transition-colors">
              Open Account
            </button>
          </div>
        </header>
        
        {/* Hero Section */}
        <section className="py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Powerful coding.
              <br />
              <span className="text-indigo-500">Simplified learning.</span>
            </h1>
            
            <p className="text-lg text-gray-600 mt-8 max-w-xl">
              Apply in 5 minutes for online coding resources that transform how you develop and grow as a programmer.
            </p>
            
            <div className="mt-10 flex flex-col md:flex-row gap-4">
              <div className="flex-grow max-w-md">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full transition-colors">
                Open Account
              </button>
            </div>
            
            <div className="mt-6 flex items-center">
              <div className="bg-indigo-100 rounded-full p-1 mr-3">
                <div className="bg-indigo-400 rounded-full w-2 h-2"></div>
              </div>
              <span className="text-sm text-gray-600">Trusted by 50K+ developers all over the world</span>
            </div>
          </div>
        </section>
        
        {/* Dashboard Preview */}
        <section className="pb-24 relative">
          <div className="bg-gradient-to-br from-indigo-50 to-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-6 md:p-8 relative">
              {/* Mock Dashboard UI */}
              <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Welcome, Developer</p>
                    <h2 className="text-xl font-semibold">Learning Dashboard</h2>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm">New Project</button>
                    <button className="border border-gray-300 px-3 py-1 rounded-md text-sm">Resources</button>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-medium">Current Progress</h3>
                      <span className="text-indigo-600 text-sm">87%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-medium">Projects</h3>
                      <span className="text-indigo-600 text-sm">12</span>
                    </div>
                    <p className="text-sm text-gray-500">5 active, 7 completed</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-medium">Community</h3>
                      <span className="text-indigo-600 text-sm">Active</span>
                    </div>
                    <p className="text-sm text-gray-500">3 messages unread</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-medium mb-4">Recent Activity</h3>
                  <div className="space-y-2">
                    <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-green-100 p-2 rounded-md mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-sm">Completed Python Basics Course</span>
                      </div>
                      <span className="text-xs text-gray-500">Today</span>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-blue-100 p-2 rounded-md mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                          </svg>
                        </div>
                        <span className="text-sm">Started React Components Tutorial</span>
                      </div>
                      <span className="text-xs text-gray-500">Yesterday</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Minimal Footer */}
        <footer className="py-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span className="text-sm text-gray-600">© {new Date().getFullYear()} OpenCoding. All rights reserved.</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}