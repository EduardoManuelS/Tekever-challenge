
Challenge
To evaluate your skills and coding style, we would like you to develop a small web application that uses https://pokeapi.co/ API RESTful services
Application

We would like you to build a small application that accomplishes the following:
1. The main screen will then need to present with the Pokemon name and image. You may use any layout.
2. Is redirected to a detail screen explained on step 3
3. The user should see a minimum of six descriptions with info plus your image. You may use any layout.
4. Use pagination
5. Unit & UI tests
6. Adapt UI so it can be displayed in different screen sizes (e.g Mobile)

Procedure
1. Get your API Key as explained within the documentation https://pokeapi.co/
2. Use pure JavaScript and share the project via Github.
3. Write a few sentences (max. 10) about your approach and send it with your solution.
4. You can use third-party libraries with their preference to handle dependencies.
5. Take the opportunity to showcase your coding style and use whatever design pattern
you would frequently have used for this kind of task.
6. Write a small document explaining (e.g. README) explaining how to install and run the web application (or scripts that deploy the application automatically)
7. In the README file also do include the WebHook URL you used in the application

Plus
1. Functional programming
2. Dependency Injection
3. Mark any of them as favorite and send a POST request with the Pokemon data to a
WebHook like http://webhook.site. (include the WebHook URL you used in the web application)
4. Feel free to add more items as you wish



# Tekever-challenge
```
Files

main.js
contains the Class App with contains the logic of the program
on the constructor of the App class we initialize all the properties and listener we will need.
on the startup of the app we render the first pokemon starting on index 1 to index 151
we make a call to poké api and we cache the response in memory if the user tries to get the same pokemon it will use the cached one.
on clicking in the pokemon card we have a popup appear with aditional info about him 


index.html 
contains the container for the pokemon and the pagination buttons

style.css
contains the styles for the pokemon card
```
