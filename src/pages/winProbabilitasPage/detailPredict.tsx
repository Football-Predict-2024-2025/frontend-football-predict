import React, { useState } from "react";
import { clubList } from "../../utils/dataSample";
import { FaX } from "react-icons/fa6";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
interface Club {
  id: number;
  name: string;
  imgUrl: string;
}

export const DetailPredictPage: React.FC = () => {
  const [selected2Club, setSelected2Club] = useState<Club[]>([]);
  const [resultPredict, setResultPredict] = useState(false);

  const toggleClubSelection = (club: Club) => {
    setResultPredict(false);
    if (selected2Club.find((c) => c.id === club.id)) {
      setSelected2Club(selected2Club.filter((c) => c.id !== club.id));
    } else if (selected2Club.length < 2) {
      setSelected2Club([...selected2Club, club]);
    }
  };

  const removeSelectedClub = (clubId: number) => {
    setSelected2Club(selected2Club.filter((club) => club.id !== clubId));
  };

  const prosesPredict = () => {
    setResultPredict(true);
  };

  const data = {
    labels: ["Team 1", "Team 2"],
    datasets: [
      {
        data: [12, 29],
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
              <div key={club.id} className="col-md-12">
                <div className="card border-0 shadow">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6 m-auto">
                        <div className="d-flex">
                          <button
                            className="btn btn-sm btn-danger px-2 pt-1 me-3"
                            onClick={() => removeSelectedClub(club.id)}
                          >
                            <FaX className="" />
                          </button>
                          <div className="h5">{`Team ${index + 1}`}</div>
                        </div>
                      </div>
                      <div className="col-md-4 text-end m-auto">
                        <div className="h6">{club.name}</div>
                      </div>
                      <div className="col-md-2">
                        <div className="m-auto">
                          <img
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                            width="50"
                            alt={club.name}
                          />
                        </div>
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
                onClick={() => prosesPredict()}
              >
                Prediksi
              </button>
              {resultPredict ? (
                <div className="col-md-12">
                  <div className="h4 text-center mb-4">Win Probability</div>
                  <div className="row">
                    <div className="col">
                      <div className="h5">{selected2Club[0].name}</div>
                    </div>
                    <div className="col-md-5">
                      <div className="d-flex">
                        <Pie data={data} />
                      </div>
                    </div>
                    <div className="col">
                      <div className="h5">{selected2Club[1].name}</div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="col-md-4 bg-light vh-100">
          <div className="row g-3">
            {clubList.map((club) => (
              <div
                key={club.id}
                className="col-md-4"
                onClick={() =>
                  toggleClubSelection({
                    id: club.id,
                    imgUrl: club.img,
                    name: club.name,
                  })
                }
              >
                <div
                  className={`card shadow-sm border-0 text-center ${
                    selected2Club.find((c) => c.id === club.id)
                      ? "bg-success text-white"
                      : ""
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  <div className="card-body">
                    <div className="text-center">
                      <img src={club.img} width="50" alt={club.name} />
                    </div>
                    <div className="h6 mt-2" style={{ fontSize: "0.8em" }}>
                      {club.name}
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
