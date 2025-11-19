import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "released", label: "Release date" },
    { value: "-matacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOder = sortOrders.find((order) => order.value === selectedSortOrder)?.label;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" display="Flex">
          Order by: {currentSortOder ? currentSortOder : "Relevance"} <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((ord) => (
              <Menu.Item onClick={() => onSelectSortOrder(ord.value)} key={ord.value} value={ord.value}>
                {ord.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
