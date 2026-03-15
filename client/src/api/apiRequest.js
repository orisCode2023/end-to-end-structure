const BASE_URL = 'http://localhost:3000';

export async function apiRequestres(path, method, bodyData) {
  try {
    const response = await fetch(BASE_URL + path, {
      method: method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });
    if (!response) {
      throw new Error("login faild");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("error login", error.message);
    throw error;
  }
}
// async function apiRequset(url: string, body?: any){
//     try {
//         const option : RequestInit = {
//             method, 
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         };
//         if (body) {
//             option.body = JSON.stringify(body);
//         }
//         const response = await fetch(url, option);
//         if (!response.ok){
//             throw new Error(`request failed with status ${response.status}`);
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error during API requset', error);
//         throw error;
//     }
// } 