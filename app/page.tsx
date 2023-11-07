import { About, Hero, Contact } from "@/components/home";
import { Resume } from "@/components/home/resume";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Resume />
      {/* <Portfolio /> */}
      <Contact />
    </>
  )
}