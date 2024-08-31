import React from "react";
import { LigaLeagueList } from "../../utils/dataSample";

export const HomePage: React.FC = () => {
  return (
    <div>
      <>
        <div className="h2 text-center mb-5">Select League</div>
        <div className="row g-4">
          {LigaLeagueList.map((data, index) => (
            <div className="col-md-12">
              <div className="card shadow border-0" key={index}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-2">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/7871/b7d3/8c2552ae9f39d3e4bd337504ac864855?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TFo2mtKt-2cSfYUNKHwgJfr9J1cbp30jGo7MpXuDtMCr1ZA4PFxpP3EkNmLrFVFSTR4maIrkaevHsH3uhF-E5oVsNY14VMDMmhCNmEtlZ-c8H00bc0qS0-YtzrhgpOI9uJyD~aqDsC0rYr2BpaWchUHqcfsEWVHew0CwfH3VnAkvf47Ukv5Lwi01gbN7HCTntX7t8BHOuFc5nGeuQWh7csFVkMJM2Vt7-avRK2Spn2mAxtqUe3~NfeKc6LCuvgINKBEPMcnA~0NqleF~yZEt27Wi02qlxuW~y6F8860M3zfecGkbJrM4JfJkl2esrBGA1OYQfY8kVTJoIDgpMWsqSQ__"
                        width={150}
                        alt=""
                      />
                    </div>
                    <div className="col">
                      <div className="h4">{data.ligaName}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};
