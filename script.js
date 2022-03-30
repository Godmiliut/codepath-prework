//  Global constants
const cluePauseTime = 333; //how long to pause in between clues.
const nextClueWaitTime = 1000; //how long to wait before starting to playback of the clue sequence.

//  Global Variables
var pattern = [5, 2, 4, 3, 6, 1, 4, 6];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 120; // how long to hold each clue's light/sound.
var mistakes = 0; // keeps track of how many times the user fails to guess.
var timeLimit = 10;  // the time, in seconds, has to take a guess before the game gives them a strike.
var timerID; // This will be the interval of the timer to be started / stopped.

document.getElementById("backgroundMusic").play();  //Starts background music.

function startGame(){
  //  initialize game variables
  progress = 0;
  mistakes = 0;
  clueHoldTime = 125;
  document.getElementById("level").classList.remove("hidden"); // Show the level tag once the game starts.
  document.getElementById("backgroundMusic").pause(); // Stop the background music in order to avoid distracting the user.
  //  Set a random pattern for each game.
  for(let i= 0; i< pattern.length; i++)
    pattern[i] = Math.floor((Math.random() * 6) + 1);
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  stopTimer();
  gamePlaying = false;
  clearXMarks();
  document.getElementById("level").classList.add("hidden"); // hide the level tag when the game is not running.
  //  swap again the Start and Stop Buttons once the game has finished.
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("backgroundMusic").play(); // resume the background music if the game is not in process.
}

function lightButton(btn){
  document.getElementById("button" + btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button" + btn).classList.remove("lit")
}

function showXMark(strk){
  document.getElementById("strike" + strk).classList.remove("hidden");
}

function clearXMarks(){
  for(let i = 1; i <= 3; i++)
  document.getElementById("strike" + i).classList.add("hidden");
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn); //Set a time interval between clues so they do not overlap.
  }
}

function guess(btn){
  // No need to check a guess if the game hasn't started.
  if(!gamePlaying){
    return;
  }
  if(btn == pattern[guessCounter]){
    if(guessCounter == progress){ //Check if the user has completed the clue sequence.
      if(progress == pattern.length - 1){
        //  If the user has reached the end of the pattern, that means victory!
        winGame();
      }
      else{
        //  If not increment the progress variable and continue to the next clue sequence
        stopTimer()
        progress++;
        playClueSequence();
      }
    }
    else{
      // If the user has not reached the end of the clue sequence, just increment the guessCounter variable.
      guessCounter++;
    }
  }
  else{
    //Each wrong move is counted!
    mistakes++;
    stopTimer();
    showXMark(mistakes);
    playClueSequence();
    //  Three mistakes and you're out :(
  if(mistakes > 2)
    loseGame();
  }
}

function playClueSequence(){
  guessCounter = 0;
  clueHoldTime -= 5; // decrease the time interval between clues to make the game faster as it progresses.
  document.getElementById("level").innerHTML= "Level: " + (progress+1); 
  context.resume();
  let delay = nextClueWaitTime; // set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  timerID = setInterval(startTimer, 1000) // Once the sequence start to appear, start the timer.
}

function loseGame(){
  stopGame();
  document.getElementById("defeatSound").play();
  alert("Oof! Better luck next time!");
}

function winGame(){
  stopGame();
  document.getElementById("victorySound").play();
  alert("WOW! YOU ROCK!");
}
// Sound Synthesis Functions
const freqMap = {
  1: 200,
  2: 150,
  3: 260,
  4: 400,
  5: 80,
  6: 320
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

function startTimer(){
  document.getElementById("timer").innerHTML = "Time Left: " + timeLimit;
  document.getElementById("timer").classList.remove("hidden");
  timeLimit--;
  //  If the timer reaches zero, add a strike and check if the user has lost.
   if(timeLimit < 0){
    mistakes++;
    stopTimer();
    showXMark(mistakes);
    playClueSequence();
  if(mistakes > 2)
    loseGame();
   }
}

function stopTimer(){
  clearInterval(timerID) // stop updating the timer on display.
  document.getElementById("timer").classList.add("hidden");
  timerID = 0;
  timeLimit = 10; // set the time left back to 10;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)