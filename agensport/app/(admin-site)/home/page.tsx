import FrameContent from "@/app/components/admin-site/FrameContent"
import FrameMenu from "@/app/components/menu-user/FrameMenu"

const HomeAdmin = () => {
  return (
    <>
    <div className="flex">
      <div className="w-1/4">
        <FrameMenu />
      </div>
      
      <div className="flex-grow ">
        <FrameContent>
          
        </FrameContent>
      </div>
    </div>
    </>
  )
}

export default HomeAdmin
