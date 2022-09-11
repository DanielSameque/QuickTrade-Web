import { Form } from "@unform/web"
import UnTextField from "../../../../layouts/UnTextField"

export const ContasForm = () => {
  return (
    <Form onSubmit={(a) => console.log(a)}>
      <UnTextField name='conta' />
      <UnTextField name='tipo' />
      <UnTextField name='boleto' />
      <UnTextField name='obs1' />
      <button type='submit'>Submit</button>
    </Form>
  )
}
export default ContasForm