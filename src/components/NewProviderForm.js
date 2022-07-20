import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faGithub, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import { getSkills } from '../redux/reducers/skills';
import { newProviders } from '../redux/reducers/providers';

function NewProviderForm() {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skills);
  const navigate = useNavigate();
  const [skillsError, setSkillsError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkedBoxes = document.querySelectorAll('input[name=skills]:checked');
    const skills = Array.prototype.slice.call(checkedBoxes).map((item) => item.value);
    const name = event.target.querySelector('#name').value;
    const cost = event.target.querySelector('#rate').value;
    const image = event.target.querySelector('#profile-image').files[0];
    const bio = event.target.querySelector('#bio').value;
    const githubProfile = event.target.querySelector('#github').value;
    const linkedinProfile = event.target.querySelector('#linkedin').value;
    const twitterProfile = event.target.querySelector('#twitter').value;

    if (skills.length > 0) {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('name', name);
      formData.append('cost', cost);
      formData.append('bio', bio);
      skills.forEach((item) => {
        formData.append('skills[]', item);
      });
      formData.append('github_profile', githubProfile);
      formData.append('linkedin_profile', linkedinProfile);
      formData.append('twitter_profile', twitterProfile);

      dispatch(newProviders(formData))
        .then(() => {
          navigate('/');
        });
    }

    if (skills.length < 1) {
      setSkillsError('Please select at least one skill');
    }
  };
  useEffect(() => {
    dispatch(getSkills());
  }, []);
  return (
    <div
      className="flex flex-col w-full h-screen flex items-center justify-center space-y-10"
    >
      <h1 className="text-4xl text-custom-grey-500 mt-80 md:mt-0">Add New Developer</h1>
      <p>
        All fields with (
        <span className="text-red-500">*</span>
        ) are required
      </p>
      <motion.div
        animate={{ x: 0, opacity: 1, rotate: 0 }}
        initial={{ x: '100%', opacity: 0, rotate: 20 }}
        transition={{ duration: 0.5 }}
        className="px-5"
      >
        <form className="bg-white mx-auto" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Full Name
                <span className="text-red-500"> *</span>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="name" type="text" placeholder="Full Name" required />
              </label>
            </div>
            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rate">
                Rate
                <span className="text-red-500"> *</span>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="rate" type="number" placeholder="Rate per Day" required />
              </label>
            </div>
            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profile-image">
                Profile Image
                <span className="text-red-500"> *</span>
                <input className="form-control block w-full text-base font-normal file:py-1.5 file:px-3 text-custom-grey-500 bg-custom-white-500 bg-clip-padding border border-solid border-custom-green-500 rounded transition ease-in-out m-0 focus:text-custom-green-500 focus:bg-custom-white-500 focus:border-custom-green-500 focus:outline-none file:bg-custom-green-500 file:rounded file:border-none file:text-custom-white-500 file:cursor-pointer" id="profile-image" type="file" placeholder="Upload Profile Image" accept="image/*" required />
              </label>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-10 justify-between md:justify-start">
            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-4" htmlFor="bio">
                Bio
                <span className="text-red-500"> *</span>
                <textarea type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" rows="5" cols="50" id="bio" placeholder="Bio (Max 100 characters)" maxLength="100" required />
              </label>
            </div>
            <div className="md:w-2/5 w-full">
              <label className="block text-gray-700 text-sm font-bold mb-4 max-h-36 overflow-y-scroll" htmlFor="skills">
                Skills
                <span className="text-red-500"> *</span>
                { skillsError
                  ? <p className="text-red-500">{skillsError}</p>
                  : '' }
                <br />
                {skills.map((skill) => (
                  <div key={skill.id}>
                    <input type="checkbox" className="checked:accent-custom-green-500" id={`skill-${skill.id}`} name="skills" value={skill.name} />
                    {` ${skill.name}`}
                    <br />
                  </div>
                ))}
              </label>
            </div>
          </div>
          <div>
            <p className=" text-gray-700 text-sm font-bold">Add links to the social profiles:</p>
            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="github">
                <p className="w-fit mb-1 rounded-full border-2 border-custom-gray-500 hover:border-custom-green-500 text-custom-grey-500 hover:text-custom-green-500 p-1" without="true" rel="noreferrer" target="_blank">
                  Github
                  {' '}
                  <FontAwesomeIcon className="w-5 bg:white-500 text-xl" icon={faGithub} />
                </p>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="github" type="text" placeholder="Github profile link" />
              </label>
            </div>
            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="linkedin">
                <p className="w-fit mb-1 rounded-full border-2 border-custom-gray-500 hover:border-custom-green-500 text-custom-grey-500 hover:text-custom-green-500 p-1" without="true" rel="noreferrer" target="_blank">
                  LinkedIn
                  {' '}
                  <FontAwesomeIcon className="w-5 bg:white-500 text-xl" icon={faLinkedin} />
                </p>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="linkedin" type="text" placeholder="Linkedin profile link" />
              </label>
            </div>
            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="twitter">
                <p className="w-fit mb-1 rounded-full border-2 border-custom-gray-500 hover:border-custom-green-500 text-custom-grey-500 hover:text-custom-green-500 p-1" without="true" rel="noreferrer" target="_blank">
                  Twitter
                  {' '}
                  <FontAwesomeIcon className="w-5 bg:white-500 text-xl" icon={faTwitter} />
                </p>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="twitter" type="text" placeholder="Twitter profile link" />
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-custom-green-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none" type="submit">
              Add Developer
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default NewProviderForm;
