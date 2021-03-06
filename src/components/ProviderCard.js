import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faGithub, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

function ProviderCard({ providerData }) {
  const skills = providerData.skills
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      animate={{ x: 0, opacity: 1, rotate: 0 }}
      initial={{ x: '100%', opacity: 0, rotate: 20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-w-[25%] w-64 mx-6 my-2 p-2 bg-custom-white-500 shadow-2xl hover:shadow-custom-green-500"
    >
      <div className="item w-auto h-40">
        <img className="w-40 h-40 m-auto object-cover rounded-full bg-custom-green-500" src={providerData.image} alt={providerData.name} />
      </div>
      <div className="item w-auto h-28 text-center flex flex-col justify-around">
        <h3 className="font-bold">{providerData.name}</h3>
        <div className="flex flex-wrap justify-center gap-y-1 space-x-2 h-14 overflow-y-hidden">
          {skills.map((skill) => <p className="p-1 h-6 bg-gray-200 rounded-md text-xs" key={skill.id}>{skill.name}</p>)}
        </div>
      </div>
      <Link
        exact="true"
        to={`/developer/${providerData.id}`}
        state={providerData}
        className="text-custom-grey-500 text-center hover:text-custom-green-500 font-bold m-4"
      >
        <p>See Details</p>
      </Link>
      <div className="item w-auto h-12">
        <ul className="flex justify-around">
          <li>
            <a className="rounded-full border-2 border-custom-gray-500 hover:border-custom-green-500 text-custom-grey-500 hover:text-custom-green-500 p-1" href={providerData.github_profile} without="true" rel="noreferrer" target="_blank">
              <FontAwesomeIcon className="w-5 bg:white-500 text-xl" icon={faGithub} />
            </a>
          </li>
          <li>
            <a className="rounded-full border-2 border-custom-gray-500 hover:border-custom-green-500 text-custom-grey-500 hover:text-custom-green-500 p-1" href={providerData.linkedin_profile} without="true" rel="noreferrer" target="_blank">
              <FontAwesomeIcon className="w-5 bg:white-500 text-xl" icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a className="rounded-full border-2 border-custom-gray-500 hover:border-custom-green-500 text-custom-grey-500 hover:text-custom-green-500 p-1" href={providerData.twitter_profile} without="true" rel="noreferrer" target="_blank">
              <FontAwesomeIcon className="w-5 bg:white-500 text-xl" icon={faTwitter} />
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

ProviderCard.propTypes = {
  providerData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    bio: PropTypes.string,
    cost: PropTypes.string,
    image: PropTypes.string,
    github_profile: PropTypes.string,
    linkedin_profile: PropTypes.string,
    twitter_profile: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
  }).isRequired,
};

export default ProviderCard;
