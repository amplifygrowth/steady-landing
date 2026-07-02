export type LegalSection = {
  title: string
  paragraphs?: string[]
  bullets?: string[]
}

export type LegalDocument = {
  title: string
  lastUpdated: string
  intro: string[]
  sections: LegalSection[]
}

// Recorded against each consent row so we always know which version of the
// Terms / Privacy Policy a user agreed to. Bump this whenever the legal
// documents change in a way that affects what users consented to.
export const CONSENT_VERSION = '1.1'

export const privacyPolicy: LegalDocument = {
  title: 'Privacy Policy',
  lastUpdated: 'July 2026',
  intro: [
    'This policy explains how Capable Mind collects, uses, and protects your personal data when you use Steady.',
  ],
  sections: [
    {
      title: '1. Who we are',
      paragraphs: [
        'Steady is provided by Capable Mind, operating as a sole trader business based in the United Kingdom.',
        'Data controller: Rebecca Allinson, trading as Capable Mind.',
        'ICO registration number: ZC183559',
        'Contact: hello@capablemind.app',
      ],
    },
    {
      title: '2. Our commitment to your data',
      paragraphs: [
        'Steady is a new product and we are committed to transparency about how your data is handled as it grows. We take data protection seriously and have built this policy to reflect exactly what we collect and why.',
        'We are registered with the Information Commissioner\'s Office (ICO), the UK\'s data protection regulator, as a data controller.',
      ],
    },
    {
      title: '3. What data we collect',
      paragraphs: [
        'We only collect what is needed to provide the features you use. We do not ask for or store more information than is necessary for the app\'s planning and pattern-noticing features to work.',
      ],
      bullets: [
        'Account information: your email address, and optionally your name.',
        'Health-related information (special category data): this includes whether you have ADHD or autism, your menopause or perimenopause and HRT status, your menstrual cycle status if relevant, and the symptoms, capacity levels, and sleep ratings you log each day.',
        'Daily usage data: the tasks, notes, and reflections you create within the app, including items in Today, Basics, Non-Negotiables, Later, Ideas, and the Worry jar.',
        'Device and notification data: a push notification subscription identifier, if you enable notifications, so we can send you reminders you have asked for.',
        'Technical data: limited usage information about how you use the app, linked to a random account identifier rather than your name or email, to help us understand and improve it. This is pseudonymous personal data. No health-related data, task content, or free-text entries are ever included in this data.',
        'Error and diagnostic data: if something goes wrong in the app, basic technical details about the error (such as the browser type and the screen where it happened) are sent to our error monitoring service so we can fix it. This never includes your health data, tasks, or notes.',
      ],
    },
    {
      title: '4. Why we collect this data, and our legal basis',
      paragraphs: [
        'For your account information, we process this data under Article 6(1)(b) UK GDPR because it is necessary to provide you with the app and the service you have signed up for.',
        'For health-related information, this is special category data under Article 9 UK GDPR. We process this data on the basis of your explicit consent under Article 9(2)(a). You are asked to give this consent clearly and separately during onboarding before health-related data is collected.',
        'You may withdraw this consent at any time by emailing us at hello@capablemind.app, or by deleting your account in the app\'s settings, which removes your data entirely. If you withdraw consent, we will stop processing new health-related data going forward. Because Steady\'s core features depend on this data, withdrawing consent will mean the app can no longer provide these personalised features, though your account and any non-health data may remain usable where practical.',
        'For product analytics and advertising measurement, we only collect data after you accept cookies via our cookie banner, and we rely on that consent as the basis for processing. Analytics data is linked to a random account identifier, not your name or email, and no health-related data, task content, or free-text entries are ever included in it. You can withdraw this consent at any time from Cookie preferences in the app\'s settings.',
        'We use your data to:',
      ],
      bullets: [
        'Provide the daily planning features you use, including your capacity check-in, task lists, and reminders.',
        'Show you patterns in your own data over time, such as the symptom and sleep trends visible in the Patterns screen.',
        'Send you the notifications you have specifically asked for, including morning, midday, and evening nudges.',
        'Maintain and improve the app, and fix problems when they occur.',
      ],
    },
    {
      title: '5. Important note: Steady is not a medical product',
      paragraphs: [
        'Steady is a self-help planning and pattern-noticing tool. It is not a medical device, and it does not diagnose, treat, monitor, or give advice about any medical condition. Any patterns or comparisons shown in the app are based only on what you have self-reported, and are descriptive, not clinical or diagnostic.',
        'Always speak to your GP or a qualified clinician about any health symptoms, concerns, or treatment decisions.',
      ],
    },
    {
      title: '6. Who we share your data with',
      paragraphs: [
        'We use a small number of trusted service providers to run Steady. These providers only process your data to help us deliver the app, under contractual obligations to protect it.',
        'We do not sell your personal data to any third party. We do not share your health-related data with advertisers.',
      ],
      bullets: [
        'Supabase: our database, authentication, and backend infrastructure provider, which stores your account and app data securely and handles sign-in.',
        'Netlify: our hosting provider, which serves the Steady app and website to your browser.',
        'Anthropic: AI processing provider. When you use the task simplification feature, the text of your task is sent to Anthropic to generate suggestions. Task text may contain personal information. No health-related data from your check-ins or profile is sent to Anthropic.',
        'Resend: transactional email delivery, used to send you the one-time sign-in code when you log in to Steady.',
        'Klaviyo: email communications platform, used to send you updates and information about Steady if you have opted in to marketing emails.',
        'PostHog: product analytics, hosted within the European Union. PostHog helps us understand how the app is used so we can improve it. It only runs if you accept cookies. No health-related data, task content, or free-text entries are ever sent to PostHog.',
        'Google (Google Tag Manager and Google Analytics): used to understand how people find Steady and move through key flows such as signing up. These only run if you accept cookies.',
        'Meta (Meta Pixel): used to measure whether our adverts are helping people find Steady. The Meta Pixel only runs on our public landing and sign-in pages, only if you accept cookies, and never inside the app itself. Meta never receives any of the information you log in Steady.',
        'Sentry: error monitoring, used to detect and fix problems in the app. Sentry receives technical error details only, never your health data, tasks, or notes.',
        'Zoho: email hosting for our contact address at hello@capablemind.app.',
        'Web push providers through your browser: used only if you enable notifications, so reminders can be delivered to your device.',
      ],
    },
    {
      title: '7. Where your data is stored',
      paragraphs: [
        'Our service providers may store data in the UK, the European Economic Area, or other locations with appropriate data protection safeguards in place, such as Standard Contractual Clauses, where data is transferred outside the UK or EEA.',
        'PostHog analytics data is hosted within the European Union.',
      ],
    },
    {
      title: '8. How long we keep your data',
      paragraphs: [
        'We keep your account and health-related data for as long as your account remains active.',
        'If you delete your account, we will delete or anonymise your personal data, including health-related data, within 90 days, except where we are required to retain certain records for longer to meet a legal obligation.',
        'You can request deletion of your account and data at any time through the app\'s settings or by contacting us at hello@capablemind.app.',
      ],
    },
    {
      title: '9. Your rights',
      paragraphs: [
        'Under UK GDPR, you have the right to:',
        'To exercise any of these rights, please contact us at hello@capablemind.app.',
      ],
      bullets: [
        'Access the personal data we hold about you.',
        'Correct inaccurate data.',
        'Request deletion of your data.',
        'Withdraw consent for special category data processing at any time.',
        'Object to or restrict certain processing.',
        'Request a copy of your data in a portable format.',
        'Make a complaint to the Information Commissioner\'s Office if you believe your data has not been handled correctly.',
      ],
    },
    {
      title: '10. Security',
      paragraphs: [
        'We take reasonable technical and organisational measures to protect your data, including secure database access controls, encrypted connections, and limiting access to your data to what is necessary to provide the service.',
      ],
    },
    {
      title: '11. Children',
      paragraphs: [
        'Steady is intended for adults. We do not knowingly collect data from anyone under the age of 18. If you believe a child has provided us with personal data, please contact us so we can remove it.',
      ],
    },
    {
      title: '12. Changes to this policy',
      paragraphs: [
        'We may update this policy from time to time as Steady develops. We will let you know of any significant changes through the app or by email.',
      ],
    },
    {
      title: '13. Contact us',
      paragraphs: [
        'If you have any questions, concerns, or requests relating to your data or this policy, please contact us at hello@capablemind.app.',
      ],
    },
  ],
}

