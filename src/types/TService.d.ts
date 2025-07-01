interface ServiceItem {
  title: string; // Add this line
  align: "left" | "right";
  items: string[];
  image: string;
  imageTitle: string;
  verifyLogo: string;
}

export type TService = {
  title: string;
  data: ServiceItem[];
};
