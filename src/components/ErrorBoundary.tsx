import React, { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen flex flex-col items-center justify-center p-4 text-center bg-slate-50">
          <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md border border-slate-100">
            <h1 className="text-2xl font-bold text-slate-900">Something went wrong.</h1>
            <p className="text-slate-500 mt-4 leading-relaxed">
              The application encountered an unexpected error. This usually happens due to connection issues.
            </p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-6 w-full bg-[#4f46e5] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#4338ca] transition-all"
            >
              Refresh Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children; 
  }
}