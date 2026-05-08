import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bodyCustomer text-textMain">
        <Routes>
          <Route
            path="/"
            element={
              <main className="p-8">
                <h1 className="text-3xl font-semibold">POS</h1>
              </main>
            }
          />
          <Route
            path="/admin"
            element={
              <main className="p-8">
                <h1 className="text-3xl font-semibold">Admin</h1>
              </main>
            }
          />
          <Route
            path="/forum"
            element={
              <main className="p-8">
                <h1 className="text-3xl font-semibold">Forum</h1>
              </main>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
