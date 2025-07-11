// swagger.js
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Customer API Documentation",
      version: "1.0.0",
      description: "API untuk menampilkan data dan summary Customer.csv",
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: ["./customer/routes.js"], // lokasi file dokumentasi
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("📘 Swagger loaded paths:", Object.keys(swaggerSpec.paths));
};

module.exports = setupSwaggerDocs;
