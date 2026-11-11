import React, { useState, useEffect } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConfigModal from './components/ConfigModal';
import MLHGuide from './components/MLHGuide';
import UnauthenticatedView from './components/UnauthenticatedView';
import AppContent from './AppContent';

export default function App() {
  const envDomain = import.meta.env.VITE_AUTH0_DOMAIN || '';
  const envClientId = import.meta.env.VITE_AUTH0_CLIENT_ID || '';

  const [domain, setDomain] = useState(() => {
    return localStorage.getItem('auth0_domain') || (envDomain.includes('YOUR_') ? '' : envDomain);
  });
  
  const [clientId, setClientId] = useState(() => {
    return localStorage.getItem('auth0_client_id') || (envClientId.includes('YOUR_') ? '' : envClientId);
  });

  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isMLHGuideOpen, setIsMLHGuideOpen] = useState(false);
  const [authState, setAuthState] = useState({ isAuthenticated: false, user: null, isLoading: false });

  const isConfigured = Boolean(domain && clientId && !domain.includes('YOUR_') && !clientId.includes('YOUR_'));

  const handleSaveConfig = (newDomain, newClientId) => {
    // Sanitize domain in case user pasted full URL
    let cleanDomain = newDomain.trim();
    cleanDomain = cleanDomain.replace(/^https?:\/\//, '').replace(/\/$/, '');

    setDomain(cleanDomain);
    setClientId(newClientId);
    localStorage.setItem('auth0_domain', cleanDomain);
    localStorage.setItem('auth0_client_id', newClientId);
  };

  return (
    <div className="app-container">
      <Navbar
        isConfigured={isConfigured}
        onOpenConfig={() => setIsConfigOpen(true)}
        onOpenMLHGuide={() => setIsMLHGuideOpen(true)}
        authState={authState}
      />

      <main className="main-content">
        {isConfigured ? (
          <Auth0Provider
            key={`${domain}-${clientId}`}
            domain={domain}
            clientId={clientId}
            authorizationParams={{
              redirect_uri: window.location.origin
            }}
          >
            <AppContent
              onOpenConfig={() => setIsConfigOpen(true)}
              onOpenMLHGuide={() => setIsMLHGuideOpen(true)}
              setAuthState={setAuthState}
            />
          </Auth0Provider>
        ) : (
          <UnauthenticatedView
            isConfigured={false}
            onOpenConfig={() => setIsConfigOpen(true)}
          />
        )}
      </main>

      <Footer />

      <ConfigModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        currentDomain={domain}
        currentClientId={clientId}
        onSave={handleSaveConfig}
      />

      <MLHGuide
        isOpen={isMLHGuideOpen}
        onClose={() => setIsMLHGuideOpen(false)}
      />
    </div>
  );
}
