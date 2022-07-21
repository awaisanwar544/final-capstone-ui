import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { delProviders } from '../redux/reducers/providers';

function ProviderCard({ providerData }) {
  const dispatch = useDispatch();

  const deleteConfirmation = () => {
    const card = document.getElementById(`provider-${providerData.id}`);
    card.classList.add('hover:border-red-500');
    card.childNodes[0].childNodes[0].classList.add('grayscale');
    card.childNodes[0].childNodes[1].childNodes[1].classList.add('hidden');
    card.childNodes[0].childNodes[1].childNodes[0].innerHTML = `Are you sure you want to delete ${providerData.name}?`;
    const button = card.childNodes[1].childNodes[0];
    const yesButton = card.childNodes[1].childNodes[1];
    const noButton = card.childNodes[1].childNodes[2];
    button.classList.add('hidden');
    yesButton.classList.remove('hidden');
    noButton.classList.remove('hidden');

    yesButton.addEventListener('click', () => {
      dispatch(delProviders(providerData.id));
      card.remove();
    });

    noButton.addEventListener('click', () => {
      card.classList.remove('text-custom-grey-500', 'hover:border-red-500');
      card.childNodes[0].childNodes[0].classList.remove('grayscale');
      card.childNodes[0].childNodes[1].childNodes[0].innerHTML = `${providerData.name}`;
      card.childNodes[0].childNodes[1].childNodes[1].classList.remove('hidden');
      noButton.classList.add('hidden');
      yesButton.classList.add('hidden');
      button.classList.remove('hidden');
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      animate={{ x: 0, opacity: 1, rotate: 0 }}
      initial={{ x: '100%', opacity: 0, rotate: 20 }}
      transition={{ duration: 0.5 }}
      id={`provider-${providerData.id}`}
      className="flex flex-col md:flex-row justify-between items-center mt-8 py-4 px-5 shadow-lg w-3/4 border-2 border-transparent hover:border-custom-green-500 rounded-md hover:shadow-2xl transition hover:scale-110 duration:300ms"
    >
      <div className="flex w-full grow justify-between items-center">
        <div className="item h-20">
          <img className="w-20 h-20 m-auto object-cover rounded-full bg-custom-green-500" src={providerData.image} alt={providerData.name} />
        </div>
        <div className="item w-4/5 h-28 text-center flex flex-wrap flex-col justify-around overflow-hidden">
          <h3 className="font-bold">{providerData.name}</h3>
          <p className="text-custom-grey-500">{providerData.bio}</p>
        </div>
      </div>
      <div className="flex items-center justify-center md:mr-4">
        <button className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-red-500 hover:text-white hover:border-red-500 font-bold py-2 px-4 rounded focus:outline-none" type="button" onClick={deleteConfirmation}>
          Delete
        </button>
        <button className="bg-custom-white-500 text-custom-grey-500 border border-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 font-bold py-2 px-4 rounded focus:outline-none ml-2 hidden" type="button">
          Yes
        </button>
        <button className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-custom-green-500 hover:text-white hover:border-custom-green-500 font-bold py-2 px-4 rounded focus:outline-none ml-2 hidden" type="button">
          No
        </button>
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
