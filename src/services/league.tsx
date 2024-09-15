import axios, { AxiosResponse } from "axios";
import { MyLeague } from "../interfaces/league.interface";
import {
  MyClub,
  RequestClubPredictionData,
  ResponsePredict,
} from "../interfaces/club.interface";

interface LeagueService {
  getAllLeague: () => Promise<MyLeague[]>;
  getClubsByLeague: (leagueId: number) => Promise<MyClub[]>;
  predictClub: (data: RequestClubPredictionData) => Promise<ResponsePredict[]>;
}

const LeagueService = (): LeagueService => {
  const apiUrl = import.meta.env.VITE_API_URL;

  // Fungsi untuk mengambil semua liga
  const getAllLeague = async (): Promise<MyLeague[]> => {
    try {
      const response: AxiosResponse<MyLeague[]> = await axios.get(
        `${apiUrl}/api/league/get`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching leagues:", error);
      throw error;
    }
  };

  // Fungsi untuk mengambil klub berdasarkan ID liga
  const getClubsByLeague = async (leagueId: number): Promise<MyClub[]> => {
    try {
      const response: AxiosResponse<MyClub[]> = await axios.get(
        `${apiUrl}/api/league/${leagueId}/clubs`
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching clubs for league ID ${leagueId}:`, error);
      throw error;
    }
  };

  // Fungsi untuk mengambil klub berdasarkan ID liga
  const predictClub = async (
    data: RequestClubPredictionData
  ): Promise<ResponsePredict[]> => {
    try {
      const response: AxiosResponse<ResponsePredict[]> = await axios.post(
        `${apiUrl}/api/club/predict`,
        data
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching clubs for league ID`, error);
      throw error;
    }
  };

  return {
    getAllLeague,
    getClubsByLeague,
    predictClub,
  };
};

export default LeagueService;
