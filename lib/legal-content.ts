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

export const privacyPolicy: LegalDocument = {
  title: 'Privacy Policy',
  lastUpdated: '18 June 2026',
  intro: [
    'This policy explains how Capable Mind collects, uses, and protects your personal data when you use Steady.',
  ],
  sections: [
    {
      title: '1. Who we are',
      paragraphs: [
        'Steady is provided by Capable Mind, operating as a sole trader business based in the United Kingdom.',
        'Data controller: Rebecca Allinson, trading as Capable Mind.',
        'Contact: support@capablemind.app.',
        'If you have any questions about this policy or how your data is handled, please contact us at the email address above.',
      ],
    },
    {
      title: '2. Where we are in our compliance journey',
      paragraphs: [
        'We want to be transparent with you. Steady is currently in an early testing phase with a small number of users before a wider public launch. We take data protection seriously and have built this policy to reflect exactly what we collect and why.',
        'We have not yet completed registration with the Information Commissioner\'s Office (ICO), the UK\'s data protection regulator. We intend to complete this registration before Steady is made available more widely. This does not affect your rights under UK GDPR, which apply regardless of our registration status, and we are committed to meeting our obligations under that law throughout this testing period and beyond.',
      ],
    },
    {
      title: '3. What data we collect',
      paragraphs: [
        'We collect the following categories of personal data:',
        'We only collect what is needed to provide the features you use. We do not ask for or store more health information than is necessary for the app\'s planning and pattern-noticing features to work.',
      ],
      bullets: [
        'Account information: your email address, and optionally your name.',
        'Health-related information (special category data): this includes whether you have ADHD, your menopause or perimenopause and HRT status, your menstrual cycle status if relevant, and the symptoms, capacity levels, and sleep ratings you log each day.',
        'Daily usage data: the tasks, notes, and reflections you create within the app, including items in Today, Basics, Non-Negotiables, Later, Ideas, and the Worry jar.',
        'Device and notification data: a push notification subscription identifier, if you enable notifications, so we can send you reminders you have asked for.',
        'Technical data: basic information about how you use the app, to help us understand and fix problems.',
      ],
    },
    {
      title: '4. Why we collect this data, and our legal basis',
      paragraphs: [
        'For your account information, we process this data under Article 6(1)(b) UK GDPR because it is necessary to provide you with the app and the service you have signed up for.',
        'For health-related information, this is special category data under Article 9 UK GDPR. We process this data on the basis of your explicit consent under Article 9(2)(a). You are asked to give this consent clearly and separately during onboarding before health-related data is collected.',
        'You may withdraw this consent at any time through the app\'s settings or by contacting us. If you withdraw consent, we will stop processing new health-related data going forward. Because Steady\'s core features depend on this data, withdrawing consent will mean the app can no longer provide these personalised features, though your account and any non-health data may remain usable where practical.',
        'We use your data to:',
      ],
      bullets: [
        'Provide the daily planning features you use, including your capacity check-in, task lists, and reminders.',
        'Show you patterns in your own data over time, such as the symptom and sleep trends visible in the Patterns screen.',
        'Send you the notifications you have specifically asked for, including morning and evening nudges and any task reminders you set.',
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
        'We use a small number of trusted service providers to run Steady. These providers only process your data to help us deliver the app, under contractual obligations to protect it:',
        'We do not sell your personal data to any third party. We do not share your health-related data with advertisers.',
      ],
      bullets: [
        'Supabase — our database, authentication, and backend infrastructure provider, which stores your account and app data securely and supports sign-in.',
        'Web push providers through your browser — used only if you enable notifications, so reminders can be delivered to your device.',
      ],
    },
    {
      title: '7. Where your data is stored',
      paragraphs: [
        'Our service providers may store data in the UK, the European Economic Area, or other locations with appropriate data protection safeguards in place, such as Standard Contractual Clauses, where data is transferred outside the UK or EEA.',
      ],
    },
    {
      title: '8. How long we keep your data',
      paragraphs: [
        'We keep your account and health-related data for as long as your account remains active.',
        'If you delete your account, we will delete or anonymise your personal data, including health-related data, within 90 days, except where we are required to retain certain records for longer to meet a legal obligation.',
        'You can request deletion of your account and data at any time through the app\'s settings or by contacting us at support@capablemind.app.',
      ],
    },
    {
      title: '9. Your rights',
      paragraphs: [
        'Under UK GDPR, you have the right to:',
        'To exercise any of these rights, please contact us at support@capablemind.app.',
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
        'We may update this policy from time to time, particularly as Steady moves from testing into wider availability and as we complete our ICO registration. We will let you know of any significant changes through the app or by email.',
      ],
    },
    {
      title: '13. Contact us',
      paragraphs: [
        'If you have any questions, concerns, or requests relating to your data or this policy, please contact us at support@capablemind.app.',
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
        'You are responsible for keeping your account secure and for any activity that happens under your account. Please contact us immediately at support@capablemind.app if you believe your account has been accessed without your permission.',
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
        'If you have questions about a payment or wish to request a refund, please contact us at support@capablemind.app.',
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
        'You may stop using Steady and delete your account at any time through the app\'s settings or by contacting us at support@capablemind.app. We may suspend or end your access if you breach these terms.',
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
        'If you have any questions about these terms, please contact us at support@capablemind.app.',
      ],
    },
  ],
}
