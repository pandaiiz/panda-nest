docker build -t nest-prisma-server .
docker run -d -t -p 7000:7000 nest-prisma-server