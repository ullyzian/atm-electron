const fetchJSON = async (url, { method = "GET", body, headers, ...rest }) => {
  const response = await fetch(url, {
    method,
    body: body,
    headers,
    rest,
  }).catch((error) => {
    console.log(error);
  });
  const data = await response.json();
  return data;
};

export default fetchJSON;
