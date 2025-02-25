import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/saikrupa.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-center sm:text-left">
          Saikrupa Renovation
        </h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            We build legal and safe homes for you.
          </li>
          <li className="mb-2">I am master in contracting basement develiopment</li>
          <li className="mb-2">I am handyman with knowledge of all trades</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
         <h2> More Details coming soon ...</h2>
        </div>
      </main>
    </div>
  );
}
