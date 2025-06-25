//get datas

export const get = async (url, options = {}) => {
  try {
    options.method = "GET";
    options.mode = "cors";
    options.headers = {
      ...(options.headers || {}),
      DOLAPIKEY: import.meta.env.VITE_DOLIBARR_KEY,
      Accept: "application/json",
      "Content-type": "application/json",
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      const error = await response.json();
      return {
        isSuccess: false,
        ...error,
      };
    }
    return await response.json();
  } catch (error) {
    return {
      isSuccess: false,
      error,
    };
  }
};

//insert datas

export const post = async (url, data, options = {}) => {
  try {
    options.method = "POST";
    options.data = data;
    options.headers = {
      ...options.headers,
      Accept: "application/json",
      "Content-type": "application/json",
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      const error = await response.json();
      return {
        isSuccess: false,
        ...error,
      };
    }
    return await response.json();
  } catch (error) {
    return {
      isSuccess: false,
      error,
    };
  }
};

// update datas
export const put = async (url, data, options = {}) => {
  try {
    options.method = "PUT";
    options.data = data;
    options.headers = {
      ...options.headers,
      Accept: "application/json",
      "Content-type": "application/json",
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      const error = await response.json();
      return {
        isSuccess: false,
        ...error,
      };
    }
    return await response.json();
  } catch (error) {
    return {
      isSuccess: false,
      error,
    };
  }
};

//delete datas
// update datas
export const Delete = async (url, options = {}) => {
  try {
    options.method = "GET";
    options.headers = {
      ...options.headers,
      Accept: "application/json",
      "Content-type": "application/json",
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      const error = await response.json();
      return {
        isSuccess: false,
        ...error,
      };
    }
    return await response.json();
  } catch (error) {
    return {
      isSuccess: false,
      error,
    };
  }
};
