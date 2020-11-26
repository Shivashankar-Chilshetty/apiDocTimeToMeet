define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/meetings/deleteMeeting/:meetingId",
    "title": "Api to cancel the Meeting.",
    "version": "0.1.0",
    "group": "Meeting",
    "name": "Cancel-The-Meeting",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Token for Authentication.(Send authToken as body parameter or as a header) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "meetingId",
            "description": "<p>The Meeting-Id to delete the Meeting details.(Send meetingId as route parameter) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n        \"error\": false,\n        \"message\": \"Meeting Deleted Successfully\",\n        \"status\": 200,\n        \"data\": {\n            \"meetingId\": \"0vNR8uZGl\",\n            \"meetingName\": \"Team Selection\",\n            \"meetingDescription\": \"Need to discuss a few thngs about next year IPL team selection\",\n            \"organizerId\": \"qcbjLr3G\",\n            \"organizerName\": \"Ravi\",\n            \"participantId\": \"tkrdHTxwb\",\n            \"participantName\": \"Ms Dhoni\",\n            \"participantEmail\": \"dhoni@gmail.com\",\n            \"meetingStartDateAndTime\": \"2020-11-22T12:30:00.000Z\",\n            \"meetingEndDateAndTime\": \"2020-11-22T14:30:00.000Z\",\n            \"meetingLocation\": \"Burj Khalifa, 1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates\",\n            \"_id\": \"5fba801f84ffa014681d4b63\",\n            \"__v\": 0\n        }\n      }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"Failed To delete the Meeting\",\n        \"status\": 500,\n        \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/PROJ-2-Meeting/meeting-backend/app/routes/meeting.js",
    "groupTitle": "Meeting"
  },
  {
    "type": "get",
    "url": "/api/v1/meetings/viewAllMeetings/:participantId/query",
    "title": "API to Get All Meetings details of a particular participant/user",
    "version": "0.1.0",
    "group": "Meeting",
    "name": "Get-All-Meetings-Of-Participant",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "participantId",
            "description": "<p>The participantId to find particular User.(Send participantId as a route parameter) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n        \"error\": false,\n        \"message\": \"Meeting Details Found\",\n        \"status\": 200,\n        \"data\": [\n            {\n                \"meetingId\": \"0bzRrzXDP\",\n                \"meetingName\": \"Team Selection\",\n                \"meetingDescription\": \"Need to discuss a few thngs about next year IPL team selection\",\n                \"organizerId\": \"FqcbjLr3G\",\n                \"organizerName\": \"Ravi\",\n                \"participantId\": \"tkrdHTxwb\",\n                \"participantName\": \"Ms Dhoni\",\n                \"participantEmail\": \"dhoni@gmail.com\",\n                \"meetingStartDateAndTime\": \"2020-11-22T12:30:00.000Z\",\n                \"meetingEndDateAndTime\": \"2020-11-22T14:30:00.000Z\",\n                \"meetingLocation\": \"Burj Khalifa, 1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates\",\n                \"_id\": \"5fba7ede84ffa014681d4b62\",\n                \"__v\": 0\n            },\n            {\n                \"meetingId\": \"0bzRrzXDz\",\n                \"meetingName\": \"Employee Hire\",\n                \"meetingDescription\": \"Interviewing an candidate for MEAN stack developer role\",\n                \"organizerId\": \"FqcbjLr6G\",\n                \"organizerName\": \"Ravi\",\n                \"participantId\": \"tkrdHTxwb\",\n                \"participantName\": \"Ms Dhoni\",\n                \"participantEmail\": \"dhoni@gmail.com\",\n                \"meetingStartDateAndTime\": \"2020-11-22T12:30:00.000Z\",\n                \"meetingEndDateAndTime\": \"2020-11-22T14:30:00.000Z\",\n                \"meetingLocation\": \"Interview Cabin, Tech Park, White-Field, Bangalore\",\n                \"_id\": \"5fba7ede84ffa014681d4b62\",\n                \"__v\": 0\n            }\n          ]\n      }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"Failed To Find Meeting Details\",\n        \"status\": 500,\n        \"data\": null    \n      }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/PROJ-2-Meeting/meeting-backend/app/routes/meeting.js",
    "groupTitle": "Meeting"
  },
  {
    "type": "get",
    "url": "/api/v1/meetings/getMeetingById/:meetingId/query",
    "title": "API to Get One Meeting detail.",
    "version": "0.1.0",
    "group": "Meeting",
    "name": "Get-Single-Meetings-Of-Participant",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "meetingId",
            "description": "<p>The meetingId to find particular meeting details.(Send meetingId as a route parameter) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\": false,\n        \"message\": \"Meeting details by provided meetingId found\",\n        \"status\": 200,\n        \"data\": {\n            \"meetingId\": \"0bzRrzXDP\",\n            \"meetingName\": \"Team Selection\",\n            \"meetingDescription\": \"Need to discuss a few thngs about next year IPL team selection\",\n            \"organizerId\": \"FqcbjLr3G\",\n            \"organizerName\": \"Ravi\",\n            \"participantId\": \"tkrdHTxwb\",\n            \"participantName\": \"Ms Dhoni\",\n            \"participantEmail\": \"dhoni@gmail.com\",\n            \"meetingStartDateAndTime\": \"2020-11-22T12:30:00.000Z\",\n            \"meetingEndDateAndTime\": \"2020-11-22T14:30:00.000Z\",\n            \"meetingLocation\": \"Burj Khalifa, 1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates\"\n         }\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"failed to find the Meeting details\",\n        \"status\": 500,\n        \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/PROJ-2-Meeting/meeting-backend/app/routes/meeting.js",
    "groupTitle": "Meeting"
  },
  {
    "type": "put",
    "url": "/api/v1/meetings/editMeeting/:meetingId/query",
    "title": "API to Edit a Meeting",
    "version": "0.1.0",
    "group": "Meeting",
    "name": "Meeting-Edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "meetingId",
            "description": "<p>MeetingId of the Meeting. (Send meetingId as a route parameter) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingName",
            "description": "<p>Meeting name/title for the Meeting. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingDescription",
            "description": "<p>Short Description of the Meeting. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "organizerId",
            "description": "<p>AdminId of the organizer who is Schedling the Meeting. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "organizerName",
            "description": "<p>Name of the Organizer who is Schedling Meeting. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "participantId",
            "description": "<p>User-Id of the participant who is invited for the Meeting. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingStartDateAndTime",
            "description": "<p>Start date &amp; time of the Meeting. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingEndDateAndTime",
            "description": "<p>End date &amp; time of the Meeting. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "meetingLocation",
            "description": "<p>Location/Address of the Meeting. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\": false,\n        \"message\": \"Meeting Edited Successfully.\",\n        \"status\": 200,\n        \"data\": {\n            \"meetingId\": \"0bzRrzXDP\",\n            \"meetingName\": \"Team Selection\",\n            \"meetingDescription\": \"Need to discuss a few thngs about next year IPL team selection\",\n            \"organizerId\": \"FqcbjLr3G\",\n            \"organizerName\": \"Ravi\",\n            \"participantId\": \"tkrdHTxwb\",\n            \"participantName\": \"Ms Dhoni\",\n            \"participantEmail\": \"dhoni@gmail.com\",\n            \"meetingStartDateAndTime\": \"2020-11-22T12:30:00.000Z\",\n            \"meetingEndDateAndTime\": \"2020-11-22T14:30:00.000Z\",\n            \"meetingLocation\": \"Burj Khalifa, 1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates\",\n            \"_id\": \"5fba7ede84ffa014681d4b62\",\n            \"__v\": 0\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"Failed to Edit Meeting\",\n        \"status\": 500,\n        \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/PROJ-2-Meeting/meeting-backend/app/routes/meeting.js",
    "groupTitle": "Meeting"
  },
  {
    "type": "post",
    "url": "/api/v1/meetings/addMeeting",
    "title": "Api for scheduling a meeting.",
    "version": "0.1.0",
    "group": "Meeting",
    "name": "Schedule-The-Meeting",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Token for Authentication. (Send authToken as body parameter or as a header) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingName",
            "description": "<p>Meeting name/title for the Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingDescription",
            "description": "<p>Short Description of the Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "organizerId",
            "description": "<p>AdminId of the organizer who is Schedling the Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "organizerName",
            "description": "<p>Name of the Organizer who is Schedling Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "participantId",
            "description": "<p>User-Id of the participant who is invited for the Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingStartDateAndTime",
            "description": "<p>Start date &amp; time of the Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingEndDateAndTime",
            "description": "<p>End date &amp; time of the Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "meetingLocation",
            "description": "<p>Location/Address of the Meeting. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\": false,\n        \"message\": \"Meeeting Scheduled Successfully\",\n        \"status\": 200,\n        \"data\": {\n            \"meetingId\": \"0bzRrzXDP\",\n            \"meetingName\": \"Team Selection\",\n            \"meetingDescription\": \"Need to discuss a few thngs about next year IPL team selection\",\n            \"organizerId\": \"FqcbjLr3G\",\n            \"organizerName\": \"Ravi\",\n            \"participantId\": \"tkrdHTxwb\",\n            \"participantName\": \"Ms Dhoni\",\n            \"participantEmail\": \"dhoni@gmail.com\",\n            \"meetingStartDateAndTime\": \"2020-11-22T12:30:00.000Z\",\n            \"meetingEndDateAndTime\": \"2020-11-22T14:30:00.000Z\",\n            \"meetingLocation\": \"Burj Khalifa, 1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates\"\n          }\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"Failed to create new meeting\",\n        \"status\": 500,\n        \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/PROJ-2-Meeting/meeting-backend/app/routes/meeting.js",
    "groupTitle": "Meeting"
  },
  {
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for user login.",
    "group": "User",
    "version": "0.1.0",
    "name": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"error\": false,\n\t\"message\": \"Login Successful\",\n\t\"status\": 200,\n\t\"data\": {\n\t\t\"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6ImNsNklCU2ZlNiIsImlhdCI6MTYwMTczMzY1MDYxOSwiZXhwIjoxNjAxODIwMDUwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJleHBlbnNlcyIsImRhdGEiOnsidXNlcklkIjoiemVCbnJnYVlJIiwiZmlyc3ROYW1lIjoidGVzdCIsImxhc3ROYW1lIjoidGxuYW1lIiwidmFsaWRhdGlvblRva2VuIjoiIiwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsIm1vYmlsZU51bWJlciI6ODg5OTc3ODg5LCJjb3VudHJ5Q29kZSI6IjkxIn19.65NcSD5dVAmIuLN1KiRbsP8FFhMBMmSboWBV3ESY3Rs\",\n\t\t\"userDetails\": {\n\t\t  \"userId\": \"zeBnrgaYI\",\n\t\t  \"firstName\": \"test\",\n\t\t  \"lastName\": \"tlname\",\n\t\t  \"validationToken\": \"\",\n\t\t  \"email\": \"test@gmail.com\",\n\t\t  \"mobileNumber\": 889977889,\n\t\t  \"countryCode\": \"91\",\n\t\t  \"permissions\": \"user\"\n\t\t}\n\t}\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t\t\"error\": true,\n\t\t\"message\": \"Wrong Passsword.Login Failed\",\n\t\t\"status\": 400,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/PROJ-2-Meeting/meeting-backend/app/routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "user logout",
    "version": "0.1.0",
    "group": "User",
    "name": "Logout",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"User LogedOut successfully\",\n\t\t\"status\": 200,\n\t\t\"data\": null\n\t\t    \n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t\t\"error\": true,\n\t\t\"message\": \"Failed To logout\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/PROJ-2-Meeting/meeting-backend/app/routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/v1/users/forgotpassword",
    "title": "reset/forgot the password",
    "version": "0.1.0",
    "group": "User",
    "name": "Reset-Password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\t\"error\": false,\n\t\t\t\"message\": \"password reset link sent\",\n\t\t\t\"status\": 200,\n\t\t\t\"data\": {\n\t\t\t\t\"n\": 1,\n\t\t\t\t\"nModified\": 1,\n\t\t\t\t\"ok\": 1\n\t\t\t}\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t\t\"error\": true,\n\t\t\"message\": \"Failed To reset user Password\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/PROJ-2-Meeting/meeting-backend/app/routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v1/users/savepassword",
    "title": "save new password",
    "version": "0.1.0",
    "group": "User",
    "name": "Save-New-Password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "validationToken",
            "description": "<p>The token for authentication.(Send validationToken as body parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The new password.(Send password as body parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t  \"error\": false,\n\t\t  \"message\": \"Password Update Successfully\",\n\t\t  \"status\": 200,\n\t\t  \"data\": {\n\t\t\t\"n\": 1,\n\t\t\t\"nModified\": 1,\n\t\t\t\"ok\": 1\n\t\t   }\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t\t \"error\": true,\n\t\t \"message\": \"Failed To reset user Password'\",\n\t\t \"status\": 500,\n\t\t \"data\": null\n\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/PROJ-2-Meeting/meeting-backend/app/routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api for user signup.",
    "version": "0.1.0",
    "group": "User",
    "name": "Signup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": "<p>countryCode of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\"error\": false,\n\t\"message\": \"User created\",\n\t\"status\": 200,\n\t\"data\": {\n\t\t\"userId\": \"zeBnrgaYI\",\n\t\t\"firstName\": \"user1\",\n\t\t\"lastName\": \"user1surname\",\n\t\t\"email\": \"user1@gmail.com\",\n\t\t\"permissions\": \"user\"\n\t}\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t\t\"error\": true,\n\t\t\"message\": \"Failed to create new user\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/PROJ-2-Meeting/meeting-backend/app/routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/v1/users/:userId/details",
    "title": "Get single users",
    "version": "0.1.0",
    "group": "User",
    "name": "getSingleUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The userId to find particular User.(Send userId as  route parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\t\"error\": false,\n\t\t\"message\": \"User Details Found\",\n\t\t\"status\": 200,\n\t\t\"data\": {\n\t\t\t\"userId\": \"YZbEHperv\",\n\t\t\t\"firstName\": \"user3\",\n\t\t\t\"lastName\": \"user3 surname\",\n\t\t\t\"email\": \"user3@gmail.com\",\n\t\t\t\"permissions\": \"user\"\n\t\t}\n\t   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n\n{\n\t\t\"error\": true,\n\t\t\"message\": \"Failed To Find User Details\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/PROJ-2-Meeting/meeting-backend/app/routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/v1/users/view/all",
    "title": "Get all users",
    "version": "0.1.0",
    "group": "User",
    "name": "getUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t \"error\": false,\n\t\t \"message\": \"All User Details Found\",\n\t\t \"status\": 200,\n\t\t \"data\": [\n\t\t\t\t   {\n\t\t\t\t   \"userId\": \"ic4Wn5pPT\",\n\t\t\t\t   \"firstName\": \"some-user\",\n\t\t\t\t   \"lastName\": \"one-lastname\",\n\t\t\t\t   \"email\": \"someone@mail.com\",\n\t\t\t\t   \"permissions\": \"user\"\n\t\t\t\t },\n\t\t\t\t {\n\t\t\t\t   \"userId\": \"gRvcZrjn_\",\n\t\t\t\t   \"firstName\": \"Suresh\",\n\t\t\t\t   \"lastName\": \"Raina\",\n\t\t\t\t   \"email\": \"suresh@gmail.com\",\n\t\t\t\t   \"permissions\": \"user\"\n\t\t\t\t }\n\t\t\t]\n\t   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t\t\"error\": true,\n\t\t\"message\": \"Failed To Find all user details\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/PROJ-2-Meeting/meeting-backend/app/routes/user.js",
    "groupTitle": "User"
  }
] });
