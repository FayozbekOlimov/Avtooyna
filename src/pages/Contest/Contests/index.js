import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Stack } from "@mui/material";
import { Grid } from "@mui/material";
import Text from "../../../components/Text";
import Title from "../../../components/Title";
import Card from "../../Main/Card";
import { cardData } from "./contestsData";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Contests() {
  return (
    <>
      <Stack className="aboutOrg" direction="row">
        <div className="container">
          <Grid item xs={10}>
            <div className="contest_wrapper">
              <div className="contest_body">
                <div className="contest_title">
                  <Title>Tanlovlar</Title>
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    {cardData.map((data, id) => (
                      <Grid item xs={2} sm={4} md={4} key={data + id}>
                        <Card {...data} />
                      </Grid>
                    ))}
                  </Grid>
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </Stack>
    </>
  );
}
