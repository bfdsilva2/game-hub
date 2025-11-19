import { Text } from "@chakra-ui/react";
import useGenres from "@/hooks/useGenres";
import React from "react";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {genres.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
