// Static light at the top of the page: a teal and an indigo glow that scroll away with the hero.
export default function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[56rem] overflow-hidden">
      <div className="absolute -top-[24rem] left-[42%] h-[46rem] w-[72rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(94_234_212/0.2),transparent)]" />
      <div className="absolute -top-[20rem] left-[68%] h-[40rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(129_140_248/0.18),transparent)]" />
    </div>
  );
}
