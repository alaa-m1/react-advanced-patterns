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
        To review any patterns, select a pattern from the left Sidebar menu.
        <br />
        You will find a real implementation for every pattern, not only a simple example without a real purpose
      </Typography>
      <ColoredDevider />
      {props.render(currentPattern)}
    </Box>
  );
};

type PatternContainerProps = {
  render: (currentPattern: string) => React.ReactNode;
};
