# 📱 ProductsApp

A React Native application demonstrating clean architecture and modern development practices.
This project includes example videos, technology stack, and setup instructions.

---



## 🎥 Preview

| Feature      | Demo                        |
| ------------ | --------------------------- |
| Home Screen  | <video src="https://github.com/user-attachments/assets/2c22bc43-0c0a-4700-8796-b8ee1d97e54e"/> |
| Categories    | <video src="https://github.com/user-attachments/assets/edadfab2-3b9d-480d-ac0d-8dee6b30a95f"/> |


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
