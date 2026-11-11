import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * 1. 36+ Years of Experience: Calendar with Clock
 */
export function CalendarClockIcon({ className, ...props }: IconProps) {
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
      {/* Calendar Body */}
      <path
        d="M8 14a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v10M8 14v18a3 3 0 0 0 3 3h13M8 14h32"
        fill="currentColor"
        fillOpacity="0.08"
        strokeWidth="2.4"
      />
      {/* Top Binding Rings */}
      <line x1="15" y1="7" x2="15" y2="13" strokeWidth="2.8" />
      <line x1="21" y1="7" x2="21" y2="13" strokeWidth="2.8" />
      <line x1="27" y1="7" x2="27" y2="13" strokeWidth="2.8" />
      <line x1="33" y1="7" x2="33" y2="13" strokeWidth="2.8" />

      {/* Calendar Header Divider Bar */}
      <line x1="8" y1="18" x2="40" y2="18" strokeWidth="2" />

      {/* Calendar Date Entries / Grid Lines */}
      <line x1="14" y1="23" x2="18" y2="23" strokeWidth="2" />
      <line x1="22" y1="23" x2="26" y2="23" strokeWidth="2" />
      <line x1="14" y1="28" x2="18" y2="28" strokeWidth="2" />
      <line x1="22" y1="28" x2="24" y2="28" strokeWidth="2" />

      {/* Overlapping Clock Face at Bottom Right */}
      <circle cx="34" cy="34" r="9" fill="white" stroke="currentColor" strokeWidth="2.5" />
      {/* Clock Hands */}
      <polyline points="34,29 34,34 38,34" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="34" cy="34" r="1.5" fill="currentColor" />
    </svg>
  );
}

/**
 * 2. Deep Tally Expertise: Open Book with Ledger Lines & Bar Chart
 */
export function OpenBookChartIcon({ className, ...props }: IconProps) {
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
      {/* Open Book Outline */}
      <path
        d="M24 16c-4-4-10-5-16-5v21c6 0 12 1 16 5 4-4 10-5 16-5V11c-6 0-12 1-16 5z"
        fill="currentColor"
        fillOpacity="0.08"
        strokeWidth="2.4"
      />
      {/* Center Spine */}
      <line x1="24" y1="16" x2="24" y2="37" strokeWidth="2.6" />

      {/* Book Cover Bottom Rim */}
      <path d="M8 32v2c6 0 12 1 16 5 4-4 10-5 16-5v-2" strokeWidth="2" />

      {/* Left Page: Ledger Lines */}
      <line x1="12" y1="18" x2="20" y2="18" strokeWidth="2" />
      <line x1="12" y1="22" x2="20" y2="22" strokeWidth="2" />
      <line x1="12" y1="26" x2="20" y2="26" strokeWidth="2" />
      <line x1="12" y1="30" x2="18" y2="30" strokeWidth="2" />

      {/* Right Page: Financial Bar Chart */}
      <line x1="28" y1="30" x2="28" y2="24" strokeWidth="2.8" strokeLinecap="square" />
      <line x1="32" y1="30" x2="32" y2="19" strokeWidth="2.8" strokeLinecap="square" />
      <line x1="36" y1="30" x2="36" y2="15" strokeWidth="2.8" strokeLinecap="square" />
      {/* Chart Baseline */}
      <line x1="26" y1="30" x2="38" y2="30" strokeWidth="1.8" />
    </svg>
  );
}

/**
 * 3. Customized Business Solutions: Interlocking Puzzle Pieces
 */
export function PuzzlePiecesIcon({ className, ...props }: IconProps) {
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
      {/* Puzzle Piece 1 (Top Left) */}
      <path
        d="M10 11h8c0 2 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5h7v7c-2 0-3.5 1.5-3.5 3.5s1.5 3.5 3.5 3.5v7h-7c0-2-1.5-3.5-3.5-3.5s-3.5 1.5-3.5 3.5h-8v-7c2 0 3.5-1.5 3.5-3.5s-1.5-3.5-3.5-3.5v-7z"
        fill="currentColor"
        fillOpacity="0.08"
        strokeWidth="2.4"
        transform="translate(-2, -2) scale(0.9)"
      />

      {/* Puzzle Piece 2 (Bottom Right - Interlocking) */}
      <path
        d="M20 21h8c0 2 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5h7v7c-2 0-3.5 1.5-3.5 3.5s1.5 3.5 3.5 3.5v7h-7c0-2-1.5-3.5-3.5-3.5s-3.5 1.5-3.5 3.5h-8v-7c2 0 3.5-1.5 3.5-3.5s-1.5-3.5-3.5-3.5v-7z"
        fill="currentColor"
        fillOpacity="0.14"
        strokeWidth="2.4"
        transform="translate(4, 4) scale(0.9)"
      />
    </svg>
  );
}

/**
 * 4. Industry-Specific Software: Factory with Chimney & Cogwheel
 */
