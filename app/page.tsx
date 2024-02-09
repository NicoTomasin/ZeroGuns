import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Logo from "./components/Logo";
export default async function Drop() {
  return (
    <div className="min-h-screen px-4 py-12 min-w-screen flex flex-col justify-center items-center text-neutral-100">
      <Title title="Estamos construyendo" borderColor={"#854f6c"} />
      <Subtitle subtitle="ZERO GUNS" />
      <Title title="Vuelva pronto" borderColor={"#854f6c"} />
      <Logo />
      <a
        href="https://www.instagram.com/zeroguns/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-instagram mt-4 hover:text-accent-100 cursor-pointer hover:scale-105 transition"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M16.5 7.5l0 .01" />
        </svg>
      </a>
    </div>
  );
}
