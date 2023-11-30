import React from 'react';
import { AiFillBug } from "react-icons/ai";
import { AiFillAppstore } from "react-icons/ai";


export const Statistics = ({ data }) => {

  const icons = {
    bug: <AiFillBug color='red' size={100} />,
    window: <AiFillAppstore color='red' size={100} />
  }
  return (
    <>
      <h2>Statistics</h2>
      <ul>
        {data.map(({ id, title, total, icon }) => {
          return <li key={id}>
            {icons[icon]}
            <p>{total}</p>
            <p>{title}</p>
          </li>
        })}

      </ul>
    </>

  )
}
