import axios from "axios";

const API_URL = "https://samoudianas.xyz/node_api/graphql";

export const getAppointments = async (setData, setIsLoading) => {
  try {
    let result = await axios.post(
      API_URL,
      {
        query: `
                query {
                    appointments {
                      _id
                      clientName
                      date
                      hour
                      phone
                      index
                    }
                  }
      `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (result.status === 200) {
      setIsLoading(false);
      setData(result.data.data.appointments);
    }
  } catch (err) {
    console.log(err);
  }
};

export const getDataByDate = async (date, setData) => {
  axios
    .post(
      API_URL,
      {
        query: `
      query {
          getAppointmentsByDate(date:"${date.format("YYYY-MM-DD")}"){
            _id
            clientName
            date
            hour
            phone
            index
          }
        }
      `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((result) => {
      return setData([...result.data.data.getAppointmentsByDate]);
    });
};

export const newAppointment = (clientName, phone, date, hour, token) => {
  axios.post(
    API_URL,
    {
      query: `
                mutation{
                  createAppointment(appointmentInput:{clientName:"${clientName}",date:"${date}",phone:"${phone}",hour:"${hour}",}){
                    _id
                    clientName
                    phone
                    date
                    hour
                    index
                    creator{
                      _id
                    }
                  }
          }
      `,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );
};

export const editAppointment = (id, clientName, phone, date, hour) => {
  axios.post(
    API_URL,
    {
      query: `
                mutation{
                  editAppointment(editAppointmentInput:{id:"${id}", clientName:"${clientName}",phone:"${phone}",date:"${date}",hour:"${hour}"}){
                    _id
                    clientName
                  }
                }
      `,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const deleteAppointment = (id) => {
  axios.post(
    API_URL,
    {
      query: `
                mutation {
                  cancelAppointment(id: "${id}"){
                    _id
                  }
                }
      `,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
