import NewCaht from "./NewCaht"

function Sidebar() {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewCaht/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar