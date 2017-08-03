### Examples

#### Checked Checkbox

```
<Checkbox label="Cole" checked />
```

#### Unchecked Checkbox

```
<Checkbox label="Cole" />
```

#### Disabled checked Checkbox

```
<Checkbox label="Cole" checked disabled />
```

#### Disabled unchecked Checkbox

```
<Checkbox label="Cole" disabled />
```

#### onChange callback

```
<Checkbox label="Cole" onChange={({ checked }) => console.log(checked)} />
```