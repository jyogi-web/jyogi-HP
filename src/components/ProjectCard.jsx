import PropTypes from 'prop-types';
import '../styles/ProjectCard.css';

const ProjectCard = ({ title, author, technologies, link, image }) => {
  return (
    <div className="project-card">
      <img src={image} alt={`${title} image`} className="project-image" />
      <h2 className="project-title">{title}</h2>
      <p className="project-author">作成者: {author}</p>
      <p className="project-technologies">使用技術: {technologies.join(', ')}</p>
      <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
        作品のリンク
      </a>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProjectCard;
