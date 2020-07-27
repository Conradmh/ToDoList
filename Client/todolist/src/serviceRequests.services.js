const getAllRequests = async () => {
  try {
    const serviceRequests = await
    fetch("http://localhost:8040/api/servicerequests")

    const responseRequests = await serviceRequests.json();

      // this.setState({
      // serviceRequests: responseRequests
      // });
      return responseRequests
  } catch (err) {
      console.log(err);
  }
};
export { getAllRequests };

const getAllRequestsByUserId = async (userId) => {
  try {
    const serviceRequests = await
    fetch("http://localhost:8040/api/servicerequests/:userId")

    const responseRequests = await serviceRequests.json();

      // this.setState({
      // serviceRequests: responseRequests
      // });
      return responseRequests
  } catch (err) {
      console.log(err);
  }
};
export { getAllRequestsByUserId };

const getActiveRequests = async (sortOrder = 'ASC', sortKey = 'createdAt') => {

  try {
    const activeServiceRequests = await
    fetch(`http://localhost:8040/api/servicerequests?sortKey=${sortKey}&sortOrder=${sortOrder}`)

    const responseRequests = await activeServiceRequests.json();

      // this.setState({
      // serviceRequests: responseRequests
      // });
      return responseRequests
  } catch (err) {
      console.log(err);
  }
};
export { getActiveRequests };

export const getServiceRequestByPk = async (id) => {
  try {
    const foundServiceRequest = await fetch(`http://localhost:8040/api/servicerequests/${id}`)

    const parsedResponse = await foundServiceRequest.json();
    console.log(parsedResponse, 'this is parsedResponse in findByID');
    return parsedResponse
  } catch (err) {
    console.log(err);
  }
};


const createRequest = async (requestFromForm) => {
  console.log(requestFromForm);
  try {

    const createdRequestResponse = await
        fetch("http://localhost:8040/api/servicerequests", {
      method: 'POST',
      body: JSON.stringify(requestFromForm),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const parsedResponse = await createdRequestResponse.json();

    console.log(parsedResponse, 'this is the New Service Request');
    return parsedResponse

  } catch(err){
    console.log('error')
    console.log(err)
  }
};
export { createRequest };



const updateRequest = async (serviceRequest) => {
  try {

    const url = 'http://localhost:8040/api/servicerequests/' + serviceRequest.id;

    const serverResponse = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(serviceRequest),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const responseParsed = await serverResponse.json()

    console.log(responseParsed, "this is (update) responseParsed");

    return responseParsed
  } catch(err) {
    console.error(err)
  }
};
export { updateRequest };




const deleteRequest = async (requestId) => {
  console.log(requestId)

  const deleteRequestResponse = await fetch('http://localhost:8040/api/servicerequests/' + requestId, {
      method: 'DELETE',
      credentials: 'include'
  });
  const deleteRequestParsed = await deleteRequestResponse.json();
  console.log(deleteRequestParsed);

};
export { deleteRequest }
