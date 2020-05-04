const presidents = [
Carter = {
pres : "Jimmy Carter",
photo : "<img class='presPic' src='https://tse2.mm.bing.net/th?id=OIP.4xU1h8d0G-ES432GQx1CdwHaKQ&pid=Api&P=0&w=300&h=300'>",
info : `<p>James Earl Carter Jr. (born October 1, 1924) is an American politician, philanthropist, and former farmer who served as the 39th president of the United States from 1977 to 1981. A member of the Democratic Party, he previously served as a Georgia State Senator from 1963 to 1967 and as the 76th governor of Georgia from 1971 to 1975. Since leaving the presidency, Carter has remained active in the private sector; in 2002, he was awarded the Nobel Peace Prize for his work in co-founding the Carter Center.</p>`
},
Reagan = {
pres: "Ronald Reagan",
photo: "<img class='presPic' src='https://upload.wikimedia.org/wikipedia/commons/1/16/Official_Portrait_of_President_Reagan_1981.jpg'>",
info: `<p>Ronald Wilson Reagan  (February 6, 1911 – June 5, 2004) was an American politician who served as the 40th president of the United States from 1981 to 1989 and became a highly influential voice of modern conservatism. Prior to his presidency, he was a Hollywood actor and union leader before serving as the 33rd governor of California from 1967 to 1975.</p>`
},
Bush1 =  {
pres: "George H. Bush",
photo: "<img class='presPic' src='http://content8.flixster.com/photo/12/81/46/12814622_ori.jpg'>",
info: `<p>George Herbert Walker Bush (June 12, 1924 – November 30, 2018) was an American politician and businessman who served as the 41st president of the United States from 1989 to 1993. A member of the Republican Party, Bush also served in the U.S. House of Representatives, as U.S. Ambassador to the United Nations, as Director of Central Intelligence, and as the 43rd vice president.</p>`
},
Clinton = {
pres: "Bill Clinton",
photo:"<img class='presPic' src='https://tse3.mm.bing.net/th?id=OIP.4-3PIcI3sByLafHyUK1CGwAAAA&pid=Api&P=0&w=300&h=300'" ,
info: `<p>William Jefferson Clinton (né Blythe III; born August 19, 1946) is an American politician who served as the 42nd president of the United States from 1993 to 2001. Prior to his presidency, he served as governor of Arkansas (1979–1981 and 1983–1992) and as attorney general of Arkansas (1977–1979). A member of the Democratic Party, Clinton was known as a New Democrat, and many of his policies reflected a centrist "Third Way" political philosophy. He is the husband of former secretary of state and former U.S. senator Hillary Clinton.</p>`
},
Bush2 =  {
pres: "George W. Bush",
photo:"<img class='presPic' src='https://tse4.mm.bing.net/th?id=OIP.3XDeNG_Go1oVY5ekDajsMAHaJz&pid=Api&P=0&w=300&h=300'>" ,
info: `<p>George Walker Bush (born July 6, 1946) is an American politician and businessman who served as the 43rd president of the United States from 2001 to 2009. A member of the Republican Party, he had previously served as the 46th governor of Texas from 1995 to 2000. Born into the Bush family, his father, George H. W. Bush, served as the 41st president of the United States from 1989 to 1993.</p>`
},
Obeezy = {
pres: "Barack Obama",
photo:"<img  class='presPic'src='https://media1.s-nbcnews.com/j/newscms/2016_02/1374066/160112-obama-1101p_1d16238ca868f5d9b1eb70c950d8f03f.fit-760w.jpg'>" ,
info: `<p>Barack Hussein Obama II  born August 4, 1961) is an American politician and attorney who served as the 44th president of the United States from 2009 to 2017. A member of the Democratic Party, Barack Obama was the first African-American president of the United States. He previously served as a U.S. senator from Illinois from 2005 to 2008 and an Illinois state senator from 1997 to 2004.</p>`
},
Trump =  {
pres: "Donald Trump",
photo:"<img class='presPic'src='http://www.trbimg.com/img-592efffc/turbine/ct-donald-trump-stupid-president-20170531'>" ,
info: `<p>Donald John Trump (born June 14, 1946) is the 45th and current president of the United States. Before entering politics, he was a businessman and television personality.</p>`
},                 
]

