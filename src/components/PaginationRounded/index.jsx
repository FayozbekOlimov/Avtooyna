import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./style.scss";



export default function PaginationRounded(props) {
  const { count, handleChange, page } = props;
  return (
    <div className={"pagination_wrapper"}>
      <Stack spacing={2}>
        <Pagination onChange={handleChange} page={page} count={count} variant="outlined" shape="rounded" />
      </Stack>
    </div>
  );
}
