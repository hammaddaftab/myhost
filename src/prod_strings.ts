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
  | 'hero.metrics'
  | 'platformBar.bookingChannels'
  | 'platformBar.operationsTools'
  | 'pricing.plans'
  | 'socialProof.caseStudies'
  | 'socialProof.testimonials'
  | 'aboutTrust.companyHistory'
  | 'aboutTrust.credentials'
  | 'faq.items'
  | 'bookingContact.channels.phoneNumber'
  | 'bookingContact.channels.whatsApp'
  | 'bookingContact.channels.calendarWidgetProvider'
  | 'bookingContact.channels.operationalEmail'
  | 'footer.phoneNumber'
  | 'footer.operationalEmail';

export type RequiredProdStrings = Pending<AppStrings, RequiredProdPaths>;

export const prodStrings = {
  "hero": {
    "metrics": [
      {
        "value": null,
        "label": null
      },
      {
        "value": null,
        "label": null
      },
      {
        "value": null,
        "label": null
      },
      {
        "value": null,
        "label": null
      }
    ]
  },
  "platformBar": {
    "bookingChannels": [
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
    ],
    "operationsTools": [
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
    "credentials": [
      {
        "title": null,
        "description": null
      },
      {
        "title": null,
        "description": null
      },
      {
        "title": null,
        "description": null
      },
      {
        "title": null,
        "description": null
      }
    ]
  },
  "faq": {
    "items": [
      {
        "id": "faq-1",
        "category": "General",
        "question": "Do you work with multiple platforms?",
        "answer": null
      },
      {
        "id": "faq-2",
        "category": "Reviews",
        "question": "How does review removal work / what's your success rate?",
        "answer": null
      },
      {
        "id": "faq-3",
        "category": "General",
        "question": "Do I keep control of my listing?",
        "answer": null
      },
      {
        "id": "faq-4",
        "category": "Operations",
        "question": "What happens after the free consultation?",
        "answer": null
      },
      {
        "id": "faq-5",
        "category": "Pricing",
        "question": "What are the exact terms of the Free-First-5 offer?",
        "answer": null
      },
      {
        "id": "faq-6",
        "category": "Pricing",
        "question": "Are there long-term contracts or cancellation penalties?",
        "answer": null
      },
      {
        "id": "faq-7",
        "category": "Operations",
        "question": "How do you coordinate with my local cleaners and maintenance team?",
        "answer": null
      }
    ]
  },
  "bookingContact": {
    "channels": {
      "phoneNumber": null,
      "whatsApp": {
        "phone": null,
        "text": null
      },
      "calendarWidgetProvider": null,
      "operationalEmail": null
    }
  },
  "footer": {
    "phoneNumber": null,
    "operationalEmail": null
  }
} satisfies RequiredProdStrings;
