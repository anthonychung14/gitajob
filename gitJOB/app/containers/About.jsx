import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { postFeedback } from 'actions/feedback'

import styles from 'css/components/about';
import LoginOrRegister from 'containers/LoginOrRegister'
import LandingForm from 'components/LandingForm'
import FeedbackForm from 'components/FeedbackForm'

// import { Page, Hero, Section, SignupInline, ImageList, ImageListItem, Team, TeamMember, HorizontalSplit } from "neal-react";
import GoTools from 'react-icons/lib/go/tools'
import GoFileBinary from 'react-icons/lib/go/file-binary'
import MdMotorcycle from 'react-icons/lib/md/motorcycle'
import GoOrganization from 'react-icons/lib/go/organization'
import GoTelescope from 'react-icons/lib/go/telescope'
import GoDatabase from 'react-icons/lib/go/database'


const cx = classNames.bind(styles);

class About extends Component {
  submitFeedback(form){                    
    this.props.postFeedback(form)
  }

  render() {
    return <div><h2>hi</h2></div>

  }
  // render() {
  //   return(    
  //     <Page>
  //       <div          
  //           className={cx("hero-img2")}> 
  //           <h1 className={cx("display-4")}>
  //             The personal website application resume that also tracks jobs in your pipeline. Thing.
  //           </h1>                      
  //       </div>

  //       <Hero          
  //         className={cx("hero-img")}>         
  //         <div className={cx("hero-img-items")}>         
  //         <div>
  //           <h1 className={cx("hero-img-heading")}>Switches, like engineers</h1>
  //         <div className={cx("icon-saying")}>
  //           <div className={cx("icon-column")}>
  //             <GoTools className={cx('cab')} />              
  //             <h4 className={cx("lead")}>Use and create tools</h4>              
  //           </div>

  //           <div className={cx("icon-column")}>
  //             <GoFileBinary className={cx('cab')} />
  //             <h4 className={cx("lead")}>All made up of smaller switches!</h4>              
  //           </div>

  //           <div className={cx("icon-column")}>
  //             <MdMotorcycle className={cx('cab')} /> 
  //             <h4 className={cx("lead")}>So since this app focuses on managing the job search...?</h4>                            
  //           </div>                    
  //         </div>
  //         </div>                             
  //         <h4 className={cx('hero-img-bottom')}>
  //           And. SWCH.io was an available domain. Sounds sleek. Could be cool. Idk. Stay with me.
  //         </h4>        
  //         </div>           
  //       </Hero>

  //         <div          
  //           className={cx("hero-img2")}> 
  //           <h1 className={cx("display-4")}>
  //             SWCH tracks your job status with multiple companies. 
  //           </h1><br/>
  //           <h1 className={cx("display-4")}>
  //           Like Lever, but from the applicant's perspective!
  //           </h1>                 
  //         </div>
          
  //         <div className={cx("hero-img3")}>
  //           <h4 className={cx("app-explain")}>This a proof of concept I made for the job search</h4><br/>
  //           <h4 className={cx("app-explain")}>Look for three things!</h4>
  //         </div>    
          
  //         <div className={cx("feature-column")}>              
  //             <div className={cx("feature-single")}> 
  //               <GoDatabase />
  //               { "Fresh, home-harvested data! Wrote Python/Scrapy/Redis to distribute crawlers throughout LinkedIn and AngelList" }
  //             </div>          
              
  //             <div className={cx("feature-single")}> 
  //               <GoTelescope />
  //               {"Add and track and interact with companies in your pipeline"}
  //             </div>              
              
  //             <div className={cx("feature-single")}> 
  //               <GoOrganization className={cx('cab')}/>
  //               {"Combine and grow your network in the job hunt"}
  //             </div>                
  //         </div>            

  //         <div className={cx("hero-img-action")}>
  //           <Section>
  //           <LoginOrRegister />
  //           </Section>
  //         </div>  

  //         <div className={cx("hero-img3")}>
  //           <h4>Employers!</h4><br />

  //           <h4>Or....person. I'll settle for person. Like what you see? Do continue</h4>                        
  //         </div>

  //         <div className={cx('gif-accent')}>
  //         <iframe src="//giphy.com/embed/6sef6Q51v5IuA" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>
  //         </div>                    
        
  //         <div className={cx("hero-img2")}>
  //           <h4 className={cx("display-4")}>My name is Tony</h4><br/><br/>
  //           <h4 className={cx("display-4")}>I am a fullstack developer who delivers modular, extensible, maintainable code</h4><br/><br/>
  //           <h4 className={cx("display-4")}>Lately been diving more into Kafka, Redux selectors, and document clustering with NLP</h4><br/><br/>            
  //           <h4 className={cx("display-4")}>If you're here, we could have some overlap in interest, value, mission</h4> <br/>
  //           <h4 className={cx("display-4")}>I generally find myself reading articles on fitness, nutrition, and machine-learning, but if I can be convinced that the mission helps out...the people! I'd be excited to hear more</h4>          
  //         </div>

  //         <div className={cx('gif-accent')}>
  //           <iframe src="//giphy.com/embed/s4BecXkFb42t2" width="480" height="277" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>          
  //           </div>    

  //         <div className={cx("hero-img3")}>
  //           <h4>I suppose the case can also be made for mustaches on cats.</h4><br/><br/>
  //           <h4>I also want to talk to you if you deal in that</h4>                        
  //         </div>

  //         <div className={cx("hero-img-action")}>
  //           <Section>
  //             <h4>Sign up if you want me to contact you about a job!</h4> 
  //             <LandingForm onSubmit={this.submitFeedback.bind(this)}/>
  //           </Section>
  //         </div>   

