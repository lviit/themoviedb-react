import React from "react";
import { shallow, mount, render } from "enzyme";
import Header from "./Header";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const tree = shallow(<Header.WrappedComponent />);

  expect(tree).toMatchSnapshot();
});
