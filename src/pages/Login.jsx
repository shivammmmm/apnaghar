import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '@/components/AuthLayout';
import GoogleIcon from '@/components/GoogleIcon';
import { base44 } from '@/api/base44Client';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      base44.auth.redirectToLogin(window.location.origin);
    } catch (err) {
      setError(err.message || 'Failed to login');
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    base44.auth.loginWithProvider('google', window.location.origin);
  };

  return (
    <AuthLayout title="Welcome Back" subtitle="Sign in to manage your applications">
      {error && <div className="p-3 bg-red-50 border border-red-100 text-red-600 rounded-lg text-sm">{error}</div>}
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
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-xs font-semibold text-navy-700 uppercase tracking-wider">Password</label>
            <Link to="/forgot-password" className="text-xs text-navy-600 hover:underline">Forgot Password?</Link>
          </div>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-navy-200 text-sm focus:ring-2 focus:ring-navy-600 focus:border-navy-600 outline-none"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl transition-all shadow-md disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
      <div className="relative flex items-center justify-center my-6">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100" /></div>
        <span className="relative z-10 px-3 bg-white text-xs text-slate-400 uppercase">Or continue with</span>
      </div>
      <button
        onClick={handleGoogleLogin}
        className="w-full py-3.5 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition-all flex items-center justify-center gap-3"
      >
        <GoogleIcon />
        Google Account
      </button>
      <p className="text-xs text-center text-slate-500 mt-6">
        Don't have an account? <Link to="/register" className="text-navy-900 font-semibold hover:underline">Sign Up</Link>
      </p>
    </AuthLayout>
  );
}