  //         <div className={cx("hero-img2")}>
  //           <h4><strong>Technical Skills</strong></h4><br/>
  //           <h4>The following libraries were essential to production. I build fast and follow best practices</h4>                        
  //         </div>   

  //         <Team className={cx("display-tech")}>              
  //             <TeamMember className={cx("display-tech")} name="API"  imageUrl="http://3.bp.blogspot.com/-4IzIZH_Y1xg/VVFl3KLHpnI/AAAAAAAAJhE/oA7Tt8YRzO0/s1600/node_Express.png"> { "So we can run JS outside the browser! And, build a modular, declarative API" }<br/><br/>{"As a fullstack developer, I'm flexible and can contribute to all parts of the stack. Since I care a lot about product, I can implement an end-to-end feature"} </TeamMember>          
  //             <TeamMember className={cx("display-tech")} name="Database" imageUrl="http://jobs.mongodb.org/files/logos/889002/889002.png"> { "While I've used SQL (Postgres), I'm interested in the scalability strengths of distributed noSQL" }<br/><br/>{ "I'm looking for a team that knows (thinks about) (has implemented) distributed databases, perhaps even created some solutions in-house?" }</TeamMember>              
  //             <TeamMember className={cx("display-tech")} name="React/Redux" imageUrl="https://cdn.auth0.com/blog/react-js/react.png"> { "Isomorphic (or server-rendered). Renders client-side Javascript on the server. Webcrawlers then pick it up, which makes it advantangeous for SEO"}<br/><br/>{"I prefer running React with Redux, but I'm interested in other Flux implementations as well (Relay/GraphQL)"}</TeamMember>                                        
  //         </Team>

  //         <div className={cx("hero-img2")}>
  //           <h4><strong>I've made some applications with these technologies</strong></h4><br/>                       
  //           <h4>I can answer most, if not all, normal-level questions about them given some reference code</h4>                        
  //         </div>
  //         <ImageList centered>
  //           <ImageListItem src="http://www.tivix.com/uploads/blog_pics/postgresql_1.png"/>
  //           <ImageListItem src="https://pushshift.io/wp-content/uploads/2015/05/redis_logo-41cc2befccdae12420292ee1feda5ed9.png"/>          
  //           <ImageListItem src="http://blog.djangostars.com/content/images/2015/12/maxresdefault.jpg"/>          
  //           <ImageListItem src="https://ucarecdn.com/e3e34059-deb5-4a5e-baf8-ea608037ae62/"/>                    
  //           <ImageListItem src="https://i.ytimg.com/vi/BR787aefMfY/maxresdefault.jpg"/>                    
  //           <ImageListItem src="https://avatars0.githubusercontent.com/webpack?&s=256"/>                    
  //           <ImageListItem src="http://mherman.org/images/mocha-chaijs.png"/>                    
  //           <ImageListItem src="https://risingstack-blog.s3.amazonaws.com/2016/Jan/babel_logo_in_react_js_best_practices_2016-1453212218011.png"/>                    
  //         </ImageList>

  //       <div className={cx("hero-img-action")}>
  //         <Section>
  //             <h4>Not convinced? Feel free to check out my <a target="_blank" href="https://www.linkedin.com/in/anthony-chung-b8423279">LinkedIn</a> and <a target="_blank" href="https://www.github.com/anthonychung14">Github</a> while you ponder</h4>                             
  //         </Section>
  //       </div>

  //       <div className={cx("hero-img2")}>
  //         <h1>Team?</h1>          
  //       </div>

  //       <div className={cx('gif-accent')}>
  //           <iframe src="//giphy.com/embed/vcHTRiZOglHNu" width="480" height="266" frameBorder="0" class="giphy-embed"></iframe><p></p>
  //       </div>

  //       <div className={cx("hero-img2")}>
  //         <h1>I champion ownership, speed, and community</h1>
  //         <h2>I thrive in teams whose members (actually) believe in the product</h2>
  //         <h2>And, hopefully the workplace is cool enough to send each other gifs</h2>
  //       </div>

  //       <div className={cx('gif-accent')}>            
  //           <iframe src="//giphy.com/embed/RrOLXli7uJZa8" width="480" height="276" frameBorder="0" class="giphy-embed"></iframe><p></p>
  //       </div>

  //       <div className={cx("hero-img3")}>
  //           <h4>Like that piece of awkward hilarity</h4>
  //         </div>
        
            
  //       <div className={cx("hero-img-action")}>
  //           <Section>
  //             <FeedbackForm onSubmit={this.submitFeedback.bind(this)}/>           
  //           </Section>
  //       </div>

  //       <div className={cx("hero-img2")}>
  //         <h1>Still down here eh? Login here! It's over! Go home!</h1>          
  //       </div>

  //       <div className={cx("hero-img-action")}>
  //         <Section>
  //         <LoginOrRegister />
  //         </Section>
  //       </div>


  //       <div className={cx('gif-accent')}>            
  //           <iframe src="//giphy.com/embed/DSO9yOE35Lj9e" width="480" height="264" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>
  //       </div>

  //       <div className={cx("hero-img2")}>
  //         <h1>anthonychung14@gmail.com / 925 818 7564</h1>          
  //       </div>

  //       <div className={cx("hero-img-action")}>
  //           <Section>
  //             <h4>Or. In case you needed this again. (winky emoji)</h4> 
  //             <LandingForm onSubmit={this.submitFeedback.bind(this)}/>
  //           </Section>
  //         </div>   

  //       <div className={cx('gif-accent')}>
  //           <iframe src="//giphy.com/embed/W0UedkzncUow0" width="480" height="265" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>
  //       </div>    

  //     </Page>      
  //   );    
  // }
};



About.propTypes = {
  
};

function mapStateToProps(state) {
  return {
    application: state.applications
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, 
  { postFeedback })(About);
