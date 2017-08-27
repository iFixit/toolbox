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

#### Invalid unchecked

```
<Checkbox required label="Checkbox invalid" showInvalid={true} />
```

#### Event callbacks

```
<Checkbox
  label="Checkbox label"
  onChange={({ checked, value }) => console.log(checked, value)}
  onMouseEnter={() => console.log('mouse entered')}
  onMouseLeave={() => console.log('mouse left')}
/>
```
