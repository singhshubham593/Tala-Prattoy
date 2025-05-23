import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button";


function App() {
   

   return (
    <div className="bg-black text-white font-sans py-4">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <div className="text-2xl font-bold text-red-500">Tala Prattoy</div>
        <nav className="flex gap-6">
          {['Home', 'About', 'Story', 'Gallery', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-red-400">{item}</a>
          ))}
        </nav>
        <Button variant="outline">Donate Us</Button>
      </header>

      {/* Hero Section */}
      <section className="relative text-center py-20 bg-black">
        <h1 className="text-5xl font-extrabold mb-4">Tala Prattoy</h1>
        <Button className="bg-red-600 hover:bg-red-700 mt-2">Photograph Gallery</Button>
      </section>

      {/* About Section */}
      <section className="px-6 py-12 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">About Tala</h2>
          <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at justo non libero feugiat luctus a in ipsum.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 h-40"></div>
          <div className="bg-gray-800 h-40"></div>
        </div>
      </section>

      {/* Discover Tala */}
      <section className="px-6 py-12 bg-gray-900">
        <h2 className="text-3xl font-bold mb-4">Discover Tala</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 h-48 flex justify-center items-center text-gray-400">Video</div>
          <p className="text-gray-300">More information about the traditions and vibrant culture of Tala Prattoy goes here...</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-12 bg-black text-center">
        <div className="grid md:grid-cols-3 gap-6">
          <div><p className="text-2xl text-red-500">100K+</p><p className="text-gray-300">Facebook Reach</p></div>
          <div><p className="text-2xl text-red-500">5M</p><p className="text-gray-300">Footfall</p></div>
          <div><p className="text-2xl text-red-500">50K+</p><p className="text-gray-300">Instagram Likes</p></div>
        </div>
      </section>

      {/* Objectives & Features */}
      <section className="px-6 py-12 bg-gray-900">
        <h2 className="text-3xl font-bold mb-8 text-center">Objective & Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-lg text-gray-300">Feature {i + 1}</div>
          ))}
        </div>
      </section>

      {/* Award Section */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Award</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-red-600 rounded-full w-20 h-20 flex items-center justify-center text-white">m</div>
          ))}
        </div>
      </section>

      {/* Advertise Section */}
      <section className="px-6 py-12 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-4">Advertise With Us</h2>
        <p className="text-gray-400 mb-4">Want to reach a huge audience? Partner with us.</p>
        <Button className="bg-red-600 hover:bg-red-700">Reach Out</Button>
      </section>

      {/* Gallery Section */}
      <section className="px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="bg-gray-800 h-40"></div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="px-6 py-12 bg-gray-900">
        <h2 className="text-3xl font-bold mb-8">Tala In News</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-800 h-40 text-gray-300 p-4">Encouraging Cultural Events - News {i + 1}</div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-black text-gray-500 text-sm text-center">
        <div>Tala Prattoy &copy; 2025 | All Rights Reserved</div>
      </footer>
    </div>
  )
}

export default App
