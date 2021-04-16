import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <div className="navbar h-36 w-screen  items-center justify-center flex flex-col item-center ">
      <div className="navTopSection h-3/4 md:w-4/5  flex justify-between">
        <div className="logoImage sm:w-96 xs:w-0">
          <img className="object-cover" src="../Images/logo.jpg"></img>
        </div>
        <div className="infoIcons flex pt-4 space-x-8 xs:w-screen xs:w-5/5 justify-end sm:pr-0 xs:pr-12   ">
          <div className="contactEmail flex ">
            <div className="icon text-3xl text-blue-700 mr-3 pt-2">
              <AiOutlineMail />
            </div>

            <div className="info space-y-1">
              <p className="text-md font-semibold">Email</p>
              <p className="text-xs font-light ">thefix@gmail.com</p>
            </div>
          </div>

          <div className="contactNumber">
            <div className="contactNumber flex">
              <div className="icon text-3xl text-blue-700 mr-3 pt-2">
                <BiPhoneCall />
              </div>
              <div className="info space-y-1">
                <p className="text-md font-semibold">Telefono</p>
                <p className="text-xs font-light ">thefix@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="times">
            <div className="times flex">
              <div className="icon text-3xl text-blue-700 mr-3 pt-2">
                <BsClock />
              </div>
              <div className="info space-y-1">
                <p className="text-md font-semibold">Horario</p>
                <p className="text-xs font-light">Lun-vie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomSection h-9 w-4/5 flex items-center justify-between pt-6  ">
        <div className="navOptions flex space-x-3  text-md">
          <Link href="/">
            <p
              className={
                router.pathname === "/" ? "text-blue-700" : "text-gray-500"
              }
              style={{ cursor: "pointer" }}
            >
              Inicio
            </p>
          </Link>
          <Link href="/Services">
            <p
              className={
                router.pathname === "/Services"
                  ? "text-blue-700"
                  : "text-gray-500"
              }
              style={{ cursor: "pointer" }}
            >
              Servicios
            </p>
          </Link>
          <Link href="/Contact">
            <p
              className={
                router.pathname === "/Contact"
                  ? "text-blue-700"
                  : "text-gray-500"
              }
              style={{ cursor: "pointer" }}
            >
              Contacto
            </p>
          </Link>
        </div>
        <div className="socialMediaLinks flex space-x-8 text-blue-700">
          <div className="facebook">
            <GrFacebook size={23} />
          </div>
          <div className="instagram text-blue-700">
            <GrInstagram size={23} />
          </div>
        </div>
      </div>
    </div>
  );
}
