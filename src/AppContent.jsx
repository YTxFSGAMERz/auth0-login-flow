import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Loader2, AlertCircle, RefreshCw } from 'lucide-react';
import UnauthenticatedView from './components/UnauthenticatedView';
import AuthenticatedView from './components/AuthenticatedView';

export default function AppContent({ onOpenConfig, onOpenMLHGuide, setAuthState }) {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout
  } = useAuth0();

  // Keep parent navbar updated with auth state
  React.useEffect(() => {
    setAuthState({ isAuthenticated, user, isLoading });
  }, [isAuthenticated, user, isLoading, setAuthState]);

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        gap: '1rem',
        color: 'var(--text-secondary)'
      }}>
        <Loader2 size={36} className="spinner" color="#eb5424" />
        <p style={{ fontSize: '0.95rem' }}>Verifying Auth0 authentication state...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass-card animate-fade-in" style={{
        maxWidth: '700px',
        margin: '2rem auto',
        padding: '2rem',
        border: '1px solid rgba(244, 63, 94, 0.4)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#f87171' }}>
          <AlertCircle size={24} />
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Authentication Error</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
          {error.message || 'An error occurred during authentication with Auth0.'}
        </p>

        <div style={{
          backgroundColor: 'var(--bg-primary)',
          padding: '1rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-color)',
          fontSize: '0.85rem',
          color: 'var(--text-muted)',
          marginBottom: '1.5rem'
        }}>
          <strong>Common Causes & Quick Fixes:</strong>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem', lineHeight: 1.6 }}>
            <li>Make sure <code>{window.location.origin}</code> is in your Auth0 Application's <strong>Allowed Callback URLs</strong> and <strong>Allowed Web Origins</strong>.</li>
            <li>Double-check that your Domain (e.g. <code>dev-xxx.us.auth0.com</code>) does not include <code>https://</code> or trailing slashes.</li>
            <li>Ensure your Application Type in Auth0 is set to <strong>Single Page Application</strong>.</li>
          </ul>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={onOpenConfig}
          >
            Review Auth0 Settings
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => window.location.reload()}
          >
            <RefreshCw size={14} />
            <span>Retry</span>
          </button>
        </div>
      </div>
    );
  }

  if (isAuthenticated && user) {
    return (
      <AuthenticatedView
        user={user}
        onLogout={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        onOpenMLHGuide={onOpenMLHGuide}
      />
    );
  }

  return (
    <UnauthenticatedView
      isConfigured={true}
      onLogin={() => loginWithRedirect()}
      onSignup={() => loginWithRedirect({ authorizationParams: { screen_hint: 'signup' } })}
      onOpenConfig={onOpenConfig}
    />
  );
}
