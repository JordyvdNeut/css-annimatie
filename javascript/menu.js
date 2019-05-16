/*
  Class:    4A7B
  Name:     Jordy van der Neut
  Purpose:  JavaScript periode 04

  dd-mm-yyyy  Description
  ==========  ==========================================
  18-05-2018  Initial
*/
	var isDropped = false;  //default: not droppped, check css

	function toggleSubMenu() {

	  isDropped = !isDropped; //toggle
	  
	  if (isDropped) document.getElementById("submenu_01").style.display = "block";
	  else           document.getElementById("submenu_01").style.display = "none";
	  
	  closeAllExercise();
	}

	function closeAllExercise() {  //and result

	  document.getElementById("result").style.display = "none";
	  document.getElementById("output_exercise_01").style.display = "none";
	}

	function showExcercise(exercise) {

	  closeAllExercise();
	  
	  switch (exercise) {
	  
		case "exercise_01":
		document.getElementById("output_exercise_01").style.display = "block";
		break;
	  }
	  
	  document.getElementById("result").style.display = "block";
	}
