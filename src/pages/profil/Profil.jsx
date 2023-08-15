import React from "react";
import App from "../../containers/App";
import "../profil/profil.css";
import { useFetch } from "../../services/hooks/Request";
import Loader from "../../utils/loader/Loader";
import Daily from "../../components/graph/daily-activity/Daily";
import Intensity from "../../components/graph/intensity/Intensity";
import Score from "../../components/graph/score/Score";
import Duration from "../../components/graph/duration/duration";

function Profil() {
  const { data, isLoading, error } = useFetch(`http://localhost:3000/user/12`);
  const userData = data?.data;
  if (error) {
    return <span>Il y a un problème</span>;
  }
  return (
    <App>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="content-profil">
          <div className="container-hello">
            <div className="hello">Bonjour</div>
            <span className="user-name">{userData.userInfos.firstName}</span>
          </div>
          <span className="congrats">
            Félicitation ! Vous avez explosé vos objectifs hier{" "}
          </span>
          <div className="container-datas">
            <div className="container-graph">
              <div className="daily-graph">
                <Daily />
              </div>
              <div className="container-graph-bottom">
                <div className="duration-graph">
                  <Duration />
                </div>
                <div className="intensity-graph">
                  <Intensity />
                </div>
                <div className="score-graph">
                  <Score />
                </div>
              </div>
            </div>
            <div className="wrapper-key-data"></div>
          </div>
        </div>
      )}
    </App>
  );
}

export default Profil;
