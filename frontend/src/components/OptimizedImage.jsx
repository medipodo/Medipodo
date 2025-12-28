import React from 'react';

/**
 * Optimize edilmiş görsel komponenti
 * - WebP formatını primary olarak kullanır
 * - Eski tarayıcılarda JPG fallback
 * - Lazy loading desteği
 * - SEO friendly (alt text)
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  loading = 'lazy',
  style = {},
  onClick,
  ...props 
}) => {
  // WebP ve JPG kaynak URL'lerini belirle
  const getImageSources = (srcUrl) => {
    if (!srcUrl || typeof srcUrl !== 'string') {
      return { webp: srcUrl, jpg: srcUrl };
    }

    // Eğer .webp ile bitiyorsa
    if (srcUrl.endsWith('.webp')) {
      return {
        webp: srcUrl,
        jpg: srcUrl.replace('.webp', '.jpg')
      };
    }
    
    // Eğer .jpg ile bitiyorsa (legacy support)
    if (srcUrl.endsWith('.jpg')) {
      return {
        webp: srcUrl.replace('.jpg', '.webp'),
        jpg: srcUrl
      };
    }

    // Diğer formatlar için orijinali kullan
    return { webp: srcUrl, jpg: srcUrl };
  };

  const { webp, jpg } = getImageSources(src);

  return (
    <picture>
      {/* Modern tarayıcılar için WebP (Primary) */}
      <source 
        srcSet={webp} 
        type="image/webp"
      />
      
      {/* Fallback: Eski tarayıcılar için JPG */}
      <source 
        srcSet={jpg} 
        type="image/jpeg"
      />
      
      {/* Default img element */}
      <img
        src={webp}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        style={style}
        onClick={onClick}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
