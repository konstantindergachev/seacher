import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';

describe('Footer', () => {
  it('to render Footer component', () => {
    expect(shallow(<Footer />).length).toEqual(1);
  });

  it('to get the snapshot of Footer component', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
