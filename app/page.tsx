"use client";
import Image from "next/image";
import Link from "next/link";
import { ColorRing, InfinitySpin, Watch } from "react-loader-spinner";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 min-h-screen items-center p-24">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl sm:text-5xl text-[#4da9a9] font-medium tracking-tight">
          Select a task for AI:
        </h1>
        {/*<Watch
          visible={true}
          height="50"
          width="50"
          radius="48"
          color="#4da9a9"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass=""
          />*/}
      </div>

      <section className="flex flex-col sm:flex-row gap-3">
        <div className="border w-56 border-[#4da9a9] text-[#4da9a9] sm:text-2xl font-semibold  text-center px-4 py-4 cursor-pointer rounded-md">
          <Link href="/summarization">Text Summarization</Link>
        </div>
        <div className="border w-56 border-[#4da9a9] text-[#4da9a9] sm:text-2xl font-semibold  text-center px-4 py-4 cursor-pointer rounded-md">
          <Link href="/summarization_ru">Text Summarization Rus</Link>
        </div>
        <div className="border w-56 border-[#4da9a9] text-[#4da9a9] sm:text-2xl font-semibold  text-center px-4 py-4 cursor-pointer rounded-md">
          <Link href="/geminipro">Gemini Pro API</Link>
        </div>
      </section>
      {/*<InfinitySpin
        visible={false}
        width="195"
        color="#4da9a9"
        ariaLabel="infinity-spin"
        />*/}
    </main>
  );

  function renderLoader() {
    return (
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    );
  }
}