const champs = [
 {
year: 1980,
NFL : {
winner: "Pittsburgh Steelers" ,
photo: "<img src='https://andrewcconte.files.wordpress.com/2016/01/pro01_1.jpg'>",
info: "The Steelers defeated the Rams by the score of 31–19, becoming the first team to win four Super Bowls. The game was played on January 20, 1980",
} ,
NBA : {
winner: "Los Angeles Lakers",
photo:"<img src='https://i.ytimg.com/vi/0YIRzlj1o0s/hqdefault.jpg'>" ,
info:"The tournament concluded with the Western Conference champion Los Angeles Lakers defeating the Eastern Conference champion Philadelphia 76ers 4 games to 2 in the NBA Finals. The Lakers earned their seventh NBA title, their second since moving from Minneapolis" ,
} , 
MLB : {
winner: "Philadelphia Phillies",
photo:"<img src='http://cdn.sportsmemorabilia.com/sports-product-image/philadelphia-phillies-1980-world-series-champions-team-autographed-16-x-20-tug-mcgraw-jumping-photograph-with-24-signatures-and-multiple-inscriptions5-t5123457-2000.jpg'>" ,
info:"The Phillies defeated the Royals, four games to two, to secure their first World Series championship in franchise history. Phillies third baseman Mike Schmidt was named as the World Series MVP. " ,
}
},
{
year: 1981,
NFL : {
winner:"Oakland Raiders " ,
photo:"<img = src='https://tse1.mm.bing.net/th?id=OIP.Iw9UlFst8hLzUpiAzeeAmgDwEs&pid=Api&P=0&w=300&h=300'>" ,
info: "The Raiders defeated the Eagles by the score of 27–10, becoming the first wild card playoff team to win a Super Bowl. The Raiders were making their third Super Bowl appearance after posting an 11–5 regular season record." ,
} ,
NBA : {
winner:"Boston Celtics" ,
photo:"<img src='https://tse2.mm.bing.net/th?id=OIP.NlUJwoVM61iVL3ICvbywpgHaJ2&pid=Api&P=0&w=300&h=300'>" ,
info: "The tournament concluded with the Eastern Conference champion Boston Celtics defeating the Western Conference champion Houston Rockets 4 games to 2 in the NBA Finals. Cedric Maxwell was named NBA Finals MVP.",
} , 
MLB : {
winner: "Los Angeles Dodgers",
photo:"<img src='https://tse3.mm.bing.net/th?id=OIP.CwSCAvwG-Np0ICI-Mw1ZYAHaHd&pid=Api&P=0&w=300&h=300'>" ,
info:" The Dodgers won the Series in six games in a mirror image of the two teams' last two Series meetings in 1977 and 1978; it was the Dodgers' first title since 1965, their first victory over the Yankees since 1963, and third World Series win over the Yankees, overall." ,
} 
},
{
year: 1982,
NFL : {
winner: "San Francisco 49ers" ,
photo: "<img src='https://tse3.mm.bing.net/th?id=OIP.yJheTJptmUpN9qRiUjKARAHaGs&pid=Api&P=0&w=174&h=158'>",
info: "The 49ers defeated the Bengals by the score of 26–21 to win their first Super Bowl.  It marked the first time that a Super Bowl was held at a cold-weather city.",
} ,
NBA : {
winner:"Los Angeles Lakers" ,
photo:"<img src='http://media.gettyimages.com/photos/kareem-abduljabbar-of-the-los-angeles-lakers-holds-up-the-trophy-picture-id141822866'>" ,
info:"The tournament concluded with the Western Conference champion Los Angeles Lakers defeating the Eastern Conference champion Philadelphia 76ers 4 games to 2 in the NBA Finals. Magic Johnson was named NBA Finals MVP for the second time." ,
} , 
MLB : {
winner:"St. Louis Cardinals" ,
photo:"<img src='https://tse3.mm.bing.net/th?id=OIP.ukVNPieQ8H1hEDzi7eMPVQHaGz&pid=Api&P=0&w=186&h=172'>" ,
info:"The 79th edition of the World Series, it was a best-of-seven playoff played between the National League (NL) champion St. Louis Cardinals and the American League (AL) champion Milwaukee Brewers. The Cardinals won the series, four games to three." ,
} ,
},
{
year: 1983,
NFL : {
winner: "Washington Redskins" ,
photo: "<img src='https://tse4.mm.bing.net/th?id=OIP.9QfFfrrf0cYtRlbJW4f1zgHaIF&pid=Api&P=0&w=300&h=300'>",
info: "The Redskins defeated the Dolphins 27–17 to win their first Super Bowl championship. This Super Bowl came at the end of a season that was significantly shortened by a players' strike. Teams ended up only playing nine regular season games, and the league conducted a special 16-team, four-round playoff tournament where divisions were ignored in the seeding." ,
} ,
NBA : {
winner:"Philadelphia 76ers " ,
photo:"<img src='https://sportsteamhistory.com/wp-content/uploads/2016/12/Philadelphia-76ers-NBA-Champs-1983.jpeg'>" ,
info: "This was the final postseason using the 12-team format, before the NBA expanded the postseason to 16 teams the next season. The tournament concluded with the Eastern Conference champion Philadelphia 76ers defeating the Western Conference champion Los Angeles Lakers 4 games to 0 in the NBA Finals. Moses Malone was named NBA Finals MVP.",
} , 
MLB : {
winner:"Baltimore Orioles" ,
photo:"<img src='http://www.trbimg.com/img-1381168047/turbine/bal-83ws12-vbaltimore-postseason.baseball-20030620/480'>" ,
info:"The Orioles won, four games to one. The I-95 Series, like the World Series two years later, also took its nickname from the interstate that the teams and fans traveled on, Interstate 95 in this case. This was the last World Series that Bowie Kuhn presided over as commissioner." ,
} ,
},
{
year: 1984,
NFL : {
winner: "Los Angeles Raiders" ,
photo: "<img src='https://tse1.mm.bing.net/th?id=OIP.oYSgSXWHkprLlJmOkI8Y4wHaIO&pid=Api&P=0&w=300&h=300'>" ,
info: "The Raiders defeated the Redskins, 38–9. The Raiders' 38 points scored and 29-point margin of victory broke Super Bowl records; it remains the most points scored by an AFC team in a Super Bowl. This was the first time the city of Tampa hosted the Super Bowl and was the AFC's last Super Bowl win until Super Bowl XXXII, won by the Denver Broncos." ,
} ,
NBA : {
winner: "Boston Celtics",
photo:"<img src='https://media.gettyimages.com/photos/dennis-johnson-boston-celtics-celebrates-in-the-locker-room-after-picture-id53081687'>" ,
info:" The tournament concluded with the Eastern Conference champion Boston Celtics defeating the Western Conference champion Los Angeles Lakers 4 games to 3 in the NBA Finals. Larry Bird was named NBA Finals MVP." ,
} , 
MLB : {
winner:"Detroit Tigers " ,
photo:"<img src='http://40.media.tumblr.com/tumblr_lqersu8uAl1qhqxuso1_r1_1280.jpg'>" ,
info:"The Tigers won the series, four games to one. This was the city of Detroit's first sports championship since the Tigers themselves won the 1968 World Series." ,
} ,
},    
{
year: 1985,
NFL: {
winner:"San Francisco 49ers" ,
photo: "<img src='https://taylorblitztimes.files.wordpress.com/2013/11/craigsuperbowlxix.jpg'>",
info: "The 49ers defeated the Dolphins by the score of 38–16 to win their second Super Bowl. The game was played on January 20, 1985, at Stanford Stadium, on the campus of Stanford University in Stanford, California, the first Super Bowl played in the San Francisco Bay Area. This also became the second Super Bowl after Super Bowl XIV where the game was coincidentally played in the home market of one of the participants." ,
} ,
NBA : {
winner: "Los Angeles Lakers",
photo:"<img src='http://3.bp.blogspot.com/-vPBgB33iibg/UO2k4IBsBMI/AAAAAAAAAU4/DwHQj6Oytas/s1600/la_g_1985ship_800.jpg'>" ,
info:"The tournament concluded with the Western Conference champion Los Angeles Lakers defeating the Eastern Conference champion Boston Celtics 4 games to 2 in the NBA Finals. Kareem Abdul-Jabbar was named NBA Finals MVP for the second time (he had won the award under his birth name, Lew Alcindor, as a Buck in 1971." ,
} , 
MLB : {
winner: "Kansas City Royals",
photo:"<img src='https://tse3.mm.bing.net/th?id=OIP.svEyACBbTtmhzD7ryUnyTwHaKS&pid=Api&P=0&w=300&h=300'>" ,
info: " The Royals upset the heavily favored Cardinals in seven games. The Series was popularly known as the Show-Me Series or the I-70 Showdown Series as both cities are in the state of Missouri which is nicknamed the Show Me State and are connected by Interstate 70.",
}
},
{
year: 1986,
NFL : {
winner:"Chicago Bears " ,
photo: "<img src='https://tse4.mm.bing.net/th?id=OIP.XrYZdGFi0G9WQJK_euroYQHaE1&pid=Api&P=0&w=302&h=198'>",
info: "The Bears defeated the Patriots by the score of 46–10, capturing their first NFL championship since 1963, three years prior to the birth of the Super Bowl. Super Bowl XX was played on January 26, 1986 at the Louisiana Superdome in New Orleans." ,
} ,
NBA : {
winner:"Boston Celtics" ,
photo:"<img src='http://a.espncdn.com/photo/2012/0604/nba_1986Celtics_576.jpg'>" ,
info: "The tournament concluded with the Eastern Conference champion Boston Celtics defeating the Western Conference champion Houston Rockets 4 games to 2 in the NBA Finals. Larry Bird was named NBA Finals MVP for the second time.",
} , 
MLB : {
winner: "New York Mets ",
photo:"<img src='https://i1.wp.com/www.mercurynews.com/wp-content/uploads/2019/05/Buckner1.jpg?fit=620%2C9999px&ssl=1'>" ,
info:"The Mets won the Series in the seventh game, after overcoming a deficit of two runs with two outs and no one on base in the bottom of the 10th inning of Game 6. This was a game in which the Red Sox were twice one strike away from victory, and known for the famous error by Boston's first baseman Bill Buckner after their lead had already been blown. Game 6 has been cited in the legend of the Curse of the Bambino to explain the major comeback." ,
} ,
},              
{
year: 1987,
NFL: {
winner: "New York Giants" ,
photo: "<img src='https://tse1.mm.bing.net/th?id=OIP.EBv3WGxtQ30sKR62E-LIowHaJ4&pid=Api&P=0&w=300&h=300'>",
info: "The Giants defeated the Broncos, 39–20, for their first Super Bowl and first NFL title since 1956. The game was played on January 25, 1987, at the Rose Bowl in Pasadena, California.",
} ,
NBA : {
winner:"Los Angeles Lakers " ,
photo:"<img src='http://brendanmarshall929.files.wordpress.com/2014/07/magic-champaign.jpg'>" ,
info:" The tournament concluded with the Western Conference champion Los Angeles Lakers defeating the Eastern Conference champion Boston Celtics 4 games to 2 in the NBA Finals. The Lakers earned their 10th NBA championship, and Magic Johnson was named NBA Finals MVP for a then-record third time." ,
} , 
MLB : {
winner:"Minnesota Twins" ,
photo:"<img src='https://i.pinimg.com/originals/2b/4a/9a/2b4a9a113e1f03ce8615467df0293566.jpg'>" ,
info: "The Twins defeated the Cardinals four games to three to win the Series. Twins pitcher Frank Viola was named as the 1987 World Series MVP.",
} 
},                 
{
year: 1988,
NFL: {
winner: "Washington Redskins" ,
photo: "<img src='https://tse4.mm.bing.net/th?id=OIP.ETNSauWk1LnzM5YTu1C8kgHaJ9&pid=Api&P=0&w=300&h=300'>" ,
info: "The Redskins defeated the Broncos by the score of 42–10, winning their second Super Bowl. The game was played on January 31, 1988 at Jack Murphy Stadium in San Diego, which was the first time that the Super Bowl was played there.",
} ,
NBA : {
winner:"Los Angeles Lakers ",
photo:"<img src='https://i.ytimg.com/vi/fyUCCzDtO8M/hqdefault.jpg'>" ,
info:"The Western Conference champion Los Angeles Lakers defeated the Eastern Conference champion Detroit Pistons 4 games to 3." ,
} , 
MLB : {
winner: "Los Angeles Dodgers",
photo:"<img src='https://i.pinimg.com/originals/3e/b4/e2/3eb4e2766d4b3d7b53a26445ed39ac50.jpg'>" ,
info: "The 85th edition of the World Series, it was a best-of-seven playoff played between the American League (AL) champion Oakland Athletics and the National League (NL) champion Los Angeles Dodgers, with the Dodgers upsetting the heavily favored Athletics to win the Series in five games. It is best known for the pinch-hit walk-off home run hit by Dodgers outfielder Kirk Gibson, who could barely walk due to injuries suffered during the NL Championship Series, against Athletics closer Dennis Eckersley in Game 1. ",
} 
},
{
year: 1989,
NFL: {
winner: "San Francisco 49ers" ,
photo: "<img src='https://tse3.mm.bing.net/th?id=OIP.9svQGjPWB74YBHzSkL8yOQHaFA&pid=Api&P=0&w=270&h=183'>" ,
info: "The 49ers defeated the Bengals 20–16, winning their third Super Bowl. The game was played on January 22, 1989 at Joe Robbie Stadium in Miami." ,
} ,
NBA : {
winner:"Detroit Pistons" ,
photo: "<img src='http://nbahoopsonline.com/teams/DetroitPistons/History/Championship/pistonscele.jpg'>" ,
info: "The Pistons won the series in a four-game sweep, marking the first time a team (Lakers) had swept the first three rounds of the playoffs, only to be swept in the finals. As of today, the Pistons are the most recent Eastern Conference team to sweep an NBA finals. Prior to 2016, the Pistons were the only team to clinch all four series on the road." ,
} , 
MLB : {
winner:"Oakland Athletics" ,
photo:"<img src='https://tse4.mm.bing.net/th?id=OIP.hqfq9hqFMQh7GzrJB_bB8QHaFj&pid=Api&P=0&w=215&h=162'>" ,
info:"This Series was also known as the Bay Bridge Series, BART Series,Battle of the Bay, and Earthquake Series as the two participant cities lie on opposite sides of San Francisco Bay, connected by the San Francisco–Oakland Bay Bridge and the Bay Area Rapid Transit (BART) system, and the 1989 Loma Prieta earthquake that occurred before the start of Game 3. It was the first cross-town World Series (involving two teams from the same metropolitan area) since 1956." ,
} 
},
{
year: 1990,
NFL: {
winner:"San Francisco 49ers" ,
photo: "<img src='https://tse3.mm.bing.net/th?id=OIP.3s0sO-SIf1Eia5j-7v0pIAHaKn&pid=Api&P=0&w=300&h=300'>",
info: "The 49ers defeated the Broncos by the score of 55–10, winning their second consecutive Super Bowl, and then-tying the Pittsburgh Steelers with four Super Bowl victories. San Francisco also became the first team to win back-to-back Super Bowls with two different head coaches; rookie head coach George Seifert took over after Bill Walsh retired following the previous season's Super Bowl." ,
} ,
NBA : {
winner:"Detroit Pistons" ,
photo:"<img src='https://www.gannett-cdn.com/presto/2018/11/04/PDTF/f1f93736-850b-4877-8454-10f5c957acea-isiah_061490_trophy_wa.JPG?width=540&height=405&fit=bounds&auto=webp'>" ,
info: "The series pitted the Eastern Conference playoff champion Detroit Pistons (the previous year's champions) against the Western Conference playoff champion Portland Trail Blazers. This was the first NBA Finals since 1979 not to involve either the Los Angeles Lakers or the Boston Celtics.The Pistons became just the third franchise in NBA history to win back-to-back championships, joining the Lakers and Celtics.",
} , 
MLB : {
winner:"Cincinnati Reds " ,
photo:"<img src='https://static01.nyt.com/images/2012/01/11/sports/YKEPNER/YKEPNER-jumbo.jpg'>" ,
info:" The Reds defeated the Athletics in a four-game sweep. It was the fifth four-game sweep by the NL and second by the Reds after they did it in 1976." ,
}
},      
{
year: 1991,
NFL: {
winner:"New York Giants ",
photo:"<img src='https://img0.etsystatic.com/153/1/9500131/il_570xN.1086868024_d3ek.jpg'>" ,
info: "The Giants defeated the Bills by the score of 20–19, winning their second Super Bowl. The game was held at Tampa Stadium in Tampa, Florida, on January 27, 1991,",   
} ,
NBA : {
winner:"Chicago Bulls" ,
photo:"<img src='https://exnba.com/wp-content/uploads/2013/12/Magic-Jordan-1991-finals.jpg'>" ,
info:"It was Michael Jordan's first NBA Finals appearance, Magic Johnson's last, and the last NBA Finals for the Lakers until 2000. The Bulls would win the series, 4–1. Jordan averaged 31.2 points on 56% shooting, 11.4 assists, 6.6 rebounds, 2.8 steals and 1.4 blocks en route to his first NBA Finals MVP Award. This series would mark the end of the Lakers Showtime era and the beginning of the Bulls' dynasty. After winning five championships in eight finals appearances in the 1980s, the Lakers would struggle for the rest of the 1990s." ,
} , 
MLB : {
winner:"Minnesota Twins " ,
photo:"<img src='https://tse2.mm.bing.net/th?id=OIP.QGRgUYRB7ekt_Q0iXd1AMwHaFi&pid=Api&P=0&w=231&h=173'>" ,
info: "The Twins defeated the Braves four games to three to win the championship.In 2003, ESPN selected it as the Greatest of All Time in their World Series 100th Anniversary countdown, with five of its games being decided by a single run, four games decided in the final at-bat and three games going into extra innings.",
} ,
},
{
year: 1992,
NFL : {
winner:"Washington Redskins" ,
photo:"<img src='https://bgcdn.s3.amazonaws.com/wp-content/uploads/2016/03/C.Chandler-01.jpg'>" ,
info: "The Redskins defeated the Bills by a score of 37–24, becoming the fourth team after the Pittsburgh Steelers, the now Las Vegas Raiders and the San Francisco 49ers to win three Super Bowls. The Bills became the third team, after the Minnesota Vikings (Super Bowls VIII and IX) and the Denver Broncos (Super Bowls XXI and XXII) to lose back-to-back Super Bowls.",
} ,
NBA : {
winner:"Chicago Bulls" ,
photo:"<img src='http://www.nba-live.com/wp-content/uploads/2013/05/mj_shrug_1992.png'>" ,
info:"The Bulls would go on to win the series in six games. Michael Jordan was named Finals Most Valuable Player for the second year in a row, to go with his sixth straight regular season scoring title." ,
} , 
MLB : {
winner:"Toronto Blue Jays " ,
photo:"<img src='http://bluejayhunter.com/wp-content/uploads/2012/12/WS.jpg'>" ,
info:". Toronto defeated Atlanta four games to two, marking the first time a team based outside the United States won the World Series. The Blue Jays remain the only Canadian team to have appeared in, and won, a World Series (which they would do again the following year, in 1993)" ,
} ,
},
{
year: 1993,
NFL: {
winner:"Dallas Cowboys" ,
photo:"<img src='https://tse1.mm.bing.net/th?id=OIP.kU-uUqDKig3b0zGeKtNnLgAAAA&pid=Api&P=0&w=300&h=300'>" ,
info: "The Cowboys defeated the Bills by the score of 52–17, winning their third Super Bowl in team history, and their first one in 15 years. The Bills became the first team to lose three consecutive Super Bowls, and just the second team to play in three straight ",
} ,
NBA : {
winner:"Chicago Bulls" ,
photo:"<img src='https://i.ebayimg.com/images/g/PJMAAOSwAE9cukBN/s-l400.jpg'>" ,
info:"The Bulls became the first team since the legendary Boston Celtics of the 1960s to win three consecutive championship titles, clinching the three-peat with John Paxson's game-winning 3-pointer that gave them a 99–98 victory in Game 6. Remarkably, the away team won every game except for Chicago's win at home in Game 4." ,
} , 
MLB : {
winner:"Toronto Blue Jays" ,
photo:"<img src='http://sports.cbsimg.net/images/visual/whatshot/454301158-012515.jpg'>" ,
info: "The Blue Jays defeated the Phillies, four games to two. With Toronto ahead three games to two in the Series, but trailing Game 6 by a score of 6–5 in the bottom of the ninth inning, Joe Carter hit a game-winning three-run home run to clinch Toronto's second consecutive championship (the first team to repeat as champions since the 1977–78 Yankees).",
} ,
},
{
year: 1994,
NFL: {
winner:"Dallas Cowboys" ,
photo:"<img src='https://tse3.mm.bing.net/th?id=OIP.J7VcnnG75x2CdL3s9ZAe-AHaEW&pid=Api&P=0&w=281&h=166'>" ,
info:" The Cowboys defeated the Bills for the second straight year by the score of 30–13, winning their fourth Super Bowl in team history, tying the Pittsburgh Steelers and the San Francisco 49ers for most Super Bowl wins. The Bills were making their fourth consecutive Super Bowl appearance, but still seeking their first title." ,
} ,
NBA : {
winner:"Houston Rockets" ,
photo:"<img src='https://s.hdnux.com/photos/21/57/70/4652551/3/rawImage.jpg'>" ,
info:"The Rockets defeated the Knicks 4 games to 3 to win the team's first NBA championship. The series was Patrick Ewing's first NBA Finals appearance. The Rockets came in with strong determination to win not only the franchise's first NBA championship, but the city's first championship in a league that still existed." ,
} , 
MLB : {
winner:"Series Suspended" ,
photo:"<img src='https://tse2.mm.bing.net/th?id=OIP.4IGKCGqtV88sQyimOWPkUAHaEK&pid=Api&P=0&w=305&h=172'>" ,
info:"The 1994 World Series would have been the championship series of Major League Baseball's (MLB) 1994 season, but it was canceled on September 14 of that year due to a strike by the MLB Players Association that started on August 12." ,
} ,
},   
{
year: 1995,
NFL: {
winner: "San Francisco 49ers" ,
photo:"<img src='http://a3.ec-images.myspacecdn.com/images02/7/34195d0d318d4bcbb4d94ec41862ad11/l.jpg'>" ,
info: " The 49ers defeated the Chargers by the score of 49–26, becoming the first team to win five Super Bowl championships. This game is regarded as 49ers quarterback Steve Young's final leap out of the shadow of his predecessor, Joe Montana, who had won four Super Bowls with the 49ers.",
} ,
NBA : {
winner: "Houston Rockets",
photo:"<img src='https://sportsweeksportslist.files.wordpress.com/2013/05/hakeem-olajuwon-clyde-drexler-and-the-houston-rockets-won-the-1995-nba-championship.png'>" ,
info:" The Rockets became the first repeat NBA Champion in history to keep the title with a sweep. In addition, the Rockets became the first team in NBA history to win the title without having home-court advantage in any of the four playoff rounds since the playoffs was expanded to a 16 team format in 1984. Coincidentally, this feat would also be achieved by the New Jersey Devils that same year, when they won the Stanley Cup over the Detroit Red Wings." ,
} , 
MLB : {
winner:"Atlanta Braves " ,
photo:"<img src='https://tse2.mm.bing.net/th?id=OIP.K3m3OJWETemngqNbrkJFrAHaJo&pid=Api&P=0&w=300&h=300'>" ,
info:"The Braves won in six games to capture their third World Series championship in franchise history (along with 1914 in Boston and 1957 in Milwaukee), making them the first team to win at least one crown in three different cities. This was also Cleveland's first Series appearance in 41 years and marked the resumption of the Fall Classic after the previous year's Series was canceled due to a players' strike." ,
} ,
},   
{
year: 1996,
NFL : {
winner:"Dallas Cowboys" ,
photo:"<img src='https://sportsteamhistory.com/wp-content/uploads/2017/01/Super-Bowl-XXX-Cowboys-1995-.jpeg'>" ,
info: "The Cowboys defeated the Steelers by the score of 27–17. Both teams entered the game trying to tie the San Francisco 49ers for the record for most Super Bowl wins by a franchise.",
} ,
NBA : {
winner:"Chicago Bulls" ,
photo:"<img src='http://4.bp.blogspot.com/-0pJrlwlEVy0/Ve_TzvFpA6I/AAAAAAAABaQ/3YEvCu9LDho/s1600/1996.jpg'>" ,
info: "Chicago won the series 4 games to 2. Michael Jordan was named NBA Finals MVP.  This was the first championship in the Chicago Bulls second three-peat.",
} , 
MLB : {
winner:"New York Yankees" ,
photo:"<img src='https://www.thesportster.com/wp-content/uploads/2016/08/1996-NY-Yankees-mlb.jpg'>" ,
info:"The Yankees defeated the Braves, four games to two, to capture their first World Series title since 1978 and their 23rd World Series championship overall. The series was played from October 20–26, 1996, and was broadcast on television on Fox. Yankees relief pitcher John Wetteland was named the World Series Most Valuable Player for saving all four Yankee wins." ,
} ,
},
{
year: 1997,
NFL: {
winner:"Green Bay Packers" ,
photo:"<img src='http://www.packershistory.net/files/PACKERS/1996PACKERS-ReturntoGloryBook-A.jpg'>" ,
info: "The Packers defeated the Patriots by the score of 35–21, earning their third overall Super Bowl victory, and their first since Super Bowl II. The Packers also extended their league record for the most overall NFL championships to 12. It was also the last in a run of 13 straight Super Bowl victories by the NFC over the AFC",
} ,
NBA : {
winner:"Chicago Bulls" ,
photo: "<img src='https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2014%2F1214%2Fchi_g_jordants_1296x729.jpg'>",
info: "The Bulls won the series 4 games to 2. For the fifth time in as many Finals appearances, Michael Jordan was named NBA Finals MVP.",
} , 
MLB : {
winner: "Florida Marlins ",
photo: "<img src='https://s-media-cache-ak0.pinimg.com/736x/43/0a/97/430a970dc0546e507a037f6e2ac2230e.jpg'>",
info: "The Marlins, who were underdogs, defeated the Indians, four games to three, to win their first World Series championship. Game 7 was decided in extra innings on a walk-off single hit by Édgar Rentería. ",
}                     
},
{
year: 1998,
NFL: {
winner: "Denver Broncos" ,
photo:"<img src='http://www.denverpoststore.com/wp-content/uploads/2015/09/finally_poster.jpg'>" ,
info:"The Broncos defeated the Packers by the score of 31–24. The game was played on January 25, 1998 at Qualcomm Stadium in San Diego, California, the second time that the Super Bowl was held in that city.[6] Super Bowl XXXII also made Qualcomm Stadium the only stadium in history to have the Super Bowl and the World Series in the same year." ,
} ,
NBA : {
winner:"Chicago Bulls" ,
photo:"<img src='https://tse1.mm.bing.net/th?id=OIP.CfAKPGzKntZ8_8En6otVFgHaHn&pid=Api&P=0&w=300&h=300'>" ,
info:"In a repeat of the previous year's Finals, the Bulls won the series 4 games to 2 for their third consecutive NBA title and their sixth in eight seasons. Michael Jordan was voted the NBA Finals MVP of the series (he also had won the award the last five times the Bulls won the Finals: 1991, 1992, 1993, 1996, and 1997)." ,
} , 
MLB : {
winner:"New York Yankees " ,
photo:"<img src='http://i.ytimg.com/vi/Drv2z6sVLrA/hqdefault.jpg'>" ,
info:"The Yankees swept the Padres in four games to win their second World Series championship in three years and their 24th overall. Yankees third baseman Scott Brosius was named the World Series Most Valuable Player." ,
}                  
},
{
year: 1999,
NFL: {
winner:"Denver Broncos" ,
photo:"<img src='http://cdn.fansided.com/wp-content/blogs.dir/46/files/2012/02/2121509.jpg'>" ,
info:"The Broncos defeated the Falcons by the score of 34–19, winning their second consecutive Super Bowl. The game was played on January 31, 1999. At 38 years old, Elway became the oldest player, at the time, to be named Super Bowl MVP, a record that stood until Tom Brady surpassed it in 2017 at the age of 39, coincidentally also against Atlanta." ,
} ,
NBA : {
winner:"San Antonio Spurs" ,
photo:"<img src='https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_680,w_590/http%3A%2F%2Fhoopshabit.com%2Ffiles%2F2014%2F06%2Fap_c01_spurs_flag_28_9437571-590x900.jpg'>" ,
info:" The Spurs defeated the Knicks 4 games to 1 to win the championship. As of 2019, this is the last NBA Finals where neither team scored 100 or more points in any game during the series." ,
} , 
MLB : {
winner:"New York Yankees ",
photo:"<img src='http://mlb.mlb.com/mlb/ps/y2013/images/ws/1999_detail.jpg'>" ,
info:"The Yankees swept the 1999 Series in four games for their second consecutive title, third in four years, and 25th overall. It was the Yankees' third straight defeat of the Braves franchise in the Fall Classic (having beaten the Milwaukee Braves in the 1958 World Series in addition to their 1996 victory over the Atlanta Braves). Yankees closer Mariano Rivera was named the World Series Most Valuable Player." ,
} ,                             
},
{
year: 2000,
NFL: {
winner:"St. Louis Rams" ,
photo:"<img src='https://tse1.mm.bing.net/th?id=OIP.HcDl2iRXWIisfWsGJlDxcAHaEq&pid=Api&P=0&w=239&h=152'>" ,
info: "The Rams defeated the Titans by the score of 23–16, capturing their first Super Bowl win and first NFL championship since 1951. Rams linebacker Mike Jones tackled Tennessee wide receiver Kevin Dyson one yard short of the goal line to prevent the drive from resulting in a potentially game-tying touchdown. This play went into NFL lore as One Yard Short, or simply The Tackle",
} ,
NBA : {
winner:"Los Angeles Lakers" ,
photo:"<img src='https://tse4.mm.bing.net/th?id=OIP.9rbCiQK9xt6Welr0zfz1dwHaEK&pid=Api&P=0&w=330&h=186'>" ,
info:"The Western Conference champion Los Angeles Lakers defeated the Eastern Conference champion Indiana Pacers 4 games to 2. This was the Lakers' first championship in twelve years. Lakers center Shaquille O'Neal was named the NBA Finals Most Valuable Player (MVP) of the series, his first of three consecutive honors." ,
} , 
MLB : {
winner:"New York Yankees " ,
photo:"<img src='https://tse4.mm.bing.net/th?id=OIP.m-m3RBcTRBMzBbrEN0KzmQHaEc&pid=Api&P=0&w=261&h=157'>" ,
info:"The Yankees defeated the Mets, four games to one, to win their third consecutive championship and 26th overall. The series was often referred to as the Subway Series, referring to the longstanding matchup between New York baseball teams; it was the first World Series contested between two New York teams since the 1956 World Series. Yankees shortstop Derek Jeter was named the World Series Most Valuable Player." ,
} ,
},
{
year: 2001,
NFL: {
winner:"Baltimore Ravens" ,
photo:"<img src='https://i.ytimg.com/vi/vNRtwijYhlo/maxresdefault.jpg'>" ,
info: "The Ravens defeated the Giants by a score of 34–7, tied for the seventh largest Super Bowl margin of victory with Super Bowl XXXVII.[5] The game was played on January 28, 2001 at Raymond James Stadium in Tampa, Florida.",
} ,
NBA : {
winner:"Los Angeles Lakers" ,
photo:"<img src='https://tse4.mm.bing.net/th?id=OIP.8zKh9QAdV-T0bXOZYg6vMgHaEK&pid=Api&P=0&w=314&h=177'>" ,
info:"The Lakers won the series 4 games to 1. Lakers center Shaquille O'Neal was named the Most Valuable Player of the series." ,
} , 
MLB : {
winner:"Arizona Diamondbacks " ,
photo:"<img src='http://media-cache-ec0.pinimg.com/736x/ca/07/a7/ca07a79a58ecc7c31a575467131ba99b.jpg'>" ,
info: " The Diamondbacks defeated the Yankees, four games to three to win the series. Considered one of the greatest World Series of all time, memorable aspects included two extra-inning games and three late-inning comebacks. Diamondbacks pitchers Randy Johnson and Curt Schilling were both named World Series Most Valuable Players.",
} ,
},
{
year: 2002,
NFL: {
winner:"New England Patriots " ,
photo:"<img src='https://tse3.mm.bing.net/th?id=OIP.O-qKYVXso8IxWQplTzH75AHaEw&pid=Api&P=0&w=271&h=175'>" ,
info:"The Patriots defeated the Rams by the score of 20–17. It was New England's first Super Bowl championship, and the franchise's first league championship of any kind.[a] The game was also notable for snapping the AFC East's long streak of not being able to win a Super Bowl." ,
} ,
NBA : {
winner:"Los Angeles Lakers" ,
photo:"<img src='http://4.bp.blogspot.com/-qzLl6jgcaKI/Vifb5_3QL1I/AAAAAAAACK8/QX2Vf-DQ-_k/s1600/article-2589209-1C8FE4DA00000578-817_634x475.jpg'>" ,
info: "The Lakers swept the Nets, four games to none, to win the franchise's 14th NBA championship and third consecutive NBA championship. ",
} , 
MLB : {
winner:"Anaheim Angels " ,
photo:"<img src='https://tse1.mm.bing.net/th?id=OIP.7w106Vgdm2HVsJuyWQcv_gHaF4&pid=Api&P=0&w=210&h=168'>" ,
info:" The Angels defeated the Giants, four games to three, to win their first, and, to date, only World Series championship. " ,
} ,
},   
{
year: 2003,
NFL: {
winner:"Tampa Bay Buccaneers" ,
photo:"<img src='https://cbsnews1.cbsistatic.com/hub/i/2003/01/27/cbf0d558-a642-11e2-a3f0-029118418759/image537998x.jpg'>" ,
info: " The Buccaneers defeated the Raiders by the score of 48–21, tied with Super Bowl XXXV for the seventh largest Super Bowl margin of victory, and winning their first ever Super Bowl.",
} ,
NBA : {
winner:"San Antonio Spurs" ,
photo:"<img src='https://i.ebayimg.com/images/g/cToAAOSwg0BZxYUZ/s-l300.jpg'>" ,
info:"The Spurs defeated the Nets to win the series 4–2. Spurs' forward Tim Duncan was named the Most Valuable Player of the championship series." ,
} , 
MLB : {
winner:"Florida Marlins" ,
photo:"<img src='http://miami.marlins.mlb.com/images/2003/10/26/ZQS3jYCy.jpg'>" ,
info:" This is the most recent Series in which the losing team outscored the winning team; the Yankees lost, despite outscoring the Marlins 21–17 in the Series. This was the Marlins' second World Series championship win, having won their first in 1997. As of 2019, this is the last time the Marlins have appeared not only in the World Series, but in the postseason at all." ,
} ,
},
{
year: 2004,
NFL: {
winner:"New England Patriots " ,
photo:"<img src='http://ecx.images-amazon.com/images/I/51YRrQx3Z1L._SY300_.jpg'>" ,
info:"The Patriots defeated the Panthers by a score of 32–29. The game was played at Reliant Stadium in Houston, Texas, on February 1, 2004. At the time, this was the most watched Super Bowl ever with 144.4 million viewers" ,
} ,
NBA : {
winner:"Detroit Pistons" ,
photo:"<img src='https://i.ebayimg.com/images/g/Qb8AAOSwPc9WupVU/s-l400.jpg'>" ,
info:"Although the Lakers, headed by Kobe Bryant and Shaquille O'Neal, were considered the heavy favorites, the Pistons handily won the series in five games. This win marked the Pistons' fifth win overall as a franchise as well as its first title since the 1989-90 NBA season." ,
} , 
MLB : {
winner:"Boston Red Sox " ,
photo:"<img src='http://i.ebayimg.com/images/i/191468563620-0-1/s-l1000.jpg'>" ,
info:"The 100th edition of the World Series, it was a best-of-seven playoff between the American League (AL) champion Boston Red Sox and the National League (NL) champion St. Louis Cardinals;[1] the Red Sox swept the Cardinals in four games. The Red Sox's World Series championship was their first since 1918. " ,
} ,
}, 
{
year: 2005,
NFL: {
winner:"New England Patriots" ,
photo:"<img src='https://whyy.org/wp-content/uploads/2018/01/superbowl-2005-then-and-now-768x432.jpg'>" ,
info:"The Patriots defeated the Eagles by the score of 24–21. The game was played on February 6, 2005, at Alltel Stadium in Jacksonville, Florida, the first time the Super Bowl was played in that city." ,
} ,
NBA : {
winner:"San Antonio Spurs" ,
photo:"<img src='https://i.cdn.turner.com/nba/nba/media/spurs/poi_050627.jpg'>" ,
info:"The Spurs won the series four games to three in the first NBA Finals to go to a Game 7 since 1994. Sportswriters all across the country generally considered this one of the few too-close-to-call series to occur. Most picked the series to go to six or seven games." ,
} , 
MLB : {
winner:"Chicago White Sox" ,
photo:"<img src='http://d.gr-assets.com/books/1390927964l/9434.jpg'>" ,
info: "The White Sox swept the Astros in four games, winning their third World Series championship and their first in 88 seasons. Although the series was a sweep, all four games were quite close, being decided by two runs or fewer. The series was played between October 22–26, 2005.",
} ,
},    
{
year: 2006,
NFL: {
winner:"Pittsburgh Steelers" ,
photo:"<img src='http://www.hoosfootball.com/images/Pittsburgh_Steelers_SUPER_BOWL_CHAMPIONS_Poster_-_Super_Bowl_XL_2006_Commemorative_Poster_-_Hines.jpg'>" ,
info:"The Steelers defeated the Seahawks by the score of 21–10. The game was played on February 5, 2006, at Ford Field in Detroit, Michigan." ,
} ,
NBA : {
winner:"Miami Heat" ,
photo:"<img src='https://1.bp.blogspot.com/-odMpVNU78dk/UqZdbrjKBBI/AAAAAAAAAPA/ap1VO0ZwZfY/s1600/AAHE099_8x10Shaquille-O-Neal-And-Dwayne-Wade-2006-NBA-Finals-Posters%5B2%5D+(1).jpg'>" ,
info: "The Miami Heat won the title in six games over the Dallas Mavericks, becoming the third team—after the 1969 Celtics and the 1977 Trail Blazers—to win a championship after trailing 0–2 in the series. Dwyane Wade of the Heat was named Most Valuable Player of the series.",
} , 
MLB : {
winner:"St. Louis Cardinals " ,
photo:"<img src='https://images.pristineauction.com/57/576040/main_1481579637-2006-Cardinals-World-Series-Champions-11x14-Photo-Team-Signed-by-8-with-Jeff-Suppan-Gary-Bennett-Jason-Isringhausen-JSA-COA-PristineAuction.com.jpg'>" ,
info:"The 102nd edition of the World Series,[1] it was a best-of-seven playoff between the American League (AL) champion Detroit Tigers and the National League (NL) champion St. Louis Cardinals; the Cardinals won the series in five games, taking games one, three, four, and five. This was the third World Series meeting between the Tigers and the Cardinals, the first in 38 years. The Cardinals won the first in 1934, and the Tigers won the second in 1968; each went the full seven games." ,
} ,
},  
{
year: 2007,
NFL: {
winner:"Indianapolis Colts " ,
photo:"<img src='http://a.abcnews.com/images/Sports/gty_peyton_manning_superbowl_2007_jc_160201_4x3_992.jpg'>" ,
info:"The Colts defeated the Bears by the score of 29–17. The game was played on February 4, 2007 at Dolphin Stadium in Miami Gardens, Florida. This game featured two teams ending long Super Bowl appearance droughts." ,
} ,
NBA : {
winner:"San Antonio Spurs" ,
photo:"<img src='https://static01.nyt.com/images/2007/06/14/sports/basketball/15nba-3-600.jpg'>" ,
info:"This was Cleveland's first trip to the NBA Finals in their franchise history and San Antonio's fourth. The Spurs swept the Cavaliers 4 games to 0. Tony Parker was named the series' MVP. " ,
} , 
MLB : {
winner:"Boston Red Sox" ,
photo:"<img src='http://ecx.images-amazon.com/images/I/51rT6-wvx6L._SX258_BO1,204,203,200_QL70_.jpg'>" ,
info:"The Red Sox swept the Rockies in four games. It was the Rockies' first appearance in a World Series. The Red Sox's victory was their second World Series championship in four seasons and their seventh overall; it also marked the third sweep in four years by the AL champions" ,
} ,
},   
{
year: 2008,
NFL: {
winner:"New York Giants " ,
photo:"<img src='https://cdnph.upi.com/sv/ph/og/upi/2081528661649/2018/1/8c53f12aad6138686f423df8b9030194/v1.5/New-York-Giants-Zak-DeOssie-drove-away-with-Super-Bowl-rings-on-top-of-car.jpg'>" ,
info: "The Giants defeated the Patriots by the score of 17–14. The game is regarded as one of the biggest upsets in the history of professional sports, as well as one of the greatest Super Bowl games ever. ",
} ,
NBA : {
winner: "Boston Celtics",
photo:"<img src='https://tse4.mm.bing.net/th?id=OIP.XEY_SjkmG8kwch2gG4cTxAHaJB&pid=Api&P=0&w=300&h=300'>" ,
info:" The Boston Celtics, top-seeded champions of the Eastern Conference, defeated the Los Angeles Lakers, top-seeded champions of the Western Conference, four games to two in a best-of-seven series. This was Boston's first title since 1986 during the Larry Bird era and 17th overall." ,
} , 
MLB : {
winner:"Philadelphia Phillies" ,
photo:"<img src='http://www.soulfulplanet.com/forum/uploads/20081112_215156_Phillies_2008_C.jpg'>" ,
info:"The Phillies won their second championship in their 126-year history to bring the city of Philadelphia its first championship in 25 years (since the 1983 NBA Finals)." ,
} ,
}, 
{
year: 2009,
NFL: {
winner:"Pittsburgh Steelers" ,
photo:"<img src='https://media.spokesman.com/photos/2009/02/03/spt_3_superbow_02-03-2009_9OFA5AU.jpg'>" ,
info:"The Steelers defeated the Cardinals by the score of 27–23. With this victory, the Steelers became the first team to win six Super Bowl championships. The win was also Pittsburgh's second Super Bowl victory in four years, after winning Super Bowl XL at the end of the 2005 season. The Cardinals entered the game seeking their first NFL title since 1947, the longest championship drought in the league." ,
} ,
NBA : {
winner:"Los Angeles Lakers" ,
photo:"<img src='https://usatftw.files.wordpress.com/2017/07/kobe-champion.jpg?w=1200'>" ,
info:"The Lakers defeated the Magic, four games to one, to win the franchise's 15th NBA championship." ,
} , 
MLB : {
winner: "New York Yankees ",
photo:"<img src='https://tse1.mm.bing.net/th?id=OIP.MMUEksnHf1fv1gFMzl4RhwHaE9&pid=Api&P=0&w=252&h=169'>" ,
info:" The Yankees defeated the Phillies, 4 games to 2, winning their 27th World Series championship. The series was played between October 28 and November 4, broadcast on Fox, and watched by an average of roughly 19 million viewers." ,
} ,
}, 
{
year: 2010,
NFL: {
winner:"New Orleans Saints" ,
photo:"<img src='https://static01.nyt.com/images/2010/02/08/sports/08superbowl02/08superbowl02-articleLarge.jpg'>" ,
info:"This was the Saints' first Super Bowl appearance and the fourth for the Colts franchise, their second appearance in four seasons. The Saints entered the game with a 13–3 record for the 2009 regular season, compared to the Colts' 14–2 record." ,
} ,
NBA :{
winner:"Los Angeles Lakers" ,
photo:"<img src='https://i.ytimg.com/vi/4jjeW8q491Q/maxresdefault.jpg'>" ,
info: " The Lakers defeated the Celtics, four games to three, to win the franchise's 16th NBA championship.The Lakers had won the previous season's NBA Finals against the Orlando Magic for the franchise's 15th championship. The Celtics won their previous NBA Finals appearance against the Lakers in 2008. This was the 12th Finals played between the two rival teams. ",
} , 
MLB : {
winner: "San Francisco Giants",
photo:"<img src='https://i.ebayimg.com/images/g/6fIAAOSwKzpZg29b/s-l400.jpg'>" ,
info:"the Giants won the series, four games to one, to secure their first World Series championship since 1954 and their first since relocating to San Francisco from New York City in 1958" ,
} ,
},    
{
year: 2011,
NFL : {
winner:"Green Bay Packers " ,
photo: "<img src='http://a.espncdn.com/photo/2011/0207/pg2_g_rogersbelt_576.jpg'>",
info:" The Packers defeated the Steelers by the score of 31–25. Packers quarterback Aaron Rodgers was named Super Bowl MVP, completing 24 of 39 passes for 304 yards and three touchdowns." ,
} ,
NBA : {
winner:"Dallas Mavericks" ,
photo:"<img src='https://tse1.mm.bing.net/th?id=OIP.I15uI8C73f3GKJ_2itAFNQHaEK&pid=Api&P=0&w=356&h=201'>" ,
info:"Mavericks forward and German player Dirk Nowitzki was named the Finals MVP, becoming the second European to win the award after Tony Parker (2007) and the first German player to do so.[3] The series was a rematch of the 2006 NBA Finals, which the Heat had won in six games to win their first NBA championship." ,
} , 
MLB : {
winner:"St. Louis Cardinals " ,
photo:"<img src='http://www.highlandmint.com/images/products/detail/FIELD99K.1.jpg'>" ,
info: "The 107th edition of World Series, it was a best-of-seven playoff played between the American League (AL) champion Texas Rangers and the National League (NL) champion St. Louis Cardinals;[2][3] the Cardinals defeated the Rangers in seven games to win their 11th World Series championship and their first since 2006.",
} ,
},
{
year: 2012,
NFL : {
winner:"New York Giants" ,
photo:"<img src='https://tse4.mm.bing.net/th?id=OIP.z0z7VPQJvX1I4_EiSkFdogHaE8&pid=Api&P=0&w=301&h=201'>" ,
info:"The Giants defeated the Patriots by the score of 21–17. Some considered this game to be a rematch of Super Bowl XLII, which New York also won, spoiling New England's run at a perfect 2007 season." ,
} ,
NBA : {
winner:"Miami Heat" ,
photo:"<img src='https://tse2.mm.bing.net/th?id=OIP.JVT5GvdpKE7RnvAL8ooWkQHaE8&pid=Api&P=0&w=275&h=184'>" ,
info:"The Eastern Conference champion Miami Heat defeated the Western Conference champion Oklahoma City Thunder four games to one to win their second NBA title. Heat small forward LeBron James was named the Finals MVP." ,
} , 
MLB : {
winner:"San Francisco Giants" ,
photo:"<img src='http://images.footballfanatics.com/FFImage/thumb.aspx?i=%2fproductImages%2f_1066000%2fff_1066487_xl.jpg&w=400'>" ,
info:"This marked the Giants' seventh World Series title in franchise history, their second in San Francisco (they won five in New York), and their second in a three-year period (2010–2012). Their World Series sweep was the first by an NL team since the Cincinnati Reds swept the Oakland Athletics in the 1990 series and the first NL sweep not by the Reds since 1963, when the Los Angeles Dodgers swept the New York Yankees. This was also the first World Series since 1988 to feature both of that year's League MVPs (Miguel Cabrera for the AL and Buster Posey for the NL)." ,
} ,
},   
{
year: 2013,
NFL: {
winner:"Baltimore Ravens" ,
photo:"<img src='https://bhuwanchand.files.wordpress.com/2013/02/baltimore-raven-win-super-bowl-2013.jpg?w=770'>" ,
info:"The Ravens defeated the 49ers by the score of 34–31, handing the 49ers their first Super Bowl loss in franchise history. Miami became the sixth team to win consecutive NBA championships." ,
} ,
NBA : {
winner: "Miami Heat",
photo:"<img src='http://a.espncdn.com/photo/2013/0823/nba_g_heat_kh_576.jpg'>" ,
info:"The Eastern Conference champion Miami Heat defeated the Western Conference champion San Antonio Spurs to win their second straight title." ,
} , 
MLB : {
winner: "Boston Red Sox",
photo:"<img src='http://img.bleacherreport.net/img/images/photos/002/585/945/RedSoxWorldSeries_crop_exact.jpg?w=1200&h=1200&q=75'>" ,
info:"the Red Sox won, 4 games to 2. The Red Sox had home field advantage for the series, based on the AL's win in the 2013 MLB All-Star Game on July 16.[2] This was the first World Series since 1999 to feature both #1 seeds from the American League and National League.  " ,
} ,
},  
{
year: 2014,
NFL: {
winner:"Seattle Seahawks" ,
photo:"<img src='https://cdn.vox-cdn.com/thumbor/CQyXWY9gnhW1VyQLYMKooW88nZw=/0x2:4000x2669/1200x800/filters:focal(0x2:4000x2669)/cdn.vox-cdn.com/uploads/chorus_image/image/27941517/466663629.0.jpg'>" ,
info:"The Seahawks defeated the Broncos 43–8, the largest margin of victory for an underdog and tied for the third largest point differential overall (35) in Super Bowl history with Super Bowl XXVII (1993). It was the first time the winning team scored over 40 points, while holding their opponent to under 10. This became the first Super Bowl victory for the Seahawks and the fifth Super Bowl loss for the Broncos, tied with the New England Patriots for the most of any team." ,
                                                                                                                                                        } ,
NBA : {
winner:"San Antonio Spurs" ,
photo:"<img src='http://i.huffpost.com/gen/1855868/images/o-SPURS-facebook.jpg'>" ,
info:"The Western Conference champion San Antonio Spurs defeated the defending NBA champion and Eastern Conference champion Miami Heat in five games (4–1) for the Spurs' fifth NBA championship in franchise history. The Spurs outscored the Heat in the series by the largest average point differential (14.0) in Finals history, and ended their chances of a three-peat, the first that would have occurred since the 2000-2002 Los Angeles Lakers." ,
                                                                                                                                                        } , 
MLB : {
winner: "San Francisco Giants",
photo:"<img src='https://s.yimg.com/aah/autographsforsale/san-francisco-giants-2014-world-series-champions-dynasty-san-francisco-chronicle-commemorative-magazine-63.jpg'>" ,
info:"The Giants defeated the Royals four games to three to clinch their third World Series championship in a five-season span (2010–14), and their third overall since the club's move to San Francisco from New York. It was the Giants' eighth World Series championship in franchise history." ,
} ,
                                                                                                         },
{
year: 2015,
NFL: {
winner:"New England Patriots " ,
photo:"<img src='https://i.ytimg.com/vi/ZWkWFF2qW1w/maxresdefault.jpg'>" ,
info:"The American Football Conference (AFC) champion New England Patriots defeated the National Football Conference (NFC) champion and defending Super Bowl champion Seattle Seahawks 28–24 to earn their fourth Super Bowl title and their first since Super Bowl XXXIX 10 years earlier.  With 26 seconds remaining in the game, Seattle decided to pass the ball in a highly scrutinized call that resulted in Patriots undrafted rookie Malcolm Butler making a game-saving interception of Russell Wilson's throw." ,
} ,
NBA : {
winner:"Golden State Warriors" ,
photo:"<img src='https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2015%2F0616%2Fnba_u_curryiggy1_cr__1296x729.jpg'>" ,
info:"The Western Conference champion Golden State Warriors defeated the Eastern Conference champion Cleveland Cavaliers in six games (4–2) for the Warriors' first title in 40 years and their fourth in franchise history, becoming the first team since the 1990–91 Chicago Bulls to win a championship without any prior Finals experience from any player on their roster. Golden State's Andre Iguodala was named the Finals Most Valuable Player (MVP)." ,
} , 
MLB : {
winner: "Kansas City Royals",
photo:"<img src='https://tribzap2it.files.wordpress.com/2015/11/royals-win-the-2015-world-series.jpg?w=1100'>" ,
info: "The series was played between October 27 and November 1, with the Royals winning the series 4 games to 1. It was the first time since the 2010 World Series that the Series extended into November.",
} ,
},   
{
year: 2016,
NFL: {
winner:"Denver Broncos" ,
photo:"<img src='https://31.cdn.bit2host.eu/wp-content/uploads/2016/02/broncos-wins-super-bowl-501.jpg'>" ,
info:"The American Football Conference (AFC) champions Denver Broncos defeated the National Football Conference (NFC) champions Carolina Panthers, 24–10. The game was played on February 7, 2016, at Levi's Stadium in Santa Clara, California, in the San Francisco Bay Area. " ,
} ,
NBA : {
winner:"Cleveland Cavaliers" ,
photo:"<img src='https://cdn.nba.net/nba-drupal-prod/styles/landscape_1045w/http/nba.cdn.turner.com/nba/big/video/2016/12/24/a1040a24-a7b4-4c51-863e-d6e54b43b6af.nba_1_1280x720.jpg?itok=YCmGFH-j'>" ,
info:" The Eastern Conference champion Cleveland Cavaliers defeated the defending NBA champion and Western Conference champion Golden State Warriors 4–3 in a rematch of the 2015 NBA Finals." ,
} , 
MLB : {
winner:"Chicago Cubs" ,
photo:"<img src='http://images.footballfanatics.com/FFImage/thumb.aspx?i=/productImages%2F_2617000%2Fff_2617971_full.jpg&w=600'>" ,
info:"The Cubs defeated the Indians 4 games to 3 to win their first World Series since 1908. Game 7, an 8–7 victory in 10 innings, marked the fifth time that a Game 7 had gone into extra innings and the first since 1997 (which the Indians also lost). It was also the first Game 7 to have a rain delay, which occurred as the tenth inning was about to start. " ,
} ,
},      
{
year: 2017,
NFL: {
winner:"New England Patriots " ,
photo:"<img src='https://tse4.mm.bing.net/th?id=OIP.TJVMVVERfYtbjYw7TNenoQHaEH&pid=Api&P=0&w=349&h=195'>" ,
info: "The American Football Conference (AFC) champion New England Patriots, after trailing by as many as 25 points (28–3) during the third quarter, defeated the National Football Conference (NFC) champion Atlanta Falcons, 34–28 in overtime. As such, the game is often known as 28–3 after the Falcons' blown lead.",
} ,
NBA : {
winner:"Golden State Warriors" ,
photo:"<img src='https://i.ytimg.com/vi/RRTsQmGM53c/maxresdefault.jpg'>" ,
info:" The Western Conference champion Golden State Warriors defeated the defending NBA champion and Eastern Conference champion Cleveland Cavaliers four games to one. This Finals was the first time in NBA history the same two teams had met for a third consecutive year. The Cavaliers sought to repeat as champions after winning the championship in 2016, while the Warriors won the first meeting in 2015." ,
} , 
MLB : {
winner:"Houston Astros" ,
photo:"<img src='https://rfathead-res.cloudinary.com/image/upload/q_auto/c_pad,w_4225,h_3000/prodplus/17-10172_mlb_houston_astros_2017_world_series_champs_realbig_mural_pdp.jpg'>" ,
info:"The Astros defeated the Dodgers, four games to three, to win their first World Series in franchise history, also becoming the first team from Texas to do so. In the aftermath of the MLB's investigation into the Astro's alleged sign-stealing scandal, many have claimed that their win was illegitimate due to cheating, and have called for the trophy and rings to be renounced." ,
} ,
},    
{
year: 2018,
NFL: {
winner:"Philadelphia Eagles" ,
photo:"<img src='https://www.toledoblade.com/image/2018/02/05/Eagles-Patriots-Super-Bowl-Football-25.JPG'>" ,
info:" The National Football Conference (NFC) champion Philadelphia Eagles defeated the American Football Conference (AFC) and defending Super Bowl LI champion New England Patriots, 41–33, to win their first Super Bowl[10] and their first NFL title since 1960. Nick Foles' trick play touchdown catch later became known as the Philly Special and joined NFL lore alongside his unexpected performance." ,
} ,
NBA : {
winner:"Golden State Warriors" ,
photo:"<img src='https://tse3.mm.bing.net/th?id=OIP.FDsWs5W1KEhexs0vC1XFDQHaEK&pid=Api&P=0&w=356&h=201'>" ,
info: " In this best-of-seven playoff, the defending NBA champions and Western Conference champions Golden State Warriors swept the defending Eastern Conference champions Cleveland Cavaliers four games to zero. This year's Finals was the first time in any of North America's four major professional sports leagues that the same two teams met for the championship four years in a row.",
} , 
MLB : {
winner:"Boston Red Sox " ,
photo:"<img src='https://images.complex.com/complex/images/c_fill,g_center,w_1200/fl_lossy,pg_1/bbryhweit8le090huqrv/alex-cora-red-sox-world-series-champions'>" ,
info:"Red Sox defeated the Dodgers in five games to win their fourth World Series title in 15 years dating back to 2004, and their ninth in franchise history. This was the second World Series matchup between the two franchises, after the Red Sox defeated the Brooklyn Robins (later known as the Dodgers) in five games in 1916." ,
} ,
},       
{
year: 2019,
NFL: {
winner:"New England Patriots " ,
photo:"<img src='https://static.timesofisrael.com/www/uploads/2019/02/AP_19035133874172.jpg'>" ,
info: " The American Football Conference (AFC) champion New England Patriots defeated the National Football Conference (NFC) champion Los Angeles Rams, 13–3. The Patriots' victory was their sixth, tying the Pittsburgh Steelers for the most Super Bowl championships. ",
} ,
NBA : {
winner:"Toronto Raptors" ,
photo:"<img src='https://tse4.mm.bing.net/th?id=OIP.Byg5pCrdwmO_0zDVATWo0QHaDt&pid=Api&P=0&w=303&h=152'>" ,
info: " In the best-of-seven playoff series held from May 30 through June 13, 2019, the Eastern Conference champion Toronto Raptors defeated the Western Conference champion Golden State Warriors, 4–2, earning the franchise its first NBA championship as well as the first win by a team based outside the United States.",
} , 
MLB : {
winner:"Washington Nationals" ,
photo:"<img src='https://cconnect.s3.amazonaws.com/wp-content/uploads/2019/10/2019-Washington-Nationals-World-Series-Champions-Locker-Room-Towel.jpg'>" ,
info:"The Nationals won the series, four games to three, to secure their first title in franchise history. Washington pitcher Stephen Strasburg was named the World Series Most Valuable Player (MVP) after earning two wins in the series." ,
} ,
}, 
{
year: 2020,
NFL: {
winner:"Kansas City Chiefs" ,
photo:"<img src='https://tse4.mm.bing.net/th?id=OIP.h3gmDWMx0oLGwQCUs8i_dwHaE8&pid=Api&P=0&w=230&h=154'>" ,
info: " The American Football Conference (AFC) champion Kansas City Chiefs defeated the National Football Conference (NFC) champion San Francisco 49ers 31–20, marking their first Super Bowl victory since Super Bowl IV and the Chiefs' first NFL championship since joining the league in the AFL–NFL merger.",
} ,
NBA : {
winner: "Season Suspended",
photo:"<img src='https://www.nbcsports.com/philadelphia/sites/csnphilly/files/2020/03/11/1920x1080_nba_season_suspended.jpg'>" ,
info:"The regular season began on October 22, 2019, and was suspended on March 11, 2020 as a result of the coronavirus pandemic.[1] The 2020 NBA All-Star Game was played on February 16, 2020, at the United Center in Chicago, Illinois, and was won by Team LeBron, 157–155. The playoffs were scheduled to begin on April 18, 2020, and end with the NBA Finals in June 2020." ,
} , 
MLB : {
winner:"Season Suspended" ,
photo:"<img src='https://tse2.mm.bing.net/th?id=OIP.8W2ITllaVhl1goy_n59jvgEsCo&pid=Api&P=0&w=337&h=190'>" ,
info: "The 2020 Major League Baseball season was scheduled to begin on March 26. However, the coronavirus pandemic caused Major League Baseball (MLB) to announce on March 12 that the remainder of spring training games were canceled and that the start of the regular season would be delayed by at least two weeks. Four days later, MLB announced that the season would be postponed indefinitely, following recommendations from the CDC to restrict events of more than 50 people for an eight-week period. This is the first time MLB games have been put on hold since the 2001 season, when the season was paused for over a week after the September 11 attacks.",
},                                                                                                                                                                              
}]                                          




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

