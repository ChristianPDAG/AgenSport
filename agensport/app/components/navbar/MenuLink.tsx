import Link from "next/link"

interface MenuItemSmallProps
{
  label: string;
  href: string;
}

const MenuItemSmall: React.FC<MenuItemSmallProps> = ({ label,href }) => {

  return (
          <Link href={href} className="menu_btn">
          {label}
          </Link>
  )
}


export const MenuLinkOut = () => {
  return (
    <div>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        Hola
      </div>
      {/* Mobile Navigation */}
      <div className="sm:hidden flex">
        <div className="menu_sm_btn">

          <MenuItemSmall href="/login" label="Iniciar sesión" />
          <MenuItemSmall href="/register" label="Registrarse" />

          {/* Puedes agregar más botones aquí */}
        </div>
      </div>
    </div>
  );
};

export const MenuLinkIn = () => {
  return (
    <div>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        Hola
      </div>
      {/* Mobile Navigation */}
      <div className="sm:hidden flex">
        <div className="menu_sm_btn">

        <MenuItemSmall href="/home" label="Inicio" />
          <MenuItemSmall href="/schedule" label="Agenda" />
          <MenuItemSmall href="/students" label="Alumnos" />
          <MenuItemSmall href="/trainers" label="Entrenadores" />
          <MenuItemSmall href="/discipline" label="Disciplinas" />
          <MenuItemSmall href="/plans" label="Planes" />
          <MenuItemSmall href="/accouting" label="Contabilidad" />          

          <MenuItemSmall href="/configurations" label="Configuraciones" />
          <button className="bg-red-900 rounded-xl text-white hover:bg-white hover:text-verde-oscuro text-sm font-bold">Cerrar sesión</button>

          {/* Puedes agregar más botones aquí */}
        </div>
      </div>
    </div>
  );
}

