import {
  CategoryProductPage,
  categoryPageConfigs,
} from "./CategoryProductPage";

export const GiftSetsPage = (): JSX.Element => {
  return <CategoryProductPage config={categoryPageConfigs.giftsets} />;
};