monthDisplay = {
    "01" : "January",
    "02" : "Feburary",
    "03" : "March",
    "04" : "April",
    "05" : "May",
    "06" : "June",
    "07" : "July",
    "08" : "August",
    "09" : "September",
    "10" : "October",
    "11" : "November",
    "12" : "December",
}

const yearArray = [1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 
    1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 
    1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 
    2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 
    2018, 2019, 2020];

    function setPage(){
        $('.articles').hide();
        $('.articleLinks').hide();
        $('.articleHeadline').hide();
        $('.articleLead').hide();
        $('.validationBox').hide();
        $('.validationBox1').hide();
    }

    function testInputs(){
        $('.enter').on('click',function(x){
        x.preventDefault();
        yrVal = $('.year').val();
        dyVal = $('.date').val();
        $('.validationBox').empty();
        $('.validationBox1').empty();
        $('.validationBox').hide();
        $('.validationBox1').hide();
        $('.yearTopic').empty();
        validateYear();
    })

}

function validateYear(){
    if (yrVal > 1979 && yrVal < 2020){
        year = yrVal;
        defineSearch();
    }
    else {
        $('.validationbox').show();
        $('.validationBox').append('<p class= "error1">Must fill in a year between 1980 - 2020</p>');
        throw "Must fill in a year between 1980 - 2020";
        
    }
}
 
