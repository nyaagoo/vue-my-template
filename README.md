# vue-my-template

### Features Vue Settings
Using vue-cli3(@vue/cli)
- TypeScript
- Router
- Vuex
- CSS Pre-Processors
  - Stylus
- Linter / Formatter
  - ESLint
  - Prettier
- Unit Test
  - Jade


### Features
- class-style component syntax
- Using Pug as a template engine
  - Rewriting vue's initial template using pug and stylus
- Using vuex-module-decorators
  - [championswimmer/vuex-module-decorators](https://github.com/championswimmer/vuex-module-decorators).
  - One Module  is made using vuex-module-decorators. src/store/modules

- Auto Lint on save

-  Atomic Design to separate the components, but it's not that exact


## Snippets
User Snippets for Visual Studio Code

### .vue
```
	"vue-template": {
			"prefix": "vue-template",
			"body": [
				"<template lang=\"pug\">",
				"  .${1:name}",
				"</template>",
				"<script lang=\"ts\">",
				"import { Component, Vue } from \"vue-property-decorator\";",
				"import router from \"@/router\";",
				"",
				"@Component({",
				"  name: \"${1:name}\",",
				"  components: {}",
				"})",
				"export default class ${2:class} extends Vue {}",
				"</script>",
				"<style lang=\"stylus\" scoped>",
				".${1:name}",
				"</style>",
			],
			"description": "simple vue template"
	}
```

### module
```
	"vue-template-module": {
		"prefix": "template-module",
		"body": [
			"import {",
			"  Mutation,",
			"  MutationAction,",
			"  Action,",
			"  VuexModule,",
			"  getModule,",
			"  Module",
			"} from \"vuex-module-decorators\";",
			"import store from \"@/store/store\";",
			"",
			"@Module({ dynamic: true, store, name: \"${1:counter}\", namespaced: true })",
			"class ${2:Counter} extends VuexModule {",
			"  // #region STATE",
			"  counter: number = 0;",
			"",
			"  // #endregion",
			"",
			"  // #region MUTATION",
			"  @Mutation // counter",
			"  public SET_COUNTER(num: number) {",
			"    this.counter = num;",
			"  }",
			"",
			"  // #endregion",
			"",
			"  // #region ACTION",
			"  @Action({ rawError: true })",
			"  public decrement() {",
			"    this.SET_COUNTER(this.counter + 1);",
			"  }",
			"",
			"  // #endregion",
			"",
			"  // #region MUTATION ACTION",
			"  @MutationAction({ mutate: [\"counter\"] })",
			"  async resetCounter() {",
			"    return {",
			"      counter: 0",
			"    };",
			"  }",
			"  // #endregion",
			"}",
			"export const ${1:counter} = getModule(${2:Counter});",
		],
		"description": "simple vue-module template"
	}
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).