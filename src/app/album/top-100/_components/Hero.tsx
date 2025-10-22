import { Text } from "@THTS/UI/components";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
        relative w-full rounded-2xl overflow-hidden sm:aspect-2/1 lg:aspect-4/1 bg--grey-200 flex items-center">
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
        <Text variant="display-lg">
            Top 100 Albums of the Year
        </Text>
        </div>
        <div className="opacity-0 animate-fade-in-up animation-delay-600">
        <Text variant="body-lg">
            Discover the most popular albums, curated just for you. Dive into
            the soundtracks that defined the year.
        </Text>
        </div>
      </div>
    </section>
  );
}
