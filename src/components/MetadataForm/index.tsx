import { MetadataFormProps } from '@/components/MetadataForm/types'
import { useCallback, useState } from 'react'
import {
  Button,
  FormField,
  FormWrapper,
  Input,
  Label,
  TextArea,
} from './styles'

const MetadataForm = ({ initialData, onSubmit }: MetadataFormProps) => {
  const [formData, setFormData] = useState({
    name: initialData.name,
    description: initialData.description,
    external_url: initialData.external_url,
  })

  const handleChange = useCallback((e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }, [])

  return (
    <FormWrapper>
      <form onSubmit={(e) => onSubmit(e)}>
        <FormField>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Label htmlFor="description">Description:</Label>
          <TextArea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Label htmlFor="external_url">External URL:</Label>
          <Input
            id="external_url"
            name="external_url"
            value={formData.external_url}
            onChange={handleChange}
          />
        </FormField>
        <Button type="submit">Submit</Button>
      </form>
    </FormWrapper>
  )
}

export default MetadataForm
