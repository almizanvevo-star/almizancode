docker stop almizan
docker rm almizan
docker build -t almizan .
docker run -d --name almizan -p 20128:20128 --env-file .env -v almizan-data:/app/data almizan
