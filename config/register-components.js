import AlertDemo1 from "../docs/alert/AlertDemo1.vue"
import AlertDemo2 from "../docs/alert/AlertDemo2.vue"
import AlertDemo3 from "../docs/alert/AlertDemo3.vue"
import ButtonDemo1 from "../docs/button/ButtonDemo1.vue"
import ButtonDemo2 from "../docs/button/ButtonDemo2.vue"
import ButtonDemo3 from "../docs/button/ButtonDemo3.vue"
import ButtonDemo4 from "../docs/button/ButtonDemo4.vue"

export default function registerComponents(app){
  app.component('AlertDemo1',AlertDemo1)
  app.component('AlertDemo2',AlertDemo2)
  app.component('AlertDemo3',AlertDemo3)
  app.component('ButtonDemo1',ButtonDemo1)
  app.component('ButtonDemo2',ButtonDemo2)
  app.component('ButtonDemo3',ButtonDemo3)
  app.component('ButtonDemo4',ButtonDemo4)
}
