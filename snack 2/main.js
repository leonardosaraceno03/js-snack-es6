let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];
  const arrayTarghe = students.map((Element)=> {
    return Element.name.slice(0).toUpperCase();
  });
  console.log(arrayTarghe)
  //1 completato
  const students70 = students.filter((Element)=>{
    return Element.grades >= 70;
  })
  console.log(students70);
  //2 completato
  const students120 = students.filter((Element)=> {
    return Element.grades >= 70 && Element.id >= 120;
  })
  console.log(students120)
  //3 completato





  