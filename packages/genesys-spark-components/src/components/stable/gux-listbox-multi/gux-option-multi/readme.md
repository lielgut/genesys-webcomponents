# gux-option-multi

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type      | Default     |
| ---------- | ---------- | ----------- | --------- | ----------- |
| `active`   | `active`   |             | `boolean` | `false`     |
| `custom`   | `custom`   |             | `boolean` | `false`     |
| `disabled` | `disabled` |             | `boolean` | `false`     |
| `filtered` | `filtered` |             | `boolean` | `false`     |
| `hovered`  | `hovered`  |             | `boolean` | `false`     |
| `selected` | `selected` |             | `boolean` | `false`     |
| `value`    | `value`    |             | `string`  | `undefined` |


## Events

| Event                        | Description | Type                  |
| ---------------------------- | ----------- | --------------------- |
| `guxremovecustomoption`      |             | `CustomEvent<string>` |
| `internalselectcustomoption` |             | `CustomEvent<string>` |


## Slots

| Slot | Description |
| ---- | ----------- |
|      | text        |


## Dependencies

### Depends on

- [gux-truncate-beta](../../../beta/gux-truncate)

### Graph
```mermaid
graph TD;
  gux-option-multi --> gux-truncate-beta
  gux-truncate-beta --> gux-tooltip
  style gux-option-multi fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
