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
                october: "10",
                november: "11",
                december: "12",
                jan: "01",
                feb: "02",
                mar: "03",
                apr: "04",
                jun: "06",
                jul: "07",
                aug: "08",
                sep: "09",
                oct: "10",
                nov: "11",
                dec: "12",
                 1 : "01",
                 2 : "02",
                 3 : "03",
                 4 : "04",
                 5 : "05",
                 6 : "06",
                 7 : "07",
                 8 : "08",
                 9 : "09",
                 10: "10",
                 11: "11",
                 12: "12",
                "01": "01",
                "02": "02",
                "03": "03",
                "04": "04",
                "05": "05",
                "06": "06",
                "07": "07",
                "08": "08",
                "09": "09",
                 10: "10",
                 11: "11",
                 12: "12"
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
                "21st": 21,
                "22nd": 22,
                "23rd": 23,
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

keywordANDYEARURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=ronald+regan&fq=pub_year:(1986)&api-key=00ag7P5IOG0j0x72NeaRMSnhusKQ2IEB`;
sectioNdATEANDtYPE= `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=pub_date:(1986-01-08)AND section_name:("movies")AND document_type:("article")&api-key=00ag7P5IOG0j0x72NeaRMSnhusKQ2IEB`
wikiUrl ="https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=rainbow"




// Data info
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::



    function testInputs(){
        $('.enter').on('click',function(x){
        x.preventDefault();
        yrVal = $('.year').val();
        dyVal = $('.date').val();
        $('.validationBox').empty();
        $('.topicValidBOX').empty();
        $('.articles').empty();
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

         dateTobeSearched = year + "-" + monthToBeSearched + "-" + dayToBeSearched;;
         runFullDateSearch()
}

function createRandomDate(){
    $(".random").on('click',function(e){ 
    e.preventDefault();
    $('.articles').empty();
    monthValues = Object.values(month);
    randomMonth = monthValues[Math.floor(Math.random() * monthValues.length)]
    dayValues = Object.values(day);
    randomDay = dayValues[Math.floor(Math.random() * dayValues.length)]
    randomYear = yearArray[Math.floor(Math.random() * yearArray.length)]
    randomDate = randomYear + "-" + randomMonth + "-" + randomDay;
    dateTobeSearched = randomDate;
    runFullDateSearch();
})
}

function handleTopicAndYear(){
    $('.findTopic').on('click',function(x){
        x.preventDefault();
        $('.articles').empty();
        $('.validationBox').empty();
        $('.topicValidBOX').empty();
        topicValue = $('.topic').val();
        topicArray = topicValue.trim().split(" ");
        topicYear = $('.topicYear').val();
        validateTopicAndYear();
        if (topicArray.length > 1){
            keyword = topicArray.join("+");
            
        }
        else {
            keyword = topicArray.join("");
        }
        console.log(topicYear)
        console.log(keyword)
        runTopicInYearSearch();
    })
}

function validateTopicAndYear(){
    if ( topicValue == "" || topicYear == ""){
        $('.topicValidBox').append(`<p>Must fill both topic and year : New York Yankees 2003 </p>`);
        throw "must fill in both topic and year boxes";
    }
}

function handleExampleButton(){
    $('.example').on('click',function(e){
        e.preventDefault();
        $('.exampleDiv').show();
    })
    $('.return').on('click',function(e){
        e.preventDefault();
        $('.exampleDiv').hide();
    })

}
function runFullDateSearch(){
    console.log(dateTobeSearched);
    getSports();
    getArts();
    getWorld();
    getUS();
    getTech();
    getPres();
    
}

function getSports(){
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=pub_date:(${dateTobeSearched})AND section_name:("sports")AND document_type:("article")&api-key=00ag7P5IOG0j0x72NeaRMSnhusKQ2IEB`)
    .then(response => response.json())
    .then(responseJson => { 
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=pub_date:(${dateTobeSearched})AND section_name:("sports")AND document_type:("article")&api-key=00ag7P5IOG0j0x72NeaRMSnhusKQ2IEB`)
    findFullParagraphs(responseJson);
})
};
function getArts(){
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=pub_date:(${dateTobeSearched})AND section_name:("arts")AND document_type:("article")&api-key=00ag7P5IOG0j0x72NeaRMSnhusKQ2IEB`)
    .then(response => response.json())
    .then(responseJson => { 
    findFullParagraphs(responseJson);
})
};

function getWorld(){
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=pub_date:(${dateTobeSearched})AND section_name:("world")AND document_type:("article")&api-key=00ag7P5IOG0j0x72NeaRMSnhusKQ2IEB`)
    .then(response => response.json())
    .then(responseJson => { 
    findFullParagraphs(responseJson);
})
};

function getUS(){
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=pub_date:(${dateTobeSearched})AND section_name:("US")AND document_type:("article")&api-key=00ag7P5IOG0j0x72NeaRMSnhusKQ2IEB`)
    .then(response => response.json())
    .then(responseJson => { 
    findFullParagraphs(responseJson);
})
};

function getTech(){
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=pub_date:(${dateTobeSearched})AND section_name:("technology")AND document_type:("article")&api-key=00ag7P5IOG0j0x72NeaRMSnhusKQ2IEB`)
    .then(response => response.json())
    .then(responseJson => { 
    findFullParagraphs(responseJson);
})
};

function getPres(){
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=US President&fq=pub_date:(${dateTobeSearched})AND document_type:("article")&api-key=00ag7P5IOG0j0x72NeaRMSnhusKQ2IEB`)
    .then(response => response.json())
    .then(responseJson => { 
    findFullParagraphs(responseJson);
})
};

function findFullParagraphs(s){
    articleInfo = []
for(i = 0; i < 10; i++){
    if (s.response.docs[i].lead_paragraph.length > 200){
        articleInfo.push(s.response.docs[i])
    } 
    else if (s.response.docs[i].lead_paragraph.length < 200){
        console.log("");  
    }
}
console.log(articleInfo);
 editAndPrintHeadlines();
};

function editAndPrintHeadlines(){
    for( i = 0; i < 3; i++){
        if (articleInfo[i].headline.main.length < 10){
            $('.articles').append(`<h1> ${articleInfo[i].headline.print_headline} </h1>
            <p>${articleInfo[i].lead_paragraph}</p>
            <a href=${articleInfo[i].web_url}>read more</a>
            <img src="images/2007/11/05/us/clinton600.jpg"`);
        }
        else if (articleInfo[i].headline.main.length > 10){
         $('.articles').append(`<h2> ${articleInfo[i].headline.main} </h2>
         <p>${articleInfo[i].lead_paragraph}</p>
         <a href=${articleInfo[i].web_url}>read more</a>
         `);
        }   
}
            
}



function runYearSearchOnly(){
    console.log(`searching ${year} only`);
    url = wikiUrl + yrVal;
    fetch(`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=1992`)
    .then(response => response.json())
    .then(responseJson => { 
        console.log(responseJson)
        pageId = Object.keys(responseJson.query.pages);
        content = responseJson.query.pages[pageId].revisions[0]['*'];
        console.log(content)
        
    })
        
    
};

function runTopicInYearSearch(){
    console.log(`searching ${keyword} in ${topicYear}`);
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&fq=pub_year:(${topicYear})&api-key=00ag7P5IOG0j0x72NeaRMSnhusKQ2IEB`)
    .then(response => response.json())
    .then(responseJson => { 
        console.log(responseJson)
        findFullParagraphs(responseJson)
    
})};


function ready(){
    $('.exampleDiv').hide();
    testInputs();
    createRandomDate();
    handleTopicAndYear();
    handleExampleButton();
}

$(ready());