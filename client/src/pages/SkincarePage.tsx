import {
  CategoryProductPage,
  categoryPageConfigs,
} from "./CategoryProductPage";

export const SkincarePage = (): JSX.Element => {
  return <CategoryProductPage config={categoryPageConfigs.skincare} />;
};