// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');

module.exports = async function (params, context) {
  return {
    "openapi": "3.1.0",
    "info": {
      "title": "The mind maps.",
      "description": "Draw mind maps for me",
      "version": "v1.0.0"
    },
    "servers": [
      {
        "url": `https://${context.req.host}`
      }
    ],
    "paths": {
      "/index": {
        "post": {
          "description": "Draw a mind map",
          "operationId": "GenerateMindMap",
          "requestBody": {
              "required": true,
              "content": {
                "application/json": {
                   "schema": {
                     "type": "object",
                     "properties": {
                       "markdown": {
                         "type": "string",
                         "description": "The Content to draw.",
                       },
                     }
                   }
                }
              }
          },
          "deprecated": false
        }
      }
    },
    "components": {
      "schemas": {}
    }
  }
};
