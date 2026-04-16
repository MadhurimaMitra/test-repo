import {
  CategoryProductPage,
  categoryPageConfigs,
} from "./CategoryProductPage";

export const GroomingPage = (): JSX.Element => {
  return <CategoryProductPage config={categoryPageConfigs.grooming} />;
};