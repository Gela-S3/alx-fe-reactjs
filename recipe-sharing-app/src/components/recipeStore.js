// import create from 'zustand';

// const useRecipeStore = create((set, get) => ({
//   recipes: [],
//   favorites: [],
//   recommendations: [],

//   // Add recipe to favorites
//   addRecipe: (recipeId) =>
//     set((state) => ({
//       favorites: [...state.favorites, recipeId],
//     })),

//   // Remove recipe from favorites
// removeFavorite: (recipeId) =>
//     set((state) => ({
//         favorites: state.favorites.filter((id) => id !== recipeId),
//     })),

// 
// }));

// export default useRecipeStore;




import { create } from 'zustand';

const useRecipeStore = create((set) => ({
    recipes: [],
    favorites: [],
    recommendations: [],

    // Action to add a recipe
    addRecipe: (newRecipe) =>
        set((state) => ({
            recipes: [...state.recipes, newRecipe],
        })),

    // Action to set (replace) all recipes
    setRecipes: (recipes) => set({ recipes }),

    ///Remove recipe from favorites
    deleteRecipe: (recipeId) =>
        set((state) => ({
            favorites: state.favorites.filter((id) => id !== recipeId),
        })),

    // Update an existing recipe
    updateRecipe: (updatedRecipe) =>
        set((state) => ({
            recipes: state.recipes.map((recipe) =>
                recipe.id === updatedRecipe.id ? updatedRecipe : recipe
            ),
        })),

    // Generate recommendations (simple mock: pick some from favorites)
    generateRecommendations: () =>
        set((state) => {
            const recommended = state.recipes.filter(
                (recipe) =>
                    state.favorites.includes(recipe.id) && Math.random() > 0.5
            );
            return { recommendations: recommended };
        }),
}));




export default useRecipeStore;