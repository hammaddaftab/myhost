import type { AppStrings } from './dev_strings.ts';

// Leaves become T | null; structure stays required and identical down to leaves.
export type Nullify<T> =
  T extends readonly [infer Head, ...infer Tail] ? [Nullify<Head>, ...Nullify<Tail>] :
  T extends readonly (infer U)[] ? Nullify<U>[] :
  T extends object ? { [K in keyof T]: Nullify<T[K]> } :
  T | null;

// Strip the leading key from a union of dotted paths.
export type Sub<P extends string, K extends string> =
  P extends `${K}.${infer R}` ? R : never;

// Include ONLY the subtrees named in P; exclude all existing/non-pending keys.
export type Pending<T, P extends string> = {
  [K in keyof T as K extends P
    ? K
    : [Sub<P, K & string>] extends [never]
      ? never
      : K]: K extends P
    ? Nullify<T[K]>
    : Pending<T[K], Sub<P, K & string>>;
};

export type RequiredProdPaths =
  | 'platformBar.channels'
  | 'pricing.plans'
  | 'socialProof.caseStudies'
  | 'socialProof.testimonials'
  | 'aboutTrust.companyHistory'
  | 'aboutTrust.founderBiography'
  | 'aboutTrust.partnerLogoList'
  | 'resources.posts'
  | 'faq.items'
  | 'bookingContact.channels.phoneNumber'
  | 'bookingContact.channels.phoneTel'
  | 'bookingContact.channels.whatsAppLink'
  | 'bookingContact.channels.calendarWidgetProvider'
  | 'bookingContact.channels.operationalEmail'
  | 'bookingContact.channels.emailMailto'
  | 'footer.phoneNumber'
  | 'footer.phoneTel'
  | 'footer.operationalEmail'
  | 'footer.emailMailto';

export type RequiredProdStrings = Pending<AppStrings, RequiredProdPaths>;

export const prodStrings = {
  "platformBar": {
    "channels": [
      {
        "name": null,
        "badge": null
      },
      {
        "name": null,
        "badge": null
      },
      {
        "name": null,
        "badge": null
      }
    ]
  },
  "pricing": {
    "plans": [
      {
        "id": null,
        "name": null,
        "tagline": null,
        "priceMonthly": null,
        "priceAnnual": null,
        "percentageRate": null,
        "description": null,
        "features": [
          null,
          null,
          null,
          null,
          null
        ],
        "ctaText": null,
        "popular": null
      },
      {
        "id": null,
        "name": null,
        "tagline": null,
        "priceMonthly": null,
        "priceAnnual": null,
        "percentageRate": null,
        "description": null,
        "features": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "ctaText": null,
        "popular": null
      },
      {
        "id": null,
        "name": null,
        "tagline": null,
        "priceMonthly": null,
        "priceAnnual": null,
        "percentageRate": null,
        "description": null,
        "features": [
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "ctaText": null,
        "popular": null
      }
    ]
  },
  "socialProof": {
    "caseStudies": [
      {
        "id": null,
        "tag": null,
        "title": null,
        "platform": null,
        "duration": null,
        "metricHighlight": null,
        "metricLabel": null,
        "summary": null,
        "challenge": null,
        "solution": null,
        "result": null
      },
      {
        "id": null,
        "tag": null,
        "title": null,
        "platform": null,
        "duration": null,
        "metricHighlight": null,
        "metricLabel": null,
        "summary": null,
        "challenge": null,
        "solution": null,
        "result": null
      }
    ],
    "testimonials": [
      {
        "id": null,
        "author": null,
        "role": null,
        "location": null,
        "avatar": null,
        "quote": null,
        "rating": null,
        "stats": [
          {
            "label": null,
            "value": null,
            "before": null,
            "after": null
          },
          {
            "label": null,
            "value": null,
            "before": null,
            "after": null
          },
          {
            "label": null,
            "value": null,
            "before": null,
            "after": null
          }
        ]
      },
      {
        "id": null,
        "author": null,
        "role": null,
        "location": null,
        "avatar": null,
        "quote": null,
        "rating": null,
        "stats": [
          {
            "label": null,
            "value": null,
            "before": null,
            "after": null
          },
          {
            "label": null,
            "value": null,
            "before": null,
            "after": null
          },
          {
            "label": null,
            "value": null,
            "before": null,
            "after": null
          }
        ]
      },
      {
        "id": null,
        "author": null,
        "role": null,
        "location": null,
        "avatar": null,
        "quote": null,
        "rating": null,
        "stats": [
          {
            "label": null,
            "value": null,
            "before": null,
            "after": null
          },
          {
            "label": null,
            "value": null,
            "before": null,
            "after": null
          },
          {
            "label": null,
            "value": null,
            "before": null,
            "after": null
          }
        ]
      }
    ]
  },
  "aboutTrust": {
    "companyHistory": null,
    "founderBiography": null,
    "partnerLogoList": [
      {
        "name": null,
        "label": null,
        "metric": null
      },
      {
        "name": null,
        "label": null,
        "metric": null
      },
      {
        "name": null,
        "label": null,
        "metric": null
      },
      {
        "name": null,
        "label": null,
        "metric": null
      },
      {
        "name": null,
        "label": null,
        "metric": null
      },
      {
        "name": null,
        "label": null,
        "metric": null
      }
    ]
  },
  "resources": {
    "posts": [
      {
        "id": null,
        "title": null,
        "category": null,
        "readTime": null,
        "date": null,
        "excerpt": null,
        "markdownContent": null,
        "tags": [
          null,
          null,
          null
        ],
        "highlights": [
          null,
          null,
          null
        ]
      },
      {
        "id": null,
        "title": null,
        "category": null,
        "readTime": null,
        "date": null,
        "excerpt": null,
        "markdownContent": null,
        "tags": [
          null,
          null,
          null
        ],
        "highlights": [
          null,
          null,
          null
        ]
      },
      {
        "id": null,
        "title": null,
        "category": null,
        "readTime": null,
        "date": null,
        "excerpt": null,
        "markdownContent": null,
        "tags": [
          null,
          null,
          null
        ],
        "highlights": [
          null,
          null,
          null
        ]
      }
    ]
  },
  "faq": {
    "items": [
      {
        "id": null,
        "category": null,
        "question": null,
        "answer": null
      },
      {
        "id": null,
        "category": null,
        "question": null,
        "answer": null
      },
      {
        "id": null,
        "category": null,
        "question": null,
        "answer": null
      },
      {
        "id": null,
        "category": null,
        "question": null,
        "answer": null
      },
      {
        "id": null,
        "category": null,
        "question": null,
        "answer": null
      },
      {
        "id": null,
        "category": null,
        "question": null,
        "answer": null
      },
      {
        "id": null,
        "category": null,
        "question": null,
        "answer": null
      }
    ]
  },
  "bookingContact": {
    "channels": {
      "phoneNumber": null,
      "phoneTel": null,
      "whatsAppLink": null,
      "calendarWidgetProvider": null,
      "operationalEmail": null,
      "emailMailto": null
    }
  },
  "footer": {
    "phoneNumber": null,
    "phoneTel": null,
    "operationalEmail": null,
    "emailMailto": null
  }
} satisfies RequiredProdStrings;
