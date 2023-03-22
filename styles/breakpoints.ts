const getBasePixels = (point?: string) => {
  switch (point) {
    case "reallySmallMobile":
      return 350;
    case "smallMobile":
      return 380;
    case "mobile":
      return 641;
    case "tablet":
      return 828;
    case "bigTablet":
      return 1025;
    case "medium":
      return 1052;
    case "smallDesktop":
      return 1200;
    case "desktop":
      return 1300;
    default:
      return 1300;
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
