import React from 'react'
import FrameContentForms from '../../FrameContentForms'
import FormItem from '@/app/components/form/FormItem'
import Modal from '@/app/components/modals/Modal'

const CreatePlanFormModal = ({ isModalOpen, onClose }: { isModalOpen: boolean, onClose: () => void }) => {

    const content = (
        <>
        <FrameContentForms>
        <FormItem label='Nombre' htmlFor='plan-name' type='mail' placeholder='Mensual básico' />
        <FormItem label='Descripción' htmlFor='plan-description' type='test' placeholder='12 clases' />
        <FormItem label='Cantidad de clases' htmlFor='plan-classes' type='number' placeholder='12' />
        <FormItem label='Duración (días)' htmlFor='plan-days' type='number' placeholder='30' />
        <FormItem label='Precio ($)' htmlFor='plan-price' type='number' placeholder='20000' />
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
        title="Registre un nuevo plan!"
    >
        {content}
          </Modal>
  )
}

export default CreatePlanFormModal
