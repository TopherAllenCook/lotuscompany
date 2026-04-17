import { Deck } from "@/components/Deck";
import { slides } from "@/slides";

export default function Home() {
  return <Deck slides={slides} />;
}
