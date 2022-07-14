import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faGithub, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

function ProviderCard() {
  return (
    <div className="flex justify-around items-center mt-8 p-4 shadow-lg w-3/4 border-2 border-transparent hover:border-custom-green-500 hover:rounded-md hover:shadow-2xl">
      <div className="item w-auto h-20">
        <img className="w-20 h-20 m-auto object-contain rounded-full bg-custom-green-500" src="https://w7.pngwing.com/pngs/905/43/png-transparent-management-professional-sales-business-service-lawyer-company-service-people-thumbnail.png" alt="Person" />
      </div>
      <div className="item w-auto h-28 text-center flex flex-col justify-around">
        <h3>Person</h3>
        <span className="text-custom-grey-500 select-none">..................</span>
        <p className="text-custom-grey-500">People that something</p>
      </div>
      <div className="item w-auto h-12">
        <ul className="flex w-52 justify-around">
          <li>
            <a href="https://github.com/Kakalanp" without rel="noreferrer" target="_blank">
              <FontAwesomeIcon className="text-custom-grey-500 text-xl hover:text-custom-green-500" icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/joaquin-garrido-lecca-zanetti/" without rel="noreferrer" target="_blank">
              <FontAwesomeIcon className="text-custom-grey-500 text-xl hover:text-custom-green-500" icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/LeccaJoaquin" without rel="noreferrer" target="_blank">
              <FontAwesomeIcon className="text-custom-grey-500 text-xl hover:text-custom-green-500" icon={faTwitter} />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-red-500 hover:text-white hover:border-red-500 font-bold py-2 px-4 rounded focus:outline-none" type="button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProviderCard;
