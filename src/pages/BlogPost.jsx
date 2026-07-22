import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Loader2, ArrowRight } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { defaultPosts } from '@/utils/defaultBlogPosts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';

export default function BlogPost() {
  const { slug } = useParams();
  const initialPost = defaultPosts.find(p => p.slug === slug) || null;
  const initialRelated = initialPost
    ? defaultPosts.filter(p => p.slug !== slug && p.category === initialPost.category).slice(0, 3)
    : [];

  const [post, setPost] = useState(initialPost);
  const [related, setRelated] = useState(initialRelated);
  const [loading, setLoading] = useState(!initialPost);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 2500)
        );
        const postsData = await Promise.race([
          base44.entities.BlogPost.filter({ slug, status: "published" }),
          timeoutPromise
        ]);
        if (Array.isArray(postsData) && postsData.length > 0) {
          const currentPost = postsData[0];
          setPost(currentPost);
          
          try {
            const relatedData = await Promise.race([
              base44.entities.BlogPost.filter(
                { category: currentPost.category, status: "published" },
                "-created_date",
                4
              ),
              timeoutPromise
            ]);
            if (Array.isArray(relatedData) && relatedData.length > 0) {
              setRelated(relatedData.filter(item => item.id !== currentPost.id).slice(0, 3));
            }
          } catch (e) {
            // keep initial related
          }
        }
      } catch (err) {
        console.warn("Base44 fetch error/timeout, using default posts", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="flex justify-center pt-40">
          <Loader2 className="w-8 h-8 text-navy-900 animate-spin" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="text-center pt-40 px-4">
          <h1 className="font-heading text-3xl text-navy-900 mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-sm text-navy-600 underline">Back to Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="mb-8 text-sm text-navy-400" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-navy-600 transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link to="/blog" className="hover:text-navy-600 transition-colors">Blog</Link>
            <span className="mx-2">›</span>
            <span className="text-navy-700 truncate inline-block max-w-[200px] sm:max-w-none align-bottom">
              {post.title}
            </span>
          </nav>

          <header className="mb-8">
            <span className="px-3 py-1 bg-navy-50 text-navy-700 font-semibold rounded-full text-xs uppercase mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-navy-900 leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-navy-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(post.created_date)}
              </span>
              {post.author && (
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
              )}
            </div>
          </header>

          {post.cover_image && (
            <div className="rounded-3xl overflow-hidden shadow-md bg-slate-100 mb-10 aspect-[16/9]">
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div
            className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-navy-900 prose-p:text-navy-600 leading-relaxed mb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <hr className="border-navy-100 mb-12" />

          {related.length > 0 && (
            <div>
              <h3 className="font-heading text-2xl text-navy-900 mb-6">Related Articles</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {related.map(item => (
                  <Link key={item.id} to={`/blog/${item.slug}`} className="group flex flex-col gap-3">
                    {item.cover_image && (
                      <div className="rounded-xl overflow-hidden aspect-[16/10] bg-slate-100 shadow-sm">
                        <img
                          src={item.cover_image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="text-sm font-semibold text-navy-900 line-clamp-2 leading-tight group-hover:text-navy-600 transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-[10px] text-navy-400 mt-1 block">
                        {formatDate(item.created_date)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
      <StickyButtons />
    </div>
  );
}
