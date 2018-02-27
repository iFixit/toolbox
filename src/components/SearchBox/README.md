### Examples

#### Standard SearchBox

```
<SearchBox placeholder="Search" />
```

#### SearchBox with value

```
<SearchBox value="iphone 6" />
```

#### Disabled SearchBox

```
<SearchBox value="toolkit" disabled />
```

#### Event callbacks

```
/* Hint: Check the console */
<SearchBox
  placeholder="Name"
  onChange={event => console.log(event.target.value)}
  onFocus={() => console.log('focused')}
  onBlur={() => console.log('blurred')}
/>
```
