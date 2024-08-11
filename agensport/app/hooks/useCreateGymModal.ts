import { create } from "zustand";

interface CreateGymModalStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const useCreateGymModal = create<CreateGymModalStore>( (set)  => ({
    isOpen: false,
    open: () => set({ isOpen:true }),
    close: () => set({ isOpen:false })
}));

export default useCreateGymModal;