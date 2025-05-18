# Updating GitHub Page
`ng build --configuration production --base-href "https://nikuzejl.github.io/uni-guide/"`  
`git add .`  
`git commit -m "cosmetic improvements changes"`  
`git push --force`  

## Future improvements
Stick nav bar  
Titles for different sections  
Bigger font size in nav bar  
Add more text and sections  

# Docker
Start a container: `docker container start name`  
Stop a container: `docker container stop name`  
Delete: `docker container rm stop name`  
List containers: `docker container ls -a`  
Run docker image: `docker run -p 8000:8080 image-name`  

Docker build path in angular.js:
          "options": {
            "outputPath": "dist/uni-guide",
             ...
            }

Does github pages require /docs?


