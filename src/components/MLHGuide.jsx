import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, Sparkles, CheckCircle2, Camera } from 'lucide-react';

export default function MLHGuide({ isOpen, onClose }) {
  const [copiedDescription, setCopiedDescription] = useState(false);
  const [copiedTech, setCopiedTech] = useState(false);

  if (!isOpen) return null;

  const challengeTitle = "Set up your first Auth0 log-in flow";
  const technologies = "React, Vite, Auth0 React SDK (@auth0/auth0-react), JavaScript, OAuth 2.0, OpenID Connect (OIDC), HTML5, CSS3, Node.js";

  const descriptionMarkdown = `## 🔐 Auth0 Log-in Flow — Global Hack Week: Builders Week

### Overview
This project sets up a secure, modern **Auth0 Log-in Flow** built with **React**, **Vite**, and the official **Auth0 React SDK (\`@auth0/auth0-react\`)**. 

It implements end-to-end OAuth 2.0 / OpenID Connect (OIDC) authentication with universal login, seamless redirect authorization, secure session handling, and authenticated user profile rendering with raw claim inspection.

---

### ✨ Features
- **Auth0 Universal Login**: Redirect-based secure authentication supporting email/password and social identity providers (Google, GitHub, Discord).
- **One-Click Sign Up**: Dedicated registration entry point utilizing \`screen_hint: 'signup'\`.
- **Session & State Management**: Real-time authentication state tracking via \`useAuth0\` hook (\`isAuthenticated\`, \`isLoading\`, \`user\`, \`error\`).
- **User Profile Dashboard**: Visual display of authenticated user profile, avatar, email, nickname, and email verification badge.
- **Token & Claims Explorer**: Interactive inspection of decoded ID token claims and user profile payload.
- **Secure Logout**: Single sign-out flow redirecting safely back to the allowed application origin.
- **Interactive Configuration Manager**: Allows testing across environments with live dashboard callbacks.

---

### 🛠️ Technologies Used
- **Frontend**: React 19, Vite, Lucide Icons, Modern Responsive CSS
- **Authentication**: Auth0 by Okta, \`@auth0/auth0-react\`
- **Protocols**: OAuth 2.0, OpenID Connect (OIDC), PKCE flow
- **Tooling**: Node.js, Git, GitHub

---

### 🚀 Running Locally
1. Clone the repository:
   \`\`\`bash
   git clone <YOUR_REPO_URL>
   cd auth0-login-flow
   \`\`\`
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Set up environment variables in \`.env.local\`:
   \`\`\`env
   VITE_AUTH0_DOMAIN=your-tenant.us.auth0.com
   VITE_AUTH0_CLIENT_ID=your-client-id
   \`\`\`
4. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
5. Open \`http://localhost:5173\` and test the log-in flow!`;

  const handleCopy = (text, setFn) => {
    navigator.clipboard.writeText(text);
    setFn(true);
    setTimeout(() => setFn(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-fade-in" style={{ maxWidth: '780px' }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                MLH Challenge Submission Helper
              </h2>
              <span className="badge badge-mlh">Ready to Submit</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Challenge: <strong>{challengeTitle}</strong>
            </p>
          </div>
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={onClose}
            style={{ borderRadius: '50%', padding: '0.5rem', lineHeight: 0 }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Quick Submission Checklist */}
        <div style={{
          backgroundColor: 'rgba(16, 185, 129, 0.08)',
          border: '1px solid rgba(16, 185, 129, 0.25)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem',
          marginBottom: '1.5rem'
        }}>
          <h3 style={{ fontSize: '0.9rem', color: '#6ee7b7', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <CheckCircle2 size={18} />
            MLH Submission Checklist
          </h3>
          <ul style={{ listStyle: 'none', fontSize: '0.825rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <li>✓ <strong>Project URL:</strong> Push this code to GitHub and paste your public repository link.</li>
            <li>✓ <strong>Description:</strong> Copy the formatted markdown below into the Description field.</li>
            <li>✓ <strong>Technologies Used:</strong> Copy the comma-separated tech stack list below.</li>
            <li>✓ <strong>Screenshots:</strong> Take 2-3 screenshots (Landing page, Auth0 Universal Login, Authenticated Profile).</li>
          </ul>
        </div>

        {/* Field 1: Technologies Used */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <label className="input-label" style={{ margin: 0, fontWeight: 600 }}>
              1. Technologies Used (Copy & Paste)
            </label>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => handleCopy(technologies, setCopiedTech)}
            >
              {copiedTech ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
              <span>{copiedTech ? 'Copied!' : 'Copy Technologies'}</span>
            </button>
          </div>
          <div style={{
            backgroundColor: 'var(--bg-primary)',
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-color)',
            fontSize: '0.85rem',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-mono)'
          }}>
            {technologies}
          </div>
        </div>

        {/* Field 2: Description */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <label className="input-label" style={{ margin: 0, fontWeight: 600 }}>
              2. Description (Markdown for MLH form)
            </label>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => handleCopy(descriptionMarkdown, setCopiedDescription)}
            >
              {copiedDescription ? <Check size={14} /> : <Copy size={14} />}
              <span>{copiedDescription ? 'Copied Markdown!' : 'Copy Description'}</span>
            </button>
          </div>
          <div style={{
            backgroundColor: 'var(--bg-primary)',
            padding: '1rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-color)',
            maxHeight: '220px',
            overflowY: 'auto',
            fontSize: '0.8rem',
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-mono)',
            whiteSpace: 'pre-wrap'
          }}>
            {descriptionMarkdown}
          </div>
        </div>

        {/* Field 3: Screenshot Tips */}
        <div style={{
          backgroundColor: 'var(--bg-tertiary)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem',
          border: '1px solid var(--border-color)',
          marginBottom: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>
            <Camera size={16} color="#f43f5e" />
            <span>Recommended Screenshots to Upload</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            <div style={{ padding: '0.5rem', background: 'var(--bg-primary)', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
              <strong>1. Welcome Screen</strong>
              <p>Screenshot the app before login with "Sign In with Auth0" button.</p>
            </div>
            <div style={{ padding: '0.5rem', background: 'var(--bg-primary)', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
              <strong>2. Auth0 Login Page</strong>
              <p>Screenshot the Auth0 Universal Login prompt tab in your browser.</p>
            </div>
            <div style={{ padding: '0.5rem', background: 'var(--bg-primary)', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
              <strong>3. Profile Dashboard</strong>
              <p>Screenshot the authenticated screen with user avatar & token claims.</p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onClose}
          >
            Close
          </button>
          <a
            href="https://www.mlh.com/challenges/01a1ad39-4d0f-537e-2c5a-db384ced0d8e/submissions/new"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <span>Open MLH Submission Page</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
