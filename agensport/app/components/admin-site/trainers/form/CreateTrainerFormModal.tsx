
import FormItem from "@/app/components/form/FormItem"
import Modal from "@/app/components/modals/Modal"

const CreateTrainerFormModal = ({ isModalOpen, onClose }: { isModalOpen: boolean, onClose: () => void }) => {
  
    const content = (
        <>
            <div className="flex items-center justify-center relative ">
                <div className="border-2 border-verde-oscuro rounded-xl relative w-[80%] md:w-[80%] lg:w-[600px] h-auto">
                    <div className="w-full h-auto rounded-xl relative flex flex-col">
                        <main>
                            <form action="" className="p-2">
                                <FormItem label="RUT" htmlFor="trainer-rut" type="text" placeholder="xx.xxx.xxx-x"/>
                                <FormItem label="Nombre" htmlFor="trainer-name" type="text" placeholder="Jhon"/>
                                <FormItem label="Apellido" htmlFor="trainer-lastname" type="text" placeholder="Doe"/>
                                <FormItem label="Telefono" htmlFor="trainer-phone" type="tel" placeholder="9 999 999"/>
                                <FormItem label="Correo electrónico" htmlFor="trainer-mail" type="mail" placeholder="mail@example.com"/>
                                <FormItem label="Disciplina" htmlFor="trainer-discipline" type="text" placeholder="Karate"/>
                                <FormItem label="Sueldo" htmlFor="trainer-salary" type="number" placeholder="20000"/>
                                <div className="flex flex-col md:flex-row md:items-center">
                                    <div className="md:w-1/3"></div>
                                    <div className="md:w-2/3">
                                        <button className="text-xs shadow principal_btn focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full" type="button">
                                            Registrar
                                        </button>
                                    </div>
                                </div>
                            
                            </form>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
    return (
        <Modal 
        isOpen={isModalOpen}
        onClose={onClose}
        title="Registre un Entrenador!"
    >
        {content}
          </Modal>
  )
}

export default CreateTrainerFormModal
