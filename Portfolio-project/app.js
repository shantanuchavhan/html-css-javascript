
function barActive(){
    state=document.querySelector('.mobnav').style.display
    if (state=='block'){
        document.querySelector('.mobnav').style.display='none'
    }else{
        document.querySelector('.mobnav').style.display='block'
    }
}




const summary=["hello i am Shantanu chavhan Crafting Digital Dreams, Unveiling the Artistry of Web Development.","I am a passionate web developer with a strong aim to create captivating and user-friendly digital experiences that merge creativity with cutting-edge technology.","My diverse skill set includes expertise in front-end technologies like HTML, CSS, React.js, Angular, and jQuery, as well as back-end technologies like Node.js, Express.js, and Django. I am well-versed in Object-Oriented Programming, Database Management System, and Data Structures,In the database realm, I have knowledge of SQL and MongoDB.",
"My projects showcase my diverse set of skills, including the development of web applications like Blog App, E-commerce site, Voting Project, and more. Moreover, I have created my portfolio website to impress potential clients and employers and connect with fellow web developers.","In addition to my web development skills, I have a sporting spirit and proudly represent Mumbai District at the state level in the game of Kho Kho. Apart from that, I also enjoy image editing and videography, showcasing my creative side.","In conclusion, I am a passionate and dedicated web developer with a wide range of technical skills, committed to creating exceptional digital experiences and continuously learning to stay at the forefront of the industry. Thank you"]
summary_para=0
const Projects=[
    {
        index:0,
        title:"BookingApp-airbnbClone",
        img:"../Images/Booking_app.png",
       description: "The Blog App project is a user-friendly web application designed to allow users to create and publish their blogs. It incorporates modern technologies such as React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for the database. Users can register, log in, and create personalized profiles. The app enables seamless blog creation, editing, and deletion, along with the ability to add images and format text. It ensures secure authentication and authorization for user privacy. The Blog App project aims to provide an intuitive and responsive platform for bloggers to share their thoughts and engage with readers."
    },
    {
        index:1,
        title:"Study-Portal",
        img:"../Images/StudyPortal.png",
        description:"This study portal enhances students' productivity by providing a user-friendly interface for organizing homework, notes, and study sessions. It empowers students to search educational videos, solve math problems, and stay focused with a timer. The Django backend ensures efficient data handling and management."
    },
    {
        index:2,
        title:"Blog-app",
        img:"../Images/Blog-project-img.png",
       description: "The Blog App project is a user-friendly web application designed to allow users to create and publish their blogs. It incorporates modern technologies such as React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for the database. Users can register, log in, and create personalized profiles. The app enables seamless blog creation, editing, and deletion, along with the ability to add images and format text. It ensures secure authentication and authorization for user privacy. The Blog App project aims to provide an intuitive and responsive platform for bloggers to share their thoughts and engage with readers."
    },
    {
        index:3,
        title:"Ecommerse-site",
        img:"../Images/Ecommerse-site-img.png",
        description:"The E-commerce project is an online platform that enables users to buy and sell products easily. It includes features like product listings, shopping cart, user accounts, search and filters, reviews, and order management. The project focuses on a user-friendly interface, secure transactions, and responsive design for optimal user experience. It utilizes modern technologies like React.js for the front-end, Node.js and Express.js for the back-end, and MongoDB for the database."},
    {
        index:4,
        title:"Portfolio-Website",
        img:"../Images/Portfolio-project.png",
        description:"My portfolio website is a visually appealing and user-friendly showcase of my web development skills and projects. It includes sections like About Me, Projects, Technical Skills, Education, and Contact Me. With a responsive design, it aims to impress potential clients and employers, while also connecting with fellow web developers."
    },
    {
        index:5,
        title:"Voting-Project-Nodejs",
        img:"../Images/Voting-Project.png",
        description:"Voting project in Node.js is a web application that allows users to vote only once. It ensures each user's vote is unique and prevents multiple voting attempts. The project includes user authentication, voting process, real-time result display, and secure data storage for fair and transparent voting. It is ideal for online polls, surveys, or elections that require a one-time voting mechanism to maintain integrity."
    },
    {
        index:6,
        title:"Grocery-Store-Angular",
        img:"../Images/angular-grocery-store.png",
        description:"The Grocery project is a simple Angular application that displays a list of grocery items in a user-friendly format. It offers basic styling, responsiveness, and potential for future enhancements. Its primary purpose is to assist users in organizing their grocery shopping effectively."},
    {
        index:7,
        title:"Login-Registration",
        img:"../Images/Login.png",
        description:"The login registration page is a web page that allows users to either log in with their credentials or register for a new account. It includes input fields for username/email and password for login, and additional fields for registration. JavaScript is used for form validation and handling user interactions."
    },
    {
        index:8,
        title:"Paint-Gallary",
        img:"../Images/Paint-Gallery.png",
        description:"The login registration page is a web page that allows users to either log in with their credentials or register for a new account. It includes input fields for username/email and password for login, and additional fields for registration. JavaScript is used for form validation and handling user interactions."
    },
    {
        index:9,
        title:"IPL-Template",
        img:"../Images/ipl-template.png",
        description:"The IPL template is a visually appealing web page design that showcases IPL-related content, including team information, match schedules, player profiles, standings, and more. It is designed to be responsive and user-friendly, providing a seamless experience for cricket enthusiasts and fans during the IPL season."
    },
    {
        index:10,
        title:"HTML-5-Template",
        img:"../Images/HTML5-Template.png",
        description:"The HTML5 Templates project creates responsive and visually appealing website templates using HTML5 and CSS. These ready-to-use templates cater to various industries, allowing users to customize them for their specific branding and content needs. The project offers a time-saving solution for creating modern and user-friendly websites without starting from scratch."
    },
    
]




  ProjectChange(0);

  let number = 0;

  function ProjectChange(number) {
    const project = Projects.find((project) => project.index === number);

    if (project) {
      let NextProject = `
      <div class="project">
            <img src="${project.img}" alt="">
            <div class="Detailed-info-pro">
                <h1>${project.title}</h1>
                <p>${project.description}</p>
            </div>
           </div>
           <div class="More">
            <button onclick="Decrement()">Up</button>
            <h1>${number + 1}</h1>
            <button onclick="Increment()">Down</button>
            </div>
        </div>
      `;

      const projectdiv = document.querySelector('.project-section');
      projectdiv.innerHTML = NextProject;
    }
  }

  function Increment() {
    number = (number + 1) % Projects.length;
    ProjectChange(number);
  }

  function Decrement() {
    number = (number - 1 + Projects.length) % Projects.length;
    ProjectChange(number);
  }

  function Switch(){
    if(event.target.value=="Technical-Skills"){
        ButtonSelector('#Technical-Skills','none')
        ButtonSelector('#More-me','none')
        ButtonSelector('#Education','block')
        content=`
        <div class="Technical-skills">
            <div class="">
    
                <h2>Front-End</h2>
                <a href="https://www.linkedin.com/learning/certificates/dccc3b7af5701f42a336af38b1eef14863d3e3aef01903d4a76360d81ad34cbb"><h3>HTML</h3></a>
                <a href="https://www.linkedin.com/learning/certificates/dccc3b7af5701f42a336af38b1eef14863d3e3aef01903d4a76360d81ad34cbb"><h3>CSS</h3></a>
                <a href="https://www.linkedin.com/learning/certificates/dccc3b7af5701f42a336af38b1eef14863d3e3aef01903d4a76360d81ad34cbb"><h3>REACT JS</h3></a>
                <a href="https://www.linkedin.com/learning/certificates/dccc3b7af5701f42a336af38b1eef14863d3e3aef01903d4a76360d81ad34cbb"><h3>ANGULAR</h3></a>
                <a href="https://www.linkedin.com/learning/certificates/dccc3b7af5701f42a336af38b1eef14863d3e3aef01903d4a76360d81ad34cbb"><h3>JQUERY</h3></a>
            </div>
            <div>
                <h2>Languages</h2>
                <a href="https://www.linkedin.com/learning/certificates/dccc3b7af5701f42a336af38b1eef14863d3e3aef01903d4a76360d81ad34cbb"><h3>JAVASCRIPT</h3></a>
                <a href="https://www.udemy.com/certificate/UC-a774edf3-cb8c-4704-acb4-d62f49fdce2f/"><h3>PYTHON</h3></a>
            </div>
            <div>
                <h2>Back-End</h2>
                <a href="https://www.linkedin.com/learning/certificates/dccc3b7af5701f42a336af38b1eef14863d3e3aef01903d4a76360d81ad34cbb"><h3>NODE JS</h3></a>
                <a href="https://www.linkedin.com/learning/certificates/dccc3b7af5701f42a336af38b1eef14863d3e3aef01903d4a76360d81ad34cbb"><h3>EXPRESS JS</h3></a>
                <a href="https://www.udemy.com/certificate/UC-a774edf3-cb8c-4704-acb4-d62f49fdce2f/"><h3>DJANGO</h3></a>
            </div>
            <div>
                <h2>Fundamentals</h2>
                <a href=""><h3>OOPS</h3></a>
                <a href=""><h3>DBMS</h3></a>
                <a href=""><h3>DATA-STRUCTURE</h3></a>
            </div>
            <div>
                <h2>Database</h2>
                <a href="https://www.linkedin.com/learning/certificates/dccc3b7af5701f42a336af38b1eef14863d3e3aef01903d4a76360d81ad34cbb"><h3>SQL</h3></a>
                <a href="https://www.linkedin.com/learning/certificates/dccc3b7af5701f42a336af38b1eef14863d3e3aef01903d4a76360d81ad34cbb"><h3>MONGODB</h3></a>
            </div>
            </div>`
        SwitchHelper(content)
    }
    else if (event.target.value=="Eduction") {
        ButtonSelector('#Technical-Skills','block')
        ButtonSelector('#More-me','block')
        ButtonSelector('#Education','block')
        document.querySelector('.rightArrow').style.display='none'
        const content=`<div class="Education">
        <div class="Degree">
            <h3>Bachelor of Electronic enginnering </h3>
            <h4>Ramrao Adik institute technology</h4>
            <h5>7.6 CGPA</h5>
        </div>
        <div class="Degree">
            <h3>Diploma in Electronic Engineering</h3>
            <h4>Goverment polytechnic mumbai</h4>
            <h5>71.71 %</h5>
        </div>
        <div class="Degree">
            <h3>SSC X</h3>
            <h4>Bhausaheb Paranjape Vidyalay</h4>
            <h5>82.80 CGPA</h5>
        </div>
    </div>`
    SwitchHelper(content)

    } else {
        console.log(summary_para)
        summary_para+=1
       
       
        const content=`
        <div class="info">
        <p>${summary[summary_para]}</p>
    </div>`
    SwitchHelper(content)
    if (summary_para>=summary.length-1){
        summary_para=1
        ButtonSelector('#Technical-Skills','block')
        ButtonSelector('#More-me','none')
        ButtonSelector('#Education','none')
    }
        
    }
  }
function SwitchHelper(content){

    div=document.querySelector('.info')
    div.innerHTML=content

}

var selector_count=0
function ButtonSelector(buttonid,displayProperty){
    console.log(selector_count)
    if (selector_count==undefined){
        selector_count=0
    }
    selector_count+=1
    if (selector_count<9){
        console.log(buttonid,displayProperty)
        const div= document.querySelector(buttonid);
        div.style.display=displayProperty;
    }
   
}
  



