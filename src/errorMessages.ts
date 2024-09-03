export const BadRequest = (message: string) => {
  return { statusCode: 400, message };
};
export const UnAuthorized = (message: string) => {
  return { statusCode: 401, message };
};
export const NotFound = (message: string) => {
  return { statusCode: 404, message };
};