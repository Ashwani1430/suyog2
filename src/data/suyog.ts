import tallyPrimeLogo from "@/assets/Logos/Website Logo/Tally-Prime.png";
import tssLogo from "@/assets/Logos/Website Logo/tss.png";
import tallyServerLogo from "@/assets/Logos/Website Logo/tally-prime-server.png";
import tallyCloudLogo from "@/assets/Logos/Website Logo/Tally-Cloud.png";
import growmoreLogo from "@/assets/Logos/Website Logo/Growmore.png";
import saharaGanjLogo from "@/assets/Logos/Website Logo/Sahara Ganj.png";
import mantoraLogo from "@/assets/Logos/Website Logo/mantoralogo.png";
import doctorSoapLogo from "@/assets/Logos/Website Logo/DoctorSoap.png";
import rsacUpLogo from "@/assets/Logos/Website Logo/RSAUP.png";
import jetLogo from "@/assets/Logos/Website Logo/Jet.jpg";

export const CONTACT = {
  company: "SUYOG",
  address: ["117/111, C-5, Second Floor", "Mandir Marg, Sarvodaya Nagar", "Kanpur, Uttar Pradesh"],
  phones: ["+91 9889107777", "+91 9839119556"],
  since: 1990,
};

export interface NavSubItem {
  label: string;
  href: string;
  description: string;
  badge?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavSubItem[];
}

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tally Products", href: "#tally-products" },
  {
    label: "Suyog Products",
    href: "#suyog-products",
    children: [
      {
        label: "ERP Integration",
        href: "#erp-integration",
        description: "Master & Transaction API integration with TallyPrime",
        badge: "API Sync",
      },
      {
        label: "Partner Products",
        href: "#partners",
        description: "Biz Analyst mobility, Spine HRMS & Shivam Medisoft",
        badge: "Ecosystem",
      },
      {
        label: "Custom Solutions",
        href: "#customized",
        description: "Tailored business modules built around your workflow",
        badge: "Tailored",
      },
    ],
  },
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

export interface TallyProductItem {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  logo: string;
  icon: string;
  description: string;
  benefits: string[];
  overview: string;
  keyCapabilities: { title: string; desc: string }[];
  editionsOrDeployment: { name: string; desc: string }[];
  suyogAdvantages: string[];
}

