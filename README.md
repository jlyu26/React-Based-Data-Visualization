# NBA Recent Game Log

This project presents NBA player game log of his last 7 games of 2017-18 regular season. Use search bar to input player's name in given format and checkbox to select what data you're looking for.

Setup:

You will need npm to run this project. run `npm run start` at root folder and application will be hosted on `localhost:8080/`.

**Overview screenshot:** Jason Tatum's score (stacked bar chart) and other offense data (multi-series line chart). The other chart that shows defense data isn’t displaying because not selected in checkbox.

<img width="529" alt="overview" src="https://user-images.githubusercontent.com/20265633/46183223-9d504800-c295-11e8-9107-a475326cad7e.png">

## Tech Stack

- NPM as a package manager for modules
- React and ES6
- Redux for state management
- Bootstrap for responsive layouts
- Chart.js for interactive visualization
- [MySportsFeeds API](https://www.mysportsfeeds.com/) as data source

## Story

This SPA can be used to tell:

1.	A player’s skillset
2.	His recent performance
3.	his game strategy against certain opponents

To help coaching staff and players:

1.	Find shortage and improve in offseason
2.	Adjust accordingly as season goes on
3.	Figure out game plan

## Design

### Chart Type

According to [William Cleveland and Robert McGill's Graphical Perception Experiment and Theory](https://www.tandfonline.com/doi/abs/10.1080/01621459.1984.10478080)[1], bar chart and line chart receives the most accurate perception from humans in delivering information with numbers, way better than pie chart. Thus I chose these two types for this project, since accuracy rather than fancy appearance is the most important thing in elite sports data analysis. 

### Color

1.	Score (bar chart): In today’s NBA, free throw and 3 points are considered more effective than paint area 2 points, so I chose blue and green to present 3P and FTs and put 2P in grey. (Mid-range jumpers had its day in 90s and early 2000s when players like Duncan and Olajuwon took the skill to another level, but now look at Harden and Curry, even big dude like Embiid can shoot 3.)

2.	Other Offense Data: Assists and offensive rebound are always good, I put them in green and blue. Blocked against put a question mark on attempting choice and I use orange as a “warning sign”. Turnover is the worst, it cost the team opportunity so it’s in red.

3.	Defensive Data: Same as offensive data, defensive rebounds, blocks and steals are appreciated so they’re in green, teal and blue. Foul is tricky, depend on whether it’s necessary, I put it in orange.

## Examples

- It might not be fair comparing with Klay, but Ben Simmons doesn't shoot 3, at all. (And Celtics used that in 17-18 Playoffs.)

<img width="1117" alt="ben-klay" src="https://user-images.githubusercontent.com/20265633/46186320-8add0b00-c2a3-11e8-8ae2-463070dc3a30.png">

- Both efficient scorer, Curry has the best 3s in history, and James Harden is a master in drawing fouls and making FTs.

<img width="1129" alt="harden-curry" src="https://user-images.githubusercontent.com/20265633/46186543-d643e900-c2a4-11e8-8aa2-5bd305e0f5df.png">

- Westbrook trends to trust himself playing good teams like GSW, although he feed his teammates against those non-playoff teams like Memphis (Or maybe it's Warriors game plan to isolate him).

![westbrook](https://user-images.githubusercontent.com/20265633/46187071-6be07800-c2a7-11e8-9b1e-fb967f9a0061.png)

- In Celtics everybody can do a little bit of everything to help the team. As shown in charts Rozier is as good a rebounder as Horford, who is known as one of the League's best center in passing.

<img width="1141" alt="rozier-al" src="https://user-images.githubusercontent.com/20265633/46187951-e8755580-c2ab-11e8-8852-8081f0b13270.png">

- Simply look at the green and red lines, opponents being a factor, John Wall still needs to work on his turnover control. Lonzo as a rookie just got better Ast/TO rate than him.

<img width="1117" alt="wall-lonzo" src="https://user-images.githubusercontent.com/20265633/46187399-0bead100-c2a9-11e8-9fe9-1fe2150c06b5.png">

### Reference
[1] I also created a Git page for extended experiment of Cleveland and McGill version, adding radar chart to test which type gives the best encoding. [Click here to check out.](https://jlyu26.github.io/CS573-Assignment-3-Experiment/)