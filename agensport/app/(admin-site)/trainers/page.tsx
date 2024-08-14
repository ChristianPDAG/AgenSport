"use client"

import FrameContent from "@/app/components/admin-site/FrameContent"
import CreateTrainerFormModal from "@/app/components/admin-site/trainers/form/CreateTrainerFormModal";
import TableTrainers from "@/app/components/admin-site/trainers/table/TableTrainers";
import FrameMenu from "@/app/components/menu-user/FrameMenu"
import { useState } from "react";

const TrainersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <div className="w-1/4">
        <FrameMenu />
      </div>
      <div className="flex-grow">
        <FrameContent>
          <div>
          <h1 className=" text-center p-4 text-2xl font-semibold text-verde-oscuro">Entrenadores</h1>
          </div>
                <div>
                  <div>
                  <button
                        onClick={() => setIsModalOpen(!isModalOpen)}
                        className="principal_btn w-full transition-colors mb-4">
                        +Crear Entrenador
                    </button>
                    <CreateTrainerFormModal
                        isModalOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                    />
                  </div>
                  <div className="flex flex-col">
                    
                    <TableTrainers/>
                  </div>
                </div>
        </FrameContent>
        
      </div>
      
      
    </div>
  )
}

export default TrainersPage
