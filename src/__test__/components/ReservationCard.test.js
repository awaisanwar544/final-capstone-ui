import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Routes, Route } from 'react-router';
import store from '../../redux/store';
import ReservationCard from '../../components/ReservationCard';

describe('App', () => {
  test('Render App', () => {
    localStorage.setItem('user', JSON.stringify({
      name: 'John Doe',
      admin: true,
    }));

    const reservationData = {
      id: 1,
      provider_id: 1,
      start_date: '2019-01-01',
      end_date: '2019-01-02',
      total_cost: '$100',
      created_at: '2019-01-01',
      provider_name: 'John Doe',
      provider_image: 'https://i.imgur.com/w3duR07.jpg',
    };
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" exact element={<ReservationCard reservationData={reservationData} />} />
          </Routes>
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
