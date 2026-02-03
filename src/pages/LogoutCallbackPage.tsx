import React, { useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const LogoutCallbackPage: React.FC = () => {
  useEffect(() => {
    // The OIDC provider has logged out the user and redirected here
    // We can redirect to the home page or show a logout success message
    setTimeout(() => {
      window.location.href = '/';
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-6 w-6 text-green-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-gray-900">Logout realizado com sucesso!</h2>
        <p className="mt-2 text-gray-600">Você será redirecionado para a página inicial em breve.</p>
      </div>
    </div>
  );
};

export default LogoutCallbackPage;
