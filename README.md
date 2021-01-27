# React Native Paper Boilerplate

React Native Boilerplate using TypeScript, Styled Components React Native Paper.

## Features

- TypeScript language
- Styled Components for styling
- Airbnb's JavaScript (ES6) style guide.
- ESlint for TypeScript and StyleLint for CSS
- Prettier for code formatter
- React Native Paper (Material Design) as UI framework
- React hooks

## Components

- [ESLint](https://eslint.org/) for linter.
- [Prettier](https://prettier.io/) for code formatter.
- [React Native](https://reactnative.dev/) as the main framework.
- [React Native Paper](https://callstack.github.io/react-native-paper/) for UI components.
- [Redux](https://redux.js.org/) for state container.
- [Redux-Saga](https://github.com/redux-saga/redux-saga) to fetching asynchronous data with redux.
- [Style Components](https://stylelint.io/) for CSS styling.
- [StyleLint](https://stylelint.io/) for CSS linting.
- [TypeScript](https://www.typescriptlang.org/) as main language.

## Folder Strucutre

The following aspects were used to create the folder structure

```
↳ @types                            # extension types (not related to application types)
  ...
↳ src                               # sources
  ↳ @types                          # application types
    ↳ general                       # general types
    ↳ reducers                      # reducers types
  ↳ assets                          # files
    ↳ images                        # image files
    ...
  ↳ amp                             # amp files
    ↳ components                    # amp components
    ↳ layout                        # amp layouts
    ↳ pages_templates               # amp pages templates
  ↳ components                      # shared components used in the pages templates
    ↳ complex                       # ui components with actions
      ↳ {ComponentName}             # component name with CamelCase
        ↳ index.tsx                 # element
        ↳ styled.tsx                # styles
        ↳ ComponentName.test.tsx    # tests
    ↳ data_display                  # ui components without actions
      ↳ {ComponentName}             # component name with CamelCase
        ↳ index.tsx                 # element
        ↳ styled.tsx                # styles
        ↳ ComponentName.test.tsx    # tests
    ↳ forms                         # completed forms
      ↳ {ComponentName}             # component name with CamelCase
        ↳ index.tsx                 # element
        ↳ styled.tsx                # styles
        ↳ ComponentName.test.tsx    # tests
    ↳ inputs                        # buttons, selects, text fields, etc
      ↳ {ComponentName}             # component name with CamelCase
        ↳ index.tsx                 # element
        ↳ styled.tsx                # styles
        ↳ ComponentName.test.tsx    # tests
    ↳ loaders                       # skeletons of shared components
      ↳ {ComponentName}             # component name with CamelCase
        ↳ index.tsx                 # element
        ↳ styled.tsx                # styles
        ↳ ComponentName.test.tsx    # tests
    ↳ templates                     # generic templates used in multiple pages templates
      ↳ {ComponentName}             # component name with CamelCase
        ↳ index.tsx                 # element
        ↳ styled.tsx                # styles
        ↳ ComponentName.test.tsx    # tests
  ↳ constants                       # application constants
    {filename}.tsx                  # some file with constants
    ...
  ↳ hocs                            # application hocs
    ...
  ↳ hooks                           # application hooks
    ↳ use{HookName}                 # application hook
      ↳ index.tsx                   # hook function
      ↳ use{HookName}.test.tsx      # hook tests
  ↳ layout                          # layout wrapper for all pages (header, etc.)
    ...
  ↳ screen                          # routes screens
    ↳ private                       # private screens
      ↳ ComponentTemplate           # route main component (don't create subfolder)
        ↳ components                # components used only in a specific route (see components)
        index.tsx                   # element
        styled.tssx                 # styles
    ↳ public                        # public screens
      ↳ ComponentTemplate           # route main component (don't create subfolder)
        ↳ components                # components used only in a specific route (see components)
        index.tsx                   # element
        styled.tssx                 # styles
  ↳ providers                       # application providers
    ↳ {ProviderName}Provider        # Provider component
      index.tsx                     # element
      styled.tssx                   # styles
  ↳ redux                           # redux folders
    ↳ actions                       # dispatches
    ↳ api                           # api endpoints calls
    ↳ reducers                      # database reducers (user, bookings, etc)
    ↳ sagas                         # actions exections
    store.tsx                       # redux store
    ...
  ↳ styles                          # global styles and themes
    ↳ themes                        # global themes
    variables.tsx                   # global style variables
    ...
  ↳ utils                           # helper functions
    {filename}.tsx                  # some file with helper functions
    ...
```

## Getting Start

Run the following commands in your terminal

```bash
git clone https://github.com/LucasBassetti/react-native-paper-boilerplate.git
cd react-native-paper-boilerplate
yarn install
yarn start
```

Then open [http://localhost:19002/](http://localhost:19002/) on your web browser.

## License

MIT · [Lucas Bassetti](http://lucasbassetti.com.br)
