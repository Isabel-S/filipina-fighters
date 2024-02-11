import React, {useState} from 'react';
import './MainContent.css'; 
import Menu from './Menu';
import QuoteContainer from './QuoteContainer';
import Scrolly from './Scrolly';
import ParagraphText from './ParagraphText';
import Image from './Image';
import NormalBox from './NormalBox';
import HeadingText from './HeadingText';
import Bio from './Bio';
import VisualToggle from './VisualToggle';
import TwoGraphs from './TwoGraphs';

import scrolly1Image from '../img/GettyImages-1124822859-e1633722697760 copy.jpg';  
import scrolly2Image from '../img/maria-ressa-arrest-naia-march-29-2019-003.jpg';  
import image1 from "../img/static.reuters.jpg";
import bio1Image from "../img/pia-ranada.png";
import bio2Image from "../img/ellen-tordesillas.png";
import image2 from "../img/translation-1.png";
import scrolly3Image from '../img/willie.png';
import scrolly4Image1 from '../img/1.png';
import scrolly4Image2 from '../img/2.png'; 
import scrolly4Image3 from '../img/3.png'; 
import scrolly4Image4 from '../img/4.png';     

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
    imageAlt: "Maria Ressa",
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
    boxText: [
        {text: "The Philippines’ spends more time on Facebook than any other country; to Filipinos, it is the same as the internet. It is also the main platform where Ressa received online violence."}
    ]
};

const paragraph3Items = [
    { text: "To explore these questions, I took a deep dive into two Filipina journalists: Pia Ranada-Robles and Ellen Tordesillas. I collected and analyzed 54,078 total Facebook texts (42,810 for Ranada-Robles, 11,268 for Tordesillas) including posts, comments, video titles and descriptions, between ~2016 to 2023. These were gathered from a Facebook search for each journalist: “pia ranada” for Ranada-Robles and “ellen tordesillas” for Tordesillas. I visualized the language and timeline of the Facebook posts, then traced these to real-life events in each of the journalist's careers and the sociopolitical contexts in which they occurred.",
      className: "normal" }
  ];

const heading1Props = {
    className: "heading1",
    text: "Who are Pia Ranada-Robles and Ellen Tordesillas?"
}

const heading2Props = {
    className: "heading2",
    text: "Rundown"
}

const bio1Props = {
    image: bio1Image,
    text: "Pia Ranada-Robles is a senior reporter for Rappler, covering Philippine politics and the environment. She followed Duterte exclusively during his presidential campaign prior to 2016. During Duterte’s presidency, she served as a Malacañang Palace reporter (White House Correspondent equivalent in the United States). In 2018, due to critical articles by Rappler and Ranada-Robles herself she became the only reporter from the  Malacañang Press Corps to be banned by Duterte from entering the executive office at the palace. Her interactions with Duterte have been marked with sexism offline and online, including Duterte wolf-whistling her in a 2016 press conference, and a Facebook video of another 2017 press conference captioned “President Rody Duterte burns Rapplerette … Pia Ranada-Robles twice during a recently concluded press conference” viewed over 1.5 million times."
};

const bio2Props = {
    image: bio2Image,
    text: "Ellen Tordesillas is a “veteran journalist” and founder of VERA Files, a non profit founded in 2008 specializing in “in-depth reports and commentaries” and fact-checking projects that take a deeper look into current Philippine issues.4 Her journalism in Malaya, originally “Ang Pahayagang Malaya” (translating to “The Free Newspaper”) contributed to the takedown of dictator Ferdinand Marcos in 1986. In 2019, Tordesillas was explicitly tagged in a “Oust Duterte” conspiracy matrix created and presented by Duterte spokesmen on media practitioners and organizations who are plotting against the Duterte administration. A few days later, Duterte himself called Tordesillas a “prostitute”. "
};

const heading3Props = {
    className: "heading2",
    text: "Deep Dive"
}

const paragraph4Items = [
    { text: "Shown here is a timeline of each journalist’s history with reporting and Philippine politics.",
      className: "normal" }
];

