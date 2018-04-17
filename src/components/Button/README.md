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
<Button design="secondary">Secondary</Button>
```

```
<Button design="outline">Outline</Button>
```

```
<Button design="plain">Plain</Button>
```

### Icon buttons

```
<Button>
  <Icon name="heart" size={16} />
  <span>Icon left</span>
</Button>
```

```
<Button>
  <span>Icon right</span>
  <Icon name="search" size={16} />
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
