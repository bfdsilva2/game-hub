import { Box } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius="10px" margin="5px" overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
