**Note:** `TextField` is a controlled component. [What's a controlled component?](https://facebook.github.io/react/docs/forms.html#controlled-components)

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
<TextField value="Bill Nye" disabled />
```

#### Full-width TextField

```
<TextField value="Jimi Hendrix" fullWidth />
```

#### Event callbacks

```
<TextField
  onChange={value => console.log(value)}
  onFocus={() => console.log('focused')}
  onBlur={() => console.log('blurred')}
/>
```
