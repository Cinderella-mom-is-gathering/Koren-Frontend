export const Environment = {
  LOGGING_LEVEL: process.env.REACT_APP_LOGGING_LEVEL || "info",
  CONNECTION: process.env.REACT_APP_CONNECTION || "wallet",
  CONTRACT_ADDRESS: process.env.REACT_APP_CONTRACT_ADDRESS,
};
