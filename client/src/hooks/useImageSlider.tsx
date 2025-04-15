import { useEffect, useState } from "react";

type UseImageSliderProps = {
  totalImages: number;
  interval?: number;
};
const useImageSlider = ({
  totalImages,
  interval = 2000,
}: UseImageSliderProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [totalImages, interval]);

  return { currentImageIndex };
};

export default useImageSlider;
