import Modal from "@/app/components/modals/Modal"
import FrameContentForms from "../../FrameContentForms"
import FormItem from "@/app/components/form/FormItem"

const CreateDisciplineFormModal = ({ isModalOpen, onClose }: { isModalOpen: boolean, onClose: () => void }) => {

    const content = (
        <>
        <FrameContentForms>
                    <FormItem label='Nombre' htmlFor='discipline-name' type='text' placeholder='Karate-1' />
                    <FormItem label='Entrenador Principal' htmlFor='discipline-trainer' type='text' placeholder='Jhon Doe' />
                    <FormItem label='Entrenador Suplente' htmlFor='discipline-subtrainer' type='text' placeholder='Jhon Doe' />
                    <FormItem label='Máxima cantidad de Alumnos' htmlFor='discipline-maxstudents' type='number' placeholder='20' />
                    <div className="flex flex-col md:flex-row md:items-center mb-6">
                    <label
                        className="label_form_small"
                        htmlFor=""
                    >
                        Horario
                    </label>
                    <div className="md:w-2/3 text-xs">
                        <label htmlFor="">
                            El horario lo puedes asignar una vez registres la disciplina en la opción "Disponibilidad".
                        </label>
                    </div>
                    
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="text-xs shadow principal_btn focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full" type="button">
                            Registrar
                        </button>
                    </div>
                </div>
        </FrameContentForms>
        </>
    )

  return (
    <Modal
        isOpen={isModalOpen}
        onClose={onClose}
        title="Registre una nueva disciplina!"
    >
        {content}
          </Modal>
  )
}


export default CreateDisciplineFormModal
