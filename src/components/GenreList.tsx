import { List, ListItem, Image, Spinner, Link, Heading } from "@chakra-ui/react";
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
      <Heading textAlign="left" marginBottom={3}>
        Genres
      </Heading>
      <List.Root>
        {data.map((g) => (
          <ListItem key={g.id} paddingY="5px" display="inline-flex">
            <Image boxSize="32px" borderRadius={8} objectFit="cover" src={getCroppedImageUrl(g.image_background)} />
            <Link
              onClick={() => onSelectGenre(g)}
              paddingX={3}
              fontSize="lg"
              textAlign="left"
              fontWeight={selectedGenre?.id === g.id ? "bold" : "normal"}
            >
              {g.name}
            </Link>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
