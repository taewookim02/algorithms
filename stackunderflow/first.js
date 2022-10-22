function gradingStudents(grades) {
  let gradesList = [];
  // get original grade
  grades.forEach((grade, i) => {
    gradesList.push(grade);
  });

  // check original grade < 40 return original (break)
  const newGradesList = gradesList.map((grade, i) => {
    let nextMultipleFive;
    // check if grade < 40
    if (grade < 38) return console.log(grade);

    // get next multiple of 5
    if (grade % 5 == 0) {
      nextMultipleFive = Math.floor(grade / 5) * 5;
    } else {
      nextMultipleFive = Math.floor(grade / 5) * 5 + 5;
    }
    // find difference between original vs next multiple of 5
    const difference = nextMultipleFive - grade; // = 3
    if (difference < 3) {
      grade = nextMultipleFive;
      return console.log(grade);
    } else {
      return console.log(grade);
    }
    // console.log(nextMultipleFive);
  });
}

gradingStudents([73, 67, 38, 33]);
