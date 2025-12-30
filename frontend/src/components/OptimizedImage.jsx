import React from 'react';

/**
 * Basit ve garantili görsel komponenti
 * Her iki formatı da destekler, tarayıcı seçim yapar
 */
const OptimizedImage = ({ src, alt, className, ...props }) => {
  // Eğer src yoksa boş döndür
  if (!src) {
    return null;
  }

  // WebP kaynağını oluştur
  const webpSrc = typeof src === 'string' && src.endsWith('.jpg') 
    ? src.replace('.jpg', '.webp') 
    : null;

  return (
    <picture className="contents">
      {webpSrc && (
        <source srcSet={webpSrc} type="image/webp" />
      )}
      <img
        src={src}
        alt={alt || ''}
        className={className}
        loading="lazy"
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
