import { Service } from '../types';

export const INITIAL_SERVICES: Service[] = [
  // SAAS DEVELOPMENT SERVICES
  {
    id: 'saas-srv-1',
    slug: 'custom-saas-platform-development',
    category: 'SaaS Development Services',
    title: 'Custom SaaS Platform Development',
    shortDesc: 'End-to-end custom Software-as-a-Service product design, multi-tenant architecture, modular engineering, and production-ready web application delivery.',
    featuresGrid: [
      { icon: 'Cpu', headline: 'Multi-Tenant Cloud Architecture', text: 'Secure tenant isolation, scalable database partitioning, and enterprise security.' },
      { icon: 'Layers', headline: 'Modular Scalable Stack', text: 'Modern frontend frameworks with robust microservices and serverless backend layers.' },
      { icon: 'Zap', headline: 'Rapid MVP to Scale', text: 'Fast-track engineering taking your SaaS idea from wireframe MVP to full market launch.' },
      { icon: 'ShieldCheck', headline: 'Enterprise Security & Compliance', text: 'Role-based access control (RBAC), end-to-end encryption, and GDPR compliance.' }
    ],
    fullDeepContent: `Transform your software idea into a market-ready, scalable multi-tenant SaaS application. We engineer custom web-based SaaS platforms built on high-performance frameworks with clean modular architecture, bulletproof database design, responsive frontend components, and robust security protocols.
    
    Whether launching a B2B productivity tool, consumer subscription platform, or niche workflow system, we deliver turn-key SaaS platforms built to scale smoothly.`,
    basePrice: 14999,
    featured: true,
    deliveryTime: '3-5 Days'
  },
  {
    id: 'saas-srv-2',
    slug: 'ai-saas-development',
    category: 'SaaS Development Services',
    title: 'AI SaaS Development',
    shortDesc: 'Next-generation AI-powered SaaS platforms integrating LLM models, custom prompts, automated agentic pipelines, and smart generative features.',
    featuresGrid: [
      { icon: 'Sparkles', headline: 'LLM & Generative Model Integration', text: 'Seamless API integration with Gemini, OpenAI, Claude, and open-source models.' },
      { icon: 'Bot', headline: 'Autonomous AI Workflows', text: 'Agentic AI pipelines that process text, images, code, and structured data automatically.' },
      { icon: 'Database', headline: 'RAG & Vector Search Systems', text: 'Vector database indexing (Pinecone, PGVector) for smart context-aware responses.' },
      { icon: 'BarChart3', headline: 'Token Usage & Rate Limits', text: 'Usage metering, token budgets, and cost tracking built directly into user plans.' }
    ],
    fullDeepContent: `Build intelligent, competitive AI SaaS products that deliver real value to users. We build AI-first web applications leveraging state-of-the-art AI models, custom prompt engineering, Retrieval-Augmented Generation (RAG), and agentic automation.
    
    Incorporate smart automated summaries, intelligent search, generative content engines, or automated copilots directly into your software product.`,
    basePrice: 18499,
    featured: true,
    deliveryTime: '3-5 Days'
  },
  {
    id: 'saas-srv-3',
    slug: 'saas-dashboard-development',
    category: 'SaaS Development Services',
    title: 'SaaS Dashboard Development',
    shortDesc: 'Interactive, real-time analytics dashboards with custom data visualizers, customizable widgets, filterable metrics, and responsive UI components.',
    featuresGrid: [
      { icon: 'BarChart3', headline: 'Real-Time Data Visualization', text: 'Interactive charts, metrics gauges, and live activity streams powered by D3/Recharts.' },
      { icon: 'LayoutGrid', headline: 'Customizable Modular Widgets', text: 'User-configurable drag-and-drop dashboard layouts and personal preference persistence.' },
      { icon: 'Download', headline: 'Data Export & Reporting', text: 'Instant PDF, CSV, and Excel report generation with customizable date ranges.' },
      { icon: 'CheckCircle2', headline: 'Responsive Touch UI', text: 'Flawless desktop and mobile rendering with high-contrast data legibility.' }
    ],
    fullDeepContent: `Empower your users with intuitive, high-performance web dashboards that turn raw application metrics into actionable business insights. Our custom SaaS dashboards feature real-time chart animations, dark/light themes, customizable layout grids, and instant data exports.
    
    Deliver a sleek, modern visual command center that keeps users engaged every day.`,
    basePrice: 7999,
    deliveryTime: '2-4 Days'
  },
  {
    id: 'saas-srv-4',
    slug: 'subscription-system',
    category: 'SaaS Development Services',
    title: 'Subscription System',
    shortDesc: 'Flexible tiered pricing, recurring billing, freemium access controls, plan upgrades, usage metering, and automated invoice management.',
    featuresGrid: [
      { icon: 'CreditCard', headline: 'Tiered Monthly & Annual Billing', text: 'Configure custom Starter, Pro, Enterprise, and custom usage-based subscription tiers.' },
      { icon: 'Lock', headline: 'Feature Gatekeeper Engine', text: 'Automated role-based permission checks locking premium features per subscription tier.' },
      { icon: 'RefreshCw', headline: 'Automated Renewal & Dunning', text: 'Automated retry logic for failed credit card payments and churn reduction emails.' },
      { icon: 'FileText', headline: 'Automated Invoicing & Receipts', text: 'Tax-compliant PDF invoice generation and billing history portal for end users.' }
    ],
    fullDeepContent: `Drive predictable Monthly Recurring Revenue (MRR) with robust subscription management software. We build flexible subscription architectures supporting monthly/annual billing, free trial periods, feature gating, seat-based billing, usage metering, and seamless tier upgrades.
    
    Ensure frictionless billing management for both your customers and your finance team.`,
    basePrice: 4499,
    featured: true,
    deliveryTime: '2-3 Days'
  },
  {
    id: 'saas-srv-5',
    slug: 'payment-integration',
    category: 'SaaS Development Services',
    title: 'Payment Integration',
    shortDesc: 'Secure international and local payment gateway integration including Stripe, Razorpay, PayPal, Lemon Squeezy, Paddle, and UPI.',
    featuresGrid: [
      { icon: 'CreditCard', headline: 'Global Gateway Connectors', text: 'Stripe, Razorpay, PayPal, Paddle, Lemon Squeezy, and regional payment methods.' },
      { icon: 'ShieldCheck', headline: 'PCI-DSS Compliant Security', text: 'Secure client-side tokenization preventing direct credit card data storage on your server.' },
      { icon: 'Globe', headline: 'Multi-Currency & Localized Checkout', text: 'Automatic currency conversion and localized payment options for global conversion.' },
      { icon: 'Zap', headline: 'Instant Webhook Handlers', text: 'Reliable payment event listeners for real-time order fulfillment and account updates.' }
    ],
    fullDeepContent: `Monetize your SaaS product worldwide with secure payment gateway integrations. We implement frictionless checkout flows with enterprise-grade PCI compliance, multi-currency support, tax calculation, refund workflows, and instant webhook synchronization.
    
    Provide your customers with a trusted, lightning-fast payment experience on any device.`,
    basePrice: 2499,
    featured: true,
    deliveryTime: '24-48 Hours'
  },
  {
    id: 'saas-srv-6',
    slug: 'user-authentication',
    category: 'SaaS Development Services',
    title: 'User Authentication',
    shortDesc: 'Enterprise-grade user auth systems with OAuth social logins (Google, GitHub), Magic Links, Multi-Factor Auth (MFA), and JWT session security.',
    featuresGrid: [
      { icon: 'Lock', headline: 'Multi-Method Sign-In', text: 'Passwordless Magic Links, Google/GitHub OAuth, and email/password authentication.' },
      { icon: 'ShieldCheck', headline: 'Two-Factor Authentication (2FA)', text: 'TOTP authenticator app support and SMS verification codes for high-security accounts.' },
      { icon: 'Users', headline: 'Team & Workspace Invites', text: 'Multi-user organizational workspaces with granular member roles and invitation links.' },
      { icon: 'Key', headline: 'Encrypted Session Management', text: 'Secure HTTP-only cookie tokens, session invalidation, and password reset flows.' }
    ],
    fullDeepContent: `Protect your SaaS application and user data with bulletproof authentication and access management. We engineer secure identity systems featuring OAuth 2.0 social logins, Two-Factor Authentication (2FA), team workspace management, role-based authorization, and encrypted session security.
    
    Give users complete confidence in account security from day one.`,
    basePrice: 1899,
    deliveryTime: '24-48 Hours'
  },
  {
    id: 'saas-srv-7',
    slug: 'admin-panel-development',
    category: 'SaaS Development Services',
    title: 'Admin Panel Development',
    shortDesc: 'Powerful centralized master administration portal to monitor platform usage, manage users, control subscriptions, inspect logs, and adjust settings.',
    featuresGrid: [
      { icon: 'Sliders', headline: 'Full Platform Control Center', text: 'Manage users, view active subscriptions, toggle feature flags, and process refunds.' },
      { icon: 'BarChart3', headline: 'MRR & Churn Analytics', text: 'Track Monthly Recurring Revenue (MRR), active users, customer churn, and LTV metrics.' },
      { icon: 'Users', headline: 'User Impersonation & Support', text: 'Secure admin switch-to-user mode for rapid customer support troubleshooting.' },
      { icon: 'FileText', headline: 'Audit Trail & Activity Logs', text: 'Comprehensive system activity logs and administrative permission history.' }
    ],
    fullDeepContent: `Take total operational command of your SaaS business with a custom master Admin Panel. Monitor platform analytics, view live user activity, manage account subscriptions, toggle global feature flags, override settings, and deliver instant customer support from a single dashboard.
    
    Streamline SaaS operations and manage growth with total visibility.`,
    basePrice: 999,
    featured: true,
    deliveryTime: '2-4 Days'
  },
  {
    id: 'saas-srv-8',
    slug: 'api-integration',
    category: 'SaaS Development Services',
    title: 'API Integration',
    shortDesc: 'Custom RESTful & GraphQL API development, third-party software integrations, automated webhooks, and public developer API documentation.',
    featuresGrid: [
      { icon: 'Workflow', headline: 'Third-Party API Connectors', text: 'Connect CRM, marketing, communication, cloud storage, and AI service APIs.' },
      { icon: 'Code', headline: 'RESTful & GraphQL Endpoints', text: 'High-speed backend API design with payload validation and rate-limiting protection.' },
      { icon: 'Zap', headline: 'Bi-Directional Webhooks', text: 'Real-time event broadcasting and incoming webhook receiver pipelines.' },
      { icon: 'FileText', headline: 'Interactive API Docs', text: 'Swagger/OpenAPI documentation enabling external developers to build on your platform.' }
    ],
    fullDeepContent: `Connect your SaaS application with essential external services or expose your own platform capabilities to third-party developers. We build high-throughput REST and GraphQL APIs, handle OAuth token exchanges, construct reliable webhook pipelines, and write clear developer documentation.
    
    Expand your product ecosystem and create seamless software integrations.`,
    basePrice: 3299,
    deliveryTime: '2-3 Days'
  },
  {
    id: 'saas-srv-9',
    slug: 'database-development',
    category: 'SaaS Development Services',
    title: 'Database Development',
    shortDesc: 'High-availability relational and NoSQL database modeling, schema migrations, query optimization, connection pooling, and automated backups.',
    featuresGrid: [
      { icon: 'Database', headline: 'Relational & NoSQL Schema Design', text: 'Optimized PostgreSQL, MySQL, Firestore, or MongoDB data structures for speed.' },
      { icon: 'Zap', headline: 'Query Performance Tuning', text: 'Database indexing, query execution optimization, and caching with Redis.' },
      { icon: 'ShieldCheck', headline: 'Automated Backup & Disaster Recovery', text: 'Scheduled automated backups with point-in-time restoration capabilities.' },
      { icon: 'RefreshCw', headline: 'Zero-Downtime Migrations', text: 'Safe schema migrations ensuring database updates without interrupting active users.' }
    ],
    fullDeepContent: `Build a solid data foundation that handles millions of queries with low latency. We design, optimize, and secure relational and NoSQL database architectures, implementing connection pooling, Redis caching, strict data integrity constraints, automated backups, and zero-downtime migrations.
    
    Ensure fast query response times even as your user base expands exponentially.`,
    basePrice: 2799,
    deliveryTime: '2-3 Days'
  },
  {
    id: 'saas-srv-10',
    slug: 'cloud-deployment',
    category: 'SaaS Development Services',
    title: 'Cloud Deployment',
    shortDesc: 'Production cloud infrastructure setup on AWS, GCP, Vercel, or Cloud Run with automated CI/CD pipelines, SSL certificates, and auto-scaling.',
    featuresGrid: [
      { icon: 'Cloud', headline: 'Production Cloud Hosting', text: 'Deployment setup on AWS, Google Cloud, Vercel, Cloud Run, or Docker containers.' },
      { icon: 'Zap', headline: 'Automated CI/CD Pipelines', text: 'GitHub Actions integration for zero-downtime automated testing and continuous deployment.' },
      { icon: 'Globe', headline: 'Global CDN & Custom Domain SSL', text: 'Edge caching via Cloudflare CDN and automatic HTTPS/SSL certificate renewal.' },
      { icon: 'TrendingUp', headline: 'Auto-Scaling Infrastructure', text: 'Elastic container scaling that handles sudden traffic spikes automatically.' }
    ],
    fullDeepContent: `Deploy your SaaS platform on world-class cloud infrastructure designed for 99.99% uptime and global low-latency access. We configure automated CI/CD deployment pipelines, containerized environments, global CDN caching, SSL security, and auto-scaling server configurations.
    
    Launch your SaaS with complete peace of mind knowing your servers are rock solid.`,
    basePrice: 1499,
    featured: true,
    deliveryTime: '24-48 Hours'
  },
  {
    id: 'saas-srv-11',
    slug: 'saas-maintenance-support',
    category: 'SaaS Development Services',
    title: 'SaaS Maintenance & Support',
    shortDesc: 'Continuous server monitoring, security patching, bug fixes, performance audits, feature enhancements, and 24/7 technical support.',
    featuresGrid: [
      { icon: 'ShieldCheck', headline: 'Proactive Security Patching', text: 'Regular dependency updates, vulnerability scanning, and security audits.' },
      { icon: 'Clock', headline: '24/7 Uptime Monitoring', text: 'Real-time server health checks and automated incident alerting systems.' },
      { icon: 'Zap', headline: 'Bug Fixing & Code Refactoring', text: 'Dedicated priority queue for resolving technical bugs and optimizing code.' },
      { icon: 'Sparkles', headline: 'Ongoing Feature Enhancements', text: 'Continuous feature iterations based on end-user feedback and analytics.' }
    ],
    fullDeepContent: `Ensure your SaaS platform remains fast, secure, and operational 24 hours a day, 365 days a year. Our ongoing maintenance and support services include proactive security updates, server performance monitoring, bug fixes, feature improvements, and direct technical consultation.
    
    Focus on growing your business while our software experts keep your app running smoothly.`,
    basePrice: 3999,
    deliveryTime: 'Ongoing'
  },
  // DIGITAL MARKETING SERVICES
  {
    id: 'dm-srv-1',
    slug: 'meta-ads',
    category: 'Digital Marketing Services',
    title: 'Meta Ads',
    shortDesc: 'Targeted Facebook & Instagram advertising campaigns engineered for low Cost-Per-Acquisition (CPA), high ROAS, custom pixel tracking, and lookalike audience scaling.',
    featuresGrid: [
      { icon: 'Target', headline: 'Precision Audience Targeting', text: 'Custom, lookalike, and interest-based audience segmentation for maximum ad relevance.' },
      { icon: 'BarChart3', headline: 'Pixel & CAPI Setup', text: 'Server-side Conversion API tracking to accurately measure sales despite iOS restrictions.' },
      { icon: 'Zap', headline: 'High-Converting Creative Testing', text: 'Systematic testing of video ads, carousels, and single images to identify winning hooks.' },
      { icon: 'TrendingUp', headline: 'ROAS Scaling Management', text: 'Continuous budget scaling and bid adjustments to maximize return on ad spend.' }
    ],
    fullDeepContent: `Scale your brand sales predictably with performance-driven Meta Ads campaigns across Facebook and Instagram. Our team handles complete campaign setup, Conversion API tracking, audience research, creative strategy, and daily ROAS optimization.

    Drive qualified traffic, generate high-intent leads, and scale revenue profitably.`,
    basePrice: 2499,
    featured: true,
    deliveryTime: '24-48 Hours'
  },
  {
    id: 'dm-srv-2',
    slug: 'google-ads',
    category: 'Digital Marketing Services',
    title: 'Google Ads',
    shortDesc: 'High-intent Google Search, Shopping, Performance Max, and Display ad campaigns driving instant qualified traffic, phone calls, and sales revenue.',
    featuresGrid: [
      { icon: 'Search', headline: 'High-Intent Search Campaigns', text: 'Target buyers actively searching for your specific products and services on Google.' },
      { icon: 'ShoppingBag', headline: 'Performance Max & Shopping', text: 'Automated cross-channel campaigns spanning YouTube, Display, Search, and Discover.' },
      { icon: 'ShieldCheck', headline: 'Negative Keyword Protection', text: 'Eliminate wasted spend by filtering out irrelevant search queries and competitor clutter.' },
      { icon: 'BarChart3', headline: 'Conversion Tracking Setup', text: 'Accurate tracking of phone calls, form submits, and e-commerce purchases.' }
    ],
    fullDeepContent: `Capture active buyer demand at the exact moment customers search for your business. Google Ads delivers unmatched intent-driven traffic that converts into phone calls, leads, and store transactions.

    We structure high-Quality Score campaigns designed to outrank competitors while keeping your Cost-Per-Click (CPC) low.`,
    basePrice: 2999,
    featured: true,
    deliveryTime: '24-48 Hours'
  },
  {
    id: 'dm-srv-3',
    slug: 'youtube-ads',
    category: 'Digital Marketing Services',
    title: 'YouTube Ads',
    shortDesc: 'In-stream video ad campaigns, skippable ads, and YouTube Shorts discovery ads capturing buyer attention and driving profitable video conversions.',
    featuresGrid: [
      { icon: 'Video', headline: 'In-Stream Skippable Ads', text: 'High-impact video ads that charge you only when viewers watch past 30 seconds.' },
      { icon: 'Target', headline: 'Custom Intent & Affinity Audiences', text: 'Target users based on what they search on Google and videos they watch.' },
      { icon: 'TrendingUp', headline: 'Direct Response Video Framework', text: 'Scripting and video editing tailored with strong call-to-actions.' },
      { icon: 'BarChart3', headline: 'View-Through Attribution', text: 'Track conversions from viewers who watch your ad and buy later.' }
    ],
    fullDeepContent: `Leverage the power of YouTube video advertising to build brand authority and generate high-volume leads. Our YouTube Ads service combines high-converting video scripts, audience targeting based on search history, and conversion tracking.

    Turn YouTube's massive video consumer base into a predictable pipeline of customers.`,
    basePrice: 3499,
    deliveryTime: '2-4 Days'
  },
  {
    id: 'dm-srv-4',
    slug: 'instagram-ads',
    category: 'Digital Marketing Services',
    title: 'Instagram Ads',
    shortDesc: 'High-converting Instagram Story, Reel, Feed, and Shop ad campaigns designed to capture immediate visual attention and drive impulse purchases.',
    featuresGrid: [
      { icon: 'Instagram', headline: 'Reels & Stories Native Formatting', text: 'Mobile-first 9:16 vertical video and graphic ads that blend seamlessly into feeds.' },
      { icon: 'Users', headline: 'Influencer Style Ad Creatives', text: 'UGC-style visuals that feel authentic and drive higher swipe-up and tap rates.' },
      { icon: 'ShoppingBag', headline: 'Instagram Shop Integration', text: 'Direct product tagging enabling frictionless checkout directly from ads.' },
      { icon: 'Zap', headline: 'Interactive Story Polls & Stickers', text: 'Engaging interactive elements that boost user participation and engagement.' }
    ],
    fullDeepContent: `Capture the vibrant visual audience on Instagram with targeted Reels and Stories ad campaigns. Instagram Ads are uniquely effective for lifestyle, e-commerce, beauty, coaching, and visual service brands.

    We create visual assets, write compelling ad copy, and optimize targeting to deliver exceptional ROI.`,
    basePrice: 1999,
    featured: true,
    deliveryTime: '24-48 Hours'
  },
  {
    id: 'dm-srv-5',
    slug: 'lead-generation',
    category: 'Digital Marketing Services',
    title: 'Lead Generation',
    shortDesc: 'Multi-channel B2B and B2C lead generation campaigns with automated CRM integration, instant lead qualification, and appointment booking flows.',
    featuresGrid: [
      { icon: 'Users', headline: 'Instant Lead Forms', text: 'In-platform Instant Forms on Facebook/Instagram capturing verified user contact info.' },
      { icon: 'Workflow', headline: 'Automated CRM & WhatsApp Sync', text: 'Instant delivery of new leads straight to your CRM, email, or sales WhatsApp.' },
      { icon: 'CheckCircle2', headline: 'Lead Qualification Funnels', text: 'Pre-screening questionnaire forms to filter out unqualified prospects.' },
      { icon: 'Calendar', headline: 'Automated Appointment Booking', text: 'Direct calendar integration allowing qualified leads to book consultation calls.' }
    ],
    fullDeepContent: `Keep your sales team filled with pre-qualified, ready-to-buy prospective clients. Our Lead Generation campaigns combine high-converting ad copy, instant lead forms, automated phone/email validation, and real-time CRM routing.

    Stop chasing cold prospects and start closing warm inbound inquiries every day.`,
    basePrice: 4999,
    featured: true,
    deliveryTime: '2-3 Days'
  },
  {
    id: 'dm-srv-6',
    slug: 'e-commerce-marketing',
    category: 'Digital Marketing Services',
    title: 'E-Commerce Marketing',
    shortDesc: 'Comprehensive online store growth campaigns combining catalog ads, dynamic retargeting, abandoned cart recovery, and ROAS optimization.',
    featuresGrid: [
      { icon: 'ShoppingBag', headline: 'Dynamic Product Catalog Ads', text: 'Show shoppers exact products they viewed or added to cart across Meta & Google.' },
      { icon: 'TrendingUp', headline: 'Customer Lifetime Value (LTV) Boost', text: 'Automated post-purchase upsell and cross-sell campaigns boosting order value.' },
      { icon: 'Zap', headline: 'Abandoned Cart Recovery', text: 'Omnichannel cart recovery funnels via SMS, WhatsApp, email, and retargeting ads.' },
      { icon: 'BarChart3', headline: 'Profit Margin Attribution', text: 'Tracking real profit margins rather than just top-line revenue.' }
    ],
    fullDeepContent: `Grow your Shopify, WooCommerce, or custom online store revenue with full-funnel E-Commerce Marketing. We design multi-stage campaigns that attract cold shoppers, convert mid-funnel visitors, recover abandoned carts, and turn single buyers into repeat customers.

    Achieve sustainable, high-ROAS e-commerce scale.`,
    basePrice: 5499,
    featured: true,
    deliveryTime: '2-4 Days'
  },
  {
    id: 'dm-srv-7',
    slug: 'conversion-optimization',
    category: 'Digital Marketing Services',
    title: 'Conversion Optimization',
    shortDesc: 'Data-driven Conversion Rate Optimization (CRO), A/B split testing, landing page heatmaps, and funnel tweak strategies to maximize profit per visitor.',
    featuresGrid: [
      { icon: 'BarChart3', headline: 'Heatmap & Session Recording Audit', text: 'Identify visual drop-off points, friction areas, and broken user experience flows.' },
      { icon: 'Zap', headline: 'A/B Split Testing Experiments', text: 'Test headlines, CTA buttons, forms, and page layouts to find winning variations.' },
      { icon: 'Clock', headline: 'Page Speed & Mobile Fixes', text: 'Optimize load times and touch interactions to prevent mobile bounce rates.' },
      { icon: 'ShieldCheck', headline: 'Trust & Proof Enhancement', text: 'Strategic placement of reviews, security badges, and guarantees.' }
    ],
    fullDeepContent: `Double your sales revenue without spending an extra dollar on traffic. Conversion Rate Optimization (CRO) turns more of your existing site visitors into paying clients by systematically eliminating checkout friction and improving value messaging.

    Increase your conversion rate and maximize profit on every ad click.`,
    basePrice: 3799,
    deliveryTime: '2-4 Days'
  },
  {
    id: 'dm-srv-8',
    slug: 'seo',
    category: 'Digital Marketing Services',
    title: 'SEO',
    shortDesc: 'Data-backed Search Engine Optimization including technical audit, keyword research, on-page optimization, content strategy, and high-authority backlinks.',
    featuresGrid: [
      { icon: 'Search', headline: 'In-Depth Technical SEO Audit', text: 'Fix crawl errors, site architecture, page speed, mobile usability, and schema markup.' },
      { icon: 'Target', headline: 'High-Intent Keyword Strategy', text: 'Identify profitable keywords with strong commercial buying intent.' },
      { icon: 'FileText', headline: 'On-Page & Content Optimization', text: 'Optimize meta tags, headings, internal linking, and content relevance.' },
      { icon: 'Globe', headline: 'High-Authority Backlink Building', text: 'Ethical white-hat link acquisition from relevant, high-domain authority sites.' }
    ],
    fullDeepContent: `Secure long-term organic traffic and top rankings on Google with proven Search Engine Optimization (SEO). Our technical and content SEO strategies increase domain authority, improve search indexation, and position your website above competitors.

    Build a lasting organic growth engine that generates consistent free traffic.`,
    basePrice: 4299,
    featured: true,
    deliveryTime: '3-5 Days'
  },
  {
    id: 'dm-srv-9',
    slug: 'local-seo',
    category: 'Digital Marketing Services',
    title: 'Local SEO',
    shortDesc: 'Dominate local search results and map packs with targeted geo-optimization, local citation building, and review acquisition strategies.',
    featuresGrid: [
      { icon: 'Target', headline: 'Map Pack Ranking Strategy', text: 'Optimize local signals to rank in Google’s top 3 local map pack results.' },
      { icon: 'Building', headline: 'Geo-Targeted Citation Building', text: 'Consistent NAP (Name, Address, Phone) directory submissions across high-tier sites.' },
      { icon: 'Users', headline: 'Local Review Generation Engine', text: 'Automated systems to collect positive 5-star customer reviews regularly.' },
      { icon: 'Globe', headline: 'Localized Keyword Targeting', text: 'Optimize website pages for city, region, and service-area local queries.' }
    ],
    fullDeepContent: `Drive nearby customers directly to your storefront, clinic, or service area with targeted Local SEO. When local customers search for services near them, we make sure your business dominates Google Maps and local search results.

    Increase local phone calls, foot traffic, and service bookings effortless.`,
    basePrice: 2199,
    deliveryTime: '2-4 Days'
  },
  {
    id: 'dm-srv-10',
    slug: 'google-business-profile-optimization',
    category: 'Digital Marketing Services',
    title: 'Google Business Profile Optimization',
    shortDesc: 'Complete setup, verification, optimization, geo-tagging, product listing, and post management for Google Maps & Local Pack dominance.',
    featuresGrid: [
      { icon: 'CheckCircle2', headline: 'Profile Verification & Setup', text: 'Complete verification, primary category selection, and optimized business details.' },
      { icon: 'ImageIcon', headline: 'Geo-Tagged Photo Uploads', text: 'Optimized high-resolution images tagged with location data for maximum visibility.' },
      { icon: 'ShoppingBag', headline: 'Product & Service Catalog Listing', text: 'Add your complete service menu, pricing, and product catalogs directly on Google.' },
      { icon: 'MessageSquare', headline: 'Q&A & Post Updates', text: 'Weekly promotional post updates and managed customer Q&A responses.' }
    ],
    fullDeepContent: `Transform your Google Business Profile into a 24/7 lead machine. An optimized Google profile ranks higher in local searches, displays verified customer reviews, and lets local customers call or message you in one click.

    Supercharge your local reputation and outshine nearby competitors.`,
    basePrice: 1299,
    deliveryTime: '24-48 Hours'
  },
  {
    id: 'dm-srv-11',
    slug: 'email-marketing',
    category: 'Digital Marketing Services',
    title: 'Email Marketing',
    shortDesc: 'Automated email flow setups, promotional broadcasts, list segmentation, high open-rate copywriting, and deliverability optimization.',
    featuresGrid: [
      { icon: 'Workflow', headline: 'Automated Lifecycle Flows', text: 'Welcome series, abandoned cart reminders, post-purchase, and win-back emails.' },
      { icon: 'FileText', headline: 'High Open-Rate Copywriting', text: 'Compelling subject lines and persuasive preview text tested for high opens.' },
      { icon: 'Users', headline: 'Audience Segmentation', text: 'Send hyper-targeted email broadcasts based on customer purchase history.' },
      { icon: 'ShieldCheck', headline: 'Deliverability & Domain Health', text: 'SPF, DKIM, and DMARC authentication ensuring emails hit the inbox, not spam.' }
    ],
    fullDeepContent: `Unlock the highest ROI marketing channel in existence with strategic Email Marketing. We design responsive email templates, write engaging copy, build automated email sequences (Klaviyo, Mailchimp, Brevo), and ensure top-tier inbox deliverability.

    Turn subscribers into loyal repeat buyers on autopilot.`,
    basePrice: 1799,
    deliveryTime: '2-3 Days'
  },
  {
    id: 'dm-srv-12',
    slug: 'whatsapp-marketing',
    category: 'Digital Marketing Services',
    title: 'WhatsApp Marketing',
    shortDesc: 'Direct WhatsApp Business API setup, bulk broadcast campaigns, automated chat funnels, instant customer support, and high-conversion broadcasts.',
    featuresGrid: [
      { icon: 'MessageSquare', headline: 'WhatsApp Business API Setup', text: 'Official Green Tick verification guidance and API platform integration.' },
      { icon: 'Zap', headline: 'High Open-Rate Broadcasts', text: 'Send rich media broadcast messages with interactive CTA buttons achieving 95%+ open rates.' },
      { icon: 'Workflow', headline: 'Automated Chatbot Funnels', text: 'Self-serve automated chat flows answering FAQs and collecting customer details.' },
      { icon: 'ShieldCheck', headline: 'Opt-In & Anti-Ban Compliance', text: 'Strict compliance with Meta WhatsApp policies for safe, high-volume sending.' }
    ],
    fullDeepContent: `Reach customers directly on their favorite messaging app with WhatsApp Marketing. With 98% open rates and instant response times, WhatsApp broadcasts and automated chat flows outperform traditional email by a wide margin.

    Drive immediate sales, send order updates, and automate customer support effortlessly.`,
    basePrice: 6999,
    featured: true,
    deliveryTime: '24-48 Hours'
  },
  {
    id: 'dm-srv-13',
    slug: 'remarketing-retargeting',
    category: 'Digital Marketing Services',
    title: 'Remarketing / Retargeting',
    shortDesc: 'Cross-platform retargeting campaigns capturing lost website visitors and converting past shoppers with dynamic product ads and custom offers.',
    featuresGrid: [
      { icon: 'Target', headline: 'Cross-Platform Retargeting', text: 'Follow lost visitors across Google, Facebook, Instagram, YouTube, and Web Display.' },
      { icon: 'ShoppingBag', headline: 'Dynamic Product Retargeting', text: 'Display the exact items left behind in shopping carts with special discount triggers.' },
      { icon: 'Users', headline: 'Sequential Ad Messaging', text: 'Show story-based sequential ads based on how long ago a user visited your site.' },
      { icon: 'TrendingUp', headline: 'Maximum ROI & Low CPA', text: 'Re-engage warm prospects who are already familiar with your brand.' }
    ],
    fullDeepContent: `Don't let 97% of your website traffic walk away forever. Remarketing & Retargeting campaigns place subtle, compelling ads in front of visitors who previously left your site without buying.

    Turn bounced visitors into buyers and maximize your overall advertising ROI across every acquisition channel.`,
    basePrice: 7499,
    featured: true,
    deliveryTime: '24-48 Hours'
  },
  // CONTENT & CREATIVE SERVICES
  {
    id: 'cc-srv-1',
    slug: 'ai-video-creation',
    category: 'Content & Creative Services',
    title: 'AI Video Creation',
    shortDesc: 'Generative AI video production combining prompt engineering, synthetic voiceover, hyper-realistic B-roll, and cinematic visual styling.',
    featuresGrid: [
      { icon: 'Video', headline: 'Generative AI Rendering', text: 'Cutting-edge Runway, Sora, and Midjourney video synthesis for ultra-unique visual scenes.' },
      { icon: 'Mic', headline: 'Hyper-Realistic AI Voiceovers', text: 'Multi-lingual studio-quality neural voices tuned with natural emotional inflections.' },
      { icon: 'Sparkles', headline: 'Cinematic Visual Prompts', text: 'Custom engineered prompts producing movie-grade camera movements and lighting.' },
      { icon: 'Zap', headline: 'Fast 24-Hour Production', text: 'Accelerated turnarounds for rapid social media ad testing and content pushes.' }
    ],
    fullDeepContent: `Produce breathtaking cinematic video content at a fraction of traditional production costs with AI Video Creation. We leverage generative AI video models, neural voice engines, and automated video synthesis to build visual assets that captivate audiences.

    Ideal for brand commercials, social media ads, conceptual teasers, and rapid creative iteration.`,
    basePrice: 899,
    featured: true,
    deliveryTime: '24-48 Hours'
  },
  {
    id: 'cc-srv-2',
    slug: 'reels-editing',
    category: 'Content & Creative Services',
    title: 'Reels Editing',
    shortDesc: 'High-converting Instagram Reels editing featuring scroll-stopping visual hooks, animated typography captions, trending music sync, and sound FX.',
    featuresGrid: [
      { icon: 'Video', headline: '3-Second Visual Hooks', text: 'Opening visual cuts, jump zooms, and graphics engineered to stop scroll inertia.' },
      { icon: 'Type', headline: 'Animated Word-By-Word Captions', text: 'High-visibility kinetic captions that keep viewers glued during silent autoplay.' },
      { icon: 'Zap', headline: 'Trending Audio Alignment', text: 'Precise cuts beat-synced to current viral Instagram music tracks and sounds.' },
      { icon: 'Sparkles', headline: 'Sound Effects & B-Roll Overlays', text: 'Pop sound FX, swooshes, and relevant stock B-roll enhancing viewer retention.' }
    ],
    fullDeepContent: `Turn simple video recordings into viral Instagram Reels with professional short-form editing. We enhance pacing, add dynamic animated subtitles, insert expressive sound effects, and sync transitions to viral audio tracks.

    Maximize your Explore page distribution and gain thousands of new profile visits per video.`,
    basePrice: 1499,
    featured: true,
    deliveryTime: '24-48 Hours'
  },
  {
    id: 'cc-srv-3',
    slug: 'shorts-editing',
    category: 'Content & Creative Services',
    title: 'Shorts Editing',
    shortDesc: 'YouTube Shorts video editing optimized for high completion rates, subscriber calls-to-action, energetic sound design, and vertical formatting.',
    featuresGrid: [
      { icon: 'Youtube', headline: 'High Watch-Time Pacing', text: 'Tight, seamless jump cuts removing dead silence for maximum viewer retention percentage.' },
      { icon: 'Eye', headline: 'On-Screen Graphic Callouts', text: 'Bold graphics, emojis, and visual pop-ups emphasizing key points in the video.' },
      { icon: 'Bell', headline: 'Subscriber Hook End-Screen', text: 'Strategic calls-to-action driving viewers to tap subscribe and visit your channel.' },
      { icon: 'Share2', headline: 'Multi-Format Export', text: 'Master 9:16 vertical exports ready for YouTube Shorts, TikTok, and Instagram Reels.' }
    ],
    fullDeepContent: `Scale your YouTube audience rapidly with high-retention YouTube Shorts editing. Shorts require rapid pacing, clear value hooks, and vibrant visual cues to satisfy YouTube's recommendation algorithm.

    We transform raw recordings into crisp, engaging 60-second video powerhouses that convert scrollers into loyal channel subscribers.`,
    basePrice: 1199,
    deliveryTime: '24-48 Hours'
  },
  {
    id: 'cc-srv-4',
    slug: 'youtube-video-editing',
    category: 'Content & Creative Services',
    title: 'YouTube Video Editing',
    shortDesc: 'Full long-form YouTube video editing with color grading, audio cleaning, pattern interrupts, motion graphics, intro/outro, and chapters.',
    featuresGrid: [
      { icon: 'Sliders', headline: 'Audio Restoration & EQ', text: 'Background noise removal, dialogue compression, and balanced background music.' },
      { icon: 'Palette', headline: 'Cinematic Color Grading', text: 'Pro color correction and LUT application giving videos a polished studio look.' },
      { icon: 'Layers', headline: 'Pattern Interrupts & B-Roll', text: 'Strategic zoom-ins, graphic pop-ups, and relevant video B-roll to maintain attention.' },
      { icon: 'Clock', headline: 'Chapter Markers & Lower Thirds', text: 'Custom animated lower thirds, subscriber reminders, and timestamp chaptering.' }
    ],
    fullDeepContent: `Elevate your YouTube channel authority with studio-quality long-form video post-production. Our YouTube Video Editing service handles everything from audio cleanup and color grading to motion graphic callouts and attention-retaining pattern interrupts.

    Keep your audience engaged for longer watch times and boost YouTube recommendation priority.`,
    basePrice: 699,
    featured: true,
    deliveryTime: '2-4 Days'
  },
  {
    id: 'cc-srv-5',
    slug: 'motion-graphics',
    category: 'Content & Creative Services',
    title: 'Motion Graphics',
    shortDesc: '2D & 3D animated visual assets, logo reveals, explainer animations, lower thirds, UI mockups, and kinetic typography.',
    featuresGrid: [
      { icon: 'Sparkles', headline: 'Animated Logo Stings', text: 'Sleek 2D/3D animated logo intros for YouTube videos, ads, and presentations.' },
      { icon: 'Workflow', headline: 'Product UI & App Animations', text: 'Smooth vector motion graphics demonstrating software features and app interfaces.' },
      { icon: 'Type', headline: 'Kinetic Typography', text: 'Dynamic text animations making complex messages memorable and visually appealing.' },
      { icon: 'Layers', headline: 'Custom Overlay Templates', text: 'Branded lower thirds, subscribe buttons, and transition elements.' }
    ],
    fullDeepContent: `Bring complex concepts and brand assets to life with custom Motion Graphics design. Whether you need a slick animated logo reveal, a 2D explainer video, animated UI product walkthroughs, or dynamic lower thirds, our motion designers deliver broadcast-ready visual animations.

    Differentiate your brand with fluid, eye-catching visual movement.`,
    basePrice: 999,
    deliveryTime: '2-4 Days'
  },
  {
    id: 'cc-srv-6',
    slug: 'logo-design',
    category: 'Content & Creative Services',
    title: 'Logo Design',
    shortDesc: 'Vector logo design crafted for modern brands, including minimalist mark, wordmark, monochrome variants, favicon, and scalable vector files.',
    featuresGrid: [
      { icon: 'Palette', headline: '3 Unique Initial Concepts', text: 'Multiple distinct creative directions developed based on your brand positioning.' },
      { icon: 'Box', headline: 'Vector Master Source Files', text: 'Fully editable AI, EPS, SVG, PNG, PDF, and high-res JPEG files included.' },
      { icon: 'Smartphone', headline: 'Favicon & App Icon Formats', text: 'Optimized square and circular logo variations for social avatars and app icons.' },
      { icon: 'ShieldCheck', headline: 'Full Commercial Ownership', text: '100% intellectual property transfer and copyright ownership to your business.' }
    ],
    fullDeepContent: `Establish a timeless, memorable visual symbol for your business with bespoke Logo Design. We combine strategic brand positioning with modern vector graphic design to craft logos that look iconic on mobile screens, websites, merchandise, and print media.

    Receive complete vector source files and brand guidelines ready for immediate commercial deployment.`,
    basePrice: 1299,
    featured: true,
    deliveryTime: '2-3 Days'
  },
  {
    id: 'cc-srv-7',
    slug: 'brand-identity',
    category: 'Content & Creative Services',
    title: 'Brand Identity',
    shortDesc: 'Complete visual brand identity system including color palette, typography hierarchy, brand style guide, stationery, and social media kits.',
    featuresGrid: [
      { icon: 'Palette', headline: 'Color Palette & Typography', text: 'Curated primary, secondary, and accent color codes (HEX/RGB) and Google Font pairings.' },
      { icon: 'FileText', headline: 'Brand Style Guide PDF', text: 'Comprehensive brand bible detailing logo usage rules, spacing, and visual do’s & don’ts.' },
      { icon: 'LayoutGrid', headline: 'Social Media Kit', text: 'Matching header banners, avatar templates, and social post frames for all platforms.' },
      { icon: 'Building', headline: 'Business Stationery Designs', text: 'Professional business card, letterhead, and email signature digital layouts.' }
    ],
    fullDeepContent: `Unify your company's visual presence across every customer touchpoint with a Brand Identity system. We build cohesive brand style guidelines covering typography rules, color science, icon style, tone of voice, and social media branding kits.

    Build instant customer trust and professional recognition across all marketing channels.`,
    basePrice: 1599,
    featured: true,
    deliveryTime: '3-5 Days'
  },
  {
    id: 'cc-srv-8',
    slug: 'social-media-post-design',
    category: 'Content & Creative Services',
    title: 'Social Media Post Design',
    shortDesc: 'Custom-designed graphics, carousel slide decks, promotional banners, quote cards, and infographics tailored to your social media platforms.',
    featuresGrid: [
      { icon: 'ImageIcon', headline: 'Platform-Optimized Sizes', text: 'Pixel-perfect graphic layouts for Instagram (1:1 & 4:5), Facebook, LinkedIn, and X.' },
      { icon: 'Layers', headline: 'High-Swipe Carousel Graphics', text: 'Multi-slide graphic carousels designed to boost engagement and saves.' },
      { icon: 'Sparkles', headline: 'Branded Templates Included', text: 'Editable Canva or Photoshop source templates for future internal team reuse.' },
      { icon: 'Target', headline: 'Conversion-Focused Layouts', text: 'Visual hierarchy engineered to draw attention to special offers and CTAs.' }
    ],
    fullDeepContent: `Stand out on crowded social media feeds with stunning Social Media Post Design. Our graphic design team crafts custom post graphics, educational multi-slide carousels, announcement banners, and promotional artwork aligned perfectly with your brand identity.

    Drive higher likes, saves, comments, and website clicks with visuals that command attention.`,
    basePrice: 849,
    deliveryTime: '24-48 Hours'
  },
  {
    id: 'cc-srv-9',
    slug: 'thumbnail-design',
    category: 'Content & Creative Services',
    title: 'Thumbnail Design',
    shortDesc: 'High-CTR YouTube and video thumbnail designs featuring bold typography, facial emotion pop, vibrant contrast, and click-inducing hooks.',
    featuresGrid: [
      { icon: 'Eye', headline: 'High Click-Through Rate (CTR)', text: 'Designed specifically to trigger curiosity and maximize video clicks.' },
      { icon: 'Users', headline: 'Facial Cutouts & Emotional Polish', text: 'Pro photo cutout isolation, facial glow adjustments, and emotion emphasis.' },
      { icon: 'Type', headline: 'Bold Readable Typography', text: 'Large, high-contrast text overlays easily readable on mobile screens.' },
      { icon: 'CheckCircle2', headline: 'A/B Test Variant Provided', text: 'Two thumbnail variations provided to run YouTube thumbnail A/B testing.' }
    ],
    fullDeepContent: `Double your YouTube video views with High-CTR Thumbnail Design. The thumbnail is the single most critical factor determining whether users click your video or scroll past. We craft high-impact thumbnail artwork with vibrant colors, clear subject isolation, and compelling text hooks.

    Skyrocket your click-through rates and get recommended by YouTube's algorithm.`,
    basePrice: 749,
    featured: true,
    deliveryTime: '24 Hours'
  },
  {
    id: 'cc-srv-10',
    slug: 'promotional-videos',
    category: 'Content & Creative Services',
    title: 'Promotional Videos',
    shortDesc: 'High-converting video commercials for social media ads, product launches, event promos, app overviews, and website landing pages.',
    featuresGrid: [
      { icon: 'Video', headline: 'Hook-Story-Offer Structure', text: 'Scripted and edited according to proven direct-response ad frameworks.' },
      { icon: 'Mic', headline: 'Voiceover & Background Score', text: 'Licensed energetic background music and professional voiceover sync.' },
      { icon: 'Type', headline: 'On-Screen Sales Subtitles', text: 'Dynamic captioning ensuring the message comes through clearly with audio off.' },
      { icon: 'Target', headline: 'Clear Call-to-Action Endings', text: 'Prominent closing screens driving immediate sales, sign-ups, or website visits.' }
    ],
    fullDeepContent: `Drive sales, inquiries, and conversions with high-impact Promotional Videos. Whether launching a new service, running Meta/Google video ads, or hosting an event, our video commercial editing combines persuasive scripting, licensed stock B-roll, voiceovers, and call-to-action graphics.

    Turn video viewers into paying customers across all marketing channels.`,
    basePrice: 1799,
    featured: true,
    deliveryTime: '2-4 Days'
  },
  {
    id: 'cc-srv-11',
    slug: 'product-videos',
    category: 'Content & Creative Services',
    title: 'Product Videos',
    shortDesc: 'E-commerce and SaaS product showcase videos featuring 3D product renders, unboxing clips, feature callouts, and benefit highlights.',
    featuresGrid: [
      { icon: 'ShoppingBag', headline: 'E-Commerce & Amazon Ready', text: 'Formatted to meet Amazon, Shopify, and social media store video guidelines.' },
      { icon: 'Sparkles', headline: '3D & Motion Callouts', text: 'Animated text callouts highlighting key product specs, ingredients, or features.' },
      { icon: 'Eye', headline: 'Macro Close-Up Editing', text: 'High-definition video showcasing texture, craftsmanship, and build quality.' },
      { icon: 'Zap', headline: 'Ad-Ready Short Formats', text: 'Includes both square (1:1) and vertical (9:16) video cuts for ad campaigns.' }
    ],
    fullDeepContent: `Boost e-commerce sales and reduce return rates with immersive Product Videos. We create video showcases that highlight your product's key features, dimensions, usage demonstrations, and material quality in stunning detail.

    Give buyers complete confidence and convert store browsers into buyers.`,
    basePrice: 649,
    deliveryTime: '2-4 Days'
  },
  {
    id: 'cc-srv-12',
    slug: 'ai-avatar-videos',
    category: 'Content & Creative Services',
    title: 'AI Avatar Videos',
    shortDesc: 'Realistic synthetic human AI presenter videos for training, explainer videos, multi-lingual spokespersons, and automated sales pitches.',
    featuresGrid: [
      { icon: 'Bot', headline: 'Photorealistic AI Presenters', text: 'Choose from dozens of diverse, professional AI avatars with natural lip-sync.' },
      { icon: 'Globe', headline: 'Multi-Lingual Voice Synthesis', text: 'Instantly translate your message into 40+ languages with matching native accents.' },
      { icon: 'FileText', headline: 'Script To Video Generation', text: 'Convert raw text scripts into studio-quality presenter videos in hours.' },
      { icon: 'Building', headline: 'Ideal for Corporate Training', text: 'Perfect for onboarding, SaaS tutorials, course lectures, and sales outreach.' }
    ],
    fullDeepContent: `Scale video production without hiring actors, booking studios, or camera setups using AI Avatar Videos. We generate realistic AI presenters speaking your script with natural expressions, gestures, and pitch inflection across multiple languages.

    Ideal for corporate training, product explainers, educational content, and global marketing.`,
    basePrice: 1099,
    featured: true,
    deliveryTime: '24-48 Hours'
  },
  {
    id: 'cc-srv-13',
    slug: 'ugc-style-videos',
    category: 'Content & Creative Services',
    title: 'UGC-Style Videos',
    shortDesc: 'Authentic User-Generated Content (UGC) ad editing featuring realistic creator reviews, unboxing, problem-solution hooks, and TikTok ad formatting.',
    featuresGrid: [
      { icon: 'Users', headline: 'Authentic Creator Feel', text: 'Raw, relatable smartphone-style footage that feels natural on social feeds.' },
      { icon: 'Zap', headline: 'Problem-Solution Ad Scripting', text: 'Hooks that highlight customer pain points and showcase your product as the hero.' },
      { icon: 'MessageSquare', headline: 'Native App Captions & Stickers', text: 'TikTok/Instagram native text overlays, green screen effects, and audio clips.' },
      { icon: 'TrendingUp', headline: 'High Conversion Ad Creative', text: 'Engineered specifically for low Cost-Per-Acquisition (CPA) on TikTok & Meta Ads.' }
    ],
    fullDeepContent: `Lower your ad customer acquisition costs with highly relatable UGC-Style Videos. Audiences scroll past polished corporate ads, but stop for authentic user-generated reviews, unboxing videos, and organic product demonstrations.

    We craft UGC video ad creatives engineered to build trust and drive high ad conversions on TikTok, Instagram, and Facebook.`,
    basePrice: 1399,
    deliveryTime: '2-3 Days'
  },

  // SOCIAL MEDIA MANAGEMENT SERVICES
  {
    id: 'smm-mgmt-1',
    slug: 'instagram-account-management',
    category: 'Social Media Management Services',
    title: 'Instagram Account Management',
    shortDesc: 'End-to-end management of your Instagram profile including grid aesthetics, daily posting, story highlights, bio optimization, and follower interactions.',
    featuresGrid: [
      { icon: 'Instagram', headline: 'Aesthetic Grid Curation', text: 'Cohesive, brand-aligned visual grid planning and layout styling.' },
      { icon: 'Clock', headline: 'Consistent Daily Publishing', text: 'Scheduled feed posts, carousels, and stories deployed at peak engagement hours.' },
      { icon: 'Sparkles', headline: 'Bio & Highlights Makeover', text: 'Professional bio copy, custom highlight covers, and strategic link-in-bio setup.' },
      { icon: 'BarChart3', headline: 'Monthly Performance Analytics', text: 'Comprehensive metrics reporting on reach, profile visits, and audience demographics.' }
    ],
    fullDeepContent: `Transform your Instagram profile into an active, high-converting digital storefront with our Instagram Account Management service. We take full ownership of your daily content schedule, visual presentation, and audience engagement routines.

    Our team ensures your brand maintains a professional image, consistent posting schedule, and active community presence while you focus on running your core business.`,
    basePrice: 2999,
    featured: true,
    deliveryTime: 'Monthly Ongoing'
  },
  {
    id: 'smm-mgmt-2',
    slug: 'facebook-page-management',
    category: 'Social Media Management Services',
    title: 'Facebook Page Management',
    shortDesc: 'Complete Facebook business page administration, custom cover graphics, engaging community posts, group moderation, and review management.',
    featuresGrid: [
      { icon: 'Facebook', headline: 'Business Page Optimization', text: 'Complete setup of page categories, call-to-action buttons, and brand story details.' },
      { icon: 'Calendar', headline: 'Scheduled Feed Content', text: 'Regular image, video, and link posts engineered for maximum organic News Feed distribution.' },
      { icon: 'Users', headline: 'Community & Group Moderation', text: 'Active monitoring of page comments, messages, and linked Facebook Group discussions.' },
      { icon: 'Star', headline: 'Review & Reputation Management', text: 'Prompt, polite responses to customer reviews and feedback on your page.' }
    ],
    fullDeepContent: `Build brand authority and trust on Facebook with dedicated Facebook Page Management. We oversee every aspect of your page presence, from visual branding updates to daily audience engagement and customer inquiry monitoring.

    Designed for local businesses, e-commerce stores, and corporate brands seeking consistent customer touchpoints and community loyalty.`,
    basePrice: 2199,
    featured: true,
    deliveryTime: 'Monthly Ongoing'
  },
  {
    id: 'smm-mgmt-3',
    slug: 'youtube-channel-management',
    category: 'Social Media Management Services',
    title: 'YouTube Channel Management',
    shortDesc: 'Professional YouTube channel administration covering upload scheduling, SEO metadata, custom thumbnail publishing, community tab, and playlist organization.',
    featuresGrid: [
      { icon: 'Youtube', headline: 'Upload Scheduling & Metadata', text: 'Optimized title, tags, description, and end-screen configuration for every video.' },
      { icon: 'Eye', headline: 'Thumbnail Publishing & A/B', text: 'Strategic thumbnail placement and testing to maximize click-through rate (CTR).' },
      { icon: 'Layers', headline: 'Playlist & Channel Architecture', text: 'Structured channel homepage layout, thematic playlists, and channel trailer setup.' },
      { icon: 'MessageSquare', headline: 'Community Tab Engagement', text: 'Polls, image posts, and subscriber interactions in the YouTube Community tab.' }
    ],
    fullDeepContent: `Maximize channel subscriber growth and watch-time retention with YouTube Channel Management. We handle all backend channel operations, metadata SEO optimizations, playlist organization, and upload workflows.

    Free up your time to create great videos while our team handles technical publishing and community management.`,
    basePrice: 1899,
    featured: true,
    deliveryTime: 'Monthly Ongoing'
  },
  {
    id: 'smm-mgmt-4',
    slug: 'tiktok-management',
    category: 'Social Media Management Services',
    title: 'TikTok Management',
    shortDesc: 'Daily TikTok publishing, trend sound sourcing, video captioning, comment moderation, and TikTok bio link optimization for brand channels.',
    featuresGrid: [
      { icon: 'Video', headline: 'Trend Audio & Hook Sync', text: 'Pairing video assets with viral audio tracks to maximize FYP placement.' },
      { icon: 'Zap', headline: 'Consistent Daily Publishing', text: 'Strategic posting timing aligned with active TikTok user hours.' },
      { icon: 'MessageSquare', headline: 'Active Comment Moderation', text: 'Quick, witty comment replies building community rapport and account reach.' },
      { icon: 'Award', headline: 'TikTok Bio Store Link Sync', text: 'Converting TikTok views into website traffic through clear CTA bio links.' }
    ],
    fullDeepContent: `Capture Gen-Z and millennial attention on TikTok with our dedicated TikTok Account Management service. We oversee your channel publishing pipeline, keep up with trending sounds and viral formats, and foster active comment conversations.

    Ensure your brand stays relevant and continuously visible on the TikTok For You Page.`,
    basePrice: 2499,
    deliveryTime: 'Monthly Ongoing'
  },
  {
    id: 'smm-mgmt-5',
    slug: 'linkedin-management',
    category: 'Social Media Management Services',
    title: 'LinkedIn Management',
    shortDesc: 'B2B company page and executive profile management, industry thought-leadership articles, slide carousel creation, and professional networking.',
    featuresGrid: [
      { icon: 'Linkedin', headline: 'Company Page & Executive Branding', text: 'Professional positioning for corporate brands and executive founders.' },
      { icon: 'FileText', headline: 'Slide Carousels & Long-Form Content', text: 'High-value PDF slides, industry insights, and case study posts.' },
      { icon: 'Users', headline: 'B2B Network Engagement', text: 'Monitored comment discussions with industry decision-makers and prospective clients.' },
      { icon: 'BarChart3', headline: 'Social Selling Analytics', text: 'Weekly reports tracking impression growth, profile views, and lead inquiries.' }
    ],
    fullDeepContent: `Establish undisputed industry authority on LinkedIn with professional B2B management. We craft thought-leadership posts, publish visually engaging document carousels, optimize company page details, and actively engage with industry peers.

    Position your brand at the forefront of your sector and attract high-value business leads organically.`,
    basePrice: 2799,
    featured: true,
    deliveryTime: 'Monthly Ongoing'
  },
  {
    id: 'smm-mgmt-6',
    slug: 'content-planning',
    category: 'Social Media Management Services',
    title: 'Content Planning',
    shortDesc: 'Monthly content strategy calendar detailing post themes, visual direction, copy angles, promotion schedules, and content pillar distribution.',
    featuresGrid: [
      { icon: 'Calendar', headline: 'Monthly Editorial Calendar', text: 'Structured content plan mapping out every post date, format, and campaign goal.' },
      { icon: 'Target', headline: 'Content Pillar Mapping', text: 'Strategic mix of educational, promotional, entertaining, and social proof content.' },
      { icon: 'Sparkles', headline: 'Campaign & Festival Angles', text: 'Timely seasonal promotions, product launches, and industry event hooks.' },
      { icon: 'CheckCircle2', headline: 'Client Approval Workflow', text: 'Easy digital calendar previews for instant feedback and sign-off before publishing.' }
    ],
    fullDeepContent: `Eliminate last-minute posting stress with a clear, strategic Content Planning roadmap. We design comprehensive 30-day editorial calendars tailored to your business goals, target audience demographics, and marketing campaigns.

    Ensure every post published serves a clear purpose in building your brand and driving customer action.`,
    basePrice: 1599,
    featured: true,
    deliveryTime: '3-5 Days'
  },
  {
    id: 'smm-mgmt-7',
    slug: 'content-creation',
    category: 'Social Media Management Services',
    title: 'Content Creation',
    shortDesc: 'Custom graphics, high-converting promotional banners, carousel slide decks, promotional images, and short video clips crafted for your brand.',
    featuresGrid: [
      { icon: 'Palette', headline: 'Custom Visual Graphics', text: 'Branded image designs, quote cards, and product feature spotlights.' },
      { icon: 'Layers', headline: 'Multi-Slide Carousels', text: 'Educational and story-based carousel graphics designed for high swipe rates.' },
      { icon: 'Video', headline: 'Short Video Production', text: 'Editing raw video footage into polished, eye-catching social clips.' },
      { icon: 'Sparkles', headline: 'Brand Identity Alignment', text: 'Consistent color schemes, fonts, logos, and visual guidelines across all assets.' }
    ],
    fullDeepContent: `Elevate your digital brand image with premium, custom-designed Content Creation assets. Our design team produces striking visuals, informative slide decks, product highlights, and promotional graphics tailored to your exact brand aesthetics.

    Stop scrollers in their tracks with clean, professional visual media built for maximum engagement.`,
    basePrice: 3299,
    featured: true,
    deliveryTime: '3-5 Days'
  },
  {
    id: 'smm-mgmt-8',
    slug: 'reels-creation',
    category: 'Social Media Management Services',
    title: 'Reels Creation',
    shortDesc: 'Full Instagram Reels production including scroll-stopping hook edits, trending audio sync, dynamic text captions, transitions, and export formatting.',
    featuresGrid: [
      { icon: 'Video', headline: 'Scroll-Stopping Hooks', text: 'Visual and verbal opening hooks engineered to grab immediate viewer attention.' },
      { icon: 'Zap', headline: 'Trending Audio & Sync', text: 'Seamless video cuts synced perfectly to viral Instagram audio beats.' },
      { icon: 'Type', headline: 'Dynamic On-Screen Captions', text: 'High-visibility text overlays ensuring high viewer retention on silent play.' },
      { icon: 'Share2', headline: 'Formatted for High Reach', text: 'Correct 9:16 vertical ratio exports ready for instant publishing.' }
    ],
    fullDeepContent: `Unlock viral reach on Instagram with custom-edited Reels. We turn your raw video clips, product footage, or brand assets into engaging vertical videos equipped with opening hooks, fast pacing, trending sounds, and eye-catching captions.

    Dominate the Instagram Reels feed and attract thousands of organic profile views.`,
    basePrice: 2599,
    featured: true,
    deliveryTime: '2-4 Days'
  },
  {
    id: 'smm-mgmt-9',
    slug: 'shorts-creation',
    category: 'Social Media Management Services',
    title: 'Shorts Creation',
    shortDesc: 'High-retention YouTube Shorts creation featuring fast pacing, clear value hooks, subtitled video editing, and click-worthy title suggestions.',
    featuresGrid: [
      { icon: 'Youtube', headline: 'Optimized 60-Second Edit', text: 'Pacing edited specifically to maximize completion rate on YouTube Shorts.' },
      { icon: 'Eye', headline: 'High-Contrast Captions', text: 'Bold, animated subtitle text overlay keeping viewers locked on screen.' },
      { icon: 'Sparkles', headline: 'End-Screen Channel Call-Out', text: 'Clear calls to subscribe and check long-form videos on your main channel.' },
      { icon: 'CheckCircle2', headline: 'SEO Title & Description Copy', text: 'Search-ready metadata provided with every generated Shorts video asset.' }
    ],
    fullDeepContent: `Scale your YouTube subscriber base rapidly with custom-crafted YouTube Shorts. Shorts receive billions of daily views on YouTube. We edit high-energy, vertical video clips that hook viewers immediately and drive them to subscribe to your channel.

    Continuous delivery of YouTube Shorts assets ready for effortless upload.`,
    basePrice: 1999,
    featured: true,
    deliveryTime: '2-4 Days'
  },
  {
    id: 'smm-mgmt-10',
    slug: 'post-and-story-design',
    category: 'Social Media Management Services',
    title: 'Post & Story Design',
    shortDesc: 'Eye-catching static feed post designs and interactive Instagram & Facebook Story templates, polls, countdowns, and stickers.',
    featuresGrid: [
      { icon: 'Image', headline: 'Feed Post Visuals', text: 'Pixel-perfect single image graphics, announcements, and testimonial cards.' },
      { icon: 'Smartphone', headline: 'Interactive Story Graphics', text: 'Story designs incorporating poll prompts, questions, link cards, and quizzes.' },
      { icon: 'Palette', headline: 'Custom Template Kit', text: 'Reusable visual templates maintaining strict brand color and font guidelines.' },
      { icon: 'Clock', headline: 'Daily Story Continuity', text: 'Consistent daily story sequences keeping your account active at the top of feeds.' }
    ],
    fullDeepContent: `Keep your brand top-of-mind every day with custom Post & Story Design. Stories are the primary engagement channel for existing followers. We design interactive, visually compelling story graphics and feed posts that encourage taps, votes, replies, and link clicks.

    Maintain a vibrant, stylish social presence that keeps your audience coming back.`,
    basePrice: 2299,
    deliveryTime: '2-4 Days'
  },
  {
    id: 'smm-mgmt-11',
    slug: 'caption-and-hashtag-strategy',
    category: 'Social Media Management Services',
    title: 'Caption & Hashtag Strategy',
    shortDesc: 'Persuasive copywriting, storytelling captions, clear call-to-actions, and researched hashtag sets tailored to bypass feed algorithms.',
    featuresGrid: [
      { icon: 'FileText', headline: 'Persuasive Copywriting', text: 'Engaging post captions written with storytelling hooks and clear calls to action.' },
      { icon: 'Hash', headline: 'Researched Hashtag Clusters', text: 'Categorized hashtag sets (niche, broad, and low-competition) for reach optimization.' },
      { icon: 'Target', headline: 'Call-to-Action (CTA) Placement', text: 'Strategic CTAs guiding scrollers to comment, save, share, or click your bio link.' },
      { icon: 'Globe', headline: 'Multi-Language Adaptation', text: 'Localized caption copywriting adapted to regional target market nuances.' }
    ],
    fullDeepContent: `Turn readers into buyers with professional Caption & Hashtag Strategy. A great image needs an equally compelling caption to drive action. We write engaging, hook-driven post copy accompanied by thoroughly researched, algorithm-compliant hashtag sets.

    Increase post saves, shares, and link clicks with copy engineered for conversion.`,
    basePrice: 3499,
    deliveryTime: '2-3 Days'
  },
  {
    id: 'smm-mgmt-12',
    slug: 'community-management',
    category: 'Social Media Management Services',
    title: 'Community Management',
    shortDesc: 'Daily monitoring of direct messages (DMs), comment replies, query handling, lead forwarding, and active community interaction across platforms.',
    featuresGrid: [
      { icon: 'MessageSquare', headline: 'Prompt DM & Comment Replies', text: 'Quick, friendly responses to customer questions across all social channels.' },
      { icon: 'Users', headline: 'Proactive Fan Engagement', text: 'Liking, commenting, and interacting on key customer and influencer posts.' },
      { icon: 'ShieldCheck', headline: 'Spam & Toxicity Removal', text: 'Active monitoring to filter out spam comments, scam links, and abusive text.' },
      { icon: 'Phone', headline: 'Lead Routing to Sales Team', text: 'Instant forwarding of high-intent purchase inquiries directly to your team.' }
    ],
    fullDeepContent: `Build meaningful relationships with your audience through active Community Management. Fast responses to comments and direct messages build trust and boost social media algorithm rankings.

    Our team manages your inbox and comments section, answering questions, weeding out spam, and forwarding qualified lead opportunities to your business.`,
    basePrice: 1699,
    deliveryTime: 'Monthly Ongoing'
  },
  {
    id: 'smm-mgmt-13',
    slug: 'monthly-social-media-management',
    category: 'Social Media Management Services',
    title: 'Monthly Social Media Management',
    shortDesc: 'Complete hands-off monthly management package combining content planning, design, video editing, publishing, DMs, and analytics reporting.',
    featuresGrid: [
      { icon: 'Sparkles', headline: 'All-In-One Hands-Off Service', text: 'Complete management of your entire social media department by dedicated experts.' },
      { icon: 'Calendar', headline: '30-Day Content Production', text: 'Full monthly supply of posts, Reels, Shorts, stories, and promotional graphics.' },
      { icon: 'Users', headline: 'Inbox & Community Handling', text: 'Daily comment moderation, DM handling, and proactive community engagement.' },
      { icon: 'BarChart3', headline: 'Monthly ROI & Performance Review', text: 'Detailed end-of-month analytics meeting reviewing reach, leads, and strategy adjustments.' }
    ],
    fullDeepContent: `Outsource your entire social media operations to our expert agency team with Monthly Social Media Management. This all-inclusive package covers monthly strategy, content creation, video editing, post scheduling, community engagement, and performance reporting.

    Enjoy a flourishing, high-converting social media presence while saving dozens of hours every month.`,
    basePrice: 1499,
    featured: true,
    deliveryTime: 'Monthly Ongoing'
  },

  // SOCIAL MEDIA GROWTH SERVICES
  {
    id: 'sm-srv-1',
    slug: 'instagram-growth',
    category: 'Social Media Growth Services',
    title: 'Instagram Growth',
    shortDesc: 'Comprehensive Instagram growth suite: High-retention Indian followers, reels views & virality packages, reach boost, engagement bundles, and genuine active comments.',
    featuresGrid: [
      { icon: 'Users', headline: 'Indian Followers (Non-Drop)', text: '10K Indian followers at ₹1,500 with lifetime refill guarantee and real active account profiles.' },
      { icon: 'Play', headline: 'Reels Views & Viral Boost', text: '10K Reels views for ₹10, or get the 1M Views + Likes + Reels Viral on Home Page package for ₹2,000.' },
      { icon: 'TrendingUp', headline: 'Reach & Engagement Bundles', text: '10K Reach for ₹65, 10K Engagement for ₹70, and 10K Share/Save packages for ₹320.' },
      { icon: 'Heart', headline: '100% Real Indian Likes & Comments', text: '10K Real Indian Likes for ₹850, and 1K High-Quality Indian Real Comments for ₹1,000.' }
    ],
    fullDeepContent: `Transform your Instagram authority and explore virality with our dedicated Instagram Growth rate matrix. We provide high-retention, algorithm-safe packages engineered for businesses, influencers, and brands seeking explosive reach in the Indian market.
    
    Every tier from Non-Drop Indian Followers and Instant Reels Views to 100% Real Indian Comments and Save/Share boosts are delivered rapidly with strict safety protocols and lifetime refill warranties.`,
    basePrice: 299,
    featured: true,
    deliveryTime: 'Instant - 24 Hours',
    rateMatrix: [
      {
        id: 'ig-rate-1',
        name: 'Indian Followers Increase',
        quantity: '10K Followers',
        rateLabel: '10K Followers = ₹1,500',
        priceINR: 1500,
        featureBadge: 'Non Drop, Lifetime Refill',
        description: 'Authentic Indian followers with natural profile activities, lifetime non-drop warranty.'
      },
      {
        id: 'ig-rate-2',
        name: 'Reels Views',
        quantity: '10K Views',
        rateLabel: '10K Views = ₹10',
        priceINR: 10,
        featureBadge: 'Instant Algorithmic Push',
        altOption: {
          name: 'Reels Viral Mega Package',
          quantity: '1M Views + Likes + Home Push',
          rateLabel: '1M Views + Likes + Viral Push = ₹2,000',
          priceINR: 2000,
          featureBadge: '1M Views + Likes + Viral on Home Page'
        }
      },
      {
        id: 'ig-rate-3',
        name: 'Reels Viewers',
        quantity: 'Live Watchers',
        rateLabel: 'Added Soon!',
        priceINR: null,
        isComingSoon: true,
        featureBadge: 'Added Soon!'
      },
      {
        id: 'ig-rate-4',
        name: 'Reach Boost',
        quantity: '10K Reach',
        rateLabel: '10K Reach = ₹65',
        priceINR: 65,
        featureBadge: 'Explore & Feed Placement'
      },
      {
        id: 'ig-rate-5',
        name: 'Engagement Bundle',
        quantity: '10K Engagement',
        rateLabel: '10K Engagement = ₹70',
        priceINR: 70,
        featureBadge: 'High Retention Velocity'
      },
      {
        id: 'ig-rate-6',
        name: 'Share Package',
        quantity: '10K Share',
        rateLabel: '10K Share = ₹320',
        priceINR: 320,
        featureBadge: 'Algorithm Trigger'
      },
      {
        id: 'ig-rate-7',
        name: 'Save Package',
        quantity: '10K Save',
        rateLabel: '10K Save = ₹320',
        priceINR: 320,
        featureBadge: 'Content Authority Boost'
      },
      {
        id: 'ig-rate-8',
        name: 'Indian Likes',
        quantity: '10K Likes',
        rateLabel: '10K Likes = ₹850',
        priceINR: 850,
        featureBadge: '100% Real Users'
      },
      {
        id: 'ig-rate-9',
        name: 'Indian Real Comments',
        quantity: '1K Comments',
        rateLabel: '1K Comments = ₹1,000',
        priceINR: 1000,
        featureBadge: '100% Relevant Real Discussions'
      }
    ]
  },
  {
    id: 'sm-srv-2',
    slug: 'youtube-growth',
    category: 'Social Media Growth Services',
    title: 'YouTube Growth',
    shortDesc: 'Turn-key YouTube growth accelerator and full channel monetization bundle: 4,000 watch hours, 1,000+ active subscribers, channel SEO, and monetization compliance.',
    featuresGrid: [
      { icon: 'Sparkles', headline: 'YouTube Channel Full Monetization', text: 'Complete monetization bundle for ₹12,000 with 100% organic process and safe YouTube guidelines.' },
      { icon: 'Play', headline: '4,000 Watch Hours Completed', text: 'High retention watch time from genuine video sessions ensuring fast monetization review.' },
      { icon: 'Users', headline: '1,000+ Active Subscribers', text: 'Real organic subscribers meeting YouTube Partner Program (YPP) requirements safely.' },
      { icon: 'ShieldCheck', headline: 'AdSense & Guidelines Safe', text: 'Zero bot penalties or strike risk with verified adherence to YouTube policies.' }
    ],
    fullDeepContent: `Unlock revenue on your YouTube channel without waiting years for organic momentum. Our YouTube Channel Full Monetization service handles all prerequisite thresholds—including 4,000 watch hours and 1,000+ subscribers—using 100% organic methods compliant with YouTube Partner Program guidelines.
    
    We configure channel metadata, optimize playlists, and accelerate audience retention so you can start earning AdSense revenue and sponsorships immediately.`,
    basePrice: 499,
    featured: true,
    deliveryTime: '5-7 Days',
    rateMatrix: [
      {
        id: 'yt-rate-1',
        name: 'YouTube Channel Full Monetization',
        quantity: '1K Subs + 4K Hours',
        rateLabel: 'Full Channel Monetization = ₹12,000',
        priceINR: 12000,
        featureBadge: '100% Organic process, safe guidelines',
        description: 'Complete turn-key monetization bundle with guaranteed YouTube Partner Program compliance and review approval.'
      }
    ]
  },
  {
    id: 'sm-srv-3',
    slug: 'facebook-growth',
    category: 'Social Media Growth Services',
    title: 'Facebook Growth',
    shortDesc: 'Complete Facebook growth matrix: Guaranteed monetization setup, non-drop Indian followers, reels views, viral home packages, engagement bundles, and real comments.',
    featuresGrid: [
      { icon: 'Sparkles', headline: 'Facebook Monetization Bundle', text: 'Full Monetization approval setup at ₹12,000 with guaranteed approval and policy compliance.' },
      { icon: 'Users', headline: 'Indian Followers (Lifetime Refill)', text: '10K Followers at ₹1,500 with non-drop guarantee and lifetime refill protection.' },
      { icon: 'Play', headline: 'Facebook Reels Views & 1M Viral', text: '10K Views for ₹10, or the 1M Views + Likes + Reels Viral on Home Page package for ₹2,000.' },
      { icon: 'Heart', headline: 'Likes, Comments & Engagement', text: '10K Engagement at ₹90, 10K Real Likes at ₹750, and 1K Real Comments at ₹800.' }
    ],
    fullDeepContent: `Reignite your Facebook brand presence and unlock streaming / in-stream ads monetization with our verified Facebook Growth matrix. We provide complete monetization setup bundles, non-drop Indian page followers, viral Reels boosts, and real user interactions.
    
    All deliveries are processed with enterprise safety and natural distribution velocity to maximize your page reach and organic news feed engagement.`,
    basePrice: 399,
    featured: true,
    deliveryTime: 'Instant - 24 Hours',
    rateMatrix: [
      {
        id: 'fb-rate-1',
        name: 'Facebook Monetization Bundle',
        quantity: 'Full Page Monetization',
        rateLabel: 'Full Monetization Bundle = ₹12,000',
        priceINR: 12000,
        featureBadge: 'Guaranteed Approval setup',
        description: 'Complete Facebook in-stream ads & stars monetization prerequisite setup with guaranteed compliance.'
      },
      {
        id: 'fb-rate-2',
        name: 'Indian Followers Increase',
        quantity: '10K Followers',
        rateLabel: '10K Followers = ₹1,500',
        priceINR: 1500,
        featureBadge: 'Non Drop, Lifetime Refill',
        description: 'Real Indian page and profile followers with natural activity and lifetime refill guarantee.'
      },
      {
        id: 'fb-rate-3',
        name: 'Reels Views',
        quantity: '10K Views',
        rateLabel: '10K Views = ₹10',
        priceINR: 10,
        featureBadge: 'Instant Algorithm Acceleration',
        altOption: {
          name: 'Facebook Reels Viral Mega Package',
          quantity: '1M Views + Likes + Home Viral',
          rateLabel: '1M Views + Likes + Home Page Package = ₹2,000',
          priceINR: 2000,
          featureBadge: '1M Views + Likes + Reels Viral on Home Page'
        }
      },
      {
        id: 'fb-rate-4',
        name: 'Reels Viewers',
        quantity: 'Live Watchers',
        rateLabel: 'Added Soon!',
        priceINR: null,
        isComingSoon: true,
        featureBadge: 'Added Soon!'
      },
      {
        id: 'fb-rate-5',
        name: 'Engagement Bundle',
        quantity: '10K Engagement',
        rateLabel: '10K Engagement = ₹90',
        priceINR: 90,
        featureBadge: 'High Retention Interactions'
      },
      {
        id: 'fb-rate-6',
        name: 'Indian Likes',
        quantity: '10K Likes',
        rateLabel: '10K Likes = ₹750',
        priceINR: 750,
        featureBadge: '100% Real Users'
      },
      {
        id: 'fb-rate-7',
        name: 'Indian Real Comments',
        quantity: '1K Comments',
        rateLabel: '1K Comments = ₹800',
        priceINR: 800,
        featureBadge: '100% Genuine Indian Discussions'
      }
    ]
  },
  {
    id: 'sm-srv-4',
    slug: 'tiktok-growth',
    category: 'Social Media Growth Services',
    title: 'TikTok Growth',
    shortDesc: 'For You Page (FYP) algorithm optimization, viral sound curation, trend leveraging, and rapid TikTok follower acceleration.',
    featuresGrid: [
      { icon: 'Video', headline: 'FYP Algorithm Hacks', text: 'Hook-first scripting and watch-time completion tactics to trigger TikTok FYP pushes.' },
      { icon: 'Music', headline: 'Trending Sound Curation', text: 'Early identification and pairing of viral audio tracks to maximize video reach.' },
      { icon: 'Zap', headline: 'High-Frequency Posting', text: 'Content creation templates and scheduling for consistent multi-daily publishing.' },
      { icon: 'Award', headline: 'Profile Bio Funneling', text: 'Optimized TikTok bio links driving traffic directly to your website or store.' }
    ],
    fullDeepContent: `Dominate short-form video on TikTok with algorithm-tailored growth strategies. We help creators and brands hack the FYP using viral audio selection, visual hooks, watch-duration optimization, and niche hashtag clustering.

    Experience explosive follower spikes and convert TikTok viral moments into lasting brand equity.`,
    basePrice: 449,
    featured: true,
    deliveryTime: '2-4 Days'
  },
  {
    id: 'sm-srv-5',
    slug: 'x-twitter-growth',
    category: 'Social Media Growth Services',
    title: 'X (Twitter) Growth',
    shortDesc: 'High-converting thread creation, authority building, niche network engagement, and follower acceleration on X (Twitter).',
    featuresGrid: [
      { icon: 'Twitter', headline: 'Viral Thread Writing', text: 'Compelling multi-tweet thread structures designed for retweets, bookmarks, and quotes.' },
      { icon: 'Target', headline: 'Niche Authority Building', text: 'Strategic engagement with industry leaders, influencers, and high-follower accounts.' },
      { icon: 'CheckCircle2', headline: 'Profile & Pin Audit', text: 'Pinned tweet optimization and bio overhaul to convert profile visits into followers.' },
      { icon: 'TrendingUp', headline: 'Analytics & Impressions', text: 'Real-time tracking of impression spikes, link clicks, and follower growth trends.' }
    ],
    fullDeepContent: `Establish industry authority and expand your network on X (Twitter). We craft engaging threads, optimize your account positioning, execute smart reply strategies, and drive high-intent follower acquisition.

    Perfect for founders, tech creators, crypto/Web3 projects, journalists, and thought leaders.`,
    basePrice: 349,
    deliveryTime: '2-4 Days'
  },
  {
    id: 'sm-srv-6',
    slug: 'linkedin-growth',
    category: 'Social Media Growth Services',
    title: 'LinkedIn Growth',
    shortDesc: 'B2B personal branding, executive thought-leadership posts, network outreach automation, and targeted industry connection growth.',
    featuresGrid: [
      { icon: 'Linkedin', headline: 'Executive Thought Leadership', text: 'High-value long-form posts, carousel slide decks, and industry analysis articles.' },
      { icon: 'Users', headline: 'Targeted B2B Connections', text: 'Strategic connection requests targeting C-suite executives, decision makers, and peers.' },
      { icon: 'Sparkles', headline: 'Profile Banner & Headline Optimization', text: 'Converting your LinkedIn profile into a high-converting landing page for inbound leads.' },
      { icon: 'BarChart3', headline: 'Content SSI Score Boost', text: 'Improving your LinkedIn Social Selling Index for maximum organic feed priority.' }
    ],
    fullDeepContent: `Turn LinkedIn into your primary B2B lead generation and professional networking engine. We optimize your profile, write executive-level content, curate visual slide decks, and implement connection outreach tactics.

    Position yourself as an authority in your sector while driving organic business inquiries.`,
    basePrice: 599,
    featured: true,
    deliveryTime: '3-5 Days'
  },
  {
    id: 'sm-srv-7',
    slug: 'social-media-followers-growth',
    category: 'Social Media Growth Services',
    title: 'Social Media Followers Growth',
    shortDesc: 'Authentic, niche-targeted audience growth across all major social networks with active interest filtering and retention strategies.',
    featuresGrid: [
      { icon: 'Users', headline: 'Niche Audience Targeting', text: 'Filter follower acquisition by location, industry, interests, and competitor profiles.' },
      { icon: 'ShieldCheck', headline: 'Safe & Organic Methods', text: '100% compliant growth tactics adhering to platform guidelines without risk.' },
      { icon: 'RefreshCw', headline: 'High Retention Rate', text: 'Strategies designed to attract genuine, active users who engage with your future posts.' },
      { icon: 'Globe', headline: 'Cross-Platform Expansion', text: 'Unified multi-platform growth across Instagram, YouTube, TikTok, X, and LinkedIn.' }
    ],
    fullDeepContent: `Build a loyal, targeted audience across all your active social media channels. Our Social Media Followers Growth service identifies where your ideal followers hang out online and uses content triggers, collaboration pushes, and campaign hooks to bring them to your profile.

    Say goodbye to ghost accounts and build a real community that interacts with your content and buys your products.`,
    basePrice: 499,
    featured: true,
    deliveryTime: '2-4 Days'
  },
  {
    id: 'sm-srv-8',
    slug: 'reels-shorts-growth',
    category: 'Social Media Growth Services',
    title: 'Reels / Shorts Growth',
    shortDesc: 'Short-form video hook optimization, trending audio pairing, viral pacing edits, and cross-platform Reels & Shorts distribution.',
    featuresGrid: [
      { icon: 'Video', headline: '3-Second Hook Optimization', text: 'Crafting opening visual and verbal hooks that stop thumb-scrolling instantly.' },
      { icon: 'Zap', headline: 'Trending Audio Sync', text: 'Curating fast-trending music tracks to ride platform algorithm recommendation waves.' },
      { icon: 'Layers', headline: 'Dynamic On-Screen Captions', text: 'High-contrast, fast-paced captions improving retention and silent viewing.' },
      { icon: 'Share2', headline: 'Multi-Platform Syndication', text: 'Optimizing and distributing videos simultaneously to Instagram Reels, YouTube Shorts & TikTok.' }
    ],
    fullDeepContent: `Supercharge your social reach with short-form video optimization for Instagram Reels and YouTube Shorts. Short video is the fastest way to gain millions of organic impressions today. We optimize your hooks, edit pacing, add dynamic text overlays, and leverage trending audio.

    Transform simple video ideas into viral short-form assets that bring thousands of new visitors to your account.`,
    basePrice: 299,
    featured: true,
    deliveryTime: '2-4 Days'
  },
  {
    id: 'sm-srv-9',
    slug: 'video-views-growth',
    category: 'Social Media Growth Services',
    title: 'Video Views Growth',
    shortDesc: 'Targeted video promotion campaigns maximizing organic reach, impression counts, watch duration, and social algorithm signals.',
    featuresGrid: [
      { icon: 'Eye', headline: 'Impression & View Spikes', text: 'Accelerating initial view velocity to push videos into platform recommendation feeds.' },
      { icon: 'Target', headline: 'Niche Viewership Filtering', text: 'Ensuring views come from relevant audience segments interested in your topic.' },
      { icon: 'TrendingUp', headline: 'Algorithm Signal Trigger', text: 'Boosting watch time percentages, re-watches, and share metrics.' },
      { icon: 'BarChart3', headline: 'Performance Reporting', text: 'Transparent analytics showing view sources, retention graphs, and audience demographics.' }
    ],
    fullDeepContent: `Break through social media algorithm bottlenecks with our Video Views Growth service. High view counts signal credibility and trigger social media algorithms to recommend your videos to broader organic audiences.

    We optimize video metadata, run targeted promotion pushes, and improve early retention signals for maximum organic reach.`,
    basePrice: 799,
    deliveryTime: '1-3 Days'
  },
  {
    id: 'sm-srv-10',
    slug: 'engagement-growth',
    category: 'Social Media Growth Services',
    title: 'Engagement Growth',
    shortDesc: 'Boost comments, likes, saves, shares, and community interactions through interactive content hooks and active engagement tactics.',
    featuresGrid: [
      { icon: 'MessageSquare', headline: 'Comment & Discussion Hooks', text: 'Posting questions, debate prompts, and interactive stickers that spark replies.' },
      { icon: 'Heart', headline: 'Like & Save Rate Boost', text: 'Creating bookmarkable infographics and actionable carousel guides that drive saves.' },
      { icon: 'Share2', headline: 'Viral Shareability', text: 'Designing relatable memes and high-value takeaways viewers want to DM to friends.' },
      { icon: 'ShieldCheck', headline: 'Algorithm Standing Upgrade', text: 'Higher account engagement scores leading to prioritized feed placement for future posts.' }
    ],
    fullDeepContent: `Transform passive lurkers into active brand advocates with our Engagement Growth strategies. High engagement rates (likes, comments, saves, and shares) are the most critical metric for account longevity and algorithmic reach.

    We revamp your content strategy with interactive call-to-actions, carousel guides, and community response routines.`,
    basePrice: 649,
    deliveryTime: '2-4 Days'
  },
  {
    id: 'sm-srv-11',
    slug: 'organic-growth-strategy',
    category: 'Social Media Growth Services',
    title: 'Organic Growth Strategy',
    shortDesc: 'Comprehensive content blueprint, posting schedules, audience persona analysis, and sustainable algorithmic growth playbooks.',
    featuresGrid: [
      { icon: 'Workflow', headline: 'Custom Content Calendar', text: 'Monthly strategic posting schedule tailored to peak audience activity hours.' },
      { icon: 'Target', headline: 'Audience Persona Mapping', text: 'Deep analysis of competitor content, audience pain points, and viral content gaps.' },
      { icon: 'Sparkles', headline: 'Brand Voice & Visual Guidelines', text: 'Consistent aesthetic templates, tone of voice, and storytelling frameworks.' },
      { icon: 'BarChart3', headline: 'Monthly Growth Playbook', text: 'Continuous strategy updates based on platform algorithm shifts and performance metrics.' }
    ],
    fullDeepContent: `Build a long-term, scalable social media footprint without relying on paid ads. Our Organic Growth Strategy provides a complete operational blueprint covering content pillars, posting frequencies, visual design systems, and audience funneling.

    Designed for businesses and creators who want predictable, organic audience accumulation month after month.`,
    basePrice: 899,
    featured: true,
    deliveryTime: '3-5 Days'
  },
  {
    id: 'sm-srv-12',
    slug: 'social-media-account-audit',
    category: 'Social Media Growth Services',
    title: 'Social Media Account Audit',
    shortDesc: 'Deep-dive profile review, bio & link optimization, competitor benchmarking, algorithm penalty checks, and action plan reports.',
    featuresGrid: [
      { icon: 'Search', headline: 'Deep Profile Diagnostics', text: 'Thorough inspection of bio, profile layout, highlight structure, and link funnels.' },
      { icon: 'AlertCircle', headline: 'Shadowban & Penalty Check', text: 'Identifying flagged hashtags, broken links, or content violations throttling reach.' },
      { icon: 'BarChart3', headline: 'Competitor Benchmark Report', text: 'Detailed analysis of top-performing competitors in your niche and gap opportunities.' },
      { icon: 'CheckCircle2', headline: 'Actionable 10-Step Roadmap', text: 'Clear, prioritized instructions to immediately fix mistakes and unlock organic reach.' }
    ],
    fullDeepContent: `Uncover the exact reasons your social media accounts are stuck or losing reach. Our Social Media Account Audit provides a comprehensive tear-down of your profiles across Instagram, YouTube, TikTok, Facebook, X, or LinkedIn.

    Receive a detailed PDF report and video breakdown identifying content flaws, bio leaks, hashtag errors, and an actionable step-by-step roadmap to restart account growth.`,
    basePrice: 549,
    deliveryTime: '24-48 Hours'
  },

  // WEB DEVELOPMENT SERVICES
  {
    id: 'web-srv-1',
    slug: 'business-website',
    category: 'Web Development Services',
    title: 'Business Website',
    shortDesc: 'Professional, high-converting business websites engineered to showcase services, build brand trust, and generate qualified leads.',
    featuresGrid: [
      { icon: 'Globe', headline: 'Responsive Design', text: 'Flawless presentation across desktop, tablet, and mobile browsers.' },
      { icon: 'Zap', headline: 'Speed & Performance', text: 'Optimized page load speeds with sub-second rendering for maximum conversion.' },
      { icon: 'Search', headline: 'SEO-Friendly Structure', text: 'Clean semantic HTML, meta tags, and schema markup built for top Google rankings.' },
      { icon: 'Shield', headline: 'Enterprise Security', text: 'SSL encryption, secure contact forms, and DDoS protection.' }
    ],
    fullDeepContent: `Our Business Website development service creates a powerful online presence tailored specifically to your company brand and objectives. We build custom websites that combine aesthetic sophistication with strategic conversion paths.

    From small business sites to expanding service providers, we deliver fully responsive, secure, and fast websites engineered to capture leads and drive business growth.`,
    basePrice: 4999,
    featured: true,
    deliveryTime: '3-5 Days'
  },
  {
    id: 'web-srv-2',
    slug: 'corporate-website',
    category: 'Web Development Services',
    title: 'Corporate Website',
    shortDesc: 'Enterprise-grade corporate web portals featuring investor relations, multi-department layouts, and strict security compliance.',
    featuresGrid: [
      { icon: 'Building', headline: 'Multi-Department Architecture', text: 'Structured navigation for corporate divisions, leadership profiles, and newsroom.' },
      { icon: 'Lock', headline: 'Bank-Grade Security', text: 'Comprehensive security audits, role-based access, and encrypted user data handling.' },
      { icon: 'Globe2', headline: 'Multi-Language Support', text: 'Global localization features for international business audiences.' },
      { icon: 'BarChart3', headline: 'Corporate Analytics', text: 'Advanced visitor tracking, event logging, and compliance reporting integrations.' }
    ],
    fullDeepContent: `Establish a authoritative corporate digital flagship with our Corporate Website development service. Designed for medium-to-large enterprises, financial firms, and industry leaders requiring sophisticated governance, security, and brand alignment.

    We build scalable corporate sites engineered to reflect market leadership and engage global stakeholders.`,
    basePrice: 8999,
    featured: true,
    deliveryTime: '5-7 Days'
  },
  {
    id: 'web-srv-3',
    slug: 'e-commerce-website',
    category: 'Web Development Services',
    title: 'E-Commerce Website',
    shortDesc: 'Scalable online stores built for high conversion, multi-currency checkout, inventory management, and seamless payments.',
    featuresGrid: [
      { icon: 'ShoppingBag', headline: 'Product Catalog System', text: 'Dynamic product variations, rich image galleries, and instant category filters.' },
      { icon: 'CreditCard', headline: 'Secure Payment Gateway', text: 'Integrated Stripe, Razorpay, PayPal, Apple Pay, and UPI checkout options.' },
      { icon: 'Truck', headline: 'Shipping & Order Management', text: 'Automated order tracking, shipping tax calculations, and customer email alerts.' },
      { icon: 'Sparkles', headline: 'Conversion Rate Optimization', text: 'Streamlined checkout funnel, express buy buttons, and cross-selling tools.' }
    ],
    fullDeepContent: `Turn visitors into repeat customers with custom E-Commerce Website development. We engineer high-speed online shopping experiences with intuitive product search, fast carts, secure payment processing, and robust back-office inventory tools.

    Built to support thousands of SKUs and handle peak traffic sales events with zero downtime.`,
    basePrice: 2999,
    featured: true,
    deliveryTime: '5-7 Days'
  },
  {
    id: 'web-srv-4',
    slug: 'landing-page',
    category: 'Web Development Services',
    title: 'Landing Page',
    shortDesc: 'High-impact, fast-loading sales & lead generation landing pages optimized for direct response ad campaigns.',
    featuresGrid: [
      { icon: 'Zap', headline: 'Sub-Second Load Time', text: 'Ultra-lightweight code ensuring zero ad dropoff and high Quality Scores.' },
      { icon: 'Target', headline: 'Conversion Focused UX', text: 'Strategic CTA placements, sticky lead capture forms, and social proof sections.' },
      { icon: 'Layers', headline: 'A/B Testing Ready', text: 'Modular design structure enabling instant headline and CTA split testing.' },
      { icon: 'CheckCircle2', headline: 'Lead Webhook Sync', text: 'Instant lead delivery directly to WhatsApp, email, CRM, or Google Sheets.' }
    ],
    fullDeepContent: `Maximize Return on Ad Spend (ROAS) with custom high-converting Landing Pages. We design dedicated campaign landing pages built explicitly for Google Ads, Facebook/Instagram campaigns, and product launches.

    Every element from typography to form placement is engineered to convert ad traffic into qualified leads.`,
    basePrice: 12499,
    deliveryTime: '2-3 Days'
  },
  {
    id: 'web-srv-5',
    slug: 'web-application',
    category: 'Web Development Services',
    title: 'Web Application',
    shortDesc: 'Custom interactive web applications built with modern frontend frameworks, cloud databases, and scalable server architecture.',
    featuresGrid: [
      { icon: 'Code2', headline: 'Modern Full-Stack Architecture', text: 'Built with React, Next.js, TypeScript, Node.js, and cloud backend engines.' },
      { icon: 'Database', headline: 'Real-Time Database Sync', text: 'Reactive cloud data storage with optimistic UI updates and offline resilience.' },
      { icon: 'Users', headline: 'Role & User Access Control', text: 'Secure JWT/OAuth authentication, passwordless login, and permission tiers.' },
      { icon: 'Cpu', headline: 'Automated CI/CD Pipelines', text: 'Continuous integration and automated cloud deployment workflows.' }
    ],
    fullDeepContent: `Transform complex business ideas into robust Web Applications. We craft custom web portals, client dashboards, internal operational tools, and custom software solutions designed for high speed and reliable user interaction.

    Built using modern software engineering standards to scale effortlessly as your user base expands.`,
    basePrice: 3499,
    featured: true,
    deliveryTime: '5-7 Days'
  },
  {
    id: 'web-srv-6',
    slug: 'saas-website',
    category: 'Web Development Services',
    title: 'SaaS Website',
    shortDesc: 'Software-as-a-Service web platforms featuring subscription billing, multi-tenant auth, user dashboards, and usage analytics.',
    featuresGrid: [
      { icon: 'RefreshCw', headline: 'Recurring Subscription Engine', text: 'Integrated Stripe Billing / Chargebee for monthly, yearly, and tiered plans.' },
      { icon: 'Layout', headline: 'User Workspace Dashboard', text: 'Intuitive web app interface for end-users to manage projects and subscriptions.' },
      { icon: 'BarChart3', headline: 'Usage & Quota Tracking', text: 'Automated monitoring of API calls, feature limits, and active user metrics.' },
      { icon: 'ShieldCheck', headline: 'Multi-Tenant Architecture', text: 'Isolated workspace environments ensuring complete user data privacy.' }
    ],
    fullDeepContent: `Launch and scale your Software-as-a-Service product with a dedicated SaaS Website & Platform. We deliver both high-converting public marketing pages and the core authenticated web application dashboard.

    Includes complete billing integration, automated onboarding sequences, usage tracking, and admin management portals.`,
    basePrice: 6499,
    featured: true,
    deliveryTime: '5-7 Days'
  },
  {
    id: 'web-srv-7',
    slug: 'ai-website',
    category: 'Web Development Services',
    title: 'AI Website',
    shortDesc: 'Next-generation AI-powered web portals integrated with real-time LLMs, intelligent search, chatbots, and generative AI tools.',
    featuresGrid: [
      { icon: 'Bot', headline: 'Embedded AI Engines', text: 'Integration with OpenAI GPT-4o, Claude 3.5, and Google Gemini APIs.' },
      { icon: 'Sparkles', headline: 'Generative Content & Tools', text: 'On-demand text, image, code, or document generation within the web browser.' },
      { icon: 'MessageSquare', headline: 'Interactive AI Assistant', text: 'Custom trained web chatbots answering customer queries 24/7 in real time.' },
      { icon: 'Zap', headline: 'Semantic Search Engine', text: 'Vector database-powered search finding exact answers across site knowledge bases.' }
    ],
    fullDeepContent: `Differentiate your brand with an intelligent AI-Powered Website. We embed cutting-edge artificial intelligence models directly into your web platform, allowing visitors to generate content, search naturally, receive automated assistance, and interact with smart web tools.

    Future-proof your web presence with conversational interfaces and personalized user journeys.`,
    basePrice: 15999,
    featured: true,
    deliveryTime: '5-7 Days'
  },
  {
    id: 'web-srv-8',
    slug: 'custom-php-development',
    category: 'Web Development Services',
    title: 'Custom PHP Development',
    shortDesc: 'High-performance custom PHP & Laravel backends, web portals, database systems, and legacy modernizations.',
    featuresGrid: [
      { icon: 'Code2', headline: 'Laravel & Modern PHP', text: 'Clean MVC architectural framework delivering enterprise stability and performance.' },
      { icon: 'Database', headline: 'MySQL / PostgreSQL Optimization', text: 'Efficient database indexing, query caching, and relational data architecture.' },
      { icon: 'Shield', headline: 'Bulletproof Backend Security', text: 'Protection against SQL injection, XSS attacks, CSRF, and data tampering.' },
      { icon: 'RefreshCw', headline: 'Legacy System Upgrade', text: 'Seamless migration of old PHP applications to modern, fast PHP 8+ standards.' }
    ],
    fullDeepContent: `Leverage the reliability of Custom PHP & Laravel Development for server-side web applications. We build custom backend systems, enterprise portals, API engines, and bespoke database management platforms tailored to exact business requirements.

    Delivering clean, secure, and maintainable codebase structure for long-term scalability.`,
    basePrice: 2499,
    deliveryTime: '3-5 Days'
  },
  {
    id: 'web-srv-9',
    slug: 'react-nextjs-development',
    category: 'Web Development Services',
    title: 'React / Next.js Development',
    shortDesc: 'Modern Server-Side Rendered (SSR) & Static Site Generated (SSG) web applications with ultra-fast page speed and top SEO ratings.',
    featuresGrid: [
      { icon: 'Zap', headline: 'Next.js App Router', text: 'Cutting-edge server components, edge rendering, and sub-second navigation.' },
      { icon: 'Search', headline: 'Peak Technical SEO', text: 'Automatic server-rendered HTML pages for instant indexing by search engine bots.' },
      { icon: 'Layers', headline: 'Component Design Systems', text: 'Reusable React UI components styled with Tailwind CSS for rapid scaling.' },
      { icon: 'Globe', headline: 'Vercel / Cloudflare Deploy', text: 'Global edge network CDN deployment for zero latency worldwide.' }
    ],
    fullDeepContent: `Build industry-leading web experiences with React and Next.js. Combining React's interactive frontend with Next.js server-side rendering delivers unmatched performance, instant route transitions, and superior search engine visibility.

    Ideal for fast-growing startups, content portals, and high-performance corporate sites.`,
    basePrice: 3999,
    featured: true,
    deliveryTime: '3-5 Days'
  },
  {
    id: 'web-srv-10',
    slug: 'wordpress-website',
    category: 'Web Development Services',
    title: 'WordPress Website',
    shortDesc: 'Custom WordPress theme & plugin development delivering easy content management, SEO readiness, and hardened security.',
    featuresGrid: [
      { icon: 'Layout', headline: 'Gutenberg & Elementor Custom', text: 'Tailored page builder setup allowing easy drag-and-drop client edits without code.' },
      { icon: 'Zap', headline: 'Speed Optimization', text: 'Advanced caching, image WebP compression, and minified asset delivery.' },
      { icon: 'ShieldCheck', headline: 'Hardened Security Suite', text: 'Malware firewall, two-factor authentication login, and automated backups.' },
      { icon: 'Search', headline: 'SEO Plugin Configuration', text: 'Complete RankMath or Yoast SEO setup for top search rankings.' }
    ],
    fullDeepContent: `Empower your team with a custom WordPress Website that is simple to edit, fast to load, and completely secure. We avoid heavy bloated pre-made templates and craft clean, custom-coded WordPress sites tailored to your brand.

    Includes full training so your team can easily manage blog posts, pages, and media updates.`,
    basePrice: 1899,
    deliveryTime: '3-5 Days'
  },
  {
    id: 'web-srv-11',
    slug: 'shopify-store-development',
    category: 'Web Development Services',
    title: 'Shopify Store Development',
    shortDesc: 'Turnkey Shopify & Shopify Plus e-commerce stores with custom Liquid themes, app integrations, and conversion checkout flows.',
    featuresGrid: [
      { icon: 'ShoppingBag', headline: 'Custom Shopify Liquid Theme', text: 'Pixel-perfect mobile-first shop theme engineered for maximum sales conversion.' },
      { icon: 'Box', headline: 'App Ecosystem Setup', text: 'Integration of reviews, upsell apps, abandoned cart recovery, and inventory tools.' },
      { icon: 'CreditCard', headline: 'Shopify Payments & Checkout', text: 'Multi-currency checkout, UPI, cards, and Buy-Now-Pay-Later payment options.' },
      { icon: 'RefreshCw', headline: 'Data Migration Service', text: 'Smooth product, customer, and order migration from WooCommerce, Magento, or Custom.' }
    ],
    fullDeepContent: `Scale your online retail brand with our Shopify Store Development service. From new store setups to custom Liquid theme development and headless Shopify implementations, we build high-converting e-commerce storefronts.

    Optimized for high mobile sales conversion rates and rapid order fulfillment.`,
    basePrice: 4499,
    deliveryTime: '3-5 Days'
  },
  {
    id: 'web-srv-12',
    slug: 'website-redesign',
    category: 'Web Development Services',
    title: 'Website Redesign',
    shortDesc: 'Complete visual and technical overhaul transforming outdated websites into modern, high-speed, conversion-focused digital platforms.',
    featuresGrid: [
      { icon: 'Sparkles', headline: 'Modern Aesthetic Upgrade', text: 'Contemporary visual UI, typography, color palettes, and interactive motion.' },
      { icon: 'Zap', headline: 'Speed & Mobile Optimization', text: 'Rebuilding legacy bloated code to achieve 90+ Google PageSpeed scores.' },
      { icon: 'TrendingUp', headline: 'SEO Ranking Preservation', text: 'Strict 301 redirect mapping preventing any loss of existing Google search positions.' },
      { icon: 'CheckCircle2', headline: 'Conversion Path Improvement', text: 'Streamlined visitor user journeys designed to double contact form submissions.' }
    ],
    fullDeepContent: `Breathe new life into your online presence with our Website Redesign service. If your current website looks dated, loads slowly, or fails to generate leads, we perform a complete visual and structural overhaul.

    Upgrade to modern web standards while preserving your hard-earned SEO authority and backlinks.`,
    basePrice: 5499,
    deliveryTime: '3-5 Days'
  },
  {
    id: 'web-srv-13',
    slug: 'api-integration',
    category: 'Web Development Services',
    title: 'API Integration',
    shortDesc: 'Seamless REST & GraphQL API connections linking your website to CRMs, ERPs, payment processors, and cloud databases.',
    featuresGrid: [
      { icon: 'Workflow', headline: 'Third-Party Software Sync', text: 'Connect your website seamlessly to Salesforce, HubSpot, Zoho, or custom ERPs.' },
      { icon: 'Zap', headline: 'Real-Time Data Webhooks', text: 'Instant event triggers pushing form submissions, leads, and orders to external systems.' },
      { icon: 'Shield', headline: 'OAuth2 & Token Security', text: 'Secure API authentication handling access tokens, encryption, and rate limiting.' },
      { icon: 'RefreshCw', headline: 'Automated Sync Testing', text: 'Robust error handling preventing data loss during temporary network drops.' }
    ],
    fullDeepContent: `Connect your web platform to the software ecosystem your business relies on. Our API Integration service bridges your website with external CRMs, marketing tools, inventory databases, communication channels, and cloud services.

    Automate manual data entry and create smooth digital workflows across your organization.`,
    basePrice: 4799,
    deliveryTime: '2-3 Days'
  },
  {
    id: 'web-srv-14',
    slug: 'payment-gateway-integration',
    category: 'Web Development Services',
    title: 'Payment Gateway Integration',
    shortDesc: 'Secure multi-currency payment checkout integration supporting Stripe, Razorpay, PayPal, Apple Pay, and UPI.',
    featuresGrid: [
      { icon: 'CreditCard', headline: 'Multi-Gateway Support', text: 'Integrates Razorpay, Stripe, PayPal, Paytm, PhonePe, UPI, and Credit Cards.' },
      { icon: 'ShieldCheck', headline: 'PCI-DSS Security Compliance', text: 'Bank-level encrypted checkout ensuring zero card data leakage.' },
      { icon: 'RefreshCw', headline: 'Automated Webhook Callbacks', text: 'Instant payment status updates, invoice generation, and order activation.' },
      { icon: 'Globe', headline: 'International Currency Auto-Conversion', text: 'Accept global payments with real-time currency conversion rates.' }
    ],
    fullDeepContent: `Start accepting online payments safely and effortlessly on your website. We integrate lead-converting payment checkouts with top global and regional payment gateways.

    Supports one-time purchases, recurring subscriptions, partial deposits, and instant payment confirmations with PCI-DSS compliance.`,
    basePrice: 6999,
    deliveryTime: '1-2 Days'
  },
  {
    id: 'web-srv-15',
    slug: 'website-maintenance',
    category: 'Web Development Services',
    title: 'Website Maintenance',
    shortDesc: 'Comprehensive 24/7 web security, automated cloud backups, speed tuning, bug fixes, and regular content updates.',
    featuresGrid: [
      { icon: 'ShieldCheck', headline: '24/7 Uptime & Security Monitoring', text: 'Proactive malware scanning, SSL renewals, and automated downtime alerts.' },
      { icon: 'Clock', headline: 'Automated Daily Cloud Backups', text: 'Secure daily offsite backups with instant one-click disaster recovery.' },
      { icon: 'Zap', headline: 'Speed & Core Web Vitals Tuning', text: 'Monthly cache clearing, database cleanup, and speed optimizations.' },
      { icon: 'Wrench', headline: 'Dedicated Content & Tech Edits', text: 'Monthly included hours for text changes, banner updates, and plugin upgrades.' }
    ],
    fullDeepContent: `Keep your website fast, secure, and always operational with our Website Maintenance & Support service. We handle all technical updates, security monitoring, database cleanups, and content changes so you can focus on growing your business.

    Eliminate website crashes, hack vulnerabilities, and broken pages with dedicated 24/7 web support.`,
    basePrice: 3199,
    deliveryTime: '24-48 Hours'
  },

  // APP DEVELOPMENT SERVICES
  {
    id: 'app-srv-1',
    slug: 'android-app-development',
    category: 'App Development Services',
    title: 'Android App Development',
    shortDesc: 'Native Kotlin & Java Android apps engineered for speed, high security, and seamless Google Play Store distribution.',
    featuresGrid: [
      { icon: 'Smartphone', headline: 'Native Performance', text: 'Built with Kotlin & Jetpack Compose for fluid 60fps animations and instant launches.' },
      { icon: 'ShieldCheck', headline: 'Google Play Ready', text: 'Complete Play Console compliance, target API updates, and automated release builds.' },
      { icon: 'Zap', headline: 'Push Notification Engine', text: 'Firebase Cloud Messaging integration for instant re-engagement triggers.' },
      { icon: 'Lock', headline: 'Secure Storage & Auth', text: 'Biometric fingerprint login and encrypted local Room database.' }
    ],
    fullDeepContent: `Our Android App Development service delivers high-performance native applications tailored for millions of Android devices. We leverage modern Kotlin and Jetpack Compose frameworks to create scalable, responsive, and secure mobile apps.

    From startup MVP launchers to enterprise field applications, we handle every phase from architecture and API connection to Play Store deployment.`,
    basePrice: 16999,
    featured: true,
    deliveryTime: '5-7 Days'
  },
  {
    id: 'app-srv-2',
    slug: 'ios-app-development',
    category: 'App Development Services',
    title: 'iOS App Development',
    shortDesc: 'High-performance Swift & SwiftUI iOS applications crafted specifically for iPhone, iPad, and Apple ecosystem standards.',
    featuresGrid: [
      { icon: 'Smartphone', headline: 'SwiftUI & Swift Native', text: 'Native iOS code adhering strictly to Apple Human Interface Guidelines.' },
      { icon: 'CheckCircle2', headline: 'App Store Approval Guarantee', text: 'Rigorous Guideline compliance tests ensuring smooth App Store publishing.' },
      { icon: 'Award', headline: 'Apple Pay & In-App Purchases', text: 'Seamless StoreKit and Apple Pay integration for instant user monetization.' },
      { icon: 'Shield', headline: 'Strict Privacy Standards', text: 'Full iOS App Tracking Transparency (ATT) and biometric FaceID protection.' }
    ],
    fullDeepContent: `Build premium iOS applications that deliver an exceptional user experience on Apple devices. Our team crafts native Swift and SwiftUI mobile apps optimized for buttery-smooth performance, memory efficiency, and elegant aesthetics.

    We oversee complete App Store submission, testflight beta testing, and integration with Apple services.`,
    basePrice: 13999,
    featured: true,
    deliveryTime: '5-7 Days'
  },
  {
    id: 'app-srv-3',
    slug: 'cross-platform-app-development',
    category: 'App Development Services',
    title: 'Cross-Platform App Development',
    shortDesc: 'Single codebase mobile solutions running natively across both iOS and Android with maximum cost efficiency and speed.',
    featuresGrid: [
      { icon: 'Globe', headline: 'Unified Codebase', text: 'Write once and deploy everywhere, reducing development costs by up to 50%.' },
      { icon: 'Zap', headline: 'Near-Native Speed', text: 'Compiled native performance handling heavy graphics and complex data structures.' },
      { icon: 'RefreshCw', headline: 'Synchronized Feature Updates', text: 'Deploy feature rollouts and patches across both platforms simultaneously.' },
      { icon: 'Check', headline: 'Device Hardware Bridge', text: 'Full access to camera, GPS, Bluetooth, accelerometer, and biometrics.' }
    ],
    fullDeepContent: `Reach 100% of your mobile market with Cross-Platform App Development. We engineer high-speed multi-platform mobile apps using industry-leading frameworks that deliver true native look and feel on both iOS and Android.

    Save time and engineering budgets while maintaining a single robust codebase.`,
    basePrice: 14999,
    featured: true,
    deliveryTime: '5-7 Days'
  },
  {
    id: 'app-srv-4',
    slug: 'flutter-app-development',
    category: 'App Development Services',
    title: 'Flutter App Development',
    shortDesc: 'Pixel-perfect Google Flutter applications featuring expressive UI widgets, rapid hot reload, and smooth 60/120fps graphics.',
    featuresGrid: [
      { icon: 'Sparkles', headline: 'Custom Impeller Graphics', text: 'Stunning custom animations and vector graphics rendered with Flutter engine.' },
      { icon: 'Clock', headline: 'Rapid Time-to-Market', text: 'Accelerated development sprints using reusable Flutter widget design systems.' },
      { icon: 'Layers', headline: 'State Management Architecture', text: 'Structured with Bloc or Provider for bulletproof code maintainability.' },
      { icon: 'ShieldCheck', headline: 'Web & Desktop Extensible', text: 'Easily compile your app codebase to Web and Desktop targets whenever needed.' }
    ],
    fullDeepContent: `Harness Google's Flutter framework for building beautiful, natively compiled mobile applications. Flutter allows us to build customized visual experiences with custom controls, fluid transitions, and consistent behavior on any screen size.

    Ideal for startups and growing brands demanding high-end visual design and fast execution.`,
    basePrice: 19999,
    deliveryTime: '3-5 Days'
  },
  {
    id: 'app-srv-5',
    slug: 'react-native-app-development',
    category: 'App Development Services',
    title: 'React Native App Development',
    shortDesc: 'Flexible React Native architecture leveraging native device components, Expo ecosystems, and instant over-the-air updates.',
    featuresGrid: [
      { icon: 'Code2', headline: 'Meta-Powered Tech Stack', text: 'Leverages JavaScript/TypeScript and React paradigm for rapid mobile scaling.' },
      { icon: 'Zap', headline: 'Over-The-Air (OTA) Updates', text: 'Push bug fixes and instant UI updates directly to user devices without App Store delays.' },
      { icon: 'Box', headline: 'Rich Native Modules', text: 'Direct bridges to native iOS Objective-C/Swift and Android Java/Kotlin libraries.' },
      { icon: 'TrendingUp', headline: 'Enterprise Modular Scalability', text: 'Trusted by fortune 500 companies for massive multi-million user apps.' }
    ],
    fullDeepContent: `Transform your digital strategy with React Native app development. By combining the flexibility of React with native platform performance, we craft mobile apps that are fast, easy to maintain, and simple to scale.

    Benefit from instant over-the-air code updates and seamless third-party library integrations.`,
    basePrice: 18499,
    deliveryTime: '3-5 Days'
  },
  {
    id: 'app-srv-6',
    slug: 'ai-powered-mobile-apps',
    category: 'App Development Services',
    title: 'AI-Powered Mobile Apps',
    shortDesc: 'Smart mobile applications integrated with real-time AI voice assistants, computer vision, LLM engines, and predictive recommendations.',
    featuresGrid: [
      { icon: 'Bot', headline: 'Embedded AI Engines', text: 'Integration with OpenAI GPT-4o, Claude 3.5, and Google Gemini for real-time intelligence.' },
      { icon: 'Mic', headline: 'Voice & Speech Processing', text: 'Conversational voice input and multi-lingual audio responses.' },
      { icon: 'Image', headline: 'Computer Vision & OCR', text: 'Instant camera document scanning, image recognition, and visual search.' },
      { icon: 'BarChart3', headline: 'Predictive User Insights', text: 'Machine learning models that personalize content recommendations automatically.' }
    ],
    fullDeepContent: `Supercharge your mobile application with artificial intelligence. We build next-generation mobile apps featuring conversational AI copilots, image/object recognition, speech synthesis, and personalized user experiences.

    Whether building a smart healthcare app, AI workout coach, or automated finance scanner, we deliver cutting-edge AI features.`,
    basePrice: 9999,
    featured: true,
    deliveryTime: '5-7 Days'
  },
  {
    id: 'app-srv-7',
    slug: 'e-commerce-app',
    category: 'App Development Services',
    title: 'E-Commerce App',
    shortDesc: 'High-converting mobile shopping applications featuring payment gateway checkouts, product catalogs, wishlist, and real-time order tracking.',
    featuresGrid: [
      { icon: 'ShoppingBag', headline: 'Seamless Payment Gateway', text: 'Integrated Razorpay, Stripe, UPI, Apple Pay, and COD payment options.' },
      { icon: 'Layers', headline: 'Dynamic Product Search & Filters', text: 'Instant search, category filters, inventory sync, and multi-variant product views.' },
      { icon: 'Bell', headline: 'Abandoned Cart Drips', text: 'Automated push notifications and WhatsApp alerts recovering lost sales.' },
      { icon: 'Truck', headline: 'Live Order Tracking Map', text: 'Real-time status updates from order placement to doorstep delivery.' }
    ],
    fullDeepContent: `Turn mobile visitors into loyal buyers with a custom E-Commerce mobile application. We build feature-rich retail apps equipped with fast search engines, smooth checkout flows, customer reviews, discount coupon engines, and order management dashboards.

    Designed for maximum mobile conversion rates and repeat customer purchases.`,
    basePrice: 22999,
    featured: true,
    deliveryTime: '5-7 Days'
  },
  {
    id: 'app-srv-8',
    slug: 'business-app',
    category: 'App Development Services',
    title: 'Business App',
    shortDesc: 'Enterprise productivity and operational mobile apps built to streamline internal staff workflows, inventory, and field management.',
    featuresGrid: [
      { icon: 'Building', headline: 'Role-Based Access Control', text: 'Secure authentication for executives, managers, field agents, and clients.' },
      { icon: 'Workflow', headline: 'Process Automation', text: 'Replaces manual paperwork with digital form submission and instant approval flows.' },
      { icon: 'Database', headline: 'Offline Data Syncing', text: 'Field agents can work offline and sync data automatically when back online.' },
      { icon: 'BarChart3', headline: 'Executive Dashboards', text: 'Real-time business analytics and downloadable PDF/Excel reporting.' }
    ],
    fullDeepContent: `Empower your workforce with tailored Business & Enterprise mobile applications. We digitize complex company workflows, field inspections, attendance tracking, stock management, and internal communications into intuitive mobile interfaces.

    Boost operational efficiency and eliminate data bottlenecks across your organization.`,
    basePrice: 24999,
    deliveryTime: '3-5 Days'
  },
  {
    id: 'app-srv-9',
    slug: 'social-media-app',
    category: 'App Development Services',
    title: 'Social Media App',
    shortDesc: 'Interactive community mobile platforms with live chat, photo/video feeds, user profiles, notifications, and engagement loops.',
    featuresGrid: [
      { icon: 'Share2', headline: 'Real-Time Direct Messaging', text: 'Sub-second chat powered by WebSockets, media sharing, and read receipts.' },
      { icon: 'Video', headline: 'Short-Video & Photo Feeds', text: 'Smooth scrolling feed with algorithmic content distribution and likes/comments.' },
      { icon: 'Users', headline: 'User Profiles & Follow System', text: 'Personalized user channels, follower metrics, and privacy controls.' },
      { icon: 'Shield', headline: 'Community Moderation Tools', text: 'AI content filtering, report flags, and user blocking mechanisms.' }
    ],
    fullDeepContent: `Launch your own thriving digital community or social platform. We engineer custom social media mobile apps complete with real-time messaging, activity feeds, media sharing, push notifications, and moderation controls.

    Built on scalable cloud architecture capable of handling thousands of active concurrent user sessions.`,
    basePrice: 15499,
    deliveryTime: '5-7 Days'
  },
  {
    id: 'app-srv-10',
    slug: 'booking-app',
    category: 'App Development Services',
    title: 'Booking App',
    shortDesc: 'Automated appointment and reservation mobile systems with time-slot calendars, instant payments, and automated reminders.',
    featuresGrid: [
      { icon: 'Calendar', headline: 'Real-Time Slot Availability', text: 'Interactive calendar picker preventing double bookings and schedule conflicts.' },
      { icon: 'CreditCard', headline: 'Deposit & Full Payment', text: 'Collect partial deposit or full payment upfront to reduce no-shows.' },
      { icon: 'MessageSquare', headline: 'WhatsApp & SMS Reminders', text: 'Automated booking confirmations and multi-channel appointment reminders.' },
      { icon: 'Clock', headline: 'Staff Schedule Manager', text: 'Dedicated provider calendar view for managing appointments and days off.' }
    ],
    fullDeepContent: `Automate your service appointments and resource bookings with a custom mobile booking application. Perfect for healthcare clinics, salons, fitness studios, consultation agencies, and event venues.

    Allow clients to pick preferred staff, select open timeslots, pay deposits, and receive instant calendar invites.`,
    basePrice: 17499,
    deliveryTime: '3-5 Days'
  },
  {
    id: 'app-srv-11',
    slug: 'delivery-app',
    category: 'App Development Services',
    title: 'Delivery App',
    shortDesc: 'On-demand logistics and delivery mobile solutions for food, grocery, pharmacy, and courier dispatch networks.',
    featuresGrid: [
      { icon: 'Truck', headline: 'Live GPS Fleet Tracking', text: 'Real-time turn-by-turn map updates for customer, driver, and merchant.' },
      { icon: 'Users', headline: 'Triple App Architecture', text: 'Includes Customer Ordering App, Delivery Driver App, and Vendor/Merchant Portal.' },
      { icon: 'Zap', headline: 'Smart Driver Dispatch', text: 'Algorithmic route optimization assigning orders to nearest available courier.' },
      { icon: 'CheckSquare', headline: 'Proof of Delivery', text: 'Digital OTP verification, signature capture, and photo proof upon arrival.' }
    ],
    fullDeepContent: `Power your on-demand delivery business with a complete mobile logistics suite. We build customer ordering applications, delivery driver apps with turn-by-turn navigation, and merchant dispatch dashboards.

    Scale local delivery operations with automated driver assignment and live GPS route tracking.`,
    basePrice: 7499,
    featured: true,
    deliveryTime: '5-7 Days'
  },
  {
    id: 'app-srv-12',
    slug: 'crm-management-app',
    category: 'App Development Services',
    title: 'CRM / Management App',
    shortDesc: 'Mobile CRM dashboards for sales lead tracking, customer communication history, task assignment, and deal pipelines.',
    featuresGrid: [
      { icon: 'BarChart3', headline: 'Mobile Sales Funnel', text: 'Visual deal stages from new lead acquisition to closed contract.' },
      { icon: 'Phone', headline: 'One-Touch Lead Calling & Logging', text: 'Initiate call or WhatsApp directly from client profile and log call notes.' },
      { icon: 'CheckSquare', headline: 'Team Task Delegation', text: 'Assign follow-up tasks to team members with due date alerts.' },
      { icon: 'RefreshCw', headline: 'Webhook & Cloud Integration', text: 'Syncs automatically with web CRM, Google Sheets, and backend database.' }
    ],
    fullDeepContent: `Keep your sales team connected and productive anywhere with a custom Mobile CRM & Management Application. Track incoming leads, record client interaction history, assign follow-up tasks, and monitor sales performance in real time.

    Never lose a valuable deal due to delayed response times or unorganized sales leads.`,
    basePrice: 4999,
    deliveryTime: '3-5 Days'
  },
  {
    id: 'app-srv-13',
    slug: 'app-ui-ux-design',
    category: 'App Development Services',
    title: 'App UI/UX Design',
    shortDesc: 'User-centric mobile app interface design with interactive Figma prototypes, micro-interactions, wireframes, and design systems.',
    featuresGrid: [
      { icon: 'Palette', headline: 'Figma Interactive Prototypes', text: 'Clickable wireframes and high-fidelity mockups simulating real app feel.' },
      { icon: 'Layout', headline: 'Mobile Design System', text: 'Consistent typography, color palettes, icon sets, and UI component libraries.' },
      { icon: 'Users', headline: 'UX User Journey Mapping', text: 'Intuitive screen flows optimized to minimize friction and maximize retention.' },
      { icon: 'Layers', headline: 'Developer-Ready Assets', text: 'Clean Figma exports with CSS/SVG tokens for effortless developer handoff.' }
    ],
    fullDeepContent: `Transform app concepts into captivating visual designs with our App UI/UX Design service. We craft user-centered mobile interfaces that look breathtaking and feel completely natural to navigate.

    Includes user research, wireframing, clickable Figma prototypes, and complete design systems ready for production development.`,
    basePrice: 1999,
    deliveryTime: '2-3 Days'
  },
  {
    id: 'app-srv-14',
    slug: 'app-maintenance-support',
    category: 'App Development Services',
    title: 'App Maintenance & Support',
    shortDesc: '24/7 post-launch mobile app monitoring, OS version compatibility updates, performance tuning, and security patches.',
    featuresGrid: [
      { icon: 'ShieldCheck', headline: 'OS Version Compatibility', text: 'Proactive updates ensuring seamless performance on new iOS and Android OS releases.' },
      { icon: 'Zap', headline: '24/7 Downtime & Error Alerting', text: 'Automated monitoring catching crash reports and backend API errors immediately.' },
      { icon: 'RefreshCw', headline: 'Monthly Security Patches', text: 'Database optimization, dependency updates, and SSL certificate renewals.' },
      { icon: 'Clock', headline: 'Dedicated Developer Support', text: 'Priority SLA support ticket resolution for critical feature updates.' }
    ],
    fullDeepContent: `Ensure your mobile application remains stable, secure, and compatible with the latest mobile operating systems. Our App Maintenance & Support service provides ongoing health monitoring, bug fixes, performance optimization, and regular security updates.

    Keep your users delighted with zero downtime and fast response times.`,
    basePrice: 1999,
    deliveryTime: '24-48 Hours'
  },

  // AI SOLUTIONS & SERVICES
  {
    id: 'ai-srv-1',
    slug: 'ai-app-development',
    category: 'AI Solutions & Services',
    title: 'AI App Development',
    shortDesc: 'Custom AI-powered iOS & Android mobile applications integrated with LLM engines, computer vision, and predictive analytics.',
    featuresGrid: [
      { icon: 'Smartphone', headline: 'Cross-Platform Native AI', text: 'Built with React Native & Flutter for seamless 60fps performance on iOS & Android.' },
      { icon: 'Cpu', headline: 'On-Device & Cloud Neural Models', text: 'Low-latency inference for real-time speech recognition, image processing, and chat.' },
      { icon: 'ShieldCheck', headline: 'Enterprise Encrypted Data', text: 'Bank-grade token security, biometric auth, and zero-data-leakage architecture.' },
      { icon: 'Zap', headline: 'Push Notification AI Drips', text: 'Behavioral notification triggers driving 3x higher daily app retention.' }
    ],
    fullDeepContent: `Our AI App Development service delivers custom mobile applications engineered around cutting-edge artificial intelligence. We build intelligent mobile software featuring natural language understanding, real-time voice synthesis, computer vision, and predictive recommendations.

    Whether you need an AI fitness coach, a smart financial assistant, an e-commerce personal shopper, or a field diagnostic tool, we deliver production-ready apps with secure API integrations and cloud infrastructure.`,
    basePrice: 5999,
    featured: true,
    deliveryTime: '5-7 Days'
  },
  {
    id: 'ai-srv-2',
    slug: 'ai-website-development',
    category: 'AI Solutions & Services',
    title: 'AI Website Development',
    shortDesc: 'Intelligent, high-converting React & WebGL websites built with automated personalization, AI chatbots, and dynamic UI rendering.',
    featuresGrid: [
      { icon: 'Globe', headline: 'Dynamic AI Layout Engine', text: 'Websites that personalize CTA copy and layout sections based on visitor intent.' },
      { icon: 'Sparkles', headline: 'Instant PageSpeed 99/100', text: 'Ultra-fast Vite & React architecture optimized for Google Core Web Vitals.' },
      { icon: 'MessageSquare', headline: 'Embedded AI Concierge', text: 'Native AI floating assistant that guides visitors directly to checkout.' },
      { icon: 'Lock', headline: 'SSL & DDoS Shielded', text: 'Enterprise cloud hosting with automated backup snapshots and zero downtime.' }
    ],
    fullDeepContent: `Transform your online presence with an AI-first web application. We combine modern aesthetic design with smart client-side personalization, automated lead routing, and built-in conversion optimization.

    Our websites automatically engage visitors, answer complex product queries in natural language, collect lead credentials, and generate instant payment links—yielding unmatched conversion rates.`,
    basePrice: 8499,
    featured: true,
    deliveryTime: '3-5 Days'
  },
  {
    id: 'ai-srv-3',
    slug: 'ai-chatbot-development',
    category: 'AI Solutions & Services',
    title: 'AI Chatbot Development',
    shortDesc: '24/7 conversational customer support & sales chatbots for WhatsApp, Web, Telegram, and mobile apps with zero manual lag.',
    featuresGrid: [
      { icon: 'Bot', headline: 'Multi-Channel Deployment', text: 'Deploy one unified intelligent bot across WhatsApp, Website, Instagram, and Telegram.' },
      { icon: 'CheckCircle2', headline: 'Zero Hallucination Guardrails', text: 'Strict system prompts that stick 100% to your approved knowledge base.' },
      { icon: 'TrendingUp', headline: 'Automated Lead Qualification', text: 'Captures name, email, phone, budget, and schedules sales calls automatically.' },
      { icon: 'RefreshCw', headline: 'CRM Webhook Sync', text: 'Instant lead dispatch to Google Sheets, HubSpot, Salesforce, or custom DB.' }
    ],
    fullDeepContent: `Deploy intelligent AI conversational bots that handle customer inquiries, capture qualified leads, and close sales around the clock. Powered by fine-tuned OpenAI GPT-4o and Claude 3.5 Sonnet engines, our chatbots speak fluent multi-lingual prose.

    Eliminate costly support tickets and long wait times with an instant AI responder that feels human, respectful, and hyper-knowledgeable about your business offerings.`,
    basePrice: 11499,
    featured: true,
    deliveryTime: '24-48 Hours'
  },
  {
    id: 'ai-srv-4',
    slug: 'custom-ai-assistant',
    category: 'AI Solutions & Services',
    title: 'Custom AI Assistant',
    shortDesc: 'Bespoke corporate AI copilot trained on your internal documents, PDFs, databases, and operational SOPs for instant team guidance.',
    featuresGrid: [
      { icon: 'BrainCircuit', headline: 'RAG Vector Ingestion', text: 'Retrieval-Augmented Generation indexing your PDFs, Notion, Drive, and SQL DBs.' },
      { icon: 'Shield', headline: 'Private Data Sandbox', text: 'Your company data is never used to train public models—100% private & isolated.' },
      { icon: 'Clock', headline: 'Instant Team Knowledge Retrieval', text: 'Reduces internal employee lookup times from 30 minutes to under 2 seconds.' },
      { icon: 'Award', headline: 'Role-Based Access Controls', text: 'Granular permissions ensuring employees only query data authorized for their level.' }
    ],
    fullDeepContent: `Give your workforce a supercharged private AI assistant. We build custom RAG (Retrieval-Augmented Generation) applications that convert your company's scattered documents, technical manuals, policy PDFs, and customer support tickets into an interactive oracle.

    Employees can instantly search legal terms, technical specs, inventory levels, or operating procedures using natural conversation.`,
    basePrice: 14999,
    deliveryTime: '2-3 Days'
  },
  {
    id: 'ai-srv-5',
    slug: 'ai-automation',
    category: 'AI Solutions & Services',
    title: 'AI Automation',
    shortDesc: 'End-to-end business process automation connecting leads, CRM data, payment gateways, and automated response pipelines.',
    featuresGrid: [
      { icon: 'Workflow', headline: 'Autonomous Pipeline Engine', text: 'Replaces manual copy-pasting between ad campaigns, email, and CRMs.' },
      { icon: 'Zap', headline: 'Instant Trigger Webhooks', text: 'Executes actions in sub-second timelines when leads submit forms or pay.' },
      { icon: 'Database', headline: 'Zero-Error Data Extraction', text: 'AI parses invoices, receipts, and user forms with 99.8% field accuracy.' },
      { icon: 'BarChart3', headline: 'Live ROI Dashboard', text: 'Track hours saved and processed task volume in a clean administrative portal.' }
    ],
    fullDeepContent: `Automate repetitive, high-volume manual tasks across your business ops. Our AI Automation pipelines connect Meta Ads, Google Ads, WhatsApp, Email, Google Sheets, Razorpay, and internal databases into autonomous workflows.

    Reduce payroll overhead and eliminate human error while operating your business with 24/7 robotic speed.`,
    basePrice: 7999,
    deliveryTime: '24-48 Hours'
  },
  {
    id: 'ai-srv-6',
    slug: 'ai-content-generation',
    category: 'AI Solutions & Services',
    title: 'AI Content Generation',
    shortDesc: 'Automated SEO article writing, social media copy, viral campaign hooks, and email marketing direct-response engines.',
    featuresGrid: [
      { icon: 'FileText', headline: 'Brand Voice Calibration', text: 'AI prompts trained specifically on your brand tone, vocabulary, and audience.' },
      { icon: 'Target', headline: 'Rank-Ready SEO Content', text: 'Includes keyword density, schema markup, and competitor gap optimization.' },
      { icon: 'Share2', headline: '30-Day Campaign Batches', text: 'Generates a month of social media posts, reels scripts, and carousels in 1 click.' },
      { icon: 'Check', headline: 'Plagiarism & AI Detector Safe', text: 'Humanized prose passing zeroGPT and copyscape verification tests.' }
    ],
    fullDeepContent: `Scale your content marketing 10x without hiring massive writing departments. We construct specialized AI copywriting workflows calibrated to produce high-converting landing page headlines, engaging newsletters, viral social posts, and long-form SEO blog articles.

    Every piece of content is structured for maximum audience retention and search engine visibility.`,
    basePrice: 6499,
    deliveryTime: '24 Hours'
  },
  {
    id: 'ai-srv-7',
    slug: 'ai-image-generation',
    category: 'AI Solutions & Services',
    title: 'AI Image Generation',
    shortDesc: 'Hyper-realistic product photos, 4K digital artwork, brand graphics, and avatar renders generated via Midjourney V6 & SDXL.',
    featuresGrid: [
      { icon: 'Image', headline: 'Photorealistic Studio Quality', text: 'Generates studio-lit 4K images indistinguishable from high-budget photography.' },
      { icon: 'Palette', headline: 'Custom Style LoRAs', text: 'Fine-tuned models that replicate your brand visual style across all renders.' },
      { icon: 'Layers', headline: 'Commercial Usage Licensing', text: '100% full commercial ownership rights for ads, packaging, and websites.' },
      { icon: 'Sparkles', headline: 'Instant Aspect Ratio Exports', text: 'Formatted for Instagram 1:1, Stories 9:16, Web 16:9, and Print HD.' }
    ],
    fullDeepContent: `Replace expensive photoshoots and stock photo subscriptions with custom AI image generation. Using advanced Midjourney V6, Stable Diffusion XL, and FLUX models, we craft photorealistic product mockups, lifestyle brand imagery, advertisement visuals, and futuristic concept art.

    Get unlimited visual assets generated in seconds at a fraction of traditional studio costs.`,
    basePrice: 9499,
    deliveryTime: '24 Hours'
  },
  {
    id: 'ai-srv-8',
    slug: 'ai-video-generation',
    category: 'AI Solutions & Services',
    title: 'AI Video Generation',
    shortDesc: 'Automated AI video reels, viral shorts, promotional product ads, and avatar presenters produced in high resolution.',
    featuresGrid: [
      { icon: 'Video', headline: 'Human AI Presenters', text: 'Realistic lip-synced AI avatars speaking 30+ international languages.' },
      { icon: 'Rocket', headline: 'Viral Short-Form Formats', text: 'Optimized for TikTok, Instagram Reels, and YouTube Shorts algorithms.' },
      { icon: 'Sparkles', headline: 'Auto B-Roll & VFX Effects', text: 'Dynamic motion transitions, text overlays, sound effects, and captions.' },
      { icon: 'Clock', headline: 'Rapid Batch Rendering', text: 'Produce up to 30 high-impact video ads per day automatically.' }
    ],
    fullDeepContent: `Dominate video-first platforms with synthetic AI video creation. We build video production pipelines that generate realistic human spokesperson videos, animated product showcases, cinematic AI trailers, and daily social media shorts.

    Complete with automated captions, sound design, and viral script hooks that capture viewer attention immediately.`,
    basePrice: 5499,
    featured: true,
    deliveryTime: '24-48 Hours'
  },
  {
    id: 'ai-srv-9',
    slug: 'ai-voice-text-to-speech',
    category: 'AI Solutions & Services',
    title: 'AI Voice / Text-to-Speech',
    shortDesc: 'Ultra-realistic multi-lingual AI voiceovers, voice cloning, interactive phone agents, and crystal-clear audio synthesis.',
    featuresGrid: [
      { icon: 'Mic', headline: 'Human Emotional Inflection', text: 'Natural pauses, pitch modulation, and accent clarity powered by ElevenLabs.' },
      { icon: 'Globe', headline: '50+ Languages & Dialects', text: 'Hindi, Hinglish, US/UK English, Spanish, Arabic, and regional dialects.' },
      { icon: 'Copy', headline: 'Custom Voice Cloning', text: 'Clone your founder or spokesperson voice with just 60 seconds of audio sample.' },
      { icon: 'Phone', headline: 'Inbound & Outbound Calling Bots', text: 'AI phone agents that dial leads and handle customer calls in real-time.' }
    ],
    fullDeepContent: `Experience studio-grade voice synthesis and conversational audio agents. We deploy ElevenLabs and OpenAI Realtime Voice solutions that generate emotional, human-sounding voiceovers for ads, podcasts, audiobooks, and IVR systems.

    Our interactive AI phone agents can also conduct outbound sales calls and answer customer phone queries automatically.`,
    basePrice: 12999,
    deliveryTime: '24 Hours'
  },
  {
    id: 'ai-srv-10',
    slug: 'ai-photo-video-editing',
    category: 'AI Solutions & Services',
    title: 'AI Photo & Video Editing',
    shortDesc: 'Automated 4K upscaling, object removal, background replacement, auto-captioning, and color grading pipelines.',
    featuresGrid: [
      { icon: 'Sliders', headline: '4K AI Upscaling & Denoise', text: 'Enhance low-res images and videos into crisp, sharp high-definition assets.' },
      { icon: 'Check', headline: 'Instant Background Removal', text: 'Clean cutouts for e-commerce products and portrait photos in sub-seconds.' },
      { icon: 'Layers', headline: 'Dynamic Caption Styles', text: 'Eye-catching animated captions matching top creator video trends.' },
      { icon: 'Sparkles', headline: 'Automated Color Matching', text: 'Harmonize visual mood and cinematic grading across multiple clips.' }
    ],
    fullDeepContent: `Supercharge post-production with automated AI editing tools. We set up smart editing workflows that upscale legacy footage, clean up background noise, auto-generate stylized subtitles, and remove unwanted objects from photos and videos.

    Perfect for e-commerce catalog prep, real estate listings, and high-frequency content creators.`,
    basePrice: 8999,
    deliveryTime: '24 Hours'
  },
  {
    id: 'ai-srv-11',
    slug: 'ai-api-integration',
    category: 'AI Solutions & Services',
    title: 'AI API Integration',
    shortDesc: 'Seamless connection of REST & GraphQL APIs with custom AI middleware, security sanitization, and cloud deployment.',
    featuresGrid: [
      { icon: 'Code2', headline: 'Robust Middleware Gateway', text: 'Connects frontends to backend LLM providers with retry logic & caching.' },
      { icon: 'ShieldCheck', headline: 'Prompt Injection Defense', text: 'Sanitizes all user inputs to prevent unauthorized system prompt overrides.' },
      { icon: 'Zap', headline: 'Streaming Response Tokens', text: 'Sub-100ms time-to-first-token for ultra-responsive user interfaces.' },
      { icon: 'BarChart3', headline: 'Token Cost Optimization', text: 'Smart model routing that cuts monthly API token bills by up to 60%.' }
    ],
    fullDeepContent: `Embed artificial intelligence seamlessly into your existing software architecture. We build secure API bridges and serverless middleware that connect your CRM, web app, or mobile software to top AI providers.

    With built-in rate limiting, response streaming, prompt sanitization, and cost-aware token caching, your app remains fast and economical.`,
    basePrice: 4999,
    deliveryTime: '24-48 Hours'
  },
  {
    id: 'ai-srv-12',
    slug: 'gemini-openai-claude-integration',
    category: 'AI Solutions & Services',
    title: 'Gemini / OpenAI / Claude Integration',
    shortDesc: 'Multi-LLM architecture routing queries to Google Gemini 1.5/2.0, OpenAI GPT-4o, and Anthropic Claude 3.5 Sonnet for peak efficiency.',
    featuresGrid: [
      { icon: 'Cpu', headline: 'Multi-Model Redundancy', text: 'Automatic fallback between Gemini, GPT-4o, and Claude if one provider delays.' },
      { icon: 'Sparkles', headline: 'Multimodal Vision & Audio', text: 'Process images, documents, audio clips, and code snippets in a single request.' },
      { icon: 'Target', headline: 'Task-Optimized Routing', text: 'Routes coding tasks to Claude, multimodal tasks to Gemini, and chat to GPT-4o.' },
      { icon: 'Lock', headline: 'Private API Key Vault', text: 'Server-side key proxy ensuring secrets are never exposed to browser client.' }
    ],
    fullDeepContent: `Harness the combined power of Google Gemini, OpenAI GPT-4o, and Anthropic Claude in a unified backend. We design multi-LLM architectures that dynamically evaluate incoming queries and route them to the optimal model based on cost, speed, and reasoning depth.

    Achieve maximum reliability, lower latency, and superior AI performance for your platform.`,
    basePrice: 16999,
    featured: true,
    deliveryTime: '24-48 Hours'
  },
  {
    id: 'ai-srv-13',
    slug: 'ai-saas-development',
    category: 'AI Solutions & Services',
    title: 'AI SaaS Development',
    shortDesc: 'Full-stack micro-SaaS software development with subscription billing, multi-tenant database auth, and user usage quotas.',
    featuresGrid: [
      { icon: 'Box', headline: 'Turnkey SaaS Boilerplate', text: 'Includes authentication, Stripe/Razorpay billing, usage dashboards, and admin panel.' },
      { icon: 'CreditCard', headline: 'Tiered Pricing & Token Quotas', text: 'Automated billing based on monthly subscription tiers or token usage.' },
      { icon: 'Shield', headline: 'Multi-Tenant Data Isolation', text: 'Secure database schemas keeping customer workspaces isolated.' },
      { icon: 'Globe', headline: 'Scalable Cloud Run Infra', text: 'Auto-scaling dockerized backend handling thousands of concurrent users.' }
    ],
    fullDeepContent: `Launch your own profitable AI Software-as-a-Service product from scratch. We build end-to-end AI SaaS web applications equipped with user authentication, subscription billing, token usage tracking, admin analytics dashboards, and responsive frontends.

    Turn your AI idea into a recurring revenue business in days instead of months.`,
    basePrice: 1999,
    featured: true,
    deliveryTime: '5-7 Days'
  },
  {
    id: 'ai-srv-14',
    slug: 'custom-ai-tools',
    category: 'AI Solutions & Services',
    title: 'Custom AI Tools',
    shortDesc: 'Tailor-made AI calculators, PDF analyzers, code generation portals, and specialized industry productivity software.',
    featuresGrid: [
      { icon: 'Layers', headline: 'Bespoke Utility Architecture', text: 'Single-purpose AI tools built to solve specific friction points in your domain.' },
      { icon: 'Zap', headline: 'Instant Interactive UI', text: 'Clean, responsive web interface requiring zero user training.' },
      { icon: 'Check', headline: 'One-Click Export Formats', text: 'Export generated results directly to PDF, CSV, JSON, or Word files.' },
      { icon: 'Award', headline: 'Custom Branding & Domain', text: 'Hosted on your company sub-domain with full corporate visual styling.' }
    ],
    fullDeepContent: `Build specialized internal tools or public lead-magnets powered by artificial intelligence. From automated resume screeners and legal contract summaries to AI price estimators and code converters, we build lightweight, high-utility custom AI tools.

    Attract new customers or multiply your internal team's output with bespoke software utilities.`,
    basePrice: 1999,
    deliveryTime: '2-3 Days'
  },
  {
    id: 'ai-srv-15',
    slug: 'ai-workflow-automation',
    category: 'AI Solutions & Services',
    title: 'AI Workflow Automation',
    shortDesc: 'Autonomous multi-step agentic workflows linking Make, Zapier, Webhooks, Google Sheets, and CRM lead dispatchers.',
    featuresGrid: [
      { icon: 'Workflow', headline: 'Agentic Multi-Step Logic', text: 'AI agents that plan, verify, and execute multi-step business decisions.' },
      { icon: 'Bell', headline: 'Real-Time Alert Dispatchers', text: 'Instant Slack, WhatsApp, and email alerts when high-value leads convert.' },
      { icon: 'RefreshCw', headline: 'Continuous Self-Healing Logs', text: 'Monitored execution logs with automatic retry on temporary API dropouts.' },
      { icon: 'TrendingUp', headline: '10x Team Productivity', text: 'Frees human staff to focus on strategy while AI handles routine operations.' }
    ],
    fullDeepContent: `Supercharge your operational infrastructure with agentic AI workflow automation. We design intelligent multi-step workflows where autonomous AI agents handle incoming triggers, make logical decisions, parse unstructured data, and update enterprise systems seamlessly.

    Achieve maximum business agility with zero manual intervention.`,
    basePrice: 1999,
    featured: true,
    deliveryTime: '24-48 Hours'
  },

  // HOSTING & TECHNICAL SERVICES
  {
    id: 'host-srv-1',
    slug: 'domain-hosting-setup',
    category: 'Hosting & Technical Services',
    title: 'Domain & Hosting Setup',
    shortDesc: 'Professional domain registration, DNS records mapping, nameserver configuration, and high-performance web hosting server setup.',
    featuresGrid: [
      { icon: 'Globe', headline: 'DNS & Nameserver Mapping', text: 'Custom A, CNAME, MX, TXT, and SPF record configuration for seamless domain mapping.' },
      { icon: 'Server', headline: 'High-Performance Hosting', text: 'Speed-optimized web hosting environment setup for fast page load speeds.' },
      { icon: 'ShieldCheck', headline: 'Security & Spam Protection', text: 'DKIM, DMARC, and email security authentication to protect your domain reputation.' },
      { icon: 'CheckCircle2', headline: 'Turn-key Domain Activation', text: 'End-to-end domain connection with immediate global DNS propagation.' }
    ],
    fullDeepContent: `Get your domain and hosting environment properly configured from day one. We handle domain registration, DNS management, nameserver setup, email routing records (MX, SPF, DKIM, DMARC), and hosting account initialization. Whether you are using Hostinger, GoDaddy, Namecheap, Bluehost, or AWS Route53, we ensure flawless domain-to-server connectivity and rapid global DNS resolution.`,
    basePrice: 499,
    featured: true,
    deliveryTime: '24 Hours'
  },
  {
    id: 'host-srv-2',
    slug: 'cpanel-setup',
    category: 'Hosting & Technical Services',
    title: 'cPanel Setup',
    shortDesc: 'Complete cPanel control panel installation, email accounts configuration, FTP setup, subdomains, and web directory management.',
    featuresGrid: [
      { icon: 'Sliders', headline: 'Control Panel Configuration', text: 'Complete cPanel dashboard tuning, file manager hierarchy, and directory permissions.' },
      { icon: 'Mail', headline: 'Custom Business Email Setup', text: 'Professional email accounts (@yourdomain.com) with webmail and SMTP configuration.' },
      { icon: 'Folder', headline: 'FTP & File Manager Access', text: 'Secure FTP accounts and web directory access control for developer workflows.' },
      { icon: 'Cpu', headline: 'PHP Version & Memory Tuning', text: 'Optimized PHP limits, execution timeouts, and memory allocation for fast scripts.' }
    ],
    fullDeepContent: `Master your hosting environment with professional cPanel setup and optimization. We configure file structures, database users, subdomains, redirection rules, error pages, custom business email accounts with webmail/mobile sync, and FTP credentials. We also optimize PHP versions, memory limits, and file permissions to maximize performance and security.`,
    basePrice: 799,
    featured: true,
    deliveryTime: '24 Hours'
  },
  {
    id: 'host-srv-3',
    slug: 'website-deployment',
    category: 'Hosting & Technical Services',
    title: 'Website Deployment',
    shortDesc: 'Live website deployment for HTML, WordPress, React, Next.js, and custom web applications to production servers with zero downtime.',
    featuresGrid: [
      { icon: 'Rocket', headline: 'Zero-Downtime Deployment', text: 'Smooth code transfer and live activation without breaking existing site traffic.' },
      { icon: 'Code2', headline: 'Multi-Framework Support', text: 'Expert deployment for WordPress, React, Node.js, PHP, Python, and static sites.' },
      { icon: 'Zap', headline: 'Performance Compression', text: 'Asset minification, Gzip/Brotli compression, and caching header configuration.' },
      { icon: 'ShieldCheck', headline: 'Post-Deployment Verification', text: 'Comprehensive testing of forms, links, SSL certificates, and database connections.' }
    ],
    fullDeepContent: `Deploy your website or web application to production safely and efficiently. We manage the entire deployment lifecycle, including build artifact generation, server upload, environment variable configuration, file permission hardening, and live verification. Ensure your site launches smoothly with maximum speed and zero downtime.`,
    basePrice: 1299,
    featured: true,
    deliveryTime: '24-48 Hours'
  },
  {
    id: 'host-srv-4',
    slug: 'cloud-deployment',
    category: 'Hosting & Technical Services',
    title: 'Cloud Deployment',
    shortDesc: 'Scalable cloud infrastructure deployment on AWS, Google Cloud, DigitalOcean, Vercel, Netlify, and Cloudflare with CDN setup.',
    featuresGrid: [
      { icon: 'Cloud', headline: 'Multi-Cloud Infrastructure', text: 'Deployment on AWS, Google Cloud Run, DigitalOcean, Vercel, or Hetzner.' },
      { icon: 'Globe', headline: 'Global CDN & Edge Caching', text: 'Cloudflare CDN routing for lightning-fast asset delivery worldwide.' },
      { icon: 'Cpu', headline: 'Auto-Scaling & Load Balancing', text: 'Resource scaling and load balancing to handle traffic spikes effortlessly.' },
      { icon: 'Lock', headline: 'Cloud Firewall & DDoS Defense', text: 'Web Application Firewall (WAF) rules preventing malicious bot traffic.' }
    ],
    fullDeepContent: `Scale your web applications with enterprise-grade cloud deployment. We design and launch cloud infrastructure on AWS, Google Cloud, DigitalOcean, Vercel, or Render. Combined with Cloudflare CDN, edge caching, SSL, auto-scaling, and Web Application Firewalls (WAF), your app will handle heavy traffic with sub-second response times.`,
    basePrice: 999,
    featured: true,
    deliveryTime: '2-3 Days'
  },
  {
    id: 'host-srv-5',
    slug: 'ssl-installation',
    category: 'Hosting & Technical Services',
    title: 'SSL Installation',
    shortDesc: 'HTTPS security certificate installation (Let’s Encrypt / Custom SSL), HTTP-to-HTTPS automatic redirection, and mixed content fixing.',
    featuresGrid: [
      { icon: 'Lock', headline: '256-Bit HTTPS Encryption', text: 'SSL certificate installation for secure green padlock data transmission.' },
      { icon: 'RefreshCw', headline: 'Auto-Renewal Configuration', text: 'Automated Let’s Encrypt certificate renewal scripts to prevent expiration.' },
      { icon: 'ShieldCheck', headline: 'Mixed Content Resolution', text: 'Fix insecure HTTP script, image, and stylesheet warnings across all pages.' },
      { icon: 'CheckCircle2', headline: 'HSTS & Security Headers', text: 'HTTP Strict Transport Security headers for maximum browser trust.' }
    ],
    fullDeepContent: `Protect user data and boost Google search rankings with 100% secure HTTPS encryption. We install and configure single-domain, wildcard, or EV SSL certificates, set up automatic 301 HTTP-to-HTTPS redirects, eliminate mixed-content browser warnings, and configure automated certificate renewal so your website remains secure forever.`,
    basePrice: 1899,
    featured: true,
    deliveryTime: '24 Hours'
  },
  {
    id: 'host-srv-6',
    slug: 'website-migration',
    category: 'Hosting & Technical Services',
    title: 'Website Migration',
    shortDesc: 'Hassle-free, zero-downtime website and database migration between hosting providers, servers, or domain names.',
    featuresGrid: [
      { icon: 'RefreshCw', headline: 'Seamless Server Transfer', text: 'Full transfer of files, databases, media libraries, and email accounts.' },
      { icon: 'Database', headline: 'Database Integrity Preservation', text: 'Complete MySQL/PostgreSQL export and import without missing data.' },
      { icon: 'Search', headline: 'SEO & URL Structure Protection', text: 'Preserves existing URL structures, permalinks, and search engine index.' },
      { icon: 'Clock', headline: 'Zero Traffic Disruption', text: 'Staging environment migration verified before switching live DNS.' }
    ],
    fullDeepContent: `Switch hosting providers or domain names without losing data, SEO rankings, or website traffic. We handle complete website migrations from host to host (e.g., Hostinger to AWS, GoDaddy to cPanel, Bluehost to SiteGround). We transfer files, databases, custom emails, and configuration settings seamlessly with pre-launch staging verification.`,
    basePrice: 699,
    featured: true,
    deliveryTime: '24-48 Hours'
  },
  {
    id: 'host-srv-7',
    slug: 'database-setup',
    category: 'Hosting & Technical Services',
    title: 'Database Setup',
    shortDesc: 'Professional database installation, user privileges management, remote connection setup, indexing, and performance tuning.',
    featuresGrid: [
      { icon: 'Database', headline: 'MySQL & PostgreSQL Setup', text: 'Custom database creation, schema importing, and collation tuning.' },
      { icon: 'Lock', headline: 'User Privileges & Security', text: 'Secure user permissions, restricted access, and password hashing.' },
      { icon: 'Zap', headline: 'Query & Index Optimization', text: 'Indexing key columns for rapid query execution and low server load.' },
      { icon: 'ShieldCheck', headline: 'Automated Database Backups', text: 'Scheduled SQL dumps and cloud backup retention policies.' }
    ],
    fullDeepContent: `Establish a reliable, high-speed database foundation for your web applications. We set up MySQL, PostgreSQL, MariaDB, or MongoDB databases, configure user access controls, optimize query execution, set up remote connections securely, and establish automated database backups to prevent data loss.`,
    basePrice: 899,
    deliveryTime: '24 Hours'
  },
  {
    id: 'host-srv-8',
    slug: 'server-configuration',
    category: 'Hosting & Technical Services',
    title: 'Server Configuration',
    shortDesc: 'Custom Linux VPS server configuration (Ubuntu/Debian/CentOS), Nginx/Apache setup, PHP-FPM optimization, and system firewall tuning.',
    featuresGrid: [
      { icon: 'Server', headline: 'Linux VPS Hardening', text: 'Ubuntu, Debian, or CentOS server setup with SSH key authentication.' },
      { icon: 'Globe', headline: 'Nginx & Apache Web Servers', text: 'High-performance web server vhosts, reverse proxying, and rewrite rules.' },
      { icon: 'Cpu', headline: 'PHP-FPM & Redis Caching', text: 'In-memory caching and PHP worker optimization for heavy concurrent traffic.' },
      { icon: 'Shield', headline: 'UFW Firewall & Fail2ban', text: 'Brute-force attack prevention, port closing, and fail2ban intrusion defense.' }
    ],
    fullDeepContent: `Unlock maximum performance and security on unmanaged VPS or dedicated servers. We configure Linux web servers from scratch, installing Nginx/Apache, PHP-FPM, MySQL, Redis, SSH keys, UFW firewalls, and Fail2ban intrusion protection. Your VPS will run faster, use fewer resources, and withstand automated cyber threats.`,
    basePrice: 1599,
    deliveryTime: '24-48 Hours'
  },
  {
    id: 'host-srv-9',
    slug: 'website-backup',
    category: 'Hosting & Technical Services',
    title: 'Website Backup',
    shortDesc: 'Automated daily/weekly website file and database backups to off-site cloud storage with 1-click disaster recovery restoration.',
    featuresGrid: [
      { icon: 'Folder', headline: 'Automated Cloud Backups', text: 'Scheduled backup snapshots saved securely to Google Drive, AWS S3, or Dropbox.' },
      { icon: 'RotateCcw', headline: '1-Click Instant Restoration', text: 'Rapid disaster recovery restoring your live site within minutes of crash.' },
      { icon: 'Database', headline: 'Database & Media Backups', text: 'Complete backup covering database tables, media files, themes, and plugins.' },
      { icon: 'ShieldCheck', headline: 'Backup Integrity Verification', text: 'Automated health checks ensuring backup archives are non-corrupted and ready.' }
    ],
    fullDeepContent: `Never worry about losing your website data to server crashes, bad updates, or malware infections. We configure automated, scheduled off-site backups for your files and databases. In the event of an emergency, our 1-click disaster recovery process restores your site to full working order in minutes.`,
    basePrice: 599,
    deliveryTime: '24 Hours'
  },
  {
    id: 'host-srv-10',
    slug: 'technical-support',
    category: 'Hosting & Technical Services',
    title: 'Technical Support',
    shortDesc: 'Dedicated technical troubleshooting for 500 server errors, database connection failures, broken code, slow speed, and plugin conflicts.',
    featuresGrid: [
      { icon: 'Wrench', headline: 'Rapid Troubleshooting', text: 'Diagnosis and immediate resolution of 500, 502, 503, and 504 gateway errors.' },
      { icon: 'Bug', headline: 'Code & Plugin Conflict Fixes', text: 'Debugging PHP crashes, script errors, and broken theme elements.' },
      { icon: 'Zap', headline: 'Site Speed Optimization', text: 'Database cleanup, caching setup, and asset optimization for fast speed.' },
      { icon: 'Clock', headline: '24/7 Priority Assistance', text: 'Direct senior developer support when critical website emergencies happen.' }
    ],
    fullDeepContent: `Get expert technical help whenever your website breaks, slows down, or experiences critical errors. Our senior technical support engineers troubleshoot 500 Internal Server Errors, database connection issues, PHP fatal crashes, broken page layouts, and plugin conflicts rapidly to restore your online business.`,
    basePrice: 1199,
    deliveryTime: '2-4 Hours Emergency Response'
  },
  {
    id: 'host-srv-11',
    slug: 'website-security',
    category: 'Hosting & Technical Services',
    title: 'Website Security',
    shortDesc: 'Malware scanning, virus removal, web application firewall (WAF) protection, security hardening, and blacklist removal.',
    featuresGrid: [
      { icon: 'ShieldAlert', headline: 'Malware Clean & Virus Removal', text: 'Deep file scanning and surgical removal of malicious code or backdoors.' },
      { icon: 'ShieldCheck', headline: 'Firewall & WAF Protection', text: 'Active blocking of SQL injections, XSS attacks, and brute-force logins.' },
      { icon: 'Lock', headline: 'Core System Hardening', text: 'Disabling xmlrpc, hiding PHP versions, and hardening file access permissions.' },
      { icon: 'Globe', headline: 'Google Blacklist Removal', text: 'Submitting clean site reports to Google Safe Browsing and security engines.' }
    ],
    fullDeepContent: `Protect your business reputation and customer data with comprehensive website security hardening. We perform deep malware scans, remove injected malicious code, install Web Application Firewalls (WAF), enforce brute-force protection, disable vulnerable endpoints, and remove Google search blacklist warnings.`,
    basePrice: 1499,
    featured: true,
    deliveryTime: '24 Hours'
  }
];

export const CATEGORIES_LIST = [
  'Hosting & Technical Services',
  'SaaS Development Services',
  'Digital Marketing Services',
  'Content & Creative Services',
  'Social Media Management Services',
  'Social Media Growth Services',
  'Web Development Services',
  'App Development Services',
  'AI Solutions & Services'
] as const;
