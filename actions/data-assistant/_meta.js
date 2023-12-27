// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');

module.exports = async function (params, context) {
  return {
    "openapi": "3.1.0",
    "info": {
      "title": "Data Assistant",
      "description": "Help me with data.",
      "version": "v1.0.0"
    },
    "servers": [
      {
        "url": `https://${context.req.host}`
      }
    ],
    "paths": {
      "/save": {
        "post": {
          "description": "Save records to database",
          "operationId": "SaveRecords",
          "requestBody": {
              "required": true,
              "content": {
                "application/json": {
                   "schema": {
                     "type": "object",
                     "properties": {
                       "table": {
                         "type": "string",
                         "description": "The table name.",
                       },
                       "data": {
                         "type": "string",
                         "description": "The json string data send to database.",
                       },
                     }
                   }
                }
              }
          },
          "deprecated": false
        }
      },
      "/list": {
        "post": {
          "description": "List records by condition",
          "operationId": "ListRecords",
          "requestBody": {
              "required": true,
              "content": {
                "application/json": {
                   "schema": {
                     "type": "object",
                     "properties": {
                       "table": {
                         "type": "string",
                         "description": "The table name.",
                       },
                       "condition": {
                         "type": "string",
                         "description": "The query condition string.",
                       },
                       "order": {
                         "type": "string",
                         "description": "The order string.",
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
  };
};
