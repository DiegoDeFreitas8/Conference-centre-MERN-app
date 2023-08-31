//imported my component and renderer
import React from "react";
import EventList from "../components/eventList"
import renderer from 'react-test-renderer';

//created a snapshot test of my component 
//that i have imported
test('renders correctly', () => {
    const tree = renderer
        .create(<EventList/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})