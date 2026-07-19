import Navbar from "@/components/Navbar";
import MatchCard from "@/components/MatchCard";

export default function Home() {
  return (
    <main>

      <Navbar />

      <section className="hero">
        <h1>
          Welcome to Crickrate 🏏
        </h1>

        <p>
          Your cricket world in one place
        </p>
      </section>


      <section className="matches">

        <h2>
          Live Matches 🔴
        </h2>

        <MatchCard />

      </section>


    </main>
  );
}