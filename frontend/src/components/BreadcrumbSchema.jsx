import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * BreadcrumbSchema Component
 * Google için Breadcrumb yapılandırılmış verisi ekler
 * 
 * Kullanım:
 * <BreadcrumbSchema items={[
 *   { name: 'Ana Sayfa', url: 'https://medipodo.com/' },
 *   { name: 'Blog', url: 'https://medipodo.com/blog' },
 *   { name: 'Yazı Başlığı', url: 'https://medipodo.com/blog/yazi-slug' }
 * ]} />
 */
const BreadcrumbSchema = ({ items }) => {
  if (!items || items.length === 0) return null;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default BreadcrumbSchema;
