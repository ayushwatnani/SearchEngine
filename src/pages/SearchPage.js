import React from 'react';
import "./SearchPage.css";
import {useStateValue} from "../StateProvider/StateProvider";
// import useGoogleSearch from "../useGoogleSearch";
// import Response from "../response";
import {Link} from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {

    // eslint-disable-next-line no-unused-vars
    const [{term}, dispatch] = useStateValue();

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
                        alt=""/>
                    
                </Link>
                <div className="searchPage_headerBody">
                    <Search hideButtons searchq={term} />
                    <div className="searchPage_options">

                        {/*--------searchPage_optionsLeft--------------*/}
                        <div className="searchPage_optionsLeft">
                            <div className="searchPage_option">
                                <SearchIcon/>
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage_option">
                                <DescriptionIcon/>
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage_option">
                                <ImageIcon/>
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage_option">
                                <LocalOfferIcon/>
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchPage_option">
                                <RoomIcon/>
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="searchPage_option">
                                <MoreVertIcon/>
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
                        About 100000 results
                         for {term} in 0.00015 seconds
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
                            https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a
                            </a>
                            <a className="searchPage_resultTitle" href='https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/' target="_blank">
                                <h2>Rajar Singh Delhi |Director Profile - The Company Check</h2>
                            </a>
                            <p className="searchPage_resultSnippet">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            </p>
                            <br/>

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
                            https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a
                            </a>
                            <a className="searchPage_resultTitle" href='https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/' target="_blank">
                                <h2>Rajar Singh Delhi |Director Profile - The Company Check</h2>
                            </a>
                            <p className="searchPage_resultSnippet">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            </p>
                            <br/>

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
                            https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a
                            </a>
                            <a className="searchPage_resultTitle" href='https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/' target="_blank">
                                <h2>Rajar Singh Delhi |Director Profile - The Company Check</h2>
                            </a>
                            <p className="searchPage_resultSnippet">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            </p>
                            <br/>


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
                            https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a
                            </a>
                            <a className="searchPage_resultTitle" href='https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/' target="_blank">
                                <h2>Rajar Singh Delhi |Director Profile - The Company Check</h2>
                            </a>
                            <p className="searchPage_resultSnippet">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            </p>
                            <br/>


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
                            https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a
                            </a>
                            <a className="searchPage_resultTitle" href='https://startupheadlynes.com/spacexs-startship-blasts-while-landing-after-a-successful-launch/' target="_blank">
                                <h2>Rajar Singh Delhi |Director Profile - The Company Check</h2>
                            </a>
                            <p className="searchPage_resultSnippet">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            </p>
                            <br/>
                        </div>


                </div>


        </div>
    );
}

export default SearchPage;