const visual1Data = [
    {
      label: 'View the Timeline',
      src: 'https://docs.google.com/document/d/e/2PACX-1vR_jB9xuS9WxHrBxPT0yE9h-IveHUFBbjH8pmUMbt4jGjdxDstaRzYQ4CsMEBBL2cEabfVNNJQrKsCq/pub?embedded=true',
      type: 'iframe'
    }
];

const paragraph5Items = [
    { text: "These events correlate heavily to online activity, where spikes indicate moments in their reporting that garnered high public reaction.",
      className: "normal" }
];

const twoGraphs1Props = {
    srcOne: "/html/tordesillas_bar_timeline.html",
    srcTwo: "/html/ranada_bar_timeline.html"
}

const paragraph6Items = [
    { text: "Some spikes even revealed moments that went under the radar in my manual study, showing the significance that online activity can have on public opinion. For instance, in an online livestream Ranada-Robles interviewed Raffy Tulfo (also known as “Idol Raffy”), an  incredibly popular online broadcaster and recently elected Senator (2022). In the interview, she asks Tulfo critical questions about current (2023) President Bongbong Marcos Jr., and about his interview with a media organization whose leader has publicly endorsed and expressed support for Marcos Jr.,  but otherwise refuses to be interviewed by media more critical of him. Tulfo defends  Marcos Jr. stating that it is fair to avoid “bias” media - to which Ranada-Robles responds by asking him to define “bias”. Tulfo’s dedicated followers saw this as an attack on Tulfo by Ranada-Robles and proceeded to comment heavily on posts of the interview, personally attacking her journalism and claiming she was “biased” herself.",
      className: "normal" },
    { text: "Even in this relatively civil interaction, by 2022, after media and government officials garnered a tense politicized relationship online the comments skewed from the calmness in this interview.",
      className: "normal" }
];

const image2Props = {
    image: image2,
    imageAlt: "Translation of the Interview",
    className: "normal"
};

const scrolly3 = {
    stepTexts: [
        "The comments against these Filipina journalists got only more vile in other posts, like the following comment. This comment was under this video. The video was posted by “National Socmed”, an account with a profile photo containing “DDS TEAM” which stands for “Duterte Diehard Supporter”. Although the comments come from everyday internet users, the posts commonly come from other DDS proclaimed accounts.",
        "These comments come from posts that are meant to get the attention and raise discourse among internet users. Videos were posted and commented on disproportionately more than standalone text posts. Content can be over exaggerated, dramaticized, and oftentimes fake – in the words of Maria Ressa “Lies laced with anger and hate spread fastest”, “faster than facts”.",
      ],
    image: scrolly3Image,
    imageAlt: "Willie and Netizens Attacking Pia",
    side: true
};

const heading4Props = {
    className: "heading1",
    text: "Populism in the Philippines"
};

const paragraph7Items = [
    { text: "Social media also lends itself well for populism; the mass networking online of platforms like Facebook makes it suitable for mass politics and pro-people aspects of populism. Unlike traditional media that comes from large organizations, social media enables “populist citizen journalism” where any user online can essentially act as a digital journalist. Social media adopts simple and emotional rhetoric from Populsm through the catchy texts, slogan, memes and dramatized videos that spread rapidly online. By having online communities – “echo chambers” – social media also fosters the “us vs. them dynamic” in populism.Social media’s speed and lack of fact-checking can accelerate the spread of misinformation and populist narratives. Duterte was arguably the first Filipino politician to use social media in combination with his populist message to such an advantage. This cluster shows the dedication his supporters had for Duterte, and more importantly their intense and unified online presence. The online presence of the Duterte administration and his army of supporters, labeled Diehard Duterte Supporter (DDS), allowed them to successfully push narratives solely by dominating the online space through posts and comments. Duterte, in nationalist fashion, would often attack any dissidents, from opposing politicians to investigative reporters, using vulgar language that his supporters would replicate and take online. Critics of Duterte, such as journalists, are left with comments ranging from “fake news” to “dilaw” to sexist language like “bitch”. This was how “the people”, DDS, to act in unity against any critics, and embody the “us-versus-them” attitude of populist politics.",
      className: "normal" },
    { text: "The rise of social media in politics comes alongside the fall of traditional media, which is partially due to the continuous tension between the media and the government.",
      className: "normal"}
];

