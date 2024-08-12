"use client"

import FrameContent from "@/app/components/admin-site/FrameContent"
import FrameMenu from "@/app/components/menu-user/FrameMenu"
import { useState } from "react";

const DisciplinePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex">
      <div className="w-1/4">
        <FrameMenu/>
      </div>
      <div className="flex-grow">
        <FrameContent>
          <div className="flex flex-col">
            <h1 className=" text-center p-4 text-2xl font-semibold text-verde-oscuro">Disciplinas</h1>
          </div>
          <div>
            <div>
              <button
                onClick={() => setIsModalOpen(!isModalOpen)}
                className="principal_btn w-full transition-colors mb-4"
                >
                +Crear Disciplina
              </button>
            </div>
          </div>
        </FrameContent>
      </div>
    </div>
  )
}

export default DisciplinePage
