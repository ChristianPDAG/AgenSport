

import { useEffect, useState } from "react";
import style from "./Modal.module.css"
const Modal = ({
    isOpen,
    onClose,
    children,
    title,
}: {
    isOpen: boolean,
    onClose: () => void,
    children: React.ReactNode,
    title: string,
    }
) => {
    if (!isOpen) return null;

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
    
        window.addEventListener("keydown", handleKeyDown);
    
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);
    
  return (
    <>
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300">
    <div className="bg-white p-5 rounded-md shadow-lg max-w-sm mx-auto">
        <header className="flex items-center p-1 rounded-t justify-between relative border-b">
            <div className="flex-1 text-center">
                {title}
            </div>
            <div className=" right-2 top-2">
                <button
                    className="hover:bg-gray-200 rounded-full p-1"
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </header>
        <div className="max-h-[65vh] mt-2 overflow-y-auto">
            {children}
        </div>
    </div>
</div>

    </>
  )
}

export default Modal
