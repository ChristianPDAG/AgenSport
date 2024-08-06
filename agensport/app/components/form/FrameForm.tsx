
const FrameForm: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="flex items-center justify-center relative min-h-screen mt-4">
        <div className="border-2 border-verde-oscuro rounded-xl shadow-2xl relative w-[80%] md:w-[80%] lg:w-[600px] my-6 h-auto  ">
            <div className="w-full h-auto rounded-xl relative flex flex-col bg-white">
            <main>
                {children}  
            </main>
            </div>
        </div>
    </div>
        
  )
}

export default FrameForm
