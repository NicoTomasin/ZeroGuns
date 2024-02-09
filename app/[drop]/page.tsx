import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Logo from "../components/Logo";
import Media from "../components/Media";
import { redirect } from "next/navigation";
import { promises as fs } from "fs";
import { GetStaticPaths } from "next";
export default async function Drop({ params }: { params: { drop: string } }) {
  const data = await fs.readFile(process.cwd() + "/data.json", "utf8");
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
