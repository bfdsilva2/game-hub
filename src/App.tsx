//import { useState } from "react";
import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  const showAside = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <div>
        <Grid
          templateAreas={{
            base: `"nav" "main" `,
            lg: `"nav nav" "aside main" `,
          }}
        >
          <GridItem area="nav">
            <NavBar />
          </GridItem>
          <Show when={showAside}>
            <GridItem area="aside">
              <GenreList></GenreList>
            </GridItem>
          </Show>
          <GridItem area="main">
            <GameGrid />
          </GridItem>
        </Grid>
      </div>
    </>
  );
}

export default App;
