import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <div className="introduction h-xl   flex justify-center ">
      <div className="introductionContent h-xl w-screen  flex  justify-center">
        <div className="content  h-lg w-4/5  flex  ">
          <div className="leftSide xs:w-full sm:w-1/2 h-full flex justify-center pt-32 ">
            <div className="Introduction space-y-11  ">
              <div className="title flex space-x-2 text-3xl">
                <p className="font-light ">El Mejor</p>
                <p className="font-semibold text-blue-700">Servicio Technico</p>
              </div>
              <div className="titleDescription   ">
                <p className="text-md text-light ">
                  ß Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sunt repellat natus possimus repudiandae consequatur dolores
                  similique rerum iure? Dolore libero error non commodi sapiente
                  facilis ipsa quibusdam inventore, dolorum rerum!
                </p>
              </div>

              <motion.button
                className=" h-button w-32 rounded-lg shadow-2xl bg-blue-700 text-white font-light text-sm"
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -250,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 1.5,
                  type: "spring",
                  stiffness: 100,
                  delay: 1,
                }}
                exit={{ opacity: 0 }}
              >
                Contactanos
              </motion.button>
            </div>
          </div>
          <div className="rightSide phone:w-0 xs:w-0 sm:w-1/2 h-full flex items-center  justify-center">
            <motion.div className="phonFixImage sm:h-72 sm:w-72 rounded-full shadow-2xl xs:w-0">
              <motion.img
                className="object-cover"
                src="../Images/cartoonFix.png"
              ></motion.img>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
