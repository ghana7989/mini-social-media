const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://ghana-social-media.herokuapp.com";

module.exports = baseUrl;
