//temporary
var image1 = require('../../resources/images/image1.jpeg')
var image2 = require('../../resources/images/image2.jpeg')
var image3 = require('../../resources/images/image3.jpeg')
var image4 = require('../../resources/images/image4.jpeg')
var image5 = require('../../resources/images/image5.jpeg')
var image6 = require('../../resources/images/image6.jpeg')

const INITIAL_STATE = {
    cards: [{
        "id": 1,
        "first_name": "Denise",
        "age": 21,
        "friends": 9,
        "interests": 38,
        "image": image1
        }, {
        "id": 2,
        "first_name": "Cynthia",
        "age": 27,
        "friends": 16,
        "interests": 49,
        "image": image2
        }, {
        "id": 3,
        "first_name": "Maria",
        "age": 29,
        "friends": 2,
        "interests": 39,
        "image": image3
        }, {
        "id": 4,
        "first_name": "Jessica",
        "age": 20,
        "friends": 18,
        "interests": 50,
        "image": image4
        }, {
        "id": 5,
        "first_name": "Julie",
        "age": 28,
        "friends": 2,
        "interests": 13,
        "image": image5
        }, {
        "id": 6,
        "first_name": "Anna",
        "age": 24,
        "friends": 12,
        "interests": 44,
        "image": image6
        }
    ],
    error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
