function run() {
  new Vue({
    el: "#app",
    data: {
      message: "",
      showMessage: false,
    },
    methods: {
      doSomething: function () {
        if(this.message==="123"){
          this.showMessage = true;
        } else{
          this.showMessage = false;
        }
        console.log("The input string value is: " + this.message);
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  run();
});
