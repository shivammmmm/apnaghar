import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '@/components/AuthLayout';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Redirect to central login for password reset
    window.location.href = "https://app.base44.com/auth/forgot-password";
  };

  return (
    <AuthLayout title="Forgot Password" subtitle="Enter your email to receive a password reset link">
      {error && <div className="p-3 bg-red-50 border border-red-100 text-red-600 rounded-lg text-sm">{error}</div>}
      {success ? (
        <div className="text-center space-y-4">
          <p className="text-sm text-slate-600">We've sent a password reset link to your email address.</p>
          <Link to="/login" className="block text-sm font-semibold text-navy-900 hover:underline">Back to Sign In</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-navy-700 uppercase tracking-wider mb-2">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-navy-200 text-sm focus:ring-2 focus:ring-navy-600 focus:border-navy-600 outline-none"
              placeholder="name@example.com"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl transition-all shadow-md"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
          <p className="text-xs text-center text-slate-500 mt-6">
            Remember your password? <Link to="/login" className="text-navy-900 font-semibold hover:underline">Sign In</Link>
          </p>
        </form>
      )}
    </AuthLayout>
  );
}
