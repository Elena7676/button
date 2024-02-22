import './App.css';
export function Button({ propSetIsActive, propIsActive }) {
    const changeClass = () => {
        propSetIsActive(!propIsActive)
    }
    return (
        <div>
            <div>
                <button 
                className={propIsActive ? 'active' : 'default'} 
                onClick={changeClass}>Click</button>
            </div>
            
        </div>


    )
}