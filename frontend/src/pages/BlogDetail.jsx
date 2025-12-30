import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, ChevronDown, ChevronUp } from 'lucide-react';
import { blogPosts } from '../mock';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

// FAQ Accordion Component
const FAQAccordion = ({ question, answer, isOpen, onClick }) => (
  <div className="border border-gray-200 rounded-lg mb-3">
    <button
      className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-lg"
      onClick={onClick}
    >
      <span className="font-medium text-blue-950">{question}</span>
      {isOpen ? <ChevronUp size={20} className="text-blue-600" /> : <ChevronDown size={20} className="text-gray-400" />}
    </button>
    {isOpen && (
      <div className="px-5 pb-4 text-gray-600 leading-relaxed">
        {answer}
      </div>
    )}
  </div>
);

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  const [openFAQ, setOpenFAQ] = React.useState(null);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-blue-950 mb-4">Yazı Bulunamadı</h1>
          <Link to="/blog">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white">
              <ArrowLeft className="mr-2" size={18} />
              Blog'a Dön
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Extract FAQ items from faqSchema if exists
  const faqItems = post.faqSchema?.mainEntity || [];

  return (
    <>
      <Helmet>
        <title>{post.title} - Medipodo Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://medipodo.com/blog/${slug}`} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${post.title} - Medipodo Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image?.startsWith('http') ? post.image : `https://medipodo.com${post.image}`} />
        <meta property="og:url" content={`https://medipodo.com/blog/${slug}`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={post.image?.startsWith('http') ? post.image : `https://medipodo.com${post.image}`} />
        
        {/* FAQ Schema JSON-LD */}
        {post.faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(post.faqSchema)}
          </script>
        )}
      </Helmet>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <Link to="/blog">
              <Button variant="ghost" className="mb-6 text-blue-700">
                <ArrowLeft className="mr-2" size={18} />
                Blog'a Dön
              </Button>
            </Link>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-700">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed space-y-6">
                {post.content.split('\n\n').map((paragraph, index) => {
                  // Helper function to render text with bold formatting and links
                  const renderText = (text) => {
                    // First handle markdown links [text](url)
                    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
                    let parts = [];
                    let lastIndex = 0;
                    let match;
                    
                    while ((match = linkRegex.exec(text)) !== null) {
                      // Add text before the link
                      if (match.index > lastIndex) {
                        parts.push(text.substring(lastIndex, match.index));
                      }
                      // Add the link
                      parts.push(
                        <Link 
                          key={`link-${index}-${match.index}`} 
                          to={match[2]} 
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          {match[1]}
                        </Link>
                      );
                      lastIndex = match.index + match[0].length;
                    }
                    // Add remaining text
                    if (lastIndex < text.length) {
                      parts.push(text.substring(lastIndex));
                    }
                    
                    // If no links found, just return the text with bold handling
                    if (parts.length === 0) {
                      parts = [text];
                    }
                    
                    // Now handle bold formatting in each part
                    return parts.map((part, i) => {
                      if (typeof part !== 'string') return part;
                      
                      const boldParts = part.split(/(\*\*.*?\*\*)/g);
                      return boldParts.map((boldPart, j) => {
                        if (boldPart.startsWith('**') && boldPart.endsWith('**')) {
                          return <strong key={`${i}-${j}`} className="font-semibold text-blue-950">{boldPart.replace(/\*\*/g, '')}</strong>;
                        }
                        return boldPart;
                      });
                    });
                  };

                  // Handle images ![alt](src)
                  if (paragraph.startsWith('![')) {
                    const imgMatch = paragraph.match(/!\[([^\]]*)\]\(([^)]+)\)/);
                    if (imgMatch) {
                      return (
                        <div key={index} className="my-6">
                          <img 
                            src={imgMatch[2]} 
                            alt={imgMatch[1]} 
                            className="w-full h-auto rounded-lg shadow-md"
                          />
                          {imgMatch[1] && (
                            <p className="text-sm text-gray-500 text-center mt-2">{imgMatch[1]}</p>
                          )}
                        </div>
                      );
                    }
                  }

                  if (paragraph.startsWith('# ')) {
                    return <h1 key={index} className="text-3xl font-bold text-blue-950 mt-8 mb-4">{paragraph.replace('# ', '')}</h1>;
                  } else if (paragraph.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-bold text-blue-950 mt-6 mb-3">{paragraph.replace('## ', '')}</h2>;
                  } else if (paragraph.startsWith('### ')) {
                    return <h3 key={index} className="text-xl font-semibold text-blue-950 mt-4 mb-2">{paragraph.replace('### ', '')}</h3>;
                  } else if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
                    const items = paragraph.split('\n').filter(item => item.trim());
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 ml-4">
                        {items.map((item, i) => (
                          <li key={i}>{renderText(item.replace(/^[-*]\s/, ''))}</li>
                        ))}
                      </ul>
                    );
                  } else if (paragraph.match(/^\d+\./)) {
                    const items = paragraph.split('\n').filter(item => item.trim());
                    return (
                      <ol key={index} className="list-decimal list-inside space-y-2 ml-4">
                        {items.map((item, i) => (
                          <li key={i}>{renderText(item.replace(/^\d+\.\s/, ''))}</li>
                        ))}
                      </ol>
                    );
                  } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return <p key={index} className="font-bold text-blue-950">{paragraph.replace(/\*\*/g, '')}</p>;
                  } else if (paragraph.startsWith('---')) {
                    return <hr key={index} className="my-8 border-gray-300" />;
                  } else {
                    return <p key={index} className="mb-4">{renderText(paragraph)}</p>;
                  }
                })}
              </div>
            </div>
            
            {/* FAQ Accordion Section */}
            {faqItems.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-blue-950 mb-6">Sıkça Sorulan Sorular</h2>
                <div className="space-y-2">
                  {faqItems.map((faq, index) => (
                    <FAQAccordion
                      key={index}
                      question={faq.name}
                      answer={faq.acceptedAnswer.text}
                      isOpen={openFAQ === index}
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Posts CTA */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Diğer Yazıları Keşfedin</h2>
          <Link to="/blog">
            <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white">
              Tüm Blog Yazıları
            </Button>
          </Link>
        </div>
      </section>
      </div>
    </>
  );
};

export default BlogDetail;