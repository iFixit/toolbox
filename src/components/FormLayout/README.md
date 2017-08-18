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