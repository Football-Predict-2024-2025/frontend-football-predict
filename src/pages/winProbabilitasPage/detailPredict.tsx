import React, { useState } from "react";
import { clubList } from "../../utils/dataSample";
import { FaX } from "react-icons/fa6";

interface Club {
  id: number;
  name: string;
  imgUrl: string;
}

export const DetailPredictPage: React.FC = () => {
  const [selected2Club, setSelected2Club] = useState<Club[]>([]);

  // Fungsi untuk menambah atau menghapus klub dari list yang dipilih
  const toggleClubSelection = (club: Club) => {
    if (selected2Club.find((c) => c.id === club.id)) {
      // Jika klub sudah dipilih, hapus dari list
      setSelected2Club(selected2Club.filter((c) => c.id !== club.id));
    } else if (selected2Club.length < 2) {
      // Jika belum mencapai 2 klub, tambahkan klub ke list
      setSelected2Club([...selected2Club, club]);
    }
  };

  // Fungsi untuk menghapus klub yang dipilih
  const removeSelectedClub = (clubId: number) => {
    setSelected2Club(selected2Club.filter((club) => club.id !== clubId));
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
                className="btn btn-success w-100"
                disabled={selected2Club.length !== 2}
              >
                Prediksi
              </button>
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
