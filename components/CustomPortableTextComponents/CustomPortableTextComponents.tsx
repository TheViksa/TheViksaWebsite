import React from "react";
import Image from "next/image";
import { imageBuilder } from "./../../sanity/lib/image";

export const CustomPortableTextComponents = {
  block: {
    h1: ({ children }: any) => {
      return <h1 className="article-h1">{children}</h1>;
    },
    h2: ({ children }: any) => {
      return <h2 className="article-h2">{children}</h2>;
    },
    h3: ({ children }: any) => {
      return <h3 className="article-h3">{children}</h3>;
    },
    h4: ({ children }: any) => {
      return <h4 className="article-h4">{children}</h4>;
    },
    h5: ({ children }: any) => {
      return <h4 className="article-h5">{children}</h4>;
    },
    normal: ({ children }: any) => {
      return <p className="article-p">{children}</p>;
    },
    blockquote: ({ children }: any) => {
      return <blockquote className="">{children}</blockquote>;
    },
    cite: ({ children, value }: any) => {
      return <cite className="">{children}</cite>;
    },
  },
  list: {
    bullet: ({ children }: any) => {
      return <ul className="article-list-disc ">{children}</ul>;
    },
  },
  types: {
    image: ({ value }: any) => {
      const imgDesc = value.imgDesc;
      return (
        <div className="">
          <Image
            alt={imgDesc ? imgDesc : "Decorative image related to services"}
            src={imageBuilder.image(value).width(800).height(400).url()}
            width={800}
            height={400}
          />
          {imgDesc && <p>{imgDesc}</p>}
        </div>
      );
    },
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value.href}
          className="article-text-link"
          rel="noreferrer"
          target="_blank"
        >
          {children}
        </a>
      );
    },
    "email-address": ({ children, value }: any) => {
      const emailValue = value.email;
      return (
        <a
          href={`mailto:${emailValue}`}
          className="article-text-link"
          rel="noreferrer"
        >
          {children}
        </a>
      );
    },
  },
};
