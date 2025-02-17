# gux-phone-input

Input for international phone numbers

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type      | Default     |
| --------------- | ---------------- | ----------- | --------- | ----------- |
| `defaultRegion` | `default-region` |             | `string`  | `'US'`      |
| `disabled`      | `disabled`       |             | `boolean` | `false`     |
| `hasError`      | `has-error`      |             | `boolean` | `false`     |
| `labelId`       | `label-id`       |             | `string`  | `undefined` |
| `required`      | `required`       |             | `boolean` | `false`     |
| `value`         | `value`          |             | `string`  | `undefined` |


## Events

| Event           | Description | Type                   |
| --------------- | ----------- | ---------------------- |
| `input`         |             | `CustomEvent<string>`  |
| `internalError` |             | `CustomEvent<boolean>` |


## Dependencies

### Depends on

- [gux-icon](../../stable/gux-icon)
- [gux-region-icon](./components/gux-region-icon)
- [gux-option](../../stable/gux-listbox/options/gux-option)
- [gux-listbox](../../stable/gux-listbox)
- [gux-popup-beta](../gux-popup-beta)

### Graph
```mermaid
graph TD;
  gux-phone-input-beta --> gux-icon
  gux-phone-input-beta --> gux-region-icon
  gux-phone-input-beta --> gux-option
  gux-phone-input-beta --> gux-listbox
  gux-phone-input-beta --> gux-popup-beta
  gux-option --> gux-truncate-beta
  gux-truncate-beta --> gux-tooltip
  gux-listbox --> gux-radial-loading
  style gux-phone-input-beta fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
