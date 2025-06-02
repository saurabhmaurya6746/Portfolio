let nav=document.querySelector('.navbar');
window.onscroll = function () {
    if(document.documentElement.scrollTop >20 ){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
  }

//   nav hide 
let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    
    })
})


$(document).ready(function(){
    $(".owl-carousel-2").owlCarousel({
        items: 4,             // Number of items to show
        loop: true,           // Loop the carousel
        margin: 5,           // Margin between items
        autoplay: true,      // Enable autoplay
        autoplayTimeout: 1500, // Time between transitions (in milliseconds)
        autoplayHoverPause: true, // Pause autoplay on hover
        nav: false,           // Hide navigation arrows
        dots: true  ,
        responsive: {
            0: { items: 1 },      // 2 items for small screens (mobile devices)
            400:{ items : 2}  ,          
            700: { items: 3} ,    // 4 items for larger screens (tablets and desktops)
            800:{items:4}
        }
                  // Show pagination dots
    });
});

function redirectToGmail() {
    const email = document.getElementById("emailInput").value;
    if (email) {
        const myEmail = "saurabhmauryajnp28@gmail.com";
        const mailtoLink = `mailto:${myEmail}?subject=Subscription&body=Email: ${email}`;
        window.location.href = mailtoLink;
    } else {
        alert("Please enter a valid email address.");
    }
}
 

