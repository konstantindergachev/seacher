import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import CardList from './CardList';

describe('CardList component', () => {
  const mockCards = [
    {
      id: '1',
      name: 'John Snow',
      username: 'JohnJohn',
      email: 'john@john.com',
    },
    {
      id: '2',
      name: 'Tom Magnum',
      username: 'Tomas',
      email: 'tom@tom.com',
    },
  ];

  describe('CardList with Card', () => {
    const cardList = shallow(<CardList cards={mockCards} />);
    it('to render CardList component with Card', () => {
      expect(cardList.find('Card')).toHaveLength(2);
    });
    it('to get the snapshot of CardList component', () => {
      const tree = renderer.create(<CardList cards={mockCards} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('CardList with Loader', () => {
    const cardList = shallow(<CardList cards={[]} />);
    it('to render CardList component with Loading', () => {
      expect(cardList.find('span')).toHaveLength(1);
    });
    it('to get the snapshot of CardList component', () => {
      const tree = renderer.create(<CardList cards={[]} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
