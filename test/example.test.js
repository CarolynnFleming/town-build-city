// IMPORT MODULES under test here:
// import { example } from '../example.js';
import {makeStatsString} from '../utils.js';

const test = QUnit.test;

test('should return a string describing the current state', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `you've changed the castle 4 times, you've changed the skyline 5 times, you've changed the waterfront 1 times. And the slogan you added was dreamy.`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeStatsString(4, 5, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, 'a description of state');
});
