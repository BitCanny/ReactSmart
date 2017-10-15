import {
  TOGGLE_COLOR,
  REQUEST_START,
  REQUEST_DATA,
} from '../constants/Constants';
import {
    loginRequest,
} from '../requester';

/*
export function performLoginUsingAxios(username,password){
    //Axios is promise based and Superagent is not. They are both asynchronous but since axios waits to resolve the response it gets it appears "slower" than superagent.
    return dispatch => {
        dispatch({ type: EXAMPLE_REQUEST_START });

        let apiBaseUrl = "http://localhost:4000/api/";
        let payload = {
            "email": username,
            "password": password
        };
        axios.post(apiBaseUrl + 'login', payload)
            .then(function (response) {
                console.log(response);
                if (response.data.code == 200) {
                    console.log("Login successfull");
                    var uploadScreen = [];
                    uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
                    self.props.appContext.setState({loginPage: [], uploadScreen: uploadScreen})
                }
                else if (response.data.code == 204) {
                    console.log("Username password do not match");
                    alert("username password do not match")
                }
                else {
                    console.log("Username does not exists");
                    alert("Username does not exist");
                }
                dispatch({ type: EXAMPLE_REQUEST_DATA, data: data });
            })
            .catch(function (error) {
                console.log(error);
                dispatch({ type: EXAMPLE_REQUEST_DATA, data: data });
            });
    }
}
*/

/**Performing an async login  using Superagent as it is faster than axios**/
export function performLoginAsync() {
    return dispatch => {
        dispatch({ type: REQUEST_START });
        loginRequest().then(data => {
            dispatch({ type: REQUEST_DATA, data: data });
        });
    };
}