function defineSearch(){
    if ( dyVal == "" ){
        $('.dateSearch').hide();
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
            $('.validationbox1').show();
            $('.validationBox1').append(`
            <ul class = "error2">Please enter a valid date : 
             <li>September 3</li>
             <li>9/3</li> 
             <li>09/03</li>
             <li>09 03</li>
             <li>September 3rd</li>   
             <li>9-3</li>   
             <li>09-03</li>   
             <li>9 3</li>
            </ul>`)
            throw "Invaild date: please enter a valid date"
        }
        validateDate();

}

function validateDate(){
        if ( month.hasOwnProperty(monthLow) === true){
            monthToBeSearched = dates[0][`${monthLow}`];
        }
        else {
            $('.validationbox1').show();
            $('.validationBox1').append(`
            <p class = "error2">Please enter a valid date :
               September 3     9/3   09/03  09 03
               September 3rd   9-3   09-03   9 3
            </p>`)
            throw "Invaild date: please enter a valid date"
        }

        if ( day.hasOwnProperty(dayLow) === true){
            dayToBeSearched = dates[1][`${dayLow}`];
        }
        else {
            $('.validationbox1').show();
            $('.validationBox1').append(`
            <p class = "error2">Please enter a valid date :
               September 3     9/3   09/03  09 03
               September 3rd   9-3   09-03   9 3
            </p>`)
            throw "Invalid date: please enter valid date";
        }

         dateTobeSearched = year + "-" + monthToBeSearched + "-" + dayToBeSearched;
         $('.dateSearch').hide();
         runFullDateSearch()
}

