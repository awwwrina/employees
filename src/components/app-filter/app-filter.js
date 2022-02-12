import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
            className="btn btn-light"
            type="button">
                Все сотрудники 
            </button>

            <button 
            className="btn btn-outline-light"
            type="button">
                С печенькой :)
            </button>

            <button 
            className="btn btn-outline-light"
            type="button">
                Без печеньки, но с ЗП > 1000$
            </button>
        </div>
    );
}

export default AppFilter;