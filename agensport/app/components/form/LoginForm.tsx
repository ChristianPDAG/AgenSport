import Link from "next/link"
import FrameForm from "./FrameForm"

const LoginForm = () => {
  return (
    <>
        <FrameForm>
                <header className="flex border-b p-2 justify-center font-sans text-verde-oscuro">
                    <div className="text-lg font-bold">
                        Hola!
                    </div>
                </header>
                <section className="p-5 space-y-4">
                    <form className="w-full max-w-md">
                        <div className="flex flex-col md:flex-row md:items-center mb-6">
                            <label className="block lg:text-right text-verde-oscuro font-bold mb-1 md:mb-0 pr-4 md:w-1/3" htmlFor="inline-full-name">
                                Correo electrónico
                            </label>
                            <div className="md:w-2/3">
                                <input  
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-verde-oscuro" 
                                    id="inline-full-name" 
                                    type="email" 
                                    placeholder="mail@example.com"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col lg:text-right md:flex-row md:items-center mb-6">
                            <label className="block text-verde-oscuro font-bold mb-1 md:mb-0 pr-4 md:w-1/3" htmlFor="inline-password">
                                Contraseña
                            </label>
                            <div className="md:w-2/3">
                                <input 
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-verde-gris leading-tight focus:outline-none focus:bg-white focus:border-verde-oscuro" 
                                    id="inline-password" 
                                    type="password" 
                                    placeholder="******************"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center mb-6">
                            <div className="md:w-1/3"></div>
                            <Link href="" className="md:w-2/3 block text-gray-500 hover:text-verde-oscuro hover:font-bold text-xs">
                                ¿Haz olvidado tu contraseña?
                            </Link>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center">
                            <div className="md:w-1/3"></div>
                            <div className="md:w-2/3">
                                <button className="shadow principal_btn focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full" type="button">
                                    Ingresar
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
    </FrameForm>
</>

  )
}

export default LoginForm