const box2Props = {
    boxTitle: "The Longstanding History Between Media and the Government",
    boxText: [
        { text: "A notable start was during the leadership of dictator Ferdinand Marcos. In September 21, 1972, in an attempt to control the media and suppress political opposition and criticism of Marcos’ administration, the military shut down all privately owned print and media groups. In many ways, Marcos normalized a context in which the media was seen as opposition to the government. While larger media were either shut down or became government-run, the early 1980s saw the rise of alternative press such as Ang Pahayagang Malaya (The Free Newspaper) or Mr. & Ms. and outspoken columnists on mainstream press – of which nearly all of them were women – both which  played a major role in eroding the legitimacy of the Marcos regime. Radio and television stations had major roles in the lead-up to the “People Power” revolution in February 1986 which eventually rid Marcos’ dictatorship. This started a new presidency under a new female president, Corazon Aquino, widow to Benigno Aquino who ran against Marcos in 1986 in a rigged election and was later murdered."
        },
        {text: "Despite the return of the media after Aquino gained presidency, dynamics had changed; "},
        {text: "\“by dismantling the structure of the press built up over previous decades, Marcos … ultimately politicized the media to a staggering degree\”.",
         class: "bold-italic"},
         {text: "The press now maintained efforts to hold the government accountable. For example, when former President Joseph Estrada was ousted in 2001, the press ran stories on the corruption of his administration. Governments now use libel suits to discourage reports from covering sensitive issues. This has had a chilling effect in steering news away from investigative stories. The relationship between media and government is far from civil. "}
    ]
};

const heading5Props = {
    className: "heading1",
    text: "Narratives of Filipina Journalists"
};

const paragraph8Items = [
    { text: "To see how the rise of populism, along with the Philippines’ history of gender roles and conflict between media and government, manifests itself in the online space today for women journalists we can look  at the language used on Facebook.         ",
      className: "normal" }
];

const heading6Props = {
    className: "heading2",
    text: "Top Hashtags"
};

const scrolly4 = {
    stepTexts: [
        "Here's the most frequent hashtags related to Ranada and Tordesillas respectively.",
        "From this alone, more vulgar or politically charged language begins to stand out. Terms like “fake news” and “biased media” weaken the credibility of journalists, and terms like “burn” and “face palm” attack the journalist, and language such as “presstitute” “rippia” personally violate the journalist.",
        "Other trends start to surface as well. In Pia Ranada-Robles’ case, hate towards Rappler as an organization was facing heavy backlash by Duterte supporters.",
        "In Ellen Tordesillas case, hashtags of popular video creators, who likely posted the videos appear, telling us which users prominently create the narrative of Filipina journalists that circulate online. ThinkingPinoy is known for his viral videos and avid support for the Duterte administration. After gaining recognition online, he was later hired by the Department of Foreign Affairs as a social media consultant. TSCAreacts is the “reacts” or commentary segment of “The 700 Club Asia” (TSCA) a popular Christian broadcast in the Philippines. "
      ],
    image: scrolly4Image1,
    imageAlt: "Frequent Hashtags 1",
    slides: [scrolly4Image1, scrolly4Image2, scrolly4Image3, scrolly4Image4]
};

const heading7Props = {
    className: "heading2",
    text: "Words of Abuse"
};

const paragraph9Items = [
    { text: "I detected instances of online violence by detecting abuse terms – the abuse terms consisted of a list of over 516 terms in English and Filipino (in Tagalog, Ilocano, and Cebuano dialect). ~13% (12% for Ranada-Robles and 16% for Tordesillas) of all texts were labeled to have some sort of abuse.  ",
      className: "normal" },
    { text: "It’s important to note that this number is likely an underestimate of the percentage of abuse. Because of lack of research on detecting Filipino words, and detecting sentiments in Filipino language, a lot of text goes unnoticed. For instance, the text from before:        ",
      className: "normal" }
];

const box3Props = {
    boxTitle: "",
    boxText: [
        { text: "dapat jan ky pia isakay sa bangka dalhin salaot tpos hubaran at ipakain sa pating para hnd n makapagsinungaling. kawaka pia buhay kapa pero ang kaluluwa mo nasurok na sa impierno aguy nalang."
        }
    ]
};

