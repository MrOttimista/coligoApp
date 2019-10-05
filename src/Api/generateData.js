var MockAdapter = require('axios-mock-adapter');
var axios = require('axios');

var mock = new MockAdapter(axios);

const  fakeQuizesService=mock.onGet("http://test.coligolms.com/api/quiz").reply(200, {
  data: [
    {
      type: "quiz",
      name: "Unit2 Quiz",
      course: "Physics 02",
      Topic: "unit 2",
      dueto: "20Dec 2017-9pm"
    },
    {
      type: "assignmet",
      name: "Unit2 Assignment",
      course: "Physics 02",
      Topic: "unit 2",
      dueto: "20Dec 2017-9pm"
    }
  ]
});

const fakeAnnouncmentService = mock
  .onGet("http://test.coligolms.com/api/announcement")
  .reply(200, {
    data: [
      {
        name: "Ahmed Mostafa",
        img: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        subject: "Math101",
        Announcment:
          "Hello my Heros!!,I just want you to be ready for your exams and foucus on the assignmet"
      },
      {
        name: "Adel Emad",
        img: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        subject: "Math101",
        Announcment: "Have Fun Guys"
      },
      {
        name: "Mohamed Ahmed",
        img: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        subject: "Math101",
        Announcment:
          "Hello my Heros!!,I just want you to be ready for your exams and foucus on the assignmet,do well in your assignment and have fun!!"
      }
    ]
    ///Fake Data
  });

export {fakeQuizesService, fakeAnnouncmentService}