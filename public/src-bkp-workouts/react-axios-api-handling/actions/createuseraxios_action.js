import axios from "axios";



export const handleChange = (event, setFormData, formData) => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;
  setFormData({ ...formData, [fieldName]: fieldValue });
};

export const handleSubmit = (event, formData, setStatus) => {
  event.preventDefault();

  console.log("formData====>", formData);

  let payload = {
    name: formData.candidateName,
    job: formData.candidateJob,
  };

  createUserApi(payload, setStatus);
};

export const createUserApi = async (payload, setStatus) => {
  let url = "https://reqres.in/api/candidate";
  let option = {
    "x-api-key": "reqres-free-v1",
  };

  let response = await axios.post(url, payload, { headers: option });
  console.log("response", response);
  // let responseData = await response.json()
  if (response.status != "404") {
    console.log("Entered true");
    setStatus("Reigster success");
  } else {
    console.log("Entered false ");
    setStatus("Reigster Failure");
  }
};
