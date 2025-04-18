import Link from "next/link"

const RegisterForm = () => {
  return (
    <div className="flex items-center justify-center relative min-h-screen">
      <div className="border-2 border-verde-oscuro rounded-xl shadow-2xl relative w-[80%] md:w-[80%] lg:w-[600px] my-6 h-auto  ">
        <div className="w-full h-auto rounded-xl relative flex flex-col bg-white">
            <header className="flex border-b p-2 justify-center font-sans text-verde-oscuro">
                <div className="text-lg font-bold">
                    ¿Cómo deseas registrarte?
                </div>
            </header>
            <section className="p-5 space-y-4">
                <Link href="/register/admin" className="w-full h-[54px] px-4 principal_btn">
                    Como administrador
                </Link>
                
                <Link href="/register/user" className="w-full h-[54px] px-4 secondary_btn">
                    Como usuario
                </Link>
  
            </section>
            
        </div>
        
      </div>
    </div>
  )
}

export default RegisterForm
