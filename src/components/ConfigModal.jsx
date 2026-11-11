import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, Key, Globe, AlertTriangle, Info } from 'lucide-react';

export default function ConfigModal({ isOpen, onClose, currentDomain, currentClientId, onSave }) {
  const [domain, setDomain] = useState(currentDomain || '');
  const [clientId, setClientId] = useState(currentClientId || '');
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!isOpen) return null;

  const callbackUrl = window.location.origin;

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(callbackUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(domain.trim(), clientId.trim());
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 800);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-fade-in" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Auth0 Configuration
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Connect your Auth0 Single Page Application
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

        {/* Auth0 Application Setup Reminder */}
        <div style={{
          backgroundColor: 'rgba(99, 102, 241, 0.08)',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem',
          marginBottom: '1.5rem',
          fontSize: '0.875rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#a5b4fc', fontWeight: 600 }}>
            <Info size={18} />
            <span>Auth0 Dashboard Requirement:</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
            In your Auth0 Application Settings, make sure this exact URL is added to <strong>Allowed Callback URLs</strong>, <strong>Allowed Logout URLs</strong>, and <strong>Allowed Web Origins</strong>:
          </p>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--bg-primary)',
            padding: '0.5rem 0.75rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-color)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem'
          }}>
            <span style={{ color: 'var(--accent-emerald)' }}>{callbackUrl}</span>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={handleCopyUrl}
              style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem' }}
            >
              {copiedUrl ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
              <span>{copiedUrl ? 'Copied!' : 'Copy URL'}</span>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-label" htmlFor="auth0-domain">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <Globe size={16} /> Auth0 Domain
              </span>
            </label>
            <input
              id="auth0-domain"
              className="input-control"
              type="text"
              placeholder="e.g. dev-xyz123.us.auth0.com"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              required
            />
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.375rem' }}>
              Found in your Auth0 Application &gt; Settings &gt; Domain
            </p>
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="auth0-client-id">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <Key size={16} /> Client ID
              </span>
            </label>
            <input
              id="auth0-client-id"
              className="input-control"
              type="text"
              placeholder="e.g. BZ81vD6Q8K..."
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
              required
            />
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.375rem' }}>
              Found in your Auth0 Application &gt; Settings &gt; Client ID
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
            >
              {saveSuccess ? (
                <>
                  <Check size={16} />
                  <span>Saved!</span>
                </>
              ) : (
                <span>Save Credentials</span>
              )}
            </button>
          </div>
        </form>

        <div style={{
          marginTop: '1.5rem',
          paddingTop: '1rem',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <span>Need an Auth0 account?</span>
          <a
            href="https://auth0.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: '#a5b4fc', textDecoration: 'underline' }}
          >
            Sign up free on Auth0 <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
