import React, { useEffect, useState, useCallback } from "react";
import { Grid, Stack } from "@mui/material";
import Title from "../../../components/Title";
import Loading from "../../../components/Loading";
import PaginationRounded from "../../../components/PaginationRounded";
import Card from "../../Main/Card";
import { homeContestsUrl } from "../../../api/apiUrls"
import baseAPI from "../../../api/baseAPI";
import { useT } from "../../../custom/hooks/useT";

export default function Contests() {
  const { t, lang } = useT();
  const [contests, setContests] = useState({});
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getContests = useCallback(() => {
    setLoading(true);
    baseAPI.fetchWithPagination({ url: homeContestsUrl, page })
      .then((res) => {
        if (res.data.success) {
          setContests(res.data.data);
          setLoading(false);
        }
      })
      .catch((e) => console.log("e", e))
  }, [page])

  useEffect(() => {
    getContests()
  }, [getContests])

  const handleChange = (e, value) => {
    setPage(value);
  }

  const { items = [], _meta = {} } = contests;

  return (
    <Stack direction="column">
      {
        loading ? (<Loading />) : (
          <>
            <Title>{t(`contests.${lang}`)}</Title>
            <Grid container spacing={2}>
              {items.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} lg={4}>
                  <Card content={false} toUrl="contests" {...item} />
                </Grid>
              ))}

              {
                _meta.pageCount > 1 && (
                  <PaginationRounded handleChange={handleChange} count={_meta.pageCount} page={page} />
                )
              }

            </Grid>
          </>
        )
      }
    </Stack>
  );
}
