import axios from "axios";

const URL = "http://localhost:3001/persons";

const getAll = () => {
  const req = axios.get(URL);
  return req.then((res) => res.data);
};

const create = (personObject) => {
  const req = axios.post(URL, personObject);
  return req.then((res) => res.data);
};

const update = (id, personObject) => {
  const req = axios.put(`${URL}/${id}`, personObject);
  return req.then((res) => res.data);
};

export default { getAll, create, update };
