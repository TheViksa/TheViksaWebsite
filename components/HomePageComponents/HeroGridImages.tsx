"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";
import { IGridImg } from "@/types";

export function HeroGridImages({ cards }: { cards: IGridImg[] }) {
  return (
    <div className="h-full w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}
