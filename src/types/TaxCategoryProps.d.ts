export type TTaxCategory = {
  id: number;
  icon: string;
  title: string;
  questions: string[];
  bgColor: string;
};

export type TTaxCategoryProps = {
  taxCategories: TTaxCategory[];
};