export const refundPolicy: LegalDocument = {
  title: 'Refund Policy',
  lastUpdated: 'July 2026',
  intro: [],
  sections: [
    {
      title: 'Steady is currently free',
      paragraphs: [
        'Steady is currently free to use for our early users while we grow and gather feedback. No payment is taken, so no refunds apply at this stage.',
        'This policy explains how refunds will work when paid plans launch. We will let you know clearly, in advance, before anything becomes chargeable — you will never be charged without actively choosing a paid plan.',
      ],
    },
    {
      title: 'Our refund policy for paid plans',
      paragraphs: [
        'When paid plans launch, we will offer a 14-day refund period from the date of purchase. If Steady is not right for you, contact us within 14 days at hello@capablemind.app and we will issue a full refund, no questions asked.',
        'After 14 days, refunds will be at our discretion, except where your statutory rights apply.',
      ],
    },
    {
      title: 'How to request a refund',
      paragraphs: [
        'Email hello@capablemind.app with the subject line "Refund request" and include the email address you used to sign up. We aim to respond within 2 working days and process all approved refunds within 5 to 10 working days.',
      ],
    },
    {
      title: 'Your statutory rights',
      paragraphs: [
        'Nothing in this policy affects your statutory rights under UK consumer law. Under the Consumer Contracts Regulations 2013, you have the right to cancel a digital service within 14 days of purchase unless you have already started using it and agreed to waive this right at the point of purchase.',
      ],
    },
    {
      title: 'Questions',
      paragraphs: [
        'If you have any questions about refunds, contact us at hello@capablemind.app.',
      ],
    },
  ],
}