function createRandomDate(){
    $(".random").on('click',function(e){ 
    e.preventDefault();
    $('.pres').empty();
    $('.validationBox').empty();
    $('.topicValidBOX').empty();
    $('.pres').empty();
    $('.sportsArticles').empty();
    $('.national').empty();
    $('.world').empty();
    $('.arts').empty();
    $('.president').empty();
    $('.sportsChamps').empty();
    $('.albums').empty();
    $('.actor').empty();
    $('.movie').empty();
    $('.yearTopic').empty();
    $('.pageDate').empty();
    $('.notFound').hide();
    // $('.articles').empty();
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
        x.preventDefault()
        $('.dateSearch').hide();
        $('.yearTopic').empty();
        $('.validationBox').hide();
        $('.topicValidBOX').hide();
        $('.pres').empty();
        $('.sportsArticles').empty();
        $('.national').empty();
        $('.world').empty();
        $('.arts').empty();
        $('.president').empty();
        $('.sportsChamps').empty();
        $('.albums').empty();
        $('.actor').empty();
        $('.movie').empty();
        $('.pageDate').empty();
        $('.notFound').hide();
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
        // console.log(topicYear)
        // console.log(keyword)
        runTopicInYearSearch();
    })
}

function validateTopicAndYear(){
    if ( topicValue == "" || topicYear == ""){
        $('.topicValidBox').append(`<p>Must fill both topic and year : New York Yankees 2003 </p>`);
        throw "must fill in both topic and year boxes";
    }
}

