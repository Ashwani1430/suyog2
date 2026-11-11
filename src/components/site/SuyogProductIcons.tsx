import type { SVGProps } from "react";

// Common props interface
type IconProps = SVGProps<SVGSVGElement>;

/**
 * 1. EduWeb atOCGPlay / eLOGiPay: Graduation Cap over Screen / Play Platform
 */
export function EduWebIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Graduation Cap Mortarboard */}
      <polygon points="24,6 42,14 24,22 6,14" fill="currentColor" fillOpacity="0.12" />
      <polygon points="24,6 42,14 24,22 6,14" />
      {/* Cap Skull cap arch */}
      <path d="M12 17.5v6c0 3.5 5.5 6.5 12 6.5s12-3 12-6.5v-6" />
      {/* Tassel */}
      <path d="M38 15.5v11" />
      <circle cx="38" cy="27.5" r="1.5" fill="currentColor" />

      {/* Media Play Button / Screen Frame below */}
      <rect x="15" y="27" width="18" height="15" rx="3.5" fill="currentColor" fillOpacity="0.08" strokeWidth="2.2" />
      {/* Play Triangle */}
      <polygon points="21,31.5 29,34.5 21,37.5" fill="currentColor" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * 2. TallyEduSoft: Open Book with Ascending Bar Chart
 */
export function TallyEduSoftIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Open Book Pages */}
      <path
        d="M24 16c-4-4-10-5-16-5v22c6 0 12 1 16 5 4-4 10-5 16-5V11c-6 0-12 1-16 5z"
        fill="currentColor"
        fillOpacity="0.1"
      />
      {/* Spine / Center Divider */}
      <line x1="24" y1="16" x2="24" y2="38" strokeWidth="2.6" />

      {/* Book Cover Edge detail */}
      <path d="M8 33v2c6 0 12 1 16 5 4-4 10-5 16-5v-2" strokeWidth="2" />

      {/* Rising Bar Chart on Book Page */}
      <line x1="30" y1="28" x2="30" y2="24" strokeWidth="2.8" strokeLinecap="square" />
      <line x1="34" y1="28" x2="34" y2="20" strokeWidth="2.8" strokeLinecap="square" />
      <line x1="38" y1="28" x2="38" y2="16" strokeWidth="2.8" strokeLinecap="square" />
      {/* Chart Baseline */}
      <line x1="28" y1="28" x2="40" y2="28" strokeWidth="2" />
    </svg>
  );
}

/**
 * 3. TallyBuildSoft: Construction Tower Crane
 */
export function TallyBuildSoftIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Vertical Lattice Tower Mast */}
      <line x1="18" y1="42" x2="18" y2="10" strokeWidth="2.4" />
      <line x1="24" y1="42" x2="24" y2="10" strokeWidth="2.4" />
      {/* Lattice Cross Braces */}
      <line x1="18" y1="36" x2="24" y2="30" strokeWidth="1.8" />
      <line x1="18" y1="30" x2="24" y2="36" strokeWidth="1.8" />
      <line x1="18" y1="26" x2="24" y2="20" strokeWidth="1.8" />
      <line x1="18" y1="20" x2="24" y2="26" strokeWidth="1.8" />

      {/* Base Support Pedestal */}
      <path d="M14 42h14" strokeWidth="3" />

      {/* Crane Top Tower Apex */}
      <polyline points="18,10 21,5 24,10" strokeWidth="2.4" />

      {/* Horizontal Jib & Counter-Jib */}
      <line x1="7" y1="12" x2="43" y2="12" strokeWidth="3" />

      {/* Tie Ropes from Apex to Jib */}
      <line x1="21" y1="5" x2="36" y2="12" strokeWidth="1.8" strokeDasharray="1 0" />
      <line x1="21" y1="5" x2="10" y2="12" strokeWidth="1.8" />

      {/* Counterweight Block on Rear Jib */}
      <rect x="7" y="13" width="5" height="6" rx="1" fill="currentColor" strokeWidth="1.5" />

      {/* Trolley on Working Jib */}
      <rect x="36" y="12" width="4" height="2.5" fill="currentColor" />

      {/* Hoist Cable & Hook */}
      <line x1="38" y1="14.5" x2="38" y2="24" strokeWidth="1.8" />
      <path d="M38 24c0 2 1.5 3.5 3 3.5s2.5-1.5 2.5-3" strokeWidth="2.2" />
    </svg>
  );
}

/**
 * 4. TallyAutoSoft: Automobile with Mechanical Gear
 */
