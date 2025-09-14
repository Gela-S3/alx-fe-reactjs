import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>🍳 Recipe Sharing App</h1>
        <Routes>
          {/* Route for listing recipes */}
          <Route path="/" element={<RecipeList />} />

          {/* Route for adding a recipe */}
          <Route path="/add" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
