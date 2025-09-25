'use client';

import { useState } from 'react';
import { UserCheck, Send, Loader2 } from 'lucide-react';

interface WaitlistFormProps {
  type?: 'mentor-matching' | 'general';
  onSuccess?: () => void;
}

export default function WaitlistForm({ type = 'general', onSuccess }: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interests: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

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
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setMessage(result.message || 'Successfully added to waitlist!');
        setFormData({
          name: '',
          email: '',
          company: '',
          role: '',
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
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-black/10 max-w-lg mx-auto">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-pink-400 rounded-xl flex items-center justify-center">
          <UserCheck className="w-6 h-6 text-black" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-black">
          {type === 'mentor-matching' ? 'Mentor Matching Waitlist' : 'Join Our Waitlist'}
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
          <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-4 py-3 border border-black/20 rounded-md focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-colors"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-4 py-3 border border-black/20 rounded-md focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-colors"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
            Company/Organization
          </label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
            className="w-full px-4 py-3 border border-black/20 rounded-md focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-colors"
            placeholder="Your current company or organization"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-black mb-2">
            Current Role
          </label>
          <input
            type="text"
            id="role"
            value={formData.role}
            onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
            className="w-full px-4 py-3 border border-black/20 rounded-md focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-colors"
            placeholder="e.g., Founder, Product Manager, Engineer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-3">
            Areas of Interest (select all that apply)
          </label>
          <div className="grid grid-cols-2 gap-3">
            {interestOptions.map((interest) => (
              <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.interests.includes(interest)}
                  onChange={() => handleInterestChange(interest)}
                  className="rounded border-black/20 text-pink-400 focus:ring-pink-400"
                />
                <span className="text-sm text-black/80">{interest}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-pink-400 text-black py-3 px-6 rounded-md font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 border border-black"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Joining Waitlist...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Join Waitlist</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
