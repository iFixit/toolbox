### Examples

#### Checked Checkbox

```
<Checkbox label="Checkbox label" checked />
```

#### Unchecked Checkbox

```
<Checkbox label="Checkbox label" />
```

#### Disabled checked Checkbox

```
<Checkbox label="Checkbox disabled" checked disabled />
```

#### Disabled unchecked Checkbox

```
<Checkbox label="Checkbox disabled" disabled />
```

#### onChange callback

```
<Checkbox label="Checkbox label" onChange={({ checked }) => console.log(checked)} />
```