import cancion from "../assets/song.mp3";
import CountdownCircles from "./CountdownCircles";
import GoogleCalendarButton from "./GoogleCalendarButton";
import DatosBancarios from "./DatosBancarios";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import LugaresLineal from "./LugaresLineal";
import GalleryElegante from "./GalleryElegante";
import decoracionBajoNombres from "../assets/verona/decoracionBajoNombres.svg";

import hojasDecoracionIzq from "../assets/verona/hojasDecoracionIzq.svg";
import hojasDecoracionDer from "../assets/verona/hojasDecoracionDer.svg";
// import decoracionImagenes from "../assets/verona/decoracionImagenes.svg";
import decoracionDressCode from "../assets/verona/decoracionDressCode.svg";
import ringsInicio from "../assets/ringsInicio.svg";

import DressCodeVerona from "./dressCodeVerona";
import MusicScreen from "./MusicScreen";
import AlbumRecuerdos from "./AlbumRecuerdos";

const Invitacion = () => {
  const targetDate = new Date("2026-01-17T20:00:00-03:00");

  const colorPrincipal = "#69795d";
  const colorSecundario = "#69795d";

  return (
    <div className="w-full font-robotoSerif relative overflow-hidden bg-[#f8f5f0]">
      <div className="absolute z-40">
        <MusicScreen cancion={cancion} />
      </div>

      <div
        className="relative flex flex-col justify-center items-center min-h-screen w-full text-center bg-center bg-cover font-eleganteText space-y-5 overflow-hidden"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1741620131/Invitacio%CC%81n_Vertical_Boda_Casamiento_Minimalista_Verde_y_Blanco_dlihnb.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src={hojasDecoracionIzq}
          alt="Decoración Izquierda"
          className="
            absolute 
            top-0 
            -left-28
            pointer-events-none 
            w-116 
            md:w-136      
            lg:w-208 
            lg:-left-60  
            transition-all
            duration-300
          "
        />

        <img
          src={hojasDecoracionDer}
          alt="Decoración Derecha"
          className="
            absolute 
            bottom-0 
            -right-28
            pointer-events-none 
            w-116
            md:w-136
            lg:w-208
            lg:-right-60
            transition-all
            duration-300
          "
        />


        {/* <img
          src={ringsInicio}
          alt="Decoración bajo nombres"
          className="w-32 md:w-40 h-auto"
        /> */}
        <h1 className="text-5xl md:text-8xl font-marckScript text-[#4b5147] z-10 italic">
          Cecilia & Walter
        </h1>

        <img
          src={decoracionBajoNombres}
          alt="Decoración bajo nombres"
          className="w-48 sm:w-72 md:w-84 h-auto"
        />

        <div className="flex items-center justify-center py-2 px-4 bg-[#c8d4c1] mt-2">
          <p className="font-normal text-[#4b5147] text-lg">
            1 7 . 0 1 . 2 0 2 6
          </p>
        </div>

      </div>
        <section className="bg-white py-10 text-center px-6 md:px-20 relative">
          <div
            data-aos="fade-up"
            className="max-w-3xl mx-auto bg-[#f8f5f0] border border-[#d8d3c4] rounded-3xl p-8 shadow-sm"
          >
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-robotoSerif">
              Con cariño les pedimos acompañarnos sin niños, para que todos podamos bailar y brindar sin preocupaciones. <br /><span className="italic font-semibold text-[#69795d]">¡ Los esperamos !</span>
            </p>
            <img
              src={ringsInicio}
              alt="Decoración anillos"
              className="w-20 mx-auto mt-6 opacity-80"
            />
          </div>
        </section>

      <div>
        <section
          id="contador"
          className="bg-white py-10 border-y-4 border-[#9eba8a]"
        >
          <CountdownCircles
            targetDate={targetDate}
            containerClasses="my-8"
            backgroundColor="#e5e7eb"
            progressColor="#9eba8a"
            textColor="black"
            valueClassName="text-3xl font-light"
            labelClassName="text-base font-thin"
          />
        </section>

        <div className="bg-[#69795d] border-b-2 border-white ">
          <div data-aos="fade-up">
            <LugaresLineal
              borderColor="border-[#a2b891]"
              buttonStyle="border-[#a2b891] text-lg"
              iglesia="Parroquia María Madre de la Iglesia"
              hora_iglesia="18:30hs"
              salon="Te esperamos en La Colorada Eventos"
              hora_civil="13:00hs"
              hora_fiesta="20:00hs"
              link_ceremonia="https://maps.app.goo.gl/h48DxcAEP94fm9sKA"
              link_fiesta="https://maps.app.goo.gl/DyD7gWdLcihzX1AX7"
            />
          </div>
        </div>

        {/* <div className="relative py-10 bg-white">
          <img
            src={decoracionImagenes}
            alt="Decoración lateral"
            className="hidden md:block absolute -left-36 top-1/2 transform -translate-y-1/2 pointer-events-none"
            style={{
              width: "30rem",
              transform: "translateY(-50%) scaleX(-1)",
            }}
          />
          <img
            src={decoracionImagenes}
            alt="Decoración lateral invertida"
            className="hidden md:block absolute -right-36 top-1/2 transform -translate-y-1/2 pointer-events-none"
            style={{ width: "30rem" }}
          />
          <GalleryElegante
            textStyle="text-[#4b5147]"
            buttonStyle="bg-[#9eba8a]"
            images={[
              {
                index: 1,
                img: "https://res.cloudinary.com/dfschbyq2/image/upload/c_crop,ar_1:1/v1762813330/ac78c50b-eb78-451f-b3ac-b8291f0369e2_t5b3bt.jpg",
              },
              {
                index: 2,
                img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1762813322/03dd71dc-aac2-48be-9a39-c837aa10cb57_ntlbxn.jpg",
              },
              {
                index: 3,
                img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1762813318/4d8431d5-92bf-4c46-82a2-71a3a792be0c_kfasbr.jpg",
              },
              {
                index: 4,
                img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1762813363/315a49fe-8231-40be-8100-ef2c1b51fb61_ycuwv6.jpg",
              },
              {
                index: 5,
                img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1762813359/f9a6d891-e109-45cf-8b47-c4659f9aabe8_twvvyw.jpg",
              },
              {
                index: 6,
                img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1762813351/d571ea2d-ac50-424f-8bf5-52252072fbd6_fpvtdo.jpg",
              },
              {
                index: 7,
                img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1762813340/14eaeca0-266b-44b2-aaa4-352f0471089b_ibn41u.jpg",
              },
            ]}
          />
        </div> */}
        {/* 
          <div className="bg-white border border-b-4 border-[#9eba8a]">
            <InstagramWall
              userClass="text-[#4b5147]"
              logoClass="text-[#9eba8a]"
              user="@fran_y_mari"
            />
          </div> */}

        <div className="bg-[#69795d] text-center relative text-white">
          <GoogleCalendarButton
            buttonClass="border-white rounded-full"
            titleCalendar="Casamiento de Cecilia y Walter"
            salon="La Colorada, Cipolletti, Río Negro Province"
            fechaComienzo="20260117T200000"
            fechaFin="20260118T050000"
          />
        </div>

        <div className="relative bg-white py-10">
          <img
            src={decoracionDressCode}
            alt="Decoración DressCode Izq"
            className="hidden md:block absolute -left-20 top-1/2 transform -translate-y-1/2 pointer-events-none"
            style={{
              width: "20rem",
              transform: "translateY(-50%)",
            }}
          />
          <img
            src={decoracionDressCode}
            alt="Decoración DressCode Der"
            className="hidden md:block absolute -right-20 top-1/2 transform -translate-y-1/2 pointer-events-none"
            style={{
              width: "20rem",
              transform: "translateY(-50%) scaleX(-1)",
            }}
          />

          <DressCodeVerona dressCode="Elegante" />
        </div>

        <DatosBancarios
          texto="Si deseás hacernos un regalo te dejamos nuestros datos"
          claseIcon="text-white"
          claseContenedor="bg-[#69795d] text-white"
          claseBoton="rounded-full hover:shadow-lg border-[#a2b891] bg-gray-100 text-gray-900"
          textSize="text-lg"
          background={{ backgroundColor: colorPrincipal }}
          styleBotonModal={{
            backgroundColor: "white",
            borderColor: "#9eba8a",
          }}
          claseBotonModal={{
            backgroundColor: "#9eba8a",
            borderColor: "#9eba8a",
          }}
          styleModal={{ backgroundColor: colorSecundario }}
          styleBorderModal={{ borderColor: colorPrincipal }}
          styleTextColor={{ color: colorPrincipal }}
          cbu="0170089340000046459387"
          alias="ceciliaywalter"
          banco="BBVA ARGENTINA"
          nombre="Walter Darío Campos"
          claseModal="bg-[#9eba8a]"
          borderModal="border-[#9eba8a]"
          textColor="text-[#9eba8a]"
        />

        <AlbumRecuerdos link="https://photos.app.goo.gl/b4ZHa85wqiPwqbQh8" color="#69795d" />

        <Asistencia
          clase="py-10 bg-white bg-fixed border-b-4 border-[#9eba8a]"
          claseTitle="text-[#9eba8a]"
          claseButton="border-2 border-[#9eba8a] font-semibold hover:bg-[#9eba8a]  text-gray-700 hover:text-white rounded-full"
          linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSdNdtWqIWALCC2HoLacaBv7ws4qFtvgPxBOG_fq7ueFfouBhw/viewform?usp=sharing&ouid=101386997737484433208"
        />

        <div className="font-robotoSerif text-xl italic bg-white">
          <TextoFinal textoFinal="¡Gracias por venir!" />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
