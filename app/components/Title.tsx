export default function Title({
  title,
  borderColor,
}: {
  title: string;
  borderColor: string;
}) {
  return (
    <div
      className="text-sm border rounded-2xl px-4 py-1 inline-block mt-4"
      style={{ borderColor }}
    >
      <h2>{title}</h2>
    </div>
  );
}
