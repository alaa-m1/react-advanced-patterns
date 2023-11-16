import { Box, Typography } from "@mui/material";
import { CodeSection, ExternalLink } from "shared";

/**
 * You can review Higher Order Component Pattern example in the following repository and App
 * https://phoenix-ecommerce.netlify.app/modern-collection
 * https://github.com/alaa-m1/ecommerce-website-react-reactquery-redux/tree/master/src/shared/HOC
 */

export const ContainerPresentational = () => {
  return (
    <Box>
      <Typography variant="h2" mb={1} sx={{ textAlign: "center" }}>
      Container / Presentational
      </Typography>
      <Typography color="primary.light" className="code-info">
        {`Container Component :
        * Container components tend to be stateful components.
        * Container components handle states and data fetching.
        * After receiving the data, the container component displays its corresponding subcomponent by passing that data to the presentation components that contain it.
        * Since container components don't display anything themselves, they usually don't have any style.`}
      </Typography>
      <CodeSection>
        {`import { useCallback, useEffect, useMemo } from "react";
          import { useSearchParams } from "react-router-dom";
          import { useAppSelector } from "utils/redux/hooks";
          import {
            selectMappedProducts,
            selectProductsStatus,
          } from "store/products/productsSelector";
          import {
            setProducts,
          } from "store/products/productsActions";
          import { useDispatch } from "react-redux";
          import { useSortOptions } from "shared";
          import {
            FilterPanel,
            ShopNav,
          } from "shared/components";
          import { useProducts } from "./hooks";
          import _ from "lodash";
          import { Product } from "types";
          import { CategoriesSection } from "./components";

          const ModernCollectionDashboard = () => {
            const [searchParams] = useSearchParams();
            const activeCategoryLabel = searchParams.get("category");
            const searchBy = searchParams.get("search");
            const sortBy = searchParams.get("sort") ?? "default";
            const dispatch = useDispatch();

            /// Using react-query to manage request state with caching (The other good solution to use with Redux is RTK Query)
            const { data, isLoading } = useProducts(100);
            useEffect(() => {
              if (!_.isUndefined(data)) dispatch(setProducts(data));
            }, [data]);

            /// Using Redux to manage request status (Comment the last two commands and then uncomment the next two commands)
            // useEffect(() => {
            //   dispatch(fetchProductsAsync() as any);
            // }, [dispatch]);
            // const isLoading=false;

            const onlineCategories = useAppSelector(selectMappedProducts);
            const status = useAppSelector(selectProductsStatus);

            const filteredCategories = useMemo(
              () =>
                onlineCategories.filter((category) =>
                  _.isNull(searchBy)
                    ? category
                    : category.title.toLowerCase().includes(searchBy.toLowerCase())
                ),
              [onlineCategories, searchBy]
            );

            const comparisonFn = useCallback(
              (a: Product, b: Product) => {
                if (sortBy === "asc") return a.price - b.price;
                return b.price - a.price;
              },
              [sortBy]
            );

            const SortedCategories =
              sortBy === "default"
                ? filteredCategories
                : _.cloneDeep(filteredCategories).sort(comparisonFn);

            const loading = useMemo(
              () => isLoading || status.loading,
              [isLoading, status.loading]
            );

            const mainCategoriesLabels = useMemo(
              () =>
                filteredCategories.reduce<Array<string>>((res, product) => {
                  if (!res.includes(product.categoryLabel)) {
                    res.push(product.categoryLabel);
                  }
                  return res;
                }, []),
              [filteredCategories]
            );

            const activeCategoryItems = useMemo(
              () =>
                SortedCategories.filter(
                  (cat) => cat.categoryLabel === activeCategoryLabel
                ),
              [SortedCategories, activeCategoryLabel]
            );
            const sortOptions = useSortOptions();
            return (
              <>
                <ShopNav
                  mainCategoriesLabels={mainCategoriesLabels}
                  activeCategoryLabel={activeCategoryLabel ?? ""}
                />

                <FilterPanel sortOptions={sortOptions} />

                <CategoriesSection
                  activeCategoryLabel={activeCategoryLabel}
                  activeCategoryItems={activeCategoryItems}
                  loading={loading}
                  mainCategoriesLabels={mainCategoriesLabels}
                  SortedCategories={SortedCategories}
                />
              </>
            );
          };

          export default ModernCollectionDashboard;

            `}
      </CodeSection>
      <br />
      <Typography color="primary.light" className="code-info">
        {`Presentational  Component
        * Presentational components tend to be stateless pure functions. However, 
        * Presentational component receives its data through props.
        * Its primary function is to display the data it receives the way we want by adding styles. Also, without modifying that data.
        * Using pure components helps increase performance because it reduces the number of application rerendering.`}
      </Typography>
      <CodeSection>
        {`import { Box, Typography } from "@mui/material";
          import { useRef } from "react";
          import { Product } from "types";
          import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
          import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
          import { ShopCategoryCard } from "shared/components/ShopCategoryCard";

          type ShopSubCategoryListProps = {
            subCategories: Array<Product>;
            currentCategoryLabel: string;
          };
          export const ShopSubCategoryList = ({
            subCategories,
            currentCategoryLabel,
          }: ShopSubCategoryListProps) => {
            const catRef = useRef<HTMLDivElement | null>(null);
            const handleMoveRight = () => {
              if (catRef.current) {
                catRef.current.scrollBy({
                  behavior: "smooth",
                  left: +400,
                  top: 0,
                });
              }
            };
            const handleMoveLeft = () => {
              if (catRef.current) {
                catRef.current.scrollBy({
                  behavior: "smooth",
                  left: -400,
                  top: 0,
                });
              }
            };
            return (
              <Box className="shop-sub-category-section" sx={{ color: "secondary.dark" }}>
                <Box className="shop-sub-category-section-title">
                  <Typography color="primary.light">
                    {\`\${currentCategoryLabel} \${
                      subCategories.length > 0 ? \`(\${subCategories.length})\` : ""
                    }\`}
                  </Typography>
                </Box>
                <Box ref={catRef} className="shop-sub-category-section-cards">
                  {subCategories.map((item, index) => (
                    <ShopCategoryCard key={index} cardInfo={item}></ShopCategoryCard>
                  ))}
                </Box>
                <Box
                  className="right-button"
                  sx={{ "& path": { color: "secondary.main" } }}
                >
                  <ArrowForwardIosIcon onClick={() => handleMoveRight()} />
                </Box>
                <Box
                  className="left-button"
                  sx={{ "& path": { color: "secondary.main" } }}
                >
                  <ArrowBackIosNewIcon onClick={() => handleMoveLeft()} />
                </Box>
              </Box>
            );
          };

            `}
      </CodeSection>

      <Typography color="primary.light">
        Using this pattern makes it easy to enforce the separation of concerns
      </Typography>
        <br />
      <Typography color="primary.light">
        To review the full example, you can check the following repository
      </Typography>
      <ExternalLink url="https://github.com/alaa-m1/ecommerce-webapp-react-redux/blob/master/src/pages/ModernCollection/ModernCollectionDashboard.tsx" />
    </Box>
  );
};
