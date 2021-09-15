import Creatable from 'react-select/creatable';
import fetchEditions from './fetchEditions';
const LangsSelect = (props) => {
    const options = [] // options data will be pushed here
    fetchEditions()
    .then(data => {
        return data.map(ele => {
            const option = { // set the value and label for the option
                value: ele.name,
                label: `${ele.language} - ${ele.author}`
            }
            options.push(option);
        })
    })
    .catch(err => {
        console.log(err.message);
    })
return (// create select element and its options
    <Creatable options={options} onChange={props.onChange} /> 

)
}
export default LangsSelect;
