export default function ServiceCard({ serviceName, serviceDescription }) {
  return (
    <div className="text-lg w-48 h-full bg-gray-300 space-y-5 flex flex-col items-center justify-center rounded-xl ">
      <div className="cardContent w-full h-xxs  space-y-5 flex flex-col items-center   ">
        <div className="cardtitle text-xl ">{serviceName}</div>
        <div className="serviceDescription text-md font-light">
          {serviceDescription}
        </div>
      </div>
    </div>
  );
}
