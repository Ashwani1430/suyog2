export const CONTACT = {
  company: "SUYOG",
  address: ["117/111, C-5, Second Floor", "Mandir Marg, Sarvodaya Nagar", "Kanpur, Uttar Pradesh"],
  phones: ["+91 9889107777", "+91 9839119556"],
  since: 1990,
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#tally-products" },
  { label: "ERP Integration", href: "#erp-integration" },
  { label: "Custom Solutions", href: "#customized" },
  { label: "Contact", href: "#contact" },
];

export const FOOTER_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Tally Products", href: "#tally-products" },
  { label: "SUYOG Products", href: "#suyog-products" },
  { label: "ERP Integration", href: "#erp-integration" },
  { label: "Customized Solutions", href: "#customized" },
  { label: "Leading Clients", href: "#clients" },
  { label: "Trusted Partners", href: "#partners" },
  { label: "Contact Us", href: "#contact" },
];

export const TRUST_ITEMS: { value?: number; suffix?: string; label: string }[] = [
  { value: 36, suffix: "+", label: "Years Experience" },
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
    benefits: [
      "Financial accounting & ledgers",
      "GST-ready statutory compliance",
      "Real-time inventory & stock audit",
      "Management analytical reporting",
    ],
  },
  {
    name: "Tally Software Services (TSS)",
    icon: "RefreshCw",
    description:
      "The subscription that keeps your Tally current — continuous statutory upgrades, multi-location sync, and connected digital capabilities.",
    benefits: [
      "Instant statutory tax upgrades",
      "Secure mobile & remote sync",
      "Automated e-invoice & e-way bills",
      "Priority online support access",
    ],
  },
  {
    name: "TallyPrime Server",
    icon: "Server",
    description:
      "An enterprise-class edition for organisations running Tally across many users, with better concurrency, control and data security.",
    benefits: [
      "Multi-user concurrent speed",
      "Centralized user permission control",
      "Zero system queue bottlenecks",
      "High reliability & data security",
    ],
  },
  {
    name: "Tally on Cloud",
    icon: "Cloud",
    description:
      "Run your Tally from anywhere on a managed cloud setup, so teams and branches work on the same data securely.",
    benefits: [
      "Anywhere, any-device remote access",
      "Automated multi-tier cloud backup",
      "Multi-branch live data aggregation",
      "Zero local server maintenance",
    ],
  },
];

export const SUYOG_PRODUCTS: {
  name: string;
  tagline: string;
  icon: string;
  features: string[];
  featured?: boolean;
}[] = [
  {
    name: "EduWeb_eLOGiPay",
    tagline: "Universities, colleges & private schools",
    icon: "GraduationCap",
    features: [
      "Fee & student dues tracking",
      "Online payment gateway integration",
      "Automatic TallyPrime voucher creation",
      "Student web portal & dues alerts",
    ],
    featured: true,
  },
  {
    name: "Tally.EduSoft",
    tagline: "Educational institution ERP on Tally",
    icon: "School",
    features: [
      "Admission & enrollment database",
      "Course-wise fee structure billing",
      "Staff payroll & biometric attendance",
      "Multi-counter cash reconciliation",
    ],
  },
  {
    name: "Tally.BuildSoft",
    tagline: "Real estate developers & builders",
    icon: "Building2",
    features: [
      "Unit booking & flat allotment registry",
      "Construction stage milestone billing",
      "PLC & installment schedule tracking",
      "Subcontractor work-order costing",
    ],
    featured: true,
  },
  {
    name: "Tally.AutoSoft",
    tagline: "Auto dealerships & service workshops",
    icon: "Car",
    features: [
      "Vehicle purchase & RTO documentation",
      "Spare parts inventory & barcode tags",
      "Job card generation & service billing",
      "Automated DMS to Tally transaction sync",
    ],
    featured: true,
  },
  {
    name: "Tally.ColdSoft",
    tagline: "Cold storage & agro-warehousing units",
    icon: "Snowflake",
    features: [
      "Chamber & floor rack allocation",
      "Periodic storage rental billing",
      "Inward & outward lot gate-passes",
      "Automated weight loss audit logs",
    ],
  },
  {
    name: "Jewellery Management",
    tagline: "Jewellers, wholesalers & retail showrooms",
    icon: "Gem",
    features: [
      "Metal purity & hallmark record",
      "Making charges & stone valuation",
      "Old gold exchange voucher accounting",
      "Item-wise barcode tag printing",
    ],
  },
  {
    name: "Hospital Management",
    tagline: "Hospitals, nursing homes & polyclinics",
    icon: "Stethoscope",
    features: [
      "OPD & IPD billing management",
      "Doctor consultation & share split",
      "In-house pharmacy stock tracking",
      "Direct Tally financial reporting",
    ],
  },
  {
    name: "Tally.TexSoft",
    tagline: "Textile mills, weaving & garment units",
    icon: "Factory",
    features: [
      "Yarn, fabric & roll batch tracking",
      "Dyeing & printing job-work orders",
      "Loom production output monitor",
      "GST statutory return automation",
    ],
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
    name: "Textiles",
    icon: "Factory",
    solutions: ["Tally.TexSoft", "Customized Tally solutions"],
    note: "Job work, weaving, yarn inventory and loom tracking on TallyPrime.",
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
    title: "36+ Years of Experience",
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
  "Superhouse Group",
  "UPSRTC",
  "House of Hiranandani",
  "G.D. Goenka Public School",
  "Mohani Tea Leaves",
  "PSIT Kanpur",
  "Sahara Ganj Mall",
  "Remote Sensing Applications Centre (RSAC-UP)",
  "JET Knitwear Ltd.",
  "Growmore International Ltd.",
  "Doctor Soap",
  "Mantora Oils",
  "Shoolini University",
  "Sri Sri Tattva",
  "St. Mary's Orthodox School",
  "Methodist High School",
  "Ambika Group",
  "Dreamland",
  "Jeet",
  "KD Group",
  "Nirman",
  "Paloma",
  "Protech",
  "Radiant",
  "Shree Sanatan",
  "Uttarayan",
];

export const PRIMARY_PHONE = CONTACT.phones[0] ?? "";
export const PRIMARY_TEL = PRIMARY_PHONE.replace(/\s/g, "");
