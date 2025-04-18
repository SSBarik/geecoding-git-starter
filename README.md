# GeeCoding Git Starter

Kickstart your Git journey with this hands-on exercise tailored for absolute beginners.

- Fork and Clone this repo

- Create a feature branch for your work

- Customize your own profile card file

- Commit, push, and open a pull request

###### By the end, you’ll have executed your first collaborative Git workflow and seen your contribution appear live on the page!

---

## 🛠️ Prerequisites

- **Git** installed locally (`git --version`)
- A **GitHub** account
- A code editor (e.g. VS Code) or terminal

---

## 🚀 Quick Start

1. **Fork this repository**

- Fork to create your own copy under your account.

2. **Clone the repo**
   ```bash
   git clone https://github.com/ssbarik/geecoding-git-starter.git
   cd geecoding-git-starter
   ```

## 🎯 Exercise: Add Your Profile Card

Each student will add a personal profile card in its own file.

1. **Create a new branch** (use your GitHub username as scope)

   ```bash
   git checkout -b <your-feature-branch>

   ```

2. **Copy the template** into your own file

   ```bash
    cp students/template.html students/<your-username>.html

   ```

3. **Edit** students/`<your-username>`.html

4. **Commit & push** your changes
   ```bash
   git add students/<your-username>.html
   git commit -m "Add profile card"
   git push --set-upstream origin <your-feature-branch>

   ```
5. **Open a Pull Request** on GitHub against the `main` branch. Once approved, your card will appear automatically on the page.

## 🔗 Resources

- [20 Essential Git Commands Every Developer Must Master](https://ssbarik.medium.com/20-essential-git-commands-every-developer-must-master-5bcf9c2b00e7)

---

> _Happy coding—and welcome to the world of version control!_
