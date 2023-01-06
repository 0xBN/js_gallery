import Panel from './Panel';
import { images } from '../data/galleryData';

const Gallery = ({ active, setActive }) => {
  const galleryData = images.map((image) => (
    <Panel active={active} setActive={setActive} key={image.id} image={image} />
  ));

  return <div className={`flex`}>{galleryData}</div>;
};
export default Gallery;
