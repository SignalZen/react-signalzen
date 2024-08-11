# SignalZen Live Chat widget React package

This repository contains [React](https://github.com/facebook/react) package that helps to integrate SignalZen Live Chat widget.

There are 2 helpers within this package: a hook and a provider.

## First things first

Install the package by running:
```bash
npm install @signalzen/react-signalzen
```
or
```bash
yarn add @signalzen/react-signalzen
```

## Use case 1, the hook

The hook is useful if you want to use SignalZen at the top level function and just to initialize the widget.

```javascript
import { useSignalZen } from '@signalzen/react-signalzen';
```

Call the hook inside your function that returns JSX:

```javascript
useSignalZen("<PUBLIC_TOKEN>");
```
* take the token from SignalZen Console integration page

You can pass options to the hook as well:
```javascript
useSignalZen("<PUBLIC_TOKEN>", { invisible: true });
```

## Use case 2, the provider
The provider should be places at the top level of your React components tree. For instance:

```javascript
import { SignalZenProvider } from '@signalzen/react-signalzen'

export default () => {
  return <SignalZenProvider token="<PUBLIC_TOKEN>">
    <App />
  </SignalZenProvider>
}
```

You can also use options, for instance, to start widget in invisible mode:
```javascript
<SignalZenProvider token="<PUBLIC_TOKEN>" options={{ invisible: true }}></SignalZenProvider>
```

Then inside components of the `<App />` you can access context functions:
```javascript
import React, { useContext } from 'react'
import { SignalZenContext } from "@signalzen/react-signalzen"
import AuthContext from "../contexts/auth"

export default () => {
  const { user } = useContext(AuthContext);
  const { pushUserData } = useContext(SignalZenContext);
  const syncUserData = (e) => {
    e.preventDefault()
    pushUserData({
      email: user.email,
      name: user.name,
      'Is admin?': user.isAdmin
    })
  }
  return <a href="#" onClick={syncUserData}>Sync</a>
}
```

Available functions:
```
pushUserData
setChatIcon
setLayout
setColors
setHideOnMobile
show
hide
expand
suspend
```

More information about functions you can find at https://docs.signalzen.com
## Copyright
MB "SignalZen"
