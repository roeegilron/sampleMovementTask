
	////////////////////////
    // PARAMETERS / GLOBALS
    ////////////////////////

	let timeline = [];
    const version = "1";
	 // note that one trials consist of all 4 targets appearing once
	// so numberOfTrials  = 2 will give you 8 trials with each target appearing twice
    const numberOfTrials = 15;
    const HOLD_DURATION = 2000;
    const PREP_DURATION = 2000;
    const MOVE_DURATION = 2000;
    const END_MESSAGE_DURATION = 5000;
    const PREP_ERROR_MESSAGE_DISPLAY_LENGTH = 5000;
    let times = "";
    let currentKeyIsUp = true;
    let runExperiment  = false;
    const instructionsToPatient = "When you see the red circle, press and hold spacebar. Hit the blue targets when the middle circle turns green.";
    const finishMessageToPatient = "Your experiment has finished. Thank you!"
    const pressKeyToContinue = "-Press any key to continue-";
    const errorMessageInPrepBlock = "Trial Skipped! Please wait until the red circle changes color from red to green before trying to hit the blue target.";
    const instructionForFixation = "This is the Fixation block. You will need to press the space bar and hold it through this block and the next (Preparation) block. <br>Please press space bar now";
    const instructionForPrep = "Keep holding the space bar through this block until the next block appears. The middle circle will turn green when the next block appears. <br>This is an example of a left circle Preparation block";
    const instructionForMove = "Now you may lift the space bar and press the blue circle. After pressing the blue circle, a new trial will begin and you will be back to the Fixation block.";

    let skipNextTrial = false;
    let trialNumber = 1;

    /// pressing q w e together will exit experiment
    let keyQ = false;
    let keyW = false;
    let keyE = false;




	////////////////////////
    // SET UP TRIALS
    ////////////////////////

    // top button:
    let blueTopButtonPrep = {
        type: 'html-button-response',
        stimulus: '<span class="red fixation-dimensions"></span>',
        choices: [''],
        trial_duration: PREP_DURATION,
        button_html: '<button onclick="skipNextTrialFunc()" class="blue-topbtn target-dimensions">%choice%</button>',
        on_finish: function (data) {
            if(skipNextTrial){
                times += "Trial: " + trialNumber + ", " + Date.now().toString() + ", top target PREP end, SKIPPED\n";
                console.log('blueTopButton prep skipped end');
            }
            else{
                times += "Trial: " + trialNumber + ", " + Date.now().toString() + ", top target PREP end\n";
                console.log('blueTopButton prep end');
            }
        },
        on_load: function (data) {
            times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", top target PREP start\n";
            console.log('blueTopButton prep start');
        }
    };

    let blueTopButtonMove = {
        type: 'html-button-response',
        stimulus: '<span class="green fixation-dimensions"></span>',
        choices: [''],
        trial_duration: MOVE_DURATION,
        button_html: '<button class="blue-topbtn target-dimensions">%choice%</button>',
        on_finish: function (data) {
            if(skipNextTrial){
                times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", top target MOVE end, SKIPPED\n";
                console.log('blueTopButton move skipped end.');
                skipNextTrial = false;
            }
            else{
                times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", top target MOVE end\n";
                console.log('blueTopButton move end.');
            }
            trialNumber++;
        },
        on_load: function (data) {
            if(skipNextTrial){
                times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", top target MOVE start, SKIPPED\n";
                console.log('blueTopButton move skipped start.');
                jsPsych.finishTrial();
            }
            else{
                times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", top target MOVE start\n";
                console.log('blueTopButton move start.');
            }

        }
    };

    // bottom button:
    let blueBottomButtonPrep = {
        type: 'html-button-response',
        stimulus: '<span class="red fixation-dimensions"></span>',
        choices: [''],
        trial_duration: PREP_DURATION,
        button_html: '<button onclick="skipNextTrialFunc()" class="blue-bottombtn target-dimensions">%choice%</button>',
        on_finish: function (data) {
            if(skipNextTrial){
                times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", bottom target PREP end, SKIPPED\n";
                console.log('blueTopButton prep skipped end');
            }
            else{
                times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", bottom target PREP end\n";
                console.log('blueTopButton prep end');
            }
        },
        on_load: function (data) {
            times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", bottom target PREP start\n";
            console.log('blueTopButton prep start');
        }
    };

    let blueBottomButtonMove = {
        type: 'html-button-response',
        stimulus: '<span class="green fixation-dimensions"></span>',
        choices: [''],
        trial_duration: MOVE_DURATION,
        button_html: '<button class="blue-bottombtn target-dimensions">%choice%</button>',
        on_finish: function (data) {
            if(skipNextTrial){
                times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", bottom target MOVE end, SKIPPED\n";
                console.log('blueTopButton move skipped end.');
                skipNextTrial = false;
            }
            else{
                times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", bottom target MOVE end\n";
                console.log('blueTopButton move end.');
            }
            trialNumber++;
        },
        on_load: function (data) {
            if(skipNextTrial){
                times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", bottom target MOVE start, SKIPPED\n";
                console.log('blueTopButton move skipped start.');
                jsPsych.finishTrial();
            }
            else{
                times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", bottom target MOVE start\n";
                console.log('blueTopButton move start.');
            }
        }
    };

    // right button:
    let blueRightButtonPrep = {
        type: 'html-button-response',
        stimulus: '<span class="red fixation-dimensions"></span>',
        choices: [''],
        trial_duration: PREP_DURATION,
        button_html: '<button onclick="skipNextTrialFunc()" class="blue-rightbtn target-dimensions">%choice%</button>',
        on_finish: function (data) {
            if(skipNextTrial){
                times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", right target PREP end, SKIPPED\n";
                console.log('blueTopButton prep skipped end');
            }
            else{
                times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", right target PREP end\n";
                console.log('blueTopButton prep end');
            }
        },
        on_load: function (data) {
            times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", right target PREP start\n";
            console.log('blueTopButton prep start');
        }
    };

    let blueRightButtonMove = {
        type: 'html-button-response',
        stimulus: '<span class="green fixation-dimensions"></span>',
        choices: [''],
        trial_duration: MOVE_DURATION,
        button_html: '<button class="blue-rightbtn target-dimensions">%choice%</button>',
        on_finish: function (data) {
            if(skipNextTrial){
                times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", right target MOVE end, SKIPPED\n";
                console.log('blueTopButton move skipped end.');
                skipNextTrial = false;
            }
            else{
                times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", right target MOVE end\n";
                console.log('blueTopButton move end.');
            }
            trialNumber++;
        },
        on_load: function (data) {
            if(skipNextTrial){
                times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", right target MOVE start, SKIPPED\n";
                console.log('blueTopButton move skipped start.');
                jsPsych.finishTrial();
            }
            else{
                times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", right target MOVE start\n";
                console.log('blueTopButton move start.');
            }

        }
    };

    // left button:
    let blueLeftButtonPrep = {
        type: 'html-button-response',
        stimulus: '<span class="red fixation-dimensions"></span>',
        choices: [''],
        trial_duration: PREP_DURATION,
        button_html: '<button onclick="skipNextTrialFunc()" class="blue-leftbtn target-dimensions">%choice%</button>',
        on_finish: function (data) {
            if(skipNextTrial){
                times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", left target PREP end, SKIPPED\n";
                console.log('blueTopButton prep skipped end');
            }
            else{
                times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", left target PREP end\n";
                console.log('blueTopButton prep end');
            }
        },
        on_load: function (data) {
            times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", left target PREP start\n";
            console.log('blueTopButton prep start');
        }
    };

    let blueLeftButtonMove = {
        type: 'html-button-response',
        stimulus: '<span class="green fixation-dimensions"></span>',
        choices: [''],
        trial_duration: MOVE_DURATION,
        button_html: '<button class="blue-leftbtn target-dimensions">%choice%</button>',
        on_finish: function (data) {
            if(skipNextTrial){
                times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", left target MOVE end, SKIPPED\n";
                console.log('blueTopButton move skipped end.');
                skipNextTrial = false;
            }
            else{
                times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", left target MOVE end\n";
                console.log('blueTopButton move end.');
            }
            trialNumber++;
        },
        on_load: function (data) {
            if(skipNextTrial){
                times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", left target MOVE start, SKIPPED\n";
                console.log('blueTopButton move skipped start.');
                jsPsych.finishTrial();
            }
            else{
                times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", left target MOVE start\n";
                console.log('blueTopButton move start.');
            }

        }
    };

    let fixation = {
        type: 'html-keyboard-response',
        stimulus: '<span class="red fixation-dimensions"></span>',
        choices: jsPsych.NO_KEYS,
        trial_duration: HOLD_DURATION,
        on_finish: function (data) {
            times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", FixationFinish\n";
            console.log('fixation trial finished.');
        },
        on_load: function () {
            times += "Trial: "  + trialNumber + ", " + Date.now().toString() + ", FixationLoad\n";
            console.log('fixation trial loaded.');
        }
    };


	////////////////////////
    // SET UP INSTRUCTIONS
    ////////////////////////

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
        trial_duration: 10000,
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

    let finishedExperiement = {
        type: "html-keyboard-response",
        stimulus: "<h3>" + finishMessageToPatient + "</h3><br><h2>" + pressKeyToContinue + "</h2>",
        trial_duration: END_MESSAGE_DURATION,
    }

    function skipNextTrialFunc() {
        skipNextTrial = true;
        document.getElementById("error-header").innerHTML = errorMessageInPrepBlock;
        jsPsych.pauseExperiment();
        setTimeout(function(){
            document.getElementById("error-header").innerHTML = '';
            jsPsych.resumeExperiment();
        }, PREP_ERROR_MESSAGE_DISPLAY_LENGTH);
    }

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
    //both instructions and finish message included
    jsPsych.init({
        timeline: [instructions, instructionsForFixationBlock, instructionsForPrepBlock, instructionsForMoveBlock].concat(jsPsych.randomization.repeat([top_button, buttom_button, right_button, left_button], numberOfTrials)).concat([finishedExperiement]),
        display_element: 'jspsych-target',
        on_finish: function () {
            let filename = "task_" + Date.now().toString() + "_ver" + version + ".csv";
            saveData(times, filename);
            //jsPsych.data.displayData();

        }
    });

    /*
    //instructions included but no finish message
    jsPsych.init({
        timeline: [instructions].concat(jsPsych.randomization.repeat([top_button, buttom_button, right_button, left_button], numberOfTrials)),
        on_finish: function () {
            let filename = "task_" + Date.now().toString() + ".csv";
            saveData(times, filename);
            //jsPsych.data.displayData();

        }
    });
    */

    /*
    //no instructions but finish message included
    jsPsych.init({
        timeline: jsPsych.randomization.repeat([top_button, buttom_button, right_button, left_button], numberOfTrials).concat([finishedExperiement]),
        on_finish: function () {
            let filename = "task_" + Date.now().toString() + ".csv";
            saveData(times, filename);
            //jsPsych.data.displayData();

        }
    });
     */

    /*
    //neither instructions or finish message included
    jsPsych.init({
        timeline: jsPsych.randomization.repeat([top_button, buttom_button, right_button, left_button], numberOfTrials),
        on_finish: function () {
            let filename = "task_" + Date.now().toString() + ".csv";
            saveData(times, filename);
            //jsPsych.data.displayData();

        }
    });
     */

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