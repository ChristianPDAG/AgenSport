import Link from "next/link"
import Image from "next/image"
import UserNav from "./UserNav"
const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 py-2 border-b custom-gradient z-10">
      <div className="max-w-[1500px] mx-auto px-6"> 
        <div className="flex justify-between items-center ">
            <Link href="/">
             <Image 
                src="/logo_as.png"
                alt="Logo AS"
                width={100}
                height={100}
             />
            </Link>
            <div className="flex  space-x-6 bg-green-900">
                Hola
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
