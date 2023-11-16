import { Box, Typography } from "@mui/material";
import { CodeSection, ExternalLink } from "shared";

/**
 * You can review Higher Order Component Pattern example in the following repository and App
 * https://phoenix-ecommerce.netlify.app/modern-collection
 * https://github.com/alaa-m1/ecommerce-website-react-reactquery-redux/tree/master/src/shared/HOC
 */

export const LazyLoading = () => {
  return (
    <Box>
      <Typography variant="h2" mb={1} sx={{ textAlign: "center" }}>
      Lazy Loading
      </Typography>
      <Typography color="primary.light" className="code-info">
        {`* lazy Loading Pattern allows to load parts of the application on-demand. So, the resource initialization or loading is delayed until they are needed. Which will help in improving performance and reducing initial loading time.`}
      </Typography>
      <CodeSection>
        {`const LazyComponent = React.lazy(() => import("./LazyLoadedComponent"));

        const Home = () => {
          return (
            <React.Suspense fallback={<LoadingSpinner />}>
              <LazyComponent />
            </React.Suspense>
          );
        };
        `}
      </CodeSection>
    </Box>
  );
};
