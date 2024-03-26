"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";

export function HeroGridImages() {
  return (
    <div className="h-full w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const cards = [
  {
    id: 1,
    content: "",
    className: "md:col-span-2  ",
    thumbnail:
      "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: "",
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1551524164-687a55dd1126?q=80&w=1225&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: "",
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1503315082045-a2bfb5e7f56e?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: "",
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
