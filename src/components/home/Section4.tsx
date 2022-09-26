import React, { useEffect, useState } from 'react'
import { Section4Styles } from '../../styles/home/Section4Styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ScrollContainer from 'react-indiana-drag-scroll'
function Section4() {
    let div: HTMLElement;

    useEffect(() => {
        div = document.querySelector(".scroll-container") as HTMLElement;
    }, [])
    const backScroll = (): any => {
        console.log(div)
        div.scrollLeft = div.scrollLeft - 500;
    }

    const nextScroll = (): any => {
        div.scrollLeft = div.scrollLeft + 500;

    }

    return (
        <Section4Styles>
            <div className="div-1">
                <div className="arrow-back" onClick={backScroll}>
                    <ArrowBackIcon></ArrowBackIcon>
                </div>
                <h1>LA NOSTRA PIZZA</h1>
                <div className="arrow-next" onClick={nextScroll} >
                    <ArrowForwardIcon></ArrowForwardIcon>
                </div>
            </div>

            <ScrollContainer className="div-2 scroll-container">
                <img src="/images/home/section4/img1.jpg" />
                <img src="/images/home/section4/img2.jpg" />
                <img src="/images/home/section4/img3.jpg" />
                <img src="/images/home/section4/img4.jpg" />
                <img src="/images/home/section4/img5.jpg" />
                <img src="/images/home/section4/img6.jpg" />
            </ScrollContainer>

        </Section4Styles>
    )
}

export default Section4