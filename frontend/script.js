const courses = [
  {
    title: "Web Development Bootcamp",
    desc: "Master HTML, CSS, JavaScript, and React to become a full-stack web developer.",
    price: "₹500",
    img: "./images/Web-Dev.png"
  },
  {
    title: "MERN Stack Development",
    desc: "Learn MongoDB, Express, React, and Node.js to build full-stack modern web apps.",
    price: "₹1100",
    img: "./images/mern-stack.png"
  },
  {
    title: "Data Science with Python",
    desc: "Learn data visualization, machine learning, and statistics using Python.",
    price: "₹500",
    img: "./images/DS_Python.jpg"
  },
  {
    title: "UI/UX Design Fundamentals",
    desc: "Design beautiful interfaces and enhance user experience using Figma and Adobe XD.",
    price: "₹600",
    img: "./images/Ui-Ux.png"
  },
  {
    title: "Digital Marketing Mastery",
    desc: "Grow your business with SEO, Google Ads, and social media strategies.",
    price: "₹300",
    img: "./images/Digital marketing.png"
  },
  {
    title: "Mobile App Development",
    desc: "Build Android and iOS apps using Flutter and Firebase.",
    price: "₹700",
    img: "./images/Mobile-App-Development.jpg"
  },
  {
    title: "Artificial Intelligence Basics",
    desc: "Understand AI, deep learning, and neural networks from scratch.",
    price: "₹900",
    img: "./images/Ai.jpg"
  },
 {
    title: "DevOps & CI/CD",
    desc: "Master Docker, Kubernetes, and Jenkins to automate deployment pipelines.",
    price: "₹1500",
    img: "./images/CI_CD.png"
  }
];

const container = document.getElementById('course-container');

courses.forEach(course => {
  const card = document.createElement('div');
  card.classList.add('course-card');
  card.innerHTML = `
    <img src="${course.img}" alt="${course.title}">
    <div class="course-info">
      <h3>${course.title}</h3>
      <p>${course.desc}</p>
      <p class="price">${course.price}</p>
      <button class="buy-btn">Buy Now</button>
    </div>
  `;
  container.appendChild(card);
});

// Add interactivity
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('buy-btn')) {
    const courseTitle = e.target.parentElement.querySelector('h3').innerText;
    alert(`You selected "${courseTitle}" — Payment feature coming soon! 💳`);
  }
});