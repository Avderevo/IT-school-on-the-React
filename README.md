
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### Как запустить ?

- 1 Запускаем бекенд: https://github.com/Avderevo/ITschool-djangorest-api

- 2 Клонируем репозиторий: ``` $ git clone https://github.com/Avderevo/IT-school-on-the-React ```

- 3 Переходим в рабочий каталог и загружаем модули ``` $ npm install```

- 4 Запускаем проект ```$ npm start```

### Что есть ?

На данном этапе проекта есть готовые:

- Главная страница
- Страницы курсов
- Страница тестирования на курс
- Регистрация и вход для студента и преподователя
- Личный кабинет студента
- Личный кабинет преподователя


### Как это работает ?

- ### Для студента:
 - Нажимаем кнопку "логин или регистрация"
 - Регестрируемся в качестве студента и входим
 - Появится кнопка входа в личный кабинет - там пока пусто
 - Для зачисления на курс входим на страницу курса, и нажимаем кнопку "Поступить на курс"
 - Успешно проходим тест и курс появится в личном кабинете
 - Входим на курс
 - В чате карточки курса после отправки сообщения автоматически сообщения не отображаются ( нужно перегружать руками)


- ### Для преподователя
- Нажимаем кнопку "логин/регистрация"
- Регестрируемся в качестве преподователя и входим
- После входа появится кнопка входа в личный кабинет учителя
- Заходим в личный кабинет
- Выбераем курс и регистрируемся на нам в качестве преподователя (курс появится в личном кабинете)
- Входим на курс (Есле на курсе есть зарегестрированные студенты - они появятся в списке студентов)
- В чате, карточка курса после отправки сообщения или смены статуса домашнего задания  автоматически не обновляется (пока нужно перегружать руками)- ищу решения.




Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
