### Examples

#### Checked

```
<Checkbox label="Checkbox label" checked />
```

#### Unchecked

```
<Checkbox label="Checkbox label" />
```

#### Disabled checked

```
<Checkbox label="Checkbox disabled" checked disabled />
```

#### Disabled unchecked

```
<Checkbox label="Checkbox disabled" disabled />
```

#### onChange callback

```
<Checkbox
  label="Checkbox label"
  onChange={({ checked, value }) => console.log(checked, value)}
/>
```