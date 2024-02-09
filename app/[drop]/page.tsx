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
  const dataParsed = JSON.parse(data);
  const drop = dataParsed[params.drop];
  const { title, subtitle, color } = drop;
  return (
    <>
      <div
        className="min-h-screen px-4 py-12 min-w-screen flex flex-col justify-center items-center"
        style={{ color }}
      >
        <Title title={title} borderColor={color} />
        <Subtitle subtitle={subtitle} />
        <Logo />
        <Media video={`/media/${params.drop}.mp4`} />
      </div>
    </>
  );
}
export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const data = await fs.readFile(filePath, "utf8");
  const dataParsed = JSON.parse(data);
  return dataParsed.drops.map((drop: string) => ({
    drop,
  }));
}
