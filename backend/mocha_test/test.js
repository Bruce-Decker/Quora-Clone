var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
let should = chai.should();
chai.use(chaiHttp);


// describe('/GET questions for one user', () => {
//     it('it should GET questions for the user', (done) => {
//       chai.request(server)
//           .get('/question/dashboard?email=steve@gmail.com')
//           .end((err, res) => {
//                 res.should.have.status(200);
               
//             done();
//           });
//     });
// });

describe('/GET contents for one user based on certain criteria', () => {
    it('it should GET questions for the user', (done) => {
      chai.request(server)
          .get('/question/getQuestion/2')
          .end((err, res) => {
                res.should.have.status(200);
               
            done();
          });
    });
});


describe('/GET contents for one user based on certain criteria', () => {
    it('it should GET questions for the user', (done) => {
      chai.request(server)
          .get('/question/getQuestion/5')
          .end((err, res) => {
                res.should.have.status(200);
               
            done();
          });
    });
});