module.exports={
  rules:[
    {
      pattern:/\/api\/getlifelist.php/,
      respondwith:'./lifelist.json'
    },
    {
      pattern:/\/api\/zhijgood.php/,
      respondwith:'./zhijgood.json'
    }
  ]
}
