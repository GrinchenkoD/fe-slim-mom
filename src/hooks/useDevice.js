import { useMediaQuery } from 'react-responsive';

export const useDevice = () => {
  const isMobileDevice = useMediaQuery({ maxWidth: 767 });
  const isTabletDevice = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesctopDevice = useMediaQuery({ minWidth: 1280 });
  return { isMobileDevice, isDesctopDevice, isTabletDevice };
};
