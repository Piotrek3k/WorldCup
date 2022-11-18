import Group from './Group';
import { countries } from 'country-flag-icons'
import GroupStage from './GroupStage';
import './App.css';


const groupAcountries = [

  {
    id: 1,
    name: "Qatar",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/QA.svg"
  },
  {
    id: 2,
    name: "Ecuador",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/EC.svg"
  },
  {
    id: 3,
    name: "Senegal",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/SN.svg"
  },
  {
    id: 4,
    name: "Netherlands",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/NL.svg"
  }
  
]
const groupBcountries = [
  {
    id: 5,
    name: "England",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_England_%28bordered%29.png"
  },
  {
    id: 6,
    name: "Iran",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/IR.svg"
  },
  {
    id: 7,
    name: "United States",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
  },
  {
    id: 8,
    name: "Wales",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_Wales_%281959%29.svg"
  }
]
const groupCcountries = [
  {
    id: 9,
    name: "Argentina",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/AR.svg"
  },
  {
    id: 10,
    name: "Saudi Arabia",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/SA.svg"
  },
  {
    id: 11,
    name: "Mexico",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/MX.svg"
  },
  {
    id: 12,
    name: "Poland",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/PL.svg"
  }
]
const groupDcountries = [
  {
    id: 13,
    name: "France",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"
  },
  {
    id: 14,
    name: "Australia",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg"
  },
  {
    id: 15,
    name: "Denmark",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/DK.svg"
  },
  {
    id: 16,
    name: "Tunisia",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/TN.svg"
  }
]
const groupEcountries = [
  {
    id: 17,
    name: "Spain",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg"
  },
  {
    id: 18,
    name: "Germany",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg"
  },
  {
    id: 19,
    name: "Japan",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg"
  },
  {
    id: 20,
    name: "Costa Rica",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/CR.svg"
  }
]
const groupFcountries = [
  {
    id: 21,
    name: "Belgium",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/BE.svg"
  },
  {
    id: 22,
    name: "Canada",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/CA.svg"
  },
  {
    id: 23,
    name: "Morocco",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/MA.svg"
  },
  {
    id: 24,
    name: "Croatia",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/HR.svg"
  }
]
const groupGcountries = [
  {
    id: 25,
    name: "Brazil",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg"
  },
  {
    id: 26,
    name: "Serbia",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/RS.svg"
  },
  {
    id: 27,
    name: "Switzerland",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/CH.svg"
  },
  {
    id: 28,
    name: "Cameroon",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/CM.svg"
  }
]
const groupHcountries = [
  
  {
    id: 29,
    name: "Portugal",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/PT.svg"
  },
  {
    id: 30,
    name: "Ghana",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/GH.svg"
  },
  {
    id: 31,
    name: "Uruguay",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/UY.svg"
  },
  {
    id: 32,
    name: "South Korea",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/KR.svg"
  }
]
const groupA = {
  id:101,
  name: "Group A",
  countries: groupAcountries
}
const groupB = {
  id:102,
  name: "Group B",
  countries: groupBcountries
}
const groupC = {
  id:103,
  name: "Group C",
  countries: groupCcountries
}
const groupD = {
  id:104,
  name: "Group D",
  countries: groupDcountries
}
const groupE = {
  id:105,
  name: "Group E",
  countries: groupEcountries
}
const groupF = {
  id:106,
  name: "Group F",
  countries: groupFcountries
}
const groupG = {
  id:107,
  name: "Group G",
  countries: groupGcountries
}
const groupH = {
  id:108,
  name: "Group H",
  countries: groupHcountries
}
const groups = [groupA,groupB,groupC,groupD,groupE,groupF,groupG,groupH]
function App() {
  return (
    <div>
    <div> ble ble</div>
    <GroupStage groups = {groups}/>
    
    </div>
  )
}

export default App;