// function handleExampleButton(){
//     $('.example').on('click',function(e){
//         e.preventDefault();
//         $('.exampleDiv').show();
//     })
//     $('.return').on('click',function(e){
//         e.preventDefault();
//         $('.exampleDiv').hide();
//     })

// }


function runFullDateSearch(){
    // console.log(dateTobeSearched);
    $('.articles').show();
    $('.return').show();
    getSports();
    getArts();
    getWorld();
    getPres();
    getNational();
    addSectionNames();
}

function addSectionNames(){
    $('.pres').append('<p class = "sectionName">President & Politics</p><p class ="pageDate"></p>');
    $('.sportsArticles').append('<p class = "sectionName">Sports</p>');
    $('.national').append('<p class = "sectionName">Nation</p>');
    $('.world').append('<p class = "sectionName">World</p>');
    $('.arts').append('<p class = "sectionName">Arts</p>');
    reverseDate();
}

function reverseDate(){
    newDate = dateTobeSearched.split("-")
    dateYear = newDate[0];
    dateMonth = newDate[1];
    dateDay = newDate[2];
    printMonth = monthDisplay[dateMonth];
    printDate = `${printMonth} ${dateDay}, ${dateYear}`
    $('.pageDate').append(printDate);
}

function returnHome(){
    $('.return').on('click',function(){
        $('.articles').hide();
        $('.return').hide();
        $('.yearInfo').hide();
        $('.dateSearch').show();
        $('.pres').empty();
        $('.sportsArticles').empty();
        $('.national').empty();
        $('.world').empty();
        $('.arts').empty();
        $('.president').empty();
        $('.sportsChamps').empty();
        $('.albums').empty();
        $('.actor').empty();
        $('.movie').empty();
        $('.pageDate').empty();
    })
}

