import React, { useEffect, useState, useReducer } from "react";
import { favoritesReducer, initialState } from "../reducer/favoritesReducer";

const Home = () => {
  const [teams, setTeams] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState(
    "English Premier League"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");


  const [state, dispatch] = useReducer(
    favoritesReducer,
    initialState,
    () => {
      const storedFavorites = localStorage.getItem("favorites");
      return storedFavorites ? JSON.parse(storedFavorites) : initialState;
    }
  );


  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(
      `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${selectedLeague}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTeams(data.teams || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch teams.");
        setLoading(false);
      });
  }, [selectedLeague]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state));
  }, [state]);

  return (
    <div className="home-page">
      <div className="hero-section">
        <img
          src="https://i.pinimg.com/1200x/48/4e/30/484e30187f6d71529d14bcf57c326c3f.jpg"
          alt="Sports Banner"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Welcome to Sportify</h1>
          <p>Explore your favorite football teams and leagues</p>
        </div>
      </div>

      <div className="standard">
        <h3>Select League</h3>
        <button onClick={() => setSelectedLeague("English Premier League")}>
          Premier League
        </button>
        <button onClick={() => setSelectedLeague("Spanish La Liga")}>
          La Liga
        </button>
        <button onClick={() => setSelectedLeague("Italian Serie A")}>
          Serie A
        </button>
      </div>

      <div className="standard">
        <h3>Search Team</h3>
        <input
          type="text"
          placeholder="Search by team name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && <p>Loading teams...</p>}
      {error && <p>{error}</p>}

      <section className="home-cards">
        <div className="grid-wrapper">
          <div className="team-grid">
            {teams
              .filter((team) =>
                team.strTeam
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              )
              .map((team) => (
                <div className="standard team-card" key={team.idTeam}>
                  <div className="team-header">
                    <img
                      src={team.strTeamBadge}
                      alt={team.strTeam}
                      width="60"
                    />
                    <h3>{team.strTeam}</h3>
                  </div>

                  <p>
                    <strong>Stadium:</strong> {team.strStadium}
                  </p>
                  <p>
                    <strong>Country:</strong> {team.strCountry}
                  </p>

                  <button
                    onClick={() =>
                      dispatch({ type: "ADD_FAVORITE", payload: team })
                    }
                  >
                    Add to Favorites
                  </button>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="favorites-section">
        <h2>Favorite Teams 🩵</h2>

        {state.favorites.length === 0 && (
          <p>No favorites added yet.</p>
        )}

        {state.favorites.map((team) => (
          <div key={team.idTeam}>
            {team.strTeam}
            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_FAVORITE",
                  payload: team.idTeam,
                })
              }
            >
              Remove
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;