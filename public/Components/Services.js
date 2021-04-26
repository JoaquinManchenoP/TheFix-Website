import ServiceCard from "./ServiceCard";
import { GoTools } from "react-icons/go";
import { AiOutlineFieldTime } from "react-icons/ai";
import { TiLocation } from "react-icons/ti";

export default function Services() {
  return (
    <div className="servicesSection h-full w-screen flex items-center justify-center mt-20">
      <div className="servocesSectionContent h-lg  xs:w-full sm:w-full md:w-3/5 flex flex-col items-center justify-center space-y-5 ">
        <div className="title text-2xl  ">
          <p>Nuestros Servicios</p>
        </div>
        <div className="serviceDescription w-2/3 ">
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            laudantium accusamus adipisci consectetur neque excepturi doloribus
            molestiae, natus maiores sed.
          </p>
        </div>
        <div className="serviceIcons h-sm w-full flex justify-center pt-6 ">
          <div className="cards xs:space-x-0 sm:space-x-6 md:space-x-16 flex">
            <div className="card1">
              <div className="icon w-full flex items-center  justify-center text-blue-700">
                <GoTools size={50} />
              </div>
              <ServiceCard
                serviceName="Reparaciones"
                serviceDescription="The fix the arrgle todos los aparatod electronicos mi nepas"
              />
            </div>
            <div className="card2">
              <div className="icon w-full flex items-center justify-center text-blue-700">
                <AiOutlineFieldTime size={50} />
              </div>
              <ServiceCard
                serviceName="Atencion 24/7"
                serviceDescription="Atencion permanente, todos los dias a cualquier hora"
              />
            </div>
            <div className="card3">
              <div className="icon w-full flex items-center justify-center text-blue-700">
                <TiLocation size={50} />
              </div>
              <ServiceCard
                serviceName="A domicilio"
                serviceDescription="Servicio a domicilio dentro y fuera de la ciudad"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
