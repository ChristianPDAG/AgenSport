
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
            <button className="w-full border-b py-1.5 px-5 text-white transition-all hover:bg-verde-claro hover:text-verde-oscuro text-center text-xs font-bold font-sans flex items-center justify-center rounded-xl">
            Iniciar sesión
            </button>
            <button className="w-full border-b  py-1.5 px-5 text-white transition-all hover:bg-verde-claro hover:text-verde-oscuro text-center text-xs font-bold font-sans flex items-center justify-center rounded-xl">
            Registrarse
            </button>
            {/* Puedes agregar más botones aquí */}
        </div>
        </div>
    </div>
  )
}

export default MenuLink
