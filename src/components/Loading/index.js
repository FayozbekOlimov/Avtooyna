import { Spin } from 'antd'
import React from 'react'

const Loading = ({ height = "500px" }) => {
  return (
    <div style={{ height, display: "flex", justifyContent: "center", alignItems: "center" }}>  <Spin tip="Loading..."></Spin></div>
  )
}

export default Loading