#gh-pages

ng build --prod --base-href "https://nikuzejl.github.io/CollegeGuide/"
git add .
git commit -m "new changes"
git push

#Angular core and CLI and update

#Docker
Start a container: docker container start name
Stop a container: docker container stop name
Delete: docker container rm stop name

docker container ls -a

path used for docker building:
in angular.js
          "options": {
            "outputPath": "dist/college-guide",
             ...
            }

Does github pages require /docs ?

docker run -p 8000:8080 image-name
