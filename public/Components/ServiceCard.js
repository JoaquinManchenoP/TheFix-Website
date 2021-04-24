export default function ServiceCard({ serviceName, serviceDescription }) {
  return (
    <div className="text-lg w-48 h-full bg-red-400 space-y-5 flex flex-col items-center justify-center">
      <div className="cardContent w-full h-xs bg-purple-400 space-y-3 flex flex-col items-center ">
        <div className="cardtitle text-xl">{serviceName}</div>
        <div className="serviceDescription text-lg">{serviceDescription}</div>
      </div>
    </div>
  );
}
