const { REACT_APP_API } = process.env;

export const uploadApplication = async (formData) => {
  try {
    const response = await fetch(`${REACT_APP_API}/applications`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (response.ok) return { isSuccess: true, data: data };
    if (response.status === 500)
      return { isSuccess: false, message: data.error.message };

    return {
      isSuccess: false,
      message: "Something went wrong while uploading app",
    };
  } catch (error) {
    return { isSuccess: false, message: "Something went wrong" };
  }
};

export const getApplications = async () => {
  try {
    const response = await fetch(`${REACT_APP_API}/applications`);
    if (response.ok) return { isSuccess: true, data: await response.json() };
    return {
      isSuccess: false,
      message: "Something went wrong while getting the apps",
    };
  } catch (error) {
    return { isSuccess: false, message: "Something went wrong" };
  }
};

export const deleteApplication = async (id) => {
  try {
    const response = await fetch(`${REACT_APP_API}/applications/${id}`, {
      method: "DELETE",
    });
    if (response.ok) return { isSuccess: true, data: await response.json() };
    return {
      isSuccess: false,
      message: "Something went wrong while getting the apps",
    };
  } catch (error) {
    return { isSuccess: false, message: "Something went wrong" };
  }
};
