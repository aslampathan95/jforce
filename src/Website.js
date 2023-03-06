import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  } from '@fortawesome/free-solid-svg-icons'
// import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPenToSquare,faLightbulb,faBriefcase,faEnvelope,faArrowRightFromBracket,faUser,faGripHorizontal,faCalendarDays,faBookmark,faBookBookmak,faPlay,faClipboard,faCircleXmark,faTrophy,faLink,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faYoutube,faInstagram,faFacebook,faTwitter } from '@fortawesome/free-brands-svg-icons'
{/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
function Website() {
  return (
    <>
    
        <nav className="navbar">
            <div className="navbar-container container">
                <input type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu-items">
                    <li><i className="fa-solid fa-lightbulb"></i></li>
                    <li> <FontAwesomeIcon icon="fa-thin fa-pipe" /> 
                      <div className='text-center'><FontAwesomeIcon icon={faLightbulb} /> </div>
                      <div>SKILSSTS</div>
                     </li>
                    <li> <div className='text-center'> <FontAwesomeIcon icon={faBriefcase} /></div> 
                          <div> CAREER SERVICES </div>
                    </li>
                    <li> <div className='text-center'> <FontAwesomeIcon icon={faEnvelope} />  </div> 
                      <div> MY COMMUNICATION </div>
                    </li>
                    <li> <div className='text-center'> <FontAwesomeIcon icon={faUser} /> </div>
                      <div> MY PROFILE</div>
                     </li>
                    <li>
                      <div className='text-center'> <FontAwesomeIcon icon={faArrowRightFromBracket} /> </div>
                      <div> LOGOUT </div>
                     </li>
                </ul>
                
                <div className="logo"> <img src="https://d3q78eohsdsot3.cloudfront.net/assets/images/logo.png" alt=" not found" /> </div>
            </div>
        </nav><br/>  <br/> <br/><br/>
        <div className='row'> 
          <div className='col-sm-1 col-xs-1 col-md-1 side-bar'> 
          <div className='text-center icons'> <FontAwesomeIcon icon={faArrowRight} />
              
            </div>
            <div className='text-center'> <FontAwesomeIcon icon={faGripHorizontal} /> 
              <div> Dashbord</div>
            </div>
            <div className='text-center'> <FontAwesomeIcon icon={faCalendarDays} />
              <div> ACADEMIC CALENDER </div>
            </div>
            <div className='text-center'> <FontAwesomeIcon icon={faBookmark} />
              <div> MY COURSES </div>
            </div>
            
            
            <div className='text-center'> <FontAwesomeIcon icon={faPlay} />
              <div> SESSION VIDEOS </div>
            </div>
            <div className='text-center'> <FontAwesomeIcon icon={faBookmark} />
              <div> BOOKMARK </div>
            </div>
            <div className='text-center'> <FontAwesomeIcon icon={faClipboard} />
              <div> EXAMS </div>
            </div>
            <div className='text-center'> <FontAwesomeIcon icon={faCircleXmark} />
              <div> STUDENT SUPPORT </div>
            </div>
            <div className='text-center'> <FontAwesomeIcon icon={faTrophy} />
              <div>MY BADGES </div>
            </div><div className='text-center'> <FontAwesomeIcon icon={faLink} />
              <div> Quick links </div>
            </div>
            
           </div>
          <div className='col-xs-11 col-md-11 col-sm-11 side-bar-two'>     

        <div className='navbar-two'>

        
        <div>
            <div className="studentD mt-0 "> &nbsp; STUDENT ZONE >> DASHBARD </div>
        </div>
        <div className="nav-bottom">
        
        <div className="container">
  <div className="row">
    <div className="col-2">
    <img src="https://studentdocumentsngasce.s3.ap-south-1.amazonaws.com/likesh.jpg" style={{ width:"75px" ,borderRadius:"50%"}}  alt="..." />
    </div>
    <div className="col-10">
    <div style={{fontSize:"35px", marginBottom:"0px"}}> SOURABH PAWAR </div>
      
      <ul className="navS">
  <li>swarup.rajpurohit.EXT@nmims.edu |</li>
  <li>9137123692 |</li>
  <li> MBA (BM)  |</li>  
  <li> Validity End: 30-Jun-2025</li>
 

</ul>
    </div>
    
  </div>
</div>
        </div>
        </div>
<div className='all-cards'>
<div className='card-one m-2'>


{/* <h5> ACADEMIC CALENDER </h5> */}
<h5 class="card-title"> ACADEMIC CALENDER</h5>
<div class="row">
  <div class="col-sm-3 col-xs-12">
    <div class="card">
      <div class="card-body">
      <p class="card-text"> 04-MAR-2023 02:00:00 PM </p>

        <h5 class="card-title"> operations Management </h5>
        <p class="card-text">Session 4.</p>
        <p class="text-muted"> Weekend Batch.</p>
        <p class="card-text"> prof.Jigar Shah</p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  </div>
  <div class="col-sm-3 col-xs-12 ">
    <div class="card">
      <div class="card-body">
      <p class="card-text"> 04-MAR-2023 02:00:00 PM </p>

        <h5 class="card-title"> operations Management </h5>
        <p class="card-text">Session 4.</p>
        <p class="text-muted"> Weekend Batch.</p>
        <p class="card-text"> prof.Jigar Shah</p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  </div>
  <div class="col-sm-3 col-xs-12 ">
    <div class="card">
      <div class="card-body">
      <p class="card-text"> 04-MAR-2023 02:00:00 PM </p>

        <h5 class="card-title"> operations Management </h5>
        <p class="card-text">Session 4.</p>
        <p class="text-muted"> Weekend Batch.</p>
        <p class="card-text"> prof.Jigar Shah</p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  </div>
  <div class="col-sm-3 col-xs-12  ">
    <div class="card">
      <div class="card-body">
      <p class="card-text"> 04-MAR-2023 02:00:00 PM </p>

        <h5 class="card-title"> operations Management </h5>
        <p class="card-text">Session 4.</p>
        <p class="text-muted"> Weekend Batch.</p>
        <p class="card-text"> prof.Jigar Shah</p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  </div>
</div>
</div>
<div className='card-two'>
<div className='row'>
<div className='col-sm-12'> <h5 class="card-title"> RECORDING SESSION </h5>  </div>
<div className='col-sm-3'> 

    <div class="card">
    <img src="https://i.vimeocdn.com/video/1605384126-e95f05111d7f646dc7b9f84ced8f4ab064d21b6dec949d7daf7a1b2a0893ae14-d_1280x720?r=pad" class="card-img-top" alt="..." />
    <div class="card-body">
    <h5 class="card-title"> Essential of HRM </h5>
        <p class="card-text">prof. Hiteshwari Jdeja </p>
        <p class="card-text"> Essential of HRM Session 3</p>
        <p class="card-muted m"> Tuesday, 07-feb-2023 </p>
        <p class="text-danger"> Essential of HRM Session 3</p>
    </div>
    </div>
    </div>
    <div className='col-sm-3'> 

    <div class="card">
    <img src="https://i.vimeocdn.com/video/1599242009-e5dece1006cb03736731c1e281addf5f170c213de692160014221c0a4462b5d1-d_1280x720?r=pad" class="card-img-top" alt="..." />
    <div class="card-body">
    <h5 class="card-title"> Essential of HRM </h5>
        <p class="card-text">prof. Hiteshwari Jdeja </p>
        <p class="card-text"> Essential of HRM Session 3</p>
        <p class="card-muted m"> Tuesday, 07-feb-2023 </p>
        <p class="text-danger"> Essential of HRM Session 3</p>
    </div>
    </div>
    </div>
    <div className='col-sm-3'> 

    <div class="card">
    <img src="https://i.vimeocdn.com/video/1597228035-e1e9a6075c7f4fe345b5f3f56e27e420c365c30f9ac52618bd73a3370ba953d2-d_1280x720?r=pad" class="card-img-top" alt="..." />
    <div class="card-body">
    <h5 class="card-title"> Essential of HRM </h5>
        <p class="card-text">prof. Hiteshwari Jdeja </p>
        <p class="card-text"> Essential of HRM Session 3</p>
        <p class="card-muted m"> Tuesday, 07-feb-2023 </p>
        <p class="text-danger"> Essential of HRM Session 3</p>
    </div>
    </div>
    </div>
    <div className='col-sm-3'> 

    <div class="card">
    <img src="https://i.vimeocdn.com/video/1595549932-d2822fee39123b8822aad831b0dc2df8d1b465b5a33959b2cd368e8f9928dc2f-d_1280x720?r=pad" class="card-img-top" alt="..." />
    <div class="card-body">
    <h5 class="card-title"> Essential of HRM </h5>
        <p class="card-text">prof. Hiteshwari Jdeja </p>
        <p class="card-text"> Essential of HRM Session 3</p>
        <p class="card-muted m"> Tuesday, 07-feb-2023 </p>
        <p class="text-danger"> Essential of HRM Session 3</p>
    </div>
    </div>
    </div>

    </div>
</div>
<div className='acordion'>

<div className='row'>
    <div className='col-sm-6'>
                <div className='row'>
                <div className='col-sm-12 col-xs-12 m-2'> <h5 class="card-title"> ONGOING COURSES: </h5>   </div>

                </div>


<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
    </div>
    <div className='col-sm-6'>
    <div></div>
    <div className='col-xm-12 col-sm-6 m-2'> <h5 class="card-title"> ASSSIGNMENT  </h5>   </div>
    
    <div className='col-sm-12'> <div class="p-3 mb-2 bg-body text-dark text-center"> View Assignments</div>  </div>
    </div>

</div>

</div>
<div className='tables'>
    <div className='row' > 
    
    <div className='col-sm-6 '> 
    
    <div className='col-xm-12 col-sm-6 m-2'> <h5 class="card-title"> Result  </h5>   </div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">SR ID</th>
      <th scope="col">SUBJECT</th>
      <th scope="col">TEE</th>
      <th scope="col">ASSSIGNMENT</th>
      <th scope="col"> TOTAL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Business Economics</td>
      <td>57</td>
      <td>23</td>
      <td>80</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Financial Accounting & Analysis</td>
      <td>50</td>
      <td> 19</td>
      <td> 69</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td> Information Systems for Managers</td>
      <td> 51</td>
      <td> 22</td>
      <td> 73 </td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td> Management Theory and Practice</td>
      <td> 59</td>
      <td> 18</td>
      <td> 77 </td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td> Marketing Management</td>
      <td> 60</td>
      <td> 23</td>
      <td> 83 </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td> Organisational Behaviour</td>
      <td> 57</td>
      <td> 13</td>
      <td> 70 </td>
    </tr>
  </tbody>
</table>
    </div>
    <div className='col-sm-6'>
    <div className='col-xm-12 col-sm-6 m-2'> <h5 class="card-title"> Rank  </h5>   </div>
        <div className='outer text-center'>
                
            <div className='inner'>
                <div className='bg-info text-center inn'>
                <div> Sem : 1 Cycle : Jun 2022 </div>
                
                <div> 62/173 Rank | Score : 452 / 600 </div>


                </div>
            </div>
            <span  > <a className='text-center' > Click here see rank </a> </span>
        </div>
    </div>

    </div>
</div>
<div className='footer'>
  <div className='row text-center'>
      <div className='col-sm-3 col-xs-12'>
            <div>Quick Links: </div>
            <div> my Document </div>
            <div> Demo Exam </div>
            <div> Register for Exam </div>
            <div> Re-Registration </div>
      </div>
      <div className='col-sm-3 col-xs-12'>
      <div>Reach Us: </div>
      <div>1800-1025-136 (Toll Free) </div>
      <div>ngasce@nmims.edu </div>
      </div>
      <div className='col-sm-3 col-xs-12'>
            <div>Visit Us: </div>
            <div> V.L.Mehta Road, Vile Parle (W) </div>
            <div>Mumbai, Maharashtra - 400056 </div>
      </div>
      <div className='col-sm-3 col-xs-12'>
                <div> Connect with us:  </div>
                
                 <FontAwesomeIcon icon={faInstagram} /> &nbsp;
                 <FontAwesomeIcon icon={faYoutube} />&nbsp;
                 <FontAwesomeIcon icon={faFacebook} /> &nbsp;
                 <FontAwesomeIcon icon={faTwitter} />&nbsp;
                 <div > <a > <img src="https://d3q78eohsdsot3.cloudfront.net/assets/images/playstore.png" style={{width:"50%"}} /> </a> </div>
                 <div > <a > <img src="https://d3q78eohsdsot3.cloudfront.net/assets/images/appstore.png" style={{width:"50%"}} /> </a> </div>
      </div>
          <div> © 2023 NMIMS. All Rights Reserved.</div> 
  </div>
</div>
</div> 
</div>
</div>
    </>
  )
}

export default Website