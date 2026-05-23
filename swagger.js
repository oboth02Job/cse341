const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Users Api",
    description: "Users Api",
  },
  host: "cse341-kf7q.onrender.com",
  schemes: ["http"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

//This will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc)