import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, Loader2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';

const categories = ["All", "Home Buying", "Home Loans", "Refinancing", "Financial Planning"];

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const data = await base44.entities.BlogPost.filter({ status: "published" }, "-created_date");
        setPosts(data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || 
                          post.excerpt?.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-navy-400" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-navy-600 transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-navy-700">Blog</span>
          </nav>

          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl sm:text-5xl text-navy-900 mb-4">Home Loan Guide & Insights</h1>
            <p className="text-navy-500 max-w-xl mx-auto">Expert tips, banking insights, and financial guides to help you navigate your home loan journey.</p>
          </div>

          <div className="max-w-md mx-auto mb-10 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-navy-200 text-sm focus:ring-2 focus:ring-navy-600 focus:border-navy-600 outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${activeCategory === cat ? "bg-navy-900 text-white border-navy-900 shadow-md" : "bg-slate-50 text-navy-600 border-navy-100 hover:border-navy-300 hover:text-navy-900"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 text-navy-900 animate-spin" />
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-2xl border border-navy-100/50">
              <p className="text-navy-500 font-medium">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="group bg-white rounded-3xl border border-navy-100/50 shadow-sm overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {post.cover_image && (
                      <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                        <img
                          src={post.cover_image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-navy-400 mb-3">
                        <span className="px-2.5 py-0.5 bg-navy-50 text-navy-700 font-medium rounded-full text-[10px] uppercase">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(post.created_date)}
                        </span>
                      </div>
                      <h2 className="font-heading text-2xl text-navy-900 mb-3 leading-tight group-hover:text-navy-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm text-navy-500 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-0">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-navy-900 transition-colors group/link"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <StickyButtons />
    </div>
  );
}
