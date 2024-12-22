const Project = (props) => {
  const { title, image, description, link } = props.project;

  return (
    <div className="flex gap-4 border px-4 py-2 rounded-lg">
      <div className="w-48 flex items-center">
        <img src={image} alt={title} className="min-w-48 max-w-48 aspect-video" />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          View Project
        </a>
      </div>
    </div>
  )
};

export default Project;