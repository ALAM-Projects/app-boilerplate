async function GET(url = "", data = {}, token?: string) {
  try {
    const headers: HeadersInit = {};
    if (token) headers.Authorization = `Bearer ${token}`;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}` +
        url +
        "?" +
        new URLSearchParams(data),
      {
        method: "GET",
        headers,
      }
    );
    if (!res.ok) {
      console.error(`HTTP call failed with status: ${res.status}`);
    }
    return await res.json();
  } catch (e) {
    console.error(e);
  }
}

// Example POST method implementation:
async function POST(
  url = "",
  data = {},
  token?: string,
  includeFile = false,
  receiveJson = true
) {
  try {
    // Default options are marked with *
    const headers: HeadersInit = {};
    if (!includeFile) headers["Content-Type"] = "application/json";
    if (token) headers.Authorization = `Bearer ${token}`;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api` + url,
      {
        method: "POST",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers,
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      }
    );
    return receiveJson ? await response.json() : response; // parses JSON response into native JavaScript objects
  } catch (e) {
    console.error(e);
  }
}

async function POSTFILE(
  url = "",
  data: any,
  token?: string,
  includeFile = false,
  receiveJson = true
) {
  try {
    // Default options are marked with *
    const headers: HeadersInit = {};
    if (!includeFile) headers["Content-Type"] = "application/json";
    if (token) headers.Authorization = `Bearer ${token}`;
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}` + url, {
      method: "POST",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers,
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: data, // body data type must match "Content-Type" header
    });
    return receiveJson ? await response.json() : response; // parses JSON response into native JavaScript objects
  } catch (e) {
    console.error(e);
  }
}

// Example PUT method implementation:
async function PUT(
  url = "",
  data = {},
  token?: string,
  includeFile = false,
  receiveJson = true
) {
  try {
    // Default options are marked with *
    const headers: HeadersInit = {};
    if (!includeFile) headers["Content-Type"] = "application/json";
    if (token) headers.Authorization = `Bearer ${token}`;
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}` + url, {
      method: "PUT",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers,
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return receiveJson ? await response.json() : response; // parses JSON response into native JavaScript objects
  } catch (e) {
    console.error(e);
  }
}

// Example PUT method implementation:
async function PATCH(
  url = "",
  data = {},
  token?: string,
  includeFile = false,
  receiveJson = false
) {
  try {
    // Default options are marked with *
    const headers: HeadersInit = {};
    if (!includeFile) headers["Content-Type"] = "application/json";
    if (token) headers.Authorization = `Bearer ${token}`;
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}` + url, {
      method: "PATCH",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers,
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return receiveJson ? await response.json() : response; // parses JSON response into native JavaScript objects
  } catch (e) {
    console.error(e);
  }
}

// Example DELETE method implementation:
async function DELETE(
  url = "",
  data = {},
  token?: string,
  includeFile = false,
  receiveJson = true
) {
  try {
    // Default options are marked with *
    const headers: HeadersInit = {};
    if (!includeFile) headers["Content-Type"] = "application/json";
    if (token) headers.Authorization = `Bearer ${token}`;
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}` + url, {
      method: "DELETE",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers,
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return receiveJson ? await response.json() : response; // parses JSON response into native JavaScript objects
  } catch (e) {
    console.error(e);
  }
}

export const defaultActions = {
  POST,
  POSTFILE,
  GET,
  PATCH,
  PUT,
  DELETE,
};
