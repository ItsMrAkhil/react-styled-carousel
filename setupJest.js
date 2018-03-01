import Adapter from 'enzyme-adapter-react-16'; // React 16 Enzyme adapter
import Enzyme, { shallow, render, mount } from 'enzyme';
import 'jest-styled-components';

// Make Enzyme functions available in all test files without importing
Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
