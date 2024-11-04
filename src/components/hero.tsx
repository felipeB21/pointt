export default function Hero() {
  return (
    <>
      <div className="absolute top-0 -z-10 h-full w-full dark:bg-black bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <section className="wrapper mt-20">
        <h1 className="text-6xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.300),theme(colors.pink.400),theme(colors.orange.400),theme(colors.pink.400),theme(colors.purple.300),theme(colors.purple.400))] bg-[length:200%_auto] animate-gradient">
          AI CURSOR MAKER
        </h1>
        <div></div>
      </section>
    </>
  );
}