const paragraph10Items = [
    { text: "has no detected abuse terms from our list.",
      className: "normal" },
    { text: "Shown here are the most frequent abusive terms in the Facebook posts and comments for each journalist. Most of these are in the FIlipino language. ",
      className: "normal" }
];

const twoGraphs2Props = {
    srcOne: "/html/tordesillas_pie_abuse_counts.html",
    srcTwo: "/html/ranada_pie_abuse_counts.html"
}

const heading8Props = {
    className: "heading2",
    text: "Finding Clusters"
};

const paragraph11Items = [
    { text: "This initial survey can only tell us so much - so I decided to map out all the texts of the posts and comments collected.",
      className: "normal" },
    { text: "Using Natural Language Processing (NLP) topic clustering, I grouped together similar comments and posts based on the themes they discuss. This involves analyzing the words and phrases in the text to identify patterns. On a technical level, this means turning each text into a numerical representation, and finding texts with similar numerical representations. By using data analysis methods, I’m able to organize and understand large volumes of text (54,078 Facebook posts, comments, and video titles and descriptions) without manually sifting through every single post and comment.",
      className: "normal" },
      { text: "Out of the 54,078 texts, the analysis found strong relationships between 7,604 (6,420 for Ranada-Robles, and 1184 for Tordesillas) of them creating 95 topic clusters (78 for Ranada-Robles and 17 for Tordesillas). I then went through the clusters and put them into bigger common topics. ",
      className: "normal" }
];

const visual2Data = [
    {
        label: 'Pia Ranada-Robles',
        src: '/html/ranada_topic_clusters.html',
        type: 'embed'
      },
    {
        label: 'Ellen Tordesillas',
        src: '/html/tordesillas_topic_clusters.html',
        type: 'embed'
    }
];

const paragraph12Items = [
    { text: "Each point is a text from a Facebook post, comment, video title or description. Points closer together form a cluster, meaning they share common themes or language. The real map of these points is in many dimensions, but I’ve compressed it into a flat graph which is why some clusters seem on top of each other. ",
      className: "normal" },
    { text: "These clusters give us a deeper understanding of the narratives, more  employed.",
      className: "normal" }
];

const heading9Props = {
    className: "heading2",
    text: "Understanding the Clusters"
};

const heading10Props = {
    className: "heading3",
    text: "Duterte’s Online Army of Supporters"
};

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
            <HeadingText {...heading2Props} />
            <Bio {...bio1Props} />
            <Bio {...bio2Props} />
            <HeadingText {...heading3Props} />
            <ParagraphText items={paragraph4Items} />
            <VisualToggle visuals={visual1Data} defaultActiveIndex={null} />
            <ParagraphText items={paragraph5Items} />
            <TwoGraphs {...twoGraphs1Props} />
            <ParagraphText items={paragraph6Items} />
            <Image {...image2Props} />
            <div className="scrolly-gap"></div>
            <div className="scrolly-gap"></div>
            <div className="scrolly-gap"></div>
            <Scrolly props={scrolly3}/>
            <HeadingText {...heading4Props}/>
            <ParagraphText items={paragraph7Items}/>
            <NormalBox boxProps={box2Props}/>
            <HeadingText {...heading5Props} />
            <ParagraphText items={paragraph8Items}/>
            <HeadingText {...heading6Props} />
            <div className="scrolly-gap"></div>
            <div className="scrolly-gap"></div>
            <Scrolly props={scrolly4}/>
            <HeadingText {...heading7Props} />
            <ParagraphText items={paragraph9Items}/>
            <NormalBox boxProps={box3Props}/>
            <ParagraphText items={paragraph10Items} />
            <TwoGraphs {...twoGraphs2Props} />
            <HeadingText {...heading8Props} />
            <ParagraphText items={paragraph11Items}/>
            <VisualToggle visuals={visual2Data} defaultActiveIndex={0} />
            <ParagraphText items={paragraph12Items}/>
            <HeadingText {...heading9Props} />
            <HeadingText {...heading10Props} />
            
        </main>
    );
}

export default MainContent;
