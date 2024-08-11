"use client"

import MenuItem from "./MenuItem";

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
          <MenuItem href="/configurations" label="Configuraciones" />
          <button className="bg-red-900 text-white p-2 hover:bg-white hover:text-verde-oscuro">Cerrar sesión</button>
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