function getSports(){
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=pub_date:(${dateTobeSearched})AND section_name:("sports")AND document_type:("article")&api-key=00ag7P5IOG0j0x72NeaRMSnhusKQ2IEB`)
    .then(response => response.json())
    .then(responseJson => { 
    newClass = "sportsArticles";
    findFullParagraphs(responseJson);
})
};
function getArts(){
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=pub_date:(${dateTobeSearched})AND section_name:("arts")AND document_type:("article")&api-key=00ag7P5IOG0j0x72NeaRMSnhusKQ2IEB`)
    .then(response => response.json())
    .then(responseJson => { 
    newClass = "arts";
    findFullParagraphs(responseJson);
})
};

function getWorld(){
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=pub_date:(${dateTobeSearched})AND section_name:("world")AND document_type:("article")&api-key=00ag7P5IOG0j0x72NeaRMSnhusKQ2IEB`)
    .then(response => response.json())
    .then(responseJson => { 
    newClass = "world";
    findFullParagraphs(responseJson);   
})
};


// function getTech(){
//     fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=pub_date:(${dateTobeSearched})AND section_name:("science")AND document_type:("article")&api-key=00ag7P5IOG0j0x72NeaRMSnhusKQ2IEB`)
//     .then(response => response.json())
//     .then(responseJson => { 
//     console.log(responseJson)
//     newClass = "tech"
//     findFullParagraphs(responseJson);
// })
// };

function getPres(){
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=US President&fq=pub_date:(${dateTobeSearched})AND document_type:("article")&api-key=00ag7P5IOG0j0x72NeaRMSnhusKQ2IEB`)
    .then(response => response.json())
    .then(responseJson => { 
    newClass = "pres"
    findFullParagraphs(responseJson);
})
};

function getNational(){
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=pub_date:(${dateTobeSearched})AND section_name:("US")AND document_type:("article")&api-key=00ag7P5IOG0j0x72NeaRMSnhusKQ2IEB`)
    .then(response => response.json())
    .then(responseJson => { 
    // console.log(responseJson)
    newClass = "national"
    findFullParagraphs(responseJson);
})
};

