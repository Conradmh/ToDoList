const getProperties = async () => {
  try {
    const properties = await
    fetch("http://localhost:8040/api/properties")

    const responseProperties = await properties.json();

      // this.setState({
      // properties: responseProperties
      // });
      return responseProperties
  } catch (err) {
      console.log(err);
  }
};
export { getProperties };

export const getPropertyByPk = async (id) => {
  try {
    const foundProperty = await fetch(`http://localhost:8040/api/properties/${id}`)

    const parsedResponse = await foundProperty.json();
    console.log(parsedResponse, 'this is parsedResponse in findByID');
    return parsedResponse
  } catch (err) {
    console.log(err);
  }
};

const createProperty = async (propertyFromForm) => {
  console.log(propertyFromForm);
  try {

    const createdPropertyResponse = await
        fetch("http://localhost:8040/api/properties", {
      method: 'POST',
      body: JSON.stringify(propertyFromForm),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const parsedResponse = await createdPropertyResponse.json();

    this.setState({properties: [...this.state.properties, parsedResponse]})
    console.log(parsedResponse, 'this is the New Property');


  } catch(err){
    console.log('error')
    console.log(err)
  }
};
export { createProperty };



const updateProperty = async (propertyId, state) => {
  try {

    const url = 'http://localhost:8040/api/properties/' + propertyId;

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
export { updateProperty };




const deleteProperty = async (propertyId) => {
  console.log(propertyId)

  const deletePropertyResponse = await fetch('http://localhost:8040/api/properties/' + propertyId, {
      method: 'DELETE',
      credentials: 'include'
  });
  const deletePropertyParsed = await deletePropertyResponse.json();
  console.log(deletePropertyParsed);
};
export { deleteProperty }
