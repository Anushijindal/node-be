import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const generateJwtToken = async (payload: object): Promise<string> => {
  return (
    "Bearer " + jwt.sign(payload, process.env.SECRET_KEY!, { expiresIn: "1d" })
  );
};
export const verifyToken = async (profileToken: string) => {
  try {
    let token: string = profileToken;
    token = token.split(" ")[1];
    const decodedData = jwt.verify(
      token,
      process.env.SECRET_KEY!
    ) as jwt.JwtPayload;
    // console.log(decodedData.id);
    const userId = decodedData.id;
    return userId;
  } catch (err: any) {
    return err.message;
  }
};
