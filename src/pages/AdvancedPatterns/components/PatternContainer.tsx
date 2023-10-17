import { Box, Typography } from "@mui/material";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ColoredDevider } from "shared";

export const PatternContainer = (props: PatternContainerProps) => {
  const [searchParams] = useSearchParams();
  const currentPattern = useMemo(
    () => searchParams.get("p") ?? "",
    [searchParams]
  );
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
};
