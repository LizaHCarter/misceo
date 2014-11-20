#!/bin/sh

echo -e "\nhome page"
curl -s 127.0.0.1:3000

echo -e "\nCreate user"
curl -s -X POST -H "Content-Type: application/json" -d '{"name":"test", "password":"1234", "email":"bob@aol.com"}' 127.0.0.1:3000/register

echo -e "\nTest Login Cookie Set"
curl -X POST -D - -H "Content-Type: application/json" -d '{"password":"1234", "email":"bob@aol.com"}' 127.0.0.1:3000/login

