///////////////////////// PARAMETERS / GLOBALS
let timeline = [];
const numberOfTrials = 2;
const HOLD_DURATION = 2000;
const PREP_DURATION = 2000;
const MOVE_DURATION = 2000;
const PREP_ERROR_MESSAGE_DISPLAY_LENGTH = 5000;
const PREP_INSTRUCTION_DURATION = 10000;
let times = "";
let currentKeyIsUp = true;
let runExperiment  = false;
const instructionsToPatient = "Task is about to begin. Instructions will follow.";
const instructionForFixation = "This is the Fixation block.<br> If you see a red circle in the middle, please press the space and keep it depressed. <br> Please press the space bar now, and hold it through this block and the next (Preparation) block. ";
const instructionForPrep = "Keep holding the space bar through this block until the next block appears. <br> You will see a blue target, but don't press it yet! <br> The middle circle will turn green when the next block appears and this is your GO signal. <br>In this example a blue target appears on the left";
const instructionForMove = "Now you may lift the space bar and press the blue circle. <br>After pressing the blue circle, a new trial will begin and you will be back to the Fixation block.<br> The experiment will now begin. ";
const pressKeyToContinue = "-Press any key to continue-";

/// pressing q w e together will exit experiment
let keyQ = false;
let keyW = false;
let keyE = false;

//////////////INSTRUCTIONS

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
    prompt: "<h2>" + instructionForMove + "</h2>",
    on_finish: function (data) {
        //move trial from 0 to 1 since after this is beginning of trials
        trialNumber++;
    }
};

///////////////////////// SET UP TRIALS

// top button:
let blueTopButtonPrep = {
    type: 'html-button-response',
    stimulus: '<span class="red fixation-dimensions"></span>',
    choices: [''],
    trial_duration: PREP_DURATION,
    margin_vertical: -300,
    margin_horizontal: 0,
    button_html: '<button class="blue-topbtn target-dimensions">%choice%</button>',
    on_finish: function (data) {
        times += Date.now().toString() + ", top target PREP end\n";
        console.log('blueTopButton prep end');
    },
    on_load: function (data) {
        times += Date.now().toString() + ", top target PREP start\n";
        console.log('blueTopButton prep start');
    }
};

let blueTopButtonMove = {
    type: 'html-button-response',
    stimulus: '<span class="green fixation-dimensions"></span>',
    choices: [''],
    trial_duration: MOVE_DURATION,
    margin_vertical: -300,
    margin_horizontal: 0,
    button_html: '<button class="blue-topbtn target-dimensions">%choice%</button>',
    on_finish: function (data) {
        times += Date.now().toString() + ", top target MOVE end\n";
        console.log('blueTopButton move end.');
    },
    on_load: function (data) {
        times += Date.now().toString() + ", top target MOVE start\n";
        console.log('blueTopButton move start.');
    }
};

// bottom button:
let blueBottomButtonPrep = {
    type: 'html-button-response',
    stimulus: '<span class="red fixation-dimensions"></span>',
    choices: [''],
    trial_duration: PREP_DURATION,
    margin_vertical: -300,
    margin_horizontal: 0,
    button_html: '<button class="blue-bottombtn target-dimensions">%choice%</button>',
    on_finish: function (data) {
        times += Date.now().toString() + ", bottom target PREP end\n";
        console.log('blueTopButton prep end');
    },
    on_load: function (data) {
        times += Date.now().toString() + ", bottom target PREP start\n";
        console.log('blueTopButton prep start');
    }
};

let blueBottomButtonMove = {
    type: 'html-button-response',
    stimulus: '<span class="green fixation-dimensions"></span>',
    choices: [''],
    trial_duration: MOVE_DURATION,
    margin_vertical: -300,
    margin_horizontal: 0,
    button_html: '<button class="blue-bottombtn target-dimensions">%choice%</button>',
    on_finish: function (data) {
        times += Date.now().toString() + ", bottom target MOVE end\n";
        console.log('blueTopButton move end.');
    },
    on_load: function (data) {
        times += Date.now().toString() + ", bottom target MOVE start\n";
        console.log('blueTopButton move start.');
    }
};

// right button:
let blueRightButtonPrep = {
    type: 'html-button-response',
    stimulus: '<span class="red fixation-dimensions"></span>',
    choices: [''],
    trial_duration: PREP_DURATION,
    margin_vertical: -120,
    margin_horizontal: 0,
    button_html: '<button class="blue-rightbtn target-dimensions">%choice%</button>',
    on_finish: function (data) {
        times += Date.now().toString() + ", right target PREP end\n";
        console.log('blueTopButton prep end');
    },
    on_load: function (data) {
        times += Date.now().toString() + ", right target PREP start\n";
        console.log('blueTopButton prep start');
    }
};

let blueRightButtonMove = {
    type: 'html-button-response',
    stimulus: '<span class="green fixation-dimensions"></span>',
    choices: [''],
    trial_duration: MOVE_DURATION,
    margin_vertical: -120,
    margin_horizontal: 0,
    button_html: '<button class="blue-rightbtn target-dimensions">%choice%</button>',
    on_finish: function (data) {
        times += Date.now().toString() + ", right target MOVE end\n";
        console.log('blueTopButton move end.');
    },
    on_load: function (data) {
        times += Date.now().toString() + ", right target MOVE start\n";
        console.log('blueTopButton move start.');
    }
};

