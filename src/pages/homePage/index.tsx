import React from "react";
import { FaStar } from "react-icons/fa6";
import { homeDataList } from "../../utils/dataSample";

export const HomePage: React.FC = () => {
  return (
    <div>
      <>
        <div className="h2 mb-5" style={{ fontSize: "28px" }}>
          Select Your <span className="mtext-primary">League</span>
        </div>
        <div className="row g-4">
          {homeDataList.map((data, index) => (
            <div className="col-md-4" key={index}>
              <div className="shadow-sm p-2 pb-5">
                <div
                  className="text-end mtext-primary"
                  style={{ fontSize: "0.9em" }}
                >
                  <FaStar style={{ fontSize: "13px" }} /> 4.5
                </div>
                <div className="text-center">
                  <div className="img-liga">
                    <img className="img-fluid" width="150" src={data.img} alt="" />
                  </div>
                  <div className="liga-name h5 text-center mb-0">{data.name}</div>
                  <div className="sub-liga-name text-center text-muted">{data.subname}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};
