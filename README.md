# 📌 Cards UI with React

A simple and elegant **Cards UI** built with React.js.  
Each card displays user details such as **image, title, price, username, location, description, and status** with styled buttons.

---

## 🚀 Features
- 🖼️ Reusable **Card Component**
- 📦 Container to render multiple cards dynamically
- 🎨 Clean and modern UI with CSS styling
- 📁 Organized project structure
- ⚡ Built with **React.js**

---

## 📂 Project Structure
cards-ui-react/
│
├── src/
│ ├── components/
│ │ ├── Card.jsx
│ │ ├── CardsContainer.jsx
│ │
│ ├── assets/
│ │ ├── img1.jpg
│ │ ├── img2.jpg
│ │ └── img3.jpg
│ │
│ ├── App.js
│ ├── App.css
│ └── index.js
│
├── package.json
└── README.md


---

## 🛠️ Installation & Setup
1. Clone this repository:
   ```bash
   git clone https://github.com/babulu75/cards-ui-react.git
   cd cards-ui-react

2. Install dependencies:

    npm create vite@latest
    npm install


3. Run the project:

    npm run dev


4. Open in browser:

    http://localhost:5173

## 📖 Usage

You can create cards by passing props to the Card component:

<Card 
  image={img1}
  title="Film Director, Producer"
  price="$14/hour"
  username="Jeffrey Abrams, 51"
  location="New York, United States"
  description="Abrams was born in New York City and raised in Los Angeles."
  status="Online"
/>

## 🧑‍💻 Tech Stack

    React.js

    JavaScript (ES6+)

    CSS3

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and create a pull request.

## 📜 License

This project is for educational purposes only as part of an assignment.

