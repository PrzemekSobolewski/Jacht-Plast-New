const getBasePixels = (point?: string) => {
  switch (point) {
    case "xs":
      return 320;
    case "sm": 
      return 640;
    case "md":
      return 768;
    case "lg":
      return 1024;
    case "xl":
      return 1280;
    case "2xl":
      return 1536;
    // Legacy support
    case "reallySmallMobile":
      return 320;
    case "smallMobile":
      return 480;
    case "mobile":
      return 640;
    case "tablet":
      return 768;
    case "bigTablet":
      return 1024;
    case "medium":
      return 1280;
    case "smallDesktop":
      return 1440;
    case "desktop":
      return 1920;
    default:
      return 1920;
  }
};
const getScreenFromMin = (point: string) => `${getBasePixels(point)}px`;
const getScreenToMax = (point: string) => `${getBasePixels(point) - 1}px`;

export const screenSizeFrom = (point: string) => {
  return `@media screen and (min-width: ${getScreenFromMin(point)})`;
};

export const screenSizeTo = (point: string) => {
  return `@media screen and (max-width: ${getScreenToMax(point)})`;
};

export const screenSizeBetween = (pointMin: string, pointMax: string) => {
  return `@media screen and (min-width: ${getScreenFromMin(
    pointMin
  )}) and (max-width: ${getScreenToMax(pointMax)})`;
};
