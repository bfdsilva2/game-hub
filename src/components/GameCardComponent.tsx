import { Box } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardComponent = ({ children }: Props) => {
  return (
    <Box width="300px" borderRadius="10px" margin="5px" overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardComponent;
