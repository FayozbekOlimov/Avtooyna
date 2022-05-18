import * as React from "react";
// import { experimentalStyled as styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// // import {  } from "@mui/material";
import { Grid, Stack } from "@mui/material";
import Text from "../../../components/Text";
import Title from "../../../components/Title";
import Card from "../../Main/Card";
import { cardData } from "./contestsData";

export default function Contests() {
  return (
    <>
      <Stack direction="column">
        <Title>Tanlovlar</Title>
        <Grid container spacing={2}>
          {cardData.map((data, id) => (
            <Grid item key={data + id} xs={12} sm={6} lg={4}>
              <Card {...data} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </>
  );
}
