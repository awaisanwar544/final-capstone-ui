import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Routes, Route } from 'react-router';
import store from '../../redux/store';
import ResetPassword from '../../pages/ResetPassword';

describe('App', () => {
  test('Render App', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" exact element={<ResetPassword />} />
          </Routes>
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
