import React from 'react'

const Resultat2 = ({nom ,note}) => {
  return (
    <div>
      {nom} : {note >= 16 ? "admin" : "ajourn" }
      
    </div>
  )
}

export default Resultat2
