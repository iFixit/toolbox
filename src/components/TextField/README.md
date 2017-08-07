### Examples

#### Standard TextField

```
<TextField label="Name" placeholder="Doc Brown" />
```

#### TextField with value

```
<TextField label="Name" value="Kyle Wiens" />
```

#### TextField without label

```
<TextField value="Bill Nye" />
```

#### Disabled TextField

```
<TextField label="Name" value="Bill Nye" disabled />
```

#### Event callbacks

```
<TextField
  onChange={({ value }) => console.log(value)}
  onFocus={() => console.log('focused')}
  onBlur={() => console.log('blurred')}
/>
```
