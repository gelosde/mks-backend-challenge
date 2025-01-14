import { config } from "dotenv";

config();

interface JWTConfig {
  secretKey: string;
  expiresIn: string | number;
}

const jwtConfig: JWTConfig = {
  secretKey: process.env.SECRET_KEY,
  expiresIn: process.env.EXPIRES_IN,
};

export { jwtConfig };