// left button:
let blueLeftButtonPrep = {
    type: 'html-button-response',
    stimulus: '<span class="red fixation-dimensions"></span>',
    choices: [''],
    trial_duration: PREP_DURATION,
    margin_vertical: -120,
    margin_horizontal: 0,
    button_html: '<button class="blue-leftbtn target-dimensions">%choice%</button>',
    on_finish: function (data) {
        times += Date.now().toString() + ", left target PREP end\n";
        console.log('blueTopButton prep end');
    },
    on_load: function (data) {
        times += Date.now().toString() + ", left target PREP start\n";
        console.log('blueTopButton prep start');
    }
};

let blueLeftButtonMove = {
    type: 'html-button-response',
    stimulus: '<span class="green fixation-dimensions"></span>',
    choices: [''],
    trial_duration: MOVE_DURATION,
    margin_vertical: -120,
    margin_horizontal: 0,
    button_html: '<button class="blue-leftbtn target-dimensions">%choice%</button>',
    on_finish: function (data) {
        times += Date.now().toString() + ", left target MOVE end\n";
        console.log('blueTopButton move end.');
    },
    on_load: function (data) {
        times += Date.now().toString() + ", left target MOVE start\n";
        console.log('blueTopButton move start.');
    }
};

let fixation = {
    type: 'html-keyboard-response',
    stimulus: '<span class="red fixation-dimensions"></span>',
    choices: jsPsych.NO_KEYS,
    trial_duration: HOLD_DURATION,
    on_finish: function (data) {
        times += Date.now().toString() + ", FixationFinish\n";
        console.log('fixation trial finished.');
    },
    on_load: function () {
        times += Date.now().toString() + ", FixationLoad\n";
        console.log('fixation trial loaded.');
    }
};

////////////////////////
// SET UP BLOCKS
////////////////////////


//top button block
let top_button = {
    timeline: [fixation, blueTopButtonPrep, blueTopButtonMove],
    randomize_order: false,
    repetitions: 1
};

//buttom button block
let buttom_button = {
    timeline: [fixation, blueBottomButtonPrep, blueBottomButtonMove],
    randomize_order: false,
    repetitions: 1
};

//right button block
let right_button = {
    timeline: [fixation, blueRightButtonPrep, blueRightButtonMove],
    randomize_order: false,
    repetitions: 1
};

//left button block
let left_button = {
    timeline: [fixation, blueLeftButtonPrep, blueLeftButtonMove],
    randomize_order: false,
    repetitions: 1
};


///////////////////
/// CREATE TIMELINE
//////////////////


// cant figure out how to randomize properly - ideally only such block will be needed
// intead of the skanky stuff I have below
let blk1 = {
    timeline: [right_button, top_button, buttom_button, left_button],
    randomize_order: false,
    repetitions: 1
};

let blk2 = {
    timeline: [top_button, right_button, left_button, buttom_button ],
    randomize_order: false,
    repetitions: 1
};
let blk3 = {
    timeline: [left_button, right_button, buttom_button, top_button ],
    randomize_order: false,
    repetitions: 1
};

let blk4 = {
    timeline: [buttom_button, top_button,  left_button, right_button],
    randomize_order: false,
    repetitions: 1
};

// experiment instructions
// let exp_instructions = {
//     type: 'instructions',
//     pages: [
//         'Welcome to the experiment. Click next to begin.',
//         'This is the second page of instructions.',
//         'This is the final page.'],
// show_clickable_nav: true
// }

// timeline.push(exp_instructions);
// parameters if just running a check on stimuli location



//timeline.push(blk1);







///////////////////
/// KEYBOARD CALLBACKS
//////////////////


document.onkeyup = function (e) {
    if (e.keyCode == 32) {
        times += Date.now().toString() + ", KeyUp\n";
        currentKeyIsUp = true;
    }
    // check if q w e are lifted up NOW
    if ("q".localeCompare(e.key)) {
        keyQ = false;
    }
    if ("w".localeCompare(e.key)) {
        keyW = false;
    }
    if ("e".localeCompare(e.key)) {
        keyE = false;
    }

}

document.onkeydown = function (e) {
    if (e.keyCode == 32 && currentKeyIsUp) {
        times += Date.now().toString() + ", KeyDown\n";
        currentKeyIsUp = false;
    }

    // check if q w e are depressed NOW
    if ("q".localeCompare(e.key)) {
        keyQ = true;
    }
    if ("w".localeCompare(e.key)) {
        keyW = true;
    }
    if ("e".localeCompare(e.key)) {
        keyE = true;
    }
    if (keyQ && keyW && keyE) {
//             jsPsych.finishTrial();
//             jsPsych.endExperiment();
    }

}

///////////////////
/// CREATE TIMELINE
//////////////////

//initialize the trial and display the statistics at end.
jsPsych.init({
    timeline: [instructions, instructionsForFixationBlock, instructionsForPrepBlock, instructionsForMoveBlock],
    on_finish: function () {
        let filename = "task_" + Date.now().toString() + ".csv";
        saveData(times, filename);
        //jsPsych.data.displayData();

    }
});

///////////////////
/// SAVE DATA
//////////////////
var saveData = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, fileName) {
        var json = data,
            blob = new Blob([json], { type: "octet/stream" }),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());
