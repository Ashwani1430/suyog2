import tallyPrimeLogo from "@/assets/Logos/Website Logo/Tally-Prime.png";
import tssLogo from "@/assets/Logos/Website Logo/tss.png";
import tallyServerLogo from "@/assets/Logos/Website Logo/tally-prime-server.png";
import tallyCloudLogo from "@/assets/Logos/Website Logo/Tally-Cloud.png";
import tallyWhatsappLogo from "@/assets/Logos/Website Logo/tally-whatsapp.svg";
import tallyDriveLogo from "@/assets/Logos/Website Logo/tally-drive.svg";
import tallyIraLogo from "@/assets/Logos/Website Logo/tally-ira.svg";
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
  { label: "Suyog Products", href: "#suyog-products" },
  { label: "ERP Integration", href: "#erp-integration" },
  { label: "Partner Products", href: "#partners" },
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
  { label: "Client Testimonials", href: "#testimonials" },
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

export interface ProductPricePlan {
  name: string;
  tag?: string;
  popular?: boolean;
  perpetualPrice?: string;
  perpetualNote?: string;
  rentalPrices?: { duration: string; price: string; note?: string }[];
  features: string[];
}

export interface TallyProductItem {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  startingPrice: string;
  startingPriceNote?: string;
  logo: string;
  icon: string;
  description: string;
  benefits: string[];
  overview: string;
  keyCapabilities: { title: string; desc: string }[];
  editionsOrDeployment: { name: string; desc: string }[];
  pricingPlans: ProductPricePlan[];
  suyogAdvantages: string[];
}

export const TALLY_PRODUCTS: TallyProductItem[] = [
  {
    id: "tally-prime",
    name: "TallyPrime",
    tagline: "Complete Business Management Software",
    badge: "Flagship ERP",
    startingPrice: "From ₹750/mo or ₹22,500",
    startingPriceNote: "Official Pricing • Excl. 18% GST",
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
    pricingPlans: [
      {
        name: "TallyPrime Silver",
        tag: "Single Standalone PC",
        perpetualPrice: "₹22,500",
        perpetualNote: "Lifetime License • Includes 12 Months Free TSS",
        rentalPrices: [
          { duration: "1 Month", price: "₹750" },
          { duration: "3 Months", price: "₹2,138", note: "Effective ₹712.5/mo" },
          { duration: "12 Months", price: "₹8,100", note: "Effective ₹675/mo (Save 10%)" },
        ],
        features: [
          "Complete accounting, invoicing, inventory & banking features",
          "100% GST, e-Way bill & e-Invoice generation",
          "Single-user desktop installation on 1 PC",
          "Includes 1 Year complimentary Tally Software Services (TSS)",
        ],
      },
      {
        name: "TallyPrime Gold",
        tag: "Unlimited Multi-User LAN",
        popular: true,
        perpetualPrice: "₹67,500",
        perpetualNote: "Lifetime License • Includes 12 Months Free TSS",
        rentalPrices: [
          { duration: "1 Month", price: "₹2,250" },
          { duration: "3 Months", price: "₹6,413", note: "Effective ₹2,137.5/mo" },
          { duration: "12 Months", price: "₹24,300", note: "Effective ₹2,025/mo (Save 10%)" },
        ],
        features: [
          "Unlimited PCs on office Local Area Network (LAN)",
          "Simultaneous multi-user data entry, billing & reporting",
          "Full security matrix, user roles & audit trail controls",
          "Includes 1 Year complimentary Tally Software Services (TSS)",
        ],
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
    startingPrice: "From ₹4,500 / year",
    startingPriceNote: "Annual Renewal • Excl. 18% GST",
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
    pricingPlans: [
      {
        name: "TSS Silver Renewal",
        tag: "For TallyPrime Silver",
        perpetualPrice: "₹4,500",
        perpetualNote: "1 Year Annual Renewal (+ 18% GST)",
        rentalPrices: [
          { duration: "1 Year", price: "₹4,500 / yr" },
          { duration: "2 Years", price: "₹8,100", note: "10% Multi-Year Discount" },
        ],
        features: [
          "Continuous statutory tax & GST amendments",
          "Automated e-invoice & e-way bill generation updates",
          "Tally reports in any mobile/tablet browser via Tally.NET",
          "Connected banking formats & digital cheque templates",
        ],
      },
      {
        name: "TSS Gold Renewal",
        tag: "For TallyPrime Gold",
        popular: true,
        perpetualPrice: "₹13,500",
        perpetualNote: "1 Year Annual Renewal (+ 18% GST)",
        rentalPrices: [
          { duration: "1 Year", price: "₹13,500 / yr" },
          { duration: "2 Years", price: "₹24,300", note: "10% Multi-Year Discount" },
        ],
        features: [
          "Multi-user statutory updates across all office workstations",
          "Multi-branch data synchronization across warehouses & HQ",
          "Browser reporting for multiple directors & stakeholders",
          "Instant access to all new TallyPrime major version releases",
        ],
      },
      {
        name: "TSS Auditor Edition",
        tag: "For Chartered Accountants",
        perpetualPrice: "₹6,750",
        perpetualNote: "1 Year Annual Renewal (+ 18% GST)",
        rentalPrices: [
          { duration: "1 Year", price: "₹6,750 / yr" },
          { duration: "2 Years", price: "₹12,150", note: "10% Multi-Year Discount" },
        ],
        features: [
          "Statutory audit & verification tools",
          "Client data analysis & audit trail review",
          "Direct Tally.NET synchronization with client companies",
        ],
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
    startingPrice: "₹2,70,000 (Enterprise)",
    startingPriceNote: "Perpetual License • Excl. 18% GST",
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
    pricingPlans: [
      {
        name: "TallyPrime Server Enterprise License",
        tag: "Dedicated Enterprise Architecture",
        popular: true,
        perpetualPrice: "₹2,70,000",
        perpetualNote: "Lifetime License (+ 18% GST = ₹3,18,600 Total)",
        rentalPrices: [
          { duration: "Concurrent Architecture", price: "Works with TallyPrime Gold" },
        ],
        features: [
          "Dedicated multi-threading engine for 10 to 100+ concurrent operators",
          "Zero wait queues or report generation slowdowns",
          "Airtight data path concealment protecting against ransomware & data leaks",
          "Uninterrupted automated background backups during live transactions",
          "Live admin monitoring & real-time session audit",
        ],
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
    startingPrice: "From ₹500 - ₹750 / user / mo",
    startingPriceNote: "Managed Cloud • Excl. 18% GST",
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
    pricingPlans: [
      {
        name: "Starter Cloud",
        tag: "1 - 3 Users",
        perpetualPrice: "₹600",
        perpetualNote: "Per User / Month (Billed Quarterly or Annually)",
        rentalPrices: [
          { duration: "Monthly", price: "₹600 / user / mo" },
          { duration: "Annual", price: "₹6,480 / user / yr", note: "10% Savings" },
        ],
        features: [
          "Anywhere access via Windows, Mac, iPad, Android & Web Browser",
          "Daily automated cloud backups & snapshot recovery",
          "Enterprise SSL encryption & 2-factor authentication",
          "Zero hardware maintenance or local server costs",
        ],
      },
      {
        name: "Business Cloud",
        tag: "4 - 10 Users",
        popular: true,
        perpetualPrice: "₹500",
        perpetualNote: "Per User / Month (Billed Quarterly or Annually)",
        rentalPrices: [
          { duration: "Monthly", price: "₹500 / user / mo" },
          { duration: "Annual", price: "₹5,400 / user / yr", note: "10% Savings" },
        ],
        features: [
          "Dedicated RAM & ultra-fast NVMe storage tier",
          "Optimized multi-user concurrency & zero latency",
          "Local printer & barcode scanner pass-through support",
          "99.9% uptime guarantee with priority assistance",
        ],
      },
      {
        name: "Tally Prime Server Pack",
        tag: "Enterprise Server Edition",
        perpetualPrice: "₹750",
        perpetualNote: "Per User / Month (+ 18% GST)",
        rentalPrices: [
          { duration: "Monthly", price: "₹750 / user / mo" },
          { duration: "Annual", price: "₹8,100 / user / yr", note: "10% Savings" },
        ],
        features: [
          "High-compute multi-threading server cloud architecture",
          "Dedicated RAM & optimized multi-user concurrency for 10+ users",
          "Local printer, scanner & barcode pass-through integration",
          "Continuous automated cloud backups with zero data locks",
        ],
      },
    ],
    suyogAdvantages: [
      "End-to-end cloud migration with zero data loss guarantee",
      "Local printer & barcode scanner pass-through integration",
      "99.9% guaranteed uptime SLA backed by 24x7 monitoring",
      "Complimentary backup verification drills and disaster recovery support",
    ],
  },
  {
    id: "tally-whatsapp",
    name: "TallyPrime with WhatsApp",
    tagline: "Instant Business Communication & Invoicing on WhatsApp",
    badge: "WhatsApp Business API",
    startingPrice: "From ₹1,300 / year",
    startingPriceNote: "Annual Subscription • Excl. 18% GST",
    logo: tallyWhatsappLogo,
    icon: "MessageSquare",
    description:
      "Seamlessly share invoices, payment reminders, order confirmations, and financial reports directly from TallyPrime to customers via verified WhatsApp Business API.",
    benefits: [
      "Instant 1-click sharing of PDF invoices & payment receipts",
      "Embedded UPI & digital payment links for faster recovery",
      "Single and bulk transaction dispatch directly from vouchers",
      "Official Meta-verified WhatsApp Business Solution Provider",
    ],
    overview:
      "TallyPrime with WhatsApp Business bridges your accounting software with Meta's official WhatsApp Business API. Send invoices, payment reminders, outstanding statements, purchase orders, and ledger reports instantly to customers and vendors directly as they are generated.",
    keyCapabilities: [
      {
        title: "Instant Document & Invoice Dispatch",
        desc: "Send beautifully formatted PDF or JPEG invoices, quotations, receipts, and account statements directly from TallyPrime print/export screens.",
      },
      {
        title: "Integrated Payment Links for Faster Collection",
        desc: "Embed secure digital payment and UPI links directly inside your WhatsApp messages to collect customer dues up to 3x faster.",
      },
      {
        title: "Bulk & Automated Notification Center",
        desc: "Notify dozens of clients regarding payment dues, dispatch updates, and statement summaries simultaneously with personalized templates.",
      },
      {
        title: "Meta-Verified Business Identity",
        desc: "Operates via official WhatsApp Business API (WABA) powered by Interakt, giving your company a verified, trusted green-tick-ready brand presence.",
      },
    ],
    editionsOrDeployment: [
      {
        name: "Standard WABA Subscription",
        desc: "Annual subscription providing full WhatsApp API connectivity inside TallyPrime.",
      },
      {
        name: "Usage Top-up Wallet",
        desc: "Flexible wallet packs covering Meta message conversations with automatic carry-forward.",
      },
    ],
    pricingPlans: [
      {
        name: "Annual WhatsApp Subscription",
        tag: "12-Month WABA Service",
        popular: true,
        perpetualPrice: "₹1,300",
        perpetualNote: "Annual Subscription (+ 18% GST = ₹1,534 Total)",
        rentalPrices: [
          { duration: "1 Year Service", price: "₹1,300 / year" },
        ],
        features: [
          "Full WhatsApp Business API connectivity inside TallyPrime",
          "Official Meta Business profile with verified sender name",
          "Pre-approved transaction templates for invoices & receipts",
          "Dedicated onboarding & phone number verification by SUYOG",
        ],
      },
      {
        name: "Usage Wallet Top-up Pack",
        tag: "Per-Conversation Wallet",
        perpetualPrice: "From ₹675",
        perpetualNote: "Wallet Recharge (+ 18% GST)",
        rentalPrices: [
          { duration: "Starter Wallet", price: "₹675 (₹500 Balance)" },
          { duration: "Business Wallet", price: "Custom Top-up" },
        ],
        features: [
          "Covers Meta business-initiated utility & authentication messages",
          "Unused wallet balance carries forward upon annual renewal",
          "Real-time balance tracking & low-balance email alerts",
        ],
      },
    ],
    suyogAdvantages: [
      "Assistance with Meta Business Manager verification and documentation",
      "Official phone number onboarding on the WhatsApp Business API",
      "Configuration of pre-approved invoice, reminder, and receipt templates",
      "Ongoing technical support for wallet recharges and connection health",
    ],
  },
  {
    id: "tally-drive",
    name: "TallyDrive",
    tagline: "Secure Automated Cloud Backup Built into TallyPrime",
    badge: "Cloud Backup & Sync",
    startingPrice: "Free with TSS • Expandable",
    startingPriceNote: "1-3 GB Free with Active TSS • Excl. 18% GST",
    logo: tallyDriveLogo,
    icon: "HardDrive",
    description:
      "Safeguard your critical accounting data with automated scheduled cloud backups, incremental encryption, and one-click instant disaster recovery directly inside TallyPrime.",
    benefits: [
      "1 to 3 GB complimentary cloud storage with active TSS",
      "Automated scheduled daily, weekly, or monthly backups",
      "Space-saving incremental compression (saves only changes)",
      "Full compliance with government electronic audit regulations",
    ],
    overview:
      "TallyDrive is the official cloud backup and storage solution built directly into TallyPrime. Designed to eliminate the danger of ransomware attacks, local disk crashes, and accidental deletions, it automatically syncs compressed, encrypted snapshots to secure cloud infrastructure without third-party tools.",
    keyCapabilities: [
      {
        title: "Automated Background Cloud Backups",
        desc: "Schedule automated backups to run silently in the background daily or upon company closing without interrupting accounting staff.",
      },
      {
        title: "Smart Incremental Space Optimization",
        desc: "After the initial upload, TallyDrive only transfers modified data blocks, minimizing bandwidth and saving cloud storage capacity.",
      },
      {
        title: "One-Click Instant Disaster Recovery",
        desc: "Restore company data to any point-in-time snapshot directly within TallyPrime (Alt+Y > Manage TallyDrive) without dealing with external drives.",
      },
      {
        title: "Statutory Rule 46(8) Audit Compliance",
        desc: "Meets mandated requirements for maintaining verified electronic books of accounts with off-site daily audit-trail backups.",
      },
    ],
    editionsOrDeployment: [
      {
        name: "Complimentary Tier (With TSS)",
        desc: "Included free of cost with active Tally Software Services subscriptions.",
      },
      {
        name: "Enterprise Storage Expansion",
        desc: "Expandable storage blocks for multi-company groups and large historical databases.",
      },
    ],
    pricingPlans: [
      {
        name: "TSS Complimentary Storage",
        tag: "Included with Active TSS",
        popular: true,
        perpetualPrice: "Free",
        perpetualNote: "Included with Active TSS Subscription",
        rentalPrices: [
          { duration: "Silver (Single User)", price: "1 GB Free Cloud Storage" },
          { duration: "Gold (Multi User)", price: "3 GB Free Cloud Storage" },
        ],
        features: [
          "Automated cloud backup engine directly inside TallyPrime",
          "Point-in-time snapshot history and version rollback",
          "Encrypted data transmission to enterprise cloud vault",
          "Centralized TallyDrive management report (Alt+Y)",
        ],
      },
      {
        name: "10 GB Storage Expansion Pack",
        tag: "Expandable Cloud Space",
        perpetualPrice: "₹1,200",
        perpetualNote: "Annual Plan (+ 18% GST = ~₹100/mo)",
        rentalPrices: [
          { duration: "10 GB Pack", price: "₹1,200 / year" },
        ],
        features: [
          "10 GB additional high-speed encrypted cloud storage",
          "Ideal for multi-company groups & multi-year historical files",
          "Seamless auto-allocation across all registered Tally serials",
        ],
      },
    ],
    suyogAdvantages: [
      "TallyDrive configuration, backup schedule planning, and retention policy setup",
      "Disaster recovery simulation drills to ensure guaranteed restoration",
      "Multi-user permission matrix to restrict backup download authorizations",
      "Assistance with storage optimization and archive segmentation",
    ],
  },
  {
    id: "tally-ira",
    name: "TallyIra (Docs by Ira)",
    tagline: "AI-Powered Document Processing & Voucher Automation",
    badge: "AI Accounting Assistant",
    startingPrice: "From ₹400 (200 Pages)",
    startingPriceNote: "Pay-As-You-Use Page Credits • Excl. 18% GST",
    logo: tallyIraLogo,
    icon: "Sparkles",
    description:
      "Eliminate up to 80% of manual data entry with AI-powered OCR that reads invoices, bills, and bank statements (PDFs, images) and converts them into verified draft vouchers in TallyPrime.",
    benefits: [
      "AI-driven extraction of vendor, invoice number, items, and GST",
      "Converts PDF/JPEG bills into accounting-ready draft vouchers",
      "Automatic ledger and stock item mapping with exception alerts",
      "Upload via mobile camera, desktop, email, or WhatsApp",
    ],
    overview:
      "TallyIra (featuring Docs by Ira) introduces native artificial intelligence into your accounting workflow. Instead of spending hours typing purchase bills, expense receipts, and bank statements into TallyPrime, simply scan or upload the files. The AI extracts every line item, maps masters, and creates draft vouchers for human review.",
    keyCapabilities: [
      {
        title: "Automated Invoice & Receipt OCR Extraction",
        desc: "Reads digital PDFs, scanned bills, photos, and handwritten invoices with high-accuracy machine learning tailored for Indian GST formats.",
      },
      {
        title: "Accounting-Ready Draft Vouchers",
        desc: "Converts parsed data into draft purchase and payment vouchers inside TallyPrime, letting accountants review, edit, and approve before posting.",
      },
      {
        title: "Smart Master Matching & Duplicate Prevention",
        desc: "Intelligently maps supplier names and inventory items to existing Tally masters and flags duplicate invoices to prevent double-payments.",
      },
      {
        title: "Omnichannel Document Ingestion",
        desc: "Submit documents via the TallyIra mobile app, direct email forwarding, drag-and-drop desktop upload, or direct WhatsApp forward.",
      },
    ],
    editionsOrDeployment: [
      {
        name: "Regular Page Packs",
        desc: "Page-credit bundles valid for 1 year, suitable for SMEs and growing accounting teams.",
      },
      {
        name: "Enterprise Pro Packs",
        desc: "High-volume page quotas for auditing firms, multi-branch retailers, and corporate finance hubs.",
      },
    ],
    pricingPlans: [
      {
        name: "Regular Pack S (200 Pages)",
        tag: "Starter SME Pack",
        perpetualPrice: "₹400",
        perpetualNote: "1 Year Validity (+ 18% GST = ₹472 Total)",
        rentalPrices: [
          { duration: "200 Pages", price: "₹400 (₹2.00 / page)" },
        ],
        features: [
          "200 AI-processed document pages with 1-year validity",
          "Automated extraction of GSTIN, HSN, line items & taxes",
          "Draft voucher creation inside TallyPrime",
          "Mobile app & desktop browser upload access",
        ],
      },
      {
        name: "Regular Pack M (400 Pages)",
        tag: "Growing Business Pack",
        popular: true,
        perpetualPrice: "₹800",
        perpetualNote: "1 Year Validity (+ 18% GST = ₹944 Total)",
        rentalPrices: [
          { duration: "400 Pages", price: "₹800 (₹2.00 / page)" },
        ],
        features: [
          "400 AI-processed document pages with 1-year validity",
          "Multi-user upload capability across purchase & store desks",
          "Bank statement PDF parsing & reconciliation support",
          "Automated ledger matching & exception alerts",
        ],
      },
      {
        name: "Regular Pack L (600 Pages)",
        tag: "High-Volume Processing",
        perpetualPrice: "₹1,200",
        perpetualNote: "1 Year Validity (+ 18% GST = ₹1,416 Total)",
        rentalPrices: [
          { duration: "600 Pages", price: "₹1,200 (₹2.00 / page)" },
        ],
        features: [
          "600 AI-processed document pages with 1-year validity",
          "Fast-track batch processing for hundreds of monthly invoices",
          "Comprehensive audit trail & original document link inside Tally",
        ],
      },
      {
        name: "Pro Pack (3,000 Pages)",
        tag: "Enterprise & CA Practice",
        perpetualPrice: "₹4,500",
        perpetualNote: "1 Year Validity (+ 18% GST = ₹1.50 / page)",
        rentalPrices: [
          { duration: "3,000 Pages", price: "₹4,500 (₹1.50 / page)" },
        ],
        features: [
          "3,000 AI-processed document pages with 1-year validity",
          "Lowest per-page rate (₹1.50/page) for CA firms and enterprises",
          "Priority AI queue processing and dedicated SUYOG setup",
        ],
      },
    ],
    suyogAdvantages: [
      "End-to-end setup of TallyIra mobile app and TallyPrime integration",
      "Accountant training for draft voucher review and master mapping workflows",
      "Workflow design for WhatsApp and email auto-forwarding ingestion",
      "Ongoing assistance with invoice template tuning and page top-ups",
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
    name: "eLOGiPay",
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
