import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Logo from "../components/Logo";
import Media from "../components/Media";
import { redirect } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";
import { GetStaticPaths } from "next";
export default async function Drop({ params }: { params: { drop: string } }) {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const data = await fs.readFile(filePath, "utf8");
  const drops = JSON.parse(data);
  if (!drops[params.drop]) {
    redirect("/404");
  }
  const { color, borderColor, title, subtitle } = drops[params.drop];
  return (
    <div
      className={`min-h-screen px-4 py-12 min-w-screen flex flex-col justify-center items-center ${color}`}
    >
      <Title title={title} borderColor={borderColor} />
      <Subtitle subtitle={subtitle} />
      <Logo />
      <Media video={`/media/${params.drop}.mp4`} />
    </div>
  );
}
export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const data = await fs.readFile(filePath, "utf8");
  const drops = JSON.parse(data);

  return Object.keys(drops).map((drop) => {
    drop: drop;
  });
}
