#!/bin/sh

echo -e "\nhome page"
curl -s 127.0.0.1:3000

echo -e "\ncreate user"
curl -s -X POST -H "Content-Type: application/json" -d '{"name":"test", "password":"1234", "email":"bob@aol.com"}' 127.0.0.1:3000/register

echo -e "\ntest static route"
curl -s 127.0.0.1:3000/index.html
