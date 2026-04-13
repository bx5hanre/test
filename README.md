# Clinique Nedjma 2 — Full System Setup Guide

## Files Included
```
clinic-system/
├── firebase-config.js       ← Firebase credentials (you fill this)
├── index.html               ← Public website (dynamic)
├── admin/
│   ├── login.html           ← Admin login page
│   └── dashboard.html       ← Full admin control panel
├── firestore.rules          ← Database security rules
├── storage.rules            ← File storage security rules
├── firebase.json            ← Hosting configuration
└── README.md                ← This file
```

---

## STEP 1 — Create a Firebase Project (Free)

1. Go to: https://console.firebase.google.com
2. Click **"Add project"**
3. Name it: `clinique-nedjma2`
4. Disable Google Analytics (not needed)
5. Click **"Create project"**

---

## STEP 2 — Enable Required Firebase Services

### A) Authentication
1. In Firebase Console → **Authentication** → **Get started**
2. Click **"Email/Password"** → Enable it → Save
3. Go to **Users** tab → **Add user**
4. Enter: `wifiwaw@gmail.com` and a strong password
5. This is the admin account

### B) Firestore Database
1. Firebase Console → **Firestore Database** → **Create database**
2. Choose **"Start in production mode"**
3. Select region: `europe-west1` (closest to Algeria)
4. Click **"Enable"**

### C) Storage
1. Firebase Console → **Storage** → **Get started**
2. Choose **"Start in production mode"**
3. Same region as Firestore → **Done**

---

## STEP 3 — Add Your Firebase Config

1. Firebase Console → **Project Settings** (gear icon)
2. Scroll to **"Your apps"** → Click **"</>"** (Web app)
3. Register app name: `clinic-website`
4. Copy the `firebaseConfig` object shown
5. Open `firebase-config.js` and replace the placeholder values:

```javascript
const firebaseConfig = {
  apiKey:            "PASTE_YOUR_KEY_HERE",
  authDomain:        "clinique-nedjma2.firebaseapp.com",
  projectId:         "clinique-nedjma2",
  storageBucket:     "clinique-nedjma2.appspot.com",
  messagingSenderId: "PASTE_YOUR_ID_HERE",
  appId:             "PASTE_YOUR_APP_ID_HERE"
};
```

---

## STEP 4 — Apply Security Rules

### Firestore Rules:
1. Firebase Console → **Firestore** → **Rules** tab
2. Delete the existing rules
3. Paste the contents of `firestore.rules`
4. Click **"Publish"**

### Storage Rules:
1. Firebase Console → **Storage** → **Rules** tab
2. Delete existing rules
3. Paste contents of `storage.rules`
4. Click **"Publish"**

---

## STEP 5 — Seed Initial Content (Admin Panel)

1. Open `admin/login.html` in your browser (or after deploy)
2. Login with `wifiwaw@gmail.com` and your password
3. Go to **Settings** → Enter clinic info → Save
4. Go to **Homepage** → Enter hero title, subtitle, highlights → Save
5. Go to **Services** → Add your medical services
6. Go to **Doctors** → Add your doctors
7. Go to **Reviews** → Add patient reviews
8. Refresh the public `index.html` → Everything appears!

---

## STEP 6 — Deploy to Firebase Hosting (Free)

### Install Firebase CLI (one time):
```bash
npm install -g firebase-tools
```

### Deploy:
```bash
cd clinic-system
firebase login
firebase init hosting
firebase deploy
```

Your site will be live at:
`https://clinique-nedjma2.web.app`

---

## STEP 7 — Custom Domain (Optional)

To use `www.cliniquenejma2.dz` or `.com`:
1. Firebase Console → **Hosting** → **Add custom domain**
2. Enter your domain
3. Follow the DNS verification steps
4. Wait 24h for SSL certificate

---

## Admin Panel URL

After deploy:
- **Public site:** `https://YOUR_PROJECT.web.app`
- **Admin login:** `https://YOUR_PROJECT.web.app/admin/login.html`
- **Dashboard:** `https://YOUR_PROJECT.web.app/admin/dashboard.html`

---

## What the Admin Can Do (No Coding)

| Section | Actions |
|---|---|
| Homepage | Change hero title, subtitle, background image, marquee text |
| Services | Add / Edit / Delete / Show-Hide services |
| Doctors | Add / Edit / Delete / Show-Hide doctors with photos |
| Reviews | Add / Delete patient reviews with star ratings |
| Media Library | Upload photos & videos, copy URLs |
| Contact Requests | View all form submissions, mark as contacted |
| Settings | Change phone, WhatsApp, email, address, hours |

---

## Need Help?

Email: wifiwaw@gmail.com  
WhatsApp: +213 0554 307 043
