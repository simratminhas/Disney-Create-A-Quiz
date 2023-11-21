//Create A Quiz By Simrat

//Event Listener
document.getElementById("btn").addEventListener("click", checkAnswers);

// Check answer code in function
function checkAnswers() {
  //INPUT
  let answer1 = document.getElementById("incredibles-in").value.toLowerCase();
  let answer2 = document.getElementById("mickey-in").value.toLowerCase();
  let answer3 = document.getElementById("dory-in").value.toLowerCase();
  let answer4 = document.getElementById("lionKing-in").value.toLowerCase();

  let outputEl = document.getElementById("output");

  //Count Variables
  let numMark = 0;

  // Output Question/Answer 1
  if (answer1 === "edna" || answer1 === "edna mode") {
    document.getElementById("incredibles-out").innerHTML = `<p>Correct</p>`;
    document.getElementById("incredibles-out").style.color = "green";
    document.getElementById("incredibles-in").style.borderColor = "green";
    numMark = numMark + 1;
  } else {
    document.getElementById("incredibles-out").innerHTML = `<p>Incorrect</p>`;
    document.getElementById("incredibles-out").style.color = "red";
    document.getElementById("incredibles-in").style.borderColor = "red";
  }

  // Output Question/Answer 2
  if (answer2 === "hotdog" || answer2 === "hotdog!") {
    document.getElementById("mickey-out").innerHTML = `<p>Correct</p>`;
    document.getElementById("mickey-out").style.color = `green`;
    document.getElementById("mickey-in").style.borderColor = `green`;
    numMark = numMark + 1;
  } else {
    document.getElementById("mickey-out").innerHTML = `<p>Incorrect</p>`;
    document.getElementById("mickey-out").style.color = "red";
    document.getElementById("mickey-in").style.borderColor = "red";
  }

  //Output Question/Answer 3
  if (answer3 === "short term memory loss" || answer3 === "memory loss") {
    document.getElementById("dory-out").innerHTML = `<p>Correct</p>`;
    document.getElementById("dory-out").style.color = "green";
    document.getElementById("dory-in").style.borderColor = "green";
    numMark = numMark + 1;
  } else {
    document.getElementById("dory-out").innerHTML = `<p>Incorrect</p>`;
    document.getElementById("dory-out").style.color = "red";
    document.getElementById("dory-in").style.borderColor = "red";
  }

  //Output Answer/Question 4
  if (answer4 === "simba") {
    document.getElementById("lionKing-out").innerHTML = `<p>Correct</p>`;
    document.getElementById("lionKing-out").style.color = "green";
    document.getElementById("lionKing-in").style.borderColor = `green`;
    numMark = numMark + 1;
  } else {
    document.getElementById("lionKing-out").innerHTML = `<p>Incorrect</p>`;
    document.getElementById("lionKing-out").style.color = `red`;
    document.getElementById("lionKing-in").style.borderColor = `red`;
  }
  //Mark Test
  let mark = numMark / 4;
  if (mark === 1) {
    outputEl.innerHTML = Math.round(mark * 10) / 10;
    outputEl.innerHTML = `<p>4/4 (100%)</p>
<p>Impressive!</p>`;
  } else if (mark === 0.75) {
    outputEl.innerHTML = Math.round(mark * 10) / 10;
    outputEl.innerHTML = `<p> 3/4 (75%)</p>
<p>Good Work!</p>`;
  } else if (mark === 0.5) {
    outputEl.innerHTML = Math.round(mark * 10) / 10;
    outputEl.innerHTML = `<p>2/4 (50%)</p>
<p>Almost There!</p>`;
  } else if (mark === 0.25) {
    outputEl.innerHTML = Math.round(mark * 10) / 10;
    outputEl.innerHTML = `<p> 1/4 (25%)</p>
<p>Better Luck Next Time!</p>`;
  } else {
    outputEl.innerHTML = Math.round(mark * 10) / 10;
    outputEl.innerHTML = `<p> 0/4 (0%)</p>
<p>Keep Trying and Don't Give Up!</p>`;
  }
}
