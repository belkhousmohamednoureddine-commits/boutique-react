
const Resultat = ({ nom, note , absences}) => {
  return (
    <div>
      {nom}: {note}

      {note >= 16 && <p>aw</p>}

      {absences && <p>absences : {absences}</p> }
    </div>
  );
};

export default Resultat
