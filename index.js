const dates = [
            month = {
                january : "01",
                february: "02",
                march: "03",
                april: "04",
                may: "05",
                june: "06",
                july: "07",
                august: "08",
                september: "09",
                october: 10,
                november: 11,
                december: 12,
                jan: "01",
                feb: "02",
                mar: "03",
                apr: "04",
                jun: "06",
                jul: "07",
                aug: "08",
                sep: "09",
                oct: 10,
                nov: 11,
                dec: 12,
                 1 : "01",
                 2 : "02",
                 3 : "03",
                 4 : "04",
                 5 : "05",
                 6 : "06",
                 7 : "07",
                 8 : "08",
                 9 : "09",
                 10: 10,
                 11: 11,
                 12: 12,
                "01": "01",
                "02": "02",
                "03": "03",
                "04": "04",
                "05": "05",
                "06": "06",
                "07": "07",
                "08": "08",
                "09": "09",
                 10: 10,
                 11: 11,
                 12: 12
            },
            day = {
                "1st" : "01",
                "2nd" : "02",
                "3rd" : "03",
                "4th" : "04",
                "5th" : "05",
                "6th" : "06",
                "7th" : "07",
                "8th" : "08",
                "9th" : "09",
                "10th": 10,
                "11th": 11,
                "12th": 12,
                "13th": 13,
                "14th": 14,
                "15th": 15,
                "16th": 16,
                "17th": 17,
                "18th": 18,
                "19th": 19,
                "20th": 20,
                "21th": 21,
                "22th": 22,
                "23th": 23,
                "24th": 24,
                "25th": 25,
                "26th": 26,
                "27th": 27,
                "28th": 28,
                "29th": 29,
                "30th": 30,
                "31st": 31,
                    1 : "01",
                    2 : "02",
                    3 : "03",
                    4 : "04",
                    5 : "05",
                    6 : "06",
                    7 : "07",
                    8 : "08",
                    9 : "09",
                    10: 10,
                    11: 11,
                    12: 12,
                    13: 13,
                    14: 14,
                    15: 15,
                    16: 16,
                    17: 17,
                    18: 18,
                    19: 19,
                    20: 20,
                    21: 21,
                    22: 22,
                    23: 23,
                    24: 24,
                    25: 25,
                    26: 26,
                    27: 27,
                    28: 28,
                    29: 29,
                    30: 30,
                    31: 31,
                  "01": "01",
                  "02": "02",
                  "03": "03",
                  "04": "04",
                  "05": "05",
                  "06": "06",
                  "07": "07",
                  "08": "08",
                  "09": "09",
            }
]

const yearArray = [1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 
    1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 
    1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 
    2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 
    2018, 2019, 2020];

function testInputs(){
    $('.enter').on('click',function(x){
        x.preventDefault();
        yrVal = $('.year').val();
        dyVal = $('.date').val();
        $('.validationBox').empty();
        validateYear();
        
    })

}

function validateYear(){
    if (yrVal > 1980 && yrVal < 2020){
        year = yrVal;
        defineSearch();
    }
    else {
        $('.validationBox').append('<p>Must fill in a year between 1980 - 2020</p>');
        throw "Must fill in a year between 1980 - 2020";
        
    }
}

function defineSearch(){
    if ( dyVal == "" ){
        runYearSearchOnly();
    }
    else {
        getDate();
    }
}

function runYearSearchOnly(){
    console.log('searching year only');
}

function getDate(){
        dyVal = $('.date').val();
        removeChar2 = dyVal.replace("-"," ");
        monthDay = removeChar2.replace("/"," ");
        monthAndDay = monthDay.trim().split(" ")
        monthVal = monthAndDay[0];
        dayVal = monthAndDay[1];
        try{
        monthLow = monthVal.toLowerCase();
        dayLow = dayVal.toLowerCase();
        }
        catch {
            $('.validationBox').append(`
            <p>Please enter a valid date :
               September 3     9/3   09/03  09 03
               September 3rd   9-3   09-03   9 3
            </p>`)
            throw "Invaild date: please enter a valid date"
        }
        validateDate();

}

function validateDate(){
        if ( month.hasOwnProperty(monthLow) === true){
            monthToBeSearched = dates[0][`${monthLow}`];
        }
        else {
            $('.validationBox').append(`
            <p>Please enter a valid date :
               September 3     9/3   09/03  09 03
               September 3rd   9-3   09-03   9 3
            </p>`)
            throw "Invaild date: please enter a valid date"
        }

        if ( day.hasOwnProperty(dayLow) === true){
            dayToBeSearched = dates[1][`${dayLow}`];
        }
        else {
            $('.validationBox').append(`
            <p>Please enter a valid date :
               September 3     9/3   09/03  09 03
               September 3rd   9-3   09-03   9 3
            </p>`)
            throw "Invalid date: please enter valid date";
        }

         dateTobeSearched = year + monthToBeSearched + dayToBeSearched;
         console.log(dateTobeSearched);
}

