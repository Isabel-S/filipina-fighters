import React from 'react';
import './MainContent.css'; 
import Menu from './Menu';
import QuoteContainer from './QuoteContainer';

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


function MainContent() {
    return (
        <main>
            <Menu headings={headings} />
            <div className="scrolly-gap"></div>
            <QuoteContainer quote = {quote} quotename = {quotename} />

        </main>
    );
}

export default MainContent;
