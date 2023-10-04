import About from "./components/About";
// import Bar from "./components/Bar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col lg:grid lg:grid-cols-2 gap-16 mx-24">
      <div className="static lg:w-1/2 lg:pl-24 lg:pr-16 lg:fixed lg:top-0 lg:left-0">
        <Hero />
      </div>
      {/* <div className="hidden lg:flex flex-col p-2 rounded-lg text-rose-500 bg-gradient-to-br from-mystic to-white lg:fixed lg:top-[42%] lg:right-4" style={{boxShadow: '0px 0px 15px 5px rgba(255, 255, 255, 0.75)'}}>
        <Bar />
      </div> */}
      <div></div>
      <div className="flex flex-col gap-12 my-16">
        <About />
        <Skills />
        <Projects />
      </div>
    </main>
  )
}
