import Gallery from './components/Gallery';
import { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [active, setActive] = useState(null);

  return (
    <div className='bg-black text-white min-h-screen'>
      <motion.header
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
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
      </motion.header>
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
