
const ProjectItem = ({ img, title }) => {
  return (
    <div className="shadow-lg rounded-md overflow-hidden">
      <img src={img} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default ProjectItem;
