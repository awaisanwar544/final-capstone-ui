import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Routes, Route } from 'react-router';
import store from '../../redux/store';
import ForgotPassword from '../../pages/ForgotPassword';

describe('App', () => {
  test('Render App', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" exact element={<ForgotPassword />} />
          </Routes>
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
