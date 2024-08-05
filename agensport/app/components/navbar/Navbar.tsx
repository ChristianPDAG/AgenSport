import UserNav from "./UserNav"
import IconNav from "./IconNav"
import MenuLink from "./MenuLink"

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 py-2 border-b bg-header-gradient opacity-90 z-10 ">
      <div className="max-w-[1500px] mx-auto px-6"> 
        <div className="flex justify-between items-center ">
            <IconNav />
          <div className="flex  space-x-6 ">
            {/* Aquí se debe agregar las opciones del menu que van al medio del Navbar */}
          </div>
            <div className="flex items-center space-x-6">
                <UserNav />
            </div>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar
