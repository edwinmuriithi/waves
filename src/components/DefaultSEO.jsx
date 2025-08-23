import useSEO from "../hooks/useSEO";

const DefaultSEO = ({
  title = "WAVES | Marine Conservation & Advocacy",
  description = "WAVES is dedicated to protecting marine ecosystems, advocating for policy change, empowering communities, and conserving ocean biodiversity.",
  keywords = "WAVES, marine conservation, ocean protection, marine biodiversity, Kenya, advocacy",
  image = "https://waves.lapa.africa/waves-og.png",
  url = "https://waves.lapa.africa/"
}) => {
  useSEO({ title, description, keywords, image, url });
  return null; 
};

export default DefaultSEO;
