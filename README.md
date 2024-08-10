# SignalZen Live Chat widget React package

This repository contains [React](https://github.com/facebook/react) package that helps to integrate SignalZen Live Chat widget.

There are 2 helpers within this package: a hook and a provider.

## First things first

Install the package by running:
```bash
npm install react-signalzen
```
or
```bash
yarn add react-signalzen
```

## Use case 1, the hook

The hook is useful if you want to use SignalZen at the top level function and just to initialize the widget.

```javascript
import { useSignalZen } from 'react-signalzen';
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

## Copyright
MB "SignalZen"
