import React from 'react';
import { StatusBar } from 'react-native';
import CodePush from 'react-native-code-push';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
    <Routes />
  </>
);

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
