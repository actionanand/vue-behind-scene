const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
    setRefText() {
      this.message = this.$refs.userText.value;
    },
    unmountVueApp() {
      if(confirm('It can\'t be undone, Are you sure?')){
        app.unmount();
      }
    }
  },
  created() {
    console.log('2 . created');
  },
  beforeCreate() {
    console.log('1. before create');
  },
  beforeMount() {
    console.log('3. before mount');
  },
  mounted() {
    console.log('4. mounted');
  },
  beforeUpdate() {
    console.log('5. before update'); // will run only if prop got updated
  },
  updated() {
    console.log('6. updated'); // will run only if prop got updated
  },
  beforeUnmount() {
    console.log('7. before unmount');
  },
  unmounted() {
    console.log('8. unmounted');
  },
});

app.mount('#app');


// ...JS...

const data = {
  message: 'Hello',
  longMessage: 'Hello World'
};

const handler = {
  set(target, key, value) {
    // console.log(target);
    // console.log(key);
    // console.log(value);
    if(key === 'message') {
      target.longMessage = value + 'World!';
    }
    target.message = value;
  }
};

const proxy = new Proxy(data, handler);

proxy.message = 'Hello !! ';
console.log(proxy.longMessage);