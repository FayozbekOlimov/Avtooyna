import React, { useEffect, useState, useCallback } from "react";
import { Grid, Stack } from "@mui/material";
import Title from "../../../components/Title";
import Loading from "../../../components/Loading";
import Card from "../../Main/Card";
import { contestsUrl } from "../../../api/apiUrls"
import baseAPI from "../../../api/baseAPI";

export default function Contests() {

  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(false);

  const getContests = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll(contestsUrl)
      .then((res) => {
        // if (res.data.success) {
        setContests(res.data.choise);
        setLoading(false);
        // }
      })
      .catch((e) => console.log("e", e))
  }, [])

  useEffect(() => {
    getContests()
  }, [getContests])

  return (
    <Stack direction="column">
      <Title>Tanlovlar</Title>
      {
        loading ? (<Loading />) : (
          <Grid container spacing={2}>
            {contests.map((contest) => (
              <Grid item key={contest.id} xs={12} sm={6} lg={4}>
                <Card content={false} toUrl="contests" {...contest} />
              </Grid>
            ))}
          </Grid>
        )
      }
    </Stack>
  );
}
