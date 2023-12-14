import React, { useEffect, useState } from 'react'

const useHttp = (fn, param) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    fn(param).then(res => setData(res))
  }, [fn, param])
  return [data, setData]
}

export default useHttp