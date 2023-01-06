import Gallery from './components/Gallery';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState(null);

  return (
    <div className='bg-black text-white min-h-screen relative'>
      <header
        className={`fixed p-2 bg-transparent w-full text-center bg-gradient-to-r from-yellow-600 to-pink-500 flex flex-col items-center`}
      >
        <h1 className={`text-3xl font-bold`}>JS Image Gallery</h1>
        <div className={`bg-black/40 rounded-md m-1 `}>
          created by{' '}
          <a
            className={`text-red-400 font-bold`}
            href='https://0xbn.github.com/'
          >
            Brian
          </a>
        </div>
      </header>
      <hr className={`border-transparent`} />
      <main>
        <div className={`pt-20 overflow-hidden`}>
          <Gallery active={active} setActive={setActive} />
        </div>
      </main>
    </div>
  );
}

export default App;