export function TallyAutoSoftIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Mechanical Gear Cogwheel in Background */}
      <g strokeWidth="2">
        <circle cx="18" cy="20" r="7.5" fill="currentColor" fillOpacity="0.1" />
        <circle cx="18" cy="20" r="3.5" fill="currentColor" />
        {/* Gear Teeth */}
        <line x1="18" y1="9" x2="18" y2="12" strokeWidth="3.2" strokeLinecap="square" />
        <line x1="18" y1="28" x2="18" y2="31" strokeWidth="3.2" strokeLinecap="square" />
        <line x1="7" y1="20" x2="10" y2="20" strokeWidth="3.2" strokeLinecap="square" />
        <line x1="26" y1="20" x2="29" y2="20" strokeWidth="3.2" strokeLinecap="square" />
        <line x1="10" y1="12" x2="12.5" y2="14.5" strokeWidth="3.2" strokeLinecap="square" />
        <line x1="23.5" y1="25.5" x2="26" y2="28" strokeWidth="3.2" strokeLinecap="square" />
        <line x1="26" y1="12" x2="23.5" y2="14.5" strokeWidth="3.2" strokeLinecap="square" />
        <line x1="12.5" y1="25.5" x2="10" y2="28" strokeWidth="3.2" strokeLinecap="square" />
      </g>

      {/* Sleek Modern Car Silhouette in Foreground */}
      <path
        d="M10 33l2-7c1-3.5 4-6 8-6h13c3.5 0 6.5 2 8 5l3 8h-3"
        fill="currentColor"
        fillOpacity="0.12"
        strokeWidth="2.4"
      />
      {/* Car Base & Bumper */}
      <path d="M6 33h4m8 0h14m8 0h4" strokeWidth="2.6" />

      {/* Car Cabin Window outline */}
      <path d="M19 22l-1 5h17l-2-5z" strokeWidth="1.8" />

      {/* Front & Rear Wheels */}
      <circle cx="14" cy="33" r="4" fill="white" strokeWidth="2.6" />
      <circle cx="14" cy="33" r="1.5" fill="currentColor" />
      <circle cx="36" cy="33" r="4" fill="white" strokeWidth="2.6" />
      <circle cx="36" cy="33" r="1.5" fill="currentColor" />
    </svg>
  );
}

/**
 * 5. TallyColdSoft: Cold Storage Warehouse with Snowflake
 */
export function TallyColdSoftIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Gable Roof Warehouse Outline */}
      <path
        d="M24 6l16 9v24a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V15l16-9z"
        fill="currentColor"
        fillOpacity="0.08"
        strokeWidth="2.5"
      />

      {/* Warehouse Door Frame & Storage blocks at Bottom */}
      <rect x="13" y="32" width="6" height="7" rx="1" fill="currentColor" fillOpacity="0.2" strokeWidth="1.8" />
      <rect x="29" y="32" width="6" height="7" rx="1" fill="currentColor" fillOpacity="0.2" strokeWidth="1.8" />

      {/* Central Majestic Snowflake */}
      <g strokeWidth="2.2">
        {/* Main 6 Axes */}
        <line x1="24" y1="13" x2="24" y2="29" />
        <line x1="17" y1="17" x2="31" y2="25" />
        <line x1="17" y1="25" x2="31" y2="17" />
        {/* Branch Chevrons */}
        <path d="M22 15l2-2 2 2" />
        <path d="M22 27l2 2 2-2" />
        <path d="M18 19l-2-1 0 3" />
        <path d="M30 23l2 1 0-3" />
        <path d="M18 23l-2 1 0-3" />
        <path d="M30 19l2-1 0 3" />
      </g>
      <circle cx="24" cy="21" r="1.5" fill="currentColor" />
    </svg>
  );
}

/**
 * 6. Jewellery Management: Faceted Brilliant-Cut Diamond / Gem
 */
export function JewelleryManagementIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Brilliant Cut Diamond Facets */}
      {/* Outer Silhouette */}
      <polygon
        points="14,12 34,12 43,21 24,40 5,21"
        fill="currentColor"
        fillOpacity="0.12"
        strokeWidth="2.6"
      />

      {/* Flat Table top facet */}
      <line x1="14" y1="12" x2="34" y2="12" strokeWidth="2.6" />

      {/* Girdle Line */}
      <line x1="5" y1="21" x2="43" y2="21" strokeWidth="2.4" />

      {/* Crown Facet Connectors */}
      <line x1="14" y1="12" x2="19" y2="21" strokeWidth="1.8" />
      <line x1="34" y1="12" x2="29" y2="21" strokeWidth="1.8" />
      <line x1="24" y1="12" x2="24" y2="21" strokeWidth="1.8" />

      {/* Pavilion Facet Connectors converging to culet point */}
      <line x1="19" y1="21" x2="24" y2="40" strokeWidth="2" />
      <line x1="29" y1="21" x2="24" y2="40" strokeWidth="2" />
      <line x1="24" y1="21" x2="24" y2="40" strokeWidth="1.8" />
    </svg>
  );
}

/**
 * 7. Hospital Management: Medical Shield with Cross
 */
export function HospitalManagementIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Protective Shield Outline */}
      <path
        d="M24 6c7 0 16 3 16 12 0 14-11 21-16 24-5-3-16-10-16-24 0-9 9-12 16-12z"
        fill="currentColor"
        fillOpacity="0.1"
        strokeWidth="2.6"
      />

      {/* Inner Half Shield Accent for dimension */}
      <path
        d="M24 6c7 0 16 3 16 12 0 14-11 21-16 24V6z"
        fill="currentColor"
        fillOpacity="0.08"
        strokeWidth="0"
      />

      {/* Symmetrical Medical Bold Plus / Cross */}
      <path
        d="M21 16h6v5h5v6h-5v5h-6v-5h-5v-6h5z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * 8. TallyTaxSoft / TallyTexSoft: Tax Invoice Sheet & Calculator
 */
