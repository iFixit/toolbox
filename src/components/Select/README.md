### Examples

#### Standard Select

```
<Select
  label="What's your favorite food?"
  options={[
    { label: 'Burrito', value: 'burrito' },
    { label: 'Pizza', value: 'pizza' },
    { label: 'Pasta', value: 'pasta' },
  ]}
  onChange={({ value }) => console.log(value)}
/>
```
