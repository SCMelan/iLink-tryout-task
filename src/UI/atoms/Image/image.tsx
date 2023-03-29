import { ImageStyle } from "./style";

interface IImage {
  src: string;
  alt: string;
  type?: "person";
}

export const Image: React.FC<IImage> = ({ src, alt, type }) => {
  return <ImageStyle src={src} alt={alt} data-type={type}></ImageStyle>;
};
