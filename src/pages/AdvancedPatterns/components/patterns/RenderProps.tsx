import { Box, Typography } from "@mui/material";

export const RenderProps: React.FC = () => {
  return (
    <>
      <Typography variant="h2" mb={1} sx={{ textAlign: "center" }}>
        RENDER PROPS
      </Typography>
      <Typography color="primary.light">
       {`We build a component with a render prop. Which value is a function that returns a JSX element. <PatternContainer/>`}
      </Typography>
      <Box className="code-container" sx={{ color: "primary.light" }}>
        <code>
          {`export const PatternPicker = () => {
              const patternPicker = usePatternPicker();
              
              return <PatternContainer render={(p) => patternPicker(p)}></PatternContainer>;
            };`}
        </code>
      </Box>
      <Typography color="primary.light">
        This component simply calls the render prop, instead of implementing its
        own rendering logic.{" "}
      </Typography>
      <Box className="code-container" sx={{ color: "primary.light" }}>
        <code>
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
        </code>
      </Box>
    </>
  );
};
