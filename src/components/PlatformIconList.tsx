import { HStack, Icon } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";
import type { Platform } from "@/hooks/usePlatforms";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <HStack>
      {platforms.map((platform) => {
        const icon = iconMap[platform.slug];
        if (!icon) return null;
        return (
          <HStack key={platform.id} marginY={1}>
            <Tooltip showArrow content={platform.name}>
              <Icon as={icon} color="gray.500" />
            </Tooltip>
          </HStack>
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
