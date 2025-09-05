export interface YachtModelData {
  name: string;
  folder: string;
  description: string;
  specifications: {
    length?: string;
    beam?: string;
    draft?: string;
    displacement?: string;
    engine?: string;
    fuel?: string;
    water?: string;
    berths?: string;
  };
  features: string[];
  images: string[];
  imageNames?: string[];
}
