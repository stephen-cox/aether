define({ "api": [
  {
    "type": "get",
    "url": "/api/v1",
    "title": "Get API status",
    "name": "GetStatus",
    "version": "0.0.1",
    "group": "Core",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Data object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.message",
            "description": "<p>Message from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.api_version",
            "description": "<p>API version requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"data\": [\n    \"message\": \"Hello\",\n    \"api_version\": \"v1\",\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/ApiController.php",
    "groupTitle": "Core"
  },
  {
    "name": "GetDirectoryListing",
    "version": "1.0.0",
    "group": "Filesystem",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path Parameters",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base64 encoded path of directory.</p>"
          }
        ],
        "Query Parameters": [
          {
            "group": "Query Parameters",
            "type": "Boolean",
            "optional": false,
            "field": "recursive",
            "description": "<p>List subdirectories and files.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Data object.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.listing",
            "description": "<p>File and directory listing.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.listing.item",
            "description": "<p>Directory listing item.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.listing.item.type",
            "description": "<p>Listing type; either 'dir' or 'file'.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.listing.item.path",
            "description": "<p>Path to listing item.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.path",
            "description": "<p>Path of listing.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"data\": [\n    \"listing\": [\n      {\n        \"type\": \"file\",\n        \"path\": \"test.txt\",\n      },\n      {\n        \"type\": \"dir\",\n        \"path\": \"test/test.txt\",\n      },\n    ],\n    \"path\": \"/\",\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>There was an error in the filesystem.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"status\": \"error\",\n  \"message\": \"Unable to read filesystem.\"\n}",
          "type": "json"
        }
      ]
    },
    "type": "",
    "url": "",
    "filename": "plugins/Filesystem/src/Controller/Api/ApiController.php",
    "groupTitle": "Filesystem"
  },
  {
    "type": "get",
    "url": "/api/v1/fs/:path/file",
    "title": "Get file",
    "name": "GetFile",
    "version": "1.0.0",
    "group": "Filesystem",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path Parameters",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base64 encoded path of directory.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Data object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content",
            "description": "<p>Base64 encoded file contents.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.path",
            "description": "<p>Path of fetched file.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"data\": [\n    \"content\": \"RmlsZSBjb250ZW50cyB0ZXN0Lgo=\",\n    \"path\": \"/test.txt\",\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "FileNotFound",
            "description": "<p>Requested file wasn't found.</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>There was an error in the filesystem.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 File Not Found\n{\n  \"status\": \"fail\",\n  \"data\": [\n    \"content\": \"\",\n    \"path\": \"/test.txt\",\n    \"message\": \"File not found\",\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"status\": \"error\",\n  \"message\": \"Unable to read filesystem.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "plugins/Filesystem/src/Controller/Api/ApiController.php",
    "groupTitle": "Filesystem"
  },
  {
    "type": "get",
    "url": "/api/v1/fs",
    "title": "Get API status",
    "name": "GetStatus",
    "version": "1.0.0",
    "group": "Filesystem",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Data object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.message",
            "description": "<p>Message from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.api_version",
            "description": "<p>API version requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"data\": [\n    \"message\": \"Hello\",\n    \"api_version\": \"v1\",\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "plugins/Filesystem/src/Controller/Api/ApiController.php",
    "groupTitle": "Filesystem"
  }
] });
