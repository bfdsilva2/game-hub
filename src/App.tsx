//import { useState } from "react";
import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

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
            <GridItem area="aside" bg="gold">
              Aside
            </GridItem>
          </Show>
          <GridItem area="main" bg="dodgerblue">
            <GameGrid />
          </GridItem>
        </Grid>
      </div>
    </>
  );
}

export default App;
