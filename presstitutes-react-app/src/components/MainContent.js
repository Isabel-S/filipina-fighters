import React from 'react';
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
import BulletPoints from './BulletPoints';
import {quote, quotename, headings, scrollies, paragraphItems, imageProps, bioProps, boxProps, 
    visualData, twoGraphsProps, bulletProps} from './Data'

function MainContent() {
    return (
        <main>
            <Menu headings={headings} />
            <div className="scrolly-gap"></div>
            <QuoteContainer quote = {quote} quotename = {quotename} />
            <div className="scrolly-gap"></div>
            <Scrolly props={scrollies[0]}/>
            <div className="scrolly-gap"></div>
            <div className="scrolly-gap"></div>
            <Scrolly props={scrollies[1]}/>
            <ParagraphText items={paragraphItems[0]} />
            <Image {...imageProps[0]} />
            <ParagraphText items={paragraphItems[1]} />
            <NormalBox boxProps={boxProps[0]} />
            <ParagraphText items={paragraphItems[4]} />
            <HeadingText {...headings[0]} />
            <HeadingText {...headings[1]} />
            <Bio {...bioProps[0]} />
            <Bio {...bioProps[1]} />
            <HeadingText {...headings[2]} />
            <ParagraphText items={paragraphItems[3]} />
            <VisualToggle visuals={visualData[0]} defaultActiveIndex={null} />
            <ParagraphText items={paragraphItems[4]} />
            <TwoGraphs {...twoGraphsProps[0]} />
            <ParagraphText items={paragraphItems[5]} />
            <Image {...imageProps[1]} />
            <div className="scrolly-gap"></div>
            <div className="scrolly-gap"></div>
            <div className="scrolly-gap"></div>
            <Scrolly props={scrollies[2]}/>
            <HeadingText {...headings[3]}/>
            <ParagraphText items={paragraphItems[6]}/>
            <NormalBox boxProps={boxProps[1]}/>
            <HeadingText {...headings[4]} />
            <ParagraphText items={paragraphItems[7]}/>
            <HeadingText {...headings[5]} />
            <div className="scrolly-gap"></div>
            <div className="scrolly-gap"></div>
            <Scrolly props={scrollies[3]}/>
            <HeadingText {...headings[6]} />
            <ParagraphText items={paragraphItems[8]}/>
            <NormalBox boxProps={boxProps[2]}/>
            <ParagraphText items={paragraphItems[9]} />
            <TwoGraphs {...twoGraphsProps[1]} />
            <ParagraphText items={paragraphItems[10]}/>
            <BulletPoints items={bulletProps[0]} />
            <ParagraphText items={paragraphItems[11]}/>
            <TwoGraphs {...twoGraphsProps[2]} />
            <HeadingText {...headings[7]} />
            <ParagraphText items={paragraphItems[12]}/>
            <VisualToggle visuals={visualData[1]} defaultActiveIndex={0} />
            <ParagraphText items={paragraphItems[13]}/>
            <HeadingText {...headings[8]} />
            <HeadingText {...headings[9]} />
            <div className="scrolly-gap"></div>
            <div className="scrolly-gap"></div>
            <div className="scrolly-gap"></div>
            <Scrolly props={scrollies[4]}/>
            <ParagraphText items={paragraphItems[14]}/>
            <Image {...imageProps[2]} />
            <ParagraphText items={paragraphItems[15]}/>
            <VisualToggle visuals={visualData[2]} defaultActiveIndex={0} />
            <ParagraphText items={paragraphItems[16]}/>
            <HeadingText {...headings[10]} />
            <ParagraphText items={paragraphItems[17]}/>
            <div className="scrolly-gap"></div>
            <div className="scrolly-gap"></div>
            <div className="scrolly-gap"></div>
            <Scrolly props={scrollies[5]}/>
            <ParagraphText items={paragraphItems[18]}/>
            <Image {...imageProps[3]} />
            <ParagraphText items={paragraphItems[19]}/>
            <Image {...imageProps[4]} />
            <ParagraphText items={paragraphItems[20]}/>
            <HeadingText {...headings[11]} />
            <ParagraphText items={paragraphItems[21]}/>
            <HeadingText {...headings[12]} />
            <ParagraphText items={paragraphItems[22]}/>
            <div className="scrolly-gap"></div>
            <div className="scrolly-gap"></div>
            <div className="scrolly-gap"></div>
            <Scrolly props={scrollies[6]}/>
            <div className="scrolly-gap"></div>
            <Scrolly props={scrollies[7]}/>
            <ParagraphText items={paragraphItems[23]}/>
            <VisualToggle visuals={visualData[3]} defaultActiveIndex={0} />
            <div className="scrolly-gap"></div>
            <HeadingText {...headings[13]} />
            <ParagraphText items={paragraphItems[24]}/>
            <div className="scrolly-gap"></div>
            <HeadingText {...headings[14]} />
            <ParagraphText items={paragraphItems[25]}/>
            <div className="scrolly-gap"></div>
            <div className="scrolly-gap"></div>
        </main>
    );
}

export default MainContent;
