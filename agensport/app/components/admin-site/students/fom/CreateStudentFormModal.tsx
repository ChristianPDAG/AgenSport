import FormItem from '@/app/components/form/FormItem'
import Modal from '@/app/components/modals/Modal'
import FrameContentForms from '../../FrameContentForms'

const CreateStudentFormModal = ({ isModalOpen, onClose }: { isModalOpen: boolean, onClose: () => void }) => {

    const content = (
        <>
        <FrameContentForms>
                    <FormItem label='Correo electrónico' htmlFor='student-mail' type='mail' placeholder='mail@example.com' />
                    <FormItem label='Fecha de ingreso' htmlFor='student-startdate' type='date' placeholder='' />
                    <FormItem label='Plan' htmlFor='student-plan' type='text' placeholder='' />
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
        title="Registre un nuevo alumno!"
    >
        {content}
          </Modal>
  )
}

export default CreateStudentFormModal
