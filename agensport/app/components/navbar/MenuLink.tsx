
const MenuLink = () => {
  return (
    <div>
      {/* Desktop Navigation */}  
      <div className="sm:flex hidden">
        Hola
      </div>
      {/* Mobile Navigation */}
      <div className="sm:hidden flex">

      <div className="absolute top-[50px] left-0 right-0 w-full bg-verde-oscuro opacity-90 border-black rounded-xl shadow-md flex flex-col cursor-pointer">
            <button className="menu_btn">
            Iniciar sesión
            </button>
            <button className="menu_btn">
            Registrarse
            </button>
            {/* Puedes agregar más botones aquí */}
        </div>
        </div>
    </div>
  )
}

export default MenuLink
