export const ENVIRONMENT = process.env.NODE_ENV;
export const DEV_BASE_URL = "http://localhost:3001";
export const PROD_BASE_URL = "http://notlocalhost:3001";
export const BASE_URL =
  ENVIRONMENT != "production" ? DEV_BASE_URL : PROD_BASE_URL;
export const PROJECT_NAME = "Disney Trip Calculator";