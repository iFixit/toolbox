### Examples

#### Standard SearchInput

```
<SearchInput placeholder="Search" />
```

#### SearchInput with value

```
<SearchInput value="iphone 6" />
```

#### Disabled SearchInput

```
<SearchInput value="toolkit" disabled />
```

#### Event callbacks

```
/* Hint: Check the console */
<SearchInput
  placeholder="Name"
  onChange={event => console.log(event.target.value)}
  onFocus={() => console.log('focused')}
  onBlur={() => console.log('blurred')}
/>
```
