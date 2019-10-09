console.log("linked")
var source;
var title = [
    "skipped",
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
]
var desc = [
    "skipped",
    "In this assignment, I built a professional portfolio site using HTML/CSS. These instructions include a short style guide; follow it to design an aesthetically pleasing layout while creating different kinds of complex HTML elements.",
    "In this assignment, I created two different portfolios. The first will be building my portfolio layout using the Bootstrap CSS Framework. The second will be enhancing the portfolio I made last unit with a mobile-responsive layout.",
    "In this assignment, I created one of two possible computer games: Word Guess or Psychic. These apps will run in the browser, and feature dynamically updated HTML and CSS powered by my JavaScript code.",
    "In this assignment, I created another fun and interactive game for web browsers. This time, my app must dynamically update my HTML pages with the jQuery library.",
    "In this assignment, I created a Trivia game using JavaScript for the logic and jQuery to manipulate HTML. I was sure to layout this app with valid HTML and stylish CSS.",
    "In this assignment, I used the GIPHY API to make a dynamic web page that populates with gifs of my choice. To finish this task, I must call the GIPHY API and use JavaScript and jQuery to change the HTML of my site.",
    "In this assignment, I created a train schedule application that incorporates Firebase to host arrival and departure data. my app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.",
    "In this assignment my project goal was to Build Something Awesome. I used xx APIs, AJAX to pull data, utilized at least one new library (animate CSS), had a polished frontend / UI, met good quality coding standards (indentation, scoping, naming), I did use alerts, confirms, or prompts, utilized repeating elements (table, columns, etc), used Bootstrap, added User Input Validation, and deployed it to Github",
    "In this assignment I compiled a portfolio consisting of: links to my GitHub profile & LinkedIn page as well as my email address and phone number, a link to a PDF of my resume, a list of previous projects with titles, descriptions, and demos",
    "description for item 10",
]

$('#img01').click(function() {
    $('#titles').text(title[1])
    $('#description').text(desc[1])
    $('iframe').attr('src',$('#img01').attr('alt'))
})

$('#img02').on('click',function() {
    $('#titles').text(title[2])
    $('#description').text(desc[2])
    $('iframe').attr('src',$('#img02').attr('alt'))
})

$('#img03').on('click',function() {
    $('#titles').text(title[3])
    $('#description').text(desc[3])
    $('iframe').attr('src',$('#img03').attr('alt'))
})

$('#img04').on('click',function() {
    $('#titles').text(title[4])
    $('#description').text(desc[4])
    $('iframe').attr('src',$('#img04').attr('alt'))
})

$('#img05').on('click',function() {
    $('#titles').text(title[5])
    $('#description').text(desc[5])
    $('iframe').attr('src',$('#img05').attr('alt'))
})

$('#img06').on('click',function() {
    $('#titles').text(title[6])
    $('#description').text(desc[6])
    $('iframe').attr('src',$('#img06').attr('alt'))
})

$('#img07').on('click',function() {
    $('#titles').text(title[7])
    $('#description').text(desc[7])
    $('iframe').attr('src',$('#img07').attr('alt'))
})

$('#img08').on('click',function() {
    $('#titles').text(title[8])
    $('#description').text(desc[8])
    $('iframe').attr('src',$('#img08').attr('alt'))
})

$('#img09').on('click',function() {
    $('#titles').text(title[9])
    $('#description').text(desc[09])
    $('iframe').attr('src',$('#img09').attr('alt'))
})

$('#img10').on('click',function() {
    $('#titles').Text(title[10])
    $('#description').Text(desc[10])
    $('iframe').attr('src',$('#img10').attr('alt'))
})

/* click functions do not trigger 
    as expected when passed params and 
    named functions
$('#img01').click(populate(1))
$('#img02').on('click',populate(2))
$('#img03').on('click',populate(3))
$('#img04').on('click',populate(4))
$('#img05').on('click',populate(5))
$('#img06').on('click',populate(6))
$('#img07').on('click',populate(7))
$('#img08').on('click',populate(8))
$('#img09').on('click',populate(9))
$('#img10').on('click',populate(10))


function populate(x) {
    $('#titles').text(title[x])
    $('#description').text(desc[x])
    if (x<10) {
        source = '#img0' + x;
    } else {
        source = '#img' + x;
    };
    $('iframe').attr('src',$(source).attr('alt'))
}
*/