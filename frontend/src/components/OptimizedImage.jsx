import React from 'react';

/**
 * Optimize edilmiş görsel komponenti
 * - WebP formatını destekleyen tarayıcılarda WebP kullanır
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
  // Eğer src .jpg ile bitiyorsa, .webp versiyonunu da ekle
  const getWebPSource = (jpgSrc) => {
    if (typeof jpgSrc === 'string' && jpgSrc.endsWith('.jpg')) {
      return jpgSrc.replace('.jpg', '.webp');
    }
    return null;
  };

  const webpSrc = getWebPSource(src);

  return (
    <picture>
      {/* Modern tarayıcılar için WebP */}
      {webpSrc && (
        <source 
          srcSet={webpSrc} 
          type="image/webp"
        />
      )}
      
      {/* Fallback: Tüm tarayıcılar için JPG */}
      <img
        src={src}
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
