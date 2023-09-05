import React from "react";
import App from "../../containers/App";
import "../profil/profil.css";
import { useFetch } from "../../services/hooks/useFetch";
import Loader from "../../utils/loader/Loader";
import Daily from "../../components/graph/daily-activity/Daily";
import Intensity from "../../components/graph/intensity/Intensity";
import Score from "../../components/graph/score/Score";
import Duration from "../../components/graph/duration/Duration";
import { useParams } from "react-router-dom";
import KeyData from "../../components/key-data/KeyData";
import BlackDot from "../../assets/dot-black.png";
import RedDot from "../../assets/dot-red.png";
// import { useMock } from "../../services/hooks/useMock";

function Profil() {
  let { id } = useParams();

  // Custom hook to use real datas from backend
  const {
    datas: { user, activities, average, performances },
    isLoading,
    error,
  } = useFetch([
    {
      url: `http://localhost:3000/user/${id}`,
      key: "user",
    },
    {
      url: `http://localhost:3000/user/${id}/activity`,
      key: "activities",
    },
    {
      url: `http://localhost:3000/user/${id}/average-sessions`,
      key: "average",
    },
    {
      url: `http://localhost:3000/user/${id}/performance`,
      key: "performances",
    },
  ]);

  // Custom hook to use mocked datas
  // const {
  //   datas: { user, activities, average, performances },
  //   isLoading,
  //   error,
  // } = useMock(["user", "activities", "average", "performances"], id);

  const days = ["L", "M", "M", "J", "V", "S", "D"];

  if (error) {
    return <span>Il y a un problème</span>;
  }

  const formatDatasDailyGraph = () => {
    return activities.sessions.map((activity, index) => {
      return {
        name: index.toString(),
        poids: activity.kilogram,
        calories: activity.calories / 4,
      };
    });
  };
  const formatDatasDurationGraph = () => {
    return average.sessions.map((aver, index) => {
      return {
        day: days[index],
        sessionLength: aver.sessionLength,
      };
    });
  };

  const formatDatasPerformanceGraph = () => {
    return performances.data
      .map((performance) => {
        return {
          subject: performances.kind[performance.kind],
          value: performance.value,
          kind: performance.kind,
        };
      })
      .reverse();
  };

  const formatDatasScoreGraph = () => {
    return [
      {
        name: "Group A",
        value: user.todayScore,
      },
    ];
  };

  return (
    <App>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="content-profil">
          <div className="container-hello">
            <div className="hello">Bonjour</div>
            <span className="user-name">{user.userInfos.firstName}</span>
          </div>
          <span className="congrats">
            Félicitations ! Vous avez explosé vos objectifs hier
          </span>
          <div className="container-datas">
            <div className="container-graph">
              <div className="daily-graph">
                <div className="daily-graph-text">
                  <h2 className="daily-graph-title">Activité quotidienne</h2>
                  <div className="daily-graph-legend">
                    <div className="daily-graph-container-mass">
                      <img
                        className="daily-graph-black-dot"
                        src={BlackDot}
                        alt="black dot"
                      />
                      <span className="daily-graph-mass">Poids (kg)</span>
                    </div>
                    <div className="daily-graph-container-calories">
                      <img
                        className="daily-graph-red-dot"
                        src={RedDot}
                        alt="red dot"
                      />
                      <span className="daily-graph-calories">
                        Calories brûlées (kCal)
                      </span>
                    </div>
                  </div>
                </div>
                <Daily datas={formatDatasDailyGraph()} />
              </div>
              <div className="container-graph-bottom">
                <div className="duration-graph">
                  <h2 className="duration-graph-title">
                    Durée moyenne des sessions
                  </h2>
                  <Duration datas={formatDatasDurationGraph()} />
                </div>
                <div className="intensity-graph">
                  <Intensity datas={formatDatasPerformanceGraph()} />
                </div>
                <div className="container-score-graph">
                  <h2 className="score-title">Score</h2>
                  <div className="score-graph">
                    <div className="score-text">
                      <span className="score-percentage">
                        {user.todayScore * 100}%
                      </span>
                      <span className="score-objectiv">de votre objectif</span>
                    </div>
                    <Score
                      datas={formatDatasScoreGraph()}
                      size={(user.todayScore * 100 * 360) / 100}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper-key-data">
              <KeyData
                labelItem="fire"
                datas={user.keyData.calorieCount}
                unit="kCal"
                type="Calories"
              />
              <KeyData
                labelItem="chicken"
                datas={user.keyData.proteinCount}
                unit="g"
                type="Protéines"
              />
              <KeyData
                labelItem="apple"
                datas={user.keyData.carbohydrateCount}
                unit="g"
                type="Glucides"
              />
              <KeyData
                labelItem="burger"
                datas={user.keyData.lipidCount}
                unit="g"
                type="Lipides"
              />
            </div>
          </div>
        </div>
      )}
    </App>
  );
}

export default Profil;
