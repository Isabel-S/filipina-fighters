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
import visual3Image1 from '../img/table1.png';
import visual3Image2 from '../img/table2.png';
import visual3Image3 from '../img/table3.png';
import image4 from "../img/bloggertordesillas.png"
import image5 from "../img/mocha.png"
import scrolly7Image1 from '../img/gender1.png';
import scrolly7Image2 from '../img/gender2.png';
import scrolly7Image3 from '../img/gender3.png';
import scrolly8Image from '../img/dutertegender.png';
import visual4Image1 from '../img/gendertable1.png';
import visual4Image2 from '../img/gendertable2.png';
import visual4Image3 from '../img/gendertable3.png';

const headings = [
    { className: "heading1",
      text: "Who are Pia Ranada-Robles and Ellen Tordesillas?"
    },
    { className: "heading2",
      text: "Rundown"
    },
    { className: "heading2",
      text: "Deep Dive"
    },
    { className: "heading1",
      text: "Populism in the Philippines"
    },
    { className: "heading1",
      text: "Narratives of Filipina Journalists"
    },
    { className: "heading2",
      text: "Top Hashtags"
    },
    { className: "heading2",
      text: "Words of Abuse"
    },
    { className: "heading2",
      text: "Finding Clusters"
    },
    { className: "heading2",
      text: "Understanding the Clusters"
    },
    { className: "heading3",
      text: "Duterte’s Online Army of Supporters"
    },
    { className: "heading3",
      text: "Blogger Support"
    },
    { className: "heading3",
      text: "Personal Attacks"
    },
    { className: "heading4",
      text: "The Longstanding History of Gender Roles"
    },
    { text: "Hearing From a Filipina Journalists",
      className: "heading1"
    },
    { text: "Conclusion",
      className: "heading1"
    }
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

const bio1Props = {
    image: bio1Image,
    text: "Pia Ranada-Robles is a senior reporter for Rappler, covering Philippine politics and the environment. She followed Duterte exclusively during his presidential campaign prior to 2016. During Duterte’s presidency, she served as a Malacañang Palace reporter (White House Correspondent equivalent in the United States). In 2018, due to critical articles by Rappler and Ranada-Robles herself she became the only reporter from the  Malacañang Press Corps to be banned by Duterte from entering the executive office at the palace. Her interactions with Duterte have been marked with sexism offline and online, including Duterte wolf-whistling her in a 2016 press conference, and a Facebook video of another 2017 press conference captioned “President Rody Duterte burns Rapplerette … Pia Ranada-Robles twice during a recently concluded press conference” viewed over 1.5 million times."
};

const bio2Props = {
    image: bio2Image,
    text: "Ellen Tordesillas is a “veteran journalist” and founder of VERA Files, a non profit founded in 2008 specializing in “in-depth reports and commentaries” and fact-checking projects that take a deeper look into current Philippine issues.4 Her journalism in Malaya, originally “Ang Pahayagang Malaya” (translating to “The Free Newspaper”) contributed to the takedown of dictator Ferdinand Marcos in 1986. In 2019, Tordesillas was explicitly tagged in a “Oust Duterte” conspiracy matrix created and presented by Duterte spokesmen on media practitioners and organizations who are plotting against the Duterte administration. A few days later, Duterte himself called Tordesillas a “prostitute”. "
};

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

const paragraph8Items = [
    { text: "To see how the rise of populism, along with the Philippines’ history of gender roles and conflict between media and government, manifests itself in the online space today for women journalists we can look  at the language used on Facebook.         ",
      className: "normal" }
];


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
    srcOne: "/html/tordesillas_bar_terms.html",
    srcTwo: "/html/ranada_bar_terms.html"
};

const paragraph11Items = [
    {text: "The types of attacks can be categorized as “attacks on credibility”, “political” or labeled as “dilawan”, “sexist”, or “other”.",
     className: "normal"}
];

const bulletProps1 = [
    "Attacks on credibility: These attacks undermine the journalists professional reputation and trust in the media. This includes pushing a disinformation narrative (their journalism is ‘fake news’), accusing them of corruption (‘presstitute)’, and using terms generally attacking the journalists intellectual ability (‘bobo’, meaning ‘stupid’).",
    "Political / Dillawan: These are politically themed attacks. ‘Dilaw’ translates to yellow, which is used to describe members of the opposition, so ‘dilawan’ or variations (‘yellowtard’, ‘traitor’) are used to accuse journalists of being pro-opposition. Attacks also involve claiming the journalists have ‘bias’ towards certain groups.",
    "Sexist / Explilcit: These attacks include sexist and explicit language, and threats of violence. ",
    "Other: This includes any broadly demeaning comments (‘demonyo’ meaning ‘demon’)"
];

