import './styles/main.css';
import { MagnifyingGlassPlus } from 'phosphor-react';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="max-w-[1344] mx-auto flex items-center flex-col my-20">
      <img src={logo} />

      <h1 className="text-6xl font-black text-white mt-20">
        Seu{' '}
        <span className="bg-nlw-gradient text-transparent bg-clip-text">
          duo
        </span>{' '}
        está aqui!
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-md overflow-hidden">
          <img src="/game-1.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white">League of Legends</strong>
            <br />
            <span className="text-zinc-300 text-sm mt-1">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-2.png" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white">Dota 2</strong>
            <br />
            <span className="text-zinc-300 text-sm mt-1">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-3.png" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white">CS-GO</strong>
            <br />
            <span className="text-zinc-300 text-sm mt-1">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-4.png" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white">World of Warcraft</strong>
            <br />
            <span className="text-zinc-300 text-sm mt-1">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-5.png" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white">Apex Legends</strong>
            <br />
            <span className="text-zinc-300 text-sm mt-1">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-6.png" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white">Fortnite</strong>
            <br />
            <span className="text-zinc-300 text-sm mt-1">4 anúncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2a2634] px-8 py-6 flex justify-between">
          <div>
            <strong className="text-white text-2xl font-black">
              Não encontrou seu duo?
            </strong>
            <br />
            <span className="text-zinc-400">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button className="text-white rounded py-3 px-4 bg-violet-600 hover:bg-violet-700 flex items-center gap-3">
            <MagnifyingGlassPlus size={24} /> Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