// project operner 
// Project data
const projectData = {
    1: {
      title: "Comprehensive Heart & Diabetes Predictor",
      image: "image/project/diasease.png",
      description: "This project leverages machine learning techniques to predict heart and diabetes conditions using patient data. Developed with Streamlit for a user-friendly interface, the project incorporates libraries like NumPy, Pandas, and other machine learning tools for efficient data handling and analysis. The prediction model helps in early diagnosis and risk assessment, aiming to support better healthcare decisions.",
      githubLink:"https://github.com/saurabhmaurya6746/Disease-prediction"
    },
    2: {
      title: "IPL-Score-Prediction",
      image: "image/project/IPL-Score-Predictor.png",
      description: "A machine learning-powered web app built with Streamlit to predict IPL match scores. The app uses a trained deep learning model (.h5) alongside label encoders and a scaler for preprocessing. Users select inputs like venue, teams, striker, and bowler from dropdowns populated using pandas. Encoded inputs are scaled and passed to a Keras model to predict the final score. The frontend is interactive and responsive, delivering real-time score predictions with just a click",
      githubLink: "https://github.com/saurabhmaurya6746/IPL-Score-Prediction"
    },
    3: {
      title: "Minimal Design - Project 2",
      image: "image/portfolio/portfolio2.webp",
      description: "This project displays vibrant stationery with clean arrangements."
    },
    4: {
      title: "Vasudev Bird Control ",
      image: "image/project/Bird-control.png",
      description: "A responsive web app built with Django and SQLite for managing bird control reports. Users can submit sightings, view reports, and admins can manage data via the Django admin panel. The frontend uses HTML, CSS, Bootstrap, and JavaScript for a clean and interactive UI.",
      githubLink: "https://github.com/saurabhmaurya6746/vasudev-bird-control0"
    },
    5: {
      title: "BNMC College Website",
      image: "image/project/bnmc-college.png",
      description: "The BNMC SCHOOL website is a static frontend design built using HTML, CSS, JavaScript, and Bootstrap. It showcases a clean and modern layout suitable for an educational institution. The website includes sections like Home, About Us, Courses, Gallery, and Contact, all styled for responsiveness and smooth user experience. It serves as a visual prototype for a school website, ideal for presentation or future backend integration.",
      // githubLink: "https://github.com/saurabhmaurya6746/vasudev-bird-control0"
    },
    6: {
      title: "Hospital Management ",
      image: "image/project/hospital.png",
      description: "This hospital website is a static frontend project created using HTML, CSS, JavaScript, and Bootstrap. It features a professional and responsive layout suitable for medical institutions. The design includes essential sections like Home, About Us, Services, Doctors, Appointments, and Contact. With a clean UI and user-friendly navigation, the website serves as a visual prototype ready for future backend development or client presentation."
    },
    7: {
      title: "Jarvis - An AI Voice Assistant",
      image: "image/project/Jarvis.png",
      description: "Jarvis is a smart voice assistant built using Flutter. It supports voice commands for tasks like answering questions, opening apps, and calling contacts. It features speech-to-text, text-to-speech, Gemini AI integration, and a chat-style interface with timestamps and typing animations.",
      githubLink:"https://github.com/saurabhmaurya6746/Jarvis"
    },
    8: {
      title: "Hand Gesture-Based Cursor Control and Click System",
      image: "image/project/hand-free.webp",
      description: 'This project leverages Python, OpenCV, MediaPipe, and PyAutoGUI to control a computer cursor using hand gestures. It tracks hand movements in real-time via a webcam, with the index finger controlling cursor position. A mouse click is simulated when the index and thumb tips come close, enabling contactless click functionality. The system visually displays hand landmarks for feedback and allows exiting by pressing "q". ',
      githubLink: "https://github.com/saurabhmaurya6746/Python_project/blob/main/hand-mouse-controller.py"
    },
    9: {
      title: "Temperature Conversion Application using Tkinter",
      image: "image/project/temperature-convertor.png",
      description: "This Python application, created by Saurabh Maurya, provides a user interface for converting temperatures between Fahrenheit and Celsius. It uses the Tkinter library to create a graphical interface for inputting values and displaying the converted results.",
      githubLink: "https://github.com/saurabhmaurya6746/Python_project/blob/main/number_gussing.py"
    },
    10: {
        title: "Simple GUI Calculator Using Python's Tkinter",
        image: "image/project/calculator.png",
        description: 'This project is a basic GUI calculator developed using Python and the Tkinter library. It features a sleek user interface with buttons for numbers, arithmetic operations, and special functions like clear and equals. The calculator allows users to input expressions, perform real-time calculations, and display results on a digital screen. Key features include: Support for basic arithmetic operations (addition, subtraction, multiplication, and division). A "C" button to clear the input field. A stylish design with a modern color theme and interactive buttons. An intuitive layout that makes calculations easy and efficient.',
        githubLink: "https://github.com/saurabhmaurya6746/Python_project/blob/main/calculator.py"
      },
    11: {
        title: "Simple Phone Book Application Using Tkinter",
        image: "image/project/phonebook.png",
        description: 'This project is a simple Phone Book application built using Python and Tkinter. It allows users to manage a list of contacts with basic functionalities:Add Contacts: Users can add new contacts with a name and phone number.View Contacts: Selected contacts can be viewed, displaying the name and phone number in the respective input fields.Delete Contacts: Users can remove selected contacts from the phone book list.Exit Functionality: Closes the application with a button click.',
        githubLink: "https://github.com/saurabhmaurya6746/Python_project/blob/main/phonebook.py"
      },
    12: {
      title: "Number Guessing Game using Tkinter",
      image: "image/project/number-guess.png",
      description: "This Python application, created by Saurabh Maurya, is a simple Number Guessing Game with a graphical interface built using the Tkinter library. The game challenges the user to guess a randomly generated number between 0 and 9, with a limited number of attempts.his project displays vibrant stationery with clean arrangements.",
      githubLink: "https://github.com/saurabhmaurya6746/Python_project/blob/main/temp_converter.py"
    }
      
  };

  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalImage = document.getElementById("modalImage");
  const modalDescription = document.getElementById("modalDescription");
  const closeModal = document.getElementById("closeModal");
  

  // Handle project clicks
  document.addEventListener("click", (event) => {
    const projectElement = event.target.closest(".project");
    if (projectElement) {
      const projectId = projectElement.getAttribute("data-project");
      const projectInfo = projectData[projectId];
  
      if (projectInfo) {
        // Populate modal with project data
        modalTitle.textContent = projectInfo.title;
        modalImage.src = projectInfo.image;
        modalDescription.textContent = projectInfo.description;
  
        // Apply dynamic styles
        modalImage.style.width = "500px";
        modalImage.style.maxWidth = "100%";
        modalImage.style.height = "300px"; // Maintain aspect ratio
        modalImage.style.margin = "10px"; 
        
        // Apply flexbox styling to the modal content
      const modalContent = document.querySelector(".modal-content");
      modalContent.style.display = "flex";
      modalContent.style.flexDirection = "column"; // Stack the content vertically
      modalContent.style.alignItems = "center";  // Center the items horizontally
      modalContent.style.textAlign = "center";  // Center the text
 
        modalTitle.style.fontSize = "20px";
        modalTitle.style.fontWeight = "bold";

        // Set the GitHub button link
      if (projectInfo.githubLink) {
        githubButton.style.display = "inline-block"; // Show the button
        githubButton.onclick = () => {
          window.open(projectInfo.githubLink, "_blank"); // Open the link in a new tab
        };
      } else {
        githubButton.style.display = "none"; // Hide the button if no link is provided
      }
        
        // Show modal
        modal.style.display = "flex";
      }
    }
  });
  
  // Handle modal close
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  
