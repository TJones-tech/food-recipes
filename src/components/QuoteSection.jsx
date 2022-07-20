import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

import React from 'react'

function QuoteSection() {
    return (
        <div className="section quote">
            <p className="qoute-text"><FontAwesomeIcon icon={faQuoteLeft} /> Consuming food is theraputic. What a joy of art.</p>
            <p className="qoute-auther">- Terrance Jones</p>
        </div>
    )
}
export default QuoteSection;