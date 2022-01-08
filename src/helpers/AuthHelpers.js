import axios from "axios";

const API_URL = "https://samoudianas.xyz/node_api/graphql";

export const login = async (email, password) => {
  if (email.trim().length === 0 || password.trim().length === 0) {
    return;
  }

  try {
    let result = await axios.post(
      API_URL,
      {
        query: `
        query {
          login(email: "${email}", password: "${password}") {
            userId
            token
            tokenExpiration
          }
        }
      `,
      },
      { headers: "Content-Type : application/json" }
    );

    if (result.status === 200) {
      return result;
    }
  } catch (err) {
    console.log(err);
  }
};
