"use client";
import { CardComponent } from "@/components/Cards/CardComponent";

export default function Home() {
  return (
    <main className="w-full h-screen grid grid-cols-3 p-4 bg-slate-900">
      <CardComponent />
      <CardComponent />
      <CardComponent />
 
    </main>
  );
}
