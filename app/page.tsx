import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex bg-[#DCDBDA] h-screen">
      <div className="bg-[url('/landing/banner1.png')] bg-cover h-screen py-10 px-40 flex justify-center">
            <div className="flex justify-between items-center h-[4.75rem] px-[1.875rem] rounded-[20px] bg-[#E9EBF8] gap-6">
                <a href="#" className="w-[150px] h-auto ">
                  <Image src="/landing/logo-condelivery.png" width='150' height='70' alt=""
                  />
                </a>
                <nav>
                    <ul className="flex list-none gap-8" >
                        <li><a className="no-underline text-base font-bold text-black" href="#sobre">Sobre</a></li>
                        <li><a className="no-underline text-base font-bold text-black" href="#vantagens">Vantagens</a></li>
                        <li><a className="no-underline text-base font-bold text-black" href="#recursos">Recursos</a></li>
                        <li><a className="no-underline text-base font-bold text-black" href="#PerguntasFrequentes">Perguntas Frequentes</a></li>
                        <li><a className="no-underline text-base font-bold text-black" href="#contato">Contato</a></li>
                    </ul>
                </nav>
                <div className="">
                    <a href="#"><button className="w-[110px] h-[42px] text-[17px] text-[#E9EBF8] rounded-[10px] border-none bg-[#F46D1F] cursor-pointer">Download</button></a>
                </div>
            </div>

            <div className="flex flex-col items-center mt-[200px] text-[#E9EBF8]">
                <h1 className="text-[128px] font-extrabold">Condelivery</h1>
                <p className="text-[40px] font-semibold">Suas entregas no condomínio, simplificadas!</p>
                <button className="w-[191.65px] h-[66px] rounded-[10px] border border-[#DCDBDA] bg-transparent mt-[40px] text-[24px] font-bold cursor-pointer">Saiba mais</button>
            </div>
      </div>

    </main>
  );
}

