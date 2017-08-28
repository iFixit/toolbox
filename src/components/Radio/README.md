### Examples

#### Checked

```
<Radio label="Radio label" checked />
```

#### Unchecked

```
<Radio label="Radio label" />
```

#### Disabled checked

```
<Radio label="Radio disabled" checked disabled />
```

#### Disabled unchecked

```
<Radio label="Radio disabled" disabled />
```

#### Invalid unchecked

```
<Radio required label="Radio invalid" showInvalid={true} />
```

#### Event callbacks

```
<Radio
  label="Radio label"
  onChange={({ checked, value }) => console.log(checked, value)}
  onMouseEnter={() => console.log('mouse entered')}
  onMouseLeave={() => console.log('mouse left')}
/>
```
