const getRequests = async () => {
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
export { getRequests };



const createRequest = async (e, requestFromForm) => {
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

    this.setState({serviceRequests: [...this.state.serviceRequests, parsedResponse]})
    console.log(parsedResponse, 'this is the New Service Request');


  } catch(err){
    console.log('error')
    console.log(err)
  }
};
export { createRequest };



const updateRequest = async (requestId, state) => {
  try {

    const url = 'http://localhost:8040/api/servicerequests/' + requestId;

    const serverResponse = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(state),
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
