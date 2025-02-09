# 🔮 Dream Sketch: AI Sleep Visualizer 🎨💭

Dream Sketch is an AI-driven web application where users log their dreams, and the AI generates interactive and surreal 3D environments to represent the dream elements. It combines cutting-edge technologies to bring your subconscious experiences to life.

---

## 🚀 Features
- **Dream Logging Interface:** Input your dream descriptions.
- **Real-time 3D Visualizations:** Watch AI-generated 3D dream environments evolve.
- **Emotion Mapping:** Visual representations based on dream emotions.
- **Surreal Dreamworld Rendering:** Abstract elements dynamically shaped by AI.

---

## 🛠 Tech Stack
- **Frontend:** React.js
- **3D Graphics:** Three.js
- **AI Processing:** TensorFlow.js
- **Image Generation:** Stable Diffusion API

---

## Project Structure

![image](https://github.com/user-attachments/assets/e09a5109-fdec-4964-854d-b3b341033e08)

---

## 📦Installation Instructions
Follow these steps to set up the project locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/dream-sketch-ai.git
   cd dream-sketch-ai
2. **Install Dependencies:**
   **Client Dependencies**
   cd client
   npm install
  **Server Dependencies**
   cd ../server
   npm install
   
3. **Start the Application**
   **Start the Server**
   node app.js
  **Start the Client**
   cd ../client
   npm start

---

## 🔧 Usage
- **Log Dreams:** Enter your dream descriptions in the provided interface.
- **Visualize:** Watch interactive 3D dream environments rendered in real-time.
- **Experience:** Navigate surreal landscapes influenced by your dreams.

---

## Usage Instructions

- Open the application in your browser at http://localhost:3000.
- Enter a description of your dream in the text input field.
- Submit the dream to visualize it as an interactive 3D environment.

---

## API Endpoints

**POST /interpret-dream**

- **Description:** Accepts dream text and returns AI-generated dream elements.

- **Request Body:**
{
  "dreamText": "I was flying over a beautiful city with colorful lights."
}

- **Response:**
{
  "objects": [
    { "x": 1.5, "y": -2.3, "z": 3.1, "size": 1.2, "color": "#FF5733" }
  ]
}

## Future Enhancements

- Integration with Stable Diffusion API for detailed image generation.
- Advanced AI dream analysis using natural language processing.
- Improved emotion mapping and customizable 3D rendering.

## 🚀 Deployment
To deploy the app, use GitHub Pages or any cloud hosting provider:

1. Build the project:
   npm run build

2. Deploy to GitHub Pages:
   npm run deploy

---

## 🧪 Testing (Optional):
- **To run tests:**
  npm test

---

## 🏗 Roadmap

**Planned Enhancements:**
- **Dream Journal Feature:** Save and categorize dreams over time.
- **Enhanced Visualization:** Support for additional 3D shapes and animations.
- **AI-powered Analysis:** Detailed dream interpretation based on sentiment and keyword analysis.
- **Community Sharing:** Share and explore dream visualizations with other users.

---

## 🤝 Contributing
We welcome contributions! Feel free to submit pull requests or report issues.

---

## Fork the project
- Create a new branch (feature/your-feature-name)
- Commit your changes (git commit -m 'Add your feature')
- Push to the branch (git push origin feature/your-feature-name)
- Open a Pull Request

---

## 📫 Contact
For any questions or suggestions, please feel free to reach out:

- **GitHub:** https://github.com/NikitaKarmakarP
- **Email:** nikitakarmakar831@gmail.com

---

## 🔗 Let's Connect!
- ⭐ If you find this project interesting, don't forget to give it a star! 🌟
- Follow me on GitHub for more amazing projects. 🚀
