import Categories from "./components/Categories";
import Hero from "./components/Hero";
import Stat from "./components/Stat";

export default function Home() {
  return (
    <main className="bg-gray-50  font-messiri">
      <Hero />
      <Stat />
      <Categories />
    </main>
  );
}
