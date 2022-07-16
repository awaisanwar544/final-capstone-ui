import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faGithub, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { delProviders } from '../redux/reducers/providers';

function ProviderCard({ providerData }) {
  const dispatch = useDispatch();

  const deleteElement = () => {
    document.getElementById(`provider-${providerData.id}`).remove();
  };

  const deleteProvider = () => {
    dispatch(delProviders(providerData.id));
    deleteElement();
  };

  return (
    <div id={`provider-${providerData.id}`} className="flex justify-around items-center mt-8 p-4 shadow-lg w-3/4 border-2 border-transparent hover:border-custom-green-500 hover:rounded-md hover:shadow-2xl transition hover:scale-110 duration:300ms">
      <div className="item w-auto h-20">
        <img className="w-20 h-20 m-auto object-contain rounded-full bg-custom-green-500" src={providerData.image} alt={providerData.name} />
      </div>
      <div className="item w-auto h-28 text-center flex flex-col justify-around">
        <h3>{providerData.name}</h3>
        <span className="text-custom-grey-500 select-none">..................</span>
        <p className="text-custom-grey-500">{providerData.bio}</p>
      </div>
      <div className="item w-auto h-12">
        <ul className="flex w-52 justify-around">
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
      <div className="flex items-center justify-center">
        <button className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-red-500 hover:text-white hover:border-red-500 font-bold py-2 px-4 rounded focus:outline-none" type="button" onClick={deleteProvider}>
          Delete
        </button>
      </div>
    </div>
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
