import Cookies from 'js-cookie';

const getAuthorizationToken = async () => {
  const token = await Cookies.get('Authorization') || '';
  if (token) {
    return token;
  }
};
const removeAuthorizationToken = async () => {
  await Cookies.remove('Authorization');
};
const getRefreshToken = () => {
  return Cookies.get('refresh') || '';
};
const ApiHeaderOptions = async (content_type?: "application/json") => {
  return {
    headers: {
      'Content-Type': content_type,
      'Authorization': await getAuthorizationToken(),
    }
  }
}
export { ApiHeaderOptions, getAuthorizationToken, getRefreshToken,removeAuthorizationToken };