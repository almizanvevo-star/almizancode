"use client";

import { useId } from "react";
import PropTypes from "prop-types";

// Product logo: the mizan (balance), level on its mast, over the emerald→gold gradient.
export default function BrandMark({ className = "size-9", title }) {
  const gradientId = `brand-mark-${useId().replace(/:/g, "")}`;
  return (
    <svg viewBox="0 0 40 40" className={className} role={title ? "img" : undefined} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      <defs>
        <linearGradient id={gradientId} x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0EA5A4" />
          <stop offset=".55" stopColor="#10B981" />
          <stop offset="1" stopColor="#F5B921" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill={`url(#${gradientId})`} />
      {/* mast, beam, footing */}
      <path d="M20 30.5V11" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M9.5 12.5h21" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M14.5 31h11" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="20" cy="10" r="1.7" fill="#fff" />
      {/* pans */}
      <path d="M9.5 12.5v5.5M30.5 12.5v5.5" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M5.2 18a4.3 4.3 0 0 0 8.6 0M26.2 18a4.3 4.3 0 0 0 8.6 0" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" fill="none" />
    </svg>
  );
}

BrandMark.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};
