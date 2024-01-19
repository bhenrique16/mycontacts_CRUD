import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";

export default function NewContact() {
  return (

    <>
      <PageHeader title="Novo contato" />
      <Input type="text" placeholder="nome" />
      <Select>
        <option value="123">Instagram </option>
      </Select>
    </>
  )
};
