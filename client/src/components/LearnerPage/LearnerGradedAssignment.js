import React, { useEffect, useState } from "react";
import "./Learner.css";
import API from "../../utils/API";

function LearnerGradedAssignment(props) {
  const [gradedInfo, setGradedInfo] = useState({
    title: "",
    grader: "",
    graderComments: "",
    grade: ""
  })

  useEffect(() => {
    API.getAllPostsByUser(props.userName)
      .then(allData => {
        console.log("Getting all posts from user 'LearnerGradedAssignment.js")
        console.log(allData.data)


        var gradedAssignments = []

        for (let i = 0; i < allData.data.length; i++){
          if (allData.data[i].grade !== "ungraded") {

            gradedAssignments.push(allData.data[i])
          }
        }

        if (gradedAssignments.length === 0){
          gradedAssignments.push({
            title: "",
            grader: "",
            graderComments: "",
            grade: ""
          })
        }

        setGradedInfo(gradedAssignments[gradedAssignments.length - 1])

      })
      .catch(err => console.log(err));
  }, []);

  return (

    <div className="learnerAssignBox"> 
    {
    (gradedInfo.title === "") ? <h4> <span role="img" aria-label="monkeyEmoji">🙈</span> Oops, Sorry! No grades to display yet!</h4> : 
    <>
      <h4>Lesson: {gradedInfo.title} </h4>
      <hr />
      <center><h1 className="gradeOnLearnerDash">{gradedInfo.grade}</h1></center>
      <h4>{gradedInfo.grader} said...</h4>
      <h5 className="assignComment">"{gradedInfo.graderComments}"
      <br/></h5>
      </>
    }
      
      <img alt="" className="learnerIMG" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDY0IDY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZTBlNWViO30uY2xzLTJ7ZmlsbDojOTRhMWIyO30uY2xzLTN7ZmlsbDojZjY0ZjdkO30uY2xzLTR7ZmlsbDojZmNiZjRhO30uY2xzLTV7ZmlsbDojNGY5ZmY2O30uY2xzLTZ7ZmlsbDojYmVjN2Q2O30uY2xzLTd7ZmlsbDojNWU2OTdiO30uY2xzLTh7ZmlsbDojM2Y3NmQzO30uY2xzLTl7ZmlsbDojMTgxODFmO308L3N0eWxlPjwvZGVmcz48ZyBkYXRhLW5hbWU9IkRhdGEiIGlkPSJEYXRhLTIiPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI1Ni4zIDQ4LjMzIDU2LjMgMTMuMDQgOC4wNyAxMy4wNCA4LjA3IDUzLjA4IDU0LjE3IDUzLjA4IDU2LjMgNDguMzMiLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iOC4wNyA0NC42NSA4LjA3IDUzLjA4IDU0LjE3IDUzLjA4IDU2LjMgNDguMzMgNTYuMyA0NC42NSA4LjA3IDQ0LjY1Ii8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMjIuNjgsMTEuNjlBMTAuNjgsMTAuNjgsMCwxLDAsMzMuMzYsMjIuMzdIMjIuNjhaIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMjYuNjYsNy43VjE4LjM4SDM3LjM0QTEwLjY4LDEwLjY4LDAsMCwwLDI2LjY2LDcuNyIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTQyLjQ2LDIzLjY1aDcuMDhhMi4zOCwyLjM4LDAsMSwxLDAsNC43NUg0Mi40NmEyLjM4LDIuMzgsMCwxLDEsMC00Ljc1Ii8+PHBhdGggY2xhc3M9ImNscy01IiBkPSJNMzUuMDgsMzMuMTdINDkuNTRhMi4zOCwyLjM4LDAsMSwxLDAsNC43NkgzNS4wOGEyLjM4LDIuMzgsMCwxLDEsMC00Ljc2Ii8+PHBvbHlnb24gY2xhc3M9ImNscy02IiBwb2ludHM9IjU2LjMgNDguMzMgNTYuMyAxMy4wNCA0OC4xIDEzLjA0IDQ4LjEgNTMuMDggNTUuOTQgNTMuMDggNTYuMyA0OC4zMyIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtNyIgcG9pbnRzPSI0OC4xIDQ0LjY1IDQ4LjEgNTMuMDggNTUuOTQgNTMuMDggNTYuMyA0OC4zMyA1Ni4zIDQ0LjY1IDQ4LjEgNDQuNjUiLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik00LDQ4LjMzdjQuNTJhMy40NCwzLjQ0LDAsMCwwLDMuNDUsMy40NGg0OS4xQTMuNDQsMy40NCwwLDAsMCw2MCw1Mi44NVY0OC4zM0g0Mi44OFY1MGExLjU5LDEuNTksMCwwLDEtMS41OSwxLjU5SDIyLjcxQTEuNTksMS41OSwwLDAsMSwyMS4xMiw1MFY0OC4zM1oiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik01Mi44Nyw0OC4zM3Y0LjUyYTMuNDQsMy40NCwwLDAsMS0zLjQ1LDMuNDRoNy4xM0EzLjQ0LDMuNDQsMCwwLDAsNjAsNTIuODVWNDguMzNaIi8+PHBhdGggY2xhc3M9ImNscy04IiBkPSJNNDguMSwzMy4xN3Y0Ljc2aDEuNDRhMi4zOCwyLjM4LDAsMSwwLDAtNC43NloiLz48cGF0aCBjbGFzcz0iY2xzLTgiIGQ9Ik00OC4xLDIzLjY1djQuNzZoMS40NGEyLjM4LDIuMzgsMCwxLDAsMC00Ljc2WiIvPjxwYXRoIGNsYXNzPSJjbHMtOSIgZD0iTTYwLDQ3LjMzSDU3LjNWMTNhMSwxLDAsMCwwLTEtMUgzNi40NmExMS43LDExLjcsMCwwLDAtOS44LTUuMzMsMSwxLDAsMCwwLTEsMVYxMmgtMnYtLjM1YTEsMSwwLDAsMC0xLTFBMTEuNjMsMTEuNjMsMCwwLDAsMTcuMjMsMTJINy43YTEsMSwwLDAsMC0xLDFWNDcuMzNINGExLDEsMCwwLDAtMSwxdjQuNTJhNC40NCw0LjQ0LDAsMCwwLDQuNDUsNC40NGg0OS4xQTQuNDQsNC40NCwwLDAsMCw2MSw1Mi44NVY0OC4zM0ExLDEsMCwwLDAsNjAsNDcuMzNaTTI3LjY2LDguNzZhOS42OSw5LjY5LDAsMCwxLDguNjMsOC42MkgyNy42NlptLTUsMTQuNjFIMzIuM0E5LjY4LDkuNjgsMCwxLDEsMjEuNjgsMTIuNzR2OS42M0ExLDEsMCwwLDAsMjIuNjgsMjMuMzdaTTE0LjUsMTRhMTEuNjgsMTEuNjgsMCwxLDAsMTkuODYsOC4zMywxLDEsMCwwLDAtMS0xSDIzLjY4VjE0aDJ2NC4zNGExLDEsMCwwLDAsMSwxSDM3LjM0YTEsMSwwLDAsMCwxLTFBMTEuNjUsMTEuNjUsMCwwLDAsMzcuNSwxNEg1NS4zVjQzLjY1SDguN1YxNFpNOC43LDQ1LjY1SDU1LjN2MS42OEg0Mi44OGExLDEsMCwwLDAtMSwxVjUwYS42LjYsMCwwLDEtLjU5LjU5SDIyLjcxYS42LjYsMCwwLDEtLjU5LS41OVY0OC4zM2ExLDEsMCwwLDAtMS0xSDguN1pNNTksNTIuODVhMi40NSwyLjQ1LDAsMCwxLTIuNDUsMi40NEg3LjQ1QTIuNDUsMi40NSwwLDAsMSw1LDUyLjg1VjQ5LjMzSDIwLjEyVjUwYTIuNiwyLjYsMCwwLDAsMi41OSwyLjU5SDQxLjI5QTIuNiwyLjYsMCwwLDAsNDMuODgsNTB2LS43MUg1OVoiLz48cGF0aCBjbGFzcz0iY2xzLTkiIGQ9Ik00Mi40NiwyOS40aDcuMDhhMy4zOCwzLjM4LDAsMSwwLDAtNi43NUg0Mi40NmEzLjM4LDMuMzgsMCwxLDAsMCw2Ljc1Wm0wLTQuNzVoNy4wOGExLjM4LDEuMzgsMCwxLDEsMCwyLjc1SDQyLjQ2YTEuMzgsMS4zOCwwLDEsMSwwLTIuNzVaIi8+PHBhdGggY2xhc3M9ImNscy05IiBkPSJNMzUuMDgsMzguOTNINDkuNTRhMy4zOCwzLjM4LDAsMSwwLDAtNi43NkgzNS4wOGEzLjM4LDMuMzgsMCwwLDAsMCw2Ljc2Wm0wLTQuNzZINDkuNTRhMS4zOCwxLjM4LDAsMSwxLDAsMi43NkgzNS4wOGExLjM4LDEuMzgsMCwwLDEsMC0yLjc2WiIvPjwvZz48L3N2Zz4="></img>
    </div>

  );
}

export default LearnerGradedAssignment;