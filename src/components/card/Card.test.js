import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card', () => {
  it('to render Card component', () => {
    expect(shallow(<Card />).length).toEqual(1);
  });

  it('to get the snapshot of Card component', () => {
    const card = renderer.create(<Card />).toJSON();
    expect(card).toMatchSnapshot();
  });
});
