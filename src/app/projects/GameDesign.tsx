"use client";

import GameSlider from "./GameSlider";

import {
  game1Banners,
  game2Banners,
  game3Banners,
  game4Banners,
} from "./projectsData";

export default function GameDesign() {
  return (
    <section className="space-y-0 py-0">
      <GameSlider title="Hide & Seek Paint Escape" banners={game1Banners} />

      <GameSlider title="Obby Parkour Bike Game" banners={game2Banners} />

      <GameSlider title="Gangster World Car Driving 3D" banners={game3Banners} />

      <GameSlider title="Wheelie Bike Stunt Master 3D" banners={game4Banners} />
    </section>
  );
}