### Examples

#### Default Stars
```
<Stars rating={3.4} onChange={value => alert(`Changed value to ${value}`)} />
```

#### Custom Color
```
<Stars
   rating={3.4}
   activeColor="#0071CE"
   onChange={value => alert(`Changed value to ${value}`)}
/>
```

#### More Than 5 Stars
```
<Stars
   rating={7.5}
   count={10}
   onChange={value => alert(`Changed value to ${value}`)}
/>
```
