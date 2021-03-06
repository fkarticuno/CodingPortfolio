
console.log("JS linked")
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
    "09-CODING PORTFOLIO",
    "10-NODEJS",
    "11-JS CONSTRUCTORS",
    "12-MYSQL",
    "13-EXPRESS FRIEND FINDER",
    "14-HANDLEBARS",
    "15-SEQUELIZE EAT-DA-BURGER",
    "16-PROJECT 2 Drinking Well",
    "17-PROJECT 2",
    "18-MONGO & MONGOOSE",
    "19-PROJECT 3 MONETA"
]
var desc = [
    "This portfolio displays progress and achievements developing basic, intermediate and advanced apps using various languages, packages, frameworks, engines and database models. All culminating into a demo friendly environment to showcase the expertise gained through countless hours of development and refactoring.",
    "For this project, I built a professional portfolio site using HTML/CSS. These instructions include a short style guide; follow it to design an aesthetically pleasing layout while creating different kinds of complex HTML elements.",
    "For this project, I created two different portfolios. The first will be building my portfolio layout using the Bootstrap CSS Framework. The second will be enhancing the portfolio I made last unit with a mobile-responsive layout.",
    "For this project, I created one of two possible computer games: Word Guess or Psychic. These apps will run in the browser, and feature dynamically updated HTML and CSS powered by my JavaScript code.",
    "For this project, I created another fun and interactive game for web browsers. This time, my app must dynamically update my HTML pages with the jQuery library.",
    "For this project, I created a Trivia game using JavaScript for the logic and jQuery to manipulate HTML. I was sure to layout this app with valid HTML and stylish CSS.",
    "For this project, I used the GIPHY API to make a dynamic web page that populates with gifs of my choice. To finish this task, I must call the GIPHY API and use JavaScript and jQuery to change the HTML of my site.",
    "For this project, I created a train schedule application that incorporates Firebase to host arrival and departure data. my app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.",
    "For this project my goal was to Build Something Awesome. I used APIs, AJAX to pull data, utilized at least one new library (animate CSS), had a polished frontend / UI, met good quality coding standards (indentation, scoping, naming), I did use alerts, confirms, or prompts, utilized repeating elements (table, columns, etc), used Bootstrap, added User Input Validation, and deployed it to Github",
    "For this project I compiled a portfolio consisting of: links to my GitHub profile & LinkedIn page as well as my email address and phone number, a link to a PDF of my resume, a list of previous projects with titles, descriptions, and demos",
    "For this project, I made LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives us back data.",
    "null",
    "In this activity, I created an Amazon-like storefront with the MySQL skills I learned this unit. The app will take in orders from customers and deplete stock from the store's inventory. I Made sure to save and require the MySQL and Inquirer npm packages in my homework files--the app will need them for data input and storage.",
    "In this activity, I built a compatibility-based 'FriendFinder' application -- basically a dating app. This full-stack site will take in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.",
    "null",
    "For this project, I created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). I followed the MVC design pattern; used Node and MySQL to query and route data in my app. Then I Sequelized the `Burger` app to provide myself with the most reasonable challenge.",
    "This project used a Node and Express Web Server, is backed by a MySQL Database an ORM, has both GET and POST routes for retrieving and adding new data was deployed using Heroku (with Data), utilizes at least one new library, package, or technology that we had not discussed in class, has a polished frontend / UI, has folder structure that meets MVC Paradigm and meets good quality coding standards (indentation, scoping, naming).",
    "null",
    "For this project, I created a web app that lets users view and leave comments on the latest news. But I did not actually write any articles; instead, I flex my Mongoose and Cheerio muscles to scrape news from another site.",
    "Moneta is a full stack MERN platform for patients at any stage of Alzheimer's/Dementia to keep their mind and brain stimulated. Brain teasers/memory/image and word association games have been scientifically proven to be useful throughout the lives of people afflicted with the disease. While additionally, music can play an important role."
]
var repo = [
    "https://fkarticuno.github.io/CodingPortfolio/Assets/Credentials/Resume_2020.pdf",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "https://github.com/fkarticuno/CodingPortfolio/",
    "10",
    "11",
    "12",
    "https://github.com/fkarticuno/FriendFinder",
    "14",
    "https://github.com/fkarticuno/burger",
    "https://github.com/fkarticuno/actual_malware",
    "17",
    "18",
    "https://github.com/vin-cent321/Moneta",
]

