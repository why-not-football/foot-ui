import { Roboto } from "next/font/google";

const font = Roboto({ subsets: ["latin"], weight: "100" });
export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
    </main>
  );
}
