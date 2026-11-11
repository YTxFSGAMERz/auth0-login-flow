import React from 'react';
import { LogIn, UserPlus, Shield, KeyRound, Lock, Zap, ArrowRight, CheckCircle } from 'lucide-react';

export default function UnauthenticatedView({ onLogin, onSignup, isConfigured, onOpenConfig }) {
  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', paddingTop: '1.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <span className="badge badge-auth0">Auth0 by Okta</span>
          <span className="badge badge-mlh">Global Hack Week Challenge</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: '-0.03em',
          marginBottom: '1.25rem'
        }}>
          Secure authentication <br />
          <span style={{
            background: 'linear-gradient(135deg, #eb5424 0%, #f43f5e 50%, #6366f1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            built in minutes.
          </span>
        </h1>

        <p style={{
          fontSize: '1.15rem',
          color: 'var(--text-secondary)',
          maxWidth: '640px',
          margin: '0 auto 2rem',
          lineHeight: 1.6
        }}>
          Experience the official Auth0 OAuth 2.0 / OpenID Connect login flow with universal login, seamless session persistence, and secure token exchange.
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          {isConfigured ? (
            <>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={onLogin}
              >
                <LogIn size={20} />
                <span>Log In with Auth0</span>
              </button>

              <button
                type="button"
                className="btn btn-secondary btn-lg"
                onClick={onSignup}
              >
                <UserPlus size={20} />
                <span>Create Account</span>
              </button>
            </>
          ) : (
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={onOpenConfig}
            >
              <Zap size={20} />
              <span>Configure Auth0 Domain & Client ID</span>
            </button>
          )}
        </div>

        {!isConfigured && (
          <p style={{ fontSize: '0.875rem', color: 'var(--accent-amber)', marginTop: '1rem' }}>
            ⚡ Complete your 30-second setup to connect your Auth0 Tenant
          </p>
        )}
      </section>

      {/* Feature Cards Grid */}
      <section className="grid-2" style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        <div className="glass-card" style={{ padding: '1.75rem' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            backgroundColor: 'rgba(235, 84, 36, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
            color: '#ff7849'
          }}>
            <Shield size={22} />
          </div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Universal Login
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Auth0 provides a hosted, battle-tested login experience that supports passwordless, passkeys, MFA, and automated brute-force protection out of the box.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '1.75rem' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
            color: '#a5b4fc'
          }}>
            <KeyRound size={22} />
          </div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            OAuth 2.0 & OIDC Compliant
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Adheres strictly to industry standard PKCE authorization flow for Single Page Applications, generating cryptographically verified ID and Access tokens.
          </p>
        </div>
      </section>

      {/* Flow Visualization */}
      <section className="glass-card" style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <Lock size={18} color="#eb5424" />
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>How the Auth0 Login Flow Works</h3>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ color: 'var(--accent-auth0)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.25rem' }}>STEP 1</div>
            <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.25rem' }}>Redirect to Auth0</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>App triggers <code>loginWithRedirect()</code> with client credentials and PKCE challenge.</p>
          </div>

          <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ color: 'var(--accent-indigo)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.25rem' }}>STEP 2</div>
            <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.25rem' }}>Universal Login</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>User securely authenticates via credentials or social providers on Auth0's hosted page.</p>
          </div>

          <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ color: 'var(--accent-emerald)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.25rem' }}>STEP 3</div>
            <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.25rem' }}>Code Exchange</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Auth0 redirects back to our callback URL with an authorization code.</p>
          </div>

          <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ color: '#ec4899', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.25rem' }}>STEP 4</div>
            <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.25rem' }}>Session & Profile</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>SDK validates tokens and hydrates the authenticated user profile.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
