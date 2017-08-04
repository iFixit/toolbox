### Examples

#### Checked Radio

```
<Radio label="Radio label" checked />
```

#### Unchecked Radio

```
<Radio label="Radio label" />
```

#### Disabled checked Radio

```
<Radio label="Radio disabled" checked disabled />
```

#### Disabled unchecked Radio

```
<Radio label="Radio disabled" disabled />
```

#### onChange callback

```
<Radio label="Radio label" onChange={({ checked }) => console.log(checked)} />
```