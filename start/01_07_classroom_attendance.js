function getStudent(classRoom) {
  let { hasTechingAssistant, classList } = classRoom;
  let teacher, teachingAssistant, students;

  if(hasTechingAssistant) {
    [teacher, teachingAssistant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }
  
  // let last = [...classList];
  // console.log(`Last :: `, last.pop());
  return students;
}


const classRoom = {
  hasTechingAssistant: false,
  classList : ["John", "Larry", "Elon", "Tim", "Sundar"]
}

console.log(getStudent(classRoom));