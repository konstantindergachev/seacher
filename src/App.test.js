import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import SearchBox from './components/search-box/SearchBox';

describe('App component', () => {
  const initialState = {
    data: [
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
    ],
    searchField: '',
  };
  const app = shallow(<App {...initialState} />);
  const tree = renderer.create(<App {...initialState} />).toJSON();
  it('get the snapshot of App component', () => {
    expect(tree).toMatchSnapshot();
  });
  it('render App with SearchBox and Footer', () => {
    expect(app.find('SearchBox')).toHaveLength(1);
    expect(app.find('Footer')).toHaveLength(1);
  });
});

describe('App logic', () => {
  it('initialize App with initial state', () => {
    const initialState = {
      data: [],
      searchField: '',
    };
    const app = shallow(<App {...initialState} />);
    expect(app.state()).toEqual(initialState);
  });
  it('mock on search function', () => {
    const onSearchMock = jest.fn();
    const event = {
      target: { value: '88' },
    };
    const mockProps = {
      placeholder: 'search name',
      handleChange: onSearchMock,
    };
    const searchBox = shallow(<SearchBox {...mockProps} />);
    searchBox.find('input').simulate('change', event.target.value);
    expect(onSearchMock).toBeCalledWith('88');
  });

  it('updates search field in state', () => {
    const initialState = {
      data: [],
      searchField: '',
    };
    const app = shallow(<App {...initialState} />);
    //TODO: Подумать над покрытием строки #20
    // expect(app.state().searchField).toEqual(initialState.searchField);
    // const event = {
    //   target: { value: 'r' },
    // };
    // expect(app.instance().handleChange(event)).toEqual(
    //   initialState.searchField
    // );
  });
  it('filters: data found correctly', () => {
    const initialState = {
      data: [
        {
          id: '1',
          name: 'Tom',
          email: 'tom@tom.com',
        },
      ],
      searchField: 't',
    };
    const app = shallow(<App {...initialState} />);

    expect(app.instance().filterData(initialState.searchField)).toEqual([
      {
        id: '1',
        name: 'Tom',
        email: 'tom@tom.com',
      },
    ]);
  });
  it('filters: data not found', () => {
    const initialState = {
      data: [
        {
          id: '3',
          name: 'John',
          email: 'john@gmail.com',
        },
      ],
      searchField: 'x',
    };
    const filteredData = [];
    const app = shallow(<App {...initialState} />);
    expect(app.instance().filterData(initialState.searchField)).toEqual(
      filteredData
    );
  });
});
