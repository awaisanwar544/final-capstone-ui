import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Routes, Route } from 'react-router';
import store from '../../redux/store';
import NewProviderForm from '../../components/NewProviderForm';

describe('App', () => {
  test('Render App', () => {
    localStorage.setItem('user', JSON.stringify({
      name: 'John Doe',
      admin: true,
    }));
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" exact element={<NewProviderForm />} />
          </Routes>
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
