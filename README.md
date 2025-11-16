# 📦 Parcel Delivery System (MERN + RTK Query)

A complete parcel delivery management platform where users can send parcels, track their status, and receive deliveries with a single click.  
Built with **React, Redux Toolkit, RTK Query, Node.js, Express, MongoDB**, and **Shadcn UI**.

---

## 🚀 Live Demo

👉 **Client Live Link:**  
https://parcel-delivery-client-theta.vercel.app/

---

## 📌 Features

### 👤 User Features
- Register & Login (JWT authentication)
- Manage profile
- View parcels sent and parcels to be received
- Update parcel status (ex: `RECEIVED`, `DELIVERED`)
- Track parcels by Tracking ID
- Responsive and modern UI

### 📦 Parcel Features
- Create new parcels
- View parcel list
- Update status with one click (receiver only)
- Filter parcels by sender/receiver email
- Real-time UI updates using RTK Query cache invalidation

### 🛠 Admin Features (if included)
- Manage all parcels
- Change delivery statuses
- View all users

---

## 🧰 Tech Stack

### **Frontend**
- React + Vite
- TypeScript
- Redux Toolkit
- RTK Query (API state management)
- Axios + custom axiosBaseQuery
- Tailwind CSS
- ShadCN UI
- Lucide Icons

### **Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- CORS
- Bcrypt

---

## 📂 Folder Structure

parcel-delivery-client/
│── src/
│ ├── components/
│ ├── pages/
│ ├── redux/
│ │ ├── features/
│ │ │ ├── auth/
│ │ │ ├── parcel/
│ │ ├── store.ts
│ ├── hooks/
│ ├── types/
│ ├── utils/
│ ├── App.tsx
│ ├── main.tsx
│── public/
│── package.json
│── README.md



---

## 👤 Project Owner

**Developed & Maintained by:**  
### **Aurnab**


## 🔧 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/PARCEL-DELIVERY-CLIENT.git
cd PARCEL-DELIVERY-CLIENT

