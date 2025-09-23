'use client';

import { useState } from 'react';
import { Calendar, Users, Send, Loader2 } from 'lucide-react';

interface EventRegistrationFormProps {
  eventType: 'hacker-house' | 'networking' | 'mentor-matching' | 'general';
  onSuccess?: () => void;
}

export default function EventRegistrationForm({ eventType, onSuccess }: EventRegistrationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    chapter: '',
    company: '',
    role: '',
    dietaryRestrictions: '',
    interests: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const chapters = ['Boston', 'New York', 'San Francisco'];
  const interestOptions = [
    'Entrepreneurship',
    'AI & Technology',
    'Biotech',
    'Fintech',
    'Sustainability',
    'Healthcare',
    'Education',
    'Social Impact',
    'Investment',
    'Mentorship'
  ];

  const getEventTitle = () => {
    switch (eventType) {
      case 'hacker-house':
        return 'Hacker House Registration';
      case 'networking':
        return 'Networking Event Registration';
      case 'mentor-matching':
        return 'Mentor Matching Session';
      default:
        return 'Event Registration';
    }
  };

  const getEventIcon = () => {
    switch (eventType) {
      case 'hacker-house':
        return <Users className="w-6 h-6 text-white" />;
      case 'networking':
        return <Users className="w-6 h-6 text-white" />;
      default:
        return <Calendar className="w-6 h-6 text-white" />;
    }
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          eventType
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setMessage(result.message || 'Successfully registered for event!');
        setFormData({
          name: '',
          email: '',
          chapter: '',
          company: '',
          role: '',
          dietaryRestrictions: '',
          interests: []
        });
        onSuccess?.();
      } else {
        setMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg max-w-lg mx-auto">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
          {getEventIcon()}
        </div>
        <h3 className="text-2xl font-bold text-gray-800">
          {getEventTitle()}
        </h3>
      </div>

      {message && (
        <div className={`mb-6 p-4 rounded-lg ${
          isSuccess 
            ? 'bg-green-50 text-green-700 border border-green-200' 
            : 'bg-red-50 text-red-700 border border-red-200'
        }`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label htmlFor="chapter" className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Chapter
          </label>
          <select
            id="chapter"
            value={formData.chapter}
            onChange={(e) => setFormData(prev => ({ ...prev, chapter: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Select a chapter</option>
            {chapters.map((chapter) => (
              <option key={chapter} value={chapter}>
                {chapter}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company/Organization
          </label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Your current company or organization"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
            Current Role
          </label>
          <input
            type="text"
            id="role"
            value={formData.role}
            onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="e.g., Founder, Product Manager, Engineer"
          />
        </div>

        {(eventType === 'hacker-house' || eventType === 'networking') && (
          <div>
            <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-gray-700 mb-2">
              Dietary Restrictions
            </label>
            <input
              type="text"
              id="dietaryRestrictions"
              value={formData.dietaryRestrictions}
              onChange={(e) => setFormData(prev => ({ ...prev, dietaryRestrictions: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Any dietary restrictions or allergies"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Areas of Interest (select all that apply)
          </label>
          <div className="grid grid-cols-2 gap-3">
            {interestOptions.map((interest) => (
              <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.interests.includes(interest)}
                  onChange={() => handleInterestChange(interest)}
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm text-gray-700">{interest}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Registering...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Register for Event</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
