import React from "react";
import { clubList } from "../../utils/dataSample";
import { FaX } from "react-icons/fa6";

export const DetailPredictPage: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <div className="row g-4">
            <div className="col-md-12">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 m-auto">
                      <div className="d-flex">
                        <button className="btn btn-sm btn-danger px-2 pt-1 me-3">
                          <FaX className="" />
                        </button>
                        <div className="h5">Team 1</div>
                      </div>
                    </div>
                    <div className="col-md-4 text-end m-auto">
                      <div className="h5">ATALANTA</div>
                    </div>
                    <div className="col-md-2">
                      <div className="m-auto">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/id/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png"
                          width="50"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 m-auto">
                      <div className="d-flex">
                        <button className="btn btn-sm btn-danger px-2 pt-1 me-3">
                          <FaX className="" />
                        </button>
                        <div className="h5">Team 2</div>
                      </div>
                    </div>
                    <div className="col-md-4 text-end m-auto">
                      <div className="h5">Manchester City</div>
                    </div>
                    <div className="col-md-2">
                      <div className="m-auto">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/id/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png"
                          width="50"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-success">
                Prediksi
            </button>
          </div>
        </div>
        <div className="col-md-4 bg-light vh-100">
          <div className="row g-3">
            {clubList.map((data) => (
              <div className="col-md-4">
                <div
                  className="card shadow-sm border-0 text-center"
                  style={{ cursor: "pointer" }}
                >
                  <div className="card-body">
                  <div className="text-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/id/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png"
                      width="50"
                      alt=""
                    />
                  </div>
                  <div className="h6 mt-2" style={{ fontSize: "0.8em" }}>
                    {data.name}
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
