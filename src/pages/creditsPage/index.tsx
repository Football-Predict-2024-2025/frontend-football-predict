import React from "react";
import { creditsList } from "../../utils/dataSample";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export const CreditsPage: React.FC = () => {
  return (
    <>
      <div className="row g-4">
        {creditsList.map((data, index) => (
          <div className="col-md-12">
            <div className="card shadow-sm border-0" key={index}>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <img src={data.img} width="200" alt="" />
                  </div>
                  <div className="col-md-6">
                    <div className="h3 mb-0">{data.name}</div>
                    <label className="fs-5 mb-4">{data.role}</label>
                    <div className="fw-medium">
                      <FaInstagram className="me-2" />
                      <a
                        href={data.instagram}
                        className="text-decoration-none text-dark"
                      >
                        Instagram
                      </a>{" "}
                    </div>
                    <div className="fw-medium">
                      <FaGithub className="me-2" />
                      <a
                        href={data.github}
                        className="text-decoration-none text-dark"
                      >
                        Github
                      </a>
                    </div>
                    <div className="fw-medium">
                      <FaLinkedin className="me-2" />
                      <a
                        href={data.Linkedin}
                        className="text-decoration-none text-dark"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="h5">Tools Used</div>
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
