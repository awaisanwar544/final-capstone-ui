import NavigationBar from '../components/NavigationBar';

function HomePage() {
  return (
    <div className="flex">
      <NavigationBar />
      <div>
        <h1>This is the Home page</h1>
      </div>
    </div>
  );
}

export default HomePage;
