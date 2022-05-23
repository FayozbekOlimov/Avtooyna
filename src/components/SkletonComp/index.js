import { Skeleton } from 'antd'
import React from 'react'

const SkletonComp = ({ rows }) => {
  return (
    <Skeleton paragraph={{ rows }} />
  )
}

export default SkletonComp