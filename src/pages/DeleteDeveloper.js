import NavigationBar from '../components/NavigationBar';
import ProviderCardLandscape from '../components/ProviderCardLandscape';

function DeleteDeveloper() {
  return (
    <div className="flex">
      <NavigationBar />
      <div className="w-screen h-screen flex flex-col items-center my-12 space-y-20 md:overflow-y-hidden">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl text-custom-grey-500">Delete a Developer</h1>
        </div>
        <div className="w-full max-h-screen flex flex-col items-center overflow-y-scroll md:flex-col md:overflow-x-scroll">
          <ProviderCardLandscape />
          <ProviderCardLandscape />
          <ProviderCardLandscape />
          <ProviderCardLandscape />
          <ProviderCardLandscape />
        </div>
      </div>
    </div>
  );
}

export default DeleteDeveloper;