function runFullDateSearch(){
    console.log('searching full date');
}




// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// THIS IS THE BEGGINING CODE OF GETTING THE DATE AND THE FOLLWOWING CODES
// ARE SET TO RETRIEVE DIFFERENT CODES OF VARIOUS SECTIONS AND TOPICS

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 
// function getDate(){
//     $('.enter').on('click',function(e){
//         event.preventDefault();
//         removeChar1 = $('.date').val();
//         removeChar2 = removeChar1.replace("-"," ");
//         monthDay = removeChar2.replace("/"," ");
//         monthAndDay = monthDay.trim().split(" ");
//         monthVal = monthAndDay[0];
//         monthLow = monthVal.toLowerCase();
//         dayVal = monthAndDay[1];
//         dayLow = dayVal.toLowerCase();
//         month = dates[0][`${monthLow}`]; 
//         day = dates[1][`${dayLow}`];
//         year = $('.year').val();
//         date = year + "-" + month + "-" + day;
//         console.log(date);
//         fetchSports();
//         fetchUsNews();
//         fetchPotus();
//         fetchTV();
//         fetchWorld();
//         fetchTech();
//         fetchTeen();
//         fetchCulture;
//     })
// }

// function fetchSports(){
//         sportsUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("sports")&api-key=LLThbNbzZ85Cflzj9irmt3Ghn3rxHoYu`;
//         fetch(sportsUrl).then(response => {  
//        return response.json()
//     })
//     .then(responseJson => {
//         console.log(sportsUrl) 
//         console.log(responseJson)
//         showArticles(responseJson);
//     })
// }

// function fetchTV(){
//     tvUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("television")&api-key=LLThbNbzZ85Cflzj9irmt3Ghn3rxHoYu`;
//     fetch(tvUrl).then(response => {  
//    return response.json()
// })
// .then(responseJson => {
//     console.log(tvUrl) 
//     console.log(responseJson)
//     showArticles(responseJson);
// })
// }

// function fetchUsNews(){
//      newsUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("national")&api-key=LLThbNbzZ85Cflzj9irmt3Ghn3rxHoYu`;
//     fetch(newsUrl).then(response => {  
//    return response.json()
// })
// .then(responseJson => {
//     console.log(newsUrl) 
//     console.log(responseJson)
//     showArticles(responseJson);
// })
// }

// function fetchPotus(){
//     potusUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Us-President&api-key=LLThbNbzZ85Cflzj9irmt3Ghn3rxHoYu`;
//     fetch(potusUrl).then(response => {  
//    return response.json()
// })
// .then(responseJson => {
//     console.log(potusUrl) 
//     console.log(responseJson)
//     showArticles(responseJson);
// })
// }

// function fetchWorld(){
//     worldUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("world")&api-key=LLThbNbzZ85Cflzj9irmt3Ghn3rxHoYu`;
//     fetch(worldUrl).then(response => {  
//    return response.json()
// })
// .then(responseJson => {
//     console.log(worldUrl) 
//     console.log(responseJson)
//     showArticles(responseJson);
// })
// }

// function fetchTech(){
//     techUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("technology")&api-key=LLThbNbzZ85Cflzj9irmt3Ghn3rxHoYu`;
//     fetch(techUrl).then(response => {  
//    return response.json()
   
// })
// .then(responseJson => {
//     console.log(techUrl) 
//     console.log(responseJson)
//     showArticles(responseJson);
// })
// }

// function fetchTeen(){
//     teenUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("teens")&api-key=LLThbNbzZ85Cflzj9irmt3Ghn3rxHoYu`;
//     fetch(teenUrl).then(response => { 
//    return response.json()
// })
// .then(responseJson => {
//     console.log(teenUrl) 
//     console.log(responseJson)
//     showArticles(responseJson);
// })
// }

// function fetchCulture(){
//     cultureUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("culture")&api-key=LLThbNbzZ85Cflzj9irmt3Ghn3rxHoYu`;
//     fetch(cultureUrl).then(response => { 
//    return response.json()
// })
// .then(responseJson => {
//     console.log(cultureUrl) 
//     console.log(responseJson)
//     showArticles(responseJson);
// })
// }


// function showArticles(d){
//     for(i = 0; i < 3; i++){
//     $('.articles').append(`
//     <li><h1>${d.response.docs[i].headline.print_headline}</h1></li>
//     <li>${d.response.docs[i].lead_paragraph}</li>`)
//     }
// }


function ready(){
    // getDate();
    testInputs();
}

$(ready());