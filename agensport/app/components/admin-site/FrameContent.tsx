
const FrameContent: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="border-2 border-verde-oscuro mt-20 shadow-xl shadow-gray-200 rounded-xl w-[80%] md:w-[80%] lg:w-[600px] ">
      <div className="p-2">
        {children}
      </div>
    </div>
  )
}

export default FrameContent
