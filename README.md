<h1>Introduction</h1><br>

A simple NodeJS server which serves up an HTML Form that posts an image back to the Node Server. The HTML Form uses the <i>action<i> property to form an HTTP request on the client's browser and then the <i>enctype</i> property to ensure the image is encoded in an format NodeJS can parse.

The NodeJS server uses the <a href = "https://www.npmjs.com/package/multer">multer</a> package from NPM to parse <i>multipart/form-data<i> received from the HTML Form post. This parsed image is then saved into a folder within the server. You will be redirected to a fresh upload page after a successful upload.

<h1>Usage</h1><br>

Run 

    npm start

From the project's root folder. This will start a Node Express server on Port 8000. Navigate to

    http://localhost:8000

To view a basic HTML form that will allow you to upload an image of your choice back to the server. Most MIME types (jpeg, png, etc.) should work. Once posted, the image should appear in the /uploads/ folder within the project with a timestamp affixed to the front of the filename. 