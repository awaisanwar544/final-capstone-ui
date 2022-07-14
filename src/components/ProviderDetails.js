function ProviderDetails() {
  return (
    <div className="flex w-full h-1/3 jusitify-center content-center items-center">
      <div className="w-3/5">
        <img className="w-3/5 m-auto object-contain bg-custom-green-500" src="https://w7.pngwing.com/pngs/905/43/png-transparent-management-professional-sales-business-service-lawyer-company-service-people-thumbnail.png" alt="Person" />
      </div>
      <div className="flex flex-col w-2/5 px-20">
        <div className="flex flex-col self-end pb-12">
          <h1 className="text-4xl font-bold text-custom-green-500 self-end">Name</h1>
          <p className="text-sm font-bold text-custom-grey-500 self-end text-right">Bio: A quick brown fox jumped over the lazy dogs</p>
        </div>
        <div>
          <p className="p-2 bg-custom-white-500 odd:bg-gray-200">JavaScript</p>
          <p className="p-2 bg-custom-white-500 odd:bg-gray-200">React</p>
          <p className="p-2 bg-custom-white-500 odd:bg-gray-200">Ruby on Rails</p>
          <p className="p-2 bg-custom-white-500 odd:bg-gray-200">AWS</p>
        </div>
        <div className="flex justify-between text-lg font-bold text-custom-grey-500 mt-6">
          <p>Cost per Day:</p>
          <p>20$</p>
        </div>
        <div className="flex my-12 self-end">
          <button className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-custom-green-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none" type="button">
            Book Developer
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProviderDetails;
