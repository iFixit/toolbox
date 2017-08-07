### Examples

#### Standard Textarea

```
<Textarea label="Label" placeholder="Placeholder text" />
```

#### Textarea with value

```
<Textarea label="Label" value="Hello world" />
```

#### Empty Textarea

```
<Textarea />
```

#### Disabled Textarea

```
<Textarea label="Label" value="Hello world" disabled />
```

#### Event callbacks

```
<Textarea
  onChange={({ value }) => console.log(value)}
  onFocus={() => console.log('focused')}
  onBlur={() => console.log('blurred')}
/>
```