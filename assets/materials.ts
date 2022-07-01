import { createAsset, loadAssets } from "./createAsset";

export const actions = {
  group: "Material Icons (Apache 2.0)",
  category: "UI Actions",
  assets:[{
    name: "Done",
    body: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z",
  },{
    name: "Settings",
    body: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
  },{
    name: "Account Circle",
    body: "M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,6c1.93,0,3.5,1.57,3.5,3.5S13.93,13,12,13 s-3.5-1.57-3.5-3.5S10.07,6,12,6z M12,20c-2.03,0-4.43-0.82-6.14-2.88C7.55,15.8,9.68,15,12,15s4.45,0.8,6.14,2.12 C16.43,19.18,14.03,20,12,20z",
  },{
    name: "Home",
    body: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
  },{
    name: "Search",
    body: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
  },{
    name: "Favorite",
    body: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
  }]
};

export const social = {
  group: "Material Icons (Apache 2.0)",
  category: "Social",
  assets: [{
    name: "Person",
    width: 48, height: 48,
    body: "M24 23.95Q20.7 23.95 18.6 21.85Q16.5 19.75 16.5 16.45Q16.5 13.15 18.6 11.05Q20.7 8.95 24 8.95Q27.3 8.95 29.4 11.05Q31.5 13.15 31.5 16.45Q31.5 19.75 29.4 21.85Q27.3 23.95 24 23.95ZM8 40V35.3Q8 33.4 8.95 32.05Q9.9 30.7 11.4 30Q14.75 28.5 17.825 27.75Q20.9 27 24 27Q27.1 27 30.15 27.775Q33.2 28.55 36.55 30Q38.1 30.7 39.05 32.05Q40 33.4 40 35.3V40ZM11 37H37V35.3Q37 34.5 36.525 33.775Q36.05 33.05 35.35 32.7Q32.15 31.15 29.5 30.575Q26.85 30 24 30Q21.15 30 18.45 30.575Q15.75 31.15 12.6 32.7Q11.9 33.05 11.45 33.775Q11 34.5 11 35.3ZM24 20.95Q25.95 20.95 27.225 19.675Q28.5 18.4 28.5 16.45Q28.5 14.5 27.225 13.225Q25.95 11.95 24 11.95Q22.05 11.95 20.775 13.225Q19.5 14.5 19.5 16.45Q19.5 18.4 20.775 19.675Q22.05 20.95 24 20.95ZM24 16.45Q24 16.45 24 16.45Q24 16.45 24 16.45Q24 16.45 24 16.45Q24 16.45 24 16.45Q24 16.45 24 16.45Q24 16.45 24 16.45Q24 16.45 24 16.45Q24 16.45 24 16.45ZM24 37Q24 37 24 37Q24 37 24 37Q24 37 24 37Q24 37 24 37Q24 37 24 37Q24 37 24 37Q24 37 24 37Q24 37 24 37Z",
  },{
    width: 48, height: 48,
    name: "Group",
    body: "M1.9 40V35.3Q1.9 33.55 2.8 32.125Q3.7 30.7 5.3 30Q8.95 28.4 11.875 27.7Q14.8 27 17.9 27Q21 27 23.9 27.7Q26.8 28.4 30.45 30Q32.05 30.7 32.975 32.125Q33.9 33.55 33.9 35.3V40ZM36.9 40V35.3Q36.9 32.15 35.3 30.125Q33.7 28.1 31.1 26.85Q34.55 27.25 37.6 28.025Q40.65 28.8 42.55 29.8Q44.2 30.75 45.15 32.15Q46.1 33.55 46.1 35.3V40ZM17.9 23.95Q14.6 23.95 12.5 21.85Q10.4 19.75 10.4 16.45Q10.4 13.15 12.5 11.05Q14.6 8.95 17.9 8.95Q21.2 8.95 23.3 11.05Q25.4 13.15 25.4 16.45Q25.4 19.75 23.3 21.85Q21.2 23.95 17.9 23.95ZM28.4 23.95Q27.85 23.95 27.175 23.875Q26.5 23.8 25.95 23.6Q27.15 22.35 27.775 20.525Q28.4 18.7 28.4 16.45Q28.4 14.2 27.775 12.475Q27.15 10.75 25.95 9.3Q26.5 9.15 27.175 9.05Q27.85 8.95 28.4 8.95Q31.7 8.95 33.8 11.05Q35.9 13.15 35.9 16.45Q35.9 19.75 33.8 21.85Q31.7 23.95 28.4 23.95ZM4.9 37H30.9V35.3Q30.9 34.5 30.425 33.75Q29.95 33 29.25 32.7Q25.65 31.1 23.2 30.55Q20.75 30 17.9 30Q15.05 30 12.575 30.55Q10.1 31.1 6.5 32.7Q5.8 33 5.35 33.75Q4.9 34.5 4.9 35.3ZM17.9 20.95Q19.85 20.95 21.125 19.675Q22.4 18.4 22.4 16.45Q22.4 14.5 21.125 13.225Q19.85 11.95 17.9 11.95Q15.95 11.95 14.675 13.225Q13.4 14.5 13.4 16.45Q13.4 18.4 14.675 19.675Q15.95 20.95 17.9 20.95ZM17.9 37Q17.9 37 17.9 37Q17.9 37 17.9 37Q17.9 37 17.9 37Q17.9 37 17.9 37Q17.9 37 17.9 37Q17.9 37 17.9 37Q17.9 37 17.9 37Q17.9 37 17.9 37ZM17.9 16.45Q17.9 16.45 17.9 16.45Q17.9 16.45 17.9 16.45Q17.9 16.45 17.9 16.45Q17.9 16.45 17.9 16.45Q17.9 16.45 17.9 16.45Q17.9 16.45 17.9 16.45Q17.9 16.45 17.9 16.45Q17.9 16.45 17.9 16.45Z"
  },{
    width: 48, height: 48,
    name: "Share",
    body: "M36.35 44Q34 44 32.325 42.325Q30.65 40.65 30.65 38.3Q30.65 37.95 30.725 37.475Q30.8 37 30.95 36.6L15.8 27.8Q15.05 28.65 13.95 29.175Q12.85 29.7 11.7 29.7Q9.35 29.7 7.675 28.025Q6 26.35 6 24Q6 21.6 7.675 19.95Q9.35 18.3 11.7 18.3Q12.85 18.3 13.9 18.75Q14.95 19.2 15.8 20.05L30.95 11.35Q30.8 11 30.725 10.55Q30.65 10.1 30.65 9.7Q30.65 7.3 32.325 5.65Q34 4 36.35 4Q38.75 4 40.4 5.65Q42.05 7.3 42.05 9.7Q42.05 12.05 40.4 13.725Q38.75 15.4 36.35 15.4Q35.2 15.4 34.125 15.025Q33.05 14.65 32.3 13.8L17.15 22.2Q17.25 22.6 17.325 23.125Q17.4 23.65 17.4 24Q17.4 24.35 17.325 24.75Q17.25 25.15 17.15 25.55L32.3 34.15Q33.05 33.45 34.05 33.025Q35.05 32.6 36.35 32.6Q38.75 32.6 40.4 34.25Q42.05 35.9 42.05 38.3Q42.05 40.65 40.4 42.325Q38.75 44 36.35 44ZM36.35 12.4Q37.5 12.4 38.275 11.625Q39.05 10.85 39.05 9.7Q39.05 8.55 38.275 7.775Q37.5 7 36.35 7Q35.2 7 34.425 7.775Q33.65 8.55 33.65 9.7Q33.65 10.85 34.425 11.625Q35.2 12.4 36.35 12.4ZM11.7 26.7Q12.85 26.7 13.625 25.925Q14.4 25.15 14.4 24Q14.4 22.85 13.625 22.075Q12.85 21.3 11.7 21.3Q10.55 21.3 9.775 22.075Q9 22.85 9 24Q9 25.15 9.775 25.925Q10.55 26.7 11.7 26.7ZM36.35 41Q37.5 41 38.275 40.225Q39.05 39.45 39.05 38.3Q39.05 37.15 38.275 36.375Q37.5 35.6 36.35 35.6Q35.2 35.6 34.425 36.375Q33.65 37.15 33.65 38.3Q33.65 39.45 34.425 40.225Q35.2 41 36.35 41ZM36.35 9.7Q36.35 9.7 36.35 9.7Q36.35 9.7 36.35 9.7Q36.35 9.7 36.35 9.7Q36.35 9.7 36.35 9.7Q36.35 9.7 36.35 9.7Q36.35 9.7 36.35 9.7Q36.35 9.7 36.35 9.7Q36.35 9.7 36.35 9.7ZM11.7 24Q11.7 24 11.7 24Q11.7 24 11.7 24Q11.7 24 11.7 24Q11.7 24 11.7 24Q11.7 24 11.7 24Q11.7 24 11.7 24Q11.7 24 11.7 24Q11.7 24 11.7 24ZM36.35 38.3Q36.35 38.3 36.35 38.3Q36.35 38.3 36.35 38.3Q36.35 38.3 36.35 38.3Q36.35 38.3 36.35 38.3Q36.35 38.3 36.35 38.3Q36.35 38.3 36.35 38.3Q36.35 38.3 36.35 38.3Q36.35 38.3 36.35 38.3Z"
  },{
    width: 48, height: 48,
    name: "Thumb Up",
    body: "M35.8 42H13.6V16.4L27.5 2L29.45 3.55Q29.75 3.8 29.9 4.25Q30.05 4.7 30.05 5.35V5.85L27.8 16.4H42.75Q43.95 16.4 44.85 17.3Q45.75 18.2 45.75 19.4V23.5Q45.75 23.85 45.825 24.225Q45.9 24.6 45.75 24.95L39.45 39.45Q39 40.5 37.975 41.25Q36.95 42 35.8 42ZM16.6 39H36.45Q36.45 39 36.45 39Q36.45 39 36.45 39L42.75 24.05V19.4Q42.75 19.4 42.75 19.4Q42.75 19.4 42.75 19.4H24.1L26.75 6.95L16.6 17.65ZM16.6 17.65V19.4Q16.6 19.4 16.6 19.4Q16.6 19.4 16.6 19.4V24.05V39Q16.6 39 16.6 39Q16.6 39 16.6 39ZM13.6 16.4V19.4H6.95V39H13.6V42H3.95V16.4Z"
  },{
    width: 48, height: 48,
    name: "Person Add",
    body: "M36.5 28V21.5H30V18.5H36.5V12H39.5V18.5H46V21.5H39.5V28ZM18 23.95Q14.7 23.95 12.6 21.85Q10.5 19.75 10.5 16.45Q10.5 13.15 12.6 11.05Q14.7 8.95 18 8.95Q21.3 8.95 23.4 11.05Q25.5 13.15 25.5 16.45Q25.5 19.75 23.4 21.85Q21.3 23.95 18 23.95ZM2 40V35.3Q2 33.55 2.9 32.125Q3.8 30.7 5.4 30Q9.15 28.35 12.075 27.675Q15 27 18 27Q21 27 23.925 27.675Q26.85 28.35 30.55 30Q32.15 30.75 33.075 32.15Q34 33.55 34 35.3V40ZM5 37H31V35.3Q31 34.5 30.6 33.775Q30.2 33.05 29.35 32.7Q25.85 31 23.375 30.5Q20.9 30 18 30Q15.1 30 12.625 30.525Q10.15 31.05 6.6 32.7Q5.85 33.05 5.425 33.775Q5 34.5 5 35.3ZM18 20.95Q19.95 20.95 21.225 19.675Q22.5 18.4 22.5 16.45Q22.5 14.5 21.225 13.225Q19.95 11.95 18 11.95Q16.05 11.95 14.775 13.225Q13.5 14.5 13.5 16.45Q13.5 18.4 14.775 19.675Q16.05 20.95 18 20.95ZM18 16.45Q18 16.45 18 16.45Q18 16.45 18 16.45Q18 16.45 18 16.45Q18 16.45 18 16.45Q18 16.45 18 16.45Q18 16.45 18 16.45Q18 16.45 18 16.45Q18 16.45 18 16.45ZM18 30Q18 30 18 30Q18 30 18 30Q18 30 18 30Q18 30 18 30Q18 30 18 30Q18 30 18 30Q18 30 18 30Q18 30 18 30Z"
  },{
    name: "Public",
    width: 48, height: 48,
    body: "M24 44Q19.85 44 16.2 42.425Q12.55 40.85 9.85 38.15Q7.15 35.45 5.575 31.8Q4 28.15 4 24Q4 19.85 5.575 16.2Q7.15 12.55 9.85 9.85Q12.55 7.15 16.2 5.575Q19.85 4 24 4Q28.15 4 31.8 5.575Q35.45 7.15 38.15 9.85Q40.85 12.55 42.425 16.2Q44 19.85 44 24Q44 28.15 42.425 31.8Q40.85 35.45 38.15 38.15Q35.45 40.85 31.8 42.425Q28.15 44 24 44ZM21.85 40.95V36.85Q20.1 36.85 18.9 35.55Q17.7 34.25 17.7 32.5V30.3L7.45 20.05Q7.2 21.05 7.1 22.025Q7 23 7 24Q7 30.5 11.225 35.35Q15.45 40.2 21.85 40.95ZM36.55 35.55Q38.75 33.15 39.875 30.175Q41 27.2 41 24Q41 18.7 38.1 14.375Q35.2 10.05 30.35 8.05V8.95Q30.35 10.7 29.15 12Q27.95 13.3 26.2 13.3H21.85V17.65Q21.85 18.5 21.175 19.05Q20.5 19.6 19.65 19.6H15.5V24H28.4Q29.25 24 29.8 24.65Q30.35 25.3 30.35 26.15V32.5H32.5Q33.95 32.5 35.05 33.35Q36.15 34.2 36.55 35.55Z"
  }]
};

export const actionAssets = loadAssets(actions);

export const socialAssets = loadAssets(social);
