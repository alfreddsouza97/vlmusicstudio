"use client"

import React, { useState } from 'react';
import { Calendar, Link, Send } from 'lucide-react';



interface CourseOption {
  id: string;
  name: string;
  price: string;
}

const courses: CourseOption[] = [
  { id: '1', name: 'Vocals Mixing Mastering Package', price: '₹2500' },
  { id: '2', name: 'BEGINNER YouTube Cover song shoot', price: '₹4999' },
  { id: '3', name: 'Audio podcast Per hour', price: '₹1499' },
  { id: '4', name: 'Recording Session Per Hour - AKG 220/ MXL 990', price: '₹750' },
  { id: '5', name: 'Professional Cover songs Package - Video Shooting, Minus Track Mixing', price: '₹12000' },
  { id: '6', name: 'Premium Room with Rode NT2 - Spacious', price: '₹1200' },
  { id: '7', name: 'Podcast Audio & Video Production Package - 4 Hours', price: '₹22000' },
  { id: '8', name: 'VL Studios Premium', price: '₹1000' },
  { id: '9', name: 'Intimate Sessions/karaoke sessions', price: '₹7500' },
  { id: '10', name: 'Jam sessions @550/850/1000 Rs Per Hour', price: '₹1499' },
  { id: '11', name: 'Guitar/Keyboard Drum Group Classes', price: '₹10000' },
  { id: '12', name: '10 hours Package for Jam Session', price: '₹5000' },
  { id: '13', name: '12db - Audios services', price: '₹2499' },
  { id: '14', name: 'Audio podcast Per hour', price: '₹1499' },
];

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    selectedCourse: '',
    date: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = encodeURIComponent(
      `Hello! I would like to book:\n\n` +
      `Course: ${courses.find(c => c.id === formData.selectedCourse)?.name}\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Mobile: ${formData.mobile}\n` +
      `Preferred Date: ${formData.date}`
    );
    
    window.open(`https://wa.me/919742343464?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-8 py-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Service Booking
          </h2>

          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Check our services catalogue before booking.
          </h2>

         
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                Select Service
              </label>
              <select
                id="course"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={formData.selectedCourse}
                onChange={(e) => setFormData({ ...formData, selectedCourse: e.target.value })}
                required
              >
                <option value="">Select Service</option>
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.name} - {course.price}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                pattern="[0-9]{10}"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Preferred Start Date
              </label>
              <div className="mt-1 relative">
                <input
                  type="date"
                  id="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <Send size={20} />
              Book via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Booking;