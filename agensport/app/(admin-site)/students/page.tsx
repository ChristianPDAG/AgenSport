"use client"

import FrameContent from "@/app/components/admin-site/FrameContent"
import CreateStudentFormModal from "@/app/components/admin-site/students/fom/CreateStudentFormModal";
import FrameMenu from "@/app/components/menu-user/FrameMenu"
import { useState } from "react";

const StudentsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex min-h-screen">
      <div className="w-1/4">
        <FrameMenu/>
      </div>
      <div className="flex-grow">
        <FrameContent>
          <div className="flex flex-col">
            <h1 className=" text-center p-4 text-2xl font-semibold text-verde-oscuro">Alumnos</h1>
          </div>
          <div>
            <div>
              <button
                onClick={() => setIsModalOpen(!isModalOpen)}
                className="principal_btn w-full transition-colors mb-4"
                >
                +Crear Alumno
              </button>
              <CreateStudentFormModal 
                isModalOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
            </div>
          </div>
        </FrameContent>
      </div>
      
    </div>
  )
}

export default StudentsPage
