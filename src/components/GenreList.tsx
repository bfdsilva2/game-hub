import { HStack, List, ListItem, Image, Spinner, Link } from "@chakra-ui/react";
import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <>
      <List.Root>
        {data.map((g) => (
          <ListItem key={g.id} paddingY="5px" display="inline-flex">
            <HStack></HStack>
            <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(g.image_background)} />
            <Link onClick={() => onSelectGenre(g)} paddingX={3} fontSize="lg" fontWeight={selectedGenre?.id === g.id ? "bold" : "normal"}>
              {g.name}
            </Link>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
