### Examples

#### Checked

```
<CheckboxRadio type="checkbox" label="Checkbox label" checked />
```

```
<CheckboxRadio type="radio" label="Radio label" checked />
```

#### Unchecked

```
<CheckboxRadio type="checkbox" label="Checkbox label" />
```

```
<CheckboxRadio type="radio" label="Radio label" />
```

#### Disabled checked

```
<CheckboxRadio type="checkbox" label="Checkbox disabled" checked disabled />
```

```
<CheckboxRadio type="radio" label="Radio disabled" checked disabled />
```

#### Disabled unchecked

```
<CheckboxRadio type="checkbox" label="Checkbox disabled" disabled />
```

```
<CheckboxRadio type="radio" label="Radio disabled" disabled />
```

#### onChange callback

```
<CheckboxRadio type="checkbox" label="Checkbox label" onChange={({ checked }) => console.log(checked)} />
```

```
<CheckboxRadio type="radio" label="Radio label" onChange={({ checked }) => console.log(checked)} />
```