export const cookiePolicy: LegalDocument = {
  title: 'Cookie Policy',
  lastUpdated: 'July 2026',
  intro: [],
  sections: [
    {
      title: 'What are cookies?',
      paragraphs: [
        'Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and understand how people use them.',
      ],
    },
    {
      title: 'What cookies does Steady use?',
      paragraphs: [
        'We use a small number of cookies and similar browser storage technologies to understand how people find and use the Steady website and app, so we can keep improving them.',
        'No analytics or advertising technology loads at all until you accept cookies via our banner. If you decline, none of the services below are loaded and nothing is sent to them.',
        'If you accept, we use:',
        'Google Analytics, via Google Tag Manager, to understand how visitors find our site and how people move through key app flows. This helps us improve Steady and make it easier to find for the people who need it. Google Analytics sets cookies that collect limited information about your visit and usage.',
        'Meta Pixel, to understand whether our adverts are helping people find and sign up for Steady. The Meta Pixel only runs on our public landing and sign-in pages — it never loads inside the app itself.',
        'PostHog, to understand high-level product usage in the app. We do not send health-related data, task content, notes, symptoms, scores, or free-text entries to PostHog.',
        'A local consent preference, stored in your browser, so we can remember whether you accepted or declined non-essential cookies. This is stored whether you accept or decline, so we don\'t keep asking.',
      ],
    },
    {
      title: 'What we do not do',
      bullets: [
        'We do not sell your data to third parties.',
        'We do not use cookies to build advertising profiles without your consent.',
        'We do not include health-related data, task content, notes, symptoms, scores, or free-text entries in analytics or advertising events.',
        'We do not load any advertising technology inside the app itself, even with consent.',
      ],
    },
    {
      title: 'Your choices',
      paragraphs: [
        'When you first visit the Steady website or app you will see a cookie banner. You can accept or decline non-essential cookies. If you decline, only the local storage required for the service to function will be used and no analytics or advertising events will be sent.',
        'You can change your mind at any time from Cookie preferences in the app\'s settings (the Yours tab), or by clearing your browser cookies and local storage, after which the banner will appear again.',
      ],
    },
    {
      title: 'Contact',
      paragraphs: [
        'If you have questions about how we use cookies, contact us at hello@capablemind.app.',
      ],
    },
  ],
}

