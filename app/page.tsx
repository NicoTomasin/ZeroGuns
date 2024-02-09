import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Logo from "./components/Logo";
import Media from "./components/Media";
import { promises as fs } from "fs";
export default async function Drop() {
  const color = "text-neutral-100";
  const borderColor = "border-neutral-100";
  return (
    <div
      className={`min-h-screen px-4 py-12 min-w-screen flex flex-col justify-center items-center ${color}`}
    >
      <Title title="Gracias por tu compra" borderColor={borderColor} />
      <Subtitle subtitle="ZERO GUNS" />
      <Logo />
      <Media video="/media/AlitaVideo.mp4" />
    </div>
  );
}