export const TALLY_PRODUCTS: TallyProductItem[] = [
  {
    id: "tally-prime",
    name: "TallyPrime",
    tagline: "Complete Business Management Software",
    badge: "Flagship ERP",
    logo: tallyPrimeLogo,
    icon: "LayoutDashboard",
    description:
      "The complete business management software for accounting, inventory, statutory compliance, connected banking, and real-time business reports.",
    benefits: [
      "Financial accounting, ledgers & voucher entry",
      "100% GST, e-Way bill & e-Invoice generation",
      "Real-time multi-location inventory & stock audit",
      "400+ analytical reports with 'Go To' search",
    ],
    overview:
      "TallyPrime is India's leading business management software trusted by over 2 million businesses. It intuitively handles your day-to-day accounting, sales, inventory, statutory compliance, and payroll while giving business owners instant 360-degree visibility over operational health.",
    keyCapabilities: [
      {
        title: "E-Invoicing & Connected GST",
        desc: "Generate e-invoices and e-way bills directly without visiting government portals. In-built error detection ensures 100% compliant return filing.",
      },
      {
        title: "Advanced Inventory & Expiry",
        desc: "Batch-wise tracking, multi-location godown management, re-order levels, bill of materials (BOM), and manufacturing journal support.",
      },
      {
        title: "Connected Banking & e-Payments",
        desc: "Direct integration with leading Indian banks for automated bank reconciliations, electronic fund transfers, and cheque printing.",
      },
      {
        title: "400+ Reports & Go To",
        desc: "Multi-dimensional business analytics including Cash Flow, Balance Sheet, Profit & Loss, Ratio Analysis, and lightning-fast search via 'Go To'.",
      },
    ],
    editionsOrDeployment: [
      {
        name: "TallyPrime Silver",
        desc: "Single-user edition designed for standalone PC environments in small enterprises.",
      },
      {
        name: "TallyPrime Gold",
        desc: "Multi-user edition allowing unlimited simultaneous users across an office Local Area Network (LAN).",
      },
    ],
    suyogAdvantages: [
      "Authorized 5-Star Tally Sales & Certified Solution Partner",
      "Custom invoice template designing, voucher customization & TDL plugins",
      "Complete legacy data migration from older Tally versions, Excel, or third-party ERPs",
      "Onsite & remote operator training with dedicated helpline support",
    ],
  },
  {
    id: "tally-tss",
    name: "Tally Software Services (TSS)",
    tagline: "Annual Innovation & Compliance Subscription",
    badge: "Essential Service",
    logo: tssLogo,
    icon: "RefreshCw",
    description:
      "The annual subscription that keeps your Tally updated with latest statutory amendments, automated e-invoicing, and secure remote access.",
    benefits: [
      "Instant statutory tax & GST updates",
      "Secure Tally reports in browser via Tally.NET",
      "Continuous multi-branch data synchronization",
      "Connected banking & digital cheque templates",
    ],
    overview:
      "Tally Software Services (TSS) is an annual subscription that unleashes true connectivity and compliance for your TallyPrime. It guarantees your system is continuously in sync with ever-changing statutory regulations, while enabling secure web browser reporting, bank format feeds, and multi-location data sync.",
    keyCapabilities: [
      {
        title: "Continuous Statutory Upgrades",
        desc: "Stay fully compliant with GST rule revisions, e-invoicing mandates, TDS/TCS rate changes, and audit trail regulations without extra license fees.",
      },
      {
        title: "Tally Reports in Any Browser",
        desc: "Securely view critical financial reports (Balance Sheet, Ledger summaries, Stock status) on any smartphone, tablet, or PC browser with 256-bit encryption.",
      },
      {
        title: "Data Synchronization Across Branches",
        desc: "Synchronize transaction data across multiple branches, warehouses, and head office effortlessly without third-party utility software.",
      },
      {
        title: "Connected Banking Feeds",
        desc: "Automatically download latest auto-reconciliation formats and electronic payment templates for all major commercial banks.",
      },
    ],
    editionsOrDeployment: [
      {
        name: "TSS Silver Renewal",
        desc: "Annual service renewal for single-user TallyPrime Silver licenses.",
      },
      {
        name: "TSS Gold Renewal",
        desc: "Annual service renewal for multi-user TallyPrime Gold installations.",
      },
    ],
    suyogAdvantages: [
      "Hassle-free automated license renewal & instant activation key delivery",
      "Assisted version upgrades with zero business downtime",
      "Configuration of Tally.NET user accounts and web security policies",
      "Priority phone, WhatsApp & remote desk technical assistance",
    ],
  },
  {
    id: "tally-server",
    name: "TallyPrime Server",
    tagline: "Enterprise Concurrency & High Performance",
    badge: "Enterprise Edition",
    logo: tallyServerLogo,
    icon: "Server",
    description:
      "Enterprise-grade server technology designed for high-concurrency environments, delivering zero wait times, data isolation, and 24x7 availability.",
    benefits: [
      "Dedicated concurrency threads for 10+ users",
      "Concealed data paths for airtight security",
      "24x7 live operations with background backups",
      "Real-time user monitoring & session controls",
    ],
    overview:
      "TallyPrime Server is engineered specifically for fast-growing and mid-to-large enterprises where dozens of concurrent users work simultaneously on Tally data. By shifting from file-share to a dedicated client-server architecture, it delivers multi-fold performance gains, eliminates data locks, and elevates administrative security.",
    keyCapabilities: [
      {
        title: "Zero Concurrency Bottlenecks",
        desc: "Multiple data entry operators and managers can access reports and generate invoices simultaneously without system slowdowns or wait queues.",
      },
      {
        title: "Airtight Data Path Concealment",
        desc: "Server files and database paths are completely concealed from end users, preventing accidental deletion, copying, or ransomware vulnerability.",
      },
      {
        title: "Uninterrupted Live Background Backups",
        desc: "Take scheduled automated system backups in real time without requiring operators to log out or interrupting ongoing billing.",
      },
      {
        title: "Server Monitoring & Session Audit",
        desc: "Admins gain live visibility into active sessions, transaction processing times, system resource consumption, and user activity.",
      },
    ],
    editionsOrDeployment: [
      {
        name: "Enterprise Server Deployment",
        desc: "Installed on a dedicated server / private cloud cluster serving 10 to 100+ concurrent users.",
      },
      {
        name: "Hybrid High-Availability",
        desc: "Redundant cluster setup with failover support for mission-critical corporate installations.",
      },
    ],
    suyogAdvantages: [
      "Server architecture consultation, hardware sizing, and OS optimization",
      "Complete installation, data segmentation, and permission matrix setup",
      "Performance benchmarking and multi-branch network latency tuning",
      "Dedicated Enterprise SLA & priority senior engineer dispatch",
    ],
  },
  {
    id: "tally-cloud",
    name: "Tally on Cloud",
    tagline: "Anywhere, Anytime Secure Remote Access",
    badge: "Cloud Managed",
    logo: tallyCloudLogo,
    icon: "Cloud",
    description:
      "High-speed cloud hosting allowing your team to access genuine TallyPrime from any browser, OS, or remote location with enterprise security.",
    benefits: [
      "Any device access: Windows, Mac, Linux, iPad, Android",
      "Daily automated snapshot backups & disaster recovery",
      "Enterprise 256-bit SSL encryption & 2-factor login",
      "Zero server maintenance & instant branch scalability",
    ],
    overview:
      "Tally on Cloud provides the complete, unrestricted desktop power of TallyPrime hosted on high-performance enterprise cloud servers. Ideal for businesses with distributed offices, field accountants, remote directors, and multi-state operations requiring ultra-low latency access from anywhere.",
    keyCapabilities: [
      {
        title: "Cross-Platform Universal Access",
        desc: "Launch TallyPrime seamlessly via web browser or native remote client on MacBook, Windows PC, Chromebook, Android tablet, or iPad.",
      },
      {
        title: "Enterprise Cloud Security & 2FA",
        desc: "Protected by hardware firewalls, dual-layer authentication (Tally.NET ID + PIN), role-based IP whitelisting, and SSL data encryption.",
      },
      {
        title: "High-Speed NVMe Performance",
        desc: "Powered by tier-3/4 data centers with dedicated RAM and ultra-fast NVMe storage, delivering desktop-speed responsiveness even over standard mobile internet.",
      },
      {
        title: "Automated Multi-Version Cloud Backups",
        desc: "Daily automatic snapshots with off-site retention ensure continuous data preservation and one-click recovery against ransomware or hardware failures.",
      },
    ],
    editionsOrDeployment: [
      {
        name: "Standard Cloud Plan",
        desc: "Dedicated virtual workspace for 2 to 5 concurrent remote users.",
      },
      {
        name: "Corporate Dedicated Cluster",
        desc: "High-compute dedicated virtual machine with custom RAM, CPU, and unlimited storage for 10+ users.",
      },
    ],
    suyogAdvantages: [
      "End-to-end cloud migration with zero data loss guarantee",
      "Local printer & barcode scanner pass-through integration",
      "99.9% guaranteed uptime SLA backed by 24x7 monitoring",
      "Complimentary backup verification drills and disaster recovery support",
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

export interface CaseStudyItem {
  client: string;
  industry: string;
  logo: string;
  scale?: string;
  badge?: string;
  context: string;
  contribution: string;
  workflow: string[];
}

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    client: "Growmore International Ltd.",
    industry: "Manufacturing & Exports",
    logo: growmoreLogo,
    scale: "scale-125",
    badge: "Custom ERP & Exports",
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
    logo: saharaGanjLogo,
    scale: "scale-125",
    badge: "Mall & Tenant Ops",
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
    logo: mantoraLogo,
    scale: "scale-130",
    badge: "Process Automation",
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
    logo: doctorSoapLogo,
    scale: "scale-125",
    badge: "FMCG Inventory Sync",
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
    logo: rsacUpLogo,
    scale: "scale-115",
    badge: "Govt Institutional",
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
    logo: jetLogo,
    scale: "scale-125",
    badge: "Textile & Job Work",
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
