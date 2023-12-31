import { Box, Typography } from "@mui/material";
import { CodeSection, ExternalLink } from "shared";

/**
 * You can review Higher Order Component Pattern example in the following repository and App
 * https://phoenix-ecommerce.netlify.app/modern-collection
 * https://github.com/alaa-m1/ecommerce-website-react-reactquery-redux/tree/master/src/shared/HOC
 */

export const HOC = () => {
  return (
    <Box>
      <Typography variant="h2" mb={1} sx={{ textAlign: "center" }}>
        Higher Order Component
      </Typography>
      <Typography color="primary.light" className="code-info">
        {`* HOC is a way to reuse the same logic in multiple components.
         * HOC is a component which we can take another component. 
         * HOC contains certain logic (methods ) that we want to apply to the component that we pass as a parameter.
         * HOC returns a wrapped component with all tha additional logic.
         * HOC typically starts with the word with – This is not a required but this is just as a standard-`}
      </Typography>
      <CodeSection>
          {`import { Box, Typography } from "@mui/material";
            import { useCallback, useState } from "react";
            import { useTranslation } from "react-i18next";
            import { LoadingSpinner } from "shared/components";
            import _ from "lodash";
            import styled from "styled-components";

            export function withLoadingIndicator(Element: any, loadingMessage: string) {
            return (props: any) => {
                const [loading, setLoading] = useState(true);
                const { t } = useTranslation();
                const handleLoadingIsComplete = useCallback(() => {
                setLoading(false);
                }, []);

                return (
                <MainContainer>
                    {loading && (
                    <SpinnerContainer>
                        {_.isEmpty(loadingMessage) ? (
                        <LoadingSpinner size={5} />
                        ) : (
                        <Typography
                            sx={{
                            color: "primary.light",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            }}
                        >
                            {t(loadingMessage)}
                        </Typography>
                        )}
                    </SpinnerContainer>
                    )}
                    <Element
                    {...props}
                    onLoadingIsComplete={handleLoadingIsComplete}
                    isLoading={loading}
                    />
                </MainContainer>
                );
            };
            }

            const MainContainer = styled(Box)\`
            position: relative;
            display: flex;
            height: 100%;
            width: 100;
            \`;

            const SpinnerContainer = styled(Box)\`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            \`;`}
      </CodeSection>
      <Typography color="primary.light">
        Then we can use our HOC as the following:
      </Typography>
      <CodeSection>
          {`const CardImage = ({
            imagePath,
            altInfo,
            onLoadingIsComplete,
            }: {
            imagePath: string;
            altInfo: string;
            onLoadingIsComplete?: () => void;
            }) => {
            return (
                <img
                src={imagePath}
                alt={altInfo}
                loading="lazy"
                onLoad={() => onLoadingIsComplete?.()}
                />
            );
            };
            const CardImagewithLoadingIndicator = withLoadingIndicator(CardImage, "");`}
      </CodeSection>
      <Typography color="primary.light">
        To review the full example, you can check the following repository and
        App
        <br />
      </Typography>
      <ExternalLink url="https://phoenix-ecommerce.netlify.app/modern-collection" />
      <ExternalLink url="https://github.com/alaa-m1/ecommerce-website-react-reactquery-redux/tree/master/src/shared/HOC" />
    </Box>
  );
};
