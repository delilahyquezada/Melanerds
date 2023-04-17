import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Carousel_Slide1 } from './Carousel_Slide1/Carousel_Slide1';
import { Component1_Property1Frame33 } from './Component1_Property1Frame33/Component1_Property1Frame33';
import { EmailIcon } from './EmailIcon';
import classes from './HomePage.module.css';
import { IcOutlineArrowRightIcon } from './IcOutlineArrowRightIcon';
import { IcOutlineArrowRightIcon2 } from './IcOutlineArrowRightIcon2';
import { LineRoundedChevronDown } from './LineRoundedChevronDown/LineRoundedChevronDown';
import { LineRoundedEmail } from './LineRoundedEmail/LineRoundedEmail';
import { LineRoundedMark } from './LineRoundedMark/LineRoundedMark';
import { LineRoundedPassword } from './LineRoundedPassword/LineRoundedPassword';
import { LineRoundedPhone } from './LineRoundedPhone/LineRoundedPhone';
import { Link_IconDefaultIconLeftTrueIc } from './Link_IconDefaultIconLeftTrueIc/Link_IconDefaultIconLeftTrueIc';
import { MarkIcon } from './MarkIcon';
import { PhoneIcon } from './PhoneIcon';
import { SocialMediaIconSquareFacebookI } from './SocialMediaIconSquareFacebookI';
import { SocialMediaIconSquareInstagram } from './SocialMediaIconSquareInstagram';
import { SocialMediaIconSquareLinkedinI } from './SocialMediaIconSquareLinkedinI';
import { SocialMediaIconSquareTwitterIc } from './SocialMediaIconSquareTwitterIc';
import { SocialMediaIconSquareYoutubeIc } from './SocialMediaIconSquareYoutubeIc';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  hide?: {
    lineRoundedChevronDown?: boolean;
    lineRoundedChevronDown2?: boolean;
  };
}
/* @figmaId 52:183520 */
export const HomePage: FC<Props> = memo(function HomePage(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle5201}></div>
      <div className={classes.navBar}>
        <div className={classes.about}>About</div>
        <div className={classes.community}>Community</div>
        <div className={classes.gallery}>Gallery</div>
        <div className={classes.vector}>
          <VectorIcon className={classes.icon6} />
        </div>
        <div className={classes.rectangle132}></div>
        <div className={classes.rectangle22}></div>
        <div className={classes.rectangle23}></div>
        <div className={classes.rectangle5208}></div>
        <div className={classes.signIn}>Sign In</div>
      </div>
      <div className={classes.geeksOfTheWeek}>Geeks of the Week</div>
      <Component1_Property1Frame33
        className={classes.component1}
        classes={{
          rectangle13: classes.rectangle13,
          frame24: classes.frame24,
          rectangle14: classes.rectangle14,
          frame25: classes.frame25,
          rectangle15: classes.rectangle15,
          frame26: classes.frame26,
          rectangle16: classes.rectangle16,
          frame27: classes.frame27,
          rectangle17: classes.rectangle17,
          frame28: classes.frame28,
          rectangle18: classes.rectangle18,
          frame29: classes.frame29,
          rectangle19: classes.rectangle19,
          frame30: classes.frame30,
          rectangle20: classes.rectangle20,
          frame31: classes.frame31,
          rectangle21: classes.rectangle21,
          frame32: classes.frame32,
          icOutlineArrowRight: classes.icOutlineArrowRight,
          icOutlineArrowRight2: classes.icOutlineArrowRight2,
        }}
        swap={{
          icOutlineArrowRight: (
            <div className={classes.icOutlineArrowRight}>
              <IcOutlineArrowRightIcon className={classes.icon} />
            </div>
          ),
          icOutlineArrowRight2: (
            <div className={classes.icOutlineArrowRight2}>
              <IcOutlineArrowRightIcon2 className={classes.icon2} />
            </div>
          ),
        }}
        text={{
          films: <div className={classes.films}>Films</div>,
          gaming: <div className={classes.gaming}>Gaming</div>,
          cosplay: <div className={classes.cosplay}>Cosplay</div>,
          gaming2: <div className={classes.gaming2}>Gaming</div>,
          cosplay2: <div className={classes.cosplay2}>Cosplay</div>,
          anime: <div className={classes.anime}>Anime</div>,
          asianDramas: <div className={classes.asianDramas}>Asian Dramas</div>,
          starWars: <div className={classes.starWars}>Star Wars</div>,
          tableTop: <div className={classes.tableTop}>Table Top</div>,
          tech: <div className={classes.tech}>Tech</div>,
          animation: <div className={classes.animation}>Animation</div>,
        }}
      />
      <Carousel_Slide1
        className={classes.carousel}
        classes={{
          slideImage: classes.unsplashS3EjzLRA4Yw,
          slideImage2: classes.unsplashXfngap_DToE,
          slideImage3: classes.unsplashYFFGkE3y4F8,
          slideImage4: classes.unsplashG30P1zcOzXo,
          slideImage5: classes.unsplashCqbLg3lZEpk,
          slideList: classes.slideList,
        }}
      />
      <div className={classes.rectangle25}></div>
      <div className={classes.rectangle26}></div>
      <div className={classes.newsAnnouncements}>News &amp; Announcements</div>
      <div className={classes.footerV1}>
        <div className={classes.divider}></div>
        <div className={classes._24px}>
          <div className={classes.copyright}>Melanerds</div>
          <div className={classes.socialMediaContainer}>
            <div className={classes.socialMediaIconSquareFacebook}>
              <SocialMediaIconSquareFacebookI className={classes.icon7} />
            </div>
            <div className={classes.socialMediaIconSquareTwitter}>
              <SocialMediaIconSquareTwitterIc className={classes.icon8} />
            </div>
            <div className={classes.socialMediaIconSquareInstagram}>
              <SocialMediaIconSquareInstagram className={classes.icon9} />
            </div>
            <div className={classes.socialMediaIconSquareLinkedIn}>
              <SocialMediaIconSquareLinkedinI className={classes.icon10} />
            </div>
            <div className={classes.socialMediaIconSquareYouTube}>
              <SocialMediaIconSquareYoutubeIc className={classes.icon11} />
            </div>
          </div>
        </div>
        <div className={classes.line135}></div>
        <div className={classes.footerColumn}>
          <div className={classes.footerTitle}>Notices</div>
          <div className={classes.footerLinks}>
            <div className={classes.link3}>
              <div className={classes.masterLink3}></div>
            </div>
            <div className={classes.link4}>
              <div className={classes.masterLink4}></div>
            </div>
            <div className={classes.link5}>
              <div className={classes.masterLink5}></div>
            </div>
            <div className={classes.link6}>
              <div className={classes.masterLink6}></div>
            </div>
          </div>
        </div>
        <div className={classes.footerTitle2}>Privacy Policy</div>
        <div className={classes.footerColumn2}>
          <div className={classes.footerTitle3}>Accessibility</div>
          <div className={classes.footerLinks2}>
            <div className={classes.link7}>
              <div className={classes.masterLink7}>
                <div className={classes.noFearAct}>No Fear Act</div>
              </div>
            </div>
            <div className={classes.fOIA}>FOIA</div>
            <div className={classes.link8}>
              <div className={classes.masterLink8}></div>
            </div>
            <div className={classes.link9}>
              <div className={classes.masterLink9}></div>
            </div>
            <div className={classes.link10}>
              <div className={classes.masterLink10}></div>
            </div>
            <div className={classes.link11}>
              <div className={classes.masterLink11}></div>
            </div>
          </div>
        </div>
        <div className={classes.footerColumn3}>
          <div className={classes.footerLinks3}>
            <div className={classes.link12}>
              <div className={classes.masterLink12}></div>
            </div>
            <div className={classes.link13}>
              <div className={classes.masterLink13}>
                <div className={classes.disclaimer}>Disclaimer</div>
              </div>
            </div>
            <div className={classes.link14}>
              <div className={classes.masterLink14}></div>
            </div>
          </div>
        </div>
        <Link_IconDefaultIconLeftTrueIc
          className={classes.link}
          classes={{ masterLink: classes.masterLink }}
          swap={{
            lineRoundedPassword: (
              <LineRoundedEmail
                className={classes.lineRoundedEmail}
                classes={{ email: classes.email }}
                swap={{
                  email: (
                    <div className={classes.email}>
                      <EmailIcon className={classes.icon3} />
                    </div>
                  ),
                }}
              />
            ),
          }}
          text={{
            linkItem: <div className={classes.linkItem}>Melanerds@gmail.com</div>,
          }}
        />
        <div className={classes.footerColumn4}>
          <div className={classes.footerTitle4}>Contact Melanerds</div>
        </div>
        <Link_IconDefaultIconLeftTrueIc
          className={classes.link2}
          classes={{ masterLink: classes.masterLink2 }}
          swap={{
            lineRoundedPassword: (
              <LineRoundedPhone
                className={classes.lineRoundedPhone}
                classes={{ phone: classes.phone }}
                swap={{
                  phone: (
                    <div className={classes.phone}>
                      <PhoneIcon className={classes.icon4} />
                    </div>
                  ),
                }}
              />
            ),
          }}
          text={{
            linkItem: <div className={classes.linkItem2}>555-555-5555</div>,
          }}
        />
        <div className={classes._8px}>
          <div className={classes.spacerIconWrapper}>
            <LineRoundedMark
              className={classes.lineRoundedMark}
              classes={{ mark: classes.mark }}
              swap={{
                mark: (
                  <div className={classes.mark}>
                    <MarkIcon className={classes.icon5} />
                  </div>
                ),
              }}
            />
            <div className={classes.spacer}></div>
          </div>
          <div className={classes.footerDescription}>Texas</div>
        </div>
        <div className={classes.footerLeft}>Copyright © 2022 BRIX Templates</div>
        <div className={classes.footerRight}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>All Rights Reserved | </span>
            <span className={classes.label2}>Terms and Conditions</span>
            <span className={classes.label3}> | </span>
            <span className={classes.label4}>Privacy Policy</span>
          </p>
        </div>
      </div>
      <div className={classes.image1}></div>
      <div className={classes.film}>Film</div>
      <div className={classes.image3}></div>
      <div className={classes.gaming3}>Gaming</div>
      <div className={classes._20CreativeLatinaCosplayersWhoW}>
        20 Creative Latina Cosplayers Who Will Inspire Your Next Comic Convention Look
      </div>
      <div className={classes.theGloryMeetSongHyeKyoAndTheCa}>
        The Glory&#39;: Meet Song Hye-kyo and the Cast of Netflix&#39;s Riveting Revenge K-Drama
      </div>
      <div className={classes.rectangle27}></div>
      <div className={classes.rectangle28}></div>
      <div className={classes.whyTheCEOOfBlackGirlsCodeTurne}>
        Why the CEO of Black Girls Code turned down a $125,000 Uber grant
      </div>
      <div className={classes.dreamCon2023FeaturedGuestsSome}>dream con 2023 featured guests somebros in austin tx</div>
      <div className={classes.mELA11}></div>
      <div className={classes.rectangle514}></div>
      <div className={classes.rectangle5202}></div>
      <div className={classes.rectangle5203}></div>
    </div>
  );
});
