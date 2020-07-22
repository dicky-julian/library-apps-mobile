import jwtDecode from 'jwt-decode';

const decodeToken = token => {
  const tokenData = jwtDecode(token);
  return tokenData;
}

export default decodeToken;