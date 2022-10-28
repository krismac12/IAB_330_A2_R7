### Build Docker image 
docker build -t flatalex123/iab_330_a2_r7:latest .

### Run Docker image
docker run -e DB_ADDRESS="<key>" -p 3001:3001 flatalex123/iab_330_a2_r7:latest

docker run -it --mount src="F:/Dropbox/QUT/Year 4 sem 2/IAB/A2/IAB_330_A2_R7/db",target=/usr/app/server/db,type=bind -p 3001:3001 flatalex123/iab_330_a2_r7:latest

