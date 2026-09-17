import React from "react";

export const JsonLd: React.FC = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EducationalOrganization"],
    "name": "HY-TECH Computer Education & Online Hub",
    "alternateName": "HY-TECH Dharampur",
    "image": "https://hytechdharampur.com/logo.png",
    "logo": "https://hytechdharampur.com/logo.png",
    "url": "https://hytechdharampur.com",
    "telephone": "+917226030701",
    "email": "hytechcomputer53@gmail.com",
    "priceRange": "$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 05, First Floor, Rajmilan Complex, Old Jakatnaka",
      "addressLocality": "Dharampur",
      "addressRegion": "Gujarat",
      "postalCode": "396050",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 20.5398,
      "longitude": 73.1772
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://instagram.com/hy_tech_computer_education_"
    ],
    "founder": {
      "@type": "Person",
      "name": "Yagnik Gayakwad"
    },
    "description": "Leading digital online citizen service center and computer education hub in Dharampur, Gujarat. Offers Aadhaar card update, PAN card, Ayushman Bharat health card, Shree Vanraj College forms, CCC, and Tally Prime computer courses."
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "CourseList",
    "itemListElement": [
      {
        "@type": "Course",
        "name": "CCC (Course on Computer Concepts)",
        "description": "Government recognized basic computer literacy course for OJAS and Govt Jobs.",
        "provider": {
          "@type": "Organization",
          "name": "HY-TECH Computer Education & Online Hub"
        }
      },
      {
        "@type": "Course",
        "name": "Tally Prime with GST",
        "description": "Professional accounting software training with GST returns and invoicing.",
        "provider": {
          "@type": "Organization",
          "name": "HY-TECH Computer Education & Online Hub"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
    </>
  );
};
