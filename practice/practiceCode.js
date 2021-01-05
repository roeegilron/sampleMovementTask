///////////////////////// PARAMETERS / GLOBALS
let timeline = [];
const numberOfTrials = 2;
const HOLD_DURATION = 2000;
const PREP_DURATION = 2000;
const MOVE_DURATION = 2000;
let times = "";
let currentKeyIsUp = true;
let runExperiment  = false;


/// pressing q w e together will exit experiment
let keyQ = false;
let keyW = false;
let keyE = false;


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



timeline.push(blk1);



///////////////////
/// CREATE TIMELINE
//////////////////

//initialize the trial and display the statistics at end.
jsPsych.init({
    timeline: timeline,
    display_element: 'jspsych-target'
});


