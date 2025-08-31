# 📱 ProductsApp

A React Native application demonstrating clean architecture and modern development practices.
This project includes example videos, technology stack, and setup instructions.

---

## 🎥 Preview

| Feature      | Demo                        |
| ------------ | --------------------------- |
| Home Screen  | <video src="https://github.com/user-attachments/assets/249614ac-0407-433b-ab30-3ed3587910d8"/> |
| Product details | <video src="https://github.com/user-attachments/assets/4b27ac68-2ca7-46e8-ab86-d1384f75bc13"/> |
| Categories    | <video src="https://github.com/user-attachments/assets/8f378a8f-d564-4016-85c6-b98e83f2f9f8"/> |


---

## 🛠️ Tech Stack

* **React Native**
* **TypeScript**
* **React Navigation**
* **MMKV** – High-performance key-value storage
* **ESLint & Prettier** – Code quality and formatting
* **axios** – Http client
* **react-query** – request handler



---

## 🚀 Getting Started





### 1. Clone the repository

```bash
git clone https://github.com/amandaduuaarte/ProductsApp.git
cd ProductsApp
```

### 2. Install dependencies

```bash
npm i
# or
yarn
```

### 3. Start the development server

#### iOS 

```bash
npx pod-install
npx react-native run-ios
yarn ios
```

#### Android

```bash
npx react-native run-android
yarn android
```

---

## 📂 Project Structure

```
src/
├── data/          # API, local storage, repositories
├── domain/        # use-cases, utils
├── presentation/  # UI, screens, components, routes
└── assets/        # Images
```

---

## ✅ Scripts

| Command       | Description               |
| ------------- | ------------------------- |
| `yarn lint`   | Run linter                |        |
| `yarn format` | Format code with Prettier |

---

## 📄 License

This project is licensed under the MIT License.
