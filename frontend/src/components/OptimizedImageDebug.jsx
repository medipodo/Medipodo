import React from 'react';

/**
 * Debug OptimizedImage - Test için
 * Console'da ne yüklendiğini gösterir
 */
const OptimizedImageDebug = ({ src, alt, className, ...props }) => {
  const getWebPSource = (jpgSrc) => {
    if (!jpgSrc || typeof jpgSrc !== 'string') return null;
    if (jpgSrc.endsWith('.jpg')) {
      return jpgSrc.replace('.jpg', '.webp');
    }
    return null;
  };

  const webpSrc = getWebPSource(src);

  // Debug log
  React.useEffect(() => {
    console.log('🖼️ OptimizedImage:', {
      original: src,
      webp: webpSrc,
      hasWebP: !!webpSrc
    });
  }, [src, webpSrc]);

  const handleLoad = (e) => {
    console.log('✅ Yüklenen görsel:', e.target.currentSrc);
  };

  return (
    <picture>
      {webpSrc && (
        <source srcSet={webpSrc} type="image/webp" />
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        onLoad={handleLoad}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImageDebug;
