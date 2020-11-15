<template>
  <div id="app">
    <img
      src="https://placehold.jp/150/ffffff/bd2626/150x150.png?text=○"
      v-if="judgement == 'SUCCESS'"
    />
    <img
      src="https://placehold.jp/150/ffffff/0033ff/150x150.png?text=×"
      v-if="judgement == 'FAILURE'"
    />
    <img
      src="https://placehold.jp/150/ffffff/000000/150x150.png?text=-"
      v-if="judgement == '-'"
    />
    <br />
    sentence
    <br />
    <textarea id="sentenceArea" cols="40" rows="1" v-model="sentence">
    </textarea>
    <br />
    speak text
    <br />
    <textarea id="speakArea" cols="40" rows="1" v-text="speakResult" readonly>
    </textarea>
    <br />
    <button @click="recordSpeaking">speak</button>
    <br />
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      sentence: "",
      speakResult: "",
      recogniton: null,
      judgement: "-",
    };
  },
  created() {
    var SpeechRecognition = SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.lang = "en";
  },
  methods: {
    recordSpeaking: function () {
      this.judgement = "-";
      this.speakResult = "";
      this.recognition.start();

      let vueInstance = this;
      this.recognition.onresult = function (event) {
        vueInstance.speakResult = event.results[0][0].transcript;
        if (
          vueInstance.speakResult.trim().toLowerCase() ==
          vueInstance.sentence.trim().toLowerCase()
        ) {
          vueInstance.judgement = "SUCCESS";
        } else {
          vueInstance.judgement = "FAILURE";
        }
      };
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
