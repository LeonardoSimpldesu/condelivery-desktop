import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="bg-[#DCDBDA] h-screen">
      <div className="flex flex-col bg-[url('/landing/banner1.png')] bg-cover min-h-screen py-10 px-6 lg:px-40 justify-center">
        <div className="flex flex-col lg:flex-row justify-between items-center h-auto lg:h-[4.75rem] px-4 lg:px-[1.875rem] rounded-[20px] bg-[#E9EBF8] gap-6">
          <a href="#" className="w-[120px] lg:w-[150px] h-auto">
            <Image src="/landing/logo-condelivery.png" width="150" height="70" alt="Logo Condelivery"/>
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
                Entrar
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
        <Image src="/landing/img-mcc.png" alt="McCafe" width={350} height={455} className="w-[250px] h-[325px] md:w-[300px] md:h-[390px] lg:w-[350px] lg:h-[455px]"/>
        <Image src="/landing/twoPeople.png" alt="Two People" width={350} height={455} className="w-[250px] h-[325px] md:w-[300px] md:h-[390px] lg:w-[350px] lg:h-[455px]"/>
        <Image src="/landing/handshake.png" alt="Handshake" width={350} height={455} className="w-[250px] h-[325px] md:w-[300px] md:h-[390px] lg:w-[350px] lg:h-[455px]"/>
        <Image src="/landing/picking-up-package.png" alt="Picking up Package" width={350} height={455} className="w-[250px] h-[325px] md:w-[300px] md:h-[390px] lg:w-[350px] lg:h-[455px]"/>
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
              <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-30 w-full">
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
              <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-30 w-full">
                <h3 className="text-white font-semibold">Ana Silva</h3>
                <p className="text-white text-sm">
                  O Condelivery transformou a maneira como recebemos nossas encomendas no 
                  condomínio. Antes, era um caos, com pacotes se acumulando na portaria. 
                  Agora, tudo é organizado e posso confiar no sistema.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-12">
            <div>
              <h3 className="text-2xl font-bold">7,5M</h3>
              <p className="text-lg font-semibold text-gray-600">Condomínios</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">12</h3>
              <p className="text-lg font-semibold text-gray-600">Anos de serviços</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">15M</h3>
              <p className="text-lg font-semibold text-gray-600">Clientes satisfeitos</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">99%</h3>
              <p className="text-lg	 font-semibold text-gray-600">Taxa de felicidade</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 px-4 max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Explore nos recursos</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="relative" style={{ width: '511px', height: '269px' }}>
            <Image src="/landing/grid/gestao-de-encomendas.png" width="511" height="269" alt="Gestão de encomendas" className="w-full h-full object-cover rounded-lg"/>
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center rounded-lg">
              <h3 className="text-white text-lg font-semibold">Gestão de encomendas</h3>
            </div>
          </div>
          <div className="relative" style={{width: '512px', height: '322px'}}>
            <Image src="/landing/grid/acompanhamento.png" width="512" height="322" alt="Acompanhamento em Tempo Real" className="w-full h-full object-cover rounded-lg"/>
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center rounded-lg">
              <h3 className="text-white text-lg font-semibold">Acompanhamento em Tempo Real</h3>
            </div>
          </div>
          <div className="relative" style={{width: '512px', height: '447px'}}>
            <Image src="/landing/grid/notebook-service.png" width="512" height="447" alt="Indicação de Prestadores de Serviços" className="w-full h-full object-cover rounded-lg"/>
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center rounded-lg">
              <h3 className="text-white text-lg font-semibold">Indicação de Prestadores de Serviços</h3>
            </div>
          </div>
          <div className="relative" style={{width: '239px', height: '394px'}}> 
            <Image src="/landing/grid/seguranca-de-dados.png" width="239" height="394" alt="Segurança de Dados" className="w-full h-full object-cover rounded-lg"/>
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center rounded-lg">
              <h3 className="text-white text-lg font-semibold">Segurança de Dados</h3>
            </div>
          </div>
          <div className="relative" style={{width: '239px', height: '394px'}}>
            <Image src="/landing/grid/search-service.png" width="239" height="394" alt="Oferta e Busca de Serviços" className="w-full h-full object-cover rounded-lg"/>
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center rounded-lg">
              <h3 className="text-white text-lg font-semibold">Oferta e Busca de Serviços</h3>
            </div>
          </div>
          <div className="relative" style={{width: '512px', height: '341px'}}>
            <Image src="/landing/grid/integracao-apps.png" width="512" height="341" alt="Integração com Apps de Delivery" className="w-full h-full object-cover rounded-lg"/>
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center rounded-lg">
              <h3 className="text-white text-lg font-semibold">Integração com Apps de Delivery</h3>
            </div>
          </div>
          <div className="relative" style={{width: '512px', height: '216px'}}>
            <Image src="/landing/grid/notebook-monetization.png" width="512" height="216" alt="Modelo de Monetização" className="w-full h-full object-cover rounded-lg"/>
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center rounded-lg">
              <h3 className="text-white text-lg font-semibold">Modelo de Monetização</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-start justify-center mt-24 px-4 max-w-screen-lg mx-auto">
        {/* Título e subtítulo alinhados à esquerda */}
        <div className="mb-8 lg:mb-0 lg:mr-8 lg:w-[30%]">
          <h2 className="text-xl font-bold text-black">Perguntas Frequentes</h2>
          <p className="text-2xl md:text-3xl font-semibold text-black mt-4">Ainda tem alguma dúvida?</p>
        </div>
        {/* Perguntas Frequentes */}
        <div className="space-y-4 w-full lg:w-[600px]">
          {/* Pergunta 1 */}
          <div className="w-full h-[80px] border border-gray-300 rounded-lg flex items-center px-6">
            <span className="text-lg">O que é o Condelivery?</span>
            <span className="ml-auto text-lg font-bold">+</span>
          </div>
          {/* Pergunta 2 */}
          <div className="w-full h-[80px] border border-gray-300 rounded-lg flex items-center px-6">
            <span className="text-lg">Como funciona o Condelivery?</span>
            <span className="ml-auto text-lg font-bold">+</span>
          </div>
          {/* Pergunta 3 (com borda azul) */}
          <div className="w-full h-[80px] border border-gray-300 rounded-lg flex items-center px-6">
            <span className="text-lg">Quanto custa o serviço?</span>
            <span className="ml-auto text-lg font-bold">+</span>
          </div>
          {/* Pergunta 4 */}
          <div className="w-full h-[80px] border border-gray-300 rounded-lg flex items-center px-6">
            <span className="text-lg">Como garantir a privacidade dos usuários?</span>
            <span className="ml-auto text-lg font-bold">+</span>
          </div>
        </div>
      </section>
      
      <section className="bg-[#F46D1F] flex justify-center items-center h-[320px] mt-28">
        <div className="flex flex-col md:flex-row items-center md:space-x-[250px] space-y-4 md:space-y-0">
          <h1 className="text-white text-2xl md:text-4xl font-semibold text-center md:text-left">
            Transforme suas entregas em uma <br />
            experiência eficiente e direta!
          </h1>
          <button className="bg-white text-black font-bold py-2 px-4 rounded-md">
            Entrar
          </button>
        </div>
      </section>

      <section className="bg-[#231C19] flex justify-center items-center h-[454px] p-10 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mx-auto">
          <div className="w-[648px]">
            <h2 className="text-3xl font-bold mb-4">Condelivery</h2>
            <p className="text-sm">
              O Condelivery é um sistema inovador de entregas exclusivo para condomínios, 
              integrando-se a aplicativos conhecidos como iFood, Rappi, Uber. Seu objetivo 
              é simplificar o recebimento de mercadorias pelos moradores, proporcionando 
              comodidade e contribuindo para a agenda de empregos. A plataforma oferece 
              benefícios como acompanhamento de entregas, suporte dedicado e integração 
              eficiente com os aplicativos de terceiros. Além disso, as taxas são inclusas no 
              valor do condomínio, garantindo uma experiência conveniente e segura.
            </p>
          </div>
          <div className="max-w-sm w-full mt-8 md:mt-0">
            <h3 className="text-xl font-bold mb-4">CONTATE-NOS</h3>
            <form>
              <div className="mb-4">
                <input type="text" placeholder="Nome" className="w-full p-2 border border-gray-600 bg-transparent rounded text-white"/>
              </div>
              <div className="mb-4">
                <input type="email" placeholder="E-mail" className="w-full p-2 border border-gray-600 bg-transparent rounded text-white"/>
              </div>
              <div className="flex items-center mb-4">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms" className="text-sm">
                  Accept Terms
                </label>
              </div>
              <button type="submit"className="w-full bg-white text-black font-bold py-2 rounded-md">Enviar</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}