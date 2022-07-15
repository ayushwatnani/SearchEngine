import React from 'react';
import "./SearchPage.css";
import { useStateValue } from "../StateProvider/StateProvider";
// import useGoogleSearch from "../useGoogleSearch";
// import Response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {

    // eslint-disable-next-line no-unused-vars
    const [{ term }, dispatch] = useStateValue();

    //LIVE API Call *****************************************
    // const {data} = useGoogleSearch(term);

    // const data = Response;

    // https://cse.google.com/cse/create/new
    // console.log(data);

    return (
        <div className="searchPage">
            {/*<h1>This is search page WoW!!!!!</h1>*/}
            <div className="searchPage_header">
                <Link to="/">
                    <img
                        className="searchPage_logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
                        alt="" />

                </Link>
                <div className="searchPage_headerBody">
                    <Search hideButtons searchq={term} />
                    <div className="searchPage_options">

                        {/*--------searchPage_optionsLeft--------------*/}
                        <div className="searchPage_optionsLeft">
                            <div className="searchPage_option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage_option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage_option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage_option">
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchPage_option">
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="searchPage_option">
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>
                        </div>

                        {/*--------searchPage_optionsRight--------------*/}
                        <div className="searchPage_optionsRight">
                            <div className="searchPage_option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage_option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="searchPage_results">

                <p className="searchPage_resultCount">
                    About 1,45,000 results
                    for {term} in (0.39) seconds
                </p>

                <div className="searchPage_result">
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a href='#' target="_blank">

                        {/* <img
                                        className="searchPage_resultImage"
                                        src='https://ichef.bbci.co.uk/news/640/cpsprodpb/CF28/production/_98123035_gettyimages-73254912.jpg'
                                        alt=''
                                        style={{height:'100px', width:'350px'}}
                                    /> */}


                    </a>
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a target="_blank" href="https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/" className="searchPage_resultSnippet">
                        https://indianexpress.com › Elections-results-lost-rajar-singh67a9128x
                    </a>
                    <a className="searchPage_resultTitle" href='https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/' target="_blank">
                        <h2>Rajar Singh, the perpetual rebel, loses high-profile ...
                            https://indianexpress.com › Elections</h2>
                    </a>
                    <p className="searchPage_resultSnippet">
                        Delhi, India, Politician . Election results
                        10-Mar-2022 — Navjot Singh Sidhu – who was sent thrice to Parliament from Amritsar, all three on a BJP ticket, and
                        once to the Punjab Assembly, ...

                    </p>
                    <br />

                    <a href='#' target="_blank">

                        {/* <img
                                        className="searchPage_resultImage"
                                        src='https://ichef.bbci.co.uk/news/640/cpsprodpb/CF28/production/_98123035_gettyimages-73254912.jpg'
                                        alt=''
                                        style={{height:'100px', width:'350px'}}
                                    /> */}


                    </a>
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a target="_blank" href="https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/" className="searchPage_resultSnippet">
                        https://jtvdailynews.com › education-merit-based-admissions-reservationquota_098uy765t
                    </a>
                    <a className="searchPage_resultTitle" href='https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/' target="_blank">
                        <h2>Practice is the secret to becoming a topper – Rajar Singh
                            https://jtvdailynews.com › Education</h2>
                    </a>
                    <p className="searchPage_resultSnippet">
                        Delhi, India, Politician . Higher secondary education results
                        10-Mar-2022 Rajar Hats off to u, you have exhibited your high level of maturity in your thought process ,very ..
                    </p>
                    <br />

                    <a href='#' target="_blank">

                        {/* <img
                                        className="searchPage_resultImage"
                                        src='https://ichef.bbci.co.uk/news/640/cpsprodpb/CF28/production/_98123035_gettyimages-73254912.jpg'
                                        alt=''
                                        style={{height:'100px', width:'350px'}}
                                    /> */}


                    </a>
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a target="_blank" href="https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/" className="searchPage_resultSnippet">
                        https://www.skinnovationclinics.com › dr-rajar-singh-gupta

                    </a>
                    <a className="searchPage_resultTitle" href='https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/' target="_blank">
                        <h2>Best Plastic Surgeon in Delhi Dr. Rajar Singh Gupta</h2>
                    </a>
                    <p className="searchPage_resultSnippet">
                        Dr. Rajar singh Gupta is a board-certified Plastic Surgeon in Delhi, India having done his complete training from Maulana Azad
                        Medical College, topmost medical ...
                    </p>
                    <br />


                    <a href='#' target="_blank">

                        {/* <img
                                        className="searchPage_resultImage"
                                        src='https://ichef.bbci.co.uk/news/640/cpsprodpb/CF28/production/_98123035_gettyimages-73254912.jpg'
                                        alt=''
                                        style={{height:'100px', width:'350px'}}
                                    /> */}


                    </a>
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a target="_blank" href="https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/" className="searchPage_resultSnippet">
                        https://wwwRajat Events, Delhi - Planner - Sector 11, Dwarkahttps://www.weddingwire.in › ... › Delhi NCR › Dwarka
                    </a>
                    <a className="searchPage_resultTitle" href='https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/' target="_blank">
                        <h2>Rajar Events, Delhi - Planner - Sector 11, Daryaganj</h2>
                    </a>
                    <p className="searchPage_resultSnippet">
                        rajar delhi from www.weddingsutra.in
                        Rajat Events is a wedding planning company located in the city of Delhi. There are many weddings when they have added
                        the perfect touch of gleam and glamour to ....weddingwire.in › ... › Delhi NCR › Dwarka
                    </p>
                    <br />


                    <a href='#' target="_blank">

                        {/* <img
                                        className="searchPage_resultImage"
                                        src='https://ichef.bbci.co.uk/news/640/cpsprodpb/CF28/production/_98123035_gettyimages-73254912.jpg'
                                        alt=''
                                        style={{height:'100px', width:'350px'}}
                                    /> */}


                    </a>
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a target="_blank" href="http://delhitimesnews.co/?p=54" className="searchPage_resultSnippet">
                        http://delhitimesnews.co/?p=54
                    </a>
                    <a className="searchPage_resultTitle" href='http://delhitimesnews.co/?p=54' target="_blank">
                        <h2>COMPUTER HACKER KILLED IN POLICE PURSUIT</h2>
                    </a>
                    <p className="searchPage_resultSnippet">
                        Local man was believed to have aided in the theft of
                        international intelligence On Thursday, police attempting to arrest 24-year-old Rajar
                        Singh fired at him during a chase through Karol Bagh
                        neighborhood...
                    </p>
                    <br />

                    <a target="_blank" href="https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/" className="searchPage_resultSnippet">
                        https://indiankanoon.org › doc
                    </a>
                    <a className="searchPage_resultTitle" href='https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/' target="_blank">
                        <h2>Chhana S/O Rajar Singh vs State Of Rajasthan on 11</h2>
                    </a>
                    <p className="searchPage_resultSnippet">
                        10-MAR-2022- JUDGMENT Navidran Sharma, J. 1. On November 28, 1976 at about 8.30 a.m., Shyam Lal Bhatti, Food
                        Inspector, Gelabale Town was on his inspection round ...
                    </p>
                    <br />

                    <a target="_blank" href="https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/" className="searchPage_resultSnippet">
                        https://www.jagran.com › delhi ›rejersingh-murdercase- ne...
                    </a>
                    <a className="searchPage_resultTitle" href='https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/' target="_blank">
                        <h2>Kundli Border Murder Case: निहंग राजा राज स ंह िेलखबीर की ...</h2>
                    </a>
                    <p className="searchPage_resultSnippet">
                        20-Oct-2021 — Kundli Border Murder Case लखबीर की िशृ ं हत्या की जजम्मेदारी लेिेके बाद ेलगातार फोटो ...
                    </p>
                    <br />

                    <a target="_blank" href="https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/" className="searchPage_resultSnippet">
                        https://timesofdelhi.com › crime report &gt; man-got-killed-in-pursuit_908ujh765r…
                    </a>
                    <a className="searchPage_resultTitle" href='https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/' target="_blank">
                        <h2>Rajar Singh, computer hacker killed in police pursuit…
                            https://timesofdelhi.com › Crime Report</h2>
                    </a>
                    <p className="searchPage_resultSnippet">
                        10-Mar-2022 — Rajar Singh – a man from Delhi has been killed in a police pursuit, police attempting to arrest
                        24-year-old Rajar Singh fired at him during a chase through Karol Bagh ...

                    </p>
                    <br />

                    <a target="_blank" href="https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/" className="searchPage_resultSnippet">
                        https://m.facebook.com › public › Rajar-Deep-Singh….
                    </a>
                    <a className="searchPage_resultTitle" href='https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/' target="_blank">
                        <h2>Rajar-deep-singh Profiles | Facebook</h2>
                    </a>
                    <p className="searchPage_resultSnippet">
                        View the profiles of people named Rajar Deep Singh. Join Facebook to connect with Rajar Deep Singh and
                        others you may know. Facebook gives people the...
                    </p>
                    <br />

                    <a target="_blank" href="https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/" className="searchPage_resultSnippet">
                        https://twitter.com › rajatsethi86-nationfirst-alum….
                    </a>
                    <a className="searchPage_resultTitle" href='https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/' target="_blank">
                        <h2>Rajar Saxena (@Rajarsaxena86) / Twitter</h2>
                    </a>
                    <p className="searchPage_resultSnippet">
                        Rajat Saxena. @Rajarsaxena86. tweets personal; nation first; alum iit, mit, harvard; published author.
                        New Delhi, India Joined November 2011.
                    </p>
                    <br />

                    <a target="_blank" href="https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/" className="searchPage_resultSnippet">
                        https://-phulekhahttps://www.phulekha.com &gt; Rajar-singh-Prajapati…
                    </a>
                    <a className="searchPage_resultTitle" href='https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/' target="_blank">
                        <h2>Rajari Prajapati in Hari Nagar, Delhi-110058 - › Rajari Prajapati in Hari Nagar,</h2>
                    </a>
                    <p className="searchPage_resultSnippet">
                        Delhi110058-Get Rajari Prajapati in Hari Nagar address, phone numbers, user ratings, reviews, contact person and
                        quotes ...
                    </p>
                    <br />
                </div>


            </div>


        </div>
    );
}

export default SearchPage;
