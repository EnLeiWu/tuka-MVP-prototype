import React from 'react';

import './MusicRow.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import singer1 from './img/artist1.png';
import singer2 from './img/artist2.png';
import singer3 from './img/artist3.png';
import singer4 from './img/artist4.png';
import singer5 from './img/artist5.png';
import singer6 from './img/artist6.png';
import myImg from './img/IMG_3138.jpg';


class MusicRow extends React.Component {

    constructor(props){
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    state={
        artists : [
            {name:"singer1 singer2 singer3gjklsdgnlsfdsgsfdh",id:1,
                song:"song title",
                image:myImg},
            {name:"singer2",id:2,
                song:"song title",
                image:singer2},
            {name:"singer3",id:3,
                song:"song title",
                image:singer3},
            {name:"singer4",id:4,
                song:"song title",
                image:singer4},
            {name:"singer5",id:5,
                song:"song title",
                image:singer5},
            {name:"singer6",id:6,
                song:"song title",
                image:singer6},
            {name:"singer7",id:7,
                song:"song title",
                image:singer1},
            {name:"singer7",id:8,
                song:"song title",
                image:singer2},
            {name:"singer7",id:9,
                song:"song title",
                image:singer3},
            {name:"singer7",id:10,
                song:"song title",
                image:singer6},
            {name:"singer7",id:11,
                song:"song title",
                image:singer6},
            {name:"singer7",id:12,
                song:"song title",
                image:singer6}],

    };

    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        var settings = {
            dots: false,
            arrows:true,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 6,

        };
        return this.props.genres.map(genre => (
            <div className='WholeRow'>

            {/*<div className='ui divider my_divider'></div>*/}

            <div className='flex_wraper'>
                <div><button
                    onClick={this.previous}
                    style={{border:"none", backgroundColor:"transparent"}}
                ><i className="angle left icon huge" /></button></div>

                <div  style={{width: '90%'}}>
                    <div>
                    <h2 className="row_header">{genre}</h2>
                    </div>

                    {/*<div className="ui grid" style={{width: '90%', margin: '0 auto'}} >*/}
                        <Slider ref={c => (this.slider = c)} {...settings}>
                                {this.state.artists.map((artist,i) =>
                                    <div key={i} >
                                        <img className="my_img" src={artist.image} alt="No pict shown" />
                                        <div className="center_item">{artist.name}</div>
                                    </div>
                                    )}
                        </Slider>
                    {/*</div>*/}
                    {/*<Artist artists={this.state.artists}/>*/}

                </div>

                <div><button
                    className="button"
                    onClick={this.next}
                    style={{border:"none", backgroundColor:"transparent"}}
                ><i className="angle right icon huge" /></button></div>

            </div>

        </div>

        ));
    };
}

export default MusicRow;
