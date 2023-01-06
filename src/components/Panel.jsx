import { motion } from 'framer-motion';

const Panel = ({ active, setActive, image }) => {
  const activePanel = `basis-3/4`;
  const inactivePanel = `basis-1/4`;
  let panelStyle = image.id === active ? activePanel : inactivePanel;

  const activeMid = `text-7xl md:text-9xl`;
  const inactiveMid = `text-2xl md:text-6xl`;
  let midStyle = image.id === active ? activeMid : inactiveMid;

  const activeTopBot = `opacity-100 translate-y-0 text-4xl`;
  const inactiveTop = `opacity-0 text-[1px] -translate-y-20`;
  const inactiveBot = `opacity-0 text-[1px] translate-y-20`;

  let topStyle = image.id === active ? activeTopBot : inactiveTop;
  let botStyle = image.id === active ? activeTopBot : inactiveBot;

  const handleClick = () => {
    if (image.id === active) return setActive(null);
    setActive(image.id);
  };

  return (
    <motion.div
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 150 },
        visible: { opacity: 1, y: 0 },
      }}
      style={{
        backgroundImage: `url(${image.link})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className={`relative w-full min-h-fullScreenMinHeight ${panelStyle}  transition-all duration-500 ease-in-out  text-center font font-amatic font-bold flex flex-col justify-between overflow-hidden curs`}
      onClick={handleClick}
    >
      <p className={`z-10 transition-all duration-500 p-8  ${topStyle}`}>
        {image.phrase.one}
      </p>
      <p className={`z-10 transition-all-all duration-500 p-8 ${midStyle}`}>
        {image.phrase.two}
      </p>
      <p className={`z-10 transition-all duration-500 p-8  ${botStyle}`}>
        {image.phrase.three}
      </p>
      <div className={`absolute bg-black/25 w-full h-full`} />
    </motion.div>
  );
};
export default Panel;
