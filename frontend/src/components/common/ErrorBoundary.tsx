
// import React, { Component, ReactNode } from 'react';

// interface ErrorBoundaryProps {
//   children: ReactNode;
// }

// interface ErrorBoundaryState {
//   hasError: boolean;
//   error: Error | null;
//   errorInfo: React.ErrorInfo | null;
// }

// class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
//   constructor(props: ErrorBoundaryProps) {
//     super(props);
//     this.state = {
//       hasError: false,
//       error: null,
//       errorInfo: null,
//     };
//   }

//   static getDerivedStateFromError(error: Error): ErrorBoundaryState {
//     // Update state so the next render will show the fallback UI
//     return { hasError: true, error, errorInfo: null };
//   }
//   componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
//     // You can log the error to an error reporting service
//     console.error("Error caught by ErrorBoundary:", error, errorInfo);
//     this.setState({ errorInfo });
//   }

//   render() {
//     if (this.state.hasError) {
//       // Fallback UI
//       return (
//         <div role="alert">
//           <h2>Something went wrong.</h2>
//           <p>{this.state.error?.message}</p>
//         </div>
//       );
//     }

//     return this.props.children;
//   }
// }

// export default ErrorBoundary;



import React, { useState, useEffect, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error: any) => {
      console.error("ErrorBoundary caught an error", error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleError);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleError);
    };
  }, []);

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
