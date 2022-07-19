import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Routes, Route } from 'react-router';
import store from '../../redux/store';
import ProviderCard from '../../components/ProviderCard';

describe('App', () => {
  test('Render App', () => {
    localStorage.setItem('user', JSON.stringify({
      name: 'John Doe',
      admin: true,
    }));

    const providerData = {
      id: 1,
      name: 'John Doe',
      bio: 'John Doe is a developer',
      cost: '$100',
      image: 'https://i.imgur.com/w3duR07.jpg',
      github_profile: 'www.github.com/johndoe',
      linkedin_profile: 'www.linkedin.com/johndoe',
      twitter_profile: 'www.twitter.com/johndoe',
      skills: [{
        id: 1,
        name: 'HTML',
      }],
    };
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" exact element={<ProviderCard providerData={providerData} />} />
          </Routes>
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
