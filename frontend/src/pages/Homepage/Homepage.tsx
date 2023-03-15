import Features from "./Features";
import HeroBanner from "./HeroBanner";
import { features } from "../../mocks/featuresMock"



function Homepage() {
  return (
    <main>
        <HeroBanner />
        <Features features={features} />
    </main>
  )
}

export default Homepage