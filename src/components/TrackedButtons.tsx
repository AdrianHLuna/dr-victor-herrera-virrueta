"use client";

import React from "react";
import { trackWhatsAppClick, trackPhoneClick } from "@/lib/analytics";

interface TrackedAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  source: string;
  type: "whatsapp" | "phone";
}

export function TrackedAnchor({
  source,
  type,
  onClick,
  children,
  ...props
}: TrackedAnchorProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (type === "whatsapp") {
      trackWhatsAppClick(source);
    } else if (type === "phone") {
      trackPhoneClick(source);
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
