# 🎓 College Admissions Portal — Express.js Project

A simple web-based admissions form portal built using **Express.js**. It allows students to submit their details such as full name, email, phone number, and course selection via a responsive HTML form. Submitted data is stored temporarily in memory and a clean confirmation message is displayed with inline CSS styling.

---

## 📌 Project Approach

- Created a responsive HTML admission form styled with CSS for clean visuals.
- Set up an **Express.js server** to:
  - Serve the admission form page at `/admission`.
  - Handle form submissions using a POST request to `/submit`.
  - Temporarily store submitted data inside an in-memory JavaScript array (no database).
  - Display a styled confirmation reply using inline CSS with a personalized thank-you message.
- Included additional inline CSS for a clean, human-friendly confirmation page layout.
- Ensured mobile responsiveness and simple user-friendly navigation.

---

## 📦 Tech Stack / Tools Used

- **Node.js**
- **Express.js**
- **HTML5**
- **CSS3** (external for form styling, inline for confirmation message)
- Basic frontend form validation via `required` attributes

---

## 🚀 How to Run This Project

1. **Clone this repository:**

   ```bash
   git clone https://github.com/yourusername/admissions-portal.git
   cd admissions-portal
````

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the Express server:**

   ```bash
   node app.js
   ```

4. **Access the application:**

   Open your browser and visit:
   `http://localhost:3000/admission`

5. **Use the form:**

   * Fill in student details.
   * Select a course.
   * Submit the form.
   * See a confirmation page styled with inline CSS showing a personalized message.

---

## 📸 Output Screens

![Screenshot (61)](https://github.com/user-attachments/assets/6122b744-52f8-49e6-a4dd-85203feef7eb)


![Screenshot (62)](https://github.com/user-attachments/assets/912aff68-3407-4012-aec9-41a6ae1cd191)





**1️⃣ Admission Form Screen:**

* Clean, simple form with:

  * Full Name
  * Email
  * Phone Number
  * Course Selection Dropdown
    (with options like Computer Science, Mechanical Engineering, Business Administration)
* Submit button styled with CSS.

**2️⃣ Confirmation Page:**

* Neat card-style confirmation box with:

  * A thank you message including the applicant's name.
  * Their selected course.
  * A styled button to go back to the form.
* Uses inline CSS for:

  * Centered layout
  * Rounded corners
  * Clean font
  * Soft background color and simple shadow effect

---

## 📂 Project Structure

```
admissions-portal/
├── public/
│   └── styles.css
├── views/
│   └── admission.html
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## 📌 Notes

* This project is purely for learning/demo purposes.
* No database is used; data is stored temporarily in an array.
* Clean, minimal design with effective inline and external CSS.
* Can be easily extended to integrate MongoDB or SQL if needed.

---

## 📧 Author

**Sai Chaithanya Poloju**
