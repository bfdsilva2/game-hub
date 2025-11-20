import { Box, Group, HStack, Input, InputElement, Stack } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <Group width="100%">
      <BsSearch />
      <Input borderRadius={20} placeholder="Search games..." variant="outline" />
    </Group>
  );
};

export default SearchInput;
