import FormItem from '@/app/components/form/FormItem'
import Modal from '@/app/components/modals/Modal'
import React from 'react'

const CreateStudentFormModal = ({ isModalOpen, onClose }: { isModalOpen: boolean, onClose: () => void }) => {

    const content = (
        <>
        <div className="flex items-center justify-center relative ">
            <div className="border-2 border-verde-oscuro rounded-xl relative w-[80%] md:w-[80%] lg:w-[600px] h-auto">
                <div className="w-full h-auto rounded-xl relative flex flex-col">
                    <main>
                        <form action="" className="p-2">
                            <FormItem label='Correo electrónico' htmlFor='student-mail' type='mail' placeholder='mail@example.com' />
                            <FormItem label='Fecha de ingreso' htmlFor='student-startdate' type='date' placeholder='' />
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
        title="Registre un nuevo alumno!"
    >
        {content}
          </Modal>
  )
}

export default CreateStudentFormModal
