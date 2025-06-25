import { Delete, get, post, put } from "./DolibarrApiService";

export const getDatas = async (entityName) => {
  const apiUrl = import.meta.env.VITE_DOLIBARR_URL + entityName;
  const response = await get(apiUrl);

  return response;
};

export const postDatas = async (entityName, data) => {
  const apiUrl = import.meta.env.VITE_DOLIBARR_URL + entityName;
  const response = await post(apiUrl, data);

  return response;
};

export const putDatas = async (entityName, data, id) => {
  const apiUrl = import.meta.env.VITE_DOLIBARR_URL + entityName + "/" + id;
  const response = await put(apiUrl, data);

  return response;
};

export const deleteDatas = async (entityName, id) => {
  const apiUrl = import.meta.env.VITE_DOLIBARR_URL + entityName + "/" + id;
  const response = await Delete(apiUrl);

  return response;
};
