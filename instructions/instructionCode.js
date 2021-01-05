///////////////////////// PARAMETERS / GLOBALS
const PREP_INSTRUCTION_DURATION = 10000;
const instructionsToPatient = "Task is about to begin. Instructions will follow.";
const instructionForFixation = "This is the Fixation block.<br> If you see a red circle in the middle, please press the space and keep it depressed. <br> Please press the space bar now, and hold it through this block and the next (Preparation) block. ";
const instructionForPrep = "Keep holding the space bar through this block until the next block appears. <br> You will see a blue target, but don't press it yet! <br> The middle circle will turn green when the next block appears and this is your GO signal. <br>In this example a blue target appears on the left";
const instructionForMove = "Now you may lift the space bar and press the blue circle. <br>After pressing the blue circle, a new trial will begin and you will be back to the Fixation block.<br>";
const pressKeyToContinue = "-Press any key to continue-";
const INSTRUCTION_COMPLETE = "You are now ready to begin practice"

let instructions = {
    type: "html-keyboard-response",
    stimulus: "<h3>" + instructionsToPatient + "</h3><br><h2>" + pressKeyToContinue + "</h2>"
};

let instructionsForFixationBlock = {
    type: "html-keyboard-response",
    stimulus: '<span class="red fixation-dimensions"></span>',
    choices: [' '],
    prompt: "<h2>" + instructionForFixation + "</h2>"
};

let instructionsForPrepBlock = {
    type: 'html-button-response',
    stimulus: '<span class="red fixation-dimensions"></span>',
    choices: [''],
    trial_duration: PREP_INSTRUCTION_DURATION,
    button_html: '<button class="blue-leftbtn target-dimensions">%choice%</button>',
    prompt: "<h2>" + instructionForPrep + "</h2>"
};

let instructionsForMoveBlock = {
    type: 'html-button-response',
    stimulus: '<span class="green fixation-dimensions"></span>',
    choices: [''],
    button_html: '<button class="blue-leftbtn target-dimensions">%choice%</button>',
    prompt: "<h2>" + instructionForMove + "</h2>"
};

let finishInstructions = {
    type: "html-keyboard-response",
    choices: jsPsych.ALL_KEYS,
    stimulus: "<div>"+
        "<div  '><h1>" + INSTRUCTION_COMPLETE + "</h1><h3>Press any key to go back to the main menu</h3></div>" +
        "</div>",
    on_finish: function () {
        window.history.back();
    }
};

jsPsych.init({
    timeline: [instructions, instructionsForFixationBlock, instructionsForPrepBlock, instructionsForMoveBlock, finishInstructions],
    display_element: 'jspsych-target'
});