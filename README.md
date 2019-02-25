# HOME CODE CHALLENGE

Candidate: Hugo Cattelain

## Getting started

To run the project locally, run the following commands :

- npm install
- npm start

If the last command does not automatically open the app in your browser, follow this URL: http://localhost:3000/

## Choices & dependencies

In order to simplify the UI/UX and following the challenge guidelines, each field is independently routed.

Only the RegistrationForm component is stateful, the rest of the components are stateless functional components. The top-level components get his state updated by passing down the "handleChange" function so the children keep a view behavior.

The props type checking is done with prop-types (https://www.npmjs.com/package/prop-types).

The slide animation between the different views is done with react-swipeable-views (https://react-swipeable-views.com/).

The App is routed thanks to react-router-dom (https://reacttraining.com/react-router/web/guides/philosophy).

The main libraries used for the UI components are :

- Semantic UI React (https://react.semantic-ui.com/)
- Material-ui (https://material-ui.com/)

NB: After reading the challenge guidelines for the first time, I thought the address field was to be implemented. I realized it wasn't part of the challenge when I was done with it. Therefore, it has been added to the last page of the App as a bonus field. This one includes an autocomplete features connected to the Google Maps Places API, suggesting street addresses in Germany.

Appart from the existing test in './src/App.test.js', no additional test has been written.

## Drawback & improvement

The App does not store any data entered by the user. Therefore, if the user reload the page during the signup process, none of the typed information will be recovered. Also, concerning the same use case, the App won't detect the signup step where the page reload happened. This mean that the progress bar completion will be wrong and the displayed field as well.

To fix this issue, we could set up a Redux global store and save the typed information in the browser local/session storage as well as form related data (eg. step, errors, ...). On page reload, we could retrieve these data and update the view.

In term of UI/UX, the main improvment would be to prevent the user to be able to navigate to the next field if the current field contains an error. Currently, the user will be informed of the form validity at the confirmation page only. If the first field contains an error, he must navigate back to the first field in order to edit it.
