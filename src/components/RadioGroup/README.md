### Examples

#### Standard RadioGroup

```
<RadioGroup
  label="What's your favorite food?"
  radios={[
    { label: 'Burrito', value: 'burrito' },
    { label: 'Pizza', value: 'pizza' },
    { label: 'Pasta', value: 'pasta' }
  ]}
  onChange={({ value }) => console.log(value)}
/>
```

#### RadioGroup with value

```
<RadioGroup
  label="What's your favorite food?"
  value="pizza"
  radios={[
    { label: 'Burrito', value: 'burrito' },
    { label: 'Pizza', value: 'pizza' },
    { label: 'Pasta', value: 'pasta' }
  ]}
  onChange={({ value }) => console.log(value)}
/>
```

#### RadioGroup without label

```
<RadioGroup
  radios={[
    { label: 'Burrito', value: 'burrito' },
    { label: 'Pizza', value: 'pizza' },
    { label: 'Pasta', value: 'pasta' }
  ]}
  onChange={({ value }) => console.log(value)}
/>
```

#### RadioGroup with disabled Radio

```
<RadioGroup
  label="What's your favorite food?"
  radios={[
    { label: 'Burrito', value: 'burrito', disabled: true },
    { label: 'Pizza', value: 'pizza' },
    { label: 'Pasta', value: 'pasta' }
  ]}
  onChange={({ value }) => console.log(value)}
/>
```

#### RadioGroup with disabled Radio

```
<RadioGroup
  label="What's your favorite food?"
  disabled
  radios={[
    { label: 'Burrito', value: 'burrito', disabled: true },
    { label: 'Pizza', value: 'pizza' },
    { label: 'Pasta', value: 'pasta' }
  ]}
  onChange={({ value }) => console.log(value)}
/>
```

#### Event callbacks

```
<RadioGroup
  label="What's your favorite food?"
  disabled
  radios={[
    { label: 'Burrito', value: 'burrito', disabled: true },
    { label: 'Pizza', value: 'pizza' },
    { label: 'Pasta', value: 'pasta' }
  ]}
  onChange={({ value }) => console.log(value)}
  onMouseEnter={() => console.log('mouse entered')}
  onMouseLeave={() => console.log('mouse left')}
/>
```
