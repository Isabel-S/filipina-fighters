import React, {useState} from 'react';
import './MainContent.css'; 
import Menu from './Menu';
import QuoteContainer from './QuoteContainer';
import Scrolly from './Scrolly';
import ParagraphText from './ParagraphText';
import Image from './Image';
import NormalBox from './NormalBox';
import HeadingText from './HeadingText';

import scrolly1Image from '../img/GettyImages-1124822859-e1633722697760 copy.jpg';  
import scrolly2Image from '../img/maria-ressa-arrest-naia-march-29-2019-003.jpg';  

import image1 from "../img/static.reuters.jpg";

// TODO: Replace with actual headings
const headings = [
    { level: 1, text: 'Deep Dive', id: 'heading1' },
    { level: 2, text: 'Heading 2', id: 'heading2' },
    { level: 2, text: 'Heading 2', id: 'heading2' },
    { level: 2, text: 'Heading 2', id: 'heading2' },
    // Add more headings as needed
  ];

// Intro Quote
const quote = "\“First I’m attacked for being a journalist, second I’m attacked for being a woman\”"
const quotename = "- Maria Ressa"

const scrolly1 = {
    stepTexts: [
        "Since 2016, Filipina-American journalist Maria Ressa, founder of popular Filipino news site Rappler and now Nobel Laureate, has faced an onslaught of online violence including:",
        "Death threats. Rape threats. Doxxing. Racist, sexist, and misogynistic abuse and memes.",
        "This was due to her reporting on Philippine president at the time, Rodrigo Duterte (2016-2022). When Duterte held the presidency, Ressa and Rappler published numerous investigative reports on Duterte's use of online disinformation to push his political agenda, his severe actions such as extrajudicial killings of users and dealers resulting from the drug war, and of corruption within his government administration.",
        "In response, phrases such as “presstitute”, a term created by pro-Duterte blogger, Mocha Uson (who would go on to become the president’s Communications Assistant Secretary), and tags like #ArrestMariaRessa went viral across Facebook and Twitter. 14% of all online abuse against Ressa was misogynistic and sexist in nature. (1)"
      ],
    image: scrolly1Image,
    imageAlt: "Maria Ressa"
};

const scrolly2 = {
    stepTexts: [
        "This abuse fostered an \“enabling environment for Ressa’s persecution and prosecution in the Philippines\"(1); in 2020, she faced multiple charges and arrest warrants over cyber libel, which were both ruled by and in turn further fueled the negative narrative created about her online.",
        "Her online abuse speaks to the struggle for press freedom and the normalization of sexism in the Philippines amidst an anti-news agenda introduced by Duterte during his presidency. Gendered harassment towards  journalists is “too often dismissed as something that required acceptance as ‘unintended consequence’ of online engagement with audiences”2  . However, Ressa’s case demonstrates that online hate has significant real life consequences.",
    ],
    image: scrolly2Image,
    imageAlt: "Maria Ressa Arrested"
};

const paragraph1Items = [
    { text: "Her story is one of many Filipina journalists who fear for their safety.", 
        className: "normal bold-italic" },
    { text: "Ressa refused to be silenced; her story is unique in that not only did she fight back, she fought back with data. With a team of researchers she gathered thousands of Twitter and Facebook posts and used data science techniques to uncover patterns, like narratives diminishing her credibility and gendered language, that her attackers. They also found that these were orchestrated attacks by internet users and government officials.", 
        className: "normal" }
  ];

const image1Props = {
    image: image1,
    imageAlt: "Maria Ressa Presenting",
    className: "wide"
}

const paragraph2Items = [
    { text: "This online phenomenon of online misogynistic attacks and vilification of journalists has its roots in the Philippine’s sociopolitical development in terms of the history between media and politics, gender roles, machismo culture, and the rise of populism, which intersect together in ways that endanger female journalists. Ressa's data collection exposes a story of misogynistic online harassment against her.",
      className: "normal" },
    { text: "How can data uncover more stories of online violence for other Filipina journalists? What do these narratives tell us about the Philippine’s sociopolitical context that enables online violence towards women journalists?",
      className: "normal bold-italic" },
    { text: "To explore these questions, I took a deep dive into two Filipina journalists: Pia Ranada-Robles and Ellen Tordesillas. I collected and analyzed 54,078 total Facebook texts (42,810 for Ranada-Robles, 11,268 for Tordesillas) including posts, comments, video titles and descriptions, between ~2016 to 2023. These were gathered from a Facebook search for each journalist: “pia ranada” for Ranada-Robles and “ellen tordesillas” for Tordesillas. I visualized the language and timeline of the Facebook posts, then traced these to real-life events in each of the journalist's careers and the sociopolitical contexts in which they occurred.",
      className: "normal" }
  ];

const box1Props = {
    boxTitle: "Why Facebook?",
    boxText: "The Philippines’ spends more time on Facebook than any other country; to Filipinos, it is the same as the internet. It is also the main platform where Ressa received online violence."
};

const paragraph3Items = [
    { text: "To explore these questions, I took a deep dive into two Filipina journalists: Pia Ranada-Robles and Ellen Tordesillas. I collected and analyzed 54,078 total Facebook texts (42,810 for Ranada-Robles, 11,268 for Tordesillas) including posts, comments, video titles and descriptions, between ~2016 to 2023. These were gathered from a Facebook search for each journalist: “pia ranada” for Ranada-Robles and “ellen tordesillas” for Tordesillas. I visualized the language and timeline of the Facebook posts, then traced these to real-life events in each of the journalist's careers and the sociopolitical contexts in which they occurred.",
      className: "normal" }
  ];
const heading1Props = {
    className: "heading1",
    text: "Who are Pia Ranada-Robles and Ellen Tordesillas?"
}
function MainContent() {
    return (
        <main>
            <Menu headings={headings} />
            <div className="scrolly-gap"></div>
            <QuoteContainer quote = {quote} quotename = {quotename} />
            <div className="scrolly-gap"></div>
            <Scrolly props={scrolly1}/>
            <div className="scrolly-gap"></div>
            <div className="scrolly-gap"></div>
            <Scrolly props={scrolly2}/>
            <ParagraphText items={paragraph1Items} />
            <Image {...image1Props} />
            <ParagraphText items={paragraph2Items} />
            <NormalBox boxProps={box1Props} />
            <ParagraphText items={paragraph3Items} />
            <HeadingText {...heading1Props} />
        </main>
    );
}

export default MainContent;
