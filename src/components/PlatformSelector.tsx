import usePlatforms, { type Platform } from "@/hooks/usePlatforms";
import { Button, Menu, Portal, Spinner } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error, isLoading } = usePlatforms();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" display="Flex">
          {selectedPlatform ? selectedPlatform.name : "Open"} <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((p) => (
              <Menu.Item key={p.id} value={p.name} onClick={() => onSelectPlatform(p)}>
                {p.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
