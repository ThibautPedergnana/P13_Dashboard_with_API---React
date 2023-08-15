import React from "react";
import App from "../../containers/App";
import { useFetch } from "../../services/hooks/Request";
// import ProfilCard from "../../components/profil-card/ProfilCard";

function Home() {
  let myFetches = [];
  myFetches.push(useFetch(`http://localhost:3000/user/12`));
  myFetches.push(useFetch(`http://localhost:3000/user/18`));

  console.log(myFetches);
  return (
    <App>
      <div>Accueil</div>
      <div>
        {/* {myFetches.map((profil, index) => (
          <ProfilCard
            key={"profil-card" + index}
            firstName={firstName}
            lastName={lastName}
          />
        ))} */}
      </div>
    </App>
  );
}

export default Home;
