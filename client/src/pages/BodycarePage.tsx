import {
  CategoryProductPage,
  categoryPageConfigs,
} from "./CategoryProductPage";

export const BodycarePage = (): JSX.Element => {
  return <CategoryProductPage config={categoryPageConfigs.bodycare} />;
};