{
	"info": {
		"_postman_id": "c13ca2f1-e25f-44c4-ad24-d8c589d941b5",
		"name": "06-Jobs-API",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "39317449"
	},
	"item": [
		{
			"name": "Register User",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"const jsonData = pm.response.json()\r",
							"pm.globals.set(\"accessToken\", jsonData.token)"
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "{{accessToken}}",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"name\": \"rafa\",\r\n    \"email\": \"rafa@email.com\",\r\n    \"password\": \"secret\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{URL}}/auth/register",
					"host": [
						"{{URL}}"
					],
					"path": [
						"auth",
						"register"
					]
				}
			},
			"response": []
		},
		{
			"name": "Login",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"const jsonData = pm.response.json()\r",
							"pm.globals.set(\"accessToken\", jsonData.token)"
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "{{accessToken}}",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"email\": \"peter12@email.com\",\r\n    \"password\": \"secret\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{URL}}/auth/login",
					"host": [
						"{{URL}}"
					],
					"path": [
						"auth",
						"login"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create Job",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "{{accessToken}}",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzI4NDEyNjQ5ZTNlZjUxMmMwODBjZjYiLCJuYW1lIjoicGV0ZXIiLCJpYXQiOjE3MzA3NTIyMjMsImV4cCI6MTczMzM0NDIyM30.mXWDpoU4tQ6u51weDh3xyGtCgp0ORXxOBbsEdiv8oeM",
						"type": "text",
						"disabled": true
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"company\":\"mercado livre\",\r\n    \"position\":\"intern\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{URL}}/jobs",
					"host": [
						"{{URL}}"
					],
					"path": [
						"jobs"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Jobs",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "{{accessToken}}",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [
					{
						"key": "Authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzI4NDEyNjQ5ZTNlZjUxMmMwODBjZjYiLCJuYW1lIjoicGV0ZXIiLCJpYXQiOjE3MzA3NzYyNTEsImV4cCI6MTczMzM2ODI1MX0.jhzLxVWp7e60BEOp7aI6TsUqhhNYw97N9GytE-CZ0QE",
						"type": "text",
						"disabled": true
					}
				],
				"url": {
					"raw": "{{URL}}/jobs",
					"host": [
						"{{URL}}"
					],
					"path": [
						"jobs"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Job",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "{{accessToken}}",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{URL}}/jobs/6729a3a61d471e5334fad430",
					"host": [
						"{{URL}}"
					],
					"path": [
						"jobs",
						"6729a3a61d471e5334fad430"
					]
				}
			},
			"response": []
		},
		{
			"name": "Update Job",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "{{accessToken}}",
							"type": "string"
						}
					]
				},
				"method": "PATCH",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"company\":\"mercado livre\",\r\n    \"position\":\"estagiário\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{URL}}/jobs/6729a3a61d471e5334fad430",
					"host": [
						"{{URL}}"
					],
					"path": [
						"jobs",
						"6729a3a61d471e5334fad430"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete Job",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "{{accessToken}}",
							"type": "string"
						}
					]
				},
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "{{URL}}/jobs/6729a3a61d471e5334fad430",
					"host": [
						"{{URL}}"
					],
					"path": [
						"jobs",
						"6729a3a61d471e5334fad430"
					]
				}
			},
			"response": []
		}
	]
}