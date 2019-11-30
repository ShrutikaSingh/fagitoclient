import axios from 'axios'
const server = 'https://fagito-api.herokuapp.com';

class Services {
  CreateInstance = (authToken) => {
    let headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
    if (authToken) {
      headers.Authorization = authToken;
    }
    const instance = axios.create({
      baseURL: server,
      timeout: 2000,
      headers
    });

    return instance;
  }

  postRequest = async (endpoint, payload, authToken) => {
    const instance = this.CreateInstance(authToken);
    let response = {};
    try {
      const result = await instance.post(endpoint, payload);
      response.message = result.data;
      response.status = result.status;
    } catch (err) {
      if (err.response) {
        response.error = err.response.data;
        response.status = err.response.status;
      } else {
        response.error = 'Unable to connect to server';
        response.status = null;
      }
    }
    return response;
  }

  getRequest = async (endpoint, params, authToken) => {
    const instance = this.CreateInstance(authToken);
    let response = {};
    try {
      const result = await instance.get(endpoint, { params });
      response.message = result.data;
      response.status = result.status;
    } catch (err) {
      if (err.response) {
        response.error = err.response.data;
        response.status = err.response.status;
      } else {
        response.error = 'Unable to connect to server';
        response.status = null;
      }
    }
    return response;
  }

  /******************************************************************************************* */
  //Method to use when someone submits the ContactUs form
  /*
   The following structure is expected for the payload with the following type verified and validated.
    Name: { type: String, required: true },
    Contact: { type: String, maxlength: 10 },
    Email: { type: String },
    Message: { type: String, required: true }
  */

  sendFeedback = async (payload) => {
    const endpoint = '/api/feedback';
    return await this.postRequest(endpoint, payload);
  }

  getFeedbacks = async () => {
    const endpoint = '/api/feedback';
    return await this.getRequest(endpoint);
  }

  /******************************************************************************************* */
  //Method to use when client registers their restaurant i.e. client submits signup form
  /*
   The following structure is expected for the payload with the following type verified and validated.
      Name: { type: String, required: true },
      Owner: { type: String, required: true },
      Address: { type: addressSchema, required: true },
      Contact: {
        type: String, required: true, maxlength: 10, unique: true
      },
      Email: { type: String, required: true, unique: true },
      Password: { type: String, required: true },
      GSTIN: Number,
      About: String,
  */
  registerClient = async (payload) => {
    const endpoint = '/api/clients/';
    return await this.postRequest(endpoint, payload);
  }


  /******************************************************************************************* */
  //Method to obtain client token i.e. when client submits login form
  /**
   * The following structure is expected for the payload with the following type.
      username: String
      password: String
      NOTE: username can be contact or email of the client.
  */
  getClientToken = async (payload) => {
    const endpoint = '/api/clients/auth';
    return await this.postRequest(endpoint, payload);
  }

  /******************************************************************************************* */
}

export default Services;