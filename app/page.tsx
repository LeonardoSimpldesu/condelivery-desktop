import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="bg-[#DCDBDA] h-screen">
      <div className="flex flex-col bg-[url('/landing/banner1.png')] bg-cover min-h-screen py-10 px-6 lg:px-40 justify-center">
        
        <div className="flex flex-col lg:flex-row justify-between items-center h-auto lg:h-[4.75rem] px-4 lg:px-[1.875rem] rounded-[20px] bg-[#E9EBF8] gap-6">
        
          <a href="#" className="w-[120px] lg:w-[150px] h-auto">
            <Image src="/landing/logo-condelivery.png" width="150" height="70" alt="Logo Condelivery" />
          </a>
          <nav className="mt-4 lg:mt-0">
            <ul className="flex flex-col lg:flex-row list-none gap-4 lg:gap-8">
              <li>
                <a className="no-underline text-sm lg:text-base font-bold text-black" href="#sobre">Sobre</a>
              </li>
              <li>
                <a className="no-underline text-sm lg:text-base font-bold text-black" href="#vantagens">Vantagens</a>
              </li>
              <li>
                <a className="no-underline text-sm lg:text-base font-bold text-black" href="#recursos">Recursos</a>
              </li>
              <li>
                <a className="no-underline text-sm lg:text-base font-bold text-black" href="#PerguntasFrequentes">Perguntas Frequentes</a>
              </li>
              <li>
                <a className="no-underline text-sm lg:text-base font-bold text-black" href="#contato">Contato</a>
              </li>
            </ul>
          </nav>
          <div className="mt-4 lg:mt-0">
            <a href="#">
              <button className="w-[90px] lg:w-[110px] h-[42px] text-[14px] lg:text-[17px] text-[#E9EBF8] rounded-[10px] border-none bg-[#F46D1F] cursor-pointer">
                Download
              </button>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center mt-10 lg:mt-[200px] text-[#E9EBF8]">
          <h1 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[128px] font-extrabold text-center">
            Condelivery
          </h1>
          <p className="text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-semibold text-center">
            Suas entregas no condomínio, simplificadas!
          </p>
          <button className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[191.65px] h-[48px] sm:h-[56px] md:h-[62px] lg:h-[66px] rounded-[10px] border border-[#DCDBDA] bg-transparent mt-6 lg:mt-[40px] text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold cursor-pointer">
            Saiba mais
          </button>
        </div>
      </div>

      <section className="flex flex-col items-center justify-center p-6 bg-gray-50">
        <div className="bg-white shadow-lg rounded-lg mt-20 p-8 max-w-4xl w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre nós</h2>
          <p className="text-xl font-bold text-orange-500 mb-6">Condelivery</p>
          <p className="text-gray-700 leading-relaxed">
            O Condelivery é uma plataforma que melhora a logística de entregas em condomínios,
            integrando aplicativos de delivery como iFood, Rappi e Uber. Além disso, permite que 
            moradores ofertem e busquem serviços, criando oportunidades de emprego local e 
            facilitando a indicação de prestadores de serviços. A segurança dos dados é garantida
            conforme a LGPD.
          </p>
        </div>
      </section>
      
      <section className="flex flex-wrap justify-center mt-20 gap-4">
        <Image 
          src="/landing/img-mcc.png" 
          alt="McCafe" 
          width={350} 
          height={455} 
          className="w-[250px] h-[325px] md:w-[300px] md:h-[390px] lg:w-[350px] lg:h-[455px]"
        />
        <Image 
          src="/landing/twoPeople.png" 
          alt="Two People" 
          width={350} 
          height={455} 
          className="w-[250px] h-[325px] md:w-[300px] md:h-[390px] lg:w-[350px] lg:h-[455px]"
        />
        <Image 
          src="/landing/handshake.png" 
          alt="Handshake" 
          width={350} 
          height={455} 
          className="w-[250px] h-[325px] md:w-[300px] md:h-[390px] lg:w-[350px] lg:h-[455px]"
        />
        <Image 
          src="/landing/picking-up-package.png" 
          alt="Picking up Package" 
          width={350} 
          height={455} 
          className="w-[250px] h-[325px] md:w-[300px] md:h-[390px] lg:w-[350px] lg:h-[455px]"
        />
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Título da seção */}
          <h2 className="text-3xl font-bold text-center mb-10">Feedback dos nossos clientes</h2>

          {/* Cards de feedback */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Primeiro Card */}
            <div className="relative bg-gray-200 rounded-lg shadow-md overflow-hidden">
              <Image src="/landing/taking-box-from-car.png" width='784' height='420' alt="" className="w-full object-cover"/>
              <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 w-full">
                <h3 className="text-white font-semibold">Carlos Pereira</h3>
                <p className="text-white text-sm">
                  Desde que começamos a usar o Condelivery, a logística de entregas melhorou
                  significativamente. A integração com o iFood e o Rappi facilita muito, e a
                  segurança dos dados me deixa tranquilo.
                </p>
              </div>
            </div>
            {/* Segundo Card */}
            <div className="relative bg-gray-200 rounded-lg shadow-md overflow-hidden">
              <Image src="/landing/display.png" width='784' height='420' alt="" className="w-full object-cover"/>
              <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 w-full">
                <h3 className="text-white font-semibold">Ana Silva</h3>
                <p className="text-white text-sm">
                  O Condelivery transformou a maneira como recebemos nossas encomendas no 
                  condomínio. Antes, era um caos, com pacotes se acumulando na portaria. 
                  Agora, tudo é organizado e posso confiar no sistema.
                </p>
              </div>
            </div>
          </div>
          {/* Estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-12">
            {/* Estatística 1 */}
            <div>
              <h3 className="text-2xl font-bold">7,5M</h3>
              <p className="text-lg font-semibold text-gray-600">Condomínios</p>
            </div>
            {/* Estatística 2 */}
            <div>
              <h3 className="text-2xl font-bold">12</h3>
              <p className="text-lg font-semibold text-gray-600">Anos de serviços</p>
            </div>
            {/* Estatística 3 */}
            <div>
              <h3 className="text-2xl font-bold">15M</h3>
              <p className="text-lg font-semibold text-gray-600">Clientes satisfeitos</p>
            </div>
            {/* Estatística 4 */}
            <div>
              <h3 className="text-2xl font-bold">99%</h3>
              <p className="text-lg	 font-semibold text-gray-600">Taxa de felicidade</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

