import React from "react";
import { Dna } from "react-loader-spinner";
import s from "./Loader.module.css";

export const Loader = () => {
  return (
    <>
      <div className={s.box}>
        <Dna
          className={s.loader}
          visible={true}
          height="280"
          width="280"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    </>
  );
};
