import PreviewImage from "../images/flat-logo.png";
import Head from 'next/head'
import React from "react";

export default function Preview({
    card="Summary", title, description
}) {
    return (
        <Head>
            <title>Backstop Syndicate</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="twitter:card" content={card} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:image" content="/preview.jpg" />
        </Head>
    )
}