export function FactoryGearIcon({ className, ...props }: IconProps) {
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
      {/* Mechanical Gear in Background */}
      <g strokeWidth="2.2" transform="translate(10, 0)">
        <circle cx="25" cy="18" r="7" fill="currentColor" fillOpacity="0.12" />
        <circle cx="25" cy="18" r="3" fill="currentColor" />
        {/* Gear Teeth */}
        <line x1="25" y1="8" x2="25" y2="11" strokeWidth="3.2" strokeLinecap="square" />
        <line x1="25" y1="25" x2="25" y2="28" strokeWidth="3.2" strokeLinecap="square" />
        <line x1="15" y1="18" x2="18" y2="18" strokeWidth="3.2" strokeLinecap="square" />
        <line x1="32" y1="18" x2="35" y2="18" strokeWidth="3.2" strokeLinecap="square" />
        <line x1="18" y1="11" x2="20" y2="13" strokeWidth="3" strokeLinecap="square" />
        <line x1="30" y1="23" x2="32" y2="25" strokeWidth="3" strokeLinecap="square" />
        <line x1="30" y1="11" x2="32" y2="13" strokeWidth="3" strokeLinecap="square" />
        <line x1="18" y1="23" x2="20" y2="25" strokeWidth="3" strokeLinecap="square" />
      </g>

      {/* Industrial Factory Silhouette in Foreground */}
      <path
        d="M7 40V18l8 5V14l11 7v19H7z"
        fill="white"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      {/* Tall Smokestack on the left */}
      <path d="M10 18V8h4v10" fill="white" stroke="currentColor" strokeWidth="2.4" />
      {/* Smokestack rim cap */}
      <line x1="9" y1="8" x2="15" y2="8" strokeWidth="2.4" />

      {/* Factory Base Line */}
      <line x1="5" y1="40" x2="43" y2="40" strokeWidth="2.6" />

      {/* Factory Windows */}
      <rect x="11" y="29" width="3.5" height="4" fill="currentColor" />
      <rect x="17" y="29" width="3.5" height="4" fill="currentColor" />
      <rect x="23" y="29" width="3.5" height="4" fill="currentColor" />
    </svg>
  );
}

/**
 * 5. Long-Term Support: Trusted Handshake
 */
export function HandshakeIcon({ className, ...props }: IconProps) {
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
      {/* Left Forearm / Sleeve */}
      <path d="M6 19l8-6 6 5-5 6-9-5z" fill="currentColor" fillOpacity="0.08" strokeWidth="2.2" />
      <line x1="6" y1="19" x2="14" y2="13" strokeWidth="2.6" />

      {/* Right Forearm / Sleeve */}
      <path d="M42 19l-8-6-6 5 5 6 9-5z" fill="currentColor" fillOpacity="0.08" strokeWidth="2.2" />
      <line x1="42" y1="19" x2="34" y2="13" strokeWidth="2.6" />

      {/* Handshake Clasp */}
      <path
        d="M19 23l4-3.5a3 3 0 0 1 4.2.3L30 23l-6 6.5a2 2 0 0 1-2.8 0L19 27z"
        fill="white"
        stroke="currentColor"
        strokeWidth="2.4"
      />

      {/* Clasping Fingers */}
      <path d="M22 29.5l2-2" strokeWidth="2" />
      <path d="M25 32l2-2" strokeWidth="2" />
      <path d="M28 34.5l2-2" strokeWidth="2" />
      <path d="M31 37l2-2" strokeWidth="2" />

      {/* Bottom Wrist Arch */}
      <path d="M21 28c3 4 8 7 12 6" strokeWidth="2" />
    </svg>
  );
}

/**
 * 6. Business-Focused Technology: Microprocessor / CPU IC Chip
 */
export function CpuChipIcon({ className, ...props }: IconProps) {
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
      {/* Main Square Chip Body */}
      <rect
        x="13"
        y="13"
        width="22"
        height="22"
        rx="3"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      {/* Inner Silicon Die Core */}
      <rect
        x="19"
        y="19"
        width="10"
        height="10"
        rx="1.5"
        fill="white"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      {/* Top Pins */}
      <line x1="18" y1="6" x2="18" y2="13" strokeWidth="2.5" />
      <line x1="24" y1="6" x2="24" y2="13" strokeWidth="2.5" />
      <line x1="30" y1="6" x2="30" y2="13" strokeWidth="2.5" />

      {/* Bottom Pins */}
      <line x1="18" y1="35" x2="18" y2="42" strokeWidth="2.5" />
      <line x1="24" y1="35" x2="24" y2="42" strokeWidth="2.5" />
      <line x1="30" y1="35" x2="30" y2="42" strokeWidth="2.5" />

      {/* Left Pins */}
      <line x1="6" y1="18" x2="13" y2="18" strokeWidth="2.5" />
      <line x1="6" y1="24" x2="13" y2="24" strokeWidth="2.5" />
      <line x1="6" y1="30" x2="13" y2="30" strokeWidth="2.5" />

      {/* Right Pins */}
      <line x1="35" y1="18" x2="42" y2="18" strokeWidth="2.5" />
      <line x1="35" y1="24" x2="42" y2="24" strokeWidth="2.5" />
      <line x1="35" y1="30" x2="42" y2="30" strokeWidth="2.5" />
    </svg>
  );
}

/**
 * Registry mapping WhySuyog titles to the custom SVGs
 */
export const WHY_SUYOG_CUSTOM_ICONS: Record<string, (props: IconProps) => React.JSX.Element> = {
  "36+ Years of Experience": CalendarClockIcon,
  "Deep Tally Expertise": OpenBookChartIcon,
  "Customized Business Solutions": PuzzlePiecesIcon,
  "Industry-Specific Software": FactoryGearIcon,
  "Long-Term Support": HandshakeIcon,
  "Business-Focused Technology": CpuChipIcon,
};