var skills = [
    "Google Docs",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "HTML CSS Bootstrap JavaScript JQuery GitHub-Pages",
    "10",
    "11",
    "12",
    "CSS Bootstrap HTML JavaScript MySQL JQuery",
    "14",
    "CSS Bootstrap HTML JavaScript MySQL Sequelize JQuery",
    "Bootstrap HTML CSS JQuery JavaScript MySQL Heroku Express Sequelize Youtube & CocktailDB API",
    "17",
    "18",
    "MongoDB Express.js React.js Node.js Axios Passport Moment OpenWeather-API",
    
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "Bootstrap",
    "JSON",
    "AJAX", 
    "API integration",
    "Firebase",
    "React.js",
    "Heroku",
    "Git",
    "GitHub",
    "MySQL",
    "MongoDB",
    "Node.js",
    "Express.js",
    "User Authentication",
    "ORM (sequelize)"
]
var mode = 1;
var head = 0;
var time = moment().format("LLLL");

// $('#img01').click(function() {
//     $('#titles').text(title[1])
//     $('#description').text(desc[1])
//     $('iframe').attr('src',$('#img01').attr('alt'))
// })
$('document').ready(function(){
    $('.thumbs').on('click',function(){
        num = ($(this)[0].id).slice(3)
        if (num<10) {
            num = num.slice(1)
        }
        populate(num,$(this)[0].alt)
    })
    
    $('.thumbs').on('mouseover',function() {
        num = ($(this)[0].id).slice(3)
        if (num<10) {
            num = num.slice(1)
        }
        $('.projectName').text(`| ${title[num].slice(3)}`)
    })
    $('#inv').on('click', ()=>invt(mode))
    $('#grd').on('click', ()=>grad(head))
    startTime()
    populate(19,"https://mc-moneta.herokuapp.com/")

})
function populate(x,y) {
    //console.log('attempting to populate with', x)
    $('#titles').html(`<a href='${y}'>${title[x].slice(2,title[x].length)}</a> |
     <a href='${repo[x]}'>${repo[x]}</a>`)
    $('#description').text(desc[x])
    $('iframe').attr('src',y)
    $('#skills').text(`${skills[x]}`)

}
function invt(x) {
    $('html')[0].style.filter = `invert(${x})`;
    $('.thumbs').css('filter', `invert(${x})`);
    $('.iframe').css('filter', `invert(${x})`);
    $('.fka').css('filter', `invert(${x})`);
    if (mode === 0) {
        mode = 1; 
        $('#inv').text('Dark Mode')        
    } else {
        mode = 0; 
        $('#inv').text('Light Mode');               
    }
}
function grad(x) {
    if (head === 0) {
        $('.card-header').css('background','linear-gradient(to left, rgb(112, 101, 214), rgb(230, 106, 213))')
        $('body')[0].style.background = 'linear-gradient(to left, rgb(112, 101, 214), rgb(230, 106, 213))';
        //$('.card').css('background','linear-gradient(to left, rgb(112, 101, 214), rgb(230, 106, 213))')
        head = 1; 
        $('#grd').text('Normal')
    } else {
        $('.card-header').css('background','rgba(0,0,0,.03)')
        $('body')[0].style.background = 'url(https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg)'
        //$('.card').css('background','white')
        head = 0; 
        $('#grd').text('Gradient')
        
    }
}
function startTime() {
    $("#time").text( moment().format("LLLL") )
    t = setTimeout(()=> startTime() , 500);
}
    
$(document).ready($('#time').text(time))