export function TallyTaxSoftIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Background Document / Tax Return Sheet */}
      <path
        d="M10 12c0-2 1.5-4 4-4h14l8 8v18c0 2-2 4-4 4H14c-2 0-4-2-4-4V12z"
        fill="currentColor"
        fillOpacity="0.08"
        strokeWidth="2.2"
      />
      {/* Dogear fold on document */}
      <path d="M28 8v8h8" strokeWidth="2" />
      {/* Document Text lines */}
      <line x1="15" y1="14" x2="24" y2="14" strokeWidth="2" />
      <line x1="15" y1="19" x2="24" y2="19" strokeWidth="2" />
      <line x1="15" y1="24" x2="22" y2="24" strokeWidth="2" />

      {/* Foreground Electronic Calculator */}
      <rect
        x="23"
        y="20"
        width="17"
        height="22"
        rx="2.5"
        fill="white"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      {/* Calculator Display Screen */}
      <rect x="26" y="23" width="11" height="4" rx="1" fill="currentColor" fillOpacity="0.2" strokeWidth="1.2" />

      {/* Calculator Keypad Grid */}
      <circle cx="27" cy="30" r="1" fill="currentColor" />
      <circle cx="31.5" cy="30" r="1" fill="currentColor" />
      <circle cx="36" cy="30" r="1" fill="currentColor" />

      <circle cx="27" cy="34" r="1" fill="currentColor" />
      <circle cx="31.5" cy="34" r="1" fill="currentColor" />
      <circle cx="36" cy="34" r="1" fill="currentColor" />

      <circle cx="27" cy="38" r="1" fill="currentColor" />
      <circle cx="31.5" cy="38" r="1" fill="currentColor" />
      {/* Percentage Sign or Equal Key */}
      <text x="34.5" y="39.5" fontSize="5.5" fontWeight="bold" fill="currentColor" stroke="none">
        %
      </text>
    </svg>
  );
}

/**
 * 9. Custom TDL API Integration: Power Plug, Code Brackets <> & API Nodes
 */
export function CustomTdlApiIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Left: Electric Power Plug */}
      {/* Prongs */}
      <line x1="12" y1="11" x2="12" y2="16" strokeWidth="2.6" />
      <line x1="18" y1="11" x2="18" y2="16" strokeWidth="2.6" />
      {/* Plug Body */}
      <path
        d="M9 16h12v7a6 6 0 0 1-6 6v0a6 6 0 0 1-6-6v-7z"
        fill="currentColor"
        fillOpacity="0.12"
        strokeWidth="2.4"
      />
      {/* Cord */}
      <path d="M15 29v5c0 3 2 5 5 5h3" strokeWidth="2.2" />

      {/* Center: Code Brackets < > */}
      <g strokeWidth="2.8">
        <path d="M28 17l-4 4 4 4" />
        <path d="M34 17l4 4-4 4" />
      </g>

      {/* Right: API Network Connection Nodes */}
      <line x1="28" y1="36" x2="36" y2="33" strokeWidth="2" strokeDasharray="1 0" />
      <line x1="36" y1="33" x2="42" y2="38" strokeWidth="2" strokeDasharray="1 0" />
      <line x1="36" y1="33" x2="42" y2="28" strokeWidth="2" strokeDasharray="1 0" />

      <circle cx="28" cy="36" r="2.2" fill="white" strokeWidth="2" />
      <circle cx="36" cy="33" r="2.4" fill="currentColor" strokeWidth="1.5" />
      <circle cx="42" cy="28" r="1.8" fill="white" strokeWidth="1.8" />
      <circle cx="42" cy="38" r="1.8" fill="white" strokeWidth="1.8" />
    </svg>
  );
}

/**
 * Registry mapping product names / keys to custom SVGs
 */
export const SUYOG_CUSTOM_ICONS: Record<string, (props: IconProps) => React.JSX.Element> = {
  "eLOGiPay": EduWebIcon,
  "EduWeb_eLOGiPay": EduWebIcon,
  "EduWeb atOCGPlay": EduWebIcon,
  "Tally.EduSoft": TallyEduSoftIcon,
  "TallyEduSoft": TallyEduSoftIcon,
  "Tally.BuildSoft": TallyBuildSoftIcon,
  "TallyBuildSoft": TallyBuildSoftIcon,
  "Tally.AutoSoft": TallyAutoSoftIcon,
  "TallyAutoSoft": TallyAutoSoftIcon,
  "Tally.ColdSoft": TallyColdSoftIcon,
  "TallyColdSoft": TallyColdSoftIcon,
  "Jewellery Management": JewelleryManagementIcon,
  "Hospital Management": HospitalManagementIcon,
  "Tally.TexSoft": TallyTaxSoftIcon,
  "TallyTaxSoft": TallyTaxSoftIcon,
  "Custom TDL & API Integration": CustomTdlApiIcon,
};
