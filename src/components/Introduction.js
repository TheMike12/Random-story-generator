import React, { useState } from 'react';
import '../styles/Introduction.css';
import '../styles/Story1_alignment.css';
import '../styles/Story2_alignment.css';
import '../styles/Story3_alignment.css';

const Introduction = () => {

    const [initiate, setInintiate] = useState("fun");

    const storytime = () => {       
        if (initiate === 'fun') {
            let story1_person1 = fetch("https://api.randomuser.me/");
            story1_person1.then(res => res.json())
            .then(data => {
                document.getElementById("story1_country1").innerHTML = data.results[0].location.country;
                document.getElementById("story1_first1a").innerHTML = data.results[0].name.first;
                document.getElementById("story1_first1b").innerHTML = data.results[0].name.first;
                document.getElementById("story1_first1c").innerHTML = data.results[0].name.first;
                document.getElementById("story1_first1d").innerHTML = data.results[0].name.first;
                document.getElementById("story1_first1e").innerHTML = data.results[0].name.first;
                document.getElementById("story1_first1f").innerHTML = data.results[0].name.first;
                document.getElementById("story1_first1g").innerHTML = data.results[0].name.first;
                document.getElementById("story1_last1").innerHTML = data.results[0].name.last;
                document.getElementById("story1_gender1a").innerHTML = data.results[0].gender;
                document.getElementById("story1_city1").innerHTML = data.results[0].location.city;
                document.getElementById("story1_number1").innerHTML = data.results[0].location.street.number;
                document.getElementById("story1_name1").innerHTML = data.results[0].location.street.name;
                document.getElementById("story1_username1").innerHTML = data.results[0].login.username;
                document.getElementById("story1_password1").innerHTML = data.results[0].login.password;
                document.getElementById("story1_age1").innerHTML = data.results[0].dob.age;

                if (data.results[0].gender === "male") {
                    document.getElementById("story1_gender1b").innerHTML = "he";
                    document.getElementById("story1_gender1c").innerHTML = "he";
                } else {
                    document.getElementById("story1_gender1b").innerHTML = "she";
                    document.getElementById("story1_gender1c").innerHTML = "she";
                }

            });
            let story1_person2 = fetch("https://api.randomuser.me/");
            story1_person2.then(res => res.json())
            .then(data => {
                document.getElementById("story1_title2").innerHTML = data.results[0].name.title;                
                document.getElementById("story1_first2").innerHTML = data.results[0].name.first;
                document.getElementById("story1_last2").innerHTML = data.results[0].name.last;
            });
            let story1_person3 = fetch("https://api.randomuser.me/");
            story1_person3.then(res => res.json())
            .then(data => {
                document.getElementById("story1_username3a").innerHTML = data.results[0].login.username;
                document.getElementById("story1_username3b").innerHTML = data.results[0].login.username;
                document.getElementById("story1_first3").innerHTML = data.results[0].name.first;
                document.getElementById("story1_last3").innerHTML = data.results[0].name.last;
                document.getElementById("story1_country3").innerHTML = data.results[0].location.country;
            });
                document.getElementById("story_1").style.display = "none";
                document.getElementById("message").style.display = "block";
            setTimeout(() => {
                document.getElementById("story_2").style.display = "none";
                document.getElementById("story_3").style.display = "none";
                document.getElementById("message").style.display = "none";
                document.getElementById("story_1").style.display = "block";
            }, 1000)
        }
        else if (initiate === 'adventure') {
            let story2_person1 = fetch("https://api.randomuser.me/");
            story2_person1.then(res => res.json())
            .then(data => {
                document.getElementById("story2_first1a").innerHTML = data.results[0].name.first;
                document.getElementById("story2_first1b").innerHTML = data.results[0].name.first;
                document.getElementById("story2_first1c").innerHTML = data.results[0].name.first;
                document.getElementById("story2_first1d").innerHTML = data.results[0].name.first;
                document.getElementById("story2_first1e").innerHTML = data.results[0].name.first;
                document.getElementById("story2_first1f").innerHTML = data.results[0].name.first;
                document.getElementById("story2_first1g").innerHTML = data.results[0].name.first;
                document.getElementById("story2_last1").innerHTML = data.results[0].name.last;
                document.getElementById("story2_gender1a").innerHTML = data.results[0].gender;
                document.getElementById("story2_country1").innerHTML = data.results[0].location.country;
                document.getElementById("story2_age1").innerHTML = data.results[0].dob.age;

                if (data.results[0].gender === "male") {
                    document.getElementById("story2_gender1b").innerHTML = "his";
                    document.getElementById("story2_gender1c").innerHTML = "his";
                    document.getElementById("story2_gender1d").innerHTML = "he";
                    document.getElementById("story2_gender1e").innerHTML = "his";
                    document.getElementById("story2_gender1f").innerHTML = "he";
                    document.getElementById("story2_gender1g").innerHTML = "his";
                } else {
                    document.getElementById("story2_gender1b").innerHTML = "her";
                    document.getElementById("story2_gender1c").innerHTML = "her";
                    document.getElementById("story2_gender1d").innerHTML = "she";
                    document.getElementById("story2_gender1e").innerHTML = "her";
                    document.getElementById("story2_gender1f").innerHTML = "she";
                    document.getElementById("story2_gender1g").innerHTML = "her";
                }

            });
            let story2_person2 = fetch("https://api.randomuser.me/");
            story2_person2.then(res => res.json())
            .then(data => {             
                document.getElementById("story2_first2a").innerHTML = data.results[0].name.first;
                document.getElementById("story2_first2b").innerHTML = data.results[0].name.first;
                document.getElementById("story2_first2c").innerHTML = data.results[0].name.first;

                if (data.results[0].gender === "male") {
                    document.getElementById("story2_gender2").innerHTML = "he";
                } else {
                    document.getElementById("story2_gender2").innerHTML = "she";
                }

            });
            let story2_person3 = fetch("https://api.randomuser.me/");
            story2_person3.then(res => res.json())
            .then(data => {
                document.getElementById("story2_first3a").innerHTML = data.results[0].name.first;
                document.getElementById("story2_first3b").innerHTML = data.results[0].name.first;
            });
            let story2_person4 = fetch("https://api.randomuser.me/");
            story2_person4.then(res => res.json())
            .then(data => {
                document.getElementById("story2_country4").innerHTML = data.results[0].location.country;
                document.getElementById("story2_first4").innerHTML = data.results[0].name.first;
            });
            document.getElementById("story_2").style.display = "none"; 
            document.getElementById("message").style.display = "block";
            setTimeout(() => {
                document.getElementById("story_1").style.display = "none";
                document.getElementById("story_3").style.display = "none";
                document.getElementById("message").style.display = "none";
                document.getElementById("story_2").style.display = "block"; 
            }, 1000)     
        }
        else if (initiate === 'detective') {
            let story3_person1 = fetch("https://api.randomuser.me/");
            story3_person1.then(res => res.json())
            .then(data => {
                document.getElementById("story3_city1").innerHTML = data.results[0].location.city;
                document.getElementById("story3_country1").innerHTML = data.results[0].location.country;
                document.getElementById("story3_first1a").innerHTML = data.results[0].name.first;
                document.getElementById("story3_first1b").innerHTML = data.results[0].name.first;
                document.getElementById("story3_first1c").innerHTML = data.results[0].name.first;
                document.getElementById("story3_last1").innerHTML = data.results[0].name.last;
                document.getElementById("story3_age1").innerHTML = data.results[0].dob.age;
                document.getElementById("story3_gender1").innerHTML = data.results[0].gender;
            });
            let story3_person2 = fetch("https://api.randomuser.me/");
            story3_person2.then(res => res.json())
            .then(data => {
                document.getElementById("story3_title2").innerHTML = data.results[0].name.title;
                document.getElementById("story3_first2a").innerHTML = data.results[0].name.first;                
                document.getElementById("story3_first2b").innerHTML = data.results[0].name.first;
                document.getElementById("story3_last2").innerHTML = data.results[0].name.last;
            });
            let story3_person3 = fetch("https://api.randomuser.me/");
            story3_person3.then(res => res.json())
            .then(data => {
                document.getElementById("story3_title3").innerHTML = data.results[0].name.title;
                document.getElementById("story3_first3a").innerHTML = data.results[0].name.first;
                document.getElementById("story3_first3b").innerHTML = data.results[0].name.first;
                document.getElementById("story3_first3c").innerHTML = data.results[0].name.first;
                document.getElementById("story3_first3d").innerHTML = data.results[0].name.first;
                document.getElementById("story3_first3e").innerHTML = data.results[0].name.first;
                document.getElementById("story3_first3f").innerHTML = data.results[0].name.first;
                document.getElementById("story3_first3g").innerHTML = data.results[0].name.first;
                document.getElementById("story3_first3h").innerHTML = data.results[0].name.first;
                document.getElementById("story3_last3").innerHTML = data.results[0].name.last;
                document.getElementById("story3_gender3a").innerHTML = data.results[0].gender;
                document.getElementById("story3_country3").innerHTML = data.results[0].location.country;

                if (data.results[0].gender === "male") {
                    document.getElementById("story3_gender3a").innerHTML = "he";
                    document.getElementById("story3_gender3b").innerHTML = "his";
                    document.getElementById("story3_gender3c").innerHTML = "he";
                    document.getElementById("story3_gender3d").innerHTML = "he";
                    document.getElementById("story3_gender3e").innerHTML = "he";
                    document.getElementById("story3_gender3f").innerHTML = "he";
                } else {
                    document.getElementById("story3_gender3a").innerHTML = "she";
                    document.getElementById("story3_gender3b").innerHTML = "her";
                    document.getElementById("story3_gender3c").innerHTML = "she";
                    document.getElementById("story3_gender3d").innerHTML = "she";
                    document.getElementById("story3_gender3e").innerHTML = "she";
                    document.getElementById("story3_gender3f").innerHTML = "she";
                }

            });
            let story3_person4 = fetch("https://api.randomuser.me/");
            story3_person4.then(res => res.json())
            .then(data => {
                document.getElementById("story3_first4a").innerHTML = data.results[0].name.first;                
                document.getElementById("story3_first4b").innerHTML = data.results[0].name.first;
                document.getElementById("story3_first4c").innerHTML = data.results[0].name.first;
                document.getElementById("story3_first4d").innerHTML = data.results[0].name.first;                
                document.getElementById("story3_first4e").innerHTML = data.results[0].name.first;                                
                document.getElementById("story3_last4").innerHTML = data.results[0].name.last;
                document.getElementById("story3_email4").innerHTML = data.results[0].email;
                document.getElementById("story3_name4").innerHTML = data.results[0].location.street.name;
            });
            document.getElementById("story_3").style.display = "none";
            document.getElementById("message").style.display = "block";
            setTimeout(() => {
                document.getElementById("story_1").style.display = "none";
                document.getElementById("story_2").style.display = "none";
                document.getElementById("message").style.display = "none";
                document.getElementById("story_3").style.display = "block";
            }, 1000)
        }
    }

    return (
        <div>
            <div className="generator_box">
                <h1>Welcome to the random story generator</h1>
                <h2>This generator will display randomly generated nouns at the touch of a button.<br/>
                    You can randomly generate one of three different stories. After selecting the type of 
                    story you wish to hear press the generate button to display the story.
                </h2>
                <div className="generator_box_attributes">
                    <label htmlFor="stories">What type of story would you like to hear?</label>
                    <select className="story_selector" value={initiate} onChange={(e) => {
                        const selection = e.target.value;
                        setInintiate(selection);
                    }}>
                        <option value="fun">Fun story</option>
                        <option value="adventure">Adventurous story</option>
                        <option value="detective">Crime solving story</option>
                    </select>
                    <div><button className="generator_button" onClick={storytime}>Generate</button></div>
                </div>
                <div id="message">loading...</div>               
            </div>

            <div id="story_1">It was a bright and warm Saturday afternoon in <div id="story1_country1"></div>, and <div id="story1_first1a"></div> <div id="story1_last1"></div>, 
a <div id="story1_gender1a"></div> in <div id="story1_city1"></div>, decided to go out for a jog. During the jog, <div id="story1_first1b"></div> took a quick break to buy some 
ice cream at <div id="story1_title2"></div>. <div id="story1_first2"></div> <div id="story1_last2"></div>'s ice cream stand. After some ice cream, <div id="story1_first1c"></div> would 
jog for a half-hour longer then head home at <div id="story1_number1"></div>, <div id="story1_name1"></div>. With some free time, <div id="story1_first1d"></div> thought 
it was a good time to watch some YouTube videos. After <div id="story1_first1e"></div> logged in with the username <div id="story1_username1"></div> and expertly thought 
out password "<div id="story1_password1"></div>", <div id="story1_gender1b"></div> saw that <div id="story1_username3a"></div> had uploaded a new video. <div id="story1_username3b"></div>, 
aka <div id="story1_first3"></div> <div id="story1_last3"></div>, is a famous YouTuber in <div id="story1_country3"></div>, and <div id="story1_first1f"></div>'s favorite. After 
watching the video, <div id="story1_first1g"></div>, being at the crisp age of <div id="story1_age1"></div>, was fully refreshed and ready to go on another jog, and <div id="story1_gender1c"></div> lived 
happily ever after...I think...</div>

            <div id="story_2">It was a partly cloudy morning on Saturday and <div id="story2_first1a"></div> <div id="story2_last1"></div>, a <div id="story2_gender1a"></div> in <div id="story2_country1"></div> was ready to 
go mountain climbing with <div id="story2_gender1b"></div> friends, <div id="story2_first2a"></div> and <div id="story2_first3a"></div>. <div id="story2_first1b"></div>, at the ripe age of <div id="story2_age1"></div>, 
was getting way ahead of <div id="story2_gender1c"></div> friends, telling them to hurry up. <div id="story2_first3b"></div> told <div id="story2_first1c"></div> to 
be patient, because this was <div id="story2_first2b"></div>'s first time mountain climbing and that <div id="story2_gender2"></div> was still slightly 
afraid. While <div id="story2_first1d"></div> was waiting, <div id="story2_gender1d"></div> was texting <div id="story2_gender1e"></div> friend 
from <div id="story2_country4"></div>, <div id="story2_first4"></div>. Once <div id="story2_first1e"></div>'s friends caught up, they decided to take a small break. 
While <div id="story2_first1f"></div> was bored and looking around, <div id="story2_gender1f"></div> noticed what looked like a sort of opening. 
After pulling some large rocks out of the way, <div id="story2_first1g"></div> discovered that it was a cave. After showing <div id="story2_gender1g"></div> friends, 
they decided to go in to see what was in there. Then they saw what appearred to be a treasure chest of some sort. <div id="story2_first2c"></div> picked the container up, and upon 
opening the container, it was shortly after they realized that they only stumbled upon a geocache
with a rubber ball, two pennies, a worn out sticker, a couple pieces of gum, and someone advertising for 
their instagram account. Maybe it wasn't exactly treasure, but they realized that the joy is in the journey 
and to slow down every once in a while to enjoy life.</div>

            <div id="story_3">It was a rainy Saturday morning in <div id="story3_city1"></div>, <div id="story3_country1"></div>, and a crime had recently been reported: the victim 
was <div id="story3_first1a"></div> <div id="story3_last1"></div>, a <div id="story3_age1"></div> year-old <div id="story3_gender1"></div> who appears to have been murdered. After thorough 
investigation, they found no leads, no wittnesses; nothing. The cheif of police, <div id="story3_title2"></div>. <div id="story3_first2a"></div> <div id="story3_last2"></div>, 
decided to call in Private Investigator <div id="story3_title3"></div>. <div id="story3_first3a"></div> <div id="story3_last3"></div> in the hopes of finding 
something. When PI <div id="story3_first3b"></div> had arrived on the scene, <div id="story3_gender3a"></div> decided to take 
a quick look in all the rooms. After this, <div id="story3_first3c"></div> took a look at a list of possible suspects. Finally, <div id="story3_first3d"></div> would 
take some quiet time to carefully gather <div id="story3_gender3b"></div> thoughts then proceed to search more thoroughly. After some time and 
investigation, <div id="story3_gender3c"></div> had figured it out. The culprit was one of the victim's friends, <div id="story3_first4a"></div> <div id="story3_last4"></div>. 
First off, the victim, <div id="story3_first1b"></div>, had died due to a blow to the head from an unidentified object from behind. The way <div id="story3_first1c"></div> was 
hit from behnid, <div id="story3_first3e"></div> knew that this was the work of an individual who was left-handed. Moreso, an angry 
message in the form of an E-mail was sent to the victim; the E-mail was: <div id="story3_email4"></div>, which was <div id="story3_first4b"></div>'s 
E-mail. <div id="story3_first3f"></div> also noticed some lightly imprinted muddy footprints in the living room, heading towards <div id="story3_name4"></div>, 
the street where <div id="story3_first4c"></div> lives. The large gap in the footprints indicated that the person was
running. Also, the size of the footprints looked about the same size shoe that <div id="story3_first4d"></div> would wear. Finally, <div id="story3_first4e"></div> had 
no alibi. With a combination of all these clues <div id="story3_first3g"></div> was certain <div id="story3_gender3d"></div> came to the right 
conclusion. <div id="story3_first2b"></div> was stunned and couldn't believe how quickly <div id="story3_gender3e"></div> came to such a conclusion. 
In the end, PI <div id="story3_first3h"></div> turned out to be correct and <div id="story3_gender3f"></div> decided to take a two-week vacation 
at <div id="story3_country3"></div> and take a break for a while.</div>
        </div>
    )
}

export default Introduction;