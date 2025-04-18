import Hero from "../components/hero";
import TeamStanding from "../components/TeamStanding";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";
import LiveScore from "../components/LiveScore";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-[url('/stadium.jpg')] bg-cover bg-center bg-fixed">
      <div className="min-h-scree bg-black/40">
        <div className="space-y-12 pb-12">
          <div className="bg-opacity-90">
            <Hero />
          </div>

         <div className="bg-opacity-90">
            <LiveScore />
          </div>
         <div className="bg-opacity-90">
            <TeamStanding />
          </div>

          <div className="bg-opacity-90">
            <StatsSection />
          </div>
          <div className="bg-opacity-90">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
