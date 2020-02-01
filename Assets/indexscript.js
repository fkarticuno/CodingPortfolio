console.log("linked")
var title = [
    "00-RESUME",
    "01-HTML CSS GIT",
    "02-CSS BOOTSTRAP",
    "03-JAVASCRIPT",
    "04-JQUERY",
    "05-TIMERS",
    "06-AJAX",
    "07-FIREBASE",
    "08-PROJECT 1",
    "09-PORTFOLIO UPDATE",
    "10-NODEJS",
    "11-JS CONSTRUCTORS",
    "12-MYSQL",
    "13-EXPRESS",
    "14-HANDLEBARS",
    "15-SEQUELIZE",
    "16-PROJECT 2 Drinking Well",
    "17-PROJECT 2",
    "18-MONGO & MONGOOSE",
    "19-PROJECT 3 MONETA"
]
var desc = [
    "This document outlines my work history and is used in tandem with my coding portfolio to cover more ground.",
    "In this assignment, I built a professional portfolio site using HTML/CSS. These instructions include a short style guide; follow it to design an aesthetically pleasing layout while creating different kinds of complex HTML elements.",
    "In this assignment, I created two different portfolios. The first will be building my portfolio layout using the Bootstrap CSS Framework. The second will be enhancing the portfolio I made last unit with a mobile-responsive layout.",
    "In this assignment, I created one of two possible computer games: Word Guess or Psychic. These apps will run in the browser, and feature dynamically updated HTML and CSS powered by my JavaScript code.",
    "In this assignment, I created another fun and interactive game for web browsers. This time, my app must dynamically update my HTML pages with the jQuery library.",
    "In this assignment, I created a Trivia game using JavaScript for the logic and jQuery to manipulate HTML. I was sure to layout this app with valid HTML and stylish CSS.",
    "In this assignment, I used the GIPHY API to make a dynamic web page that populates with gifs of my choice. To finish this task, I must call the GIPHY API and use JavaScript and jQuery to change the HTML of my site.",
    "In this assignment, I created a train schedule application that incorporates Firebase to host arrival and departure data. my app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.",
    "In this assignment my project goal was to Build Something Awesome. I used xx APIs, AJAX to pull data, utilized at least one new library (animate CSS), had a polished frontend / UI, met good quality coding standards (indentation, scoping, naming), I did use alerts, confirms, or prompts, utilized repeating elements (table, columns, etc), used Bootstrap, added User Input Validation, and deployed it to Github",
    "In this assignment I compiled a portfolio consisting of: links to my GitHub profile & LinkedIn page as well as my email address and phone number, a link to a PDF of my resume, a list of previous projects with titles, descriptions, and demos",
    "In this assignment, I made LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives us back data.",
    "null",
    "In this activity, I created an Amazon-like storefront with the MySQL skills I learned this unit. The app will take in orders from customers and deplete stock from the store's inventory. I Made sure to save and require the MySQL and Inquirer npm packages in my homework files--the app will need them for data input and storage.",
    "In this activity, I built a compatibility-based 'FriendFinder' application -- basically a dating app. This full-stack site will take in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.",
    "null",
    "In this assignment, I created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). I followed the MVC design pattern; used Node and MySQL to query and route data in my app. Then I Sequelized the `Burger` app to provide myself with the most reasonable challenge.",
    "This project used a Node and Express Web Server, is backed by a MySQL Database an ORM, has both GET and POST routes for retrieving and adding new data was deployed using Heroku (with Data), utilizes at least one new library, package, or technology that we had not discussed in class, has a polished frontend / UI, has folder structure that meets MVC Paradigm and meets good quality coding standards (indentation, scoping, naming).",
    "null",
    "In this assignment, I created a web app that lets users view and leave comments on the latest news. But I did not actually write any articles; instead, I flex my Mongoose and Cheerio muscles to scrape news from another site.",
    "Moneta is a platform for patients at any stage of Alzheimer's/Dementia to keep their mind and brain stimulated. Brain teasers/memory/image and word association games have been scientifically provedn to be useful throughout the lives of people afflicted with the disease. While additionally, music can play an important role."
]
var repo = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "https://github.com/vin-cent321/Moneta",


]

// $('#img01').click(function() {
//     $('#titles').text(title[1])
//     $('#description').text(desc[1])
//     $('iframe').attr('src',$('#img01').attr('alt'))
// })
$('document').ready(function(){
    $('#img11').attr('src','./Assets/Images/00.png')
    $('#img12').attr('src','./Assets/Images/00.png')
    $('#img14').attr('src','./Assets/Images/00.png')
    $('#img17').attr('src','./Assets/Images/00.png')
    $('#img18').attr('src','./Assets/Images/00.png')

    $('.thumbs').on('click',function(){
        num = ($(this)[0].id).slice(3)
        if (num<10) {
            num = num.slice(1)
        }
        populate(num,$(this)[0].alt)
    })
})
function populate(x,y) {
    console.log('attempting to populate with', x)
    $('#titles').html(`<a href='${y}'>${title[x]}</a><div><a href='${repo[x]}'>${repo[x]}</a></div>`)
    $('#description').text(desc[x])
    $('iframe').attr('src',y)
}
