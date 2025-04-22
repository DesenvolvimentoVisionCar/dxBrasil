import { CheckCircle2 } from "lucide-react"
import codeImg from "../assets/comfundo.jpeg"
import { checklistItems } from "../constants"

const Workflow = () => {
  return (
    <div className="mt-10 sm:mt-16 lg:mt-20 border-b border-stone-400 pb-10 sm:pb-16">
      <h2 className="text-2xl sm:text-3xl lg:text-5xl text-center tracking-wide px-4">
        Transmissor Dx Brasil
        <br />
        <span className="text-xl sm:text-2xl lg:text-4xl mt-2 text-primaryg bg-clip-text inline-block">
          A Melhor Escolha do Mercado
        </span>
      </h2>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 mt-12 px-4 sm:px-6">
        <div className="w-full sm:w-4/5 lg:w-3/5 xl:w-2/5 relative group mx-auto lg:mx-0">
          <div className="absolute inset-0 transition-all duration-300"></div>
          <img
            src={codeImg || "/placeholder.svg"}
            alt="Transmissor Dx Brasil"
            className="object-cover rounded-lg shadow-xl transform transition-transform duration-500 group-hover:scale-105 w-full h-auto"
          />
        </div>

        <div className="w-full lg:w-1/2 pt-4 2xl:pt-12">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-8 sm:mb-12 lg:mb-5 xl:mb-12">
              <div className="text-green-400 mx-3 sm:mx-6 shadow-md h-8 w-8 sm:h-10 sm:w-10 p-1 sm:p-2 flex justify-center items-center rounded-full flex-shrink-0">
                <CheckCircle2 className="w-full h-full" />
              </div>
              <div className="flex-1">
                <h5 className="mt-0 sm:mt-1 mb-1 sm:mb-2 text-start text-lg sm:text-xl">{item.title}</h5>
                <p className="text-sm sm:text-md text-start text-stone-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Workflow

