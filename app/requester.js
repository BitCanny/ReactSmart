import request from 'superagent';
const baseURL = 'http://localhost:3000';

/**
 * Hit the login Api with username and password.
 * Return a promise that resolves with the response.
 * */
export function loginRequest() {
  return new Promise((resolve, reject) => {
    request.get(baseURL + '/login')
      .query({})
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.body);
        }
      }
    );
  });
}
