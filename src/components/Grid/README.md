### Examples

#### Log in form

```
<Grid>
  {({ GridContainer, GridCell }) =>
    <GridContainer>
      <GridCell>
        <TextField label="Email" value="cole@ifixit.com" />
      </GridCell>

      <GridCell>
        <TextField label="Password" type="password" value="password" />
      </GridCell>
    </GridContainer>
  }
</Grid>
```

#### Contact info form

```
<Grid>
  {({ GridContainer, GridRow, GridCell }) =>
    <GridContainer>
      <GridRow>
        <GridCell>
          <TextField label="First Name" placeholder="Doc" />
        </GridCell>

        <GridCell>
          <TextField label="Last Name" placeholder="Brown" />
        </GridCell>
      </GridRow>

      <GridRow>
        <GridCell span={3}>
          <TextField label="Email" placeholder="doc@ifixit.com" />
        </GridCell>

        <GridCell span={2}>
          <TextField label="Phone Number" placeholder="123 456 7890" />
        </GridCell>

        <GridCell>
          <TextField label="Ext" placeholder="123" />
        </GridCell>
      </GridRow>

      <GridCell>
        <Checkbox label="Keep me up on iFixit news" checked />
      </GridCell>
    </GridContainer>
  }
</Grid>
```

### Child Callback Function

`Grid` accepts a function as a child prop to render the contents of the grid. `Grid` passes an object with three components as an argument to child function: `{ GridContainer, GridRow, GridCell }`.

#### **GridContainer**

`GridContainer` must wrap all of the components in the child callback function.

#### **GridRow**

Use `GridRow` to show multiple cells horizontally.

#### **GridCell**

`GridCell` must wrap every cell in the grid.

**Props**

| Prop Name | Type | Default | Description |
| --- | --- | ---| --- |
| `span` | `number` | `1` | `Span` represents the proportion of horizontal space the field will fill relative the rest of the `GridCell`s in the `GridRow`. For example, let's say there are two `GridCell`s in a `GridRow`. The first `GridCell` has a `span` of `1` and the second has a `span` of `2`. The first `GridCell` will fill `1/3` of the available horizontal space. The second `GridCell` will fill `2/3` of the available horizontal space. |
