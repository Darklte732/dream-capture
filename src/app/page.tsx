import Link from "next/link";
import Navbar from "./components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="bg-gradient-to-b from-indigo-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-20 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Bring Your Dreams to Life
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Record your dreams and watch as AI transforms them into structured
              stories with beautiful visualizations. Share your dream journeys
              with others.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link
                href="/dream/new"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
              >
                Capture a Dream
              </Link>
              <Link
                href="/explore"
                className="bg-white hover:bg-gray-50 text-indigo-600 font-medium px-8 py-4 rounded-xl shadow-md hover:shadow-lg border border-indigo-200 transition-all duration-200 transform hover:-translate-y-1"
              >
                Explore Dreams
              </Link>
            </div>
            <div className="relative h-64 sm:h-96 rounded-xl overflow-hidden shadow-2xl bg-indigo-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl font-medium px-6 py-3 bg-indigo-800/70 rounded-lg backdrop-blur-sm">Dream Visualization Example</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          How Dream Capture Works
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl font-bold mb-6">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3">Record Your Dream</h3>
            <p className="text-gray-600">
              Write down your dream with as much detail as you can remember. The more details you provide, the better the AI can understand your dream.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl font-bold mb-6">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Structures & Visualizes</h3>
            <p className="text-gray-600">
              Our AI analyzes your dream, structures it into beginning, middle, and end, and generates images for each part of your dream journey.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl font-bold mb-6">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3">Share & Explore</h3>
            <p className="text-gray-600">
              Share your dream visualizations with friends or explore dreams shared by others in the community. Discover recurring themes.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Dream Journey Today</h2>
          <p className="text-white/90 max-w-3xl mx-auto mb-8">
            Join thousands of dreamers who are exploring their subconscious and sharing their dream experiences.
          </p>
          <Link
            href="/register"
            className="bg-white hover:bg-gray-50 text-indigo-700 font-medium px-6 py-3 rounded-md shadow"
          >
            Sign Up Free
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Featured Dreams
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="rounded-lg overflow-hidden mb-4">
              <div className="h-48 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg"></div>
            </div>
            <h3 className="font-bold text-xl mb-2">Flying Over Mountains</h3>
            <p className="text-gray-600 mb-3 line-clamp-2">
              I dreamt I was soaring over snowy mountain peaks, feeling completely free...
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-200 mr-2 flex items-center justify-center text-sm font-medium">
                  S
                </div>
                <span className="text-sm text-gray-700">Sarah K.</span>
              </div>
              <span className="text-xs text-gray-500">3 days ago</span>
            </div>
          </div>
          
          <div>
            <div className="rounded-lg overflow-hidden mb-4">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg"></div>
            </div>
            <h3 className="font-bold text-xl mb-2">Underwater City</h3>
            <p className="text-gray-600 mb-3 line-clamp-2">
              I discovered a hidden civilization beneath the ocean waves...
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-200 mr-2 flex items-center justify-center text-sm font-medium">
                  A
                </div>
                <span className="text-sm text-gray-700">Alex M.</span>
              </div>
              <span className="text-xs text-gray-500">1 week ago</span>
            </div>
          </div>
          
          <div>
            <div className="rounded-lg overflow-hidden mb-4">
              <div className="h-48 bg-gradient-to-r from-amber-500 to-red-500 rounded-lg"></div>
            </div>
            <h3 className="font-bold text-xl mb-2">Time Travel Adventure</h3>
            <p className="text-gray-600 mb-3 line-clamp-2">
              I found myself in ancient Rome, witnessing historical events unfold...
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-200 mr-2 flex items-center justify-center text-sm font-medium">
                  J
                </div>
                <span className="text-sm text-gray-700">Jamie T.</span>
              </div>
              <span className="text-xs text-gray-500">2 weeks ago</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
