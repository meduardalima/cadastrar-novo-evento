"use client";

import { Category } from "./components/category";
import { Event } from "./components/event";

export default function Home() {
  return (
    <main>
      <Event />
      <Category />
    </main>
  );
}
