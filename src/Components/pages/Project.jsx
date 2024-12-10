
import ProjectItem from '../ProjectItem';
import marvelImg from '../../assets/image/marvel.jpg';
import employeetrackerImg from '../../assets/image/employeetracker.webp';
import readmegenImg from '../../assets/image/readmegen.png';

const Projects = () => {
  return (
    <div id="Projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-black-600">Projects</h1>
      <p className="text-center font-bold">
     projects that i have worked on in my first 4 months as a devloper using React js ,node js,typescript
      </p>
      
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={marvelImg} title="Marvel App" />
        <ProjectItem img={readmegenImg} title="Readme Generator" />
        <ProjectItem img={employeetrackerImg} title="Employee Tracker" />
      </div>
    </div>
  );
};

export default Projects;
