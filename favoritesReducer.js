export const initialState = {
  favorites: [],
};

export function favoritesReducer(state, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      if (state.favorites.find(team => team.idTeam === action.payload.idTeam)) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          team => team.idTeam !== action.payload
        ),
      };

    default:
      return state;
  }
}