import React from "react";

export default function Introduction() {
  return (
    <div className="introduction h-xl bg-gray-200  flex justify-center ">
      <div className="introductionContent h-xl w-screen  flex  justify-center">
        <div className="content  h-lg w-4/5  flex  ">
          <div className="leftSide xs:w-full sm:w-1/2 h-full flex justify-center pt-32 ">
            <div className="Introduction space-y-6  ">
              <div className="title flex space-x-2 text-3xl">
                <p className="font-light ">El Mejor</p>
                <p className="font-semibold text-blue-500">Servicio Technico</p>
              </div>
              <div className="titleDescription   ">
                <p className="text-sm text-light">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                  repellat natus possimus repudiandae consequatur dolores
                  similique rerum iure? Dolore libero error non commodi sapiente
                  facilis ipsa quibusdam inventore, dolorum rerum!
                </p>
              </div>
              <button className=" h-button w-32 rounded-lg shadow-2xl bg-blue-500 text-white font-light text-sm">
                Contactanos
              </button>
            </div>
          </div>
          <div className="rightSide phone:w-0 xs:w-0 sm:w-1/2 h-full flex items-center  justify-center">
            <div className="phonFixImage sm:h-72 sm:w-72 rounded-full shadow-2xl xs:w-0">
              <img
                className="object-cover"
                src="../Images/cartoonFix.png"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
