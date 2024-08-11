import Modal from "@/app/components/modals/Modal"

const CreateTrainerFormModal = ({ isModalOpen, onClose }: { isModalOpen: boolean, onClose: () => void }) => {
  
    const content = (
        <>
        
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
