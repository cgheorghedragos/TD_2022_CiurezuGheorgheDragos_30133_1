function run() {
  new Vue({
    el: "#app",
    data: {
      users: [],
      usersService: null,
    },
    created: function () {
      this.usersService = users();
      this.usersService.get().then((response) => (this.users = response.data));
      this.usersService.post({name: "Test", city: "culj"}).then((response) => console.log(response.data));
    },
    methods: {},
  });
}

document.addEventListener("DOMContentLoaded", () => {
  run();
});
