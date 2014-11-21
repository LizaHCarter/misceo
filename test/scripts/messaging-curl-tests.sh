#!/bin/sh

echo -e "\n Send a message"
curl -s -v -X POST -H "Content-Type: application/json" -d '{ "from":{ "id":"546f6828753b1e2c0ceb78f2", "name":"mfb" }, "toId":"546f6869753b1e2c0ceb78f3", "body":"hello" }' localhost:8000/messages

##needs a logged in user
## echo -e "\nGet all messages"
## curl -s -X POST -H "Content-Type: application/json" -d '{"name":"test", "password":"1234", "email":"bob@aol.com"}' 127.0.0.1:3000/register

echo -e "\nGet one message"
curl localhost:8000/messages/546f6b17252187ae0c8a1abe

