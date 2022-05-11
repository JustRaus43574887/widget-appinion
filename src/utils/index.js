import { query, apiEndpoint } from "./constants";

export const fetchData = async (token) => {
  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { id: token },
      }),
    });
    const data = await response.json();
    console.log(data.data.videoWidget);
    return data.data.videoWidget;
  } catch (e) {
    console.log(e);
  }
};
