import React from "react";
import Layout from "./Layout";
import { NextPageWithLayout } from "./_app";
import Link from "next/link";
import Image from "next/image";
import Foot from "../../public/foot.jpg";

const Home: NextPageWithLayout = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt="football"
              src={Foot}
              className="absolute inset-0 h-full w-full object-cover"
              width={50}
              height={50}
              unoptimized
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Play and compete with your friends
            </h2>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
              minus veniam tempora deserunt? Molestiae eius quidem quam
              repellat.
            </p>

            <Link
              href="/booking"
              className="mt-8 inline-block rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Why not Football
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Home;
