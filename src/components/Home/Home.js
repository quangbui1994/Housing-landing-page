import React from 'react';
import { House, Icon3, Icon2, Icon1, ForwardArrow, BackArrow,HeroImage, Image1, Image2, Image3, Image4, Image5, Room5, Room6, Room7, Room8, Room9, Room10, Logo1, Logo2, Logo3, Logo4, Logo5 } from './index';
import styles from './Home.module.css';
import cx from 'classnames';
import { useState } from 'react';
import Quote from '../Quote/Quote';

const Home = () => {
    const quotes = [
        {quote: 'We just wanted to thank you for this fantastic website! We are so grateful for being able to advertise our Petite cabin and receive feedback from people from all over the U.S. and even further.', author: 'Adam Morph', title: 'CEO Alfatech'},
        {quote: 'Great services! We just found the most satisfied housing ever. The customer services are also awesome and truthfully. We got the housing offer only after few weeks and the offers are relatively high.', author: 'James Scott', title: 'Customer'},
    ];
    const [x, setX] = useState(0);
    const [quoteNum, setQuoteNum] = useState(0);
    const [indicatorState, setIndicatorState] = useState([false, true])
    const [indicatorQuoteState, setIndicatorQuoteState] = useState([false, true])
    const activeIndicate = num => {
        const newIndicatorState = indicatorState.map((el, i) => {
            if (i !== num) return false;
            return true;
        });
        setIndicatorState(newIndicatorState);
        if (num == 1 && x < 0) {
            setX(x + 345);
        } else if (num == 0) {
            setX(x - 345);
        }
    };

    const activeQuoteIndicate = num => {
        const newIndicatorQuoteState = indicatorQuoteState.map((el, i) => {
            if (i !== num) return false;
            return true;
        });
        setIndicatorQuoteState(newIndicatorQuoteState);
        if (num == 0 && quoteNum < quotes.length - 1) {
            setQuoteNum(quoteNum + 1);
        } else if (num == 1 && quoteNum > 0) {
            setQuoteNum(quoteNum - 1);
        };
    };

    return (
        <div className={styles.Home}>
            <div className={styles.section}>
                <div className={styles.actionCall}>
                    <div>Build Your</div>
                    <div>Dream <span className={styles.highlightText}>House</span></div>
                </div>
                <div className={styles.mainBlock}>
                    <div className={styles.introduction}>
                        <p>The first and most trusted marketplace of design & build house in The World. 100% guaranteed Build safe, comfortable and transparent with a project management for the best result</p>
                        <button className={styles.redButton}>Free Consultation</button>
                    </div>
                    <img src={HeroImage} className={styles.heroImage}></img>
                </div>
            </div>

            <div className={cx(styles.section, styles.room)}>
                <h2>Build professional valuable room for you</h2>
                <div className={cx(styles.navigator, styles.galleryNavigator)}>
                    <div className={cx(styles.indicator, indicatorState[0] ? styles.activeIndicator : '')} onClick={() => activeIndicate(0)}>
                        <BackArrow className={styles.arrow}/>
                    </div>
                    <div className={cx(styles.indicator, indicatorState[1] ? styles.activeIndicator : '')} onClick={() => activeIndicate(1)}>
                        <ForwardArrow className={styles.arrow}/>
                    </div>
                </div>
                <div className={styles.galleryWrapper}>
                    <div style={{transform: `translate3d(${x}px, 0, 0)`}} className={styles.gallery}>
                        <img src={Image1} alt="img-01"/>
                        <img src={Image2} alt="img-02"/>
                        <img src={Image3} alt="img-03"/>
                        <img src={Image4} alt="img-04"/>
                        <img src={Room5} alt="room-04"/>
                        <img src={Room6} alt="room-06"/>
                        <img src={Room7} alt="room-07"/>
                        <img src={Room8} alt="room-08"/>
                        <img src={Room9} alt="room-09"/>
                        <img src={Room10} alt="room-10"/>
                    </div>
                </div>
            </div>

            <div className={cx(styles.section, styles.benefits)}>
                <h2>Build your needs with Archmove</h2>
                <div className={styles.wrapper}>
                    <img src={Image5} alt="img-05"/>
                    <div className={styles.information}>
                        <div className={styles.package}>
                            <div className={styles.packageIcon}><Icon1 className={styles.packageIcon}/></div>
                            <div className={styles.packageTitle}>100% guaranteed project completion</div>
                            <div className={styles.packageDescription}>Build safe, comfortable and transparent with a project management application with a joint account.</div>
                        </div>
                        <div className={styles.package}>
                            <div className={styles.packageIcon}><Icon2 className={styles.packageIcon}/></div>
                            <div className={styles.packageTitle}>No additional fees</div>
                            <div className={styles.packageDescription}>There are no hidden costs. The value of the offer you get is the value you paid.</div>
                        </div>
                        <div className={styles.package}>
                            <div className={styles.packageIcon}><Icon3 className={styles.packageIcon}/></div>
                            <div className={styles.packageTitle}>Get escort from the Team</div>
                            <div className={styles.packageDescription}>Monitor reports from the Arsitag team who check directly in the field.</div>
                        </div>
                        <button className={styles.redButton} style={{ alignSelf: 'center', marginTop: 10 }}>FREE CONSULTATION</button>
                    </div>
                </div>
            </div>

            <div className={cx(styles.section, styles.feedback)}>
                <h2>Sound Too Good To Be True?</h2>
                <div className={styles.quoteWrapper}>
                    {
                        quotes.map((quote, i) => 
                            <Quote 
                                hide={i == quoteNum} 
                                quote={quote.quote} 
                                author={quote.author} 
                                title={quote.title}/>)
                    }

                    <div className={cx(styles.quoteNavigator, styles.navigator)}>
                        <div 
                            className={cx(styles.indicator, indicatorQuoteState[0] ? styles.activeIndicator : '')} 
                            onClick={() => activeQuoteIndicate(0)}>
                            <BackArrow className={styles.arrow}/>
                        </div>
                        <div 
                            className={cx(styles.indicator, indicatorQuoteState[1] ? styles.activeIndicator : '')} 
                            onClick={() => activeQuoteIndicate(1)}>
                            <ForwardArrow className={styles.arrow}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx(styles.section, styles.lastCall)}>
                <House />
                <div className={styles.wrapper}>
                    <h2>Realize your dream project with <span className="redText">Archmove</span></h2>
                    <button className={styles.redButton} style={{ alignSelf: 'flex-start'}}>FREE CONSULTATION</button>
                </div>
            </div>

            <div className={cx(styles.section, styles.partner)}>
                <h2>Our Partners</h2>
                <div className={styles.logoHolder}>
                    <img src={Logo1} alt="logo-1"/>
                    <img src={Logo2} alt="logo-2"/>
                    <img src={Logo3} alt="logo-3"/>
                    <img src={Logo4} alt="logo-4"/>
                    <img src={Logo5} alt="logo-5"/>
                </div>
            </div>
        </div>
    );
};

export default Home;