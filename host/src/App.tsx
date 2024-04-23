import * as React from 'react';
import { lazy, Suspense, useEffect } from 'react';

const RemoteButton = lazy(() => import("remote/Button"));
import ErrorBoundary from './ErrorBoundary';

const RemoteWrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      border: "1px solid red",
      background: "white",
    }}
  >
    <Suspense fallback="Loading...">
      <ErrorBoundary>{children}</ErrorBoundary>
    </Suspense>
  </div>
);


const App = () => {

  useEffect(() => {
    function subscribe(e: any) {
      console.log(e, "remote_click")
      alert("Hello World!")
    }

    window.addEventListener("remote_click", subscribe)

    return () => window.removeEventListener("remote_click", subscribe)
  }, [])

  return (
    <div style={{ background: "rgba(43, 192, 219, 0.3)" }}>
      <h1>This is the Host!</h1>
      <h2>Remote Button:</h2>
      <RemoteWrapper>
        <RemoteButton variant='secondary' />
      </RemoteWrapper>
      <br />
      <a href="http://localhost:3002">Link to Remote App</a>
    </div>
  )
}

export default App;
