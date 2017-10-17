import request from 'superagent';
//const baseURL = 'http://localhost:3000';
const baseURL = 

/**
 * Hit the login Api with username and password.
 * Return a promise that resolves with the response.
 * */
export function loginRequestGet() {
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

export function loginRequest(clientId,clientSecret,password,phone) {
    return new Promise((resolve, reject) => {
        request.post(baseURL + '/login')
            .send({ "client_id": clientId, "client_secret": clientSecret, "grant_type": "password", "password": password, "phone": phone })
            .set('accept', 'json')
            .end((err, res) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else {
                        console.log(res.body);
                        resolve(res.body);
                    }
                }
            );
    });
}
