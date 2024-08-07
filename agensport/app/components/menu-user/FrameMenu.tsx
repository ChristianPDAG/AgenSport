"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FrameMenu: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <nav className="flex flex-col p-4 mt-5">
          <Link href="/"
            className={`p-2 ${pathname === '/' ? 'bg-gray-700' : ''}`}>Home</Link>
          <Link 
            href="/home"
            className={`p-2 ${pathname === '/home' ? 'bg-gray-700' : ''}`}>Inicio</Link>
          <Link 
            href="/schedule"
            className={`p-2 ${pathname === '/schedule' ? 'bg-gray-700' : ''}`}>Agenda</Link>
          <Link 
            href="/students"
            className={`p-2 ${pathname === '/students' ? 'bg-gray-700' : ''}`}>Alumnos</Link>
          <Link 
            href="/trainers"
            className={`p-2 ${pathname === '/trainers' ? 'bg-gray-700' : ''}`}>Entrenadores</Link>
          <Link 
            href="/accouting"
            className={`p-2 ${pathname === '/accouting' ? 'bg-gray-700' : ''}`}>Contabilidad</Link>
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
