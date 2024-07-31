import Link from "next/link"
import Image from "next/image"

const IconNav = () => {
  return (
    <div>
        {/* Desktop Navigation */}
      <div className="sm:flex hidden ">
        <Link href="/">
             <Image 
                src="/logo_as.png"
                alt="Logo AS"
                width={100}
                height={100}
             />
        </Link>
      </div>
      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative transition">
        <Link href="/">
                <Image 
                    src="/logo_icon.png"
                    alt="Logo AS Mobile"
                    width={50}
                    height={50}
                />
            </Link>
      </div>
    </div>
  )
}

export default IconNav
