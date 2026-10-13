
"use strict";

// ============================================================
// CTS INTERVIEW PRACTICE TEST
// JAVASCRIPT
// ============================================================


// ============================================================
// QUESTION BANK
//
// All correct answers and explanations are based on
// the uploaded CTS interview study notes.
//
// Each question contains:
//
// category     = Question category
// question     = Question shown to the user
// correct      = Correct answer
// incorrect    = Three believable incorrect answers
// explanation  = Explanation shown after a correct answer
//
// Incorrect answers are plausible distractors, often
// rearranging steps or combining similar ideas.
// ============================================================

const questionBank = [

    // ========================================================
    // POSITION AND MOTIVATION
    // ========================================================

    {
        category: "INTERVIEW PREPARATION",

        question:
            "Why are you interested in the CTS position at East Campus?",

        correct:
            "I want to continue serving the East Campus community while growing my IT career through hands-on technology support.",

        incorrect: [
            "I want to continue serving East Campus while concentrating primarily on tutoring and programming instruction.",
            "I want to develop my IT career by focusing mainly on software programming instead of campus technology support.",
            "I want to support the campus community by concentrating on administrative work rather than hardware and classroom technology."
        ],

        explanation:
            "I want to keep serving the East Campus community while I grow my IT career, and this role combines the two. I already help students with technical problems as a tutor, and I enjoy that part of my job the most. This position lets me focus on the hardware, classroom, and network side. I've also watched the CTS team fix projectors and set up for events around campus, and I've seen how much faculty and students rely on that work. I'd like to be part of it."
    },

    {
        category: "CAMPUS TECHNOLOGY SERVICES",

        question:
            "Which description best explains the responsibilities of Campus Technology Services?",

        correct:
            "CTS supports classroom technology, computer equipment, faculty and staff offices, digital signage, CCTV, and campus events.",

        incorrect: [
            "CTS primarily supports classroom instruction, tutoring sessions, programming assignments, and student learning activities.",
            "CTS focuses on desktop computers and software installations but does not provide classroom or event technology support.",
            "CTS handles equipment moves and computer refreshes while faculty independently manage Smart classroom equipment and campus events."
        ],

        explanation:
            "CTS is part of OIT, with a team on each campus. You support the technology in classrooms, libraries, common areas, and faculty and staff offices. That covers desktop support like problem resolution, software installs, printer support, equipment moves, and computer refreshes, plus digital signage and CCTV across campus. You also support events with things like PA systems, wireless mics, and video streaming, and you train faculty on Smart classroom technology."
    },

    {
        category: "CAMPUS TECHNOLOGY SERVICES",

        question:
            "Which group of technologies is specifically associated with CTS event support?",

        correct:
            "PA systems, wireless microphones, and video streaming.",

        incorrect: [
            "Software installations, computer refreshes, and equipment moves.",
            "Printer support, desktop troubleshooting, and office computers.",
            "Digital signage, CCTV, and classroom computer replacements."
        ],

        explanation:
            "CTS supports campus events using technologies such as PA systems, wireless microphones, and video streaming. These responsibilities are separate from its desktop support duties, which include problem resolution, software installation, printer support, equipment moves, and computer refreshes."
    },

    {
        category: "CAMPUS TECHNOLOGY SERVICES",

        question:
            "Why is a quick CTS response especially important when classroom technology stops working?",

        correct:
            "A delay in resolving the classroom problem can leave an entire class waiting.",

        incorrect: [
            "A delay primarily prevents technicians from completing equipment refreshes on schedule.",
            "A delay mainly affects documentation because the support ticket cannot be completed immediately.",
            "A delay is important because faculty must first be trained on all classroom technology before troubleshooting can begin."
        ],

        explanation:
            "From working on East Campus, I've seen how quickly the CTS team responds when a classroom has a problem, because a delay means a whole class is waiting. Faculty and students rely on CTS to keep classroom technology functioning."
    },


    // ========================================================
    // GENERAL TROUBLESHOOTING
    // ========================================================

    {
        category: "TROUBLESHOOTING",

        question:
            "What is the first step in the general troubleshooting process?",

        correct:
            "Identify the problem by asking questions, finding out what changed, and reproducing the issue.",

        incorrect: [
            "Establish a probable cause, implement a solution, and ask questions after verifying functionality.",
            "Document the findings, test a probable cause, and reproduce the issue after completing the repair.",
            "Begin by implementing a solution, then identify the user's original problem through follow-up questions."
        ],

        explanation:
            "Step 1: Identify the problem. Ask the user questions, find out what changed, back up data if needed, and reproduce the problem. This is the identification stage of the general troubleshooting process."
    },

    {
        category: "TROUBLESHOOTING",

        question:
            "After identifying a technical problem, what should a technician do next?",

        correct:
            "Establish a theory of probable cause, beginning with the obvious and simplest possibilities.",

        incorrect: [
            "Immediately implement the most likely solution without testing the suspected cause.",
            "Document the final outcome and verify the system before investigating possible causes.",
            "Escalate the issue before considering simple problems such as power, cables, or settings."
        ],

        explanation:
            "Step 2: Establish a theory of probable cause. Start with the obvious and simple causes. Examples from the notes include checking power, cables, or settings before considering more complicated explanations."
    },

    {
        category: "TROUBLESHOOTING",

        question:
            "Which action is an example of testing a troubleshooting theory?",

        correct:
            "Swap a cable or try another computer to determine whether the suspected cause is responsible.",

        incorrect: [
            "Replace the computer immediately and document the repair before confirming the cause.",
            "Ask the user to monitor the problem without performing any tests to verify the theory.",
            "Skip testing the suspected cause and move directly to preventive measures."
        ],

        explanation:
            "Step 3: Test the theory. For example, you might swap a cable or try another computer. Testing helps determine whether the suspected cause is correct. If the theory is wrong, form a new theory or escalate."
    },

    {
        category: "TROUBLESHOOTING",

        question:
            "What should you do when your initial troubleshooting theory is incorrect?",

        correct:
            "Form a new theory and test it, or escalate the issue when necessary.",

        incorrect: [
            "Continue implementing the original solution and verify the results after completing the repair.",
            "Document the original theory as the confirmed cause and move to the next support ticket.",
            "Ask the user to repeat the same unsuccessful steps without reconsidering the possible cause."
        ],

        explanation:
            "Step 3: Test the theory. If it's wrong, form a new theory or escalate. The purpose of testing is to determine whether your explanation for the problem is actually correct."
    },

    {
        category: "TROUBLESHOOTING",

        question:
            "Once the cause of a technical issue has been identified, what is the next appropriate action?",

        correct:
            "Establish a plan of action and implement the solution while following change management procedures.",

        incorrect: [
            "Close the support ticket immediately because identifying the cause completes the troubleshooting process.",
            "Implement a solution before considering any plan, then determine whether the change was appropriate.",
            "Begin documenting preventive measures without applying the solution to the existing problem."
        ],

        explanation:
            "Step 4: Establish a plan of action and implement the solution. Once I find the cause, I fix it while following change management procedures and keeping disruption low."
    },

    {
        category: "TROUBLESHOOTING",

        question:
            "What should a technician do after implementing a solution?",

        correct:
            "Verify full system functionality with the user and put preventive measures in place.",

        incorrect: [
            "Document the solution without checking whether the user's original problem has been resolved.",
            "Immediately close the ticket and wait for the user to report the same problem again.",
            "Return to identifying the original problem without testing whether the repair worked."
        ],

        explanation:
            "Step 5: Verify full system functionality and put preventive measures in place. After fixing the problem, I verify everything works with the user and take steps to prevent it from happening again, like showing them what to watch for."
    },

    {
        category: "TROUBLESHOOTING",

        question:
            "Which sequence correctly describes the six general troubleshooting steps?",

        correct:
            "Identify the problem, establish a theory, test the theory, implement a solution, verify functionality, and document.",

        incorrect: [
            "Identify the problem, implement a solution, document the outcome, establish a theory, test the theory, and verify functionality.",
            "Establish a theory, test the theory, document the outcome, identify the problem, implement a solution, and verify functionality.",
            "Identify the problem, verify functionality, establish a theory, document findings, test the theory, and implement a solution."
        ],

        explanation:
            "The six troubleshooting steps are:\n\n1. Identify the problem by asking questions, finding out what changed, backing up data if needed, and reproducing the problem.\n\n2. Establish a theory of probable cause, beginning with simple causes.\n\n3. Test the theory. If it is wrong, form a new theory or escalate.\n\n4. Establish a plan of action and implement the solution.\n\n5. Verify full system functionality and put preventive measures in place.\n\n6. Document findings, actions, and the outcome."
    },


    // ========================================================
    // COMMUNICATION
    // ========================================================

    {
        category: "COMMUNICATION",

        question:
            "What is the best approach when explaining technical information to someone without a technical background?",

        correct:
            "Use simple language, relatable analogies, and visuals that explain how the technology affects their work.",

        incorrect: [
            "Focus on detailed technical terminology so the user understands the complete technical process.",
            "Give the user the technical solution without explaining how it relates to their problem.",
            "Explain every hardware and network component before describing how the technology helps the user."
        ],

        explanation:
            "I explain technical terms to non-technical people by using simple language, relatable analogies, and visuals, focusing on how the technology solves their problems and impacts their daily work."
    },

    {
        category: "COMMUNICATION",

        question:
            "Which analogy would you use to explain a firewall to a non-technical user?",

        correct:
            "A security guard who checks what enters and leaves a building.",

        incorrect: [
            "A technician who repairs electrical equipment when a computer loses power.",
            "A support desk that organizes incoming requests according to urgency.",
            "A classroom assistant who explains how to operate presentation equipment."
        ],

        explanation:
            "I would explain a firewall as a security guard who checks what enters and leaves a building. Instead of focusing on technical details, I explain how it protects their information and helps keep their systems secure."
    },


    // ========================================================
    // COMPUTER HARDWARE
    // ========================================================

    {
        category: "HARDWARE TROUBLESHOOTING",

        question:
            "What should you check first when a computer will not turn on?",

        correct:
            "Check the power cable and confirm that the power button is functioning correctly.",

        incorrect: [
            "Investigate the motherboard before confirming whether the computer is receiving power.",
            "Replace the power supply before testing the power cable or electrical outlet.",
            "Restart network equipment and verify the computer's internet settings."
        ],

        explanation:
            "First, I check the power cable and make sure the power button is functioning correctly. Next, I test the computer using a different power outlet to rule out a problem with the power source. If the computer still doesn't turn on, I investigate possible hardware issues, such as a faulty power supply unit (PSU) or motherboard."
    },

    {
        category: "HARDWARE TROUBLESHOOTING",

        question:
            "After checking the power cable and power button, what should you try if a computer still will not turn on?",

        correct:
            "Test the computer with a different power outlet to rule out a problem with the power source.",

        incorrect: [
            "Immediately replace the motherboard because the original power cable appears connected.",
            "Check the computer's network settings before confirming the electrical power source.",
            "Document the issue as a faulty PSU without performing any additional power tests."
        ],

        explanation:
            "After checking the power cable and power button, I test the computer using a different power outlet to rule out a problem with the power source. If it still doesn't turn on, I investigate hardware issues, such as the PSU or motherboard."
    },

    {
        category: "HARDWARE TROUBLESHOOTING",

        question:
            "If a computer still does not turn on after checking the cable, power button, and outlet, which components should be investigated?",

        correct:
            "The power supply unit (PSU) or motherboard.",

        incorrect: [
            "The Wi-Fi connection or Ethernet settings.",
            "The printer connection or print queue.",
            "The classroom PA system or wireless microphone."
        ],

        explanation:
            "If the computer still doesn't turn on after checking its power cable, power button, and a different electrical outlet, I investigate possible hardware issues, such as a faulty power supply unit (PSU) or motherboard."
    },


    // ========================================================
    // NETWORK TROUBLESHOOTING
    // ========================================================

    {
        category: "NETWORK TROUBLESHOOTING",

        question:
            "What is the first action when a user reports that they cannot connect to the internet?",

        correct:
            "Check whether the computer is connected to Wi-Fi or Ethernet.",

        incorrect: [
            "Restart all network equipment before determining whether the computer has a connection.",
            "Change the computer's network settings before checking Wi-Fi or Ethernet connectivity.",
            "Assume the internet has been restored and perform a final connection test."
        ],

        explanation:
            "First, I check if the computer is connected to Wi-Fi or Ethernet. Then, I test the connection and check the network settings. If needed, I restart the network equipment. Finally, I test the internet again to make sure it works."
    },

    {
        category: "NETWORK TROUBLESHOOTING",

        question:
            "After confirming whether a computer is connected to Wi-Fi or Ethernet, what should you do next?",

        correct:
            "Test the connection and check the network settings.",

        incorrect: [
            "Immediately restart all network equipment without testing the connection or settings.",
            "Document the problem as resolved because the computer shows a network connection.",
            "Replace computer hardware before investigating the existing network configuration."
        ],

        explanation:
            "After checking whether the computer is connected to Wi-Fi or Ethernet, I test the connection and check the network settings. If needed, I restart the network equipment, then test the internet again."
    },

    {
        category: "NETWORK TROUBLESHOOTING",

        question:
            "How do you confirm that an internet connectivity issue has been resolved?",

        correct:
            "Test the internet connection again after completing the necessary troubleshooting steps.",

        incorrect: [
            "Assume the issue is fixed once the network equipment has been restarted.",
            "Close the ticket immediately after reviewing the computer's network settings.",
            "Ask the user to wait without performing another connection test."
        ],

        explanation:
            "First, I check if the computer is connected to Wi-Fi or Ethernet. Then, I test the connection and check the network settings. If needed, I restart the network equipment. Finally, I test the internet again to make sure it works."
    },


    // ========================================================
    // SUPPORT AND ESCALATION
    // ========================================================

    {
        category: "TECHNICAL SUPPORT",

        question:
            "What should you do when you cannot resolve a user's technical problem immediately?",

        correct:
            "Explain the delay, ask a senior technician for help if needed, and keep the user updated.",

        incorrect: [
            "Continue troubleshooting without explaining the delay until you eventually find a solution.",
            "Immediately close the support ticket and ask the user to submit another request later.",
            "Escalate every unresolved issue without researching it or informing the user."
        ],

        explanation:
            "I explain the delay to the user, ask for help from a senior if needed, and keep the user updated until the problem is resolved."
    },

    {
        category: "TECHNICAL SUPPORT",

        question:
            "How should you prioritize multiple support tickets?",

        correct:
            "Prioritize issues by urgency and how many people they affect, handling the most critical problems first.",

        incorrect: [
            "Prioritize tickets mainly by how quickly each one can be completed, regardless of how many users are affected.",
            "Work through the tickets in the order received without considering urgency or the number of affected users.",
            "Prioritize the most complicated technical issue first, even when another problem affects an entire classroom."
        ],

        explanation:
            "I prioritize issues based on how urgent they are and how many people they affect. I handle the most critical problems first and keep users updated on when their issues will be resolved."
    },

    {
        category: "TECHNICAL SUPPORT",

        question:
            "If you do not know how to fix an IT issue, what is the most appropriate response?",

        correct:
            "Research the problem, try basic troubleshooting, ask an experienced technician for help if needed, and update the user.",

        incorrect: [
            "Continue trying the same troubleshooting step until the problem resolves without requesting assistance.",
            "Immediately send the issue to another technician without researching it or attempting basic troubleshooting.",
            "Tell the user the issue cannot be fixed because the solution is not immediately known."
        ],

        explanation:
            "I would research the problem and try basic troubleshooting steps. If I still couldn't fix it, I would ask a more experienced technician for help and keep the user updated."
    },


    // ========================================================
    // DOCUMENTATION
    // ========================================================

    {
        category: "DOCUMENTATION",

        question:
            "What information should be included when documenting a completed support ticket?",

        correct:
            "Clear notes describing the problem, the troubleshooting steps attempted, and their results.",

        incorrect: [
            "Only the final solution, without recording the earlier troubleshooting steps or results.",
            "A description of the user's original complaint without explaining which actions were performed.",
            "Only the name of the technician and the time spent investigating the issue."
        ],

        explanation:
            "I write clear notes on each ticket explaining the problem, what I tried, and the results. This helps others understand the issue and avoid repeating the same work."
    },

    {
        category: "DOCUMENTATION",

        question:
            "Why is documenting technical troubleshooting important?",

        correct:
            "It helps other technicians understand the issue and avoid repeating work that has already been performed.",

        incorrect: [
            "It eliminates the need to verify that a system is functioning correctly after a repair.",
            "It replaces the need to communicate with the user during troubleshooting.",
            "It allows a technician to skip testing probable causes when similar problems occur."
        ],

        explanation:
            "I write clear notes on each ticket explaining the problem, what I tried, and the results. This helps others understand the issue and avoid repeating the same work. Documenting the findings, actions, and outcome is the sixth troubleshooting step."
    },


    // ========================================================
    // PRINTER TROUBLESHOOTING
    // ========================================================

    {
        category: "PRINTER TROUBLESHOOTING",

        question:
            "What should you check first when a printer is not working?",

        correct:
            "Check that the printer is powered on, has paper and ink, and is properly connected.",

        incorrect: [
            "Restart the printer and computer before checking the printer's power, supplies, or connection.",
            "Check for stuck print jobs without first confirming whether the printer has power or paper.",
            "Replace the printer before investigating its connection, supplies, or error messages."
        ],

        explanation:
            "First, I check if the printer is turned on, has paper and ink, and is properly connected. Then, I check for error messages or stuck print jobs. If needed, I restart the printer and computer. Finally, I test the printer to make sure it works."
    },

    {
        category: "PRINTER TROUBLESHOOTING",

        question:
            "After confirming a printer has power, paper, ink, and a proper connection, what should you investigate?",

        correct:
            "Check for printer error messages or stuck print jobs.",

        incorrect: [
            "Immediately restart the printer and computer without reviewing possible printer errors.",
            "Perform a final printer test before checking whether print jobs are stuck.",
            "Investigate the computer's motherboard before checking the printer's error messages."
        ],

        explanation:
            "After checking the printer's power, paper, ink, and connection, I check for error messages or stuck print jobs. If needed, I restart the printer and computer. Finally, I test the printer to make sure it works."
    },


    // ========================================================
    // INTERVIEW STRENGTHS
    // ========================================================

    {
        category: "INTERVIEW PREPARATION",

        question:
            "Which response best explains why the CTS team should hire you?",

        correct:
            "I have a strong interest in IT, communicate clearly, stay patient, and am willing to learn or ask for help when necessary.",

        incorrect: [
            "I already know every technical answer and would rarely need help from another technician.",
            "I prefer solving technical problems independently rather than communicating with users or learning team processes.",
            "I am primarily interested in technical equipment and would rather avoid assisting people with their problems."
        ],

        explanation:
            "I have a strong interest in IT and a real desire to help people. I'm patient, I communicate clearly, and I'm eager to learn your system and process quickly. I know that even if I don't know every answer right away, I'll put in the effort to find it or ask for help."
    }

];


// ============================================================
// GET HTML ELEMENTS
// ============================================================

const questionTotal =
    document.getElementById("questionTotal");

const answeredStat =
    document.getElementById("answeredStat");

const correctStat =
    document.getElementById("correctStat");

const accuracyStat =
    document.getElementById("accuracyStat");

const categoryTag =
    document.getElementById("categoryTag");

const questionCounter =
    document.getElementById("questionCounter");

const questionLabel =
    document.getElementById("questionLabel");

const questionText =
    document.getElementById("questionText");

const choicesContainer =
    document.getElementById("choices");

const feedback =
    document.getElementById("feedback");

const feedbackIcon =
    document.getElementById("feedbackIcon");

const feedbackTitle =
    document.getElementById("feedbackTitle");

const explanationTitle =
    document.getElementById("explanationTitle");

const feedbackText =
    document.getElementById("feedbackText");

const helperText =
    document.getElementById("helperText");

const nextBtn =
    document.getElementById("nextBtn");

const progressTrack =
    document.getElementById("progressTrack");

const progressFill =
    document.getElementById("progressFill");

const questionCard =
    document.getElementById("questionCard");

const results =
    document.getElementById("results");

const resultScore =
    document.getElementById("resultScore");

const resultMessage =
    document.getElementById("resultMessage");

const resultDetails =
    document.getElementById("resultDetails");

const retryMissedBtn =
    document.getElementById("retryMissedBtn");

const newTestBtn =
    document.getElementById("newTestBtn");

const restartTop =
    document.getElementById("restartTop");


// ============================================================
// TEST STATE
// ============================================================

let questions = [];

let currentQuestionIndex = 0;

let correctAnswers = 0;

let answeredQuestions = 0;

let missedQuestions = [];

let hasAnswered = false;


// ============================================================
// SHUFFLE ARRAY
//
// Fisher-Yates Shuffle
//
// This creates a new shuffled array without modifying
// the original question bank.
//
// Used for:
// 1. Randomizing question order
// 2. Randomizing answer positions
// ============================================================

function shuffleArray(array) {

    const shuffled = [...array];

    for (
        let i = shuffled.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(Math.random() * (i + 1));

        [
            shuffled[i],
            shuffled[randomIndex]
        ] = [
            shuffled[randomIndex],
            shuffled[i]
        ];

    }

    return shuffled;

}


// ============================================================
// FORMAT QUESTION NUMBER
//
// Examples:
// 1  -> 01
// 9  -> 09
// 10 -> 10
// ============================================================

function formatNumber(number) {

    return String(number).padStart(2, "0");

}


// ============================================================
// GENERATE RANDOMIZED ANSWERS
//
// Combines one correct answer with three incorrect answers.
//
// Each answer stores whether it is correct.
//
// Randomizing the array keeps the correct answer linked
// to its original question.
// ============================================================

function generateAnswers(question) {

    const answers = [

        {
            text: question.correct,
            isCorrect: true
        },

        ...question.incorrect.map(answer => {

            return {
                text: answer,
                isCorrect: false
            };

        })

    ];

    return shuffleArray(answers);

}


// ============================================================
// START NEW TEST
//
// Called when:
// - Page first loads
// - Restart is clicked
// - New randomized test is clicked
// ============================================================

function startTest() {

    questions = shuffleArray(questionBank);

    currentQuestionIndex = 0;

    correctAnswers = 0;

    answeredQuestions = 0;

    missedQuestions = [];

    hasAnswered = false;

    questionCard.hidden = false;

    results.hidden = true;

    questionTotal.textContent =
        questions.length;

    updateStatistics();

    updateProgress();

    displayQuestion();

}


// ============================================================
// DISPLAY CURRENT QUESTION
// ============================================================

function displayQuestion() {

    // --------------------------------------------------------
    // CHECK WHETHER TEST IS COMPLETE
    // --------------------------------------------------------

    if (currentQuestionIndex >= questions.length) {

        showResults();

        return;

    }


    // --------------------------------------------------------
    // GET CURRENT QUESTION
    // --------------------------------------------------------

    const currentQuestion =
        questions[currentQuestionIndex];


    // --------------------------------------------------------
    // RESET ANSWER STATE
    // --------------------------------------------------------

    hasAnswered = false;


    // --------------------------------------------------------
    // UPDATE QUESTION CATEGORY
    // --------------------------------------------------------

    categoryTag.textContent =
        currentQuestion.category;


    // --------------------------------------------------------
    // UPDATE QUESTION COUNTER
    // --------------------------------------------------------

    const questionNumber =
        currentQuestionIndex + 1;

    questionCounter.textContent =
        `${formatNumber(questionNumber)} / ${formatNumber(questions.length)}`;

    questionLabel.textContent =
        `QUESTION ${formatNumber(questionNumber)}`;


    // --------------------------------------------------------
    // DISPLAY QUESTION
    // --------------------------------------------------------

    questionText.textContent =
        currentQuestion.question;


    // --------------------------------------------------------
    // REMOVE PREVIOUS ANSWERS
    // --------------------------------------------------------

    choicesContainer.replaceChildren();


    // --------------------------------------------------------
    // HIDE PREVIOUS FEEDBACK
    // --------------------------------------------------------

    feedback.hidden = true;

    feedback.classList.remove(
        "correct",
        "wrong",
        "incorrect",
        "is-correct",
        "is-wrong"
    );

    feedbackIcon.textContent = "";

    feedbackTitle.textContent = "";

    feedbackText.textContent = "";

    explanationTitle.hidden = true;


    // --------------------------------------------------------
    // RESET NEXT BUTTON
    // --------------------------------------------------------

    nextBtn.disabled = true;

    nextBtn.innerHTML =
        'Next question <span aria-hidden="true">→</span>';


    // --------------------------------------------------------
    // RESET HELPER TEXT
    // --------------------------------------------------------

    helperText.textContent =
        "Select an answer to check your understanding.";


    // --------------------------------------------------------
    // RANDOMIZE ANSWERS
    // --------------------------------------------------------

    const randomizedAnswers =
        generateAnswers(currentQuestion);


    // --------------------------------------------------------
    // CREATE ANSWER BUTTONS
    // --------------------------------------------------------

    randomizedAnswers.forEach((answer, index) => {

        createAnswerButton(
            answer,
            index,
            currentQuestion
        );

    });

}


// ============================================================
// CREATE MULTIPLE CHOICE BUTTON
// ============================================================

function createAnswerButton(answer, index, question) {

    // --------------------------------------------------------
    // CREATE BUTTON
    // --------------------------------------------------------

    const button =
        document.createElement("button");

    button.type = "button";

    button.className = "choice";


    // --------------------------------------------------------
    // CREATE LETTER
    // --------------------------------------------------------

    const letter =
        document.createElement("span");

    letter.className =
        "choice-letter";

    letter.textContent =
        String.fromCharCode(65 + index);


    // --------------------------------------------------------
    // CREATE ANSWER TEXT
    // --------------------------------------------------------

    const answerText =
        document.createElement("span");

    answerText.className =
        "choice-text";

    answerText.textContent =
        answer.text;


    // --------------------------------------------------------
    // ADD LETTER AND TEXT TO BUTTON
    // --------------------------------------------------------

    button.appendChild(letter);

    button.appendChild(answerText);


    // --------------------------------------------------------
    // CHECK ANSWER WHEN CLICKED
    // --------------------------------------------------------

    button.addEventListener("click", () => {

        checkAnswer(
            answer,
            button,
            question
        );

    });


    // --------------------------------------------------------
    // ADD BUTTON TO PAGE
    // --------------------------------------------------------

    choicesContainer.appendChild(button);

}


// ============================================================
// CHECK SELECTED ANSWER
//
// Ensures each question can only be answered once.
//
// Correct answers:
// - Increase score
// - Display full explanation
//
// Wrong answers:
// - Show "Wrong Answer"
// - Save question to missed list
// - Do not reveal the explanation
// ============================================================

function checkAnswer(answer, selectedButton, question) {

    // --------------------------------------------------------
    // PREVENT MULTIPLE ANSWERS
    // --------------------------------------------------------

    if (hasAnswered) {
        return;
    }

    hasAnswered = true;


    // --------------------------------------------------------
    // INCREASE ANSWERED COUNT
    // --------------------------------------------------------

    answeredQuestions++;


    // --------------------------------------------------------
    // DISABLE ALL CHOICES
    // --------------------------------------------------------

    const allButtons =
        choicesContainer.querySelectorAll(".choice");

    allButtons.forEach(button => {

        button.disabled = true;

    });


    // --------------------------------------------------------
    // CHECK IF CORRECT
    // --------------------------------------------------------

    if (answer.isCorrect) {

        correctAnswers++;

        selectedButton.classList.add("correct");

        showCorrectFeedback(question);

    } else {

        selectedButton.classList.add("wrong");

        missedQuestions.push(question);

        showWrongFeedback();

    }


    // --------------------------------------------------------
    // UPDATE STATISTICS
    // --------------------------------------------------------

    updateStatistics();

    updateProgress();


    // --------------------------------------------------------
    // ENABLE NEXT BUTTON
    // --------------------------------------------------------

    nextBtn.disabled = false;


    // --------------------------------------------------------
    // FINAL QUESTION BUTTON
    // --------------------------------------------------------

    if (currentQuestionIndex === questions.length - 1) {

        nextBtn.innerHTML =
            'View results <span aria-hidden="true">→</span>';

    }

}


// ============================================================
// SHOW CORRECT ANSWER FEEDBACK
//
// Only correct answers display the full explanation.
// ============================================================

function showCorrectFeedback(question) {

    feedback.hidden = false;

    feedback.classList.add("correct");

    feedbackIcon.textContent = "✓";

    feedbackTitle.textContent =
        "Correct Answer!";

    explanationTitle.hidden = false;

    explanationTitle.textContent =
        "Explanation from your notes";

    feedbackText.textContent =
        question.explanation;

    helperText.textContent =
        "Great job! Review the explanation before moving on.";

}


// ============================================================
// SHOW WRONG ANSWER FEEDBACK
//
// Do not reveal the correct answer or explanation.
// The question is saved for practice later.
// ============================================================

function showWrongFeedback() {

    feedback.hidden = false;

    feedback.classList.add("wrong");

    feedbackIcon.textContent = "✕";

    feedbackTitle.textContent =
        "Wrong Answer";

    explanationTitle.hidden = true;

    feedbackText.textContent =
        "That is not the correct response. Review your study notes and try this question again during your missed-question practice.";

    helperText.textContent =
        "This question has been saved for another attempt.";

}


// ============================================================
// UPDATE TEST STATISTICS
// ============================================================

function updateStatistics() {

    answeredStat.textContent =
        answeredQuestions;

    correctStat.textContent =
        correctAnswers;


    // --------------------------------------------------------
    // CALCULATE ACCURACY
    // --------------------------------------------------------

    if (answeredQuestions === 0) {

        accuracyStat.textContent = "—";

        return;

    }

    const accuracy =
        Math.round(
            (correctAnswers / answeredQuestions) * 100
        );

    accuracyStat.textContent =
        `${accuracy}%`;

}


// ============================================================
// UPDATE PROGRESS BAR
// ============================================================

function updateProgress() {

    if (questions.length === 0) {
        return;
    }

    const progress =
        (answeredQuestions / questions.length) * 100;

    progressFill.style.width =
        `${progress}%`;

    progressTrack.setAttribute(
        "aria-valuenow",
        Math.round(progress)
    );

}


// ============================================================
// MOVE TO NEXT QUESTION
// ============================================================

function nextQuestion() {

    if (!hasAnswered) {
        return;
    }

    currentQuestionIndex++;

    displayQuestion();

}


// ============================================================
// SHOW FINAL RESULTS
// ============================================================

function showResults() {

    // --------------------------------------------------------
    // HIDE QUESTION CARD
    // --------------------------------------------------------

    questionCard.hidden = true;


    // --------------------------------------------------------
    // SHOW RESULTS
    // --------------------------------------------------------

    results.hidden = false;


    // --------------------------------------------------------
    // CALCULATE FINAL SCORE
    // --------------------------------------------------------

    const total =
        questions.length;

    const incorrect =
        total - correctAnswers;

    const percentage =
        total === 0
            ? 0
            : Math.round((correctAnswers / total) * 100);


    // --------------------------------------------------------
    // DISPLAY SCORE
    // --------------------------------------------------------

    resultScore.textContent =
        `${percentage}%`;


    // --------------------------------------------------------
    // DISPLAY CUSTOM RESULT MESSAGE
    // --------------------------------------------------------

    if (percentage === 100) {

        resultMessage.textContent =
            "Perfect score! You answered every question correctly. You have demonstrated strong knowledge of the material in your CTS interview notes.";

    } else if (percentage >= 85) {

        resultMessage.textContent =
            "Excellent work! You understand most of the material. Practice the questions you missed to strengthen your preparation.";

    } else if (percentage >= 70) {

        resultMessage.textContent =
            "Good progress! You have a solid understanding of several topics. Review the questions you missed and try another practice session.";

    } else if (percentage >= 50) {

        resultMessage.textContent =
            "You're making progress. Spend more time reviewing your troubleshooting steps, CTS responsibilities, and technical support responses.";

    } else {

        resultMessage.textContent =
            "Keep practicing. Review your original interview notes carefully and try the missed questions again to improve your understanding.";

    }


    // --------------------------------------------------------
    // DISPLAY RESULT DETAILS
    // --------------------------------------------------------

    resultDetails.replaceChildren();

    createResultDetail(
        "Total Questions",
        total
    );

    createResultDetail(
        "Correct",
        correctAnswers
    );

    createResultDetail(
        "Incorrect",
        incorrect
    );

    createResultDetail(
        "Accuracy",
        `${percentage}%`
    );


    // --------------------------------------------------------
    // HANDLE MISSED QUESTIONS BUTTON
    // --------------------------------------------------------

    retryMissedBtn.hidden =
        missedQuestions.length === 0;


    // --------------------------------------------------------
    // SCROLL TO RESULTS
    // --------------------------------------------------------

    results.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// ============================================================
// CREATE RESULT DETAIL
// ============================================================

function createResultDetail(label, value) {

    const container =
        document.createElement("div");

    container.className =
        "result-detail";


    const number =
        document.createElement("strong");

    number.textContent =
        value;


    const title =
        document.createElement("span");

    title.textContent =
        label;


    container.appendChild(number);

    container.appendChild(title);

    resultDetails.appendChild(container);

}


// ============================================================
// PRACTICE MISSED QUESTIONS
//
// Only questions answered incorrectly are included.
//
// Both their order and answer choices are randomized again.
// ============================================================

function practiceMissedQuestions() {

    if (missedQuestions.length === 0) {
        return;
    }


    // --------------------------------------------------------
    // SHUFFLE MISSED QUESTIONS
    // --------------------------------------------------------

    questions =
        shuffleArray(missedQuestions);


    // --------------------------------------------------------
    // RESET TEST STATE
    // --------------------------------------------------------

    currentQuestionIndex = 0;

    correctAnswers = 0;

    answeredQuestions = 0;

    missedQuestions = [];

    hasAnswered = false;


    // --------------------------------------------------------
    // RESET PAGE
    // --------------------------------------------------------

    questionCard.hidden = false;

    results.hidden = true;


    // --------------------------------------------------------
    // UPDATE TOTAL
    // --------------------------------------------------------

    questionTotal.textContent =
        questions.length;


    // --------------------------------------------------------
    // UPDATE INTERFACE
    // --------------------------------------------------------

    updateStatistics();

    updateProgress();

    displayQuestion();


    // --------------------------------------------------------
    // SCROLL TO QUESTION
    // --------------------------------------------------------

    questionCard.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// ============================================================
// RESTART TEST
// ============================================================

function restartTest() {

    startTest();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ============================================================
// EVENT LISTENERS
// ============================================================


// ------------------------------------------------------------
// NEXT QUESTION
// ------------------------------------------------------------

nextBtn.addEventListener(
    "click",
    nextQuestion
);


// ------------------------------------------------------------
// PRACTICE MISSED QUESTIONS
// ------------------------------------------------------------

retryMissedBtn.addEventListener(
    "click",
    practiceMissedQuestions
);


// ------------------------------------------------------------
// NEW RANDOMIZED TEST
// ------------------------------------------------------------

newTestBtn.addEventListener(
    "click",
    restartTest
);


// ------------------------------------------------------------
// HEADER RESTART BUTTON
// ------------------------------------------------------------

restartTop.addEventListener(
    "click",
    restartTest
);


// ============================================================
// INITIALIZE TEST
//
// Because script.js uses defer, the HTML is already parsed
// when this script executes.
//
// Starting the test here randomizes the questions and their
// answer choices every time the page reloads.
// ============================================================

startTest();
