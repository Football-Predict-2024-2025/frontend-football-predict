export interface MyLeague {
  country: string;
  league_icon: string;
  league_id: number;
  league_name: string;
  total_club: number;
}

  
  export interface GetAllLeagueResponse {
    // status: number;
    result: MyLeague[];
  }
  
  export interface GetDetailProjectResponse {
    status: number;
    result: MyLeague;
  }
  
  export interface ResponseActionProject {
    status: number;
    message: string;
  }