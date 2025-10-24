import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading && <Text>Loading...</Text>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
