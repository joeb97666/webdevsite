import { Text } from 'lucide-react';
import Link from 'next/link'
import React from 'react'
import { text } from 'stream/consumers';

interface ButtonLinkProps {
  href: string;
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, children, text, className = '' }) => (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:scale-105 ${className}`}
      prefetch={false}
    >
      {children || text}
    </Link>
  )
  
  export default ButtonLink