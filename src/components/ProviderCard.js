function ProviderCard() {
  return (
    <div className="flex flex-col w-1/4 mx-6">
      <div className="item w-auto h-40">
        <img className="w-40 h-40 m-auto object-contain rounded-full bg-custom-green-500" src="https://w7.pngwing.com/pngs/905/43/png-transparent-management-professional-sales-business-service-lawyer-company-service-people-thumbnail.png" alt="Person" />
      </div>
      <div className="item w-auto h-28 text-center flex flex-col justify-around">
        <h3>Person</h3>
        <span className="text-custom-grey-500 select-none">..................</span>
        <p className="text-custom-grey-500">People that something</p>
      </div>
      <div className="item w-auto h-12">
        <ul className="flex justify-center">
          <li><a href="https://github.com/Kakalanp">Github</a></li>
          <li><a href="https://www.linkedin.com/in/joaquin-garrido-lecca-zanetti/">LinkedIn</a></li>
          <li><a href="https://twitter.com/LeccaJoaquin">Twitter</a></li>
        </ul>
      </div>
    </div>
  );
}

export default ProviderCard;
