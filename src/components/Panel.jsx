const Panel = ({ active, setActive, image }) => {
  const activePanel = `basis-3/4`;
  const inactivePanel = `basis-1/4`;
  let panelStyle = image.id === active ? activePanel : inactivePanel;

  const activeMid = `text-7xl md:text-9xl`;
  const inactiveMid = `text-2xl md:text-6xl`;
  let midStyle = image.id === active ? activeMid : inactiveMid;

  const activeTopBot = `opacity-100 translate-y-0 text-4xl`;
  const inactiveTopBot = `opacity-0 text-[1px]`;
  let topBotStyle = image.id === active ? activeTopBot : inactiveTopBot;

  const handleClick = () => {
    if (image.id === active) return setActive(null);
    setActive(image.id);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${image.link})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className={`relative w-full min-h-fullScreenMinHeight ${panelStyle}  transition-all duration-500 ease-in-out  text-center font font-amatic font-bold flex flex-col justify-between overflow-hidden curs`}
      onClick={handleClick}
    >
      <p
        className={`z-10 transition duration-500 p-8 -translate-y-20 ${topBotStyle}`}
      >
        {image.phrase.one}
      </p>
      <p className={`z-10 transition-all duration-500 p-8 ${midStyle}`}>
        {image.phrase.two}
      </p>
      <p
        className={`z-10 transition duration-500 p-8 translate-y-20 ${topBotStyle}`}
      >
        {image.phrase.three}
      </p>
      <div className={`absolute bg-black/25 w-full h-full`}></div>
    </div>
  );
};
export default Panel;
