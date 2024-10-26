import { Navigation } from '@/components/pages/home/navigation'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Home() {
  return (
    <main className="relative min-h-screen scroll-smooth">
      <Navigation />

      <div className="relative min-h-screen flex flex-col justify-center">
        <Image
          src={'/landing/banner1.png'}
          fill
          alt="home entregando"
          className="-z-10"
        />
        <div className=" flex flex-col items-center gap-4 text-[#E9EBF8]">
          <h1 className="font-extrabold text-center lg:text-8xl">
            Condelivery
          </h1>
          <p className="lg:text-4xl font-semibold text-center">
            Suas entregas no condomínio, simplificadas!
          </p>
          <button className="border border-[#DCDBDA] bg-transparent font-bold cursor-pointer py-5 px-7 mt-4 rounded-2xl text-xl">
            Saiba mais
          </button>
        </div>
      </div>

      <section
        className="flex flex-col items-center justify-center p-36 bg-gray-50"
        id="sobre"
      >
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre nós</h2>
          <p className="text-xl font-bold text-orange-500 mb-6">Condelivery</p>
          <p className="text-gray-700 leading-relaxed">
            O Condelivery é uma plataforma que melhora a logística de entregas
            em condomínios, integrando aplicativos de delivery como iFood, Rappi
            e Uber. Além disso, permite que moradores ofertem e busquem
            serviços, criando oportunidades de emprego local e facilitando a
            indicação de prestadores de serviços. A segurança dos dados é
            garantida conforme a LGPD.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 px-5 sm:px-10 xl:px-0 container mx-auto mt-8">
        <div className="relative aspect-square xl:aspect-[450/585]">
          <Image src="/landing/img-mcc.png" alt="McCafe" fill className="object-cover" />
        </div>
        <div className="relative aspect-square xl:aspect-[450/585]">
          <Image src="/landing/twoPeople.png" alt="Two People" fill className="object-cover brightness-50" />
          {/* Ícone e Texto sobrepostos */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <Image src="/landing/lampada-de-ideia.png" alt="Lâmpada" width={80} height={80} className="mb-4" />
            <p className="text-center text-lg font-semibold">
              transformar os serviços<br />de entregas em<br />condomínio
            </p>
          </div>
        </div>
        <div className="relative aspect-square xl:aspect-[450/585]">
          <Image src="/landing/handshake.png" alt="Handshake" fill className="object-cover" />
        </div>
      </section>


      <section className="mt-24">
        <h2 className="text-center text-5xl font-semibold text-black mb-12">Com o Condelivery você tem:</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-16">
          {/* Conforto */}
          <div className="flex flex-col items-center text-center">
            <div className="relative flex items-center">
              <div className="rounded-lg">
                <Image src="/landing/conforto.png" alt="Conforto" width={250} height={250} />
              </div>
            </div>
            <p className="text-black font-semibold text-2xl mt-5">CONFORTO</p>
          </div>

          {/* Controle */}
          <div className="flex flex-col items-center text-center">
            <div className="relative flex items-center">
              <div className="rounded-lg">
                <Image src="/landing/controle.png" alt="Controle" width={250} height={250} />
              </div>
            </div>
            <p className="text-black font-semibold text-2xl mt-5">CONTROLE</p>
          </div>

          {/* Segurança */}
          <div className="flex flex-col items-center text-center">
            <div className="relative flex items-center">
              <div className="rounded-lg">
                <Image src="/landing/seguranca.png" alt="Segurança" width={250} height={250} />
              </div>
            </div>
            <p className="text-black font-semibold text-2xl mt-5">SEGURANÇA</p>
          </div>
        </div>
      </section>


      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Título da seção */}
          <h2 className="text-3xl font-bold text-center mb-20">
            Feedback dos nossos clientes
          </h2>

          {/* Cards de feedback */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Primeiro Card */}
            <div className="relative bg-gray-200 rounded-lg shadow-md overflow-hidden">
              <Image
                src="/landing/taking-box-from-car.png"
                width="784"
                height="420"
                alt=""
                className="w-full object-cover brightness-75"
              />
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h3 className="text-white font-semibold">Carlos Pereira</h3>
                <p className="text-white text-sm">
                  Desde que começamos a usar o Condelivery, a logística de
                  entregas melhorou significativamente. A integração com o iFood
                  e o Rappi facilita muito, e a segurança dos dados me deixa
                  tranquilo.
                </p>
              </div>
            </div>
            {/* Segundo Card */}
            <div className="relative bg-gray-200 rounded-lg shadow-md overflow-hidden">
              <Image
                src="/landing/display.png"
                width="784"
                height="420"
                alt=""
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h3 className="text-white font-semibold">Ana Silva</h3>
                <p className="text-white text-sm">
                  O Condelivery transformou a maneira como recebemos nossas
                  encomendas no condomínio. Antes, era um caos, com pacotes se
                  acumulando na portaria. Agora, tudo é organizado e posso
                  confiar no sistema.
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
              <p className="text-lg font-semibold text-gray-600">
                Anos de serviços
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">15M</h3>
              <p className="text-lg font-semibold text-gray-600">
                Clientes satisfeitos
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">99%</h3>
              <p className="text-lg	 font-semibold text-gray-600">
                Taxa de felicidade
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 px-4 container mx-auto" id="recursos">
        <h2 className="text-2xl font-bold text-center mb-14">
          Explore nossos recursos
        </h2>
        <div className="grid md:grid-cols-2 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-3 gap-4 h-[100svh] md:h-[40rem]">
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="relative w-full h-full overflow-hidden col-span-2">
              <Image
                src="/landing/grid/gestao-de-encomendas.png"
                fill
                alt="Gestão de encomendas"
                className="object-cover -z-10 brightness-75 rounded-lg"
              />
              <div className=" w-full h-full p-4">
                <h3 className="text-white text-lg font-semibold">
                  Gestão de encomendas
                </h3>
              </div>
            </div>
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/landing/grid/seguranca-de-dados.png"
                fill
                alt="Gestão de encomendas"
                className="object-cover -z-10 brightness-75 rounded-lg"
              />
              <div className=" w-full h-full p-4">
                <h3 className="text-white text-lg font-semibold">
                  Segurança de Dados
                </h3>
              </div>
            </div>
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/landing/grid/search-service.png"
                fill
                alt="Gestão de encomendas"
                className="object-cover -z-10 brightness-75 rounded-lg"
              />
              <div className=" w-full h-full p-4">
                <h3 className="text-white text-lg font-semibold">
                  Oferta e Busca de Serviços
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 row-span-2">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/landing/grid/acompanhamento.png"
                fill
                alt="Gestão de encomendas"
                className="object-cover -z-10 brightness-75 rounded-lg"
              />
              <div className=" w-full h-full p-4">
                <h3 className="text-white text-lg font-semibold">
                  Acompanhamento em Tempo Real
                </h3>
              </div>
            </div>
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/landing/grid/integracao-apps.png"
                fill
                alt="Gestão de encomendas"
                className="object-cover -z-10 brightness-75 rounded-lg"
              />
              <div className=" w-full h-full p-4">
                <h3 className="text-white text-lg font-semibold">
                  Integração com Apps de Delivery
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/landing/grid/notebook-service.png"
                fill
                alt="Gestão de encomendas"
                className="object-cover -z-10 brightness-75 rounded-lg"
              />
              <div className=" w-full h-full p-4">
                <h3 className="text-white text-lg font-semibold">
                  Indicação de Prestadores de Serviços
                </h3>
              </div>
            </div>
            <div className="relative w-full h-full overflow-hidden lg:h-[50%]">
              <Image
                src="/landing/grid/notebook-monetization.png"
                fill
                alt="Gestão de encomendas"
                className="object-cover -z-10 brightness-75 rounded-lg"
              />
              <div className=" w-full h-full p-4">
                <h3 className="text-white text-lg font-semibold">
                  Modelo de Monetização
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-wrap justify-center gap-4 overflow-hidden">
          <div className="relative" style={{ width: '511px', height: '269px' }}>
            <Image
              src="/landing/grid/gestao-de-encomendas.png"
              width="511"
              height="269"
              alt="Gestão de encomendas"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center rounded-lg">
              <h3 className="text-white text-lg font-semibold">
                Gestão de encomendas
              </h3>
            </div>
          </div>
          <div className="relative" style={{ width: '512px', height: '322px' }}>
            <Image
              src="/landing/grid/acompanhamento.png"
              width="512"
              height="322"
              alt="Acompanhamento em Tempo Real"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center rounded-lg">
              <h3 className="text-white text-lg font-semibold">
                Acompanhamento em Tempo Real
              </h3>
            </div>
          </div>
          <div className="relative" style={{ width: '512px', height: '447px' }}>
            <Image
              src="/landing/grid/notebook-service.png"
              width="512"
              height="447"
              alt="Indicação de Prestadores de Serviços"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center rounded-lg">
              <h3 className="text-white text-lg font-semibold">
                Indicação de Prestadores de Serviços
              </h3>
            </div>
          </div>
          <div className="relative" style={{ width: '239px', height: '394px' }}>
            <Image
              src="/landing/grid/seguranca-de-dados.png"
              width="239"
              height="394"
              alt="Segurança de Dados"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center rounded-lg">
              <h3 className="text-white text-lg font-semibold">
                Segurança de Dados
              </h3>
            </div>
          </div>
          <div className="relative" style={{ width: '239px', height: '394px' }}>
            <Image
              src="/landing/grid/search-service.png"
              width="239"
              height="394"
              alt="Oferta e Busca de Serviços"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center rounded-lg">
              <h3 className="text-white text-lg font-semibold">
                Oferta e Busca de Serviços
              </h3>
            </div>
          </div>
          <div className="relative" style={{ width: '512px', height: '341px' }}>
            <Image
              src="/landing/grid/integracao-apps.png"
              width="512"
              height="341"
              alt="Integração com Apps de Delivery"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center rounded-lg">
              <h3 className="text-white text-lg font-semibold">
                Integração com Apps de Delivery
              </h3>
            </div>
          </div>
          <div className="relative" style={{ width: '512px', height: '216px' }}>
            <Image
              src="/landing/grid/notebook-monetization.png"
              width="512"
              height="216"
              alt="Modelo de Monetização"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center rounded-lg">
              <h3 className="text-white text-lg font-semibold">
                Modelo de Monetização
              </h3>
            </div>
          </div>
        </div> */}
      </section>

      <section
        className="flex flex-col lg:flex-row items-start justify-center mt-28 px-4 max-w-screen-lg mx-auto"
        id="perguntas"
      >
        {/* Título e subtítulo alinhados à esquerda */}
        <div className="mb-8 lg:mb-0 lg:mr-8 lg:w-[30%]">
          <h2 className="text-xl font-bold text-black">Perguntas Frequentes</h2>
          <p className="text-2xl md:text-3xl font-semibold text-black mt-4">
            Ainda tem alguma dúvida?
          </p>
        </div>
        {/* Perguntas Frequentes */}
        <div className="space-y-4 w-full lg:w-[600px]">
          <Accordion type="single" collapsible>
            <AccordionItem
              value="item-1"
              className="border-b-0 border border-gray-300 rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg">
                O que é o Condelivery?
              </AccordionTrigger>
              <AccordionContent>
                O Condelivery é uma plataforma que melhora a logística de entregas em condomínios, integrando aplicativos de delivery como iFood, Rappi e Uber. Além disso, permite que moradores ofertem e busquem serviços, criando oportunidades de emprego local e facilitando a indicação de prestadores de serviços. A segurança dos dados é garantida conforme a LGPD.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem
              value="item-1"
              className="border-b-0 border border-gray-300 rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg">
                Como funciona o Condelivery?
              </AccordionTrigger>
              <AccordionContent>
                Disponibilizamos um ou mais colaboradores, que ficam à disposição para receber sua encomenda e levá-la até seu apartamento.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem
              value="item-1"
              className="border-b-0 border border-gray-300 rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg">
                Quanto custa o serviço?
              </AccordionTrigger>
              <AccordionContent>
                O Condelivery funciona com uma taxa fixa adicionada ao valor do condomínio, que oferece aos moradores acesso ilimitado aos serviços da plataforma. Cada morador contribui com R$ 20,00 mensais, dos quais R$ 10,00 são destinados ao colaborador responsável pelas entregas e R$ 10,00 são a taxa do aplicativo.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem
              value="item-1"
              className="border-b-0 border border-gray-300 rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg">
                Como garantir a privacidade dos usuários?
              </AccordionTrigger>
              <AccordionContent>
                Para proteger a privacidade dos usuários, o Condelivery adota práticas rigorosas de segurança de dados, em conformidade com a LGPD. Isso inclui a coleta mínima de dados, o armazenamento seguro de informações e o controle restrito de acesso, garantindo que apenas pessoas autorizadas tenham acesso aos dados dos usuários.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section
        className="bg-[#F46D1F] flex justify-center items-center h-[320px] mt-28"
        id="contato"
      >
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
              O Condelivery é um sistema inovador de entregas exclusivo para
              condomínios, integrando-se a aplicativos conhecidos como iFood,
              Rappi, Uber. Seu objetivo é simplificar o recebimento de
              mercadorias pelos moradores, proporcionando comodidade e
              contribuindo para a agenda de empregos. A plataforma oferece
              benefícios como acompanhamento de entregas, suporte dedicado e
              integração eficiente com os aplicativos de terceiros. Além disso,
              as taxas são inclusas no valor do condomínio, garantindo uma
              experiência conveniente e segura.
            </p>
          </div>
          <div className="max-w-sm w-full mt-8 md:mt-0">
            <h3 className="text-xl font-bold mb-4">CONTATE-NOS</h3>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full p-2 border border-gray-600 bg-transparent rounded text-white"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full p-2 border border-gray-600 bg-transparent rounded text-white"
                />
              </div>
              <div className="flex items-center mb-4">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms" className="text-sm">
                  Accept Terms
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black font-bold py-2 rounded-md"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
