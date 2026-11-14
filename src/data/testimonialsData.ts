import superhouseLogo from "@/assets/Logos/Website Logo/superhousegroup.png";
import sriSriLogo from "@/assets/Logos/Website Logo/Sri Sri.png";
import shooliniLogo from "@/assets/Logos/Website Logo/Shoolini.png";
import methodistLogo from "@/assets/Logos/Website Logo/Methodist.gif";

export interface TestimonialItem {
  id: string;
  institution: string;
  subtitle?: string;
  logo?: string;
  logoType?: "image" | "emblem";
  emblemInitials?: string;
  emblemColor?: string;
  certificateType: string;
  date?: string;
  productName: string;
  productTag: string;
  rating: number;
  quote: string;
  signatory: string;
  designation: string;
  organization: string;
  location?: string;
  highlightStat?: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "allenhouse",
    institution: "Allenhouse Institute of Technology",
    subtitle: "Superhouse Education Foundation",
    logo: superhouseLogo,
    logoType: "image",
    certificateType: "Official Certificate",
    productName: "Tally.EduSoft + eLOGiPay",
    productTag: "EduSoft + Fee Gateway",
    rating: 5,
    quote:
      "We were using customised ERP for many years, but we were somehow not satisfied with their accounting part. We searched for many solutions but found their fundamentals of accounting extremely poor. None met our expectations.\n\nThen we found SUYOG’s offering matching our standards. Be it their expertise, experience or in depth understanding of the school administrative needs - Combination of Tally.EduSoft + eLOGiPay is beyond expectations.\n\nTheir focused approach, core knowledge of Tally, understanding of accounts made our life simple.",
    signatory: "Javed Hashmi",
    designation: "Jt. Secretary",
    organization: "Allenhouse Institute of Technology",
    location: "Kanpur",
    highlightStat: "Multi-Campus ERP Sync",
  },
  {
    id: "sri-sri-university",
    institution: "Sri Sri University",
    subtitle: "State Private University",
    logo: sriSriLogo,
    logoType: "image",
    certificateType: "Appreciation Certificate",
    date: "16.12.2025",
    productName: "EduWeb - eLOGiPay and Tally.EduSoft",
    productTag: "Online Fee & Campus ERP",
    rating: 5,
    quote:
      "We are delighted with the services of Suyog System & Software Pvt. Ltd. Their solutions, such as EduWeb - eLOGiPay and Tally.EduSoft have streamlined our administrative tasks, especially online fee payments, student database management, and detailed reporting.\n\nThe software's intuitive features and API integration with Payment Gateways and TallyPrime make it a comprehensive solution for institutions. Their 24/7 support and professional approach ensure smooth operations at all times.\n\nWe highly recommend Suyog for their reliable and efficient software solutions.",
    signatory: "Rajendra Sabat",
    designation: "Deputy CFO",
    organization: "Sri Sri University",
    location: "Cuttack, Odisha",
    highlightStat: "24/7 Live Support",
  },
  {
    id: "sitapur-shiksha-sansthan",
    institution: "Sitapur Shiksha Sansthan (Sitapur) Trust",
    subtitle: "Educational & Professional Trust",
    logoType: "emblem",
    emblemInitials: "SSS",
    emblemColor: "from-amber-500 to-orange-600",
    certificateType: "Certificate of Appreciation",
    date: "18/12/2025",
    productName: "Tally EduSoft – Fee Management Module",
    productTag: "5+ Years Active Production",
    rating: 5,
    quote:
      "Tally EduSoft – Fee Management Module, integrated with Tally Prime has been successfully used by our institution for 05 years and has proven to be a reliable and efficient solution for managing end-to-end fee operations. From admissions and student database management to fee collection, outstanding tracking, concessions, hostel, and transportation fees, the entire process is handled seamlessly within a single system.\n\nThe flexibility of Academic, Transport & Hostel fee structures, along with automated fee due generation and detailed outstanding reports, has significantly improved accuracy and control. Secure role-based access, customized fee receipts, Email and SMS integration, and comprehensive MIS reports have further strengthened transparency and administrative efficiency.\n\nSUYOG’s tech team has consistently supported our operational needs and scaled smoothly with our growth. We wish Team Suyog All the very best for all their future endeavours.",
    signatory: "(Dr Suman Mehrotra)",
    designation: "Secretary",
    organization: "Sitapur Shiksha Sansthan (Sitapur) Trust",
    location: "Sitapur, U.P.",
    highlightStat: "05 Years Continuous Trust",
  },
  {
    id: "shoolini-university",
    institution: "Shoolini University",
    subtitle: "Top Ranked Research University",
    logo: shooliniLogo,
    logoType: "image",
    certificateType: "Official Letter of Appreciation",
    date: "29.01.2025",
    productName: "EduWeb - eLOGiPay and Tally.EduSoft",
    productTag: "Gateway API & Accounting",
    rating: 5,
    quote:
      "We are delighted with the services of Suyog System & Software Pvt. Ltd. Their solutions, such as EduWeb - eLOGiPay and Tally.EduSoft, have streamlined our administrative tasks, especially online fee payments, student database management, and detailed reporting.\n\nThe software’s intuitive features and API integration with Payment Gateways and TallyPrime make it a comprehensive solution for institutions. Their 24/7 support and professional approach ensure smooth operations at all times.\n\nWe highly recommend Suyog for their reliable and efficient software solutions.",
    signatory: "Ranjeet Thakur",
    designation: "Accounts Officer",
    organization: "Shoolini University",
    location: "Solan, H.P.",
    highlightStat: "Automated Bank Reconciliation",
  },
  {
    id: "methodist-high-school",
    institution: "Methodist High School, Kanpur",
    subtitle: "Premier Heritage Institution",
    logo: methodistLogo,
    logoType: "image",
    certificateType: "Certificate of Appreciation",
    date: "03.11.2025",
    productName: "Tally.EduSoft & eLOGiPay",
    productTag: "Complete School ERP",
    rating: 5,
    quote:
      "This is to certify that SUYOG System, through their comprehensive school fee management solutions — Tally.EduSoft and eLOGiPay — has provided exceptional support to our institution in streamlining our fee management and accounting operations.\n\nPrior to implementing their system, we have evaluated several ERP solutions, but SUYOG’s offerings have met our expectations through their professional expertise, accurate understanding of school accounting processes, and seamless integration with TallyPrime.\n\nTheir dedicated approach, technical proficiency, and prompt support services have significantly enhanced the efficiency and transparency of our financial and administrative functions.\n\nWe appreciate the sincere efforts of the SUYOG System team and wish them continued success in their endeavours.",
    signatory: "Mrs. Y. Cabral",
    designation: "Principal",
    organization: "Methodist High School, Kanpur",
    location: "Kanpur",
    highlightStat: "Seamless TallyPrime Integration",
  },
  {
    id: "huddard-high-school",
    institution: "Huddard High School, Kanpur",
    subtitle: "Established ICSE Institution",
    logoType: "emblem",
    emblemInitials: "HHS",
    emblemColor: "from-blue-600 to-indigo-700",
    certificateType: "Certificate of Appreciation",
    date: "27.02.2026",
    productName: "Tally.EduSoft & eLOGiPay",
    productTag: "TallyPrime Fee Automation",
    rating: 5,
    quote:
      "This is to certify that SUYOG System, through their comprehensive school fee management solutions Tally. EduSoft and eLOGiPay-has provided exceptional support to our institution in streamlining our fee management and accounting operations.\n\nPrior to implementing their system, we have evaluated several ERP solutions, but SUYOG's offerings have met our expectations through their professional expertise, accurate understanding of school accounting processes, and seamless integration with TallyPrime.\n\nTheir dedicated approach, technical proficiency, and prompt support services have significantly enhanced the efficiency and transparency of our financial and administrative functions.\n\nWe appreciate the sincere efforts of the SUYOG System team and wish them continued success in their endeavours.",
    signatory: "Mrs G. Louisa Joseph",
    designation: "Principal",
    organization: "Huddard High School, Kanpur",
    location: "Kanpur",
    highlightStat: "Financial Transparency",
  },
];
