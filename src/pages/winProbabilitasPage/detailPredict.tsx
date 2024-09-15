import React, { useEffect, useState } from "react";
import { FaX } from "react-icons/fa6";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import LeagueService from "../../services/league";
import { MyClub } from "../../interfaces/club.interface";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DetailPredictPage: React.FC = () => {
  const [selected2Club, setSelected2Club] = useState<MyClub[]>([]);
  const [resultPredict, setResultPredict] = useState(false);
  const [listClub, setListClub] = useState<MyClub[]>([]);

  const clubService = LeagueService();

  useEffect(() => {
    fetchClub();
  }, []);

  // Fetch club data based on league ID
  const fetchClub = async () => {
    try {
      const response: MyClub[] = await clubService.getClubsByLeague(1); // Example with league ID 1
      setListClub(response);
    } catch (error) {
      console.error("Error fetching clubs:", error);
    }
  };

  const toggleClubSelection = (club: MyClub) => {
    setResultPredict(false);
    if (selected2Club.find((c) => c.club_name === club.club_name)) {
      setSelected2Club(selected2Club.filter((c) => c.club_name !== club.club_name));
    } else if (selected2Club.length < 2) {
      setSelected2Club([...selected2Club, club]);
    }
  };

  const removeSelectedClub = (clubId: number) => {
    setSelected2Club(selected2Club.filter((club) => club.position !== clubId));
  };

  const prosesPredict = () => {
    setResultPredict(true);
  };

  const data = {
    labels: ["Team 1", "Team 2"],
    datasets: [
      {
        data: [12, 29], // Example data
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <div className="row g-4">
            {selected2Club.map((club, index) => (
              <div key={index} className="col-md-12">
                <div className="card border-0 shadow">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6 m-auto">
                        <div className="d-flex">
                          <button
                            className="btn btn-sm btn-danger px-2 pt-1 me-3"
                            onClick={() => removeSelectedClub(club.position)}
                          >
                            <FaX />
                          </button>
                          <div className="h5">{`Team ${index + 1}`}</div>
                        </div>
                      </div>
                      <div className="col-md-4 text-end m-auto">
                        <div className="h6">{club.club_name}</div>
                      </div>
                      <div className="col-md-2">
                        <img
                          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                          width="50"
                          alt={club.club_name}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-md-12">
              <button
                className="btn btn-success w-100 mb-4"
                disabled={selected2Club.length !== 2}
                onClick={prosesPredict}
              >
                Prediksi
              </button>
              {resultPredict && selected2Club.length === 2 && (
                <div className="col-md-12">
                  <div className="h4 text-center mb-4">Win Probability</div>
                  <div className="row">
                    <div className="col">
                      <div className="h5">{selected2Club[0].club_name}</div>
                    </div>
                    <div className="col-md-5">
                      <Pie data={data} />
                    </div>
                    <div className="col">
                      <div className="h5">{selected2Club[1].club_name}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-4 bg-light vh-100">
          <div className="row g-3">
            {listClub.map((club, index) => (
              <div
                key={index}
                className="col-md-4"
                onClick={() => toggleClubSelection(club)}
              >
                <div
                  className={`card shadow-sm border-0 text-center ${
                    selected2Club.find((c) => c.club_name === club.club_name)
                      ? "bg-success text-white"
                      : ""
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        width="50"
                        alt={club.club_name}
                      />
                    </div>
                    <div className="h6 mt-2" style={{ fontSize: "0.8em" }}>
                      {club.club_name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
