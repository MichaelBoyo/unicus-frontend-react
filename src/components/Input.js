
const Input = ({ name, type }) => {
    return (
        <div >
           <input name={name} type={type} placeholder={name}/>
           <br/>< br/>
         </div>
    );
  };
  
  export default Input;