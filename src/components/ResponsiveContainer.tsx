import { Box, type BoxProps } from "@mui/material";
import type { PropsWithChildren } from "react";

export const ResponsiveContainer = ({ children, className, ...props }: PropsWithChildren<BoxProps>) => {
  return (
    <Box {...props} className={`relative w-full px-4 lg:w-10/12 max-w-[1080px] ${className || ""}`}>
      {children}
    </Box>
  );
};
