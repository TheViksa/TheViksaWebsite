import React from "react";
import { PortableText } from "@portabletext/react";
import { CustomPortableTextComponents } from "../CustomPortableTextComponents/CustomPortableTextComponents";
export const PonudaBody = ({ data }: any) => {
  return (
    <div className="container-article">
      {" "}
      {data ? (
        <PortableText value={data} components={CustomPortableTextComponents} />
      ) : null}
    </div>
  );
};
