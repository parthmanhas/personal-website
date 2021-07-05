
import { shallow } from 'enzyme';
import Navbar from './components/Navbar/Navbar';

it('should render Navbar', () => {
  const navbar = shallow(<Navbar />);
  expect(navbar).toBeDefined();
});