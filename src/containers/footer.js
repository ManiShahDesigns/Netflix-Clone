import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
    const firstColLinks = [
        "FAQ",
        "Investor Relations",
        "Ways to Watch",
        "Corporate Information",
        "Netflix Originals",
    ];

    const secondColLinks = [
        "Help Centre",
        "Jobs",
        "Terms of Use",
        "Contact Us",
    ];

    const thirdColLinks = [
        "Account",
        "Redeem gift cards",
        "Privacy",
        "Speed Test",
    ];

    const fourthColLinks = [
        "Media Centre",
        "Buy gift cards",
        "Cookie Preferences",
        "Legal Notices",
    ];

    return (
        <Footer className="gooz">
            <Footer.Title>Questions? Phone 1800 875 462</Footer.Title>
            <Footer.Break/>
            <Footer.Row>
                <Footer.Column>
                    {
                        firstColLinks.map( ( link ) => {
                            return ( <Footer.Link href="#">{ link }</Footer.Link> );
                        } )
                    }
                </Footer.Column>

                <Footer.Column>
                    {
                        secondColLinks.map( ( link ) => {
                            return ( <Footer.Link href="#">{ link }</Footer.Link> );
                        } )
                    }
                </Footer.Column>

                <Footer.Column>
                    {
                        thirdColLinks.map( ( link ) => {
                            return ( <Footer.Link href="#">{ link }</Footer.Link> );
                        } )
                    }
                </Footer.Column>

                <Footer.Column>
                    {
                        fourthColLinks.map( ( link ) => {
                            return ( <Footer.Link href="#">{ link }</Footer.Link> );
                        } )
                    }
                </Footer.Column>
            </Footer.Row>
            <Footer.Break/>
            <Footer.Text>Netflix Australia</Footer.Text>
        </Footer>
    );
}
