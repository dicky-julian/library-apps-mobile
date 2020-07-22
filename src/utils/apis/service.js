const baseUrl = 'http://192.168.43.82:3000';

const service = {
    FETCH_LOGIN: `${baseUrl}/login`,
    FETCH_REGISTER: `${baseUrl}/register`,
    GET_AUTHOR: `${baseUrl}/author`,
    GET_BOOK: `${baseUrl}/book`,
    GET_GENRE: `${baseUrl}/genre`,
    GET_TRANSACTION: `${baseUrl}/transaction`,
}

const config = {
    AUTHORIZATION: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsInVzZXJuYW1lIjoibmFiaWxhIiwiZnVsbG5hbWUiOiJOYWJpbGEgUmFobWFkYW50aSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU5NDEyMjIzMX0.gYou-6jDKrVvXd7P2Ml3mgbf_T5NC5K885yCfqlUKS8'
}

export {
    baseUrl,
    service,
    config
}