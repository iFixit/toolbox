### Examples

#### Standard Button

```
<Button>Button</Button>
```

#### Button designs

```
<Button>Default</Button>
```

```
<Button design="primary">Primary</Button>
```

```
<Button design="outline">Outline</Button>
```

```
<Button design="plain">Plain</Button>
```

#### Icon Buttons

```
<Button design="primary">
  <Icon name="check" />
  <span>Button</span>
</Button>
```

```
<Button>
  <span>Button</span>
  <Icon name="arrow-right" />
</Button>
```

```
<Button design="outline">
  <Icon name="search" />
</Button>
```

#### Button sizes

```
<Button size="small">Small</Button>
```

```
<Button>Medium</Button>
```

```
<Button size="large">Large</Button>
```

#### Full-width Button

```
<Button fullWidth>Full-width</Button>
```

#### Disabled Button

```
<Button disabled>Disabled</Button>
```

#### onClick callback

```
<Button onClick={() => console.log('clicked')}>Click me</Button>
```

#### Link

```
<Button href="https://ifixit.com" target="_blank">Go to iFixit.com</Button>
```
