
const FrameContentForms: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="flex items-center justify-center relative ">
            <div className="border-2 border-verde-oscuro rounded-xl relative w-[80%] md:w-[80%] lg:w-[600px] h-auto">
                <div className="w-full h-auto rounded-xl relative flex flex-col">
                <main>
                    <form action="" className="p-2">
                        {children}
                    </form>
                </main>
            </div>
        </div>
    </div>
  )
}

export default FrameContentForms
