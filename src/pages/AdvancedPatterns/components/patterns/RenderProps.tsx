import { Box, Typography } from "@mui/material";
import { CodeSection, ExternalLink } from "shared";

/**
 * You can review Render Props Pattern examples in PatternContainer.tsx and PatternPicker.tsx
 */

export const RenderProps: React.FC = () => {
  return (
    <Box>
      <Typography variant="h2" mb={1} sx={{ textAlign: "center" }}>
        Render Props
      </Typography>
      <Typography color="primary.light" className="code-info">
      {`* Render Props pattern allows components to share functionality by using a common interface.
        * We build a component with a render prop. Which value is a function that returns a JSX element. <PatternContainer/>`}
      </Typography>
      <CodeSection>
        {`export const PatternPicker = () => {
              const patternPicker = usePatternPicker();
              
              return <PatternContainer render={(p) => patternPicker(p)}></PatternContainer>;
            };`}
      </CodeSection>
      <Typography color="primary.light">
      * This component simply calls the render prop, instead of implementing its
        own rendering logic.{" "}
      </Typography>
      <CodeSection>
        {`export const PatternContainer = (props: PatternContainerProps) => {
            const [searchParams] = useSearchParams();

            const currentPattern = useMemo(
                () => searchParams.get("p") ?? "",[searchParams]);
                
            return (
                <Box sx={{ margin: "10px" }}>
                <Typography color="primary.light" mb={1}>
                    You can review each React patterns in details in the following path:
                    <br />
                    src/AdvancedPatterns/components/patterns
                </Typography>
                <ColoredDevider />
                {props.render(currentPattern)}
                </Box>
                );
            };

            type PatternContainerProps = {
            render: (currentPattern: string) => React.ReactNode;
            };`}
      </CodeSection>
      <Typography color="primary.light">
        To review the full example, you can check the following repository
        <br />
      </Typography>
      <ExternalLink url="https://github.com/alaa-m1/react-advanced-patterns/blob/master/src/pages/AdvancedPatterns/components/PatternContainer.tsx" />
    </Box>
  );
};