export const termsOfService: LegalDocument = {
  title: 'Terms of Service',
  lastUpdated: '18 June 2026',
  intro: [
    'Please read these terms carefully before using Steady. By creating an account or using the app, you agree to these terms.',
  ],
  sections: [
    {
      title: '1. About Steady',
      paragraphs: [
        'Steady is provided by Capable Mind, a sole trader business based in the United Kingdom. Steady is a daily planning app designed to help you plan your day around your actual capacity, particularly if you experience fluctuating energy or focus due to perimenopause, menopause, ADHD, burnout, or similar.',
        'Steady is currently in an early testing phase. Features, pricing, and availability may change as we develop the product based on feedback.',
      ],
    },
    {
      title: '2. Not a medical product',
      paragraphs: [
        'Steady is a self-help and planning tool. It is not a medical device and does not provide medical advice, diagnosis, or treatment. Any patterns, comparisons, or insights shown in the app are based solely on information you have chosen to log yourself, and are descriptive in nature, not clinical conclusions.',
        'Always consult your GP or a qualified clinician about any health symptoms, concerns, medication, or treatment decisions. Do not rely on Steady as a substitute for professional medical advice.',
      ],
    },
    {
      title: '3. Eligibility',
      paragraphs: [
        'You must be 18 years or older to use Steady. By using the app, you confirm that you meet this requirement.',
      ],
    },
    {
      title: '4. Your account',
      paragraphs: [
        'You are responsible for keeping your account secure and for any activity that happens under your account. Please contact us immediately at hello@capablemind.app if you believe your account has been accessed without your permission.',
      ],
    },
    {
      title: '5. Your content',
      paragraphs: [
        'You retain ownership of the information you enter into Steady, including your tasks, notes, and health-related logs. You give us permission to store and process this information solely for the purpose of providing the app\'s features to you, as described in our Privacy Policy.',
      ],
    },
    {
      title: '6. Acceptable use',
      paragraphs: ['You agree not to:'],
      bullets: [
        'Use Steady for any unlawful purpose.',
        'Attempt to access another user\'s account or data without permission.',
        'Attempt to interfere with, disrupt, or reverse engineer the app or its underlying systems.',
      ],
    },
    {
      title: '7. Subscriptions and payment',
      paragraphs: [
        'Where Steady offers a paid plan, the price and billing terms will be made clear to you before you pay. Payments are processed securely by Stripe or another clearly named payment provider. We do not store your full payment card details.',
        'If you have questions about a payment or wish to request a refund, please contact us at hello@capablemind.app.',
      ],
    },
    {
      title: '8. Availability and changes',
      paragraphs: [
        'We aim to keep Steady available and working well, but we do not guarantee uninterrupted access. We may update, change, or discontinue features at any time, particularly during this early testing phase, and we will try to let you know of any significant changes in advance where practical.',
      ],
    },
    {
      title: '9. Limitation of liability',
      paragraphs: [
        'Steady is provided on an “as is” basis. To the extent permitted by law, we are not liable for any indirect or consequential loss arising from your use of the app. Nothing in these terms limits our liability for matters which cannot legally be limited, including death or personal injury caused by our negligence.',
      ],
    },
    {
      title: '10. Ending your account',
      paragraphs: [
        'You may stop using Steady and delete your account at any time through the app\'s settings or by contacting us at hello@capablemind.app. We may suspend or end your access if you breach these terms.',
      ],
    },
    {
      title: '11. Changes to these terms',
      paragraphs: [
        'We may update these terms from time to time. If we make significant changes, we will let you know through the app or by email.',
      ],
    },
    {
      title: '12. Governing law',
      paragraphs: [
        'These terms are governed by the laws of England and Wales.',
      ],
    },
    {
      title: '13. Contact us',
      paragraphs: [
        'If you have any questions about these terms, please contact us at hello@capablemind.app.',
      ],
    },
  ],
}
