const utils = {
  createTestEmotionData: () => {
    const emotionTypes = [
      HAPPY,
      SAD,
      ANGRY,
      CONFUSED,
      DISGUSTED,
      SURPRISED,
      CALM
    ];
  },
  pushToDb: data => {
    setInterval(() => {
      console.log("Hello");
    }, 2000);
  }
};

utils.createTestEmotionData();
