### Child Callback Function

`FormLayout` accepts a function as a child prop to render the contents of the form. `FormLayout` passes an object with three components as an argument to child function: `{ FormContainer, FormGroup, FormField }`.

#### **FormContainer**

`FormContainer` must wrap all of the form components in the child callback function.

#### **FormGroup**

Use `FormGroup` to show multiple fields horizontally when it’s appropriate such as when displaying city, region, and postal/zip code fields.

#### **FormField**

`FormField` must wrap every field in the form.

**Props**

| Prop Name | Type | Default | Description |
| --- | --- | ---| --- |
| `span` | `number` | `1` | `Span` represents the proportion of horizontal space the field will fill relative the rest of the fields in the `FormGroup`. For example, let's say there are two `FormField`s in a `FormGroup`. The first `FormField` has a `span` of `1` and the second has a `span` of `2`. The first `FormField` will fill `1/3` of the available horizontal space. The second `FormField` will fill `2/3` of the available horizontal space. |



### Examples

#### Log in form

```
<FormLayout>
  {({ FormContainer, FormField }) =>
    <FormContainer>
      <FormField>
        <TextField label="Email" value="cole@ifixit.com" />
      </FormField>

      <FormField>
        <TextField label="Password" type="password" value="password" />
      </FormField>
    </FormContainer>
  }
</FormLayout>
```

#### Contact info form

```
<FormLayout>
  {({ FormContainer, FormGroup, FormField }) =>
    <FormContainer>
      <FormGroup>
        <FormField>
          <TextField label="First Name" placeholder="Doc" />
        </FormField>

        <FormField>
          <TextField label="Last Name" placeholder="Brown" />
        </FormField>
      </FormGroup>

      <FormGroup>
        <FormField span={3}>
          <TextField label="Email" placeholder="doc@ifixit.com" />
        </FormField>

        <FormField span={2}>
          <TextField label="Phone Number" placeholder="123 456 7890" />
        </FormField>

        <FormField>
          <TextField label="Ext" placeholder="123" />
        </FormField>
      </FormGroup>

      <FormField>
        <Checkbox label="Keep me up on iFixit news" checked />
      </FormField>
    </FormContainer>
  }
</FormLayout>
```