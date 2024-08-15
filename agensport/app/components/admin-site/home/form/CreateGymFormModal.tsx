import FormItem from "@/app/components/form/FormItem"
import Modal from "@/app/components/modals/Modal"
import FrameContentForms from "../../FrameContentForms"

const CreateGymFormModal = ({ isModalOpen, onClose }: { isModalOpen: boolean, onClose: () => void }) => {

    const content = (
        <>
            <FrameContentForms>
                    <FormItem label="Nombre" htmlFor="sportcenter-name" type="text" placeholder="Centro deportivo"/>
                    <FormItem label="Ciudad" htmlFor="sportcenter-city" type="text" placeholder="Santiago"/>
                    <FormItem label="Comuna" htmlFor="sportcenter-address" type="text" placeholder="Santiago"/>
                    <FormItem label="Dirección" htmlFor="sportcenter-address" type="text" placeholder="Avenida 123"/>
                    <FormItem label="Número de telefóno" htmlFor="sportcenter-phone" type="tel" placeholder="9 9999 9999"/>
                    <FormItem label="Correo electrónico" htmlFor="sportcenter-mail" type="mail" placeholder="mail@example.com"/>

                        <div className="flex flex-col md:flex-row md:items-center mb-6">
                            <label
                                className="label_form_small"
                                htmlFor="sportcenter-address"
                            >
                                Horario (días)
                            </label>
                            <div className="md:w-2/3 space-x-1 flex">
                                <input
                                    className="input_form_small"
                                    id="sportcenter-address"
                                    type="text"
                                    placeholder="Lunes "
                                />
                                <label htmlFor="" className="text-xs p-1">a</label>
                                <input
                                    className="input_form_small"
                                    id="sportcenter-address"
                                    type="text"
                                    placeholder="Viernes"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center mb-6">
                            <label
                                className="label_form_small"
                                htmlFor="sportcenter-open"
                            >
                                Hora Apertura
                            </label>
                            <div className="md:w-2/3 space-x-1 flex">
                            <input
                                    className="input_form_small pr-0"
                                    id="sportcenter-open"
                                    type="number"
                                    placeholder="8"
                                />
                                <label htmlFor="" >:</label>
                                <input
                                    className="input_form_small"
                                    id="sportcenter-open"
                                    type="number"
                                    placeholder="00"
                                />
                                <label htmlFor="" className="text-xs p-1 text-verde-oscuro">hrs</label>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center mb-6">
                            <label
                                className="label_form_small"
                                htmlFor="sportcenter-close"
                            >
                                Hora Cierre
                            </label>
                            <div className="md:w-2/3 flex space-x-1 ">
                                <input
                                    className="input_form_small pr-0"
                                    id="sportcenter-close"
                                    type="number"
                                    placeholder="18"
                                />
                                <label htmlFor="" >:</label>
                                <input
                                    className="input_form_small"
                                    id="sportcenter-close"
                                    type="number"
                                    placeholder="00"
                                />
                                <label htmlFor="" className="text-xs p-1">hrs</label>
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
        title="Registre su Centro Deportivo!"
    >
        {content}
          </Modal>
  )
}

export default CreateGymFormModal
