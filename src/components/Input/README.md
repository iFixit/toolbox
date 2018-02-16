### Usage

`<Input>` is a simplified version of `<TextField>`. `<Input>` is simply a styled wrapper around the native `<input>` tag and does not include any custom validity logic. Use `<TextField>` instead of `<Input>` when building complex forms.

### Examples

#### Standard Input

```
<Input placeholder="Doc Brown" />
```

#### Input with value

```
<Input value="Kyle Wiens" />
```

#### Disabled Input

```
<Input value="Bill Nye" disabled />
```

#### Event callbacks

```
/* Hint: Check the console */
<Input
  placeholder="Name"
  onChange={event => console.log(event.target.value)}
  onMouseEnter={() => console.log('mouse entered')}
  onMouseLeave={() => console.log('mouse left')}
  onFocus={() => console.log('focused')}
  onBlur={() => console.log('blurred')}
/>
```
