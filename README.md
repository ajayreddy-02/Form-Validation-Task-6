### 📄 `README.md`

```markdown
# 📬 Contact Form with JavaScript Validation

This is a simple contact form built using HTML, CSS, and JavaScript. It includes **client-side validation** for user inputs: name, email, and message.

---

## ✅ Features

- Clean, user-friendly form design
- JavaScript validation for:
  - Empty name, email, or message
  - Proper email format using regex
- Error messages shown below each field
- Success message on valid submission
- Prevents form submission if inputs are invalid

---

## 🛠️ Tools Used

- HTML
- CSS
- JavaScript (Vanilla)

---

## 📁 Folder Structure

```

contact-form/
├── index.html       # Main HTML structure
├── style.css        # Styling for the form
└── script.js        # Form validation logic

````

---

## 🚀 How to Run

1. Clone the repository or download the files:
   ```bash
   git clone https://github.com/ajayreddy-02/Form-Validation-Task-6.git
   cd contact-form
````

2. Open `index.html` in your browser using VS Code Live Server or double-click.

3. Try submitting the form with:

   * Empty fields
   * Invalid email format
   * Correct inputs (observe success message)

---

## ✨ Example Inputs

| Name    | Email                                   | Message      | Expected Result         |
| ------- | --------------------------------------- | ------------ | ----------------------- |
| *Empty* | *Empty*                                 | *Empty*      | Show all error messages |
| Ajay    | ajay\@domain                            | Hello        | Show email format error |
| Ajay    | [ajay@gmail.com](mailto:ajay@gmail.com) | Hello there! | Show success message    |

---

## 🙌 Author

Made with ❤️ by Ajay Reddy
Feel free to use or modify this for your own projects.

---

## 📝 License

This project is open-source and free to use for educational or personal use.

```

---

Let me know if you'd like help deploying this form or enhancing it with a backend or form handler service like **Formspree**, **Netlify Forms**, or **Firebase**.
```
