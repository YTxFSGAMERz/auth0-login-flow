# 🔐 Auth0 Log-in Flow

> **MLH Global Hack Week: Builders Week Challenge**  
> *"Set up your first Auth0 log-in flow"*

A secure, modern authentication single-page application built with **React 19**, **Vite**, and the official **Auth0 React SDK (`@auth0/auth0-react`)**. Implements standard OAuth 2.0 / OpenID Connect (OIDC) PKCE authorization, Universal Login, session persistence, user profile display, and interactive token claim inspection.

---

## 📸 Screenshots

| 1. Landing & Universal Login | 2. Authenticated Profile & Claims |
| :---: | :---: |
| ![Landing View](docs/screenshot-landing.png) | ![Profile View](docs/screenshot-profile.png) |

---

## ⚡ Quick Start

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/YTxFSGAMERz/auth0-login-flow.git
cd auth0-login-flow
npm install
```

### 2. Configure Auth0 Application

1. Sign up or log in to the [Auth0 Dashboard](https://manage.auth0.com/).
2. Navigate to **Applications** > **Applications** and click **+ Create Application**.
3. Name your application (e.g. `MLH Auth0 App`) and select **Single Page Web Applications**.
4. In your application's **Settings** tab, configure the following URLs:
   - **Allowed Callback URLs**: `http://localhost:5173`
   - **Allowed Logout URLs**: `http://localhost:5173`
   - **Allowed Web Origins**: `http://localhost:5173`
5. Scroll down and click **Save Changes**.
6. Copy your **Domain** and **Client ID** from the top of the Settings tab.

### 3. Set Up Environment Variables

Create or edit `.env.local` in the project root:

```env
VITE_AUTH0_DOMAIN=your-tenant-name.us.auth0.com
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
```

> **Note**: You can also enter and save these credentials directly in the app's interactive **Settings** modal in the browser!

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🎯 Features

- **Universal Login**: Uses Auth0's hosted universal login supporting email/password, social connections (Google, GitHub), passkeys, and MFA.
- **Dedicated Registration**: "Create Account" button launches Auth0's signup prompt via `screen_hint: 'signup'`.
- **User Profile Dashboard**: Visualizes authenticated user attributes (`user.name`, `user.email`, `user.picture`, `user.nickname`, `user.email_verified`).
- **Decoded Claims Inspector**: Real-time explorer for raw OIDC ID token claims with 1-click JSON copy.
- **Protected API Simulation**: Demonstrates authenticated requests with Bearer token header handling.
- **Safe Session Termination**: Complete logout flow clearing cookies and returning to authorized application origin.
- **MLH Submission Assistant**: Built-in modal with pre-formatted Markdown descriptions and copyable technology tags for one-click submission to MLH.

---

## 🛠️ Tech Stack

- **Framework**: React 19, Vite
- **Authentication**: Auth0 React SDK (`@auth0/auth0-react` v2)
- **Protocols**: OAuth 2.0, OpenID Connect (OIDC), Authorization Code Flow with PKCE
- **Icons & Styling**: Lucide React, Modern CSS3 with dark mode theme

---

## 📝 Submitting to Major League Hacking (MLH)

When submitting to the [MLH Challenge Page](https://www.mlh.com/challenges/01a1ad39-4d0f-537e-2c5a-db384ced0d8e/submissions/new):

1. **Project URL**: Your public GitHub repository link (e.g., `https://github.com/Farhan-Shaikh/auth0-login-flow`).
2. **Technologies Used**:
   ```
   React, Vite, @auth0/auth0-react, JavaScript, OAuth 2.0, OpenID Connect, Node.js
   ```
3. **Description**: Click the **MLH Submission** button in the app navbar to copy the complete Markdown summary.
4. **Screenshots**: Take a screenshot of the login landing page and the authenticated profile screen.

---

## 📄 License

MIT
