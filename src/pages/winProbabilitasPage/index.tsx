import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LeagueService from "../../services/league";
import {
  MyLeague,
} from "../../interfaces/league.interface";

export const WinProbabilitasPage: React.FC = () => {
  const [listLeague, setListLeague] = useState<MyLeague[]>([]);
  const navigate = useNavigate();
  const leagueService = LeagueService();

  useEffect(() => {
    fetchLeague();
  }, []);

  const fetchLeague = async () => {
    try {
      const response: MyLeague[] = await leagueService.getAllLeague();
      setListLeague(response); 
    } catch (error) {
      console.error("Error fetching leagues:", error);
    }
  };

  return (
    <>
      <div className="h2 text-center mb-5">Select League</div>
      <div className="row g-4">
        {listLeague.map((data, index) => (
          <div
            className="col-md-12"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/detail-predict")}
          >
            <div className="card shadow border-0" key={index}>
              <div className="card-body">
                <div className="row">
                  <div className="col-2">
                    <img
                      src={data.league_icon}
                      width={150}
                      alt=""
                    />
                  </div>
                  <div className="col">
                    <div className="h4">{data.league_name}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
