import Creatable from 'react-select/creatable';
import languages from '../data';
const LangsSelect = (props) => {
    const options = []
    languages.map((ele) => {
        const option = {
            value: ele,
            label: ele
        }
        return options.push(option)
        
    })
return (
    <Creatable options={options} onChange={props.onChange} />

)
}
export default LangsSelect;
