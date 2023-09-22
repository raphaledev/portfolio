import Navbar from "../components/Navbar";
import ProjectItem from "../components/ProjectItem";
import { projects } from "./projectsData";

const Portfolio = () => {
  return (
    <main className="w-11/12 mx-auto my-4">
      <Navbar />
      <div>
        <h1 className="text-center text-4xl font-bold">My Portfolio</h1>
        <div className="grid grid-cols-3 gap-12 my-16 w-4/5 mx-auto">
          {projects.map((project, index) => (
            <div className="w-full" key={index}>
              <ProjectItem
                img={project.img}
                title={project.title}
                description={project.description}
                url={project.url}
                repo={project.repo}
              />
            </div>
            ))}
        </div>
      </div>
    </main>
  );
}

export default Portfolio;
