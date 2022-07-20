import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from '../../App';
import store from '../../redux/store';

describe('App', () => {
  test('Render App', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
