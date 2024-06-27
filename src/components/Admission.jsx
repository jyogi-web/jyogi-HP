import React from 'react';

const Admission = () => {
    return (
        <div className='Page'>
            <h2>サークル見学について</h2>
            <h4>お気軽にご見学下さい</h4>
            <p>見学希望者はサイトトップに表示されている日の部会や、直接部室の方にお訪ね下さい。</p>
            <p>質問・疑問などがあればメールによるお問い合わせにもお答えいたしております。</p>

            <p>活動内容をご見学されたい方は、サイトの作品紹介や5月、11月にある作品発表をご覧になれます。 なお、サイトにある作品はそれらの作品発表時に提出されたものとなっております。</p>

            <h2>入部方法について</h2>
            <p>入部方法は以下の2つの方法があります</p>
            <p>●部室に直接訪問し、入部用紙に記入する</p>
            <p>●ホームページからGoogleformsに記入する</p>
            
            <p>会費は年間3000円（月額250円）となっており、前期の最初の部会時に1年分（3000円）徴収致します。</p>
            <p>なお、サークル活動は基本的に放課後に行われますので、夕方以降に訪問することをお勧めいたします。</p>
            <p>また、オンラインでの入部申し込みも受け付けております。</p>
            
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd0LpbGEOvlb-g6Awiu664Ik6oQdZymdeDssMeimWZWP85vLQ/viewform?usp=sf_link"><div className='add-form'>Googleforms</div></a>
            {/* Googleformsへのリンクをボタン風にする */}
            
        </div>
    );
};

export default Admission;