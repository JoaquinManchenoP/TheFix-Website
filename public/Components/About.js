import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function About() {
  const animation = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [inView]);

  const variants = {
    hidden: {
      x: 120,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-xl w-screen flex bg-gray-200 items-center justify-center ">
      <div className="aboutcontent h-lg w-3/5 flex space-x-8 ">
        <div className="leftSide h-full flex flex-col items-center justify-center space-y-8 xs:w-full sm:w-full md:w-1/2  ">
          <div className="companyName flex space-x-2 ">
            <p className="text-2xl pt-1 bg-blue0">Bienvenido a</p>
            <p className="text-3xl text-blue-700 font-semibold">The Fix</p>
          </div>
          <div className="companyDescription font-light text-md  ">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos ducimus quos dicta voluptates facilis ex ad nihil,
              dolorem repellendus. Officiis optio obcaecati mollitia iure aut.
              Necessitatibus doloribus dignissimos rerum nulla ipsam ad cum quam
              sint rem illo fuga, est ea.
            </p>
          </div>
        </div>
        <div className="righSide  flex items-center justify-center xs:w-0 sm:w-0 md:w-1/2 ">
          <div className="images h-md w-80  flex flex-col items-center space-y-2 ">
            <motion.div
              className="image1 h-half w-5/6 "
              ref={ref}
              animate={animation}
              initial="hidden"
              variants={variants}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <img
                className="h-xxs w-full object-cover rounded-xl shadow-2xl"
                src="../Images/computer-unsplash.jpg"
              ></img>
            </motion.div>
            <motion.div
              className="image2 h-half w-5/6 "
              ref={ref}
              animate={animation}
              initial="hidden"
              variants={variants}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <img
                className="h-xxs w-full object-cover rounded-xl shodow-2xl"
                src="../Images/technician.jpg"
              ></img>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
