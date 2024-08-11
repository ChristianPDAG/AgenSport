"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItemProps {
  href: string;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, label }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`p-2 rounded-sm flex justify-center border border-white hover:bg-white hover:text-verde-oscuro ${pathname === href ? 'bg-verde-oscuro text-white ' : ''}`}
    >
      {label}
    </Link>
  );
};


export default MenuItem