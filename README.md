# DPR
this is a primary project of NodeJS study.
1. First, we create a JS file named server-demo.js, save and run "node server.js". plus, we get a stdout "hello world", for more information please link to "https://www.runoob.com/nodejs/nodejs-http-server.html"
OK, we carry out the first step.

2. So, what's the goal of our primary project? obviously ,we should make it simple and practical.
Users can use our app through a browser;
When the user requests `http://domain/start`, they can see a welcome page with a file upload form;
When the user requests `http://domain/start`, they can see a welcome page with a file upload form, whick is done;
After uploading, the image will be displayed on the page.

3. Em, it will be a good ideal to think about how to do it first.
When using Node.js, we not only implement an application, but also make entire HTTP server available now. In fact, our web application and the corresponding web server are basically the same.

4. Let's do it.
Focus on here:
1st Step: please following the comment of server.js for more details.
Create a file named server.js in the root directory of your project.
2nd Step: create a JS file named index.js.
then we can launch our app from our main script now, and get the same results.
3rd Step: create router.js.
4th Step: create a module named requestHandlers.js.
......
Run the project :
node index.js
