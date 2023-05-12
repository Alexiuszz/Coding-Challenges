// get images and audios from json
var iter = 0;
function parseJson(json) {
  const imageValues = [];
  const audioValues = [];

  function traverseObject(obj) {
        iter++
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        if (Array.isArray(obj[key])) {
          obj[key].forEach((item) => traverseObject(item));
        } else {
          traverseObject(obj[key]);
        }
        traverseObject(obj[key]);
      } else if (typeof obj[key] === "string") {
        const extension = obj[key].split(".").pop();
        if (["svg", "png", "jpeg"].includes(extension)) {
          if (!imageValues.includes(obj[key])) {
            imageValues.push(obj[key]);
          }
        } else if (["mp3", "wav"].includes(extension)) {
          if (!audioValues.includes(obj[key])) {
            audioValues.push(obj[key]);
          }
        }
      }
    }
  }

  traverseObject(json);

  return [imageValues, audioValues];
}

const json = {
  BG: "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/svgs/conversationMode/Background-01.svg",
  GameController:
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/svgs/conversationMode/GameController.svg",
  activityMode: "conversation",
  activityName: "Conversations",
  activityTitle: "John and Tobi",
  audio: [
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/audio/lessons/conversationMode/JohnTobi/e1l5_1.mp3",
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/audio/lessons/conversationMode/JohnTobi/e1l5_2.mp3",
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/audio/lessons/conversationMode/JohnTobi/e1l5_3.mp3",
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/audio/lessons/conversationMode/JohnTobi/e1l5_4.mp3",
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/audio/lessons/conversationMode/JohnTobi/e1l5_5.mp3",
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/audio/lessons/conversationMode/JohnTobi/e1l5_6.mp3",
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/audio/lessons/conversationMode/JohnTobi/e1l5_7.mp3",
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/audio/lessons/conversationMode/JohnTobi/e1l5intro.mp3",
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/audio/lessons/conversationMode/JohnTobi/e1l5outro.mp3",
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/audio/lessons/mode4_EN_01/mode4_background.mp3",
  ],
  backgroundMusic:
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/audio/lessons/mode4_EN_01/mode4_background.mp3",
  cursor:
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/ENGLISH/G1/lesson1/pointer_cursor.png",
  fillerChar:
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/svgs/speakers/fullTeacher/t6.svg",
  fillerRive:
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/rive/teacher.riv",
  gameLink: "/lesson/expConversation1",
  images: [
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/ENGLISH/G1/lesson1/pointer_cursor.png",
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/ENGLISH/G1/lesson1/pointer_3.svg",
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/svgs/lesson2/navForward.svg",
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/svgs/lesson2/navForwardBlue.svg",
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/svgs/lesson2/navForwardGray.svg",
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/svgs/lesson2/welcomeBG.svg",
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/svgs/conversationMode/GameController.svg",
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/svgs/conversationMode/Background-01.svg",
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/svgs/speakers/boyFlipped/JohnFace.svg",
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/svgs/speakers/Tobi/TobiFace.svg",
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/svgs/speakers/boyFlipped/boyFlippedStable1.svg",
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/svgs/speakers/Tobi/Tobi-05.svg",
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/svgs/speakers/fullTeacher/t6.svg",
  ],
  intro: {
    audio:
      "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/audio/lessons/conversationMode/JohnTobi/e1l5intro.mp3",
    background:
      "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/svgs/lesson2/welcomeBG.svg",
    startState: "lesson",
    talker: "fullTeacher",
  },
  left: [true, false, true, false, true, true, false],
  modeAudio: {
    convo: [
      "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/audio/lessons/conversationMode/JohnTobi/e1l5_1.mp3",
      "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/audio/lessons/conversationMode/JohnTobi/e1l5_2.mp3",
      "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/audio/lessons/conversationMode/JohnTobi/e1l5_3.mp3",
      "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/audio/lessons/conversationMode/JohnTobi/e1l5_4.mp3",
      "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/audio/lessons/conversationMode/JohnTobi/e1l5_5.mp3",
      "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/audio/lessons/conversationMode/JohnTobi/e1l5_6.mp3",
      "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/audio/lessons/conversationMode/JohnTobi/e1l5_7.mp3",
    ],
    teacher: [
      "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/audio/lessons/conversationMode/JohnTobi/e1l5intro.mp3",
      "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/audio/lessons/conversationMode/JohnTobi/e1l5outro.mp3",
    ],
  },
  navForwardBg:
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/svgs/lesson2/navForward.svg",
  navForwardBlueBg:
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/svgs/lesson2/navForwardBlue.svg",
  navForwardGray:
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/svgs/lesson2/navForwardGray.svg",
  outro: {
    audio:
      "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/audio/lessons/conversationMode/JohnTobi/e1l5outro.mp3",
    background:
      "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/svgs/lesson2/welcomeBG.svg",
    endLink: "lessons",
    talker: "fullTeacher",
  },
  riveSpeakers: [
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/rive/john.riv",
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/rive/tobi.riv",
  ],
  selectCursor:
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/ENGLISH/G1/lesson1/pointer_3.svg",
  smallSpeakers: [
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/svgs/speakers/boyFlipped/JohnFace.svg",
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/svgs/speakers/Tobi/TobiFace.svg",
  ],
  speakers: [
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/svgs/speakers/boyFlipped/boyFlippedStable1.svg",
    "https://biamuta-activities-assets.s3.us-east-2.amazonaws.com/general/svgs/speakers/Tobi/Tobi-05.svg",
  ],
  texts: {
    convo: [
      "Hello. My name is John. What is your name?",
      "My name is Tobi.",
      "How old are you Tobi? ",
      "I am six years old. How old are you? ",
      "I am seven years old.",
      "Nice to meet you Tobi.?",
      "Nice to meet you John ",
    ],
    teacher: [
      "Welcome to this lesson. Here we have a discussion between John and Tobi. Listen to the sentences and repeat what you hear.",
      "Well done! You have finished this conversation. Let's go on to the next lesson. ",
    ],
  },
};

const [imageValues, audioValues] = parseJson(json);

// console.log(imageValues); // ["john.png", "rex.jpg", "fluffy.png"]
// console.log(audioValues); // ["john.mp3", "rex.wav", "fluffy.mp3"]
console.log(iter)