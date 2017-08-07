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

#### onChange callback

```
<Radio label="Radio label" onChange={({ checked }) => console.log(checked)} />
```