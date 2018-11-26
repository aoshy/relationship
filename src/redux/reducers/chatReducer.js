//temporary while not fetching from Firebase
var image1 = require('../../resources/images/image1.jpeg');
var image2 = require('../../resources/images/image2.jpeg');
var image3 = require('../../resources/images/image3.jpeg');
var image4 = require('../../resources/images/image4.jpeg');
var image5 = require('../../resources/images/image5.jpeg');
var image6 = require('../../resources/images/image6.jpeg');
var image7 = require('../../resources/images/image7.jpeg');
var image8 = require('../../resources/images/image8.jpeg');
var image9 = require('../../resources/images/image9.jpeg');
var image10 = require('../../resources/images/image10.jpeg');
var image11 = require('../../resources/images/image11.jpeg');

const INITIAL_STATE = {
    chats: [{
        "id": 1,
        "name": "Diane",
        "message": "Suspendisse accumsan tortor quis turpis.",
        "image" : image1
      }, {
        "id": 2,
        "name": "Lois",
        "message": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
        "image" : image2
      }, {
        "id": 3,
        "name": "Mary",
        "message": "Duis bibendum.",
        "image" : image3
      }, {
        "id": 4,
        "name": "Susan",
        "message": "Praesent blandit.",
        "image" : image4
      }, {
        "id": 5,
        "name": "Betty",
        "message": "Mauris enim leo, rhoncus sed, vestibulum, cursus id, turpis.",
        "image" : image5
      }, {
        "id": 6,
        "name": "Deborah",
        "message": "Aliquam sit amet diam in magna bibendum imperdiet.",
        "image" : image6
      }, {
        "id": 7,
        "name": "Frances",
        "message": "Phasellus sit amet erat.",
        "image" : image7
      }, {
        "id": 8,
        "name": "Joan",
        "message": "Vestibulum ante ipsum bilia Curae; Duis faucibus accumsan odio.",
        "image" : image8
      }, {
        "id": 9,
        "name": "Denise",
        "message": "Aliquam non mauris.",
        "image" : image9
      }, {
        "id": 10,
        "name": "Rachel",
        "message": "Nulla ac enim.",
        "image" : image10
      }],
      newMatches: [{
        "id": 1,
        "first_name": "Sarah",
        "image" : image7
      }, {
        "id": 2,
        "first_name": "Pamela",
        "image" : image8
      }, {
        "id": 3,
        "first_name": "Diana",
        "image" : image9
      }, {
        "id": 4,
        "first_name": "Christina",
        "image" : image10
      }, {
        "id": 5,
        "first_name": "Rebecca",
        "image" : image11
      }, {
        "id": 6,
        "first_name": "Wanda",
        "image" : image5
      }, {
        "id": 7,
        "first_name": "Sara",
        "image" : image6
      }, {
        "id": 8,
        "first_name": "Judith",
        "image" : image7
      }, {
        "id": 9,
        "first_name": "Ruby",
        "image" : image1
      }, {
        "id": 10,
        "first_name": "Sandra",
        "image" : image11
      }]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
