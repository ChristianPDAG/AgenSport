"use client"

import FrameContent from "@/app/components/admin-site/FrameContent";
import FrameMenu from "@/app/components/menu-user/FrameMenu";
import { useState } from "react";
import CreateGymFormModal from "@/app/components/admin-site/home/form/CreateGymFormModal";

const HomeAdmin = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex">
            <div className="w-1/4">
                <FrameMenu />
            </div>
            <div className="flex-grow">
                <FrameContent>
                    <h1 className="p-6 flex justify-center text-4xl font-semibold text-verde-oscuro">
                      ¡Bienvenido!
                    </h1>
                    <button
                        onClick={() => setIsModalOpen(!isModalOpen)}
                        className="principal_btn w-full transition-colors">
                        +Crear Gimnasio
                    </button>
                    <br />
                    <CreateGymFormModal
                        isModalOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                    />
                </FrameContent>
            </div>
        </div>
    );
};

export default HomeAdmin;
