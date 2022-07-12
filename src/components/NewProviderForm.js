function NewProviderForm() {
  return (
    <div className="flex flex-col w-full h-screen flex items-center justify-center space-y-10">
      <h1 className="text-4xl text-custom-grey-500">Add New Developer</h1>
      <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 h-fit mx-auto">
        <div className="flex space-x-10">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Full Name
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="name" type="text" placeholder="Full Name" />
            </label>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rate">
              Rate
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="rate" type="text" placeholder="Rate per Day" />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profile-image">
              Profile Image
              <input className="form-control block w-full text-base font-normal file:py-1.5 file:px-3 text-custom-grey-500 bg-custom-white-500 bg-clip-padding border border-solid border-custom-green-500 rounded transition ease-in-out m-0 focus:text-custom-green-500 focus:bg-custom-white-500 focus:border-custom-green-500 focus:outline-none file:bg-custom-green-500 file:rounded file:border-none file:text-custom-white-500 file:cursor-pointer" id="profile-image" type="file" placeholder="Upload Profile Image" />
            </label>
          </div>
        </div>
        <div className="flex space-x-10">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-4" htmlFor="bio">
              Bio
              <textarea type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" rows="5" cols="50" id="bio" placeholder="Bio (Max 100 characters)" />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-4" htmlFor="skills">
              Skills
              <textarea type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" rows="5" cols="50" id="skills" placeholder="Add one skill per line" />
            </label>
          </div>
        </div>
        <div>
          <p className="text-xl2 text-bold">Add links to the social profiles</p>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="github">
              Github
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="github" type="text" placeholder="Github profile link" />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="linkedin">
              Likedin
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="linkedin" type="text" placeholder="Linkedin profile link" />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="twitter">
              Twitter
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="twitter" type="text" placeholder="Twitter profile link" />
            </label>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-custom-green-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none" type="button">
            Add Developer
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewProviderForm;
