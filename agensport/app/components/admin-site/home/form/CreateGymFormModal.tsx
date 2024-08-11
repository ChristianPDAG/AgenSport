import Modal from "@/app/components/modals/Modal"

const CreateGymFormModal = ({ isModalOpen, onClose }: { isModalOpen: boolean, onClose: () => void }) => {

    const content = (
        <>
    <div className="flex items-center justify-center relative ">
        <div className="border-2 border-verde-oscuro rounded-xl relative w-[80%] md:w-[80%] lg:w-[600px] h-auto">
            <div className="w-full h-auto rounded-xl relative flex flex-col">
                <main>
                    <form action="" className="p-2">
                        <div className="flex flex-col md:flex-row md:items-center mb-6">
                            <label
                                className="label_form_small"
                                htmlFor="sportcenter-name"
                            >
                                Nombre
                            </label>
                            <div className="md:w-2/3">
                                <input
                                    className="input_form_small"
                                    id="sportcenter-name"
                                    type="text"
                                    placeholder="ingrese nombre del centro"
                                />
                            </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:items-center mb-6">
                            <label
                                className="label_form_small"
                                htmlFor="sportcenter-address"
                            >
                                Ciudad
                            </label>
                            <div className="md:w-2/3">
                                <input
                                    className="input_form_small"
                                    id="sportcenter-address"
                                    type="text"
                                    placeholder="Santiago"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center mb-6">
                            <label
                                className="label_form_small"
                                htmlFor="sportcenter-address"
                            >
                                Comuna
                            </label>
                            <div className="md:w-2/3">
                                <input
                                    className="input_form_small"
                                    id="sportcenter-comuna"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center mb-6">
                            <label
                                className="label_form_small"
                                htmlFor="sportcenter-address"
                            >
                                Dirección
                            </label>
                            <div className="md:w-2/3">
                                <input
                                    className="input_form_small"
                                    id="sportcenter-address"
                                    type="text"
                                    placeholder="Calle 1234 "
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center mb-6">
                            <label
                                className="label_form_small"
                                htmlFor="sportcenter-phone"
                            >
                                Número de Teléfono
                            </label>
                            <div className="md:w-2/3">
                                <input
                                    className="input_form_small"
                                    id="sportcenter-phone"
                                    type="tel"
                                    placeholder="9-999-999"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center mb-6">
                            <label
                                className="label_form_small"
                                htmlFor="sportcenter-address"
                            >
                                Correo electrónico
                            </label>
                            <div className="md:w-2/3">
                                <input
                                    className="input_form_small"
                                    id="sportcenter-email"
                                    type="text"
                                    placeholder="mail@example.com"
                                />
                            </div>
                        </div>
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
        title="Registre su Centro Deportivo!"
    >
        {content}
          </Modal>
  )
}

export default CreateGymFormModal
