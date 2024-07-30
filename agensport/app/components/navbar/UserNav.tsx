
const UserNav = () => {
  return (
    <div className="flex">
    <button className="rounded-full border border-verde-oscuro bg-white py-1.5 px-5 text-verde-oscuro transition-all hover:bg-verde-oscuro hover:text-white text-center text-xs font-bold font-sans flex items-center justify-center mr-2">
        Iniciar sesión
    </button>
    <button className="rounded-full border border-verde-oscuro bg-verde-oscuro py-1.5 px-5 text-white transition-all hover:bg-verde-claro hover:text-verde-oscuro text-center text-xs font-bold font-sans flex items-center justify-center">
        Registrarse
    </button>
</div>
  )
}

export default UserNav
