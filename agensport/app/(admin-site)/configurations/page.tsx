
import FrameContent from "@/app/components/admin-site/FrameContent"
import FrameMenu from "@/app/components/menu-user/FrameMenu"

const ConfigurationPage = () => {

  return (
    <div className="flex min-h-screen">
      <div className="w-1/4">
        <FrameMenu/>
      </div>
      <div className="flex-grow">
        <FrameContent>
          <div className="flex flex-col">
            <h1 className=" text-center p-4 text-2xl font-semibold text-verde-oscuro">Configuraciones</h1>
          </div>
          <div>
            <div>
              
            </div>
          </div>
        </FrameContent>
      </div>
    </div>
  )
}

export default ConfigurationPage
