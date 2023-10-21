import { Box, Tooltip } from "@mui/material";
import React from "react";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

export const CodeSection = ({
  children = "",
}: {
  children: React.ReactNode;
}) => {
  return (
    <Box className="code-container" sx={{ color: "primary.light" }}>
      <Box className="clipboard-btn">
        <CopyToClipboard
          text={children as string}
          onCopy={() => toast.info("The code is coppied to the clipboard")}
        >
          <Tooltip title="Copy to clipboard">
            <CopyAllIcon />
          </Tooltip>
        </CopyToClipboard>
      </Box>
      <code>{children}</code>
    </Box>
  );
};
