# busy-indicator

Displaying a component based on local state to display the loader. Using context to share the state between from the top-most component to a child deep in the tree.

## 🚀 Getting Started

Using [`npm`]():

```bash
npm i busy-indicator
```

## ✨ Usage

Utilising normal click handlers, example snippet:

```javascript
import BusyIndicator, { BusyIndicatorContext } from "busy-indicator";

// Child component deep inside a tree
function DeepChild() {
  const { showDisplay, hideDisplay } = useContext(BusyIndicatorContext);

  return (
    <div>
      <button onClick={showDisplay}>Show</button>
      <button onClick={hideDisplay}>Hide</button>
    </div>
  );
}

// Top-most level component
function Main() {
  return (
    <BusyIndicator>
      <div>
        This is the main component
        <DeepChild />
      </div>
    </BusyIndicator>
  );
}
```

You may style the loader with a global class of `"busy-indicator-display"`

## 📌 Props

| Prop             | Type             | Default   | Required |
| ---------------- | ---------------- | --------- | -------- |
| `children`       | any              |    | Yes       |
| `displayStyles`  | object           | `{}`      | No       |
| `displayContent` | (object\|string) | `loading` | No       |

## ✌️ License

[MIT](https://opensource.org/licenses/MIT)
