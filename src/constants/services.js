export const services = [
  {
    id: 'bookkeeping',
    number: '01',
    iconName: 'BookOpen',
    title: 'Bookkeeping',
    tagline: 'Accurate records. Always.',
    description:
      'We manage your complete bookkeeping lifecycle across QuickBooks, Xero, and Excel — keeping your financials clean, current, and audit-ready. No more end-of-year scrambles or messy ledgers.',
    bullets: [
      'Monthly reconciliation and ledger maintenance',
      'Chart of accounts setup and optimization',
      'Accounts payable & receivable management',
      'Cloud-based access via QuickBooks Online or Xero',
      'Year-end cleanup and tax-ready file preparation',
    ],
    tools: ['QuickBooks', 'Xero', 'Microsoft Excel'],
  },
  {
    id: 'financial-reporting',
    number: '02',
    iconName: 'BarChart3',
    title: 'Financial Reporting',
    tagline: 'Insights that drive decisions.',
    description:
      'Transform raw numbers into actionable intelligence. We deliver timely, professional financial statements and custom dashboards so you can make confident business decisions every month.',
    bullets: [
      'Monthly profit & loss statements',
      'Balance sheet and cash flow reports',
      'Custom KPI dashboards tailored to your industry',
      'Variance analysis and budget-vs-actual reporting',
      'Investor-ready financial packages',
    ],
    tools: ['QuickBooks', 'Xero', 'Excel', 'Google Sheets'],
  },
  {
    id: 'payroll',
    number: '03',
    iconName: 'Users',
    title: 'Payroll Management',
    tagline: 'Pay your team. On time. Every time.',
    description:
      'Eliminate payroll stress with our fully managed payroll service. We handle calculations, filings, and compliance so you can focus on leading your team — not chasing deadlines.',
    bullets: [
      'Accurate weekly, bi-weekly, or monthly payroll processing',
      'Tax withholding, filings, and W-2/1099 preparation',
      'Direct deposit setup and management',
      'New hire onboarding and termination processing',
      'Compliance with federal, state, and local payroll regulations',
    ],
    tools: ['QuickBooks Payroll', 'Gusto', 'ADP'],
  },
  {
    id: 'reconciliation',
    number: '04',
    iconName: 'ArrowLeftRight',
    title: 'Bank & Cash Reconciliation',
    tagline: 'Every penny, accounted for.',
    description:
      'We reconcile all your bank, credit card, and merchant accounts monthly — catching errors, identifying fraud risks, and ensuring your books match your actual cash position down to the cent.',
    bullets: [
      'Monthly bank and credit card reconciliations',
      'Merchant account and payment processor matching',
      'Discrepancy identification and resolution',
      'Petty cash management and audit trails',
      'Real-time cash position monitoring',
    ],
    tools: ['QuickBooks', 'Xero', 'Bank APIs'],
  },
  {
    id: 'digital-presence',
    number: '05',
    iconName: 'Globe',
    title: 'Social Media, Website & LinkedIn',
    tagline: 'Your digital storefront, handled.',
    description:
      'We build and manage your professional digital presence — from a polished website to consistent LinkedIn activity and social media posts that attract ideal clients and establish authority in your market.',
    bullets: [
      'Professional website design, development, and maintenance',
      'LinkedIn profile optimization and content strategy',
      'Monthly social media content calendar and posting',
      'Brand identity consistency across all platforms',
      'Basic SEO setup and Google Business Profile management',
    ],
    tools: ['WordPress', 'Webflow', 'LinkedIn', 'Canva', 'Meta Business Suite'],
  },
]

export const stats = [
  { value: 200,  suffix: '+',  label: 'Clients Served',        icon: 'Users' },
  { value: 3,    suffix: '',   label: 'Countries Served',        icon: 'Globe' },
  { value: 50,   suffix: 'M+', label: 'Managed Annually ($)',   icon: 'TrendingUp', prefix: '$' },
  { value: 99,   suffix: '%',  label: 'Client Retention Rate',  icon: 'Star' },
]

export const testimonials = [
  {
    quote: "Vanguard completely transformed how I view my business finances. Their monthly reports are clear, and I finally feel in control of my cash flow.",
    author: "Sarah Mitchell",
    role: "Owner",
    company: "Mitchell Interior Design",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    quote: "Switching our bookkeeping to Vanguard was the best decision we made. They caught $12,000 in billing errors in the first month alone.",
    author: "James Okonkwo",
    role: "CEO",
    company: "PrimeBuild Construction",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=11",
  },
  {
    quote: "Their payroll management is flawless. We've never missed a payment or had a compliance issue since we handed it over to them.",
    author: "Priya Sharma",
    role: "Director of Operations",
    company: "TechForward Solutions",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=25",
  },
]
