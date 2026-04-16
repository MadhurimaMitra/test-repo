import {
  CategoryProductPage,
  categoryPageConfigs,
} from "./CategoryProductPage";

export const HaircarePage = (): JSX.Element => {
  return <CategoryProductPage config={categoryPageConfigs.haircare} />;
};