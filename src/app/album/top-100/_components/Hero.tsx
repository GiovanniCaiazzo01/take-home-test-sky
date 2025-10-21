import Image from "next/image";
import { DisplayLG, BodyLG } from "@THTS/UI/components";

export default function Hero() {
  return (
    <section
      className="
        relative w-full rounded-2xl overflow-hidden sm:aspect-[2:1] lg:aspect-[4/1] bg--grey-200 flex items-center">
      {/* Background Image */}
      <Image
        src="/images/hero.webp"
        alt="Hero background"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
        draggable={false}
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative z-10 space-y-4 p-4 sm:p-8 w-full max-w-2xl text-white">
        <div className="opacity-0 animate-fade-in-up animation-delay-300">
          <DisplayLG className="text-shadow-lg">
            Top 100 Albums of the Year
          </DisplayLG>
        </div>
        <div className="opacity-0 animate-fade-in-up animation-delay-600">
          <BodyLG className="text-primary-100">
            Discover the most popular albums, curated just for you. Dive into
            the soundtracks that defined the year.
          </BodyLG>
        </div>
      </div>
    </section>
  );
}
