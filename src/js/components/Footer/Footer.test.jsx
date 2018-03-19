import React from "react";
import { shallow, mount, render } from "enzyme";
import Footer from "./Footer";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const tree = shallow(<Footer />);

  expect(tree).toMatchSnapshot();
});
