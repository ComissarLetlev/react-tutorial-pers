import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": null,
      "title": "Brighton & Hove Albion 3-1 Southampton: Seagulls secure European football with win",
      "description": "Evan Ferguson scores twice in the first half as Brighton beat Southampton in the Premier League to secure European football for the first time in their history.",
      "url": "https://www.bbc.co.uk/sport/football/65586962",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/144EB/production/_129797138_gettyimages-1492014323.jpg",
      "publishedAt": "2023-05-21T15:02:19Z",
      "content": "Evan Ferguson took his tally to 10 goals for the season after scoring twice against Southampton\r\nEvan Ferguson scored twice in the first half as Brighton beat Southampton in the Premier League to sec… [+4895 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Iran protests: Football star Ali Karimi under travel ban, leaked papers show",
      "description": "Leaked papers seen by the BBC show Iran has targeted Ali Karimi for showing support for protesters.",
      "url": "https://www.bbc.co.uk/news/world-middle-east-65473415",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/45C2/production/_129585871_karimigettyimages-1245751214.jpg",
      "publishedAt": "2023-05-05T23:24:14Z",
      "content": "Iran imposed a travel ban on football star Ali Karimi, his wife and her family during the recent anti-government protests, leaked documents seen by the BBC show.\r\nMr Karimi was among the first celebr… [+2761 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Son Jun-ho: South Korean football player detained in China - reports",
      "description": "Son Jun-Ho was taken at a Shanghai airport as he tried to leave the country, Korean media report.",
      "url": "https://www.bbc.co.uk/news/world-asia-china-65606636",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B09E/production/_129741254_gettyimages-1245306171.jpg",
      "publishedAt": "2023-05-16T06:57:54Z",
      "content": "A South Korean footballer has been detained by Chinese police in relation to a bribery case, Korean media report.\r\nSon Jun-Ho, 31, who plays in the national side and in the Chinese Super League, was … [+2090 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "John Brewin",
      "title": "Football Daily | An eagerly rubbernecking football public gears up for Doom Sunday",
      "description": "Sign up now! Sign up now! Sign up now? Sign up now!Then there were three. The Premier League will have its Super Sunday filled with AS IT STANDS league tables, tearful fans in ill-considered fancy dress and perhaps even a repeat of last year’s fake-news hoax,…",
      "url": "https://www.theguardian.com/football/2023/may/23/football-daily-email-leicester-everton-leeds",
      "urlToImage": "https://i.guim.co.uk/img/media/bc81626a26d1ff6da8271bd34f149757b2d2d71b/0_396_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=fdf7ed8a8c343e7e78a210a80a87caa3",
      "publishedAt": "2023-05-23T14:43:42Z",
      "content": "SAD (SMITH, ALLARDYCE, DYCHE)\r\nThen there were three. The Premier League will have its Super Sunday filled with AS IT STANDS league tables, tearful fans in ill-considered fancy dress and perhaps even… [+4299 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": null,
      "title": "The week in Asian football - Reuters",
      "description": "The week in Asian football  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiRWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3Nwb3J0cy9zb2NjZXIvd2Vlay1hc2lhbi1mb290YmFsbC0yMDIzLTA1LTE1L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-05-15T02:22:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": null,
      "title": "The week in Asian football - Reuters",
      "description": "The week in Asian football  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiRWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3Nwb3J0cy9zb2NjZXIvd2Vlay1hc2lhbi1mb290YmFsbC0yMDIzLTA1LTIyL9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-05-22T03:14:52Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": null,
      "title": "Belgium midfielder Witsel retires from international football - Reuters",
      "description": "Belgium midfielder Witsel retires from international football  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiamh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3Nwb3J0cy9zb2NjZXIvYmVsZ2l1bS1taWRmaWVsZGVyLXdpdHNlbC1yZXRpcmVzLWludGVybmF0aW9uYWwtZm9vdGJhbGwtMjAyMy0wNS0xMi_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-05-12T17:44:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    }
  ]
  constructor() {
    super();
    console.log("Ami cholchi from constructor");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h2>NewsMonkey App</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title.slice(0, 45)}
                    description={element.description.slice(0, 88)}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div> 
              
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
