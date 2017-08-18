```
<FormLayout>
  {({ FormContainer, FormGroup, FormField }) =>
    <FormContainer>
      <FormField>
        <TextField label="Name" placeholder="Doc Brown" />
      </FormField>

      <FormGroup>
        <FormField>
          <TextField label="Name" placeholder="Doc Brown" />
        </FormField>

        <FormField>
          <TextField label="Name" placeholder="Doc Brown" />
        </FormField>
      </FormGroup>

      <FormGroup>
        <FormField span={2}>
          <TextField label="Name" placeholder="Doc Brown" />
        </FormField>

        <FormField>
          <TextField label="Name" placeholder="Doc Brown" />
        </FormField>

        <FormField>
          <TextField label="Name" placeholder="Doc Brown" />
        </FormField>
      </FormGroup>

      <FormField>
        <Checkbox label="Name" />
      </FormField>
    </FormContainer>
  }
</FormLayout>
```