function findFullParagraphs(s){
    articleInfo = []
for(i = 0; i < s.response.docs.length; i++){
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

function editAndPrintHeadlines(s){
    for( i = 0; i < 3; i++){
        if (articleInfo[i].headline.main.length < 10){
            $(`.${newClass}`).append(`<div class = "sectionArticle">
            <h2 class = "articleHeadline "> ${articleInfo[i].headline.print_headline} </h2>
            <p class = "articleLead ">${articleInfo[i].lead_paragraph}</p>
            <a class = "articleLinks" href=${articleInfo[i].web_url}>read more</a>
            <p class = "articleDash"> __________________ </p>
            <p class = "articleDash1"> __________________</p>
            </div>`);
        }
        else if (articleInfo[i].headline.main.length > 10){
         $(`.${newClass}`).append(`<div class = "sectionArticle">
         <h2 class = "articleHeadline"> ${articleInfo[i].headline.main} </h2>
         <p class = "articleLead ">${articleInfo[i].lead_paragraph}</p>
         <a class = "articleLinks" href=${articleInfo[i].web_url}>read more</a>
         <p class = "articleDash"> __________________ </p>
         <p class = "articleDash1"> __________________</p>
         </div>
         `);
        }   
}           
}

function runYearSearchOnly(){
    takeYearandFindTopMovies();
    findAlbumsofYear(); 
    getPresident();
    AddClassToImg();    
};

function AddClassToImg(){
    for(i = 0; i < champs.length; i++){
        if (year == champs[i].year){
    pic = champs[i].NFL.photo;
    pic1 = champs[i].NBA.photo;
    pic2 = champs[i].MLB.photo;
     nflPic = $(pic).addClass(`sportsPic nflPic nflPic${i}`);
     nbaPic = $(pic1).addClass(`sportsPic nbaPic nbaPic${i}`)
     mlbPic = $(pic2).addClass(`sportsPic mlbPic mlbPic${i}`)
     sportsByYear();
      }
    }
}

function getPresident(){

    $('.yearInfo').show();
    $('.return').show();
    $('.president').show();
    $('.yrYear').append(year);
    if (year == 1980){
        $('.president').append(`<ul class ="Carter">
        <li>${newPic}</li>
        <li class = "presName">${presidents[0].pres}</li>
        <p class = "yearSection presYear">President</p>
        <p class = "yrYear">${year}</p>
        <li class = "presInfo">${presidents[0].info}</li>
        </ul>`)
    }
    else if (year >= 1981 && year <= 1988) {
        $('.president').append(`<ul class ="Regan">
        <li class = "presPic">${presidents[1].photo}</li>
        <li class = "presName">${presidents[1].pres}</li>
        <p class = "yearSection presYear">President</p>
        <p class = "yrYear">${year}</p>
        <li class = "presInfo">${presidents[1].info}</li>
        </ul>`)
        
    }
    else if (year >= 1989 && year <= 1992) {
        $('.president').append(`<ul class ="Regan">
        <li class = "presPic">${presidents[2].photo}</li>
        <li class = "presName">${presidents[2].pres}</li>
        <p class = "yearSection presYear">President</p>
        <p class = "yrYear">${year}</p>
        <li class = "presInfo">${presidents[2].info}</li>
        </ul>`) 
    }
    else if (year >= 1993 && year <= 2000) {
        $('.president').append(`<ul class ="Regan">
        <li class = "presPic">${presidents[3].photo}</li>
        <li class = "presName">${presidents[3].pres}</li>
        <p class = "yearSection presYear">President</p>
        <p class = "yrYear">${year}</p>
        <li class = "presInfo">${presidents[3].info}</li>
        </ul>`)
    }
    else if (year >= 2001 && year <= 2008) {
        $('.president').append(`<ul class ="Regan">
        <li class = "presPic">${presidents[4].photo}
        <li class = "presName">${presidents[4].pres}</li>
        <p class = "yearSection presYear">President</p>
        <p class = "yrYear">${year}</p>
        <li class = "presInfo">${presidents[4].info}</li>
        </ul>`)
    }
    else if (year >= 2009 && year <= 2016) {
        $('.president').append(`<ul class ="Regan">
        <li class = "presPic">${presidents[5].photo}</li>
        <li class = "presName">${presidents[5].pres}</li>
        <p class = "yearSection presYear">President</p>
        <p class = "yrYear">${year}</p>
        <li class = "presInfo">${presidents[5].info}</li>
        </ul>`)
    }
    else if (year >= 2017 && year <= 2020) {
        $('.president').append(`<ul class ="Regan">
        <li class = "presPic">${presidents[6].photo}</li>
        <li class = "presName">${presidents[6].pres}</li>
        <p class = "yearSection presYear">President</p>
        <p class = "yrYear">${year}</p>
        <li class = "presInfo">${presidents[6].info}</li>
        </ul>`)
    }

}

function sportsByYear(){
    $('.sportsChamps').show();
    $('.sportsChamps').append(`<p class = "yearSection">Champions of ${year}</p>`)
      $('.sportsChamps').append(`<ul class = "nfl champTeam">
      <li class = "champType"><p class = "champText">Super Bowl Champions:</p></li>
      <li class = "champName">${champs[i].NFL.winner}</li>
      <li class = "sportsPhotoNfl"></li>
      <li class = "champInfo">${champs[i].NFL.info}</li>
      </ul>`)
      $('.sportsChamps').append(`<ul class = "nba champTeam">
      <li class = "champType"><p class = "champText">NBA Champions:</p></li>
      <li class = "champName">${champs[i].NBA.winner}</li>
      <li class = "sportsPhotoNba"></li>
      <li class = "champInfo">${champs[i].NBA.info}</li>
      </ul>`)
      $('.sportsChamps').append(`<ul class = "mlb champTeam">
      <li class = "champType"><p class = "champText">World Series Champions:</p></li>
      <li class = "champName">${champs[i].MLB.winner}</li>
      <li class = "sportsPhotoMlb"></li>
      <li class = "champInfo">${champs[i].MLB.info}</li>
      </ul>`)
      $('.sportsPhotoNfl').append(nflPic);
      $('.sportsPhotoNba').append(nbaPic);
      $('.sportsPhotoMlb').append(mlbPic);
  };
 



 function findandDisplayAlbum(s){
     console.log("find and display working")
     for (i = 0; i < s.length; i++){
    fetch(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=dc9f1dbf50f058c14fba944b768e75e7&artist=${s[0].artist}&album=${s[0].title}&format=json`) 
      .then(response => response.json())
      .then(responseJson => { 
    //   console.log(responseJson)
      siteUrl = responseJson.album.url;
      imageUrl = responseJson.album.image[3]["#text"];
      albumName = responseJson.album.name;
      albumArtist = responseJson.album.artist;
      if (siteUrl === ""){
          console.log('skip album')
      }
      else if (imageUrl === ""){
            console.log('skip album')
      }
      else if (siteUrl !== ""){
          albumArray.push(`<ul class= "albumDisplay" <li><p class="albumTitle"> ${albumName} by</li> <li> ${albumArtist}</li> <li><a href ="${siteUrl}"><input type ="image" class ="albumCover" src ="${imageUrl}"</a></li> <p>Click to Listen</p>`);
         setArray = new Set(albumArray);
          newAlbumArray = [...setArray];
          console.log(newAlbumArray)
        // appendAlbums(newAlbumArray);
 }})}
    
}

 function appendAlbums(x){
    console.log('APPEND working')
     for(i = 0; i < x.length; i++){
    $('.albums').append(x[i]);
 }
 }

 function findandDisplayActor(){
    for(i = 0; i < newActorArray.length; i++){
    // console.log('working')
    fetch(`https://imdb-api.com/en/API/SearchName/k_WetrMyO0/${newActorArray[i]}`)
    .then(response => response.json())
    .then(responseJson => { 
    //   console.log(responseJson)
      actorName = responseJson.expression;
      actorPhoto = responseJson.results[0].image;
      actorId = responseJson.results[0].id;
      actorProfile = `https://www.imdb.com/name/${actorId}/`;
      if (actorPhoto.search("nopicture") === -1){
        $('.actor').append(`<ul class = "actorDisplay"><li><p class = "actorName">${actorName}</p></li><li><img class="actorPhoto" src ="${actorPhoto}"></li><a href = "${actorProfile}">Click to See Profile</a>`)
      }
      else {
          console.log('photo stopped')
      }
    }) }
    // showAlbums(newAlbumArray);
 }

//  function showAlbums(s){
//  for (i = 0; i < s.length; i++){
//     $('.albums').append(s[i]);
//  }
// }

 function findandDisplayMovie(){
     $('.movie').show();
     for(i = 0; i < movieArray.length; i++){
    fetch(`https://imdb-api.com/en/API/SearchMovie/k_WetrMyO0/${movieArray[i]}`)
    .then(response => response.json())
    .then(responseJson => { 
    //   console.log(responseJson)
      movieName = responseJson.expression;
      moviePhoto = responseJson.results[0].image;
      movieId = responseJson.results[0].id;
      movieProfile = `https://www.imdb.com/title/${movieId}/`
      $('.movie').append(`<ul class ="movieDisplay"><li><p class = "movieTitle">${movieName}</p></li><li><img class="moviePoster" width=300px height=300px src ="${moviePhoto}"></li><a href = "${movieProfile}">Click to See Profile</a></p></ul>`)
    })}};


 function takeYearandFindTopMovies(){
        $('.movie').append(`<p class = "yearSection">Top Movies of ${year}</p>`);
        $('.actor').append(`<p class = "yearSection">Top Actors/Actresses of ${year}</p>`)
        fetch(`https://api.themoviedb.org/3/discover/movie?primary_release_year=${year}&sort_by=popularity.desc&language=en-US&api_key=642d833884c9ea9b7de7fb3eb5dae9bd`) 
        .then(response => response.json())
        .then(responseJson => { 
        // console.log(responseJson)
        movieId1 = responseJson.results[0].id;
        movieId2 = responseJson.results[1].id;
        movieId3 = responseJson.results[2].id;
        movieId4 = responseJson.results[3].id;
        movieId5 = responseJson.results[4].id;
        movieId6 = responseJson.results[5].id;
        movieArray = []
        movieArray.push(responseJson.results[0].title)
        movieArray.push(responseJson.results[1].title)
        movieArray.push(responseJson.results[2].title)
        movieArray.push(responseJson.results[3].title)
        movieArray.push(responseJson.results[4].title)
        movieArray.push(responseJson.results[5].title)
        // console.log(movieArray);
        findActorsFromTopMovies()
        findandDisplayMovie();
        
})};

function findActorsFromTopMovies(){
    
    fetch(`https://api.themoviedb.org/3/movie/${movieId1}/credits?api_key=642d833884c9ea9b7de7fb3eb5dae9bd&language=en-US`) 
        .then(response => response.json())
        .then(responseJson => { 
        // console.log(responseJson)
        actorArray= [];
        actor1Movie1 = responseJson.cast[0].name;
        actor2Movie1 = responseJson.cast[1].name;
        actorArray.push(actor1Movie1);
        actorArray.push(actor2Movie1);
        
})
fetch(`https://api.themoviedb.org/3/movie/${movieId2}/credits?api_key=642d833884c9ea9b7de7fb3eb5dae9bd&language=en-US`) 
.then(response => response.json())
.then(responseJson => { 
// console.log(responseJson)
actor1Movie2 = responseJson.cast[0].name;
actor2Movie2 = responseJson.cast[1].name;
actorArray.push(actor1Movie2)
actorArray.push(actor2Movie2)
})
fetch(`https://api.themoviedb.org/3/movie/${movieId3}/credits?api_key=642d833884c9ea9b7de7fb3eb5dae9bd&language=en-US`) 
.then(response => response.json())
.then(responseJson => { 
// console.log(responseJson)
actor1Movie3 = responseJson.cast[0].name;
actor2Movie3= responseJson.cast[1].name;
actorArray.push(actor1Movie3)
actorArray.push(actor2Movie3)
})
fetch(`https://api.themoviedb.org/3/movie/${movieId4}/credits?api_key=642d833884c9ea9b7de7fb3eb5dae9bd&language=en-US`) 
.then(response => response.json())
.then(responseJson => { 
// console.log(responseJson)
actor1Movie4 = responseJson.cast[0].name;
actor2Movie4 = responseJson.cast[1].name;
actorArray.push(actor1Movie4)
actorArray.push(actor2Movie4)
})
fetch(`https://api.themoviedb.org/3/movie/${movieId5}/credits?api_key=642d833884c9ea9b7de7fb3eb5dae9bd&language=en-US`) 
.then(response => response.json())
.then(responseJson => { 
// console.log(responseJson)
actor1Movie5 = responseJson.cast[0].name;
actor2Movie5 = responseJson.cast[1].name;
actorArray.push(actor1Movie5)
actorArray.push(actor1Movie5)
})
fetch(`https://api.themoviedb.org/3/movie/${movieId6}/credits?api_key=642d833884c9ea9b7de7fb3eb5dae9bd&language=en-US`) 
.then(response => response.json())
.then(responseJson => { 
// console.log(responseJson)
actor1Movie6 = responseJson.cast[0].name;
actor2Movie6 = responseJson.cast[1].name;
actorArray.push(actor1Movie6)
actorArray.push(actor2Movie6)
setArray = new Set(actorArray);
newActorArray = [...setArray];
// console.log(newActorArray)
findandDisplayActor();
})
}


albumInfoArray = [];

function findAlbumsofYear(){
    albumArray = [];
    labels = ['sony','warner','universal','sony','warner','universal','sony','warner','universal','sony','warner','universal'];
    genre = ['hip hop', 'hip hop', 'hip hop','hip hop','pop','pop','pop','pop','rock','rock','rock','rock']
    $('.albums').append(`<p class = "yearSection">Albums released in ${year}</p>`)
    for (i = 0; i < 12; i++){
    fetch(`https://api.discogs.com/database/search?format=album&year=${year}&label=${labels[i]}&country=US&genre=${genre[i]}&key=HzodnTCcDEFaCqjRullZ&secret=UqjoyYnSIUzfehnLWBlqDuqfipjVGwSE`) 
    .then(response => response.json())
    .then(responseJson => { 
    arrayLength = responseJson.results.length;
    randomNumber = Math.floor(Math.random()*arrayLength);
    styleArray = responseJson.results[randomNumber].format;
    checkArray = [];
    for(i = 0; i < styleArray.length; i++){
    if (styleArray[i] === "Remastered"){
                    checkArray.push('yes')
            }
    else if (styleArray[i] === "Reissue"){
                    checkArray.push('yes')
            }
    else if (styleArray[i] === "Repress"){
                    checkArray.push('yes')
            }
    else if (styleArray[i] === "Limited Edition"){
                    checkArray.push('yes')
            }
    else { 
                checkArray.push('no');
    }
    }
    
    wrongDate = checkArray.find(function(x){
        if (x === "yes")
        return true
    })
   
    if (wrongDate === "yes"){
        throw 'album has wrong date'
    }
    else {
    name = responseJson.results[randomNumber].title;
    lowercaseName = name.toLowerCase();
    removeDashes = lowercaseName.replace('featuring', '-');
    removeFeat = removeDashes.replace('feat.', '-');
    splitString = removeFeat.split("-");
    removeParens = splitString[0].split("(");
    removeStars = removeParens[0].split("*");
    artistSearch = removeStars[0].trim(); 
    titleSearch = splitString[splitString.length -1].trim();
    splitTitle = titleSearch.split("(");
    titleSearch = splitTitle[0];
    who = artistSearch.trim();
    what = titleSearch.trim();
    albumObject = {
            artist: who,
            title: what,
    };
    }
     albumInfoArray.push(albumObject);
     
    })}
    console.log('one');
    console.log(albumInfoArray);
    findandDisplayAlbum(albumInfoArray);
};

function runTopicInYearSearch(){
    $('.articles').show();
    $('.return').show();
    $('.yearTopic').append(`<p class ="sectionName topicKeyword">${keyword}</p>`)
    $('.yearTopic').append(`<p class ="pageDate">${topicYear}</p>`)
    $('.yearTopic').append(`<ul class ="notFound"><li>Articles about ${keyword} in ${topicYear} not found!</li>
    <li>Please check your search term and try again</li></ul>`);
    $('.notFound').hide();
    // console.log(`searching ${keyword} in ${topicYear}`);
    notFoundArray = [];
    for (i = 0; i < 5; i++){
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&fq=pub_year:(${topicYear})&page=${i}&api-key=00ag7P5IOG0j0x72NeaRMSnhusKQ2IEB`)
    .then(response => response.json())
    .then(responseJson => { 
    newClass = "yearTopic"
    findTopicParagraphs(responseJson)
    })}}

 function findTopicParagraphs(s){
        articleInfo = []
    for(i = 0; i < s.response.docs.length; i++){
        if (s.response.docs[i].lead_paragraph.length > 200){
            articleInfo.push(s.response.docs[i])
        } 
        else if (s.response.docs[i].lead_paragraph.length < 200){
            console.log("");  
        }
    }
    console.log(articleInfo); 
    if (articleInfo.length == 0){
    $('.notFound').show();
    }
    else {
     editAndPrintTopicHeadlines();
    }
}

function editAndPrintTopicHeadlines(){
    for( i = 0; i < articleInfo.length; i++){
        if (articleInfo[i].headline.main.length < 10){
            $(`.yearTopic`).append(`<div class = "topicArticle">
            <h2 class = ""> ${articleInfo[i].headline.print_headline} </h2>
            <p class = " ">${articleInfo[i].lead_paragraph}</p>
            <a class = "articleLinks" href=${articleInfo[i].web_url}>read more</a>
            <p class = "articleDash"> __________________ </p>
            <p class = "articleDash1"> __________________</p>
            </div>`);
        }
        else if (articleInfo[i].headline.main.length > 10){
         $(`.yearTopic`).append(`<div class = "topicArticle">
         <h2 class = ""> ${articleInfo[i].headline.main} </h2>
         <p class = " ">${articleInfo[i].lead_paragraph}</p>
         <a class = "articleLinks" href=${articleInfo[i].web_url}>read more</a>
         <p class = "articleDash"> __________________ </p>
         <p class = "articleDash1"> __________________</p>
         </div>
         `);
        }   
}           
}


function ready(){
    testInputs();
    setPage();
    returnHome();
    createRandomDate();
    handleTopicAndYear();
    // handleExampleButton();
}

$(ready());
