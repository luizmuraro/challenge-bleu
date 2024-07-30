import { FormEvent } from 'react'

export interface MetadataFormProps {
  initialData: {
    name: string
    description: string
    external_url: string
  }
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}
