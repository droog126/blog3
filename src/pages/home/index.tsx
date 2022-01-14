import React, { useEffect, useState } from 'react';
import { countPv } from '@/pages/home/apis'
import { Spin } from 'antd';
import styles from "./index.scss";
console.log(styles)

export default () => {

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    countPv();
    return () => {
    }
  }, [])
  if (loading) {
    return <Spin />
  }
  return <div>
    <div >

    </div>
  </div >;
}
