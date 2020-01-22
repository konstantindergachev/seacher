import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import SearchBox from './SearchBox';

let wrapper;
beforeEach(() => {
  const mockProps = {
    placeholder: 'test name',
    handleChange: jest.fn(),
  };
  wrapper = shallow(
    <SearchBox
      placeholder={mockProps.placeholder}
      handleChange={mockProps.handleChange}
    />
  );
});

describe('SearchBox', () => {
  it('to render SearchBox component', () => {
    expect(shallow(<SearchBox />).length).toEqual(1);
  });

  it('to get the snapshot of SearchBox component', () => {
    const tree = renderer.create(<SearchBox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
