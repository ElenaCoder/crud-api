```
npm init -y
npm install express dotenv uuid
npm install -D typescript ts-node-dev eslint prettier @types/express @types/node
```

1. Create user:

```
curl -X POST http://localhost:4000/api/users \
     -H "Content-Type: application/json" \
     -d '{
           "username": "jane_doe",
           "age": 30,
           "hobbies": ["cooking", "painting", "cycling"]
         }'
```
result: `{"id":"7ab77505-4288-4ec9-8196-78fa326296c5","username":"jane_doe","age":30,"hobbies":["cooking","painting","cycling"]}`

2. Delete user with `"id": "53aa0cc9-46a4-4194-ad9f-28658dd8e7b3"`:

```
curl -X DELETE http://localhost:4000/api/users/53aa0cc9-46a4-4194-ad9f-28658dd8e7b3
```
3. Create user:

```
curl -X POST http://localhost:4000/api/users \
     -H "Content-Type: application/json" \
     -d '{
           "username": "alex_smith",
           "age": 22,
           "hobbies": ["photography", "traveling", "coding"]
         }'
```
result: `{"id":"da05cbf3-5a16-4697-aded-3d219aebfe4d","username":"alex_smith","age":22,"hobbies":["photography","traveling","coding"]}`

4. Update user info with `"id":"da05cbf3-5a16-4697-aded-3d219aebfe4d"`:

```
curl -X PUT http://localhost:4000/api/users/da05cbf3-5a16-4697-aded-3d219aebfe4d \
     -H "Content-Type: application/json" \
     -d '{
           "username": "alex_smith",
           "age": 23,
           "hobbies": ["photography", "traveling", "coding"]
         }'
```
result: `-4f21-999f-79f1a20d98be{"id":"da05cbf3-5a16-4697-aded-3d219aebfe4d","username":"alex_smith","age":23,"hobbies":["photography","traveling","coding"
]}`

5. Get all users:

```
curl -X GET http://localhost:4000/api/users
```

6. Get requests to non-existing endpoints.
   Server should answer with status code 404 and corresponding human-friendly message
```
curl -i -X GET http://127.0.0.1:4000/some-non/existing/resource
```
response:
```
HTTP/1.1 404 Not Found
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 32
ETag: W/"20-vR0cOg1KTdb3FXDDvNw4n8id4AY"
Date: Sun, 20 Oct 2024 18:50:42 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```