const paragraph12Items = [
    {text: "There is a fair amount of sexist abusive comments, a level of explicit attack that only women journalists receive.",
    className: "normal"}
];

const twoGraphs3Props = {
    srcOne: "/html/tordesillas_pie_abuse_counts.html",
    srcTwo: "/html/ranada_pie_abuse_counts.html"
};

const paragraph13Items = [
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

const paragraph14Items = [
    { text: "Each point is a text from a Facebook post, comment, video title or description. Points closer together form a cluster, meaning they share common themes or language. The real map of these points is in many dimensions, but I’ve compressed it into a flat graph which is why some clusters seem on top of each other. ",
      className: "normal" },
    { text: "These clusters give us a deeper understanding of the narratives, more  employed.",
      className: "normal" }
];


const scrolly5 = {
    stepTexts: [
        "\“Du30 Spam\” consists of an overwhelming support for Duterte.",
        "Examples include \"Epal na reporter, Duterte is the best President 👊👊👊\", \"Thank you President Duterte..❤\", \"Duterte is the best.\", \"Duterte is the best ❤️\", \"Duterte is still the Best! We knew and we saw it.. 🥰❤\", \"DUTERTE IS THE BEST.. SHAME ON YOU...\"",
        "This unified online army helped quickly and effectively push narratives discussed below."
      ],
    image: "/html/ranada_topic_clusters.html",
    imageAlt: "",
    chart: true
};

const paragraph15Items = [
    { text: "Duterte’s supporters flipped the script on fake news, claiming that traditional media was “fake news” themselves, allowing government officials to continue the historical tension conflict between media and the government.  Today a huge narrative is attacking the credibility of news organizations, and the journalist themself.",
      className: "normal" },
];

const image3Props = {
    image: "/html/ranada_topic_clusters.html",
    className: "wide",
    embed: true
};

const paragraph16Items = [
    { text: "Explore some of the words of attack used:",
      className: "normal" },
];

const visual3Data = [
    {
        label: 'Attacks on News Credibility',
        src: visual3Image1,
        type: 'img'
      },
    {
        label: 'Attacks on Pia\'s Credibility',
        src: visual3Image2,
        type: 'img'
    },
    {
        label: '\'Dilawan and Bias\'',
        src: visual3Image3,
        type: 'img'
    }
];

const paragraph17Items = [
    { text: "These attacks not only target areas of news credibility and spreading a narrative of biased media, but also have an undertone of belittling the journalist, and employing vulgar language. ",
      className: "normal" },
];

const paragraph18Items = [
    { text: "While attacking traditional reporters and media organizations, Filipinos turn to alternative media – “populist citizen journalism” – that often employed the form of Filipino “bloggers” who were seen as “authentic” journalists. ",
      className: "normal" },
];

const scrolly6 = {
    stepTexts: [
        "Some support for social media personalities seem relatively harmless, like this spam of support for Raffy Tulfo.",
        "Examples include: \"Idol raffy 💪\", \"Yes true idol raffy\",  \"Good job idol raffy..🫰\", \"God bless you idol Raffy 🙏❤️❤️\", \"idol rafy thank you❤️❤️❤️💚💚💚\", \"well said idol raffy!\""
    ],
    image: "/html/ranada_topic_clusters.html",
    imageAlt: "",
    chart: true
};

const paragraph19Items = [
    { text: "However, others push a more worrying narrative, as seen in discussion about “bloggers” and “social media” in the Tordesillas' cluster about Blogger Support. I've picked about the most worrying comments here.",
      className: "normal" },
];

const image4Props = {
    image: image4,
    className: "wide-medium",
};

const paragraph20Items = [
    { text: "These bloggers would post viral tabloid videos, photos, and texts supporting Duterte. Ironically, the posts were often disinformation themselves, taking advantage of modern-day post-truth politics. The “Mocha” mentioned here is Margaux “Mocha” Uson, a pro-Duterte controversial blogger and ex-government official. Mocha was the first to push the term “presstitute”, a play on the words “press” and “prostitute”, in 2016.",
      className: "normal" },
      { text: "16 minutes later, campaign spokesperson Peter Lavina would use it in a post attacking media critics on Duterte’s war on drugs.",
      className: "normal" }
];

const image5Props = {
    image: image5,
    className: "normal"
}

const paragraph21Items = [
    {text: "Mocha was later rewarded by the president by being given a government role - Assistant Secretary of the Presidential Communications Operations Office (PCOO).",
     className: "normal"}
];

const paragraph22Items = [
    {text: "The most significant narrative is the explicit attacks against Filipina journalists. While these attacks often have gendered undertones, the ones that appear gender neutral still have vulgarity and assertiveness that has ties to language norms from gender roles established in Philippine’s history. ",
     className: "normal"}
];


const paragraph23Items = [
    {text: "(as it relates to hyper masculine discourse today)",
     className: "normal"},
     {text: "Despite Duterte’s seemingly never-seen-before acts of masculinity, this masculinity might be a continuation rather than a break from past Philippine stereotypes. ",
     className: "normal"}
];

const scrolly7 = {
    stepTexts: [
        "Foreign Model of Masculinity: America’s colonization of the Philippines, which lasted from 1898 to 1946 introduced a foreign model of masculinity promoting assertiveness, individuality and authority associated with the West. Today the Philippine's socio-political anxiety regarding anti-colonial sentiments bridges nationalism with masculinity. These sentiments influenced the military, gender roles, and national politics. ",
        "Guns, Gangs, Gore, and Girls - Modern Socialization of Gender Roles: Gender roles stem from a common father archetype in the Philippines labeled by social researchers as the “procreator”, originating from the idea of “womanizing husbands who revel in impregnating as many women as possible”. This is seen in celebrity Joseph Estrada (who later became famous), and other famous actors and politicians, who are praised as fatherly figures. The behavior reflects Filipino masculinity ideals tied to family tradition, continuing of family name, and being the bread-winner. These ideals have seeped into gender roles in the Philippines. Men and boys prefer behavior like womanizing, and leisure including shooting, gambling and drinking – all of which are glorified in the media with hyper masculinity intertwining with themes of themes of guns, gangs, gore, and girls including forms of violence against women. Women and girls put up with the male “barkada” (gangmates). The “barkada” is a form of masculine solidarity, and goes alongside basketball, gambling, and cockfights. The father and his barkada drink regularly, and take on mistresses (“querida” system), disrupting family life. Adult women are expected to tolerate this behavior, continuing the stereotype \“dutiful daughters\” and \“defiant sons\”. ",
        "Devout Catholic Culture: In a devout Catholic culture where nearly 80% of Filipinos are Roman Catholic, men and elders are treated with almost unquestionable respect. This aligns with the discussion of the “Father”, or God, and the “Son” or Jesus, traditional family values and significance of elders in the Bible. The association rings true in modern society; former President Duterte was often referred to as ‘Tatay Digong' (“Tatay” meaning father, “Digong” as Duterte’s nickname)"
    ],
    image: scrolly7Image1,
    slides: [scrolly7Image1, scrolly7Image2, scrolly7Image3]
};

const scrolly8 = {
    stepTexts: [
        "Duterte, or ‘Tatay Digong’, adopted a populist political style that lends itself to crass hypermasculine language and behavior. His misogynistic discourse is cloaked by nationalist rhetoric, positioning himself as the “father of the nation”. By acting as the “common man”, he is able to take masculine behavior established in Filipino culture and take them to radicalized extremes. He’s joked about an Austrailian national being gang raped in prision, saying that “the mayor should have been first” to assault the woman, ordered his soldies to shoot female communist guerillas in their vaginas, and even called his daughter a “drama queen” when she confessed she was a sexual assault victim.",
        "Duterte’s spokesperson Salvador Panelo, claims that it’s just light hearted jokes: “You assume that the president is vulgar. He was never vulgar. When he cracks jokes it was intended to make people laugh, never to offend. Being vulgar is different. You women should know that.”",
        "His behavior is a continuation of the Filipino male archetype, making it easier for the public to accept. “It's not far-reaching to apply this to Duterte given the way his followers have embraced him as a father figure and laugh off his sleazy behavior the way they laugh off a creepy uncle” says Marla Darwin, one of the founders of feminist group Grrrl Gang Manila. Duterte himself, in response to his rape comments on the Austrailian national, said: “This is how men talk”",
        "His extreme language normalized a shift in more radical misogyny. Leaders like Duterte hold influence and represent social institutions that mold our society. With Duterte, he is reinforcing a sexual script that: “sexual violence is acceptable behavior and is part of the male behavior to be in society. It is manly. It’s what makes you an attractive male” - De Vela (gender studies expert at Miriam college)"
    ],
    image: scrolly8Image,
    imageAlt: "Duterte and his Gendered Attacks"
};

const paragraph24Items = [
    {text: "Explore these attacks being used in practice:",
     className: "normal"}
];

const visual4Data = [
    {
        label: 'Attacks on Pia',
        src: visual4Image1,
        type: 'img'
      },
    {
        label: 'Kapal Mukha (thick face / stubborn)',
        src: visual4Image2,
        type: 'img'
    },
    {
        label: 'Tatay Digong',
        src: visual4Image3,
        type: 'img'
    }
];

const paragraph25Items = [
    {text: "I interviewed a Fililpina journalist who shall remain anonymous under a pseudonym Alexis, on her thoughts, as someone who has experienced similar levels of hate to the journalists studied in this article. From the get-go, she commented on the explicit attacks female reporters face – “[It’s] very sexist. The [attacks] on male reporters was more of their credibility, the questions they asked, their demeanor, but for women it's always about appearance” between a woman's “her hairstyle or her expression” and even “memes of me where I my mouth would be open and then they would put a penis nearby”",
     className: "normal"},
    {text: "The online attacks not only shift a public’s narrative on media, but reach a personal level towards the journalist that is deeply dehumanizing.",
    className: "normal"},
    {text: "“Am I doing the right thing? Am I really biased? Am I a good reporter? Or not? Like what's happening? It kind of messes with your head.”",
    className: "normal bold-italic"},
    {text: "The attacks take on an emotional toll that affects how they conduct their work, cerating real offline consequences. At the height of her attacks, Alexis said she would be “scared to ask this question, because how will the President react?” These fears, of being doxxed and having heightened attacks that women face, are on top of the challenges journalists have to go through in the Philippines. ",
    className: "normal"},
    {text: "“You’re also thinking, when I get home and open my Facebook on my phone, there’s gonna be all these hate messages and you just seal yourself from that, aside from having to steel yourself to ask a question or write the article. It just adds layers of fear that you already have to sift through everyday”",
    className: "normal bold-italic"},
    {text: "She attributes this rise in language and attacks on media to Duterte’s presidency and the Philippine people’s tendency to follow identity politics. Alexis told a story on how during the campaign season, Duterte dared another candidate to “a gun duel” to “fight out” differences. It “elevated politics to something like a spectacle, where you're either with us or against us, in such colorful language”. He also “actively made the media the enemy”. These attributes from Duterte in real life shifted to “the online conversation, lille the same kind of language",
    className: "normal"},
    {text: "\"The followers were basically echoing Duterte’s way of speaking, because they thought that's how you prove loyalty that this is us. This is who we are. We’re like tough talking, but we get things done. So people were there, it was becoming their identity, which is what's dangerous,\"",
    className: "normal bold-italic"},
    {text: "I had originally scheduled a 30 minute interview, but instead an hour of conversing flew by. With only a few seconds left I asked Alexis for any concluding thoughts. Amidst the multidies of degradation she and her colleagues have faced, and sociopolitical challenges it poses for the Philippines, she ended on a hopeful note.",
    className: "normal"},
    {text: "\“Vitriolic language can’t be forever, because people also get tired of all that hate. People are getting tired of just nonsense in politics. We’ll see that foul language will die out eventually. Because there’s just no place for it, and people get tired of listening to it.\”",
    className: "normal bold-italic"}
];

const paragraph26Items = [
    {text: "The data has shown that the online phenomenon is a result of a shift to populist politics alongside longstanding tensions with the media, government, and historical gender roles. Themes in the data included attacks on the credibility of traditional journalists and support for populist citizen journalists like bloggers. The attacks against journalists adopt explicit and sexist language, which is taken after former President Duterte, who radicalized sexist behavior. This study has made a novel contribution to the widespread online hate all Filipina journalists face; it's not a one-off incident, it's part of women's everyday lives.",
     className: "normal"}
]

const scrollies = [scrolly1, scrolly2, scrolly3, scrolly4, scrolly5, scrolly6, scrolly7, scrolly8]
const paragraphItems = [paragraph1Items, paragraph2Items, paragraph3Items, paragraph4Items, paragraph5Items, 
    paragraph6Items, paragraph7Items, paragraph8Items, paragraph9Items, paragraph10Items, paragraph11Items, 
    paragraph12Items, paragraph13Items, paragraph14Items, paragraph15Items, paragraph16Items, paragraph17Items, 
    paragraph18Items, paragraph19Items, paragraph20Items, paragraph21Items, paragraph22Items, paragraph23Items, 
    paragraph24Items, paragraph25Items, paragraph26Items]
const imageProps = [image1Props, image2Props, image3Props, image4Props, image5Props]
const bioProps = [bio1Props, bio2Props]
const boxProps = [box1Props, box2Props, box3Props]
const visualData = [visual1Data, visual2Data, visual3Data, visual4Data]
const twoGraphsProps = [twoGraphs1Props, twoGraphs2Props, twoGraphs3Props]
const bulletProps = [bulletProps1]

export {quote, quotename, headings, scrollies, paragraphItems, imageProps, bioProps, boxProps, 
    visualData, twoGraphsProps, bulletProps}