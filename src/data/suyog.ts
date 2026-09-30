export const CONTACT = {
  company: "SUYOG",
  address: ["117/111, C-5, Second Floor", "Mandir Marg, Sarvodaya Nagar", "Kanpur, Uttar Pradesh"],
  phones: ["+91 9889107777", "+91 9839119556"],
  since: 1990,
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tally Products", href: "#tally-products" },
  { label: "SUYOG Products", href: "#suyog-products" },
  { label: "Customized Solutions", href: "#customized" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export const TRUST_ITEMS: { value?: number; suffix?: string; label: string }[] = [
  { value: 30, suffix: "+", label: "Years Experience" },
  { label: "Tally Expertise" },
  { label: "Customized Solutions" },
  { label: "Business Automation" },
  { label: "Enterprise Solutions" },
];

export const TALLY_PRODUCTS = [
  {
    name: "TallyPrime",
    icon: "LayoutDashboard",
    description:
      "The complete business management software for accounting, inventory, compliance and reporting — implemented and configured around how your business actually works.",
    benefits: ["Accounting & inventory", "GST-ready compliance", "Insightful business reports"],
  },
  {
    name: "Tally Software Services (TSS)",
    icon: "RefreshCw",
    description:
      "The subscription that keeps your Tally current — product updates, statutory changes and connected Tally capabilities.",
    benefits: ["Product & statutory updates", "Remote access to data", "Online support services"],
  },
  {
    name: "TallyPrime Server",
    icon: "Server",
    description:
      "An enterprise-class edition for organisations running Tally across many users, with better concurrency, control and data security.",
    benefits: ["Multi-user performance", "Centralised data control", "Enhanced security"],
  },
  {
    name: "Tally on Cloud",
    icon: "Cloud",
    description:
      "Run your Tally from anywhere on a managed cloud setup, so teams and branches work on the same data securely.",
    benefits: ["Anywhere access", "Managed hosting", "Multi-location teams"],
  },
];

export const SUYOG_PRODUCTS = [
  {
    name: "EduWeb_eLOGiPay",
    tagline: "Schools, engineering colleges & universities",
    icon: "GraduationCap",
    features: [
      "Fee management",
      "Website integration",
      "Payment gateway integration",
      "TallyPrime integration",
    ],
    featured: true,
  },
  {
    name: "Tally.EduSoft",
    tagline: "Education & institution management on TallyPrime",
    icon: "School",
    features: ["Institution management on TallyPrime"],
  },
  {
    name: "Tally.BuildSoft",
    tagline: "Builders, real estate developers & colonisers",
    icon: "Building2",
    features: [
      "Booking management",
      "Construction stage billing",
      "Property management",
      "PLC management",
      "Project management",
    ],
    featured: true,
  },
  {
    name: "Tally.AutoSoft",
    tagline: "Automobile dealerships, two & four wheeler businesses, auto garages",
    icon: "Car",
    features: ["Vehicle purchase", "Spare parts", "Inventory", "DMS to Tally integration"],
    featured: true,
  },
  {
    name: "Tally.ColdSoft",
    tagline: "Cold storage businesses",
    icon: "Snowflake",
    features: [],
  },
  {
    name: "Jewellery Management",
    tagline: "Jewellery businesses on TallyPrime",
    icon: "Gem",
    features: [],
  },
  {
    name: "Hospital Management",
    tagline: "Hospitals & healthcare institutions",
    icon: "Stethoscope",
    features: [],
  },
];

export const INDUSTRIES = [
  {
    name: "Education",
    icon: "GraduationCap",
    solutions: ["EduWeb_eLOGiPay", "Tally.EduSoft"],
    note: "Fee management, website and payment gateway integration, all connected to TallyPrime.",
  },
  {
    name: "Real Estate",
    icon: "Building2",
    solutions: ["Tally.BuildSoft"],
    note: "Booking, construction stage billing, property, PLC and project management.",
  },
  {
    name: "Automobile",
    icon: "Car",
    solutions: ["Tally.AutoSoft"],
    note: "Vehicle purchase, spare parts, inventory and DMS to Tally integration.",
  },
  {
    name: "Retail",
    icon: "ShoppingBag",
    solutions: ["TallyPrime", "Customized Tally solutions"],
    note: "Retail billing, inventory and reporting configured on TallyPrime.",
  },
  {
    name: "Manufacturing",
    icon: "Factory",
    solutions: ["TallyPrime", "Customized Tally solutions"],
    note: "Production, stock and costing workflows tailored to your plant.",
  },
  {
    name: "Healthcare",
    icon: "Stethoscope",
    solutions: ["Hospital Management"],
    note: "Hospital operations managed alongside accounts on TallyPrime.",
  },
  {
    name: "Jewellery",
    icon: "Gem",
    solutions: ["Jewellery Management"],
    note: "Jewellery-specific inventory and billing on TallyPrime.",
  },
  {
    name: "Other Businesses",
    icon: "Boxes",
    solutions: ["Customized Tally solutions"],
    note: "If your workflow is unique, SUYOG builds the customization around it.",
  },
];

export const CASE_STUDIES = [
  {
    client: "Growmore International Ltd.",
    industry: "Manufacturing & Exports",
    context:
      "A growing operation that needed its accounting and inventory records to match the way its own business processes run.",
    contribution:
      "SUYOG customized Tally around the company's workflows and reporting requirements so day-to-day entries and management reports come from one system.",
    workflow: [
      "Study of existing business processes",
      "Tally customization mapped to those processes",
      "Reports built for management review",
      "Ongoing support as requirements changed",
    ],
  },
  {
    client: "Sahara Ganj Mall",
    industry: "Retail & Malls",
    context:
      "A large retail property where billing, tenant and operational records had to be handled together.",
    contribution:
      "SUYOG delivered Tally-based customization suited to the mall's operational and reporting needs.",
    workflow: [
      "Requirement study with the operations team",
      "Customized modules on Tally",
      "Operational and accounting reports",
      "Continued support and refinement",
    ],
  },
  {
    client: "Mantora Oils",
    industry: "Edible Oils / Manufacturing",
    context:
      "Manufacturing and distribution activity that needed accurate stock and accounting visibility.",
    contribution:
      "SUYOG configured and customized Tally to reflect the company's production and distribution workflow.",
    workflow: [
      "Process mapping",
      "Tally customization",
      "Stock and accounts reporting",
      "Long-term support",
    ],
  },
  {
    client: "Doctor Soap",
    industry: "FMCG / Manufacturing",
    context: "A manufacturing business requiring Tally aligned to its own operating practices.",
    contribution:
      "SUYOG provided Tally customization built around the company's business and reporting needs.",
    workflow: [
      "Understanding the business",
      "Customization on Tally",
      "Reports for decision making",
      "Support after go-live",
    ],
  },
  {
    client: "Remote Sensing Applications Centre (RSAC-UP)",
    industry: "Government / Research",
    context:
      "A government research organisation with accounting and reporting requirements specific to its structure.",
    contribution:
      "SUYOG customized Tally to match the organisation's accounting structure and reporting formats.",
    workflow: [
      "Requirement study",
      "Customization for institutional accounting",
      "Formats aligned to reporting needs",
      "Continued assistance",
    ],
  },
  {
    client: "JET Knitwear Ltd.",
    industry: "Textiles & Apparel",
    context:
      "A knitwear manufacturer needing inventory and production information within its accounting system.",
    contribution:
      "SUYOG built Tally customization suited to the textile manufacturing workflow and its reporting needs.",
    workflow: [
      "Study of manufacturing flow",
      "Tally customization",
      "Inventory and production reports",
      "Ongoing support",
    ],
  },
];

export const WHY_SUYOG = [
  {
    icon: "History",
    title: "30+ Years of Experience",
    body: "Serving businesses since 1990, with the perspective that only long practice gives.",
  },
  {
    icon: "BadgeCheck",
    title: "Deep Tally Expertise",
    body: "Tally implementation, TSS, server, cloud and customization — handled by one team.",
  },
  {
    icon: "Settings2",
    title: "Customized Business Solutions",
    body: "Solutions shaped around your workflows instead of forcing your work into software.",
  },
  {
    icon: "Layers",
    title: "Industry-Specific Software",
    body: "Ready-to-use modules for education, real estate, automobile, healthcare and more.",
  },
  {
    icon: "LifeBuoy",
    title: "Long-Term Support",
    body: "Relationships that continue well beyond installation and go-live.",
  },
  {
    icon: "Target",
    title: "Business-Focused Technology",
    body: "Technology chosen for what it does for your business, not for its own sake.",
  },
];

export const FLOW_STEPS = [
  { title: "Business", body: "Your operations, teams and day-to-day transactions." },
  { title: "TallyPrime", body: "Implemented and configured as the accounting core." },
  { title: "Customized Modules", body: "SUYOG-built modules for your industry workflows." },
  { title: "Automation", body: "Repetitive work handled by the system, not by people." },
  { title: "Reports & Insights", body: "Information management can actually act on." },
];

export const CLIENTS = [
  "Growmore International Ltd.",
  "Sahara Ganj Mall",
  "Mantora Oils",
  "Doctor Soap",
  "Remote Sensing Applications Centre (RSAC-UP)",
  "JET Knitwear Ltd.",
];
