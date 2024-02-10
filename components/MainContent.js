import React from "react";
import MenuToggle from "./MenuToggle";
import SideMenu from "./SideMenu";
import QuoteContainer from "./QuoteContainer";
import ScrollySection from "./ScrollySection";
import NormalBox from "./NormalBox";
import SideScrolly from "./SideScrolly";

class MainContent extends React.Component {
  render() {
    return (
      <main>
        {}
        <MenuToggle></MenuToggle>
        {}
        <SideMenu className="side-menu"></SideMenu>
        <div className="scrolly-gap" />
        <QuoteContainer></QuoteContainer>
        <div className="scrolly-gap" />
        <ScrollySection></ScrollySection>
        <div className="scrolly-gap" />
        <ScrollySection></ScrollySection>
        <p className="normal">
          <b>
            <i>
              Her story is one of many Filipina journalists who fear for their
              safety.
            </i>
          </b>
        </p>
        <p className="normal">
          Ressa refused to be silenced; her story is unique in that not only did
          she fight back, she fought back with data. With a team of researchers
          she gathered thousands of Twitter and Facebook posts and used data
          science techniques to uncover patterns, like narratives diminishing
          her credibility and gendered language, that her attackers. They also
          found that these were orchestrated attacks by internet users and
          government officials.{" "}
        </p>
        <div className="wide">
          <img className="img" src="img/static.reuters.jpg" />
        </div>
        <p className="normal">
          This online phenomenon of online misogynistic attacks and vilification
          of journalists has its roots in the Philippine’s sociopolitical
          development in terms of the history between media and politics, gender
          roles, machismo culture, and the rise of populism, which intersect
          together in ways that endanger female journalists. Ressa's data
          collection exposes a story of misogynistic online harassment against
          her.
        </p>
        <p className="normal">
          <b>
            <i>
              How can data uncover more stories of online violence for other
              Filipina journalists? What do these narratives tell us about the
              Philippine’s sociopolitical context that enables online violence
              towards women journalists?
            </i>
          </b>
        </p>
        <p className="normal">
          To explore these questions, I took a deep dive into two Filipina
          journalists: Pia Ranada-Robles and Ellen Tordesillas. I collected and
          analyzed 54,078 total Facebook texts (42,810 for Ranada-Robles, 11,268
          for Tordesillas) including posts, comments, video titles and
          descriptions, between ~2016 to 2023. These were gathered from a
          Facebook search for each journalist: “pia ranada” for Ranada-Robles
          and “ellen tordesillas” for Tordesillas. I visualized the language and
          timeline of the Facebook posts, then traced these to real-life events
          in each of the journalist's careers and the sociopolitical contexts in
          which they occurred.{" "}
        </p>
        <NormalBox></NormalBox>
        <p className="normal">
          To explore these questions, I took a deep dive into two Filipina
          journalists: Pia Ranada-Robles and Ellen Tordesillas. I collected and
          analyzed 54,078 total Facebook texts (42,810 for Ranada-Robles, 11,268
          for Tordesillas) including posts, comments, video titles and
          descriptions, between ~2016 to 2023. These were gathered from a
          Facebook search for each journalist: “pia ranada” for Ranada-Robles
          and “ellen tordesillas” for Tordesillas. I visualized the language and
          timeline of the Facebook posts, then traced these to real-life events
          in each of the journalist's careers and the sociopolitical contexts in
          which they occurred.{" "}
        </p>
        <h1
          className="wide heading-1"
          id="Who are Pia Ranada-Robles and Ellen Tordesillas?"
        >
          Who are Pia Ranada-Robles and Ellen Tordesillas?
        </h1>
        <h2 className="wide heading-2" id="Rundown">
          Rundown
        </h2>
        <div className="normal">
          <img className="wrap face-img" src="img/pia-ranada.png" />
          <p>
            Pia Ranada-Robles is a senior reporter for Rappler, covering
            Philippine politics and the environment. She followed Duterte
            exclusively during his presidential campaign prior to 2016. During
            Duterte’s presidency, she served as a Malacañang Palace reporter
            (White House Correspondent equivalent in the United States). In
            2018, due to critical articles by Rappler and Ranada-Robles herself
            she became the only reporter from the Malacañang Press Corps to be
            banned by Duterte from entering the executive office at the palace.
            Her interactions with Duterte have been marked with sexism offline
            and online, including Duterte wolf-whistling her in a 2016 press
            conference, and a Facebook video of another 2017 press conference
            captioned “President Rody Duterte burns Rapplerette … Pia
            Ranada-Robles twice during a recently concluded press conference”
            viewed over 1.5 million times.
          </p>
        </div>
        <div />
        <div className="normal">
          <img className="wrap face-img" src="img/ellen-tordesillas.png" />
          <p>
            Ellen Tordesillas is a “veteran journalist” and founder of VERA
            Files, a non profit founded in 2008 specializing in “in-depth
            reports and commentaries” and fact-checking projects that take a
            deeper look into current Philippine issues.4 Her journalism in
            Malaya, originally “Ang Pahayagang Malaya” (translating to “The Free
            Newspaper”) contributed to the takedown of dictator Ferdinand Marcos
            in 1986. In 2019, Tordesillas was explicitly tagged in a “Oust
            Duterte” conspiracy matrix created and presented by Duterte
            spokesmen on media practitioners and organizations who are plotting
            against the Duterte administration. A few days later, Duterte
            himself called Tordesillas a “prostitute”.{" "}
          </p>
        </div>
        <p className="normal">
          Both journalists found themselves in similar social dilemmas as Ressa,
          where they’ve been attacked on an offline level by the Duterte
          organization, and may have faced online attacks as well.{" "}
        </p>
        <h2 className="wide heading-2" id="Deep Dive">
          Deep Dive
        </h2>
        <p className="normal">
          Shown here is a timeline of each journalist’s history with reporting
          and Philippine politics.
        </p>
        <div className="dropdown">
          <button id="dropdown-button" className="normal dropbtn">
            View the Timeline
          </button>
          <div id="dropdown-content" className="wide dropdown-content">
            <iframe
              className
              src="https://docs.google.com/document/d/e/2PACX-1vR_jB9xuS9WxHrBxPT0yE9h-IveHUFBbjH8pmUMbt4jGjdxDstaRzYQ4CsMEBBL2cEabfVNNJQrKsCq/pub?embedded=true"
            />
          </div>
        </div>
        <p className="normal">
          These events correlate heavily to online activity, where spikes
          indicate moments in their reporting that garnered high public
          reaction.
        </p>
        <div className="two-graphs">
          <embed
            className
            type="text/html"
            src="html/tordesillas_bar_timeline.html"
          />
          <embed
            className
            type="text/html"
            src="html/ranada_bar_timeline.html"
          />
        </div>
        <p className="normal">
          {" "}
          Some spikes even revealed moments that went under the radar in my
          manual study, showing the significance that online activity can have
          on public opinion. For instance, in an online livestream Ranada-Robles
          interviewed Raffy Tulfo (also known as “Idol Raffy”), an incredibly
          popular online broadcaster and recently elected Senator (2022). In the
          interview, she asks Tulfo critical questions about current (2023)
          President Bongbong Marcos Jr., and about his interview with a media
          organization whose leader has publicly endorsed and expressed support
          for Marcos Jr., but otherwise refuses to be interviewed by media more
          critical of him. Tulfo defends Marcos Jr. stating that it is fair to
          avoid “bias” media - to which Ranada-Robles responds by asking him to
          define “bias”. Tulfo’s dedicated followers saw this as an attack on
          Tulfo by Ranada-Robles and proceeded to comment heavily on posts of
          the interview, personally attacking her journalism and claiming she
          was “biased” herself.{" "}
        </p>
        <p className="normal">
          {" "}
          Even in this relatively civil interaction, by 2022, after media and
          government officials garnered a tense politicized relationship online
          the comments skewed from the calmness in this interview.
        </p>
        <div className="normal">
          <img className src="img/translation-1.png" />
        </div>
        <SideScrolly></SideScrolly>
        {}
        <h1 className="wide heading-1" id="Populism in the Philippines">
          Populism in the Philippines
        </h1>
        <p className="normal">
          This social media phenomenon has to do a lot with the rise of populist
          tactics employed by Duterte. Populism is a political approach that
          champions the interests of the common ‘people’ against an ‘ the elite’
          or establishment (Muddle, 2004) in an “us vs. them” dynamic. It often
          involves simplistic and emotional rhetoric, appeals to national
          identity, focuses on addressing grievances and inequalities. Populist
          leaders often position themselves as political outsiders who will
          enact policies to address the concerns of the marginalized. Dutere
          promised to rid the country of crime and drugs, a heavy issue of the
          marginalized, through his war on crime. He is famous for his
          vulgarity, telling reporters “Don’t fuck with me” 3. Duterte has also
          said that he is “testing the elite in this country”. Although populist
          politics were most evident in Duterte’s presidency , its rhetorics –
          such as appealing to the mass poor – were commonly deployed by past
          Filipino leaders as well, such as former President Joseph Estrada.{" "}
        </p>
        <p className="normal">
          {" "}
          According to Professor Julie Mostov, author of “Populism Is Always
          Gendered and Dangerous”, the reinforcement of gender roles is
          essential to populism’s nationalist narrative. Populism involves the
          leader rallying “authentic” supporters around a promise to restore
          national greatness, by excluding “inauthentic” groups – such as
          dissidents to the cause – in order to foster a narrative of returning
          to a glorified unified past. This dynamic reinforces gendered
          narratives. For instance, to create a persona that resonates with
          supporters seeking forceful solutions and a sense of protection,
          populist leaders adopt a “strongman” persona, emphasizing traits
          traditionally associated with masculinity such as toughness and
          assertives, often against the “inauthentic” groups. This perpetuates a
          gendered stereotype of what a strong leader should be. The narrative
          of restoring something from the past also brings back misogynistic
          norms or gender roles from the past to modern day.{" "}
        </p>
        <h2 className="wide heading-2">
          The Rise of Social Media and the Fall of Traditional Media{" "}
        </h2>
        <p className="normal">
          Social media also lends itself well for populism; the mass networking
          online of platforms like Facebook makes it suitable for mass politics
          and pro-people aspects of populism. Unlike traditional media that
          comes from large organizations, social media enables “populist citizen
          journalism” where any user online can essentially act as a digital
          journalist. Social media adopts simple and emotional rhetoric from
          Populsm through the catchy texts, slogan, memes and dramatized videos
          that spread rapidly online. By having online communities – “echo
          chambers” – social media also fosters the “us vs. them dynamic” in
          populism.Social media’s speed and lack of fact-checking can accelerate
          the spread of misinformation and populist narratives. Duterte was
          arguably the first Filipino politician to use social media in
          combination with his populist message to such an advantage. This
          cluster shows the dedication his supporters had for Duterte, and more
          importantly their intense and unified online presence. The online
          presence of the Duterte administration and his army of supporters,
          labeled Diehard Duterte Supporter (DDS), allowed them to successfully
          push narratives solely by dominating the online space through posts
          and comments. Duterte, in nationalist fashion, would often attack any
          dissidents, from opposing politicians to investigative reporters,
          using vulgar language that his supporters would replicate and take
          online. Critics of Duterte, such as journalists, are left with
          comments ranging from “fake news” to “dilaw” to sexist language like
          “bitch”. This was how “the people”, DDS, to act in unity against any
          critics, and embody the “us-versus-them” attitude of populist
          politics.{" "}
        </p>
        <p className="normal">
          The rise of social media in politics comes alongside the fall of
          traditional media, which is partially due to the continuous tension
          between the media and the government.
        </p>
        <NormalBox></NormalBox>
        <h1 className="wide heading-1" id="Narratives of Filipina Jouranlists">
          Narratives of Filipina Jouranlists
        </h1>
        <p className="normal">
          To see how the rise of populism, along with the Philippines’ history
          of gender roles and conflict between media and government, manifests
          itself in the online space today for women journalists we can look at
          the language used on Facebook.{" "}
        </p>
        <h2 className="wide heading-2" id="Top Hashtags">
          Top Hashtags
        </h2>
        <ScrollySection></ScrollySection>
        <h2 className="wide heading-2" id="Words of Abuse">
          Words of Abuse
        </h2>
        <p className="normal">
          I detected instances of online violence by detecting abuse terms – the
          abuse terms consisted of a list of over 516 terms in English and
          Filipino (in Tagalog, Ilocano, and Cebuano dialect). ~13% (12% for
          Ranada-Robles and 16% for Tordesillas) of all texts were labeled to
          have some sort of abuse.{" "}
        </p>
        <p className="normal">
          It’s important to note that this number is likely an underestimate of
          the percentage of abuse. Because of lack of research on detecting
          Filipino words, and detecting sentiments in Filipino language, a lot
          of text goes unnoticed. For instance, the text from before:{" "}
        </p>
        <NormalBox></NormalBox>
        <p className="normal">has no detected abuse terms from our list.</p>
        <p className="normal">
          Shown here are the most frequent abusive terms in the Facebook posts
          and comments for each journalist. Most of these are in the FIlipino
          language.{" "}
        </p>
        <div className="two-graphs">
          <embed
            className
            type="text/html"
            src="html/tordesillas_bar_terms.html"
          />
          <embed className type="text/html" src="html/ranada_bar_terms.html" />
        </div>
        <p className="normal">
          The types of attacks can be categorized as “attacks on credibility”,
          “political” or labeled as “dilawan”, “sexist”, or “other”.{" "}
        </p>
        <ul className="normal">
          <li>
            <b>Attacks on credibility:</b> These attacks undermine the
            journalists professional reputation and trust in the media. This
            includes pushing a disinformation narrative (their journalism is
            ‘fake news’), accusing them of corruption (‘presstitute)’, and using
            terms generally attacking the journalists intellectual ability
            (‘bobo’, meaning ‘stupid’)
          </li>
          <li>
            <b>Political / Dillawan:</b> These are politically themed attacks.
            ‘Dilaw’ translates to yellow, which is used to describe members of
            the opposition, so ‘dilawan’ or variations (‘yellowtard’, ‘traitor’)
            are used to accuse journalists of being pro-opposition. Attacks also
            involve claiming the journalists have ‘bias’ towards certain groups.
          </li>
          <li>
            <b>Sexist / Explilcit:</b> These attacks include sexist and explicit
            language, and threats of violence.
          </li>
          <li>
            <b>Other:</b> This includes any broadly demeaning comments
            (‘demonyo’ meaning ‘demon’)
          </li>
        </ul>
        <p className="normal">
          There is a fair amount of sexist abusive comments, a level of explicit
          attack that only women journalists receive.{" "}
        </p>
        <div className="two-graphs">
          <embed
            className
            type="text/html"
            src="html/tordesillas_pie_abuse_counts.html"
          />
          <embed
            className
            type="text/html"
            src="html/ranada_pie_abuse_counts.html"
          />
        </div>
        <h2 className="wide heading-2" id="Finding Clusters">
          Finding Clusters
        </h2>
        <p className="normal">
          This initial survey can only tell us so much - so I decided to map out
          all the texts of the posts and comments collected.
        </p>
        <p className="normal">
          Using Natural Language Processing (NLP) topic clustering, I grouped
          together similar comments and posts based on the themes they discuss.
          This involves analyzing the words and phrases in the text to identify
          patterns. On a technical level, this means turning each text into a
          numerical representation, and finding texts with similar numerical
          representations. By using data analysis methods, I’m able to organize
          and understand large volumes of text (54,078 Facebook posts, comments,
          and video titles and descriptions) without manually sifting through
          every single post and comment.
        </p>
        <p className="normal">
          Out of the 54,078 texts, the analysis found strong relationships
          between 7,604 (6,420 for Ranada-Robles, and 1184 for Tordesillas) of
          them creating 95 topic clusters (78 for Ranada-Robles and 17 for
          Tordesillas). I then went through the clusters and put them into
          bigger common topics.
        </p>
        <div className="toggle-buttons">
          <button className="toggle-button active" id="graph1Btn">
            Pia Ranada-Robles
          </button>
          <button className="toggle-button" id="graph2Btn">
            Ellen Tordesillas
          </button>
        </div>
        <div className="active graph-container" id="graph1">
          <embed
            className="wide-chart"
            type="text/html"
            src="html/ranada_topic_clusters.html"
          />
        </div>
        <div className="graph-container" id="graph2">
          <embed
            className="wide-chart"
            type="text/html"
            src="html/tordesillas_topic_clusters.html"
          />
        </div>
        <p className="normal">
          Each point is a text from a Facebook post, comment, video title or
          description. Points closer together form a cluster, meaning they share
          common themes or language. The real map of these points is in many
          dimensions, but I’ve compressed it into a flat graph which is why some
          clusters seem on top of each other.
        </p>
        <p className="normal">
          These clusters give us a deeper understanding of the narratives, more
          employed.
        </p>
        <h2 className="wide heading-2" id="Understanding the Clusters">
          Understanding the Clusters
        </h2>
        <h3
          className="wide heading-3"
          id="Duterte\u2019s Online Army of Supporters"
        >
          Duterte’s Online Army of Supporters
        </h3>
        <ScrollySection></ScrollySection>
        <h3
          className="wide heading-3"
          id="Duterte\u2019s Online Army of Supporters"
        >
          Duterte’s Online Army of Supporters
        </h3>
        <p className="normal">
          Duterte’s supporters flipped the script on fake news, claiming that
          traditional media was “fake news” themselves, allowing government
          officials to continue the historical tension conflict between media
          and the government. Today a huge narrative is attacking the
          credibility of news organizations, and the journalist themself.
        </p>
        <div className="wide-chart-container">
          <embed
            className="wide-chart"
            type="text/html"
            src="html/ranada_topic_clusters.html"
          />
        </div>
        <p className="normal">Explore some of the words of attack used:</p>
        <div className="toggle-buttons">
          <button className="toggle-button" id="table1Btn">
            Attacks on News Credibility
          </button>
          <button className="toggle-button" id="table2Btn">
            Attacks on Pia's Credibility
          </button>
          <button className="toggle-button" id="table3Btn">
            'Dilawan and Bias'
          </button>
        </div>
        <div className="graph-container" id="table1">
          <img src="img/table1.png" />
        </div>
        <div className="graph-container" id="table2">
          <img src="img/table2.png" />
        </div>
        <div className="graph-container" id="table3">
          <img src="img/table3.png" />
        </div>
        <p className="normal">
          These attacks not only target areas of news credibility and spreading
          a narrative of biased media, but also have an undertone of belittling
          the journalist, and employing vulgar language.
        </p>
        <h3 className="wide heading-3" id="Blogger Support">
          Blogger Support
        </h3>
        <p className="normal">
          While attacking traditional reporters and media organizations,
          Filipinos turn to alternative media – “populist citizen journalism” –
          that often employed the form of Filipino “bloggers” who were seen as
          “authentic” journalists.{" "}
        </p>
        <ScrollySection></ScrollySection>
        <p className="normal">
          However, others push a more worrying narrative, as seen in discussion
          about “bloggers” and “social media” in the Tordesillas' cluster about
          Blogger Support. I've picked about the most worrying comments here.
        </p>
        <div className="active graph-container">
          <img src="img/bloggertordesillas.png" />
        </div>
        <p className="normal">
          These bloggers would post viral tabloid videos, photos, and texts
          supporting Duterte. Ironically, the posts were often disinformation
          themselves, taking advantage of modern-day post-truth politics. The
          “Mocha” mentioned here is Margaux “Mocha” Uson, a pro-Duterte
          controversial blogger and ex-government official. Mocha was the first
          to push the term “presstitute”, a play on the words “press” and
          “prostitute”, in 2016.
        </p>
        <p className="normal">
          16 minutes later, campaign spokesperson Peter Lavina would use it in a
          post attacking media critics on Duterte’s war on drugs.
        </p>
        <div className="normal">
          <img src="img/mocha.png" />
        </div>
        <p className="normal">
          Mocha was later rewarded by the president by being given a government
          role - Assistant Secretary of the Presidential Communications
          Operations Office (PCOO).
        </p>
        <h3 className="wide heading-3" id="Personal Attacks">
          Personal Attacks
        </h3>
        <p className="normal">
          The most significant narrative is the explicit attacks against
          Filipina journalists. While these attacks often have gendered
          undertones, the ones that appear gender neutral still have vulgarity
          and assertiveness that has ties to language norms from gender roles
          established in Philippine’s history.{" "}
        </p>
        <p className=" normal box-title">
          The Longstanding History of Gender Roles
        </p>
        <p className="normal">
          (as it relates to hyper masculine discourse today)
        </p>
        <p className="normal">
          {" "}
          Despite Duterte’s seemingly never-seen-before acts of masculinity,
          this masculinity might be a continuation rather than a break from past
          Philippine stereotypes.{" "}
        </p>
        <ScrollySection></ScrollySection>
        <ScrollySection></ScrollySection>
        <p className="normal">Explore these attacks being used in practice: </p>
        <div className="active graph-container">
          <embed
            className="wide-chart"
            type="text/html"
            src="html/ranada_topic_clusters.html"
          />
        </div>
        <div className="toggle-buttons">
          <button className="toggle-button" id="gendertable1Btn">
            Attacks on Pia
          </button>
          <button className="toggle-button" id="gendertable2Btn">
            Kapal Mukha
          </button>
          <button className="toggle-button" id="gendertable3Btn">
            Tatay Digong
          </button>
        </div>
        <div className="graph-container" id="gendertable1">
          <img src="img/gendertable1.png" />
        </div>
        <div className="graph-container" id="gendertable2">
          <p>
            Translates directly to “thick face”, meaning stubborn, but also a
            bodily attack{" "}
          </p>
          <img src="img/gendertable2.png" />
        </div>
        <div className="graph-container" id="gendertable3">
          <img src="img/gendertable3.png" />
        </div>
        <h1 className="wide heading-1" id="Hearing From a Filipina Jouranlist">
          Hearing From a Filipina Jouranlist
        </h1>
        <p className="normal">
          I interviewed a Fililpina journalist who shall remain anonymous under
          a pseudonym Alexis, on her thoughts, as someone who has experienced
          similar levels of hate to the journalists studied in this article.
          From the get-go, she commented on the explicit attacks female
          reporters face – “[It’s] very sexist. The [attacks] on male reporters
          was more of their credibility, the questions they asked, their
          demeanor, but for women it's always about appearance” between a
          woman's “her hairstyle or her expression” and even “memes of me where
          I my mouth would be open and then they would put a penis nearby”.
        </p>
        <p className="normal">
          The online attacks not only shift a public’s narrative on media, but
          reach a personal level towards the journalist that is deeply
          dehumanizing.
        </p>
        <p className="normal">
          <i>
            “Am I doing the right thing? Am I really biased? Am I a good
            reporter? Or not? Like what's happening? It kind of messes with your
            head.”
          </i>
        </p>
        <p className="normal">
          The attacks take on an emotional toll that affects how they conduct
          their work, cerating real offline consequences. At the height of her
          attacks, Alexis said she would be “scared to ask this question,
          because how will the President react?” These fears, of being doxxed
          and having heightened attacks that women face, are on top of the
          challenges journalists have to go through in the Philippines.
        </p>
        <p className="normal">
          <i>
            “You’re also thinking, when I get home and open my Facebook on my
            phone, there’s gonna be all these hate messages and you just seal
            yourself from that, aside from having to steel yourself to ask a
            question or write the article. It just adds layers of fear that you
            already have to sift through everyday”
          </i>
        </p>
        <p className="normal">
          She attributes this rise in language and attacks on media to Duterte’s
          presidency and the Philippine people’s tendency to follow identity
          politics. Alexis told a story on how during the campaign season,
          Duterte dared another candidate to “a gun duel” to “fight out”
          differences. It “elevated politics to something like a spectacle,
          where you're either with us or against us, in such colorful language”.
          He also “actively made the media the enemy”. These attributes from
          Duterte in real life shifted to “the online conversation, lille the
          same kind of language”.
        </p>
        <p className="normal">
          <i>
            "The followers were basically echoing Duterte’s way of speaking,
            because they thought that's how you prove loyalty that this is us.
            This is who we are. We’re like tough talking, but we get things
            done. So people were there, it was becoming their identity, which is
            what's dangerous,"
          </i>
        </p>
        <p className="normal">
          I had originally scheduled a 30 minute interview, but instead an hour
          of conversing flew by. With only a few seconds left I asked Alexis for
          any concluding thoughts. Amidst the multidies of degradation she and
          her colleagues have faced, and sociopolitical challenges it poses for
          the Philippines, she ended on a hopeful note.
        </p>
        <p className="normal">
          <i>
            “Vitriolic language can’t be forever, because people also get tired
            of all that hate. People are getting tired of just nonsense in
            politics. We’ll see that foul language will die out eventually.
            Because there’s just no place for it, and people get tired of
            listening to it.”
          </i>
        </p>
        <h1 className="wide heading-1" id="Conclusion">
          Conclusion
        </h1>
        <p className="normal">
          The data has shown that the online phenomenon is a result of a shift
          to populist politics alongside longstanding tensions with the media,
          government, and historical gender roles. Themes in the data included
          attacks on the credibility of traditional journalists and support for
          populist citizen journalists like bloggers. The attacks against
          journalists adopt explicit and sexist language, which is taken after
          former President Duterte, who radicalized sexist behavior. This study
          has made a novel contribution to the widespread online hate all
          Filipina journalists face; it's not a one-off incident, it's part of
          women's everyday lives.
        </p>
        <hr />
        <h1 className="wide heading-1" id="Works Cited">
          Works Cited
        </h1>
        <p className="normal small">
          This work is the result of being a Susan Heck scholar at the Clayman
          Institute for Gender Research in summer 2023. Immense thank you to
          Claire Urbanski, my research advisor, and Alison Dahl Crossley, my
          program coordinator. Thank you! The code for this website, and for my
          data collection and analysis is available publically{" "}
          <a
            href="https://github.com/philippine-presstitutes/philippine-presstitutes.github.io"
            target="_blank"
          >
            here
          </a>
          . The accompanying text for this site is in a Google Doc{" "}
          <a
            href="https://docs.google.com/document/d/1Z-6rlWvs_70CEHUZHIwPLRhYmQEHSYC3iNyV6bBMKDU/edit"
            target="_blank"
          >
            here
          </a>
          , and slides for this used in a final research presentation are{" "}
          <a
            href="https://docs.google.com/presentation/d/10xhjGeS2pM8kFp60TTcwAT_G4g0tEveGz27zVPkQGig/edit#slide=id.g276048eb516_0_0"
            target="_blank"
          >
            here
          </a>
          .
        </p>
        <div className="normal small">
          <ul>
            <li>
              <a href="https://www.icfj.org/sites/default/files/2021-03/Maria%20Ressa-%20Fighting%20an%20Onslaught%20of%20Online%20Violence_0.pdf">
                Posetti, Julie, Diana Maynard, and Kiana Bontcheva. Maria Ressa:
                Fighting an Onslaught of Online Violence. International Center
                for Journalists, 2021.
              </a>
            </li>
            <li>
              <a href="https://www.icfj.org/news/online-violence-new-front-line-women-journalists">
                International Center for Journalists. “Online Violence: The New
                FrontLine for Women Journalists*,” n.d.
              </a>
            </li>
            <li>
              <a href="https://www.newyorker.com/magazine/2016/11/21/when-a-populist-demagogue-takes-power">
                Chen, Adrian. “When a Populist Demagogue Takes Power.” The New
                Yorker, 14 Nov. 2016.
              </a>
            </li>
            <li>
              <a href="https://www.rappler.com/newsbreak/in-depth/timeline-how-duterte-normalized-sexism-misogyny-philippine-presidency/">
                Abad, Michelle. “Timeline: How Duterte Normalized Sexism in the
                Philippine Presidency.” RAPPLER, 21 June 2022.
              </a>
            </li>
            <li>
              <a href="https://www.researchgate.net/publication/265414669_The_Filipino_male_as_macho-Machunurin_bringing_men_and_masculinities_in_gender_and_development_in_the_Philippines">
                Angeles, Leonora. “The Filipino male as macho-Machunurin:
                bringing men and masculinities in gender and development in the
                Philippines.” Kasarinlan Journal of Third World Issues.
              </a>
            </li>
            <li>
              <a href="https://news.abs-cbn.com/news/05/13/19/duterte-calls-journalist-ellen-tordesillas-a-prostitute-presidents-vulgarity-hit">
                Arianne Merez, ABS-CBN News. “Duterte Calls Journalist Ellen
                Tordesillas a 'Prostitute'; President's 'Vulgarity' Hit.”
                ABS-CBN News, May 13, 2019.
              </a>
            </li>
            <li>
              <a href="https://doi.org/10.17583/mcs.2020.5157">
                De Chavez, Jeremy C., and Vincent Pacheco. “Masculinity in the
                age of (Philippine) populism: Spectacle, hypermasculinity, and
                Rodrigo Duterte.” Masculinities & Social Change, vol. 9, no. 3,
                2020.
              </a>
            </li>
            <li>
              <a href="https://doi.org/10.1177/0306422019895720">
                Go, Miriam Grace A. “Sexism Is President’s Power Tool: Duterte
                Is Using Violent Language and Threats against Journalists,
                Rappler’s News Editor Explains.” Index on Censorship 48, no. 4
                (December 17, 2019).
              </a>
            </li>
            <li>
              <a href="https://doi.org/10.1111/j.1460-2466.1988.tb02068.x">
                González, Hernando. “Mass media and the spiral of silence: The
                Philippines from Marcos to Aquino.” Journal of Communication,
                vol. 38, no. 4, 1988.
              </a>
            </li>
            <li>
              <a href="http://www.jstor.org/stable/42634410">
                McCoy, Alfred W. “Philippine Commonwealth and Cult of
                Masculinity.” Philippine Studies, vol. 48, no. 3, 2000.
              </a>
            </li>
            <li>
              <a href="https://doi.org/10.3389/fsoc.2020.625385">
                Mostov, Julie. “Populism is always gendered and dangerous.”
                Frontiers in Sociology, vol. 5, 2021.
              </a>
            </li>
            <li>
              <a href="https://www.philstar.com/headlines/2019/06/09/1924985/tordesillas-duterte-claim-i-didnt-ask-money-even-when-i-had-cancer">
                Philstar.com. “Tordesillas on Duterte Claim: I Didn’t Ask for
                Money Even When I Had Cancer,” June 9, 2019.
              </a>
            </li>
            <li>
              <a href="https://doi.org/10.1080/01292986.2021.1993943">
                Ragragio, Jefferson Lyndon. “Facebook populism: Mediatized
                narratives of exclusionary nationalism in the Philippines.”
                Asian Journal of Communication, vol. 32, no. 3, 2022.
              </a>
            </li>
            <li>
              <a href="https://www.theatlantic.com/international/archive/2018/06/duterte-kiss-philippines/562265/">
                Santos, Ana P. “Duterte's Kiss and the Philippines 'Machismo
                Populism'” The Atlantic, June 12, 2018.
              </a>
            </li>
            <li>
              <a href="https://doi.org/10.1080/17512786.2021.1981774">
                Tandoc, Edson C., Karryl Kim A. Sagun, and Katrina Paola B.
                Alvarez. “The Digitization of Harassment: Women Journalists’
                Experiences with Online Harassment in the Philippines.”
                Journalism Practice, October 4, 2021.
              </a>
            </li>
          </ul>
        </div>
      </main>
    );
  }
}

export default MainContent;
