import React, {Component} from 'react';




 class OneCourseDescription extends Component{
     render(){
     return(
         <section id="about-course">
             <div className="container">
                 <div className="about-course-title mb-5">Что даст вам этот курс</div>
                 <div className="container">
                     <div className="row">
                         <div className="col-md-9">
                             <div className="mb-5">
                                 <ul>
                                     <li>
                                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                                     </li>

                                     <li>
                                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                             consectetur adipisicing elit, sed do eiusmod </p>
                                     </li>

                                     <li>
                                         <p>Lorem ipsum dolor sit amet, consectetur dolor sit amet, consectetur
                                             adipisicing elit, sed do eiusmod</p>
                                     </li>
                                 </ul>
                             </div>
                             <p><b>Lorem ipsum</b> dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                 consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                 proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                             <br />
                                 <p><b>Lorem ipsum dolor sit amet, consectetur</b> adipisicing elit, sed do eiusmod
                                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                     quis nostrud exercitation ullamco laborist in voluptate velit esse
                                     cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                     proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                 <br />
                         </div>
                         <div className="col-md-3">
                             <div className="card card-one-course-about shadow">
                                 <div className="card-body">
                                     <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                         do eiusmod
                                         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                         consequat. Duis aute irure </p>
                                     <div className="course-comment-photo">
                                         <img className="rounded-circle" width="60" height="60" src="../img/tch1.jpg"
                                              alt="Card image cap" />
                                     </div>
                                     <div className="course-comment-name">tempor <br />incididunt</div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="text-center container">
                 <hr className="heading-r" />
             </div>

         </section>

     )}
 }

export default OneCourseDescription;