
interface FormItemProps {
    htmlFor: string;
    label: string;
    type: string;
    placeholder: string;
}
const FormItem: React.FC<FormItemProps> = ({ label,htmlFor, type, placeholder }) => {

  return (
    <div className="flex flex-col md:flex-row md:items-center mb-6">
        <label
            className="label_form_small"
            htmlFor={htmlFor}
        >
            {label}
        </label>
        <div className="md:w-2/3">
            <input
                className="input_form_small"
                id={htmlFor}
                type={type}
                placeholder={placeholder}
            />
        </div>
    </div>
  )
}

export default FormItem
