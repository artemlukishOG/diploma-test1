import React from 'react';

const Categories = React.memo(
    function Categories ({ activeCategory, items, onClickCategory }) {

        
    
        
        return (
            <div>
                <div className="categories">
                  <ul>
                    <li onClick={() => onClickCategory(null)}
                    className={activeCategory === null ? 'active' : ''}
                     >
                        Все
                        </li>
                    {items &&
                        items.map((name, index) => (
                        <li  
                        className={activeCategory === index ? 'active' : ''} 
                        onClick={() => onClickCategory(index)} 
                        key={`$(name)_$(index)`}>
                            {name}
                            </li>))
                    }
                    
                  </ul>
                </div>
            </div>
        );
    }
)

export default Categories;


