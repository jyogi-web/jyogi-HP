// src/components/Seo.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const Seo = ({
    title = "情報技術研究部 | JYOGI",
    description = "福岡工業大学情報技術研究部（じょぎ）の公式ウェブサイトです。Web開発やゲーム開発を行う学生サークルです。",
    image = "/imgs/jyogi.png",
    twitterCard = "summary_large_image",
    siteUrl = "https://jyogi-hp.pages.dev",
}) => {
    const { pathname } = useLocation();
    const currentUrl = `${siteUrl}${pathname}`;

    return (
        <Helmet>
            {/* 基本メタタグ */}
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* OGP基本タグ */}
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${siteUrl}${image}`} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="情報技術研究部 | JYOGI" />
            <meta property="og:locale" content="ja_JP" />

            {/* Twitter Card */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:site" content="@jyogi_pr" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}${image}`} />

            {/* canonical URL */}
            <link rel="canonical" href={currentUrl} />
        </Helmet>
    );
};

export default Seo;
