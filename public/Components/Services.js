import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <div className="servicesSection h-xl w-screen flex items-center justify-center">
      <div className="servocesSectionContent h-lg w-3/5 bg-purple-400 flex flex-col items-center justify-center space-y-5">
        <div className="title text-2xl ">
          <p>Nuestros Servicios</p>
        </div>
        <div className="serviceDescription w-2/3">
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            laudantium accusamus adipisci consectetur neque excepturi doloribus
            molestiae, natus maiores sed.
          </p>
        </div>
        <div className="serviceIcons h-sm w-full bg-green-400 flex justify-center space-x-16">
          <ServiceCard
            serviceName="Reparaciones"
            serviceDescription="The fix the arrgle todos los aparatod electronicos mi nepas"
          />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </div>
  );
}
