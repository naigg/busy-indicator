# busy-indicator

A test using busy-indicator

## 🚀 Getting Started

Using [`npm`]():

```bash
npm i busy-indicator
```

## ✨ Usage

```javascript
import BusyIndicator, { BusyIndicatorContext }  from "busy-indicator";

function DeepChild() {
  const { showDisplay, hideDisplay } = useContext(BusyIndicatorContext);

  return (
    <div>
      <button onClick={showDisplay}>Show</button>
      <button onClick={hideDisplay}>Hide</button>
    </div>
  )
}

export default () => {
  return (
    <BusyIndicator displayStyles={} displayContent={} >
      ...
      <ChildComponent />
    </BusyIndicator>
  );
};
```

## 📌 Props

Prop                  | Type     | Default                   | Required
--------------------- | -------- | ------------------------- | --------
`children`|any|`false`|No
`displayStyles`|object|`{}`|No
`displayContent`|(object|string)|`loading`|No

## ✌️ License
[MIT](https://opensource.org/licenses/MIT)
