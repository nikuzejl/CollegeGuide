gh-pages
---------
ng build --prod --base-href "https://nikuzejl.github.io/CollegeGuide/"
git add .
git commit -m "new changes"
git push

To-do
-----
Google analytics
https://medium.com/@jefferson.bc/angular-tracking-page-views-with-google-analytics-8aa790581d4b

Icon

Auto reroute to new link
------------------------
  <head>
    <meta http-equiv="refresh" content="0; url='https://nikuzejl.github.io/CollegeGuide/" />
  </head>