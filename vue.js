// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало
const App = {
  data() {
    return {
      activeIndex: 0, // то, что позволяет определить текущий активный шаг
      isFinished: false, // то, что позволяет определить выполнен последний шаг
      steps: [
        {title: 'Основы', text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'},
        {title: 'Компоненты', text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'},
        {title: 'Роутер', text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'},
        {title: 'Vuex', text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'},
        {title: 'Composition', text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'},
      ],
      statics: {
        labelButtonPrev:     "Назад",
        labelButtonNext:     "Вперед",
        labelButtonFinished: "Закончить",
        labelButtonReset:    "Начать заново",
      }
    }
  },
  methods: {
    prev() {
      // когда нажимаем кнопку назад
      --this.activeIndex;
      console.log('когда нажимаем кнопку назад');
    },
    reset() {
      // начать заново
      this.activeIndex = 0;
      this.isFinished = false;
      console.log('начать заново');
    },
    nextOrFinish() {
      // кнопка вперед или закончить
      if (this.activeIndex >= this.steps.length - 1) {
        this.submit();
        this.isFinished = true;
        return;
      }
      ++this.activeIndex;
      console.log('кнопка вперед или закончить');
    },
    submit() {
      console.log('данные отправлены');
    },
    setActive(idx) {
      // когда нажимаем на определенный шаг
      this.activeIndex = idx;
      console.log('когда нажимаем на определенный шаг');
    }
  },
  computed: {
    // тут стоит определить несколько свойств:
    // 1. текущий выбранный шаг
    getActiveIndex() {
      return this.activeIndex;
    },
    // 2. выключена ли кнопка назад
    isFirstStep() {
      return (this.activeIndex === 0);
    },
    // 3. находимся ли мы на последнем шаге
    isLastStep() {
      return (this.activeIndex >= (this.steps.length));
    },
    // 4. получаем названия кнопок
    getNextLabel() {
      if (this.activeIndex >= this.steps.length - 1) {
        return this.statics.labelButtonFinished;
      }
      return this.statics.labelButtonNext;
    },
    getPrevLabel() {
      return this.statics.labelButtonPrev;
    },
    getResetLabel() {
      return this.statics.labelButtonReset;
    }

  }
}

Vue.createApp(App).mount('#app')
