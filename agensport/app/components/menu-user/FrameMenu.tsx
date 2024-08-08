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

const FrameMenu: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-content-gradient text-verde-oscuro font-semibold  flex flex-col">
        <nav className="flex flex-col mt-20">
          <MenuItem href="/home" label="Inicio" />
          <MenuItem href="/schedule" label="Agenda" />
          <MenuItem href="/students" label="Alumnos" />
          <MenuItem href="/trainers" label="Entrenadores" />
          <MenuItem href="/discipline" label="Disciplinas" />
          <MenuItem href="/accouting" label="Contabilidad" />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <MenuItem href="/accouting" label="Configuraciones" />
          <MenuItem href="/accouting" label="Cerrar Sesión" />

          {/* ... other menu items */}
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-4">
        {children}
      </div>
    </div>
  );
};

export default FrameMenu;
