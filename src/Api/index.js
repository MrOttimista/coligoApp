// Mock Data here
import {fakeQuizesService, fakeAnnouncmentService} from "./generateData"
var axios = require('axios');

export default class apiRequests {
  static Quizzes() {
    return axios.get("http://test.coligolms.com/api/quiz");
  }
  static Announcment() {
    return axios.get("http://test.coligolms.com/api/announcement");